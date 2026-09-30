# Tangible DLS

A React design language system indexed to the [Tailwind CSS](https://tailwindcss.com/docs/installation) documentation map.

It is not a copy of the Tailwind docs, and it is not affiliated with Tailwind Labs. Every current docs group is here — getting started, core concepts, base styles, layout, flexbox and grid, spacing, sizing, typography, backgrounds, borders, effects, filters, tables, transitions and animation, transforms, interactivity, SVG, and accessibility — with original explanations, the naming rule for each scale, and a live specimen.

On top of that map is the part a product team actually imports: tokens in CSS, and a small set of React components (button, badge, card, field, alert, avatar, switch).

## Stack

React 19, Tailwind CSS v4, Vite. One package. “Mono” here means a single React library, not a multi-package workspace. Split it into `packages/ui` when you publish to npm — not before the API settles.

## Run

```bash
npm install
npm run dev
```

Open a topic with `/?topic=flex-direction`. Components live at `/?topic=components`.

```tsx
import { Button, Field, Card } from "@/dls/ui";
```

Tokens live in `src/styles.css` under `@theme`. Utilities read those variables, so light and dark are one class set.

## What was deliberately left out

- A verbatim mirror of tailwindcss.com. Their prose is theirs. This repo links to the official page from each topic.
- Every numeric step of every scale. `p-0` through `p-96` is a rule, not 80 near-duplicate rows. The rule is on the page.
- Framework install guides (Next, Rails, Laravel). This repo is the Vite + React path. Other stacks stay on the official installation pages.

## License

MIT for the code in this repository. Tailwind CSS is published under its own license.
