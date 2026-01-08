import { test, expect } from '@playwright/test';
import { AuthPage } from "../pages/AuthPage";
import { XPATH } from "../helper/locators";
import { CREDENTIALS } from '../utils/testData';

test.describe('Authorization', () => {    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.21vek.by/');
        await page.locator('//div[@class="AgreementCookie_buttons__zhpxj"]/button[2]').click();
    });

    
    test('TC-1 Open auth modal', async ({ page }) => {
        const authPage = new AuthPage(page);
        await authPage.open();
        await authPage.openAuthModal();
        
        await expect(
            page.locator(`xpath=${XPATH.auth.modal}`)
        ).toBeVisible();
    });

    test('TC-2 Login invalid credentials', async ({ page }) => {
        const authPage = new AuthPage(page);
        await authPage.open();
        await authPage.openAuthModal();

        await page.locator(`xpath=${XPATH.auth.emailInput}`).fill(CREDENTIALS.wrongCredentials.login);
        await page.locator(`xpath=${XPATH.auth.passwordInput}`).fill(CREDENTIALS.wrongCredentials.password);
        await page.locator(`xpath=${XPATH.auth.submitButton}`).click();

        await expect(
            page.locator(`xpath=${XPATH.auth.wrongEmailMessage}`)
        ).toBeVisible();
    });

    test('TC-3 Login valid credentials', async ({ page }) => {
        const authPage = new AuthPage(page);
        await authPage.open();
        await authPage.openAuthModal();

        await page.locator(`xpath=${XPATH.auth.emailInput}`).fill(CREDENTIALS.validCredentials.login);
        await page.locator(`xpath=${XPATH.auth.passwordInput}`).fill(CREDENTIALS.validCredentials.password);
        await page.locator(`xpath=${XPATH.auth.submitButton}`).click();
        await page.locator(`xpath=${XPATH.header.accountButton}`).click();

        await expect(
            page.locator(`xpath=${XPATH.auth.successLogin}`)
        ).toBeVisible();
    });

    test('TC-4 Open registration', async ({ page }) => {
        const authPage = new AuthPage(page);
        await authPage.open();
        await authPage.openAuthModal();

        await page.locator(`xpath=${XPATH.auth.registerLink}`).click();

        await expect(
            page.locator(`xpath=${XPATH.auth.registerForm}`)
        ).toBeVisible();
    });

    test('TC-5 Forgot password', async ({ page }) => {
        const authPage = new AuthPage(page);
        await authPage.open();
        await authPage.openAuthModal();

        await page.locator(`xpath=${XPATH.auth.forgotPasswordLink}`).click();

        await expect(
            page.locator(`xpath=${XPATH.auth.resetPasswordForm}`)
        ).toBeVisible();
    });

    test('TC-6 Close auth modal', async ({ page }) => {
        const authPage = new AuthPage(page);
        await authPage.open();
        await authPage.openAuthModal();

        await page.locator(`xpath=${XPATH.popups.closePopupButton}`).click();

        await expect(
            page.locator(`xpath=${XPATH.auth.modal}`)
        ).not.toBeVisible();
    });
});
