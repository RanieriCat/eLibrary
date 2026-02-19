import { ProductGrid } from '../components/product-grid';
import { messages } from '../lib/i18n/messages';

export default function HomePage() {
  const copy = messages.it;
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">{copy.homeTitle}</h1>
        <p className="text-sm">{copy.homeSubtitle}</p>
      </section>
      <ProductGrid />
    </div>
  );
}
