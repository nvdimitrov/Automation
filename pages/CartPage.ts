import { type Page } from '@playwright/test';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

   productName () {
    return this.page.locator('#item_4_title_link');
}

  
}