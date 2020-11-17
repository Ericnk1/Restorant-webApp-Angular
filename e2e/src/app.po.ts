import { browser, by, element } from 'protractor';

export class AppPage {
  /*navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }*/

  navigateTo(link: string): Promise<unknown> {
    return browser.get(link) as Promise<unknown>;
  }

  getTitleText(selector: string): Promise<string> {
    return element(by.css(selector)).getText() as Promise<string>;
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }
}
