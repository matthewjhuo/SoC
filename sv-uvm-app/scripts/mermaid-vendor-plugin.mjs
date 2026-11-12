import { build } from 'esbuild';
import path from 'node:path';

// Isolate Mermaid's large diagram graph from Rollup's Windows build crash.
// Keep all diagram types available locally, including when offline.
export function mermaidVendorPlugin() {
    let root;
    return {
        name: 'local-mermaid-vendor',
        configResolved(config) { root = config.root; },
        async buildStart() {
            await build({
                absWorkingDir: root,
                entryPoints: { mermaid: 'mermaid' },
                bundle: true,
                format: 'esm',
                outdir: path.join(root, 'public/vendor/mermaid'),
                splitting: true,
                minify: true,
                target: 'es2020'
            });
        }
    };
}
