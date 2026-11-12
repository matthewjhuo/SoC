const fs = require('fs');
let content = fs.readFileSync('src/data/extendedCourses.js', 'utf8');

const targetStr = "{ title: '覆蓋率對應 (Coverage Mapping)', content: '將每一個提取出的 Feature 映射到具體的 Coverpoint（功能覆蓋率）或 Assertion（斷言），確保「有驗證到的都有被記錄」。' }";

const replacementStr = targetStr + ",\n              { title: 'vPlan 範例 (CSV/Test Plan 格式)', code: \"Feature ID, Description, Verification Method, Coverage Goal\\nF_ALU_01, ADD instruction functionality, Directed Test + Random, 100%\", lang: 'text' }";

content = content.replace(targetStr, replacementStr);
fs.writeFileSync('src/data/extendedCourses.js', content, 'utf8');
console.log('Patch complete.');
