import type { Money } from '@metodo-a/commerce';

export const Price = ({ money, locale = 'it-IT' }: { money: Money; locale?: string }) => (
  <span>{new Intl.NumberFormat(locale, { style: 'currency', currency: money.currency }).format(money.amount)}</span>
);
