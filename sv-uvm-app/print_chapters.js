import fs from 'fs';
import path from 'path';

const bookPath = path.resolve('../SoCDesign_referencebook.md');
const content = fs.readFileSync(bookPath, 'utf8');
const lines = content.split('\n');

const chapterMeta = [];

lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (/^(CHAPTER\s+\d+|###\s+\*\*CHAPTER\s+\d+|##\s+CHAPTER\s+\d+|#####\s+\*\*<u>\d+)/i.test(trimmed)) {
        chapterMeta.push({ lineNum: idx + 1, text: trimmed });
    } else if (/^Chapter\s+\d+\s*\|\s*/i.test(trimmed)) {
        // footer/headers
    } else if (/^Chapter\s+\d+/i.test(trimmed) && trimmed.length < 80) {
        chapterMeta.push({ lineNum: idx + 1, text: trimmed });
    }
});

// Sort by line number
chapterMeta.sort((a, b) => a.lineNum - b.lineNum);

console.log('Chapters found:');
chapterMeta.forEach(c => console.log(`Line ${c.lineNum}: ${c.text}`));
