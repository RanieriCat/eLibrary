import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from '../blocks/product-card';

const product = {
  id: 'p1',
  slug: 'product-1',
  name: 'Sample Product',
  description: 'Storybook demo product',
  image: 'https://picsum.photos/seed/story-1/600/400',
  categoryId: 'c1',
  price: { amount: 49, currency: 'EUR' }
};

const meta: Meta<typeof ProductCard> = { title: 'Blocks/ProductCard', component: ProductCard };
export default meta;

export const Basic: StoryObj<typeof ProductCard> = {
  args: {
    product,
    onAddToCart: () => undefined
  }
};
