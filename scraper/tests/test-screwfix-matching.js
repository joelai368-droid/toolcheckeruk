#!/usr/bin/env node
/**
 * Test helper for Screwfix model matching logic.
 * Run: node scraper/tests/test-screwfix-matching.js
 *
 * Tests normalizeModel() and modelMatchesText() without network access.
 */

const { _test } = require('../parsers/screwfix');
const { normalizeModel, modelMatchesText } = _test;

let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) {
    passed++;
  } else {
    failed++;
    console.error(`  FAIL: ${label}`);
  }
}

// --- normalizeModel ---
console.log('normalizeModel:');

assert(normalizeModel('M18 FPD3-0') === 'm18fpd3', 'M18 FPD3-0 → m18fpd3');
assert(normalizeModel('M18 ONEFSZ-0X') === 'm18onefsz', 'M18 ONEFSZ-0X → m18onefsz');
assert(normalizeModel('M18 FID3-0') === 'm18fid3', 'M18 FID3-0 → m18fid3');
assert(normalizeModel('M18 FCS66-0') === 'm18fcs66', 'M18 FCS66-0 → m18fcs66');
assert(normalizeModel('M18 FHSAG125XPDB-0') === 'm18fhsag125xpdb', 'M18 FHSAG125XPDB-0 → m18fhsag125xpdb');
assert(normalizeModel('M18 FN18GS-0') === 'm18fn18gs', 'M18 FN18GS-0 → m18fn18gs');
assert(normalizeModel('M18 BP-0') === 'm18bp', 'M18 BP-0 → m18bp');
assert(normalizeModel('M12 FHIR14-0') === 'm12fhir14', 'M12 FHIR14-0 → m12fhir14');
assert(normalizeModel('M18 FPD3-502X') === 'm18fpd3', 'M18 FPD3-502X → m18fpd3 (kit suffix stripped)');

console.log('');

// --- modelMatchesText: correct matches ---
console.log('modelMatchesText (should match):');

const m1 = normalizeModel('M18 FID3-0');
assert(modelMatchesText(m1, 'milwaukee-m18fid3-0-fuel-18v-li-ion'), 'FID3 in URL slug');
assert(modelMatchesText(m1, 'Milwaukee M18FID3-0 FUEL Impact Driver'), 'FID3 in title');
assert(modelMatchesText(m1, 'Milwaukee M18 FID3-502X FUEL Impact Driver'), 'FID3 with different suffix');

const m2 = normalizeModel('M18 ONEFSZ-0X');
assert(modelMatchesText(m2, 'milwaukee-m18onefsz-0x-18v-li-ion'), 'ONEFSZ in URL');

const m3 = normalizeModel('M18 BP-0');
assert(modelMatchesText(m3, 'milwaukee-m18-bp-0-18v-li-ion-cordless-planer'), 'BP in URL with hyphens');

const m4 = normalizeModel('M18 FFN-0');
assert(modelMatchesText(m4, 'milwaukee-m18ffn-0c-3-3mm-18v'), 'FFN in URL (followed by digit suffix)');

console.log('');

// --- modelMatchesText: wrong matches that must be REJECTED ---
console.log('modelMatchesText (should NOT match):');

const mFJS = normalizeModel('M18 FJS-0');
assert(!modelMatchesText(mFJS, 'milwaukee-m18-fsag115xb-0-18v'), 'FJS must NOT match FSAG115XB URL');

const mFMT = normalizeModel('M18 FMT-0');
assert(!modelMatchesText(mFMT, 'milwaukee-m18-fsag115xb-0-18v'), 'FMT must NOT match FSAG115XB URL');

const mBPD = normalizeModel('M18 BPD-0');
assert(!modelMatchesText(mBPD, 'milwaukee-m18-fsag115xb-0-18v'), 'BPD must NOT match FSAG115XB URL');

const mCHX = normalizeModel('M18 CHX-0');
assert(!modelMatchesText(mCHX, 'milwaukee-m18-cdex-0-18v'), 'CHX must NOT match CDEX URL');

const mFN18 = normalizeModel('M18 FN18GS-0');
assert(!modelMatchesText(mFN18, 'milwaukee-m18-fn16gs-0x-64mm'), 'FN18GS must NOT match FN16GS URL');

const mBOS = normalizeModel('M18 BOS125-0');
assert(!modelMatchesText(mBOS, 'milwaukee-18v-li-ion-redlithium-brushless-cordless-power-head'), 'BOS125 must NOT match power-head URL');

// Boundary: prevent prefix matches
const mFHIR14 = normalizeModel('M12 FHIR14-0');
assert(!modelMatchesText(mFHIR14, 'Milwaukee M12 FHIR14LR-0'), 'FHIR14 must NOT match FHIR14LR');
assert(modelMatchesText(mFHIR14, 'Milwaukee M12 FHIR14-0'), 'FHIR14 should match FHIR14-0');

console.log('');

// --- Summary ---
console.log(`Results: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
