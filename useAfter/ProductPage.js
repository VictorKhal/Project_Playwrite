// pages/ProductPage.js
import { BasePage } from './BasePage';
import { XPATH } from '../locators/locators.xpath';

export class ProductPage extends BasePage {

  async addToCart() {
    await this.click(XPATH.product.addToCartButton);
  }

  async addToFavorites() {
    await this.click(XPATH.product.addToFavoritesButton);
  }

  async openCharacteristics() {
    await this.click(XPATH.product.characteristicsTab);
  }

  async openReviews() {
    await this.click(XPATH.product.reviewsTab);
  }

  async isProductPageOpened() {
    return await this.isVisible(XPATH.product.title);
  }
}
