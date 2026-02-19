import { useEffect, useState } from 'react';
import type { Product } from '../types';
import { useCommerce } from './provider';

export const useProducts = () => {
  const { products } = useCommerce();
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    products.list().then(setData);
  }, [products]);

  return data;
};

export const useProduct = (slug: string) => {
  const { products } = useCommerce();
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    products.getBySlug(slug).then(setData);
  }, [products, slug]);

  return data;
};
