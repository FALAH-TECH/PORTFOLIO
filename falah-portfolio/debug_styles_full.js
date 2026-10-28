const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
    
    const results = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section'));
      return sections.map(s => {
        const style = window.getComputedStyle(s);
        return {
          id: s.id || 'no-id',
          position: style.position,
          display: style.display,
          top: style.top,
          marginTop: style.marginTop,
          height: s.offsetHeight,
          offsetTop: s.offsetTop
        };
      });
    });
    
    console.log("SECTION FULL STYLES:", JSON.stringify(results, null, 2));

  } catch (err) {
    console.log("Error: " + err.toString());
  }

  await browser.close();
})();
