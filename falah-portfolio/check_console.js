const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
    
    const bgColor = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    
    console.log("BODY BG COLOR: " + bgColor);
    
    // Check if any element is covering the screen and is white
    const topElement = await page.evaluate(() => {
      const el = document.elementFromPoint(100, 100);
      return el ? {
        tag: el.tagName,
        className: el.className,
        bg: window.getComputedStyle(el).backgroundColor
      } : null;
    });
    
    console.log("TOP ELEMENT AT 100,100:", topElement);

  } catch (err) {
    console.log("Navigation error: " + err.toString());
  }

  await browser.close();
})();
