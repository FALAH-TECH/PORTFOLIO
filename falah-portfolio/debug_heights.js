const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
    
    const results = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      return sections.map(s => ({
        id: s.id || 'no-id',
        height: s.offsetHeight,
        top: s.getBoundingClientRect().top + window.scrollY,
        zIndex: window.getComputedStyle(s).zIndex
      }));
    });
    
    console.log("ALL SECTION DIMENSIONS:", JSON.stringify(results, null, 2));

  } catch (err) {
    console.log("Error: " + err.toString());
  }

  await browser.close();
})();
