import { type Page } from '@playwright/test';

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Open the checkout form
  async checkout() {
    await this.page.locator('#checkout').click();
  }

  // Fill the customer details
  async fillCustomerInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('#first-name').fill(firstName);
    await this.page.locator('#last-name').fill(lastName);
    await this.page.locator('#postal-code').fill(postalCode);
  }

  // Open the order overview
  async continueToOverview() {
    await this.page.locator('#continue').click();
  }

  // Submit the order
  async finishOrder() {
    await this.page.locator('#finish').click();
  }

  // Return the order confirmation message locator
  confirmationMessage() {
    return this.page.locator('.complete-header');
  }
}
