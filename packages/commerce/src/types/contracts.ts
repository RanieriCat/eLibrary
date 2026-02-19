import type { Cart, Category, Product } from './models';

export interface ProductsRepository {
  list(): Promise<Product[]>;
  getBySlug(slug: string): Promise<Product | null>;
  listCategories(): Promise<Category[]>;
}

export interface CartRepository {
  getCart(): Promise<Cart>;
  addItem(productId: string, quantity?: number): Promise<Cart>;
  updateItem(productId: string, quantity: number): Promise<Cart>;
  removeItem(productId: string): Promise<Cart>;
  clear(): Promise<Cart>;
}

export interface CheckoutService {
  checkout(cartId: string): Promise<{ checkoutUrl: string }>;
}

export type CommerceAdapter = {
  products: ProductsRepository;
  cart: CartRepository;
  checkout: CheckoutService;
};
