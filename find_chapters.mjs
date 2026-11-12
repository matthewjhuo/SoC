import fs from 'fs';

const filePath = 'c:\\Users\\卓\\Desktop\\antigravity\\SoC\\SoCDesign_referencebook.md';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

let out = '';
lines.forEach((line, idx) => {
    if (line.match(/^\s*CHAPTER\s+\d+/i) || line.match(/##\s+CHAPTER\s+\d+/i) || line.match(/#\s+CHAPTER\s+\d+/i) || line.match(/chapter\s+\d+\s*\|\s*/i)) {
        out += `Line ${idx + 1}: ${line.trim()}\n`;
    }
});

fs.writeFileSync('c:\\Users\\卓\\Desktop\\antigravity\\SoC\\chapter_lines.txt', out);
