const puppeteer = require('puppeteer');
const path = require('path');

async function takeHighResScreenshot() {
  const browser = await puppeteer.launch({
    headless: false, // Set to true for headless mode
    defaultViewport: null
  });
  
  const page = await browser.newPage();
  
  // Set high DPI for better quality
  await page.setViewport({
    width: 1400,
    height: 2000,
    deviceScaleFactor: 2 // This doubles the resolution
  });
  
  // Navigate to your HTML files
  const homepageFile = 'file://' + path.resolve(__dirname, 'ios-app-homepage-screenshot.html');
  const chatFile = 'file://' + path.resolve(__dirname, 'ios-app-lootai-screenshot.html');
  
  // Screenshot homepage
  await page.goto(homepageFile, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: 'homepage-high-res.png',
    type: 'png',
    clip: {
      x: 286, // Adjust these values to crop exactly around your mockup
      y: 100,
      width: 828,
      height: 1792
    }
  });
  
  // Screenshot chat page
  await page.goto(chatFile, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: 'chat-high-res.png',
    type: 'png',
    clip: {
      x: 286, // Adjust these values to crop exactly around your mockup
      y: 100,
      width: 828,
      height: 1792
    }
  });
  
  await browser.close();
  console.log('High-resolution screenshots saved!');
}

takeHighResScreenshot().catch(console.error); 