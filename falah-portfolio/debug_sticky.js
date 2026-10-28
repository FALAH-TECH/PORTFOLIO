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
          id: s.id,
          position: style.position,
          top: style.top,
          zIndex: style.zIndex,
          height: s.offsetHeight
        };
      });
    });
    
    console.log("SECTION STYLES:", JSON.stringify(results, null, 2));

    // Check ancestors of the first sticky section for overflow
    const overflowCheck = await page.evaluate(() => {
      const firstSection = document.querySelector('section');
      if (!firstSection) return "No sections found";
      
      let results = [];
      let current = firstSection.parentElement;
      while (current) {
        const style = window.getComputedStyle(current);
        results.push({
          tag: current.tagName,
          className: current.className,
          overflowX: style.overflowX,
          overflowY: style.overflowY
        });
        current = current.parentElement;
      }
      return results;
    });
    
    console.log("ANCESTOR OVERFLOW CHECK:", JSON.stringify(overflowCheck, null, 2));

  } catch (err) {
    console.log("Error: " + err.toString());
  }

  await browser.close();
})();
