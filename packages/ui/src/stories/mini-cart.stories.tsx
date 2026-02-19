import type { Meta, StoryObj } from '@storybook/react';
import { MiniCart } from '../blocks/mini-cart';

const meta: Meta<typeof MiniCart> = { title: 'Blocks/MiniCart', component: MiniCart };
export default meta;

export const Basic: StoryObj<typeof MiniCart> = {
  args: {
    cart: {
      id: 'c1',
      lines: [
        {
          quantity: 2,
          product: {
            id: 'p1',
            slug: 'product-1',
            name: 'Sample Product',
            description: '',
            image: '',
            categoryId: 'c1',
            price: { amount: 20, currency: 'EUR' }
          }
        }
      ]
    }
  }
};
