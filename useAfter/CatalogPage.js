// pages/CatalogPage.js
import { BasePage } from './BasePage';

export class CatalogPage extends BasePage {

  // get catalogButton () {
  //   return this.page.locator(`.styles_catalogButton__z9L_j`);
  // }
  get catalogButton() {
    return this.page.locator(`//button[contains(@class,'styles_catalogButton')]`)
  }


// class Filters extends Base {

    get nameOfFilterManufacturers () {
        return this.page.locator('(//div[@class=\'ListingOption_labelText__DI9DJ Text-module__text Text-module__caption\'])[1]');
    }

    get productNamesOnListingPageAfterFiltration(){
        return this.page.locator(`//span[@class="CardInfo_text__GGroD ListingProduct_infoText__VpOUR Text-module__text Text-module__caption Text-module__ellipsis"]`);
    }

    get productPricesOnListingPageAfterFiltration(){
        return this.page.locator(`//span[@class="Price-module__price Text-module__text Text-module__large Text-module__bold"]`);
    }

    get checkboxFilterManufacturers () {
        return this.page.locator('(//div[@class=\'ListOfProducers_listContainer__haGh9\']//span[@class=\'SvgIcon-module__base BaseCheckBox-module__uncheckedIcon styles-module__icon16\'])[1]');
    }

    get inputMinPrice(){
        return this.page.locator('#minPrice');
    }

    get inputMaxPrice(){
        return this.page.locator('#maxPrice');
    }

    get checkboxFilterSpecialOffers(){
        return this.page.locator(`//span[contains(text(), 'Товары со скидкой')]`);
    }

    get productCardName () {
        return this.page.locator(`//h1[@class="ProductCardScreen_title__1vng6 Title-module__title Title-module__h1 Title-module__ellipsis"]`);
    }

    get activeTab() {
        return this.page.locator(`//button[@class="Tabs-module__tab Tabs-module__active"]`);
    }

    async fillMinPriceAndMaxPriceInFilter(minPrice, maxPrice) {
        if(minPrice){
            await this.inputMinPrice.isVisible();
            await this.inputMinPrice.fill(minPrice);
        }
        if(maxPrice){
            await this.inputMaxPrice.isVisible();
            await this.inputMaxPrice.fill(maxPrice);
        }
    }

    async getPricesDiapasonFromMinToMax(minPrice, maxPrice) {
        await this.fillMinPriceAndMaxPriceInFilter(minPrice, maxPrice);
        const productPrices = await this.productPricesOnListingPageAfterFiltration.elementHandles();

        return await Promise.all(
            productPrices.map(async (productPrice) => {
                const text = await productPrice.innerText();
                return parseFloat(text);
            })
        );
    }

// }

// export { Filters };

// class ProductListingPage extends Base {

    get productNameOnFavouritesPage() {
        return this.page.locator(`//span[@class='CardInfo_text__GGroD Text-module__text Text-module__caption Text-module__ellipsis']`);
    }

    get productNameOnListingPage() {
        return this.page.locator(`(//span[@class="CardInfo_text__GGroD ListingProduct_infoText__VpOUR Text-module__text Text-module__caption Text-module__ellipsis"])[1]`);
    }

    get firstLevelCategories() {
        return this.page.locator(`//span[@class='styles_categoryName__8_D9K styles_categoryName__V55aH']`);
    }

    get secondLevelCategories() {
        return this.page.locator(`//a[@class='LinkButton-module__wrapper LinkButton-module__body LinkButton-module__bold LinkButton-module__black CategoriesScreen_categoryTitle__W9cCS']`);
    }

    get productListingPages() {
        return this.page.locator(`//a[@class='LinkButton-module__wrapper LinkButton-module__altbody LinkButton-module__bold LinkButton-module__black CategoryTile_categoryTitle__9Fd9f']`);
    }

    get discountTag() {
        return this.page.locator(`//div[@class="Label-module__label ListingProductLabels_label__WYOkp Label-module__default Label-module__Red ListingProductLabels_label__WYOkp"]//span[contains(text(), '%')]`);
    }

    get reviewCounterOnListingPage(){
        return this.page.locator(`(//span[@data-testid="card-review-count"])[1]`);
    }

    async openRandomListingPage() {

        const firstLevelCategoriesList = await this.firstLevelCategories.elementHandles();
        const randomIndexOfFirstLevelCategory = Math.floor(Math.random() * firstLevelCategoriesList.length);
        const randomFirstLevelCategory = firstLevelCategoriesList[randomIndexOfFirstLevelCategory];
        await randomFirstLevelCategory.isEnabled();
        await randomFirstLevelCategory.click({timeout: 10000});

        const secondLevelCategoriesList = await this.secondLevelCategories.elementHandles();
        if (secondLevelCategoriesList.length > 0) {
            if (secondLevelCategoriesList.length > 0) {
                const randomIndexOfSecondLevelCategory = Math.floor(Math.random() * secondLevelCategoriesList.length);
                const randomSecondLevelCategory = secondLevelCategoriesList[randomIndexOfSecondLevelCategory];
                await randomSecondLevelCategory.isEnabled();
                await randomSecondLevelCategory.click({timeout: 10000});
            }
        }

        const productListingPagesList = await this.productListingPages.elementHandles();
        const randomIndexOfProductListingPage = Math.floor(Math.random() * productListingPagesList.length);
        const randomProductListingPage = productListingPagesList[randomIndexOfProductListingPage];
        await randomProductListingPage.isEnabled();
        await randomProductListingPage.click({timeout: 10000});
    }

    async addProductToCartFromListingPage() {
        await this.openRandomListingPage();
        await this.addToCartButton.click();
    }

    async addProductToFavouritesFromListingPage() {
        await this.openRandomListingPage();
        await this.addToFavouritesIcon.isEnabled();
        await this.addToFavouritesIcon.click();
    }

    async addProductToCompareFromListingPage() {
        await this.openRandomListingPage();
        await this.addToCompareIcon.isEnabled();
        await this.addToCompareIcon.click();
    }

// }

// export { ProductListingPage };



    get productNameOnComparePage () {
        return this.page.locator(`//p[@class="CardInfo_info__cUeVj Product_cardName__JXQVc"]`);
    }





  

  

  async openCatalog() {
    await this.click(XPATH.header.catalogButton);
  }

  async openCategory(categoryName) {
    await this.click(
      XPATH.catalog.categoryLinkByName(categoryName)
    );
  }

  async filterByPrice(min, max) {
    await this.fill(XPATH.catalog.filters.price.min, min);
    await this.fill(XPATH.catalog.filters.price.max, max);
    await this.click(XPATH.catalog.filters.applyFiltersButton);
  }

  async filterByBrand(brand) {
    await this.click(
      XPATH.catalog.filters.brandCheckboxByName(brand)
    );
  }

  async resetFilters() {
    await this.click(XPATH.catalog.filters.resetFiltersButton);
  }

  async sortBy(optionText) {
    await this.click(XPATH.catalog.sorting.dropdown);
    await this.click(
      XPATH.catalog.sorting.optionByText(optionText)
    );
  }
}
