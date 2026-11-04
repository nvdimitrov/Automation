## Introduction

This project contains UI automation tests written with Playwright and TypeScript.

The site that is tested https://www.saucedemo.com/

The tests cover login, adding/removing a product from the cart and completing an order.

## Install project dependencies

```bash
npm ci
```

## Install the browsers
```bash
npx playwright install chromium firefox
```
## Run tests only in Firefox

```bash
npx playwright test --project=firefox
```

## Run tests only in Chromium

npx playwright test --project=chromium 

## Run all tests (both browsers)

npx playwright test
