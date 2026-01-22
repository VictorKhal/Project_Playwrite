export class BasePage {
  constructor(page) {
    this.page = page;
  }

  get cartButton () {
      return this.page.locator(`.headerCartBox`);
  }

  get logo() {
      return this.page.locator(`//a[@class="logotypeImg"]`);
  }

  get favoritesLink() {
    return this.page.locator(`//a[contains(@href,'/aside')]`)
  }

  get favoritesLinkCount() {
    return this.page.locator(`//div[contains(@data-testid,'header-favorites-count')]/span`)
  }

  async open(path = '/') {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }
}
