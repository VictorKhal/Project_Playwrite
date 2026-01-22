export const XPATH = {

  header: {
    logoLink: "//div[@class='logotype']/a",
    catalogButton: "//button[contains(@class,'styles_catalogButton')]",
    searchInput: "//div[contains(@class,'Search_searchInputContainer')]/input",
    searchSubmit: "//div[contains(@class,'Search_searchInputContainer')]/button",
    cartLink: "//div[@class='headerCart']/a[contains(@href,'/order')]",
    cartLinkCount: "//div[@class='headerCart']/a[contains(@href,'/order')]//div[contains(@data-testid,'header-count')]",
    favoritesLink: "//a[contains(@href,'/aside')]",
    favoritesLinkCount: "//div[contains(@data-testid,'header-favorites-count')]/span",
    accountButton: "//button[contains(span, 'Аккаунт')]",
    logIn: "//button[@data-testid='loginButton']",
  },

  auth: {
    modal: "//div[@data-testid='modal']",
    emailInput: "//input[@id='login-email']",
    passwordInput: "//input[@id='login-password']",
    submitButton: "(//button[contains(div,'Продолжить')])[2]",

    registerLink: "//div[@class='EmailLoginForm_bottomLinks__3OLXD']/div/button[contains(text(),'Регистрация')]",
    registerForm: "//div[@class='RegistrationForm_container__BkpVT']",

    forgotPasswordLink: "//div[@class='FieldWrapper-module__label']/div/button[contains(text(),'Забыли пароль')]",
    resetPasswordForm: "//div[@data-testid='Reset Password Form']",

    wrongEmailMessage: "//span[contains(text(),'Неправильный формат электронной почты')]",
    successLogin: "//div[@class='userToolsTitle']",
  },

  search: {
    input: "//input[@name='search_term_string']",
    submitButton: "//button[@class='Search_searchBtn__Tk7Gw']",
    searchResultsContainer: "//div[@class='SearchResults_content__lRYQw']",
    firstProductCard: "(//div[@class='style_product__xVGB6 style_startFlex__Agzf4'])[1]",

    productCard: "//div[@data-testid='search-result-product-list']",
    searchButton: "//button[@class='Search_searchBtn__Tk7Gw']",
},

  catalog: {
    sidebar: "//aside",
    categoryLinkByName: (name) =>
      `//a[contains(@class,'catalog-navigation') and contains(normalize-space(), '${name}')]`,

    filters: {
      filterBlock: "//div[contains(@class,'filters')]",

      price: {
        min: "//input[contains(@name,'min')]",
        max: "//input[contains(@name,'max')]"
      },

      brandCheckboxByName: (brand) =>
        `//label[.//span[contains(text(),'${brand}')]]//input[@type='checkbox']`,

      installmentCheckbox:
        "//label[contains(.,'Оплата частями')]//input[@type='checkbox']",

      installmentOption2Months:
        "//label[contains(normalize-space(),'2 месяца')]//input",

      installmentOption3Months:
        "//label[contains(normalize-space(),'3 месяца')]//input",

      applyFiltersButton:
        "//button[.//text()[contains(.,'Показать') or contains(.,'Применить')]]",

      resetFiltersButton:
        "//button[.//text()[contains(.,'Сбросить')]]"
    },


    sorting: {
      dropdown: "//select[contains(@aria-label,'Сортировка')]",
      optionByText: (text) =>
        `//select[contains(@aria-label,'Сортировка')]/option[contains(text(),'${text}')]`
    }
  },


  product: {
    title: "//h1",
    price: "//span[contains(@class,'price')]",
    addToCartButton:
      "//button[.//text()[contains(.,'В корзину')]]",

    addToFavoritesButton:
      "//button[contains(@aria-label,'Избранное')]",

    characteristicsTab:
      "//button[contains(text(),'Характеристики')]",

    reviewsTab:
      "//button[contains(text(),'Отзывы')]"
  },

  cart: {
    pageTitle: "//h1[contains(text(),'Корзина')]",

    cartItem:
      "//div[contains(@class,'cart-item')]",

    cartItemTitle:
      ".//a[contains(@class,'item__title')]",

    increaseQtyButton:
      ".//button[contains(@class,'increase')]",

    decreaseQtyButton:
      ".//button[contains(@class,'decrease')]",

    removeItemButton:
      ".//button[contains(@aria-label,'Удалить')]",

    checkoutButton:
      "//button[.//text()[contains(.,'Оформить заказ')]]"
  },


  /* =======================
     POPUPS / TOOLTIP / NOTIFICATIONS
  ======================= */
  popups: {
    addToCartSuccess:
      "//div[contains(@class,'notification') and contains(.,'добавлен')]",

    closePopupButton:
      "//button[@data-testid='modalClose']"
  }
};

export default XPATH;
