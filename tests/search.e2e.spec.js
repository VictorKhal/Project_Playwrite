import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { XPATH } from '..//helper/locators.js';

test.describe('Search E2E', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.21vek.by/');
        await page.locator('//div[@class="AgreementCookie_buttons__zhpxj"]/button[2]').click();
    });

    test('TC-7 Search valid product', async ({ page }) => {
        const home = new HomePage(page);

        await home.open();
        await home.search('телевизор');

        const products = page.locator(`xpath=${XPATH.search.productCard}`);
        await expect(products.first()).toBeVisible();
    });

    test('TC-8 Search suggestions visible', async ({ page }) => {
        await page.goto('/');
        await page.locator(`xpath=${XPATH.search.input}`).fill('тел');

        await expect(
            page.locator(`xpath=${XPATH.search.searchResultsContainer}`)
        ).toBeVisible({ timeout: 5000 });
    });

    test('TC-9 Search invalid product', async ({ page }) => {
        const home = new HomePage(page);

        await home.open();
        await home.search('asdasdasd');

        await expect(
        page.locator("//text()[contains(.,'Ничего не найдено')]")
        ).toBeVisible();
    });

    test('TC-10 Search by Enter key', async ({ page }) => {
        await page.goto('/');
        await page.locator(`xpath=${XPATH.search.input}`).fill('ноутбук');
        await page.keyboard.press('Enter');

        await expect(page).toHaveURL("https://www.21vek.by/search/");
    });

    test('TC-11 Clear search input', async ({ page }) => {
        const input = page.locator(`xpath=${XPATH.search.input}`);

        await page.goto('/');
        await input.fill('телевизор');
        await input.fill('');

        await expect(input).toHaveValue('');
    });
});
