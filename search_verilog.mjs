import fs from 'fs';

const filePath = 'c:\\Users\\卓\\Desktop\\antigravity\\SoC\\SoCDesign_referencebook.md';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

let results = [];
lines.forEach((line, idx) => {
    if (line.includes('module') && (line.includes('input') || line.includes('output') || line.includes('('))) {
        results.push(`Line ${idx + 1}: ${line.trim()}`);
    }
});

fs.writeFileSync('c:\\Users\\卓\\Desktop\\antigravity\\SoC\\module_lines.txt', results.join('\n'));
console.log(`Found ${results.length} module occurrences. Saved to module_lines.txt`);
