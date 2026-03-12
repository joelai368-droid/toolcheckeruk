#!/usr/bin/env node
/**
 * Test helper for FFX model matching logic.
 * Run: node scraper/tests/test-ffx-matching.js
 *
 * Tests normalizeModel() and modelMatchesText() without network access.
 */

const { _test } = require('../parsers/ffx');
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

// Typical ITS/FFX product URLs from SearchSpring
const m1 = normalizeModel('M18 FPD3-0');
assert(modelMatchesText(m1, 'milwaukee-m18-fpd3-0x-18v-fuel-brushless-combi-drill-body-_milm18fpd30.htm'), 'FPD3 in ITS URL');
assert(modelMatchesText(m1, 'Milwaukee M18 FPD3-0 18V FUEL Brushless Combi Drill - Body'), 'FPD3 in product name');

const m2 = normalizeModel('M18 FJS-0');
assert(modelMatchesText(m2, 'M18FJS-0-Milwaukee-M18-FJS-0X-18V-FUEL-Brushless-Top-Handle-Jigsaw---Body-_MILM18FJS0.htm'), 'FJS in ITS URL');
assert(modelMatchesText(m2, 'Milwaukee M18 FJS-0 18V FUEL Brushless Top Handle Jigsaw - Body'), 'FJS in product name');

const m3 = normalizeModel('M18 FID3-0');
assert(modelMatchesText(m3, 'milwaukee-m18-fid3-0x-18v-fuel-brushless-1-4-impact-driver-body-_milm18fid30.htm'), 'FID3 in ITS URL');

const m4 = normalizeModel('M18 BOS125-0');
assert(modelMatchesText(m4, 'M18BOS125-0-Milwaukee-M18-BOS125-0-18V-125mm-Random-Orbit-Sander---Body-_MILM18BOS1250.htm'), 'BOS125 in ITS URL');

const m5 = normalizeModel('M18 BP-0');
assert(modelMatchesText(m5, 'Milwaukee M18 BP-0 18V Li-ion Cordless Planer'), 'BP in product name');

console.log('');

// --- modelMatchesText: wrong matches that must be REJECTED ---
console.log('modelMatchesText (should NOT match):');

// FHIR14 must not match FHIR14LR (longer variant)
const mFHIR14 = normalizeModel('M12 FHIR14-0');
assert(!modelMatchesText(mFHIR14, 'Milwaukee M12 FHIR14LR-0 12V FUEL Brushless 1/4in High Speed Ratchet - Body'), 'FHIR14 must NOT match FHIR14LR name');
assert(!modelMatchesText(mFHIR14, 'M12-FHIR14LR-0-Milwaukee-M12-FHIR14LR-0-12V-FUEL-Brushless-14in-High-Speed-Ratchet---Body-_MILM12FHIR14LR0.htm'), 'FHIR14 must NOT match FHIR14LR URL');
assert(modelMatchesText(mFHIR14, 'Milwaukee M12 FHIR14-0'), 'FHIR14 should match FHIR14-0');

const mFJS = normalizeModel('M18 FJS-0');
assert(!modelMatchesText(mFJS, 'milwaukee-m18-fsag115xb-0-18v'), 'FJS must NOT match FSAG115XB URL');

const mFMT = normalizeModel('M18 FMT-0');
assert(!modelMatchesText(mFMT, 'milwaukee-m18-fsag115xb-0-18v'), 'FMT must NOT match FSAG115XB URL');

const mFN18 = normalizeModel('M18 FN18GS-0');
assert(!modelMatchesText(mFN18, 'milwaukee-m18-fn16gs-0x-64mm'), 'FN18GS must NOT match FN16GS URL');

// Prefix match protection
const mFH = normalizeModel('M18 FH-0');
assert(!modelMatchesText(mFH, 'Milwaukee M18 FHSAG125XPDB-0'), 'FH must NOT match FHSAG... (prefix)');
assert(modelMatchesText(mFH, 'Milwaukee M18 FH-0 18V FUEL SDS+ Drill'), 'FH should match FH-0');

console.log('');

// --- Summary ---
console.log(`Results: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
