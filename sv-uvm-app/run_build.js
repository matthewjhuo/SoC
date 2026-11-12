import { spawn } from 'child_process';
import fs from 'fs';

const child = spawn('node', ['--stack-size=16000', 'node_modules/vite/bin/vite.js', 'build'], { shell: true });

const stdoutStream = fs.createWriteStream('build_stdout.log', 'utf8');
const stderrStream = fs.createWriteStream('build_stderr.log', 'utf8');

child.stdout.on('data', (data) => {
    stdoutStream.write(data);
    process.stdout.write(data);
});

child.stderr.on('data', (data) => {
    stderrStream.write(data);
    process.stderr.write(data);
});

child.on('close', (code) => {
    console.log(`\nProcess exited with code ${code}`);
    stdoutStream.end();
    stderrStream.end();
});
