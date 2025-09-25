import { test, expect } from '@playwright/test';

test.describe('CRUD movie', () => {
  test.beforeEach(async ({ request }) => {
    const response = await request.get('/');
    const body = await response.json();
    expect(body.message).toBe('Server is running');
  });

  test('should', async ({ page }) => {
    console.log('say hello');
  });
});