// pages/AuthPage.js
import { BasePage } from './BasePage';
import { XPATH } from '../helper/locators';

export class AuthPage extends BasePage {

  async openAuthModal() {
    await this.click(XPATH.header.accountButton);
    await this.click(XPATH.header.logIn);
  }

  async login(email, password) {
    await this.fill(XPATH.auth.emailInput, email);
    await this.fill(XPATH.auth.passwordInput, password);
    await this.click(XPATH.auth.submitButton);
  }

  async openRegistration() {
    await this.click(XPATH.auth.registerLink);
  }

  async openForgotPassword() {
    await this.click(XPATH.auth.forgotPasswordLink);
  }

  async isAuthModalVisible() {
    return await this.isVisible(XPATH.auth.modal);
  }
}

// export default new AuthPage();