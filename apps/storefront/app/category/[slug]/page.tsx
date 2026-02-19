import { createMockAdapter } from '@metodo-a/commerce';
import Link from 'next/link';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const adapter = createMockAdapter();
  const categories = await adapter.products.listCategories();
  const category = categories.find((item) => item.slug === slug);
  const products = await adapter.products.list();
  const items = category ? products.filter((product) => product.categoryId === category.id) : [];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Categoria: {category?.name ?? slug}</h1>
      <ul className="list-disc pl-5">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/product/${item.slug}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
