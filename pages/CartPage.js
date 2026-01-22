// pages/CartPage.js
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  get cartLink() {
    return this.page.locator('//div[@class="headerCart"]/a[contains(@href,"/order")]');
  }

  get cartLinkCount() {
    return this.page.locator(
      '//div[@class="headerCart"]/a[contains(@href,"/order")]//div[contains(@data-testid,"header-count")]'
    );
  }

  get productNameOnCartPage() {
    return this.page.locator('.BasketItem_title__MzCQ9');
  }

  get counterValue() {
    return this.page.locator('(//div[@class = "Counter_counter__ftQCi"])[1]/input');
  }

  get promoModalOnCartPage() {
    return this.page.locator('.UnicefModal_closeBtn__QmkH_');
  }

  get addToFavoriteButton() {
    return this.page.locator('(//button[@aria-label="Избранное"])[1]');
  }

  get deleteFromCartButton() {
    return this.page.locator('button[aria-label="Удалить товар"]');
  }

  get deleteSubmitButton() {
    return this.page.locator('//button[@data-testid="modal-confirmation-button"]');
  }

  get emptyCartMessage() {
    return this.page.locator('//h2[contains(@class,"EmptyBasket_title")]');
  }

  get plusCounterIcon() {
    return this.page.locator('button[aria-label="Увеличение количества"]');
  }

  get totalCounterValue() {
    return this.page.locator('div[data-testid="header-count"] span');
  }

  get promoCodeInput() {
    return this.page.locator('input[name="promocode"]');
  }

  get discountInformation() {
    return this.page.locator('[data-testid="total-discount"]');
  }

  get promoCodeSubmitButton() {
    return this.page.locator('[data-testid="promocodeConfirmation"]');
  }

  get basketConfirmationButton() {
    return this.page.locator('[data-testid="basketConfirmation"]');
  }

  get productNameOnFavoritePage() {
    return this.page.locator('(//span[contains(@class,"CardInfo_text")])[1]');
  }

  get addFirstProductToCart(){
    return this.page.locator(`(//button[@data-testid="card-basket-action"])[1]`);
  }

  async putFirstProductToCart() {
    await this.open('/search/?sa=&term=%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA');
    await this.addFirstProductToCart.click();
    await this.open('/order/');
  }

  async openCart() {
    await this.open('/order/');
  }

  async closePromoModalOnCartPage() {
    if (await this.promoModalOnCartPage.isVisible()) {
      await this.promoModalOnCartPage.click();
    }
  }

  async deleteProductFromCart() {
    await this.deleteFromCartButton.click();
    await this.deleteSubmitButton.click();
  }

  async increaseQuantity() {
    await this.plusCounterIcon.click();
  }

  async addPromoCode(code) {
    if (!code) return;

    await this.promoCodeInput.fill(code);
    await this.promoCodeSubmitButton.click();
  }

  async proceedToCheckout() {
    await this.basketConfirmationButton.click();
  }

  async getCounterValue() {
    return Number(await this.counterValue.inputValue());
  }

  async getTotalCounterValue() {
    return Number(await this.totalCounterValue.textContent());
  }

  async getPromoCode() {
    return String(await this.promoCodeInput.inputValue())
  }

  async isCartEmpty() {
    return await this.emptyCartMessage.isVisible();
  }
}