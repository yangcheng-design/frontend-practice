# frontend-practice

Rebuild the order-sent confirmation as a React component, in the same shape as `fe.core`: JSX + CSS module, JS only for state.

```
src/components/OrderSent/
  OrderSent.tsx           # markup + later: completed / replay
  OrderSent.module.css    # layout now, motion next
  index.ts
```

`order-sent.html` is the vanilla reference. Peek, don’t copy wholesale.

```sh
pnpm install
pnpm dev
```

## Steps

1. **Static** — faint ring + “Submitting order” (done)
2. **Spinner** — green arc loops in `.spinner`
3. **Complete** — `:global(.completed)` draws the ring, fill, and check
4. **Glow + ripples**
5. **State** — `useState` / `useEffect` for the 2s timeline; remount on click with `key`
