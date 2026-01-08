// pages/CatalogPage.js
import { BasePage } from './BasePage';
import { XPATH } from '../locators/locators.xpath';

export class CatalogPage extends BasePage {

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
