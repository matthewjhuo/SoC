import fs from 'fs';
import * as cheerio from 'cheerio';

const MD_PATH = '../chipverify.md';
const OUT_PATH = './src/data/chipverifyCourses.js';

async function main() {
    console.log("Starting ChipVerify mass scraper...");

    // Read the list of URLs from chipverify.md
    const text = fs.readFileSync(MD_PATH, 'utf8');
    const urls = text.split('\n').map(l => l.trim()).filter(l => l.startsWith('http'));

    console.log(`Found ${urls.length} URLs to scrape!`);

    let chapters = [];

    // Process sequentially but we can add minor delay to not DDOS
    let count = 1;
    for (const url of urls) {
        console.log(`[${count}/${urls.length}] Fetching ${url}`);
        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                console.error(`Failed to fetch ${url} - Status: ${resp.status}`);
                continue;
            }

            const html = await resp.text();
            const $ = cheerio.load(html);

            // Extract title (usually within <h1> tags or <title>)
            let title = $('h1').first().text().trim();
            if (!title) {
                title = $('title').text().split('|')[0].trim();
            }
            if (!title) title = `SystemVerilog Chapter ${count}`;

            // We typically look for the main content container. For chipverify, it could be <div class="content"> or similar.
            // A generic approach: find elements inside the main tag or div with class 'main-content'.
            // Let's just snag paragraphs, h2/h3, and pre/code inside the article or standard main content area.

            let mainNode = $('article, .post-content, .entry-content, .content, main').first();
            if (mainNode.length === 0) mainNode = $('body'); // fallback

            let sections = [];
            let currentSection = { title: 'Introduction', content: '', code: null, lang: 'verilog' };

            // Parse children of main container
            mainNode.find('h2, h3, p, pre').each((i, el) => {
                const tag = el.tagName.toLowerCase();
                if (tag === 'h2' || tag === 'h3') {
                    // Push old section if it has content
                    if (currentSection.content.length > 5 || currentSection.code) {
                        currentSection.content = currentSection.content.trim();
                        sections.push({ ...currentSection });
                    }
                    // Start new section
                    currentSection = {
                        title: $(el).text().trim() || 'Section',
                        content: '',
                        code: null,
                        lang: 'verilog'
                    };
                } else if (tag === 'p') {
                    currentSection.content += $(el).text().trim() + '\n\n';
                } else if (tag === 'pre') {
                    // Pre code
                    const codeText = $(el).text().trim();
                    if (codeText && !currentSection.code) {
                        currentSection.code = codeText;
                    } else if (codeText) {
                        // if we already have code in this section, we push current and make a new section
                        if (currentSection.content.length > 5 || currentSection.code) {
                            currentSection.content = currentSection.content.trim();
                            sections.push({ ...currentSection });
                        }
                        currentSection = {
                            title: 'Code Example',
                            content: '',
                            code: codeText,
                            lang: 'verilog'
                        };
                    }
                }
            });

            // push last
            if (currentSection.content.trim().length > 5 || currentSection.code) {
                currentSection.content = currentSection.content.trim();
                sections.push({ ...currentSection });
            }

            if (sections.length === 0) {
                sections.push({ title: 'Overview', content: title });
            }

            chapters.push({
                id: `cv-sv-${count}`,
                num: count,
                title: title,
                desc: 'A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.',
                sections: sections
            });

        } catch (e) {
            console.error(`Error scraping ${url}: ${e}`);
        }

        count++;
        // Be nice to the server
        await new Promise(r => setTimeout(r, 200));
    }

    // Construct final course
    const chipverifyCourses = [
        {
            courseId: 'chipverify-masterclass',
            courseName: 'ChipVerify: SystemVerilog 課程精華 (97 單元全集)',
            icon: 'BookOpenCheck',
            color: 'var(--color-accent-teal)',
            chapters: chapters
        }
    ];

    const jsCode = `export const chipverifyCourses = ${JSON.stringify(chipverifyCourses, null, 4)};\n`;
    fs.writeFileSync(OUT_PATH, jsCode, 'utf8');
    console.log(`Generated massive ChipVerify collection into ${OUT_PATH}`);
}

main();
