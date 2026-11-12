import { socChapters } from './sv-uvm-app/src/data/socChapters.js';

let errors = [];

function assert(condition, message) {
    if (!condition) {
        errors.push(message);
    }
}

// 1. Verify Chapter count
assert(socChapters.length === 11, `Expected exactly 11 chapters, got ${socChapters.length}`);

socChapters.forEach((ch, index) => {
    const chNum = index + 1;

    // 2. Verify Chapter basic metadata
    assert(ch.id === `soc-ch${chNum}`, `Chapter at index ${index} should have id 'soc-ch${chNum}', got '${ch.id}'`);
    assert(ch.num === chNum, `Chapter at index ${index} should have num ${chNum}, got ${ch.num}`);
    assert(ch.group === "SoC 系統設計 (SoC System Design)", `Expected group 'SoC 系統設計 (SoC System Design)', got '${ch.group}'`);
    assert(typeof ch.title === 'string' && ch.title.length > 5, `Chapter ${ch.id} title missing or too short`);
    assert(typeof ch.desc === 'string' && ch.desc.length > 10, `Chapter ${ch.id} desc missing or too short`);

    assert(Array.isArray(ch.sections) && ch.sections.length > 0, `Chapter ${ch.id} sections should be a non-empty array`);
    if (Array.isArray(ch.sections)) {
        ch.sections.forEach((sec, sIdx) => {
            assert(typeof sec.title === 'string' && sec.title.length > 2, `Chapter ${ch.id} Sec ${sIdx} title missing or too short`);
            const hasContent = typeof sec.content === 'string' && sec.content.length > 10;
            const hasCode = typeof sec.code === 'string' && sec.code.length > 10;
            assert(hasContent || hasCode, `Chapter ${ch.id} Sec ${sIdx} must have either content or code`);
            if (sec.code) {
                assert(typeof sec.lang === 'string' && sec.lang.length > 0, `Chapter ${ch.id} Sec ${sIdx} code block has missing language tag`);
            }
        });
    }

    // 4. Verify Quizzes
    assert(Array.isArray(ch.quiz), `Chapter ${ch.id} quiz should be an array`);
    if (Array.isArray(ch.quiz)) {
        assert(ch.quiz.length === 10, `Chapter ${ch.id} should have exactly 10 quizzes, got ${ch.quiz.length}`);
        ch.quiz.forEach((q, qIdx) => {
            const qPrefix = `Chapter ${ch.id} Quiz ${qIdx + 1}`;

            // Question text
            assert(typeof q.question === 'string' && q.question.trim().length > 5, `${qPrefix}: Question is missing or too short`);

            // Options format
            assert(Array.isArray(q.options) && q.options.length === 4, `${qPrefix}: Options must be an array of length 4`);
            if (Array.isArray(q.options)) {
                // Unique options check
                const uniqueOpts = new Set(q.options.map(o => o.trim()));
                assert(uniqueOpts.size === 4, `${qPrefix}: Contains duplicate options: ${JSON.stringify(q.options)}`);

                // Option values
                q.options.forEach((opt, oIdx) => {
                    assert(typeof opt === 'string' && opt.trim().length > 0, `${qPrefix} Opt ${oIdx + 1}: Option is empty`);
                });
            }

            // Correct answer check
            assert(typeof q.answer === 'number' && q.answer >= 0 && q.answer <= 3, `${qPrefix}: Answer index must be 0, 1, 2, or 3. Got ${q.answer}`);

            // Explanation text
            assert(typeof q.explanation === 'string' && q.explanation.trim().length > 5, `${qPrefix}: Explanation is missing or too short`);
        });
    }
});

if (errors.length > 0) {
    console.error(`❌ Validation FAILED with ${errors.length} errors:`);
    errors.forEach((err, idx) => {
        console.error(`  ${idx + 1}. ${err}`);
    });
    process.exit(1);
} else {
    console.log("✅ All 11 SoC chapters, sections, code templates and 110 quizzes PASSED automated validation successfully!");
}
