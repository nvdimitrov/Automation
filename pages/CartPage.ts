import { type Page } from '@playwright/test';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Return the product name locator
   productName () {
    return this.page.locator('#item_4_title_link');
}

  // Remove a product from the cart 
  async removeProduct () {
    await this.page.locator('#remove-sauce-labs-backpack').click();
  }
}
