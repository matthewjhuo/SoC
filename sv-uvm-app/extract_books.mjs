import fs from 'fs';
import path from 'path';

const outPath = 'C:\\Users\\卓\\Desktop\\antigravity\\SoC\\sv-uvm-app\\src\\data\\bookKnowledge.js';
const files = [
    'C:\\Users\\卓\\Desktop\\antigravity\\SoC\\芯片验证漫游指南.md',
    'C:\\Users\\卓\\Desktop\\antigravity\\SoC\\UVM实战 卷Ⅰ.md'
];

let bookChunks = [];

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.warn(`File not found: ${file}`);
        continue;
    }
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    let currentParagraph = [];

    for (let line of lines) {
        line = line.trim();
        // Ignore headers, lists, code blocks, empty lines, and very short lines
        if (line.length === 0 || line.startsWith('#') || line.startsWith('-') || line.startsWith('```') || line.startsWith('|') || line.length < 20) {
            if (currentParagraph.length > 0) {
                const text = currentParagraph.join(' ');
                // Only keep chunks that are substantial (e.g > 150 chars) but not massively unreadable (> 1500 chars)
                if (text.length > 150 && text.length < 1500) {
                    // strip html tags if any
                    const clean = text.replace(/<\/?[^>]+(>|$)/g, "");
                    bookChunks.push(clean);
                }
                currentParagraph = [];
            }
        } else {
            currentParagraph.push(line);
        }
    }
}

console.log(`Extracted ${bookChunks.length} high-quality technical paragraphs from books.`);

// Save to JS module
const content = `export const bookKnowledge = ${JSON.stringify(bookChunks, null, 2)};\n`;
fs.writeFileSync(outPath, content, 'utf8');
console.log(`Knowledge extracted to ${outPath}`);
