import fs from 'fs';

const filePath = 'c:\\Users\\卓\\Desktop\\antigravity\\SoC\\SoCDesign_referencebook.md';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

let currentChapter = '';
let inCode = false;
let codeBlock = '';
let codeCount = 0;
let results = [];

lines.forEach((line, idx) => {
    // Identify chapter
    const chapMatch = line.match(/chapter\s+(\d+)\s*\|\s*(.*)/i) || line.match(/CHAPTER\s+(\d+)\s*(.*)/i);
    if (chapMatch) {
        currentChapter = `Ch ${chapMatch[1]}: ${chapMatch[2].trim()}`;
    }

    // Identify code blocks
    if (line.trim().startsWith('```')) {
        if (!inCode) {
            inCode = true;
            codeBlock = '';
        } else {
            inCode = false;
            codeCount++;
            if (codeBlock.includes('module') || codeBlock.includes('always') || codeBlock.includes('assign') || codeBlock.includes('input') || codeBlock.includes('output')) {
                results.push({
                    chapter: currentChapter,
                    line: idx + 1,
                    code: codeBlock.trim().slice(0, 150) + '...'
                });
            }
        }
    } else if (inCode) {
        codeBlock += line + '\n';
    }
});

fs.writeFileSync('c:\\Users\\卓\\Desktop\\antigravity\\SoC\\extracted_codes.json', JSON.stringify(results, null, 2));
console.log(`Found ${codeCount} code blocks. Saved results to extracted_codes.json`);
