import { useEffect, useState } from 'react';
import type { Cart } from '../types';
import { useCommerce } from './provider';

export const useCart = () => {
  const { cart } = useCommerce();
  const [data, setData] = useState<Cart>({ id: 'loading', lines: [] });

  const refresh = () => cart.getCart().then(setData);

  useEffect(() => {
    refresh();
  }, []);

  return {
    cart: data,
    addItem: async (productId: string, quantity = 1) => setData(await cart.addItem(productId, quantity)),
    updateItem: async (productId: string, quantity: number) =>
      setData(await cart.updateItem(productId, quantity)),
    removeItem: async (productId: string) => setData(await cart.removeItem(productId)),
    clear: async () => setData(await cart.clear())
  };
};
