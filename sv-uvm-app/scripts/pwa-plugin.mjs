import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

// Generate the worker only for production; never cache Vite's development modules.
export function pwaPlugin() {
    let outDir;
    return {
        name: 'soc-learning-pwa',
        apply: 'build',
        configResolved(config) { outDir = path.resolve(config.root, config.build.outDir); },
        async closeBundle() {
            const walk = async dir => (await Promise.all((await fs.readdir(dir, { withFileTypes: true })).map(async entry => {
                const file = path.join(dir, entry.name);
                return entry.isDirectory() ? walk(file) : [file];
            }))).flat();
            const files = (await walk(outDir)).filter(file => !file.endsWith('.map') && path.basename(file) !== 'sw.js').sort();
            const hash = createHash('sha256');
            for (const file of files) hash.update(path.relative(outDir, file)).update(await fs.readFile(file));
            const urls = files.map(file => '/' + path.relative(outDir, file).split(path.sep).join('/'));
            const source = await fs.readFile(new URL('./sw-template.js', import.meta.url), 'utf8');
            await fs.writeFile(path.join(outDir, 'sw.js'), source
                .replace('__CACHE_NAME__', JSON.stringify('soc-learning-' + hash.digest('hex').slice(0, 16)))
                .replace('__PRECACHE_URLS__', JSON.stringify(urls)));
            console.log(`PWA: ${urls.length} local files prepared for offline use.`);
        }
    };
}
