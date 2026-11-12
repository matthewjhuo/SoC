import fs from 'fs';
import path from 'path';

const outPath = 'C:\\Users\\卓\\Desktop\\antigravity\\SoC\\sv-uvm-app\\src\\data\\interviewData.js';
const mdDir = 'C:\\Users\\卓\\Desktop\\antigravity\\SoC';
const mdFiles = fs.readdirSync(mdDir)
    .filter(f => f.includes('interview_questions') || f.includes('interview_handbook') || f.includes('Interview_Questions'))
    .filter(f => f.endsWith('.md'))
    .map(f => {
        let t = 'sv';
        if (f.toLowerCase().includes('uvm')) t = 'uvm';
        return { type: t, file: path.join(mdDir, f) };
    });

const interviewData = { sv: [], uvm: [] };

for (const { type, file } of mdFiles) {
    console.log(`Processing: ${file}`);
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    let currentQ = null;
    let currentA = [];

    for (let line of lines) {
        line = line.trim();
        if (line.match(/^#+\s+\*\*(\d+[\.\)]\s+)?(.*?)\*\*/)) {
            if (currentQ && currentA.length > 0) {
                interviewData[type].push({ q: currentQ, a: currentA.join(' ').replace(/<\/?[^>]+(>|$)/g, "").substring(0, 1000) });
            }
            const qMatch = line.match(/^#+\s+\*\*(\d+[\.\)]\s+)?(.*?)\*\*/);
            currentQ = qMatch[2].replace(/\*/g, '').trim();
            currentA = [];
        } else if (currentQ) {
            if (line.length > 0 && !line.startsWith('```') && !line.startsWith('#')) {
                currentA.push(line);
            }
        }
    }

    if (currentQ && currentA.length > 0) {
        interviewData[type].push({ q: currentQ, a: currentA.join(' ').replace(/<\/?[^>]+(>|$)/g, "").substring(0, 1000) });
    }
}

console.log(`Extracted SV: ${interviewData.sv.length} | UVM: ${interviewData.uvm.length}`);
const content = `export const interviewData = ${JSON.stringify(interviewData, null, 4)};\n`;
fs.writeFileSync(outPath, content, 'utf8');
console.log(`Written to ${outPath}`);
