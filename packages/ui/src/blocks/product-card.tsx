import type { Product } from '@metodo-a/commerce';
import { Card } from '../components/card';
import { AddToCartButton } from './add-to-cart-button';
import { Price } from './price';

export const ProductCard = ({ product, onAddToCart }: { product: Product; onAddToCart: () => void }) => (
  <Card className="space-y-3">
    <img src={product.image} alt={product.name} className="h-40 w-full rounded-md object-cover" />
    <h3 className="font-medium">{product.name}</h3>
    <p className="text-sm text-gray-600">{product.description}</p>
    <Price money={product.price} />
    <AddToCartButton onAdd={onAddToCart} />
  </Card>
);
