import { describe, expect, it } from 'vitest';
import { createMockAdapter } from './mock';

describe('mock adapter', () => {
  it('adds item to cart', async () => {
    const adapter = createMockAdapter();
    const all = await adapter.products.list();
    const updated = await adapter.cart.addItem(all[0].id, 2);
    expect(updated.lines[0].quantity).toBe(2);
  });
});
