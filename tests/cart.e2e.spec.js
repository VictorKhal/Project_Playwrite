import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage.js';
import {EMPTY_CART_MESSAGE, PROMO_CODE, AUTH_GET_PARAMETER } from '../utils/testData.js';

test.describe('Cart page 21vek', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/order/');
  });

  test('TC-8 Open cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    await expect(cartPage.basketConfirmationButton).toBeVisible();
  });

  test('TC-9 Add product to favorites from cart', async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.putFirstProductToCart();

    const productName = await cartPage.productNameOnCartPage.innerText({ timeout: 10000 });

    await cartPage.addToFavoriteButton.click();
    await page.waitForTimeout(3000);
    await page.goto('/aside/');

    await expect(cartPage.productNameOnFavoritePage).toHaveText(productName);
  });

  test('TC-10 Delete product from cart page', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.putFirstProductToCart();

    await cartPage.deleteProductFromCart();

    await expect(cartPage.emptyCartMessage).toHaveText(EMPTY_CART_MESSAGE);
  });

  test('ТС-11 Add product to cart and check count ', async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.putFirstProductToCart();

    await cartPage.increaseQuantity();

    const productCounter = await cartPage.getCounterValue();
    await page.waitForTimeout(2000);
    const totalCounter = await cartPage.getTotalCounterValue();

    expect(productCounter).toEqual(totalCounter);
  });

  test('TC-12 Add promo code to cart', async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.putFirstProductToCart();

    await cartPage.addPromoCode(PROMO_CODE);
    const inputCode = await cartPage.getPromoCode();

    console.log(inputCode);

    await expect(inputCode).toEqual(PROMO_CODE);
    await expect(cartPage.discountInformation).toBeVisible();
  });

  test('TC-13 Redirect to authorization if you not login', async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.putFirstProductToCart();

    await cartPage.closePromoModalOnCartPage();

    await cartPage.proceedToCheckout();

    await expect(page).toHaveURL(AUTH_GET_PARAMETER);
  });

});
