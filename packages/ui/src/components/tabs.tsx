import { useState, type ReactNode } from 'react';

type Tab = { id: string; label: string; content: ReactNode };

export const Tabs = ({ items }: { items: Tab[] }) => {
  const [active, setActive] = useState(items[0]?.id);

  return (
    <div>
      <div className="flex gap-2" role="tablist">
        {items.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            className="rounded border border-border px-3 py-1"
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-3">{items.find((tab) => tab.id === active)?.content}</div>
    </div>
  );
};
