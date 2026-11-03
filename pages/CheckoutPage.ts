import { type Page } from '@playwright/test';

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkout() {
    await this.page.locator('#checkout').click();
  }

  async fillCustomerInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('#first-name').fill(firstName);
    await this.page.locator('#last-name').fill(lastName);
    await this.page.locator('#postal-code').fill(postalCode);
  }

  async continueToOverview() {
    await this.page.locator('#continue').click();
  }

  async finishOrder() {
    await this.page.locator('#finish').click();
  }

  confirmationMessage() {
    return this.page.locator('.complete-header');
  }
}
