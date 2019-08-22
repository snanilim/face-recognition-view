const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const hbs = require('handlebars');
const path = require('path');
const data = require('./database.json');

const compile = async (templateName, dataJson) => {
  const filePath = path.join(process.cwd(), 'templates', `${templateName}.hbs`);
  const html = await fs.readFile(filePath, 'utf-8');
  return hbs.compile(html)(dataJson);
};

async function run() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const content = await compile('short-list', data);

    await page.setContent(content);
    await page.emulateMedia('screen');
    await page.pdf({
      path: 'mypdfs.pdf',
      format: 'A4',
      printBackground: true,
    });

    console.log('done');
    await browser.close();
    process.exit();
  } catch (error) {
    console.log('HTML TO PDF error message is', error);
  }
}

run();
