import { browser, element, by } from 'protractor';

export class MaterialTodo {
  navigateTo() {
    return browser.get('/');
  }

  getToolbarText() {
    return element(by.css('md-toolbar')).getText();
  }
}
