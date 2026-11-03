import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
 
test('User is logged successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Open the site and log in with valid details
    await loginPage.openSauceDemoSite();
    await loginPage.login('standard_user', 'secret_sauce');

    // Check that the products page opens
    await expect(page).toHaveURL(/inventory/);
});

test('User is NOT logged successfully', async ({ page}) => {
    const loginPage = new LoginPage(page);

    // Open the site and try to log in with invalid details
    await loginPage.openSauceDemoSite();
    await loginPage.login('standard_user', 'secret_sause1');

    // Check that the error message appears
    await expect(loginPage.errorMessageIncorrectCrendetials()).toContainText(
  'Epic sadface: Username and password do not match any user in this service'
);
});
