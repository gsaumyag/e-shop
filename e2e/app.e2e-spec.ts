import { eShop } from './app.po';
import { browser, by, element, protractor } from 'protractor';
let origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  let args = arguments;
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });
  return origFn.apply(browser.driver.controlFlow(), args);
};
describe('e-shop App', () => {
  let page: eShop;

  beforeEach(() => {
    page = new eShop();
  });

  it('should display 6 products.', () => {
    page.navigateTo();
    let products = element.all(by.css(".image-container"));
    expect(products.count()).toEqual(6);
  });

});
