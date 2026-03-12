#!/usr/bin/env node
/**
 * Test helper for Toolstation model matching logic.
 * Run: node scraper/tests/test-toolstation-matching.js
 *
 * Tests normalizeModel() and modelMatchesText() without network access,
 * plus validates against real Toolstation API response shapes.
 */

const { _test } = require('../parsers/toolstation');
const { normalizeModel, modelMatchesText, extractSpecTokens, shouldTryKeywordFallback, buildKeywordQuery, scoreCandidate } = _test;

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
assert(normalizeModel('M18 FHSAG125XPDB-0') === 'm18fhsag125xpdb', 'M18 FHSAG125XPDB-0');
assert(normalizeModel('M18 FPD3-502X') === 'm18fpd3', 'M18 FPD3-502X → m18fpd3 (kit suffix stripped)');
assert(normalizeModel('M12 CH-0') === 'm12ch', 'M12 CH-0 → m12ch');

console.log('');

// --- modelMatchesText: correct matches ---
console.log('modelMatchesText (should match):');

// Toolstation API title format: "Milwaukee M18FPD3-502X Fuel Gen 4 Combi Drill 2 x 5.0Ah"
const m1 = normalizeModel('M18 FPD3-0');
assert(modelMatchesText(m1, 'Milwaukee M18FPD3-502X Fuel Gen 4 Combi Drill 2 x 5.0Ah'), 'FPD3 in API title (kit variant)');
assert(modelMatchesText(m1, 'milwaukee-m18fpd3-502x-fuel-gen-4-combi-drill'), 'FPD3 in API slug');
assert(modelMatchesText(m1, 'https://www.toolstation.com/milwaukee-m18fpd3-502x-fuel-gen-4-combi-drill/p93247'), 'FPD3 in API URL');

const m2 = normalizeModel('M18 FID3-0');
assert(modelMatchesText(m2, 'Milwaukee M18 FID3-0 FUEL Gen 4 Impact Driver Body Only'), 'FID3 in API title (body only)');
assert(modelMatchesText(m2, 'Milwaukee M18 FID3-502X FUEL Gen 4 Impact Driver'), 'FID3 in API title (kit)');

const m3 = normalizeModel('M18 ONEFSZ-0X');
assert(modelMatchesText(m3, 'Milwaukee M18 ONEFSZ-0X 18V Sawzall'), 'ONEFSZ in title');

const m4 = normalizeModel('M18 BP-0');
assert(modelMatchesText(m4, 'milwaukee-m18-bp-0-18v-planer'), 'BP in slug with hyphens');

console.log('');

// --- modelMatchesText: wrong matches that must be REJECTED ---
console.log('modelMatchesText (should NOT match):');

// "M12 CH-0" must NOT match "M12 FHAC16-0" — CH should not match inside FHAC
const mCH = normalizeModel('M12 CH-0');
assert(!modelMatchesText(mCH, 'Milwaukee M12 FHAC16-0 FUEL Compact SDS+ Hammer'), 'CH must NOT match FHAC16');
assert(!modelMatchesText(mCH, 'Milwaukee M12 C12MT-0 Compact Multi tool'), 'CH must NOT match C12MT');

// Short models should not partial-match unrelated products
const mFJS = normalizeModel('M18 FJS-0');
assert(!modelMatchesText(mFJS, 'Milwaukee M18 FSAG115XB-0 Angle Grinder'), 'FJS must NOT match FSAG');

const mFMT = normalizeModel('M18 FMT-0');
assert(!modelMatchesText(mFMT, 'Milwaukee M18 FMTIW2F12-0 Impact Wrench'), 'FMT must NOT match FMTIW (boundary)');

// Boundary: prevent prefix matches
const mFHIR14 = normalizeModel('M12 FHIR14-0');
assert(!modelMatchesText(mFHIR14, 'Milwaukee M12 FHIR14LR-0'), 'FHIR14 must NOT match FHIR14LR');
assert(modelMatchesText(mFHIR14, 'Milwaukee M12 FHIR14-0'), 'FHIR14 should match FHIR14-0');

console.log('');

// --- Simulated API response validation ---
console.log('Simulated API response validation:');

// Simulate finding correct match in a multi-result API response
const fakeApiDocs = [
  { title: 'Milwaukee M18FPD3-502X Fuel Gen 4 Combi Drill 2 x 5.0Ah', url: 'https://www.toolstation.com/milwaukee-m18fpd3-502x-fuel-gen-4-combi-drill/p93247', slug: 'milwaukee-m18fpd3-502x-fuel-gen-4-combi-drill' },
  { title: 'Milwaukee M18 FID3-0 FUEL Gen 4 Impact Driver Body Only', url: 'https://www.toolstation.com/milwaukee-m18-fid3-0-fuel-gen-4-impact-driver/p17964', slug: 'milwaukee-m18-fid3-0-fuel-gen-4-impact-driver' },
  { title: 'Milwaukee C18RAD-0 M18 Right Angle Drill Driver Body Only', url: 'https://www.toolstation.com/milwaukee-c18rad-0-m18-right-angle-drill-driver/p12193', slug: 'milwaukee-c18rad-0-m18-right-angle-drill-driver' },
];

function findMatchInDocs(modelNumber, docs) {
  const nm = normalizeModel(modelNumber);
  for (const doc of docs) {
    if (modelMatchesText(nm, doc.title) || modelMatchesText(nm, doc.url) || modelMatchesText(nm, doc.slug)) {
      return doc.url;
    }
  }
  return null;
}

assert(
  findMatchInDocs('M18 FPD3-0', fakeApiDocs) === 'https://www.toolstation.com/milwaukee-m18fpd3-502x-fuel-gen-4-combi-drill/p93247',
  'FPD3-0 matches first doc (kit variant has same base model)'
);
assert(
  findMatchInDocs('M18 FID3-0', fakeApiDocs) === 'https://www.toolstation.com/milwaukee-m18-fid3-0-fuel-gen-4-impact-driver/p17964',
  'FID3-0 matches second doc'
);
assert(
  findMatchInDocs('M12 CH-0', fakeApiDocs) === null,
  'M12 CH-0 matches nothing in these docs'
);

// Real M12 CH-0 search results — none should match
const fakeCHDocs = [
  { title: 'Milwaukee M12 FHAC16-0 FUEL Compact SDS+ Hammer Body Only', url: 'https://www.toolstation.com/milwaukee-m12-fhac16-0-fuel-compact-sds-hammer/pAC917', slug: 'milwaukee-m12-fhac16-0-fuel-compact-sds-hammer' },
  { title: 'Milwaukee M12 C12MT-0 Compact Multi tool Body Only', url: 'https://www.toolstation.com/milwaukee-m12-c12mt-0-compact-multi-tool/p62937', slug: 'milwaukee-m12-c12mt-0-compact-multi-tool' },
];
assert(
  findMatchInDocs('M12 CH-0', fakeCHDocs) === null,
  'M12 CH-0 correctly returns null for unrelated M12 results'
);

console.log('');

// --- extractSpecTokens ---
console.log('extractSpecTokens:');

const battTokens = extractSpecTokens('M18 5.0Ah Battery', 'M18 B5');
assert(battTokens.some(t => t.type === 'platform' && t.value === 'm18'), 'battery: platform m18');
assert(battTokens.some(t => t.type === 'ah' && t.value === '5.0'), 'battery: ah 5.0');
assert(battTokens.some(t => t.type === 'tooltype' && t.value === 'battery'), 'battery: tooltype');
assert(!battTokens.some(t => t.type === 'mm'), 'battery: no mm token');

const hoTokens = extractSpecTokens('M18 8.0Ah HIGH OUTPUT Battery', 'M18 HB8');
assert(hoTokens.some(t => t.type === 'qualifier' && t.value === 'high output'), 'high output: qualifier');
assert(hoTokens.some(t => t.type === 'ah' && t.value === '8.0'), 'high output: ah 8.0');

const chargerTokens = extractSpecTokens('M18 Dual Sequential Fast Charger', 'M18 DFC');
assert(chargerTokens.some(t => t.type === 'tooltype' && t.value === 'charger'), 'charger: tooltype');
assert(chargerTokens.some(t => t.type === 'qualifier' && t.value === 'dual'), 'charger: qualifier dual');
assert(chargerTokens.some(t => t.type === 'qualifier' && t.value === 'fast'), 'charger: qualifier fast');
assert(chargerTokens.some(t => t.type === 'qualifier' && t.value === 'sequential'), 'charger: qualifier sequential');

const mitreTokens = extractSpecTokens('M18 FUEL ONE-KEY 305mm Mitre Saw (Body Only)', 'M18 FMS305-0');
assert(mitreTokens.some(t => t.type === 'platform' && t.value === 'm18'), 'mitre: platform m18');
assert(mitreTokens.some(t => t.type === 'mm' && t.value === '305'), 'mitre: mm 305');
assert(mitreTokens.some(t => t.type === 'tooltype' && t.value === 'mitre saw'), 'mitre: tooltype');

const m1218Tokens = extractSpecTokens('M12-18 Super Charger', 'M12-18 SC');
assert(m1218Tokens.some(t => t.type === 'platform' && t.value === 'm12-18'), 'M12-18: platform');
assert(m1218Tokens.some(t => t.type === 'qualifier' && t.value === 'super'), 'M12-18: qualifier super');

// No tokens for a tool without specs
const noSpecTokens = extractSpecTokens('M18 FUEL Multi-Tool (Body Only)', 'M18 FMT-0');
assert(!noSpecTokens.some(t => t.type === 'ah'), 'multi-tool: no ah');
assert(!noSpecTokens.some(t => t.type === 'mm'), 'multi-tool: no mm');
assert(!noSpecTokens.some(t => t.type === 'tooltype'), 'multi-tool: no tooltype (not battery/charger/saw)');

console.log('');

// --- shouldTryKeywordFallback ---
console.log('shouldTryKeywordFallback:');

assert(shouldTryKeywordFallback('M18 B5', { name: 'M18 5.0Ah Battery' }), 'M18 B5 battery: should fallback');
assert(shouldTryKeywordFallback('M18 HB8', { name: 'M18 8.0Ah HIGH OUTPUT Battery' }), 'M18 HB8 battery: should fallback');
assert(shouldTryKeywordFallback('M18 FC', { name: 'M18 Fast Charger' }), 'M18 FC charger: should fallback');
assert(shouldTryKeywordFallback('M18 DFC', { name: 'M18 Dual Sequential Fast Charger' }), 'M18 DFC charger: should fallback');
assert(shouldTryKeywordFallback('M12 C', { name: 'M12 Compact Charger' }), 'M12 C charger: should fallback');
assert(shouldTryKeywordFallback('M12-18 SC', { name: 'M12-18 Super Charger' }), 'M12-18 SC charger: should fallback');
assert(shouldTryKeywordFallback('M18 FMS305-0', { name: 'M18 FUEL ONE-KEY 305mm Mitre Saw (Body Only)' }), 'M18 FMS305: mm spec triggers fallback');
assert(shouldTryKeywordFallback('M18 SMS216-0', { name: 'M18 216mm Sliding Mitre Saw (Body Only)' }), 'M18 SMS216: mm spec triggers fallback');

// Should NOT fallback for tools without strong specs
assert(!shouldTryKeywordFallback('M18 FPD3-0', { name: 'M18 FUEL Combi Drill (Body Only)' }), 'M18 FPD3: no strong specs, no fallback');
assert(!shouldTryKeywordFallback('M18 FMT-0', { name: 'M18 FUEL Multi-Tool (Body Only)' }), 'M18 FMT: no strong specs, no fallback');
// Long model codes should not fallback even with specs
assert(!shouldTryKeywordFallback('M18 FHSAG125XPDB-0', { name: 'M18 FUEL 125mm Angle Grinder with Paddle Switch (Body Only)' }), 'FHSAG125XPDB: model too long for fallback');

console.log('');

// --- buildKeywordQuery ---
console.log('buildKeywordQuery:');

assert(buildKeywordQuery('M18 B5', { name: 'M18 5.0Ah Battery' }) === 'Milwaukee M18 5.0Ah battery', 'query: M18 5.0Ah battery');
assert(buildKeywordQuery('M18 HB8', { name: 'M18 8.0Ah HIGH OUTPUT Battery' }) === 'Milwaukee M18 8.0Ah HIGH OUTPUT battery', 'query: M18 8.0Ah HIGH OUTPUT battery');
assert(buildKeywordQuery('M18 FC', { name: 'M18 Fast Charger' }) === 'Milwaukee M18 charger', 'query: M18 charger (no Ah/mm)');
assert(buildKeywordQuery('M18 DFC', { name: 'M18 Dual Sequential Fast Charger' }) === 'Milwaukee M18 charger', 'query: M18 DFC charger');
assert(buildKeywordQuery('M18 FMS305-0', { name: 'M18 FUEL ONE-KEY 305mm Mitre Saw (Body Only)' }) === 'Milwaukee M18 305mm mitre saw', 'query: M18 305mm mitre saw');
assert(buildKeywordQuery('M18 SMS216-0', { name: 'M18 216mm Sliding Mitre Saw (Body Only)' }) === 'Milwaukee M18 216mm mitre saw', 'query: M18 216mm mitre saw');
assert(buildKeywordQuery('M12-18 SC', { name: 'M12-18 Super Charger' }) === 'Milwaukee M12-18 charger', 'query: M12-18 charger');

console.log('');

// --- scoreCandidate ---
console.log('scoreCandidate:');

// Battery: correct match — should score 3 (platform + ah + tooltype)
const batteryTokens = extractSpecTokens('M18 5.0Ah Battery', 'M18 B5');
assert(
  scoreCandidate('Milwaukee M18 5.0Ah REDLITHIUM-ION Battery', '', batteryTokens).score === 3,
  'battery correct match: score 3'
);

// Battery: wrong Ah — hard reject
assert(
  scoreCandidate('Milwaukee M18 6.0Ah REDLITHIUM-ION Battery', '', batteryTokens).score === -1,
  'battery wrong Ah: rejected'
);

// Battery: wrong platform — hard reject
assert(
  scoreCandidate('Milwaukee M12 5.0Ah Battery', '', batteryTokens).score === -1,
  'battery wrong platform: rejected'
);

// Battery: kit/combo — rejected
assert(
  scoreCandidate('Milwaukee M18 5.0Ah Battery Kit with Drill Combo', '', batteryTokens).score === -1,
  'battery kit combo: rejected'
);

// Battery: no Milwaukee — rejected
assert(
  scoreCandidate('DeWalt M18 5.0Ah Battery', '', batteryTokens).score === -1,
  'battery no Milwaukee: rejected'
);

// HIGH OUTPUT battery: must match qualifier
const hoTokens2 = extractSpecTokens('M18 8.0Ah HIGH OUTPUT Battery', 'M18 HB8');
assert(
  scoreCandidate('Milwaukee M18 8.0Ah HIGH OUTPUT Battery', '', hoTokens2).score === 4,
  'HO battery correct: score 4 (platform + ah + tooltype + qualifier)'
);
assert(
  scoreCandidate('Milwaukee M18 8.0Ah Battery', '', hoTokens2).score === 3,
  'HO battery missing qualifier: score 3 (still valid, qualifier is soft for batteries)'
);

// Charger: correct match
const fastChargerTokens = extractSpecTokens('M18 Fast Charger', 'M18 FC');
assert(
  scoreCandidate('Milwaukee M18 Fast Charger', '', fastChargerTokens).score === 3,
  'fast charger correct: score 3'
);

// Charger: wrong qualifier — hard reject for chargers
assert(
  scoreCandidate('Milwaukee M18 Dual Sequential Fast Charger', '', fastChargerTokens).score === -1,
  'fast charger vs dual: rejected (unexpected qualifier "dual")'
);

// Charger: missing our qualifier — hard reject
assert(
  scoreCandidate('Milwaukee M18 Charger', '', fastChargerTokens).score === -1,
  'fast charger vs plain charger: rejected (missing "fast")'
);

// Dual charger: correct match
const dualChargerTokens = extractSpecTokens('M18 Dual Sequential Fast Charger', 'M18 DFC');
assert(
  scoreCandidate('Milwaukee M18 Dual Sequential Fast Charger', '', dualChargerTokens).score === 5,
  'dual charger correct: score 5'
);
// Dual charger: must not match plain fast charger
assert(
  scoreCandidate('Milwaukee M18 Fast Charger', '', dualChargerTokens).score === -1,
  'dual charger vs fast only: rejected (missing "dual")'
);

// Mitre saw: correct with mm
const mitreTokens2 = extractSpecTokens('M18 FUEL ONE-KEY 305mm Mitre Saw (Body Only)', 'M18 FMS305-0');
assert(
  scoreCandidate('Milwaukee M18 FUEL 305mm Double Bevel Sliding Mitre Saw', '', mitreTokens2).score === 3,
  'mitre 305mm correct: score 3 (platform + mm + tooltype)'
);

// Mitre saw: wrong mm — still passes but lower score
assert(
  scoreCandidate('Milwaukee M18 FUEL 254mm Double Bevel Sliding Mitre Saw', '', mitreTokens2).score === 2,
  'mitre 254mm: score 2 (platform + tooltype, mm mismatch is soft)'
);

// Mitre saw: completely wrong tool
assert(
  scoreCandidate('Milwaukee M18 FUEL Circular Saw 190mm', '', mitreTokens2).score === -1,
  'mitre vs circular saw: rejected (tooltype mismatch)'
);

console.log('');

// --- Tie handling ---
console.log('scoreCandidate tie scenarios:');

// Two batteries with same Ah would both score 3 — this is what findUrlViaKeyword rejects
const b5Tokens = extractSpecTokens('M18 5.0Ah Battery', 'M18 B5');
const score1 = scoreCandidate('Milwaukee M18 5.0Ah REDLITHIUM-ION Compact Battery', '', b5Tokens);
const score2 = scoreCandidate('Milwaukee M18 5.0Ah REDLITHIUM-ION Extended Battery', '', b5Tokens);
assert(score1.score === score2.score, 'tie: two batteries with same specs tie');
assert(score1.score >= 2, 'tie: both score >= 2');

// Mitre saws: 305mm vs 254mm should NOT tie — different mm scores
const ms305Score = scoreCandidate('Milwaukee M18 FUEL 305mm Mitre Saw', '', mitreTokens2);
const ms254Score = scoreCandidate('Milwaukee M18 FUEL 254mm Mitre Saw', '', mitreTokens2);
assert(ms305Score.score > ms254Score.score, 'no-tie: 305mm scores higher than 254mm for 305mm tool');

console.log('');

// --- Summary ---
console.log(`Results: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
