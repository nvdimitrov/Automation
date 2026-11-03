import { type Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  // Open the SauceDemo login page
  async openSauceDemoSite () {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Fill in credentials and submit the login form
  async login(username: string, password:string) {
    await this.page.locator('#user-name').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#login-button').click();
  }

  // Return the login error message locator
  errorMessageIncorrectCrendetials() {
  return this.page.locator('[data-test="error"]');
}

}
