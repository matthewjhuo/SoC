import fs from 'fs';
import path from 'path';

const bookPath = path.resolve('../SoCDesign_referencebook.md');
console.log('Reading from:', bookPath);

const content = fs.readFileSync(bookPath, 'utf8');
const lines = content.split('\n');

const chapterPositions = [];

lines.forEach((line, idx) => {
    if (line.includes('CHAPTER ') || line.includes('Chapter 1') || line.includes('Chapter 2') || line.includes('Chapter 7')) {
        if (line.trim().length < 100) {
            chapterPositions.push({ lineNum: idx + 1, content: line.trim() });
        }
    }
});

console.log('Found chapter lines:', chapterPositions.slice(0, 50));
