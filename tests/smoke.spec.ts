import { test, expect } from "@playwright/test";
import { describe } from "node:test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test("application start on landingpage", async ({ page }) => {
  await expect(page).toHaveTitle(/spainproperties/);

  const header = page.locator("header");
  await expect(header).toBeVisible();

  const footer = page.locator("footer");
  await expect(footer).toBeVisible();
});

test("listings", async ({ page }) => {
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Listings" })
    .click();

  await page.goto(
    "http://localhost:3000/properties?maxPrice=0&page=1&size=12&sort=latest"
  );

  await page.getByRole("button", { name: "villa" }).click();
  await page
    .locator("div:nth-child(2) > .bg-no-repeat > .cursor-pointer")
    .click();
  await page
    .locator("div:nth-child(3) > .bg-no-repeat > .cursor-pointer")
    .click();
  await page.getByRole("link", { name: "compare" }).click();
});
