'use client';

import { useCart, useProducts } from '@metodo-a/commerce';
import { MiniCart, ProductCard } from '@metodo-a/ui';

export const ProductGrid = () => {
  const products = useProducts();
  const { cart, addItem } = useCart();

  return (
    <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <div className="grid gap-4 md:grid-cols-2">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={() => addItem(product.id, 1)} />
        ))}
      </div>
      <MiniCart cart={cart} />
    </section>
  );
};
