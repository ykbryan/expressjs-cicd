// Import requirement packages
require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');
describe('Checkout QA site', function () {
  let driver;
  before(async function () {
    this.timeout = 10000;
    driver = await new Builder().forBrowser('chrome').build();
  });
  // Next, we will write steps for our test. 
  // For the element ID, you can find it by open the browser inspect feature.
  it('Hello World', async function () {
    await driver.get('http://expressjs-qa.ap-southeast-1.elasticbeanstalk.com/');
    // check content
    await driver.findElement(By.css('body')).getText().then(function (text) {
      assert.equal(text, "Hello World!");
    });

  });
  // close the browser after running tests
  after(() => driver && driver.quit());
})
