import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('User can complete a purchase', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.openSauceDemoSite();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addToCart();
  await productsPage.openCart();
  await expect(cartPage.productName()).toContainText('Sauce Labs Backpack');

  await checkoutPage.checkout();
  await checkoutPage.fillCustomerInformation('John', 'Doe', '1000');
  await checkoutPage.continueToOverview();
  await checkoutPage.finishOrder();

  await expect(checkoutPage.confirmationMessage()).toContainText('Thank you for your order!');
});
