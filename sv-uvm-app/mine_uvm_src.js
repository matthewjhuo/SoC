const fs = require('fs');
const path = require('path');

const uvmSrcDir = "C:\\Users\\卓\\Desktop\\antigravity\\SoC\\UVM-1800.2-2020.3.1\\1800.2-2020.3.1\\src";
const targetFiles = [
    "base/uvm_component.svh",
    "base/uvm_object.svh",
    "base/uvm_phase.svh",
    "base/uvm_config_db.svh",
    "seq/uvm_sequence_base.svh",
    "macros/uvm_message_defines.svh"
];

function extractSnippets() {
    const snippets = [];
    targetFiles.forEach(subPath => {
        const fullPath = path.join(uvmSrcDir, subPath);
        if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const lines = content.split('\n');

            // We will capture random continuous 10-line blocks that look like real code (not just comments)
            let currentChunk = [];
            let capture = false;
            let captureCount = 0;

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                if (line.startsWith('virtual class') || line.startsWith('class ') || line.startsWith('extern ') || line.startsWith('function ') || line.startsWith('task ')) {
                    if (!line.includes('//')) {
                        snippets.push({
                            file: subPath,
                            code: line,
                            desc: `Extracted standard signature from ${subPath}`
                        });
                    }
                }
            }
        }
    });

    // Select top 30 interesting snippets randomly but deterministically
    const filtered = snippets.filter(s => s.code.length > 20).slice(0, 50);

    const jsData = `export const rawUvmSrc = ${JSON.stringify(filtered, null, 2)};`;
    fs.writeFileSync('C:\\Users\\卓\\Desktop\\antigravity\\SoC\\sv-uvm-app\\src\\data\\rawUvmSrc.js', jsData, 'utf8');
    console.log(`Extracted ${filtered.length} snippets from UVM official library.`);
}

extractSnippets();
