import { createMockAdapter } from '@metodo-a/commerce';
import { formatCurrency } from '../../../components/currency';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await createMockAdapter().products.getBySlug(slug);

  if (!product) {
    return <div>Prodotto non trovato.</div>;
  }

  return (
    <article className="space-y-3">
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-medium">{formatCurrency(product.price.amount, product.price.currency, 'it-IT')}</p>
    </article>
  );
}
