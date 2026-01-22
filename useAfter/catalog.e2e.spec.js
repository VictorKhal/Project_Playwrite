import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import {XPATH} from '../helper/locators';


test.describe('Catalog & Filters', () => {

  test('TC-06 Open catalog', async ({ page }) => {
    const home = new HomePage(page);

    await home.open();
    await home.openCatalog();

    await expect(
      page.locator(`xpath=${XPATH.catalog.sidebar}`)
    ).toBeVisible();
  });

  test('TC-07 Open category', async ({ page }) => {
    await page.goto('/');
    await page.locator(`xpath=${XPATH.header.catalogButton}`).click();
    await page.locator(
      `xpath=${XPATH.catalog.categoryLinkByName('Телевизоры')}`
    ).click();

    await expect(page).toHaveURL(/televizory/);
  });

  test('TC-08 Filter by price', async ({ page }) => {
    await page.goto('/search/?term=телевизор');

    await page.locator(`xpath=${XPATH.catalog.filters.price.min}`).fill('500');
    await page.locator(`xpath=${XPATH.catalog.filters.price.max}`).fill('1500');
    await page.locator(`xpath=${XPATH.catalog.filters.applyFiltersButton}`).click();

    await expect(
      page.locator(`xpath=${XPATH.search.productCard}`)
    ).toHaveCountGreaterThan(0);
  });

  test('TC-09 Filter by brand', async ({ page }) => {
    await page.goto('/search/?term=телевизор');
    await page.locator(
      `xpath=${XPATH.catalog.filters.brandCheckboxByName('Samsung')}`
    ).click();

    await expect(
      page.locator(`xpath=${XPATH.search.productCard}`)
    ).toHaveCountGreaterThan(0);
  });

  test('TC-10 Reset filters', async ({ page }) => {
    await page.goto('/search/?term=телевизор');
    await page.locator(`xpath=${XPATH.catalog.filters.resetFiltersButton}`).click();

    await expect(page).toHaveURL(/search/);
  });
});
