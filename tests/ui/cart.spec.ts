import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

test('Product is added to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Log in and add a product to the cart
    await loginPage.openSauceDemoSite();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addToCart();
    await productsPage.openCart();

    // Check that the product is in the cart
    await expect(cartPage.productName()).toContainText('Sauce Labs Backpack');
});

test('Product is removed from cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Log in and add a product to the cart
    await loginPage.openSauceDemoSite();
    await loginPage.login('standard_user', 'secret_sauce'); 
   
    await productsPage.addToCart();
    await productsPage.openCart();
   
    // Check the product before removing it
    await expect(cartPage.productName()).toContainText('Sauce Labs Backpack');
    await cartPage.removeProduct();

    // Check that the cart no longer contains the product
    await expect(cartPage.productName()).toHaveCount(0);
});
