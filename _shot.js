const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/investors', { waitUntil: 'networkidle', timeout: 30000 });
  await page.evaluate(() => document.querySelector('#product-ecosystem').scrollIntoView());
  await page.waitForTimeout(300);
  const spans = await page.$$eval('#product-ecosystem .absolute.inset-\\[29\\%\\] span', els =>
    els.map(el => {
      const r = el.getBoundingClientRect();
      return { text: el.textContent, left: r.left, right: r.right, center: (r.left + r.right) / 2, width: r.width };
    })
  );
  console.log(JSON.stringify(spans, null, 2));
  await browser.close();
})();
