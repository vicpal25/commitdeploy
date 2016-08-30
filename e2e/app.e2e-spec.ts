import { SPORTSMASHPage } from './app.po';

describe('sports-mash App', function() {
  let page: SPORTSMASHPage;

  beforeEach(() => {
    page = new SPORTSMASHPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
