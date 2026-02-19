# Metodo A E-commerce Monorepo

Monorepo e-commerce con Turborepo + pnpm workspaces, Next.js storefront demo, design system riusabile e commerce adapter layer.

## Quickstart
1. `pnpm install`
2. `pnpm --filter @metodo-a/tokens build`
3. `pnpm dev`
4. Apri `http://localhost:3000`
5. `pnpm storybook` per documentazione componenti.

## Struttura
- `apps/storefront`: demo storefront Next.js App Router.
- `apps/storybook`: Storybook dedicato ai componenti in `packages/ui`.
- `packages/tokens`: design tokens JSON + pipeline style-dictionary.
- `packages/ui`: primitives + ecommerce blocks React/TS.
- `packages/commerce`: interfacce, adapter (mock/rest) e hooks React.

## Script principali
- `pnpm dev`
- `pnpm storybook`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
