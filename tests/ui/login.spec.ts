import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
 
test('User is logged succesfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
});

test('User is NOT logged sucessfully', async ({ page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sause1');

    await expect(loginPage.errorMessage()).toContainText(
  'Epic sadface: Username and password do not match any user in this service'
);
});