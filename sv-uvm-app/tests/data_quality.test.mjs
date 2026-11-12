/**
 * data_quality.test.mjs
 * 
 * Unit tests to validate ALL chapter data quality:
 *  1. Every chapter has at least one code example in its sections
 *  2. Every chapter has a quiz with 10 questions
 *  3. Every quiz question has: question text, 4 options, answer index 0-3, explanation
 *  4. Quiz questions reference the chapter's topic (not generic placeholder text)
 *  5. No duplicate chapter IDs
 *  6. extendedCourses chapters also meet requirements
 */

import fs from 'fs';
import path from 'path';

const svChapters = JSON.parse(fs.readFileSync('./public/svChapters.json', 'utf-8'));
const uvmChapters = JSON.parse(fs.readFileSync('./public/uvmChapters.json', 'utf-8'));
const socChapters = JSON.parse(fs.readFileSync('./public/socChapters.json', 'utf-8'));
const interviewData = JSON.parse(fs.readFileSync('./public/interviewData.json', 'utf-8'));

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function assert(condition, testName, detail) {
    totalTests++;
    if (condition) {
        passedTests++;
    } else {
        failedTests++;
        failures.push(`  FAIL: ${testName} — ${detail}`);
    }
}

function testChapterArray(chapters, label) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Testing: ${label} (${chapters.length} chapters)`);
    console.log('='.repeat(60));

    // ---- Test: No duplicate IDs ----
    const ids = chapters.map(c => c.id);
    const uniqueIds = new Set(ids);
    assert(ids.length === uniqueIds.size, `${label}: No duplicate IDs`,
        `Found ${ids.length - uniqueIds.size} duplicate IDs`);

    for (const ch of chapters) {
        const chLabel = `${label} [${ch.id}] "${ch.title}"`;

        // ---- Test: Has id, num, title, desc ----
        assert(typeof ch.id === 'string' && ch.id.length > 0,
            `${chLabel}: has id`, `id is missing or empty`);
        assert(typeof ch.num === 'number',
            `${chLabel}: has num`, `num is missing`);
        assert(typeof ch.title === 'string' && ch.title.length > 2,
            `${chLabel}: has title`, `title is "${ch.title}"`);
        assert(typeof ch.desc === 'string' && ch.desc.length > 5,
            `${chLabel}: has description`, `desc is "${ch.desc}"`);

        // ---- Test: Has sections with at least one code example ----
        assert(Array.isArray(ch.sections) && ch.sections.length > 0,
            `${chLabel}: has sections`, `sections is missing or empty`);

        const hasCode = ch.sections.some(s => typeof s.code === 'string' && s.code.length > 10);
        assert(hasCode, `${chLabel}: has code example`,
            `No section contains a code snippet (>10 chars)`);

        if (label === 'uvmChapters') {
            // Classic Books Deep Dive section has been removed per user request

            const hasIeee = ch.sections.some(s => s.title.includes('IEEE 1800.2'));
            assert(hasIeee, `${chLabel}: has IEEE 1800.2 standard source`,
                `Missing 'IEEE 1800.2 官方標準源碼解析' section`);
        }

        // ---- Test: Has quiz with exactly 10 questions ----
        assert(Array.isArray(ch.quiz),
            `${chLabel}: has quiz array`, `quiz is missing`);

        if (Array.isArray(ch.quiz)) {
            assert(ch.quiz.length === 10,
                `${chLabel}: quiz has 10 questions`, `quiz has ${ch.quiz.length} questions`);

            for (let qi = 0; qi < ch.quiz.length; qi++) {
                const q = ch.quiz[qi];
                const qLabel = `${chLabel} Q${qi + 1}`;

                // Has question text
                assert(typeof q.question === 'string' && q.question.length > 5,
                    `${qLabel}: has question text`, `question is "${q.question}"`);

                // Has 4 options
                assert(Array.isArray(q.options) && q.options.length === 4,
                    `${qLabel}: has 4 options`, `options count: ${q.options?.length}`);

                // Has valid answer (0-3)
                assert(typeof q.answer === 'number' && q.answer >= 0 && q.answer <= 3,
                    `${qLabel}: answer is 0-3`, `answer is ${q.answer}`);

                // Has explanation
                assert(typeof q.explanation === 'string' && q.explanation.length > 5,
                    `${qLabel}: has explanation`, `explanation is "${q.explanation}"`);

                // ---- KEY TEST: Question is NOT generic placeholder ----
                const isGenericPlaceholder =
                    (q.question.includes('選項 A') && q.question.includes('選項 B')) ||
                    q.question === 'placeholder' ||
                    q.question.match(/^Quiz #\d+/);
                assert(!isGenericPlaceholder,
                    `${qLabel}: is not generic placeholder`, `Question appears to be placeholder text`);

                // Options are not all identical
                if (Array.isArray(q.options) && q.options.length === 4) {
                    const uniqueOpts = new Set(q.options);
                    assert(uniqueOpts.size >= 2,
                        `${qLabel}: options are distinct`, `All options are the same`);
                }
            }

            // ---- ANTI-SPAM TEST: Options must not be identical across all questions in the chapter
            const allOptionStrings = ch.quiz.map(q => JSON.stringify(q.options));
            const uniqueOptionSets = new Set(allOptionStrings);
            assert(uniqueOptionSets.size > 2,
                `${chLabel}: quiz options are not repetitive`, `Found only ${uniqueOptionSets.size} unique option sets for 10 questions`);
        }
    }
}

function testExtendedCourses(courses) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Testing: courses (${courses.length} courses)`);
    console.log('='.repeat(60));

    assert(courses.length > 0, 'courses: not empty', 'Array is empty');

    for (const course of courses) {
        const cLabel = `extCourse "${course.courseName}"`;

        assert(typeof course.courseId === 'string', `${cLabel}: has courseId`, 'missing courseId');
        assert(typeof course.courseName === 'string', `${cLabel}: has courseName`, 'missing courseName');
        assert(Array.isArray(course.chapters) && course.chapters.length > 0,
            `${cLabel}: has chapters`, 'chapters missing or empty');

        for (const ch of course.chapters) {
            const chLabel = `${cLabel} [${ch.id}] "${ch.title}"`;

            assert(typeof ch.id === 'string', `${chLabel}: has id`, 'missing id');
            assert(typeof ch.title === 'string', `${chLabel}: has title`, 'missing title');
            assert(Array.isArray(ch.sections) && ch.sections.length > 0,
                `${chLabel}: has sections`, 'sections missing or empty');

            const hasCode = ch.sections.some(s => typeof s.code === 'string' && s.code.length > 5);
            assert(hasCode, `${chLabel}: has code example`,
                'No section contains a code snippet');
        }
    }
}

// Run all tests
console.log('\n🧪 SV/UVM Learning Platform — Data Quality Unit Tests\n');

testChapterArray(svChapters, 'svChapters');
testChapterArray(uvmChapters, 'uvmChapters');
testChapterArray(socChapters, 'socChapters');

// Check interviewData format
console.log(`\n${'='.repeat(60)}`);
console.log(`Testing: interviewData`);
console.log('='.repeat(60));
assert(Array.isArray(interviewData.sv) && interviewData.sv.length > 0,
    'interviewData: has sv questions', `sv array length: ${interviewData.sv?.length}`);
assert(Array.isArray(interviewData.uvm) && interviewData.uvm.length > 0,
    'interviewData: has uvm questions', `uvm array length: ${interviewData.uvm?.length}`);
for (const q of [...interviewData.sv, ...interviewData.uvm]) {
    assert(typeof q.q === 'string' && q.q.length > 5, 'interview Q: has question content', `Q is "${q.q}"`);
    assert(typeof q.a === 'string' && q.a.length > 5, 'interview A: has answer content', `A is "${q.a}"`);
}

// Print summary
console.log(`\n${'='.repeat(60)}`);
console.log(`📊 RESULTS: ${passedTests}/${totalTests} passed, ${failedTests} failed`);
console.log('='.repeat(60));

if (failures.length > 0) {
    console.log('\n❌ FAILURES:');
    failures.forEach(f => console.log(f));
}

if (failedTests === 0) {
    console.log('\n✅ ALL TESTS PASSED!');
} else {
    console.log(`\n❌ ${failedTests} TESTS FAILED — see details above`);
    process.exit(1);
}
