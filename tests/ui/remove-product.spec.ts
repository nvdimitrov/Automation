import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

test('Product is removed from cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.openSauceDemoSite();
    await loginPage.login('standard_user', 'secret_sauce'); 
    await productsPage.addToCart();
    await productsPage.openCart();
    await expect(cartPage.productName()).toContainText('Sauce Labs Backpack');
    await cartPage.removeProduct();
    await expect(cartPage.productName()).toHaveCount(0);
}
);