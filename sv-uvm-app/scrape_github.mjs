import fs from 'fs';
import path from 'path';

const outPath = 'C:\\Users\\卓\\Desktop\\antigravity\\SoC\\sv-uvm-app\\src\\data\\githubCourses.js';
const repos = [
    { dir: 'learn_uvm2017_sv_verilator', id: 'github-uvm', name: 'Official UVM 2017 Learning Path', icon: 'Github', color: 'var(--color-accent-blue)' },
    { dir: 'learn_verilator_iverilog', id: 'github-verilator', name: 'Verilator & iVerilog Masterclass', icon: 'Monitor', color: 'var(--color-accent-pink)' },
    { dir: 'learn_verilog_systemverilog', id: 'github-sv', name: 'SystemVerilog Deep Dive', icon: 'Code', color: 'var(--color-accent-cyan)' },
    { dir: 'EasierUVM', id: 'github-easier-uvm', name: 'Easier UVM', icon: 'Book', color: 'var(--color-accent-green)' },
    { dir: 'axi-uvm', id: 'github-axi-uvm', name: 'AXI UVM Verification', icon: 'Cpu', color: 'var(--color-accent-orange)' },
    { dir: 'core-v-verif', id: 'github-core-v', name: 'CORE-V Verification', icon: 'Shield', color: 'var(--color-accent-purple)' }
];
const baseDir = 'C:\\Users\\卓\\Desktop\\antigravity\\SoC\\sv-uvm-app\\tmp_github';

let courses = [];

for (const repo of repos) {
    const docsDir = path.join(baseDir, repo.dir, 'docs');

    let files = [];
    let searchDir = docsDir;

    if (fs.existsSync(docsDir)) {
        files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md')).sort();
    } else {
        searchDir = path.join(baseDir, repo.dir);
        if (fs.existsSync(path.join(searchDir, 'README.md'))) {
            files = ['README.md'];
        }
    }

    if (files.length === 0) {
        console.warn(`[WARN] No .md files found for ${repo.dir}`);
        continue;
    }

    const chapters = [];
    let chapterNum = 1;
    for (const f of files) {
        if (f.includes('MODULE0')) continue; // skip setup
        const fpath = path.join(searchDir, f);
        const lines = fs.readFileSync(fpath, 'utf8').split('\n');

        let chTitle = `Module ${chapterNum}`;
        let chDesc = '';
        let sections = [];

        let currentSection = null;
        let pText = [];
        let pCode = [];
        let inCode = false;
        let codeLang = '';

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.match(/^#+\s+/)) {
                if (line.startsWith('# ')) {
                    chTitle = line.replace('# ', '').trim();
                } else if (line.startsWith('**Goal**:')) {
                    chDesc = line.replace('**Goal**:', '').trim();
                } else if (line.startsWith('## ') || line.startsWith('### ')) {
                    if (currentSection) {
                        currentSection.content += pText.join('\\n');
                        if (pCode.length > 0) {
                            currentSection.code = pCode.join('\\n');
                            currentSection.lang = codeLang;
                        }
                        sections.push(currentSection);
                    }
                    currentSection = { title: line.replace(/^#+\s+/, '').trim(), content: '' };
                    pText = [];
                    pCode = [];
                    inCode = false;
                }
            } else if (line.startsWith('```')) {
                if (inCode) {
                    inCode = false;
                } else {
                    inCode = true;
                    codeLang = line.replace('```', '').trim() || 'text';
                }
            } else {
                if (inCode) {
                    pCode.push(line.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'"));
                } else {
                    if (currentSection && line.trim() !== '') {
                        pText.push(line.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'"));
                    }
                }
            }
        }

        if (currentSection) {
            currentSection.content += pText.join('\\n');
            if (pCode.length > 0) {
                currentSection.code = pCode.join('\\n');
                currentSection.lang = codeLang;
            }
            sections.push(currentSection);
        }

        // Filter out empty sections
        sections = sections.filter(s => s.content.length > 0 || (s.code && s.code.length > 0));

        // Enforce code presence for high-quality courses
        const hasCode = sections.some(s => typeof s.code === 'string' && s.code.length > 5);
        if (!hasCode) {
            console.warn(`[WARN] Skipping chapter ${chTitle} - no code snippets found`);
            continue;
        }

        // Truncate descriptions and limits to prevent overflowing JSON
        if (sections.length > 20) sections = sections.slice(0, 20); // Keep max 20 sections per module

        chapters.push({
            id: `${repo.id}-ch${chapterNum}`,
            num: chapterNum,
            title: chTitle,
            desc: chDesc || 'Advanced Module Exploration',
            sections: sections
        });
        chapterNum++;
    }

    if (chapters.length > 0) {
        courses.push({
            courseId: repo.id,
            courseName: repo.name,
            icon: repo.icon,
            color: repo.color,
            chapters: chapters
        });
    } else {
        console.warn(`[WARN] Skipping course ${repo.name} - no valid chapters extracted`);
    }
}

// Ensure clean formatting for JS object export
const content = `export const githubCourses = ${JSON.stringify(courses, null, 4)};\n`;

fs.writeFileSync(outPath, content, 'utf8');
console.log(`Generated powerful github courses into ${outPath}`);
