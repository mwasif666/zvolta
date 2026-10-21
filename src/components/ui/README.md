# Reusable UI components (ZVolta)

ZVolta is an existing **Vite + React** application whose source is in `src/`.
That is why this folder is `src/components/ui` rather than a new `/components/ui`
at the repository root: it keeps reusable components in the bundled source tree,
and `@/components/ui` resolves here via the Vite and tsconfig aliases.

## CITA EV StatsBento

- `stats-bento.tsx`: the CITA-adapted bento from the supplied reference.
- `stats-bento-demo.tsx`: simple standalone demo.
- Used by `src/components/pages/CitaEvChargersPage.jsx` in place of the old 4-stat strip.
- Uses the 4 existing approved facts: 35+ countries; AC & DC hardware;
  CITA EV App & CPMS; home-to-public charging.
- No props required, no state, no providers, and **no image assets**.
- Lucide SVG icons come from the **existing** `react-icons/lu` package;
  no new runtime package is needed.

## TypeScript and shadcn notes

Tailwind CSS is already installed and configured in `tailwind.config.js` and
`src/index.css`. The repo was originally JavaScript, so a `tsconfig.json`
and a `components.json` path configuration are now included for TSX and
shadcn-style imports. Vite transpiles this `.tsx` file through esbuild.

To enable **TypeScript type checking**, install its optional tooling:

```sh
npm install -D typescript @types/react @types/react-dom
npx tsc --noEmit
```

If you plan to generate additional shadcn components, run the official CLI
inside the existing project instead of starting a second app:

```sh
npx shadcn@latest init
```

Confirm the source CSS as `src/index.css` and the alias for UI components
as `@/components/ui`. Adding other shadcn components may require the
dependencies the CLI installs (for example `clsx`, `tailwind-merge` and
`lucide-react`). Avoid replacing ZVolta's existing font and color tokens.
