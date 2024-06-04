const puppeteer = require('puppeteer');

(async () => {
    console.log('Iniciando...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');
    await page.screenshot({ path: 'screenshot.png' });
    console.log('Cerrando...')
    await browser.close();
    console.log('Cerrado')
})();