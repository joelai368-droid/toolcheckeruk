#!/usr/bin/env node
/**
 * Test helper for ITS model matching logic.
 * Run: node scraper/tests/test-its-matching.js
 *
 * Tests normalizeModel() and modelMatchesText() without network access.
 */

const { _test } = require('../parsers/its');
const { normalizeModel, modelMatchesText, isAccessoryOrBundle } = _test;

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
assert(normalizeModel('M12 CH-0') === 'm12ch', 'M12 CH-0 → m12ch');
assert(normalizeModel('M18 BLDD2-0') === 'm18bldd2', 'M18 BLDD2-0 → m18bldd2');

console.log('');

// --- modelMatchesText: correct matches ---
console.log('modelMatchesText (should match):');

const m1 = normalizeModel('M18 FPD3-0');
assert(modelMatchesText(m1, 'milwaukee-m18-fpd3-0x-18v-fuel-brushless-combi-drill-body-_milm18fpd30.htm'), 'FPD3 in ITS URL');
assert(modelMatchesText(m1, 'Milwaukee M18 FPD3-0 18V FUEL Brushless Combi Drill - Body'), 'FPD3 in product name');
assert(modelMatchesText(m1, 'MILM18FPD30'), 'FPD3 in SKU');

const m2 = normalizeModel('M18 FJS-0');
assert(modelMatchesText(m2, 'M18FJS-0-Milwaukee-M18-FJS-0X-18V-FUEL-Brushless-Top-Handle-Jigsaw---Body-_MILM18FJS0.htm'), 'FJS in ITS URL');
assert(modelMatchesText(m2, 'Milwaukee M18 FJS-0 18V FUEL Brushless Top Handle Jigsaw - Body'), 'FJS in product name');

const m3 = normalizeModel('M18 FID3-0');
assert(modelMatchesText(m3, 'milwaukee-m18-fid3-0x-18v-fuel-brushless-1-4-impact-driver-body-_milm18fid30.htm'), 'FID3 in ITS URL');

const m4 = normalizeModel('M18 BOS125-0');
assert(modelMatchesText(m4, 'M18BOS125-0-Milwaukee-M18-BOS125-0-18V-125mm-Random-Orbit-Sander---Body-_MILM18BOS1250.htm'), 'BOS125 in ITS URL');

const m5 = normalizeModel('M18 BP-0');
assert(modelMatchesText(m5, 'Milwaukee M18 BP-0 18V Li-ion Cordless Planer'), 'BP in product name');

const m6 = normalizeModel('M12 CH-0');
assert(modelMatchesText(m6, 'Milwaukee M12 CH-0 12V Li-ion Sub Compact SDS+ Hammer Drill'), 'CH in product name');

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

// CH must not match CHZ (longer variant)
const mCH = normalizeModel('M12 CH-0');
assert(!modelMatchesText(mCH, 'Milwaukee M12 CHZ-0 12V Hackzall'), 'CH must NOT match CHZ');

// BP must not match BPD (longer variant)
const mBP = normalizeModel('M18 BP-0');
assert(!modelMatchesText(mBP, 'Milwaukee M18 BPD-0 18V Combi Drill'), 'BP must NOT match BPD');

console.log('');

// --- findUrl mock test: validates full flow with fake API response ---
console.log('findUrl (mocked SearchSpring response):');

const { findUrl } = require('../parsers/its');

async function testFindUrlMatch() {
  const mockFetchPage = async () => ({
    html: JSON.stringify({
      pagination: { totalResults: 3 },
      results: [
        { name: 'Milwaukee M18 FPD3-0X 18V FUEL Combi Drill - Body', url: '/milwaukee-m18-fpd3-0x-combi-drill_milm18fpd30.htm', sku: 'MILM18FPD30' },
        { name: 'Milwaukee M18 FPD3-502X Kit', url: '/milwaukee-m18-fpd3-502x-kit_milm18fpd3502x.htm', sku: 'MILM18FPD3502X' },
      ],
    }),
    status: 200,
  });

  const url = await findUrl('M18 FPD3-0', mockFetchPage);
  assert(url === 'https://its.co.uk/milwaukee-m18-fpd3-0x-combi-drill_milm18fpd30.htm', 'findUrl returns first validated match');
}

async function testFindUrlNoMatch() {
  const mockFetchPage = async () => ({
    html: JSON.stringify({
      pagination: { totalResults: 2 },
      results: [
        { name: 'Milwaukee M18 FSAG125XPDB-0', url: '/some-other-product.htm', sku: 'MILM18FSAG' },
      ],
    }),
    status: 200,
  });

  const url = await findUrl('M18 FMT-0', mockFetchPage);
  assert(url === null, 'findUrl returns null when no result matches model');
}

async function testFindUrlTooBroad() {
  const mockFetchPage = async () => ({
    html: JSON.stringify({
      pagination: { totalResults: 200 },
      results: [
        { name: 'Milwaukee M18 FPD3-0X', url: '/some.htm', sku: 'X' },
      ],
    }),
    status: 200,
  });

  const url = await findUrl('M18', mockFetchPage);
  assert(url === null, 'findUrl returns null when too many results (broad query)');
}

async function testFindUrlEmptyResults() {
  const mockFetchPage = async () => ({
    html: JSON.stringify({
      pagination: { totalResults: 0 },
      results: [],
    }),
    status: 200,
  });

  const url = await findUrl('M18 XYZABC-0', mockFetchPage);
  assert(url === null, 'findUrl returns null on empty results');
}

async function testFindUrlHttpError() {
  const mockFetchPage = async () => ({ html: '', status: 500 });

  const url = await findUrl('M18 FPD3-0', mockFetchPage);
  assert(url === null, 'findUrl returns null on HTTP error');
}

async function testFindUrlAbsoluteUrl() {
  const mockFetchPage = async () => ({
    html: JSON.stringify({
      pagination: { totalResults: 1 },
      results: [
        { name: 'Milwaukee M18 FID3-0X', url: 'https://its.co.uk/m18-fid3-0x.htm', sku: 'MILM18FID30' },
      ],
    }),
    status: 200,
  });

  const url = await findUrl('M18 FID3-0', mockFetchPage);
  assert(url === 'https://its.co.uk/m18-fid3-0x.htm', 'findUrl preserves absolute URLs');
}

// --- isAccessoryOrBundle tests ---
console.log('isAccessoryOrBundle:');

// Should reject: blade accessory for FCOT
assert(
  isAccessoryOrBundle(
    'Milwaukee 76mm x 1mm x 10mm Turbo Blade For M12 FCOT-0',
    '/pd/milwaukee-76mm-x-1mm-x-10mm-turbo-blade-for-m12-fcot-0-_mil4932464715.htm',
    normalizeModel('M12 FCOT-0')
  ),
  'FCOT blade accessory should be rejected'
);

// Should reject: multi-model bundle for FPOVCL
assert(
  isAccessoryOrBundle(
    'Milwaukee M18 FPS55-0P Plunge Saw Body 2x Guide Rails Joining Bars Batteries Charger PACKOUT Case M18 FPOVCL-0 Vacuum',
    '/pd/milwaukee-m18-fps55-0p-18v-fuel-brushless-plunge-saw-body-2x-1400mm-guide-rails-joining-bars-2x-5-5ah-high-output-batteries-fast-charger-packout-case-m18-fpovcl-0-18v-fuel-brushless-packout-l-class-wet-dry-vacuum-_milm18fps550ppk5.htm',
    normalizeModel('M18 FPOVCL-0')
  ),
  'FPOVCL multi-model bundle should be rejected'
);

// Should NOT reject: legitimate FPOVCL product
assert(
  !isAccessoryOrBundle(
    'Milwaukee M18 FPOVCL-0 18V FUEL Brushless PACKOUT L-Class Wet & Dry Vacuum - Body',
    '/pd/milwaukee-m18-fpovcl-0-18v-fuel-brushless-packout-vacuum_milm18fpovcl0.htm',
    normalizeModel('M18 FPOVCL-0')
  ),
  'Legitimate FPOVCL product should NOT be rejected'
);

// Should NOT reject: legitimate FCOT product
assert(
  !isAccessoryOrBundle(
    'Milwaukee M12 FCOT-0 12V FUEL Brushless Cut Off Tool - Body',
    '/pd/milwaukee-m12-fcot-0-12v-fuel-brushless-cut-off-tool_milm12fcot0.htm',
    normalizeModel('M12 FCOT-0')
  ),
  'Legitimate FCOT product should NOT be rejected'
);

// Should reject: product with foreign model
assert(
  isAccessoryOrBundle(
    'Milwaukee M18 FPD3 & M18 FID3 Twin Pack',
    '/pd/milwaukee-m18-fpd3-m18-fid3-twin-pack.htm',
    normalizeModel('M18 FPD3-0')
  ),
  'Twin pack with foreign model (FID3) should be rejected'
);

// Should NOT reject: legitimate battery product
assert(
  !isAccessoryOrBundle(
    'Milwaukee M18 B5 18V 5.0Ah Li-Ion RedLithium Battery',
    '/pd/milwaukee-m18-b5-18v-5-0ah-li-ion-redlithium-battery_milm18b5.htm',
    normalizeModel('M18 B5')
  ),
  'Legitimate M18 B5 battery should NOT be rejected'
);

console.log('');

// --- findUrl mock tests for accessory/bundle rejection ---
console.log('findUrl (accessory/bundle rejection):');

async function testFindUrlRejectsBlade() {
  const mockFetchPage = async () => ({
    html: JSON.stringify({
      pagination: { totalResults: 2 },
      results: [
        { name: 'Milwaukee 76mm x 1mm x 10mm Turbo Blade For M12 FCOT-0', url: '/pd/milwaukee-76mm-x-1mm-x-10mm-turbo-blade-for-m12-fcot-0-_mil4932464715.htm', sku: 'MIL4932464715' },
        { name: 'Milwaukee M12 FCOT-0 12V FUEL Cut Off Tool - Body', url: '/pd/milwaukee-m12-fcot-0-cut-off-tool_milm12fcot0.htm', sku: 'MILM12FCOT0' },
      ],
    }),
    status: 200,
  });

  const url = await findUrl('M12 FCOT-0', mockFetchPage);
  assert(url === 'https://its.co.uk/pd/milwaukee-m12-fcot-0-cut-off-tool_milm12fcot0.htm', 'findUrl skips blade accessory and returns actual FCOT tool');
}

async function testFindUrlRejectsFCOTBladeOnly() {
  const mockFetchPage = async () => ({
    html: JSON.stringify({
      pagination: { totalResults: 1 },
      results: [
        { name: 'Milwaukee 76mm x 1mm x 10mm Turbo Blade For M12 FCOT-0', url: '/pd/milwaukee-76mm-x-1mm-x-10mm-turbo-blade-for-m12-fcot-0-_mil4932464715.htm', sku: 'MIL4932464715' },
      ],
    }),
    status: 200,
  });

  const url = await findUrl('M12 FCOT-0', mockFetchPage);
  assert(url === null, 'findUrl returns null when only blade accessory matches FCOT');
}

async function testFindUrlRejectsFPOVCLBundle() {
  const mockFetchPage = async () => ({
    html: JSON.stringify({
      pagination: { totalResults: 2 },
      results: [
        { name: 'Milwaukee M18 FPS55-0P Plunge Saw Body 2x Guide Rails M18 FPOVCL-0 Vacuum', url: '/pd/milwaukee-m18-fps55-0p-18v-fuel-brushless-plunge-saw-body-2x-1400mm-guide-rails-joining-bars-2x-5-5ah-high-output-batteries-fast-charger-packout-case-m18-fpovcl-0-18v-fuel-brushless-packout-l-class-wet-dry-vacuum-_milm18fps550ppk5.htm', sku: 'MILM18FPS550PPK5' },
        { name: 'Milwaukee M18 FPOVCL-0 18V FUEL PACKOUT Vacuum - Body', url: '/pd/milwaukee-m18-fpovcl-0-vacuum_milm18fpovcl0.htm', sku: 'MILM18FPOVCL0' },
      ],
    }),
    status: 200,
  });

  const url = await findUrl('M18 FPOVCL-0', mockFetchPage);
  assert(url === 'https://its.co.uk/pd/milwaukee-m18-fpovcl-0-vacuum_milm18fpovcl0.htm', 'findUrl skips bundle and returns actual FPOVCL vacuum');
}

async function testFindUrlRejectsFPOVCLBundleOnly() {
  const mockFetchPage = async () => ({
    html: JSON.stringify({
      pagination: { totalResults: 1 },
      results: [
        { name: 'Milwaukee M18 FPS55-0P Plunge Saw Body 2x Guide Rails M18 FPOVCL-0 Vacuum', url: '/pd/milwaukee-m18-fps55-0p-18v-fuel-brushless-plunge-saw-body-2x-1400mm-guide-rails-joining-bars-m18-fpovcl-0-vacuum-_milm18fps550ppk5.htm', sku: 'MILM18FPS550PPK5' },
      ],
    }),
    status: 200,
  });

  const url = await findUrl('M18 FPOVCL-0', mockFetchPage);
  assert(url === null, 'findUrl returns null when only bundle matches FPOVCL');
}

(async () => {
  await testFindUrlMatch();
  await testFindUrlNoMatch();
  await testFindUrlTooBroad();
  await testFindUrlEmptyResults();
  await testFindUrlHttpError();
  await testFindUrlAbsoluteUrl();
  await testFindUrlRejectsBlade();
  await testFindUrlRejectsFCOTBladeOnly();
  await testFindUrlRejectsFPOVCLBundle();
  await testFindUrlRejectsFPOVCLBundleOnly();

  console.log('');
  console.log(`Results: ${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
})();
