const fs = require('fs');
let text = fs.readFileSync('src/data/extendedCourses.js', 'utf8');

text = text.replace(
    /({ title: '覆蓋率對應 \\(Coverage Mapping\\)', content: '[^']+' }\s*)/g,
    "$1,\n              { title: 'vPlan 範例 (CSV/Test Plan 格式)', code: \"Feature ID, Description, Verification Method, Coverage Goal\\nF_ALU_01, ADD instruction functionality, Directed Test + Random, 100%\", lang: 'text' }"
);

fs.writeFileSync('src/data/extendedCourses.js', text, 'utf8');
console.log('Regex replace done.');
