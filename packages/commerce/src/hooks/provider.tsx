import { createContext, useContext, useMemo } from 'react';
import type { CommerceAdapter } from '../types';
import { createMockAdapter } from '../adapters/mock';

const CommerceContext = createContext<CommerceAdapter | null>(null);

export const CommerceProvider = ({
  adapter,
  children
}: {
  adapter?: CommerceAdapter;
  children: React.ReactNode;
}) => {
  const value = useMemo(() => adapter ?? createMockAdapter(), [adapter]);
  return <CommerceContext.Provider value={value}>{children}</CommerceContext.Provider>;
};

export const useCommerce = () => {
  const ctx = useContext(CommerceContext);
  if (!ctx) throw new Error('useCommerce must be used within CommerceProvider');
  return ctx;
};
