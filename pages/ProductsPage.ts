import { type Page } from '@playwright/test';

export class ProductsPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  } 

  // Add a product to the cart
  async addToCart () {
    await this.page.locator('#add-to-cart-sauce-labs-backpack').click();
  } 
  
  // Open the cart
  async openCart () {     
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

}
