// pages/CartPage.js
import { BasePage } from './BasePage';
import { XPATH } from '../locators/locators.xpath';

export class CartPage extends BasePage {

  async openCart() {
    await this.open('/order/');
  }

  async increaseQuantity() {
    await this.click(XPATH.cart.increaseQtyButton);
  }

  async decreaseQuantity() {
    await this.click(XPATH.cart.decreaseQtyButton);
  }

  async removeProduct() {
    await this.click(XPATH.cart.removeItemButton);
  }

  async proceedToCheckout() {
    await this.click(XPATH.cart.checkoutButton);
  }

  async isCartEmpty() {
    const count = await this.page
      .locator(`xpath=${XPATH.cart.cartItem}`)
      .count();
    return count === 0;
  }
}
