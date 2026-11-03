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

  // Log in and add a product to the cart
  await loginPage.openSauceDemoSite();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addToCart();
  await productsPage.openCart();

  // Check the product before checkout
  await expect(cartPage.productName()).toContainText('Sauce Labs Backpack');

  // Enter customer details and complete the order
  await checkoutPage.checkout();
  await checkoutPage.fillCustomerInformation('John', 'Doe', '1000');
  await checkoutPage.continueToOverview();
  await checkoutPage.finishOrder();

  // Check that the order was completed
  await expect(checkoutPage.confirmationMessage()).toContainText('Thank you for your order!');
});

test('Checkout shows an error when required information is missing', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Log in and add a product to the cart
  await loginPage.openSauceDemoSite();
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.addToCart();
  await productsPage.openCart();

  // Open checkout and continue without filling in the required details
  await checkoutPage.checkout();
  await checkoutPage.continueToOverview();

  // Check that checkout asks for the first name
  await expect(checkoutPage.errorMessage()).toContainText('Error: First Name is required');
});
