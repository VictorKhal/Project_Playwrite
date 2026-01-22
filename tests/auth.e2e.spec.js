import { test, expect } from '@playwright/test';
import { AuthPage } from "../pages/AuthPage";
import { CREDENTIALS, NOT_REGISTERED_CREDENTIAL, INVALID_CREDENTIAL_EMAIL, INVALID_PHONE, INVALID_CREDENTIAL_PHONE} from '../utils/testData';

test.describe('Authorization', () => {
 
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('TC-1 Open auth modal', async ({ page }) => {
        const authPage = new AuthPage(page);
        await authPage.openAuthModal();
        
        await expect(authPage.authModal).toBeVisible();
    });

    test('TC-2 Login invalid credentials', async ({ page }) => {
        const authPage = new AuthPage(page);

        await authPage.logIn(
            CREDENTIALS.wrongCredentials.login,
            CREDENTIALS.wrongCredentials.password
        );

        await expect(await authPage.errorMessage).toHaveText(INVALID_CREDENTIAL_EMAIL);
    });

    test('TC-3 Login valid credentials', async ({ page }) => {
        const authPage = new AuthPage(page);

        await authPage.logIn(
            CREDENTIALS.validCredentials.login,
            CREDENTIALS.validCredentials.password
        );

        await authPage.accountButton.click();
        
        await expect(authPage.authSuccessLogin).toBeVisible();
    });

    test('TC-4 Login not registered credentials', async ({ page }) => {
        const authPage = new AuthPage(page);

        await authPage.logIn(
            CREDENTIALS.notRegisteredCredentials.login,
            CREDENTIALS.notRegisteredCredentials.password
        );

        await expect(await authPage.errorMessage).toHaveText(NOT_REGISTERED_CREDENTIAL);
    });

    test('TC-5 Login with invalid phone number', async ({page}) => {
        const authPage = new AuthPage(page);

        await authPage.loginWithPhone(INVALID_PHONE);
        await expect(await authPage.errorMessage).toHaveText(INVALID_CREDENTIAL_PHONE)
    })

    test('TC-5 Open registration', async ({ page }) => {
        const authPage = new AuthPage(page);

        await authPage.openRegistration();

        await expect(authPage.authRegisterForm).toBeVisible()
    });

    test('TC-6 Forgot password', async ({ page }) => {
        const authPage = new AuthPage(page);

        await authPage.openForgotPassword();

        await expect(authPage.authResetPasswordForm).toBeVisible();
    });

    test('TC-7 Close auth modal', async ({ page }) => {
        const authPage = new AuthPage(page);
        await authPage.openAuthModal();

        // await page.locator(`xpath=${XPATH.popups.closePopupButton}`).click();

        await authPage.authCloseLoginWindow.click();

        await expect(authPage.authModal).not.toBeVisible();
    });
});
