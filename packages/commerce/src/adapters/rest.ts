import type { CommerceAdapter } from '../types';

export const createRestAdapter = (baseUrl: string): CommerceAdapter => {
  const request = async <T>(path: string, init?: RequestInit): Promise<T> => {
    const res = await fetch(`${baseUrl}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...init
    });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return res.json() as Promise<T>;
  };

  return {
    products: {
      list: () => request('/products'),
      getBySlug: (slug) => request(`/products/${slug}`),
      listCategories: () => request('/categories')
    },
    cart: {
      getCart: () => request('/cart'),
      addItem: (productId, quantity = 1) =>
        request('/cart/items', { method: 'POST', body: JSON.stringify({ productId, quantity }) }),
      updateItem: (productId, quantity) =>
        request(`/cart/items/${productId}`, { method: 'PATCH', body: JSON.stringify({ quantity }) }),
      removeItem: (productId) => request(`/cart/items/${productId}`, { method: 'DELETE' }),
      clear: () => request('/cart', { method: 'DELETE' })
    },
    checkout: {
      checkout: (cartId) => request('/checkout', { method: 'POST', body: JSON.stringify({ cartId }) })
    }
  };
};
