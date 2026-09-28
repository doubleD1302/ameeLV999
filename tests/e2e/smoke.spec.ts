import { test, expect } from '@playwright/test';

test.describe('Blooming Home Browser Smoke Test', () => {
  test('initializes Phaser canvas, renders HUD, handles tap input, and resizes', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');

    // 1. Verify title
    await expect(page).toHaveTitle(/Blooming Home/);

    // 2. Verify Phaser canvas is created and visible
    const canvas = page.locator('#game-container canvas');
    await expect(canvas).toBeVisible({ timeout: 10000 });

    // 3. Verify DOM HUD is initialized with baseline coins
    const coinsElement = page.locator('#hud-coins');
    await expect(coinsElement).toHaveText('40');

    // 4. Test button interaction updating domain store
    const careButton = page.locator('#btn-care-garden');
    await careButton.click();
    await expect(coinsElement).toHaveText('50');

    // 5. Test canvas click/tap input
    const tapsElement = page.locator('#hud-taps');
    await expect(tapsElement).toHaveText('0');

    await canvas.click({ position: { x: 250, y: 250 } });
    await expect(tapsElement).toHaveText('1');

    // 6. Test viewport resize
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(300);

    // Verify canvas is still visible and sized
    await expect(canvas).toBeVisible();

    // Verify no unhandled console errors occurred
    expect(consoleErrors).toHaveLength(0);
  });
});
