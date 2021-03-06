// Import requirement packages
require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const { Builder, By, Key, until } = require('selenium-webdriver');

const screen = {
  width: 1024,
  height: 758
};

const assert = require('assert');
describe('Checkout QA site', function () {
  let driver;
  before(function () {
    this.timeout = 10000;
    driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless().windowSize(screen))
      .setFirefoxOptions(new firefox.Options().headless().windowSize(screen))
      .build();

  });
  // Next, we will write steps for our test. 
  // For the element ID, you can find it by open the browser inspect feature.
  it('Hello World', async function () {
    await driver.get('http://expressjs-qa.ap-southeast-1.elasticbeanstalk.com/');
    // check content
    await driver.findElement(By.css('body'))
      .getText()
      .then(function (text) {
        assert.equal(text, "Hello World!");
      });
  });
  // close the browser after running tests
  after(() => driver && driver.quit());
})
