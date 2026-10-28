const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1536, height: 776 });
  
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Wait for loader
    await new Promise(r => setTimeout(r, 3000));
    
    // Scroll down halfway into the Intro section
    await page.evaluate(() => {
      window.scrollTo(0, 500);
    });
    
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'scroll_check.png' });
    
    // Scroll down further to see Intro stacking over Hero
    await page.evaluate(() => {
      window.scrollTo(0, 1000);
    });
    
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'scroll_check_2.png' });

    console.log("Screenshots captured: scroll_check.png, scroll_check_2.png");

  } catch (err) {
    console.log("Error: " + err.toString());
  }

  await browser.close();
})();
