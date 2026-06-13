import { expect, test } from "@playwright/test";

test("renders stable visual screenshots", async ({ page }, testInfo) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /tv en vivo para toda tu casa/i })).toBeVisible();
  await expect(page.locator('main img[alt="NovaTV"]').first()).toBeVisible();
  await expect(page.getByText("PLAN TRIMESTRAL", { exact: true })).toBeVisible();
  await expect(page.getByText(/hasta 3 dispositivos/i).first()).toBeVisible();
  await expect(page.getByText("Quiero mi prueba gratis").first()).toBeVisible();

  const screenshot = await page.screenshot({
    path: testInfo.outputPath(`${testInfo.project.name}-landing.png`),
    fullPage: true,
    animations: "disabled"
  });

  expect(screenshot.length).toBeGreaterThan(80_000);
});

test("commercial CTAs point to WhatsApp with source-specific intent", async ({ page }) => {
  await page.goto("/");

  const hrefs = await page
    .locator('a[href*="wa.me/5492922432839"]')
    .evaluateAll((links) => links.map((link) => decodeURIComponent((link as HTMLAnchorElement).href)));

  expect(hrefs.length).toBeGreaterThanOrEqual(6);
  expect(hrefs.some((href) => href.includes("probar NovaTV gratis por 48 horas"))).toBeTruthy();
  expect(hrefs.some((href) => href.includes("3 dispositivos"))).toBeTruthy();
  expect(hrefs.some((href) => href.includes("Plan Mensual de NovaTV"))).toBeTruthy();
  expect(hrefs.some((href) => href.includes("Plan Trimestral de NovaTV"))).toBeTruthy();
  expect(hrefs.some((href) => href.includes("TV Box"))).toBeTruthy();
});

test("FAQ accordion exposes accessible controls", async ({ page }) => {
  await page.goto("/#faq");

  const question = page.getByRole("button", { name: "¿Necesito Android TV?" });
  await question.click();

  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(question).toHaveAttribute("aria-controls", /faq-panel-/);
  await expect(page.getByText(/NovaTV funciona en Android TV/i)).toBeVisible();
});

test("mobile menu opens and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Abrir menú" });
  await menuButton.click();
  await expect(page.locator("#mobile-menu").getByRole("link", { name: "FAQ" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Abrir menú" })).toBeVisible();
});

test("floating and sticky WhatsApp CTAs are mobile-ready", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const floating = page.getByTestId("floating-whatsapp");
  const sticky = page.getByTestId("mobile-sticky-cta");

  await expect(floating).toBeVisible();
  await expect(floating).toHaveClass(/rounded-full/);
  await expect(floating.locator("svg")).toBeVisible();
  await expect(sticky).toBeVisible();
  await expect(sticky.getByRole("link", { name: /quiero mi prueba gratis/i })).toBeVisible();
});

test("SEO metadata and structured data are present", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("NovaTV IPTV Argentina | TV Online + 3 Dispositivos");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://novatv.com.ar/");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://novatv.com.ar/og-image.png"
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");

  const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  expect(jsonLd).toBeTruthy();
  const parsed = JSON.parse(jsonLd ?? "{}") as { "@graph"?: Array<{ "@type"?: string }> };
  expect(parsed["@graph"]?.some((entry) => entry["@type"] === "FAQPage")).toBeTruthy();
  expect(parsed["@graph"]?.some((entry) => entry["@type"] === "Service")).toBeTruthy();
});
