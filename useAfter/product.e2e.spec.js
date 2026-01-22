import { test, expect } from '@playwright/test';

test.describe('Product Page', () => {

  test('TC-11 Open product page', async ({ page }) => {
    await page.goto('/search/?term=ноутбук');
    await page.locator(`xpath=${XPATH.search.firstProductCard}`).click();

    await expect(page.locator(`xpath=${XPATH.product.title}`)).toBeVisible();
  });

  test('TC-12 Add to cart', async ({ page }) => {
    await page.goto('/search/?term=ноутбук');
    await page.locator(`xpath=${XPATH.search.firstProductCard}`).click();
    await page.locator(`xpath=${XPATH.product.addToCartButton}`).click();

    await expect(
      page.locator(`xpath=${XPATH.popups.addToCartSuccess}`)
    ).toBeVisible();
  });

  test('TC-13 Add to favorites', async ({ page }) => {
    await page.goto('/search/?term=ноутбук');
    await page.locator(`xpath=${XPATH.search.firstProductCard}`).click();
    await page.locator(`xpath=${XPATH.product.addToFavoritesButton}`).click();

    await expect(
      page.locator("//text()[contains(.,'Избранное')]")
    ).toBeVisible();
  });

  test('TC-14 Open characteristics tab', async ({ page }) => {
    await page.goto('/search/?term=ноутбук');
    await page.locator(`xpath=${XPATH.search.firstProductCard}`).click();
    await page.locator(`xpath=${XPATH.product.characteristicsTab}`).click();

    await expect(page.locator("//table")).toBeVisible();
  });

  test('TC-15 Open reviews tab', async ({ page }) => {
    await page.goto('/search/?term=ноутбук');
    await page.locator(`xpath=${XPATH.search.firstProductCard}`).click();
    await page.locator(`xpath=${XPATH.product.reviewsTab}`).click();

    await expect(page.locator("//text()[contains(.,'Отзывы')]")).toBeVisible();
  });
});
