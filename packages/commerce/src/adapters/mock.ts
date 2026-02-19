import type { Cart, Category, CommerceAdapter, Product } from '../types';

const categories: Category[] = [
  { id: 'c1', slug: 'apparel', name: 'Apparel' },
  { id: 'c2', slug: 'home', name: 'Home' },
  { id: 'c3', slug: 'accessories', name: 'Accessories' }
];

const products: Product[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `p${i + 1}`,
  slug: `product-${i + 1}`,
  name: `Product ${i + 1}`,
  description: `Demo product ${i + 1} for Metodo A storefront.`,
  image: `https://picsum.photos/seed/metodo-a-${i + 1}/600/400`,
  categoryId: categories[i % categories.length].id,
  price: { amount: 19 + i * 5, currency: 'EUR' }
}));

let cart: Cart = { id: 'cart-1', lines: [] };

const getProduct = (id: string) => products.find((p) => p.id === id);

export const createMockAdapter = (): CommerceAdapter => ({
  products: {
    async list() {
      return products;
    },
    async getBySlug(slug) {
      return products.find((p) => p.slug === slug) ?? null;
    },
    async listCategories() {
      return categories;
    }
  },
  cart: {
    async getCart() {
      return cart;
    },
    async addItem(productId, quantity = 1) {
      const product = getProduct(productId);
      if (!product) return cart;
      const existing = cart.lines.find((line) => line.product.id === productId);
      if (existing) existing.quantity += quantity;
      else cart.lines.push({ product, quantity });
      return cart;
    },
    async updateItem(productId, quantity) {
      cart.lines = cart.lines
        .map((line) => (line.product.id === productId ? { ...line, quantity } : line))
        .filter((line) => line.quantity > 0);
      return cart;
    },
    async removeItem(productId) {
      cart.lines = cart.lines.filter((line) => line.product.id !== productId);
      return cart;
    },
    async clear() {
      cart = { ...cart, lines: [] };
      return cart;
    }
  },
  checkout: {
    async checkout(cartId) {
      return { checkoutUrl: `https://example.com/checkout/${cartId}` };
    }
  }
});
