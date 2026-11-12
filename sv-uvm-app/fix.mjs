import fs from 'fs';

function fixFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    // It literally says '\n' in the text, so we replace the string "\n" with an actual newline
    content = content.replace(/\\n/g, '\n');
    fs.writeFileSync(file, content);
}

fixFile('src/data/svChapters.js');
fixFile('src/data/uvmChapters.js');
