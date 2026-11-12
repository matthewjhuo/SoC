import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execFile, spawn } from 'child_process'
import fs from 'fs'
import path from 'path'
import { pwaPlugin } from './scripts/pwa-plugin.mjs'
import { mermaidVendorPlugin } from './scripts/mermaid-vendor-plugin.mjs'

// API Plugin for a local Icarus Verilog environment. This is deliberately a
// development-only convenience endpoint, not a sandbox for untrusted users.
function localEdaApi() {
  const maxRequestBytes = 256 * 1024
  const commandTimeoutMs = 10_000
  let simulationInProgress = false

  const sendJson = (res, statusCode, payload) => {
    res.statusCode = statusCode
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify(payload))
  }

  return {
    name: 'local-eda-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/compile' && req.method === 'POST') {
          if (simulationInProgress) {
            sendJson(res, 429, { success: false, log: 'A simulation is already running. Please try again shortly.' })
            return
          }

          let body = ''
          let bodyBytes = 0
          let bodyTooLarge = false
          req.on('data', chunk => {
            bodyBytes += chunk.length
            if (bodyBytes > maxRequestBytes) {
              bodyTooLarge = true
              return
            }
            body += chunk.toString('utf8')
          })
          req.on('end', () => {
            if (bodyTooLarge) {
              sendJson(res, 413, { success: false, log: 'Source code exceeds the 256 KiB limit.' })
              return
            }

            try {
              const payload = JSON.parse(body)
              const code = typeof payload.code === 'string' ? payload.code : ''
              if (!code.trim()) {
                sendJson(res, 400, { success: false, log: 'Please provide Verilog/SystemVerilog source code.' })
                return
              }

              simulationInProgress = true
              const simDir = path.join(process.cwd(), 'sim_workspace')
              if (!fs.existsSync(simDir)) fs.mkdirSync(simDir)

              fs.writeFileSync(path.join(simDir, 'tb.v'), code, 'utf8')
              execFile('iverilog', ['-g2012', '-o', 'tb.vvp', 'tb.v'], {
                cwd: simDir,
                timeout: commandTimeoutMs,
                maxBuffer: maxRequestBytes
              }, (compileError, compileOut, compileErr) => {
                if (compileError) {
                  simulationInProgress = false
                  sendJson(res, 400, { success: false, log: compileErr || compileOut || compileError.message })
                  return
                }

                execFile('vvp', ['tb.vvp'], {
                  cwd: simDir,
                  timeout: commandTimeoutMs,
                  maxBuffer: maxRequestBytes
                }, (simulationError, simulationOut, simulationErr) => {
                  simulationInProgress = false
                  const output = `${compileOut}\n${simulationOut}`.trim()
                  const errors = `${compileErr}\n${simulationErr}`.trim()
                  sendJson(res, simulationError ? 400 : 200, {
                    success: !simulationError,
                    log: output + (errors ? `\n${errors}` : '')
                  })
                })
              })
            } catch (error) {
              simulationInProgress = false
              sendJson(res, 400, { success: false, log: error.message })
            }
          })
          return
        }

        if (req.url === '/api/gtkwave' && req.method === 'POST') {
          const simDir = path.join(process.cwd(), 'sim_workspace')
          if (!fs.existsSync(path.join(simDir, 'dump.vcd'))) {
            sendJson(res, 404, { success: false, error: 'VCD waveform not found. Please simulate first.' })
            return
          }

          const process = spawn('gtkwave', ['dump.vcd'], {
            cwd: simDir,
            detached: true,
            stdio: 'ignore'
          })
          process.unref()
          sendJson(res, 200, { success: true, message: 'GTKWave launched on host machine.' })
          return
        }

        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), localEdaApi(), mermaidVendorPlugin(), pwaPlugin()],
  // Do not expose the local simulation endpoint on the network by default.
  server: { host: '127.0.0.1' },
  build: {
    minify: true,
    sourcemap: false
  }
})
