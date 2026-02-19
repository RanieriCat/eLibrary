# @metodo-a/commerce

Interfacce e adapter per disaccoppiare la UI dal backend.

## Uso rapido

```tsx
import { CommerceProvider, createMockAdapter, useProducts } from '@metodo-a/commerce';
```

- `createMockAdapter()` fornisce dati in-memory.
- `createRestAdapter(baseUrl)` mostra come agganciare API REST.
- Hook disponibili: `useProducts`, `useProduct`, `useCart`.
