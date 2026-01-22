// pages/AuthPage.js

import { BasePage } from './BasePage';

export class AuthPage extends BasePage {

  get accountButton() {
    return this.page.locator(`//button[contains(span, 'Аккаунт')]`)
  }

  get loginButton() {
    return this.page.locator(`//button[@data-testid='loginButton']`)
  }
    
  get authModal() {
    return this.page.locator(`//div[@data-testid='modal']`);
  }

  get authEmailInput() {
    return this.page.locator(`//input[@id='login-email']`);
  }

  get authPasswordInput() {
    return this.page.locator(`//input[@id='login-password']`);
  }

  get authSubmitButton() {
    return this.page.locator(`(//button[contains(div,'Продолжить')])[2]`);
  }

  get authRegisterLink() {
    return this.page.locator(`//div[@class='EmailLoginForm_bottomLinks__3OLXD']/div/button[contains(text(),'Регистрация')]`);
  }

  get authRegisterForm() {
    return this.page.locator(`//div[@class='RegistrationForm_container__BkpVT']`)
  }

  get authForgotPasswordLink() {
    return this.page.locator(`//div[@class='FieldWrapper-module__label']/div/button[contains(text(),'Забыли пароль')]`)
  }

  get authResetPasswordForm() {
    return this.page.locator(`//div[@data-testid='Reset Password Form']`)
  }

  get authPhoneInput() {
    return this.page.locator('[inputmode="numeric"]');
  }

  get phoneOption(){
    return this.page.locator('[class="SvgIcon-module__base BaseRadioButton-module__uncheckedIcon"]');
  }

  get loginByPhoneSubmitButton() {
        return this.page.locator(`(//button[.//div[text()="Продолжить"]])[1]`);
    }

  get authSuccessLogin() {
    return this.page.locator(`//div[@class='userToolsTitle']`)
  }

  get authCloseLoginWindow() {
    return this.page.locator(`//button[@data-testid='modalClose']`)
  }

  get errorMessage() {
    return this.page.locator('.ErrorMessage-module__error');
  }

  async openAuthModal() {
    await this.accountButton.isVisible()
    await this.accountButton.click();
    await this.loginButton.isVisible()
    await this.loginButton.click();
  }

  async fillCredentials(email, password) {
    await this.authEmailInput.isVisible();
    await this.authEmailInput.fill(email);
    await this.authPasswordInput.isVisible();
    await this.authPasswordInput.fill(password);
  }

  async logIn(email, password) {
    await this.openAuthModal();
    await this.fillCredentials(email, password);
    await this.authSubmitButton.isVisible()
    await this.authSubmitButton.click();
  }

  async loginWithPhone(phoneNumber) {
    await this.openAuthModal();
    await this.phoneOption.isVisible();
    await this.phoneOption.click();
    await this.fillPhoneNumber(phoneNumber);
    await this.loginByPhoneSubmitButton.isVisible();
    await this.loginByPhoneSubmitButton.click();
  }

  async fillPhoneNumber(phoneNumber) {
    await this.authPhoneInput.isVisible();
    await this.authPhoneInput.fill(phoneNumber);
  }

  async openRegistration() {
    await this.openAuthModal();
    await this.authRegisterLink.click();
  }

  async openForgotPassword() {
    await this.openAuthModal();
    await this.authForgotPasswordLink.click();
  } 
}