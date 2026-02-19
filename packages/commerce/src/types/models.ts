export type Money = {
  amount: number;
  currency: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  categoryId: string;
  price: Money;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
};

export type CartLine = {
  product: Product;
  quantity: number;
};

export type Cart = {
  id: string;
  lines: CartLine[];
};
