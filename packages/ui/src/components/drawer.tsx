import type { ReactNode } from 'react';

export const Drawer = ({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) => {
  if (!open) return null;
  return (
    <aside
      className="fixed right-0 top-0 z-40 h-full w-80 border-l border-border bg-surface p-4 shadow-lg"
      role="dialog"
      aria-modal="true"
      onKeyDown={(event) => event.key === 'Escape' && onClose()}
      tabIndex={-1}
    >
      {children}
    </aside>
  );
};
