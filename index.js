const Configstore = require('configstore');
const prompts = require('prompts');
const { VkApi } = require('./api');
const path = require('path');
const fs = require('fs');
const vault = new Configstore('odr-test-tools', {});

const { URL } = require('url');

let input = process.argv[2];
if (parseInt(input).toString() === input) {
  input = 'https://vk.com/app' + input;
}

if (input.indexOf('http') === -1) {
  input = 'http://' + input;
}

const appUrl = new URL(input);

const appSlug = appUrl.pathname.slice(1);

const indexFile = process.argv[3];

function isJSContentType(contentType) {
  if (!contentType) return false;
  const types = new Set([
    'text/javascript',
    'text/javascript+module',
    'application/x-javascript',
    'application/javascript',
    'application/javascript+module',
    'text/ecmascript',
    'application/ecmascript',
    'text/jscript',
    'text/jscript',
    'text/fluffscript',
  ]);
  const clearType = contentType.split(';').shift().toString().trim();
  return types.has(clearType);
}

function isJsUrl(url) {
  const myURL = new URL(url);
  const fileName = path.basename(myURL.pathname);
  const ext = path.extname(fileName);
  return ext === '.js';
}

async function auth() {
  const response = await prompts({
    type: 'text',
    name: 'value',
    message: 'Create access token VK Me https://vkhost.github.io/',
  });
  if (!response || !response.value) {
    throw new Error('No token passed');
  }
  vault.set('access_token', response.value);
  return response.value;
}

async function main() {
  let token = vault.get('access_token');
  if (!token) {
    token = await auth();
  }
  const api = new VkApi(token, 'ru', '5.131');
  const appData = await api.call('utils.resolveScreenName', { screen_name: appSlug });
  if (!appData.type || (appData.type !== 'vk_app' && appData.type !== 'application')) {
    return `${appSlug} is not vk app ${JSON.stringify(appData)}`;
  }
  const { object_id } = appData;

  const res = await api.call('apps.getEmbeddedUrl', { app_id: object_id });
  console.log(res);

  const { type, view_url, original_url, screen_title } = res;
  if (type !== 'app' && type !== 'game') {
    return `${appSlug} apps.getEmbeddedUrl return bad value ${JSON.stringify(res)}`;
  }

  const viewUrlData = new URL(view_url);

  const url = `${indexFile}${viewUrlData.search}`;
  console.log(url);

  const puppeteer = require('puppeteer');

  const browser = await puppeteer.launch({ headless: false, devtools: true });
  const page = await browser.newPage();

  page.on('response', (httpResponse) => {
    const contentType = httpResponse.headers()['content-type'];
    const url = httpResponse.url();

    if (url.indexOf('http') === 0) {
      if (isJsUrl(url) || isJSContentType(contentType)) {
        console.log(`External js download ${httpResponse.url()}`);
      }
    }
  });

  const preloadFile = fs.readFileSync('./emulate-bridge.js', 'utf8');
  await page.evaluateOnNewDocument(preloadFile);

  await page.goto(`file://${url}`);

  const disconnected = () => {
    return new Promise(resolve => {
      browser.on('disconnected', resolve);
    });
  };

  const closed = () => {
    return new Promise(resolve => {
      page.on('close', resolve);
    });
  };

  await Promise.race([closed(), disconnected()]);

  try {
    await browser.close();
  } catch (e) {

  }
  return true;
}

main().then(res => {
  console.log('DONE:', res);
}).catch(e => {
  if (e && e.code === 15) {
    vault.set('access_token', '');
  }
  if (e && e.code === 5) {
    vault.set('access_token', '');
  }
  console.error(e);
});

