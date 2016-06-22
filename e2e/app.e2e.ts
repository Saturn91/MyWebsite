import { MywebsitePage } from './app.po';

describe('mywebsite App', function() {
  let page: MywebsitePage;

  beforeEach(() => {
    page = new MywebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mywebsite works!');
  });
});
