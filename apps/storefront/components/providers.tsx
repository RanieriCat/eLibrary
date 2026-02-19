'use client';

import { CommerceProvider, createMockAdapter } from '@metodo-a/commerce';

const adapter = createMockAdapter();

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <CommerceProvider adapter={adapter}>{children}</CommerceProvider>
);
