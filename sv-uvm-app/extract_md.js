const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const basePath = "c:\\Users\\卓\\Desktop\\antigravity\\SoC";

async function extractPdfs() {
    const files = fs.readdirSync(basePath).filter(f => f.toLowerCase().endsWith('.pdf'));
    console.log(`Found ${files.length} pdf files in ${basePath}`);

    for (const doc of files) {
        const pdfPath = path.join(basePath, doc);
        try {
            console.log(`Processing ${doc} ...`);
            const dataBuffer = fs.readFileSync(pdfPath);
            // pdf-parse export might be an object containing the default function
            const pdfFunc = (typeof pdf === 'function') ? pdf : pdf.default || pdf;
            const data = await pdfFunc(dataBuffer);
            const mdPath = path.join(basePath, doc.replace('.pdf', '.md'));
            fs.writeFileSync(mdPath, data.text, 'utf8');
            console.log(`-> Saved to ${mdPath}`);
        } catch (err) {
            console.error(`Error processing ${doc}:`, err.message);
        }
    }
}

extractPdfs();
