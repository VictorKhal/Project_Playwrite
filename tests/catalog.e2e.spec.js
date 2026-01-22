import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage.js'
import { MIN_PRICE,MAX_PRICE } from '../utils/testData.js';

test.describe('CatalogPage 21vek', async () => {

    test.beforeEach(async  ({page}) => {
        await page.goto('/');
    });

    test('Add product to cart from listing page', async ({page}) => {
        const catalogPage = new CatalogPage(page);

        await catalogPage.catalogButton.click();
        await catalogPage.addProductToCartFromListingPage();
        const productName = await catalogPage.productNameAddedToCart.innerText();
        await catalogPage.cartButton.click();
        await catalogPage.closePromoModalOnCartPage();
        await expect(await catalogPage.productNameOnCartPage).toHaveText(productName)
    })

    test('Add product to favorites from listing page', async ({page}) => {
        const catalogPage = new CatalogPage(page);

        await catalogPage.catalogButton.click();
        await catalogPage.addProductToFavouritesFromListingPage();
        const productName = await catalogPage.productNameOnListingPage.innerText({timeout: 10000});
        await page.goto('/');
        await catalogPage.navigateToEndpoint
        await expect(await catalogPage.productNameOnFavouritesPage).toHaveText(productName)
    })

    test('Open product card from listing page', async ({page}) => {
        const catalogPage = new CatalogPage(page);

        await catalogPage.catalogButton.click();
        await catalogPage.openRandomListingPage();
        const productName = await catalogPage.productNameOnListingPage.innerText();
        await catalogPage.productNameOnListingPage.click();
        await expect(await catalogPage.productCardName).toHaveText(productName)

    })

    test('Add product to compare from listing page', async ({page}) => {
        const catalogPage = new CatalogPage(page);

        await catalogPage.catalogButton.click();
        await catalogPage.addProductToCompareFromListingPage();
        const productName = await catalogPage.productNameOnListingPage.innerText();
        await catalogPage.compareProductSubmitButton.click({timeout: 10000});
        await expect(await catalogPage.productNameOnComparePage).toHaveText(productName)
    })

    test('Open reviews of product from listing page', async ({page}) => {
        const catalogPage = new CatalogPage(page);

        await catalogPage.catalogButton.click();
        await catalogPage.addProductToCompareFromListingPage();
        await catalogPage.reviewCounterOnListingPage.click();
        const activeTabName = await productCard.activeTab.innerText();
        await expect(activeTabName).toContain(TAB_REVIEWS_NAME)
    })

    test('TC-23 Filter products by Manufacturer on listing page', async ({page}) => {
        const catalogPage = new CatalogPage(page);

        await catalogPage.catalogButton.click();
        await catalogPage.openRandomListingPage();
        const filterName = await catalogPage.nameOfFilterManufacturers.innerText();
        await catalogPage.checkboxFilterManufacturers.click();
        const productNames = await catalogPage.productNamesOnListingPageAfterFiltration.elementHandles();
        const productNamesTexts = await Promise.all(productNames.map(productName => productName.innerText()));
        for (const text of productNamesTexts) {
            await expect(text).toContain(filterName);
        }
    })

    test('TC-24 Sort products from chip to expensive', async ({page}) => {
        const catalogPage = new CatalogPage(page);

        await catalogPage.catalogButton.click();
        await catalogPage.openRandomListingPage();
        const productPricesNumbers = await catalogPage.getPricesDiapasonFromMinToMax(MIN_PRICE, MAX_PRICE);
        await expect(productPricesNumbers.every(num => num >= MIN_PRICE && num <= MAX_PRICE)).toBe(true);
    })

    test('TC-25 Sort products by special offer', async ({page}) => {
        const catalogPage = new CatalogPage(page);

        await catalogPage.catalogButton.click();
        await catalogPage.openRandomListingPage();
        await catalogPage.checkboxFilterSpecialOffers.click();
        const productsWithDiscount = await catalogPage.discountTag.elementHandles();
        const productWithDiscountTags = await Promise.all(productsWithDiscount.map(product => product.innerText()));
        for (const tagText of productWithDiscountTags) {
            await expect(tagText).toContain('%');
        }
    })
});