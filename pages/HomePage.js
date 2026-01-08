// pages/HomePage.js
import { BasePage } from './BasePage';
import { XPATH } from '../helper/locators.js';

export class HomePage extends BasePage {
  async search(text) {
    await this.fill(XPATH.search.input, text);
    await this.page.keyboard.press('Enter');
  }

  async openCatalog() {
    await this.click(XPATH.header.catalogButton);
  }

  async openCart() {
    await this.click(XPATH.header.cartLink);
  }

  async openAuth() {
    await this.click(XPATH.header.accountButton);
  }
}
// export default new HomePage();