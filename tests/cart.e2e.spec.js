import { test, expect } from '@playwright/test';

test.describe('Cart', () => {

  test('TC-16 Open cart', async ({ page }) => {
    await page.goto('/');
    await page.locator(`xpath=${XPATH.header.cartLink}`).click();

    await expect(
      page.locator(`xpath=${XPATH.cart.pageTitle}`)
    ).toBeVisible();
  });

  test('TC-17 Increase quantity', async ({ page }) => {
    await page.goto('/order/');
    await page.locator(`xpath=${XPATH.cart.increaseQtyButton}`).click();

    await expect(
      page.locator("//input[@type='number']")
    ).toHaveValue(/2/);
  });

  test('TC-18 Decrease quantity', async ({ page }) => {
    await page.goto('/order/');
    await page.locator(`xpath=${XPATH.cart.decreaseQtyButton}`).click();
  });

  test('TC-19 Remove product', async ({ page }) => {
    await page.goto('/order/');
    await page.locator(`xpath=${XPATH.cart.removeItemButton}`).click();

    await expect(
      page.locator(`xpath=${XPATH.cart.cartItem}`)
    ).toHaveCount(0);
  });

  test('TC-20 Go to checkout', async ({ page }) => {
    await page.goto('/order/');
    await page.locator(`xpath=${XPATH.cart.checkoutButton}`).click();

    await expect(page).toHaveURL(/checkout/);
  });
});
