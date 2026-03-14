#!/usr/bin/env node
/**
 * Toolden parser tests
 * Run: node scraper/tests/test-toolden-parser.js
 */

const { parse } = require('../parsers/toolden');

let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) passed++;
  else {
    failed++;
    console.error(`  FAIL: ${label}`);
  }
}

const url = 'https://www.toolden.co.uk/power-tools/example-product/';

const htmlBothPrices = `
<!doctype html>
<html>
<head>
  <title>Example Product | Toolden</title>
  <link rel="canonical" href="https://www.toolden.co.uk/power-tools/example-product/" />
  <meta property="og:url" content="https://www.toolden.co.uk/power-tools/example-product/" />
</head>
<body>
  <h1>Makita DHP486Z 18V LXT Brushless Combi Drill (Body Only)</h1>
  <script>
    var BCData = {"product_attributes":{"price":{"with_tax":{"formatted":"£129.71","value":129.71,"currency":"GBP"},"without_tax":{"formatted":"£108.09","value":108.09,"currency":"GBP"}},"stock_message":"Out of stock"}};
  </script>
</body>
</html>`;

const htmlIncOnly = `
<!doctype html>
<html>
<head>
  <meta property="product:price:amount" content="59.99" />
  <meta property="og:url" content="https://www.toolden.co.uk/inc-only/" />
</head>
<body>
  <h1>Inc VAT only product</h1>
  <div class="stock">In Stock</div>
</body>
</html>`;

const htmlExOnly = `
<!doctype html>
<html>
<head>
  <meta property="og:title" content="Ex VAT only product" />
</head>
<body>
  <script>
    var BCData = {"product_attributes":{"price":{"without_tax":{"formatted":"£50.00","value":50}},"stock_message":"Limited availability"}};
  </script>
</body>
</html>`;

console.log('Toolden parser:');

const both = parse(htmlBothPrices, url);
assert(!!both, 'parse returns a result when BCData has with/without tax');
assert(both.price === 129.71, 'price prefers inc VAT when available');
assert(both.priceIncVat === 129.71, 'priceIncVat extracted from BCData');
assert(both.priceExVat === 108.09, 'priceExVat extracted from BCData');
assert(both.inStock === false, 'out of stock text maps to inStock=false');
assert(both.stockText === 'Out of stock', 'stockText extracted');
assert(both.canonicalUrl === 'https://www.toolden.co.uk/power-tools/example-product/', 'canonical URL extracted');

const incOnly = parse(htmlIncOnly, url);
assert(!!incOnly, 'parse returns a result when only meta inc price exists');
assert(incOnly.price === 59.99, 'price set from inc-only meta price');
assert(incOnly.priceIncVat === 59.99, 'priceIncVat set from meta fallback');
assert(incOnly.priceExVat === null, 'priceExVat remains null when missing');
assert(incOnly.inStock === true, 'in-stock text maps to inStock=true');

const exOnly = parse(htmlExOnly, url);
assert(!!exOnly, 'parse returns result when only ex VAT is present');
assert(exOnly.price === 50, 'price falls back to ex VAT when inc VAT missing');
assert(exOnly.priceIncVat === null, 'inc VAT remains null when absent');
assert(exOnly.priceExVat === 50, 'ex VAT extracted correctly');
assert(exOnly.name === 'Ex VAT only product', 'falls back to og:title for name');

console.log(`Results: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
