export class MywebsitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mywebsite-app h1')).getText();
  }
}
