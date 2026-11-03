import { type Page } from '@playwright/test';

export class ProductsPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  } 

  async addToCart () {
    await this.page.locator('#add-to-cart-sauce-labs-backpack').click();
  } 
  
  async openCart () {     
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

}
