import type { Cart } from '@metodo-a/commerce';
import { Card } from '../components/card';
import { Price } from './price';

export const MiniCart = ({ cart }: { cart: Cart }) => (
  <Card>
    <h3 className="mb-3 font-semibold">Mini cart</h3>
    <ul className="space-y-2">
      {cart.lines.map((line) => (
        <li key={line.product.id} className="flex items-center justify-between text-sm">
          <span>
            {line.product.name} x {line.quantity}
          </span>
          <Price money={{ ...line.product.price, amount: line.product.price.amount * line.quantity }} />
        </li>
      ))}
    </ul>
  </Card>
);
