import { test, expect } from '@playwright/test';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import {SEARCHTERM, NOSEARCH} from '../utils/testData'

test.describe('Search E2E', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('TC-8 Search valid product', async ({ page }) => {
        const searchPage = new SearchResultsPage(page);

        await searchPage.search(SEARCHTERM);

        const products = await searchPage.productCard;
        await expect(products).toBeVisible();
    });

    test('TC-8 Search suggestions visible', async ({ page }) => {
        const searchPage = new SearchResultsPage(page);
        await searchPage.fillSearch(SEARCHTERM);

        await expect(searchPage.searchSuggestionsContainer).toBeVisible({ timeout: 5000 });
    });

    test('TC-9 Search invalid product', async ({ page }) => {
        const searchPage = new SearchResultsPage(page);
        await searchPage.search(NOSEARCH);

        await expect(searchPage.noSearch).toBeVisible();
    });

    test('TC-10 Search by Enter key', async ({ page }) => {
        const searchPage = new SearchResultsPage(page);
        await searchPage.fillSearch(SEARCHTERM);
        await searchPage.searchInput.press('Enter');
        // await searchPage.page.keyboard.press('Enter');

        const products = await searchPage.productCard;
        await expect(products).toBeVisible();
    });

    test('TC-11 Clear search input', async ({ page }) => {
       const searchPage = new SearchResultsPage(page);

        await searchPage.search(SEARCHTERM);
        await searchPage.clearSearchField.click();
        await expect(searchPage.searchInput).toHaveValue('');
    });
});
