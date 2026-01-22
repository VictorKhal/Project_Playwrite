// pages/SearchResultsPage.js
import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {

  get searchInput() {
    return this.page.locator(`//div[contains(@class,'Search_searchInputContainer')]/input`)
  }
  
  get searchSubmitButton() {
    return this.page.locator(`//button[@class='Search_searchBtn__Tk7Gw']`)
  }

  get searchSuggestionsContainer() {
    return this.page.locator(`//div[@class='SearchResults_content__lRYQw']`)
  }

  get firstProductCard() {
    return this.page.locator(`(//div[@class='style_product__xVGB6 style_startFlex__Agzf4'])[1]`)
  }

  get productCard() {
    return this.page.locator(`//div[@data-testid='search-result-product-list']`)
  }

  get noSearch() {
    return this.page.locator(`//div[@class="NoSearchData_text__wkdr_"]`)
  }

  get clearSearchField() {
    return this.page.locator(`//button[@class="Search_clearBtn__j9c8N"]`)
  }

  async fillSearch(text) {
    await this.searchInput.isVisible()
    await this.searchInput.fill(text);
  }

  async search(text) {
    await this.fillSearch(text);
    await this.searchSubmitButton.isVisible();
    await this.searchSubmitButton.click();
  }
}
