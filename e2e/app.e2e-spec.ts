import { NgTraining2Page } from './app.po';

describe('ng-training-2 App', function() {
  let page: NgTraining2Page;

  beforeEach(() => {
    page = new NgTraining2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
