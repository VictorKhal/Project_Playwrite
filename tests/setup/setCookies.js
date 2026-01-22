import { test } from '@playwright/test';
import path from 'path';

const cookiesFile = path.join(__dirname, '../../playwright/.auth/cookies.json');

test('Set cookies', async ({ page }) => {
    await page.goto('https://www.21vek.by/');
    await page.locator('//div[@class="AgreementCookie_buttons__zhpxj"]/button[2]').click();
    // await page.waitForTimeout(5000);
    await page.waitForLoadState('load');
    await page.context().storageState({ path: cookiesFile });

    // Ждем, чтобы куки успели записаться в браузер
//   await page.waitForLoadState('networkidle');

})