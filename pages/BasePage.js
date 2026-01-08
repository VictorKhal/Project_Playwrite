export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async open(path = '/') {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  locator(xpath) {
    return this.page.locator(`xpath=${xpath}`);
  }

  async click(xpath) {
    await this.locator(xpath).waitFor({ state: 'visible' });
    await this.locator(xpath).click();
  }

  async fill(xpath, value) {
    await this.locator(xpath).waitFor({ state: 'visible' });
    await this.locator(xpath).fill(value);
  }
}
