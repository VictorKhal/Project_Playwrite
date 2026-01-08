// pages/SearchResultsPage.js
import { BasePage } from './BasePage';
import { XPATH } from '../locators/locators.xpath';

export class SearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
    this.productCards = XPATH.search.productCard;
    this.firstProductCard = XPATH.search.firstProductCard;
  }

  async openBySearchTerm(term) {
    await this.open(`/search/?term=${encodeURIComponent(term)}`);
  }

  async openFirstProduct() {
    await this.click(this.firstProductCard);
  }

  async getProductsCount() {
    return await this.page.locator(`xpath=${this.productCards}`).count();
  }
}
