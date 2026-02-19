import Link from 'next/link';

export const Header = () => (
  <header className="border-b border-border bg-surface">
    <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
      <Link href="/" className="text-lg font-semibold">Metodo A Store</Link>
      <nav className="flex gap-4 text-sm">
        <Link href="/category/apparel">Category</Link>
        <Link href="/product/product-1">Product</Link>
      </nav>
    </div>
  </header>
);
