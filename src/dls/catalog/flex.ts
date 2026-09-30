import { topic, type Topic } from "@/dls/types";

export const flexTopics: Topic[] = [
  topic("flex-basis", "flex-basis", "Flexbox & Grid", "The initial main size of a flex item, before free space is distributed.", "flex-basis", "child", `
basis-0 | flex-basis: 0
basis-auto | flex-basis: auto
basis-full | flex-basis: 100%
basis-1/2 | flex-basis: 50%
basis-1/3 | flex-basis: 33.333%
basis-1/4 | flex-basis: 25%
basis-16 | flex-basis: 4rem
basis-32 | flex-basis: 8rem
basis-64 | flex-basis: 16rem
`),
  topic("flex-direction", "flex-direction", "Flexbox & Grid", "The main axis. Row is horizontal; column stacks. Reverse flips the start edge.", "flex-direction", "parent", `
flex-row | flex-direction: row
flex-row-reverse | flex-direction: row-reverse
flex-col | flex-direction: column
flex-col-reverse | flex-direction: column-reverse
`),
  topic("flex-wrap", "flex-wrap", "Flexbox & Grid", "Whether items wrap onto new lines. Without wrap, items shrink instead.", "flex-wrap", "parent", `
flex-nowrap | flex-wrap: nowrap
flex-wrap | flex-wrap: wrap
flex-wrap-reverse | flex-wrap: wrap-reverse
`),
  topic("flex", "flex", "Flexbox & Grid", "Shorthand for grow, shrink, and basis. flex-1 is the usual “share the row equally”.", "flex", "child", `
flex-1 | flex: 1 1 0%
flex-auto | flex: 1 1 auto
flex-initial | flex: 0 1 auto
flex-none | flex: none
`),
  topic("flex-grow", "flex-grow", "Flexbox & Grid", "Whether the item may take leftover space on the main axis.", "flex-grow", "child", `
grow | flex-grow: 1
grow-0 | flex-grow: 0
`),
  topic("flex-shrink", "flex-shrink", "Flexbox & Grid", "Whether the item may shrink below its basis. shrink-0 protects icons and avatars.", "flex-shrink", "child", `
shrink | flex-shrink: 1
shrink-0 | flex-shrink: 0
`),
  topic("order", "order", "Flexbox & Grid", "Visual order without changing source order. Source order is still what keyboard and screen-reader users get — do not use order to fake a logical sequence.", "order", "child", `
order-first | order: -9999
order-last | order: 9999
order-none | order: 0
order-1 | order: 1
order-2 | order: 2
order-3 | order: 3
`),
  topic("grid-template-columns", "grid-template-columns", "Flexbox & Grid", "Defines the columns. Prefer a 12-step or a simple 1–4 count over a custom template until the layout demands it.", "grid-template-columns", "grid", `
grid-cols-1 | grid-template-columns: repeat(1, minmax(0, 1fr))
grid-cols-2 | grid-template-columns: repeat(2, minmax(0, 1fr))
grid-cols-3 | grid-template-columns: repeat(3, minmax(0, 1fr))
grid-cols-4 | grid-template-columns: repeat(4, minmax(0, 1fr))
grid-cols-6 | grid-template-columns: repeat(6, minmax(0, 1fr))
grid-cols-12 | grid-template-columns: repeat(12, minmax(0, 1fr))
grid-cols-none | grid-template-columns: none
grid-cols-subgrid | grid-template-columns: subgrid
`, { rule: "grid-cols-{n} for n from 1 to 12. Pair with gap and col-span." }),
  topic("grid-column", "grid-column", "Flexbox & Grid", "How many columns an item spans, or which lines it starts and ends on.", "grid-column", "span", `
col-auto | grid-column: auto
col-span-1 | grid-column: span 1 / span 1
col-span-2 | grid-column: span 2 / span 2
col-span-3 | grid-column: span 3 / span 3
col-span-4 | grid-column: span 4 / span 4
col-span-6 | grid-column: span 6 / span 6
col-span-full | grid-column: 1 / -1
col-start-1 | grid-column-start: 1
col-start-2 | grid-column-start: 2
col-end-3 | grid-column-end: 3
`),
  topic("grid-template-rows", "grid-template-rows", "Flexbox & Grid", "Explicit rows. Omit this and rows are created from content.", "grid-template-rows", "grid", `
grid-rows-1 | grid-template-rows: repeat(1, minmax(0, 1fr))
grid-rows-2 | grid-template-rows: repeat(2, minmax(0, 1fr))
grid-rows-3 | grid-template-rows: repeat(3, minmax(0, 1fr))
grid-rows-4 | grid-template-rows: repeat(4, minmax(0, 1fr))
grid-rows-6 | grid-template-rows: repeat(6, minmax(0, 1fr))
grid-rows-none | grid-template-rows: none
grid-rows-subgrid | grid-template-rows: subgrid
`),
  topic("grid-row", "grid-row", "Flexbox & Grid", "Row span and line placement, matching the column utilities.", "grid-row", "span", `
row-auto | grid-row: auto
row-span-1 | grid-row: span 1 / span 1
row-span-2 | grid-row: span 2 / span 2
row-span-3 | grid-row: span 3 / span 3
row-span-full | grid-row: 1 / -1
row-start-1 | grid-row-start: 1
row-start-2 | grid-row-start: 2
`),
  topic("grid-auto-flow", "grid-auto-flow", "Flexbox & Grid", "Whether auto-placed items fill by row or by column, and whether dense packing backfills holes.", "grid-auto-flow", "grid", `
grid-flow-row | grid-auto-flow: row
grid-flow-col | grid-auto-flow: column
grid-flow-dense | grid-auto-flow: row dense
grid-flow-row-dense | grid-auto-flow: row dense
grid-flow-col-dense | grid-auto-flow: column dense
`),
  topic("grid-auto-columns", "grid-auto-columns", "Flexbox & Grid", "Size of implicit columns created when items land outside the explicit template.", "grid-auto-columns", "grid", `
auto-cols-auto | grid-auto-columns: auto
auto-cols-min | grid-auto-columns: min-content
auto-cols-max | grid-auto-columns: max-content
auto-cols-fr | grid-auto-columns: minmax(0, 1fr)
`),
  topic("grid-auto-rows", "grid-auto-rows", "Flexbox & Grid", "Size of implicit rows. auto-rows-fr gives equal rows even when content differs.", "grid-auto-rows", "grid", `
auto-rows-auto | grid-auto-rows: auto
auto-rows-min | grid-auto-rows: min-content
auto-rows-max | grid-auto-rows: max-content
auto-rows-fr | grid-auto-rows: minmax(0, 1fr)
`),
  topic("gap", "gap", "Flexbox & Grid", "Space between items, not around the container. Prefer gap over margins on children.", "gap", "parent", `
gap-0 | gap: 0
gap-1 | gap: 0.25rem
gap-2 | gap: 0.5rem
gap-3 | gap: 0.75rem
gap-4 | gap: 1rem
gap-6 | gap: 1.5rem
gap-8 | gap: 2rem
gap-12 | gap: 3rem
gap-x-4 | column-gap: 1rem
gap-y-2 | row-gap: 0.5rem
gap-x-8 | column-gap: 2rem
`, { rule: "gap-{n} uses the spacing scale. gap-x and gap-y set the axes independently." }),
  topic("justify-content", "justify-content", "Flexbox & Grid", "Distributes items along the main axis (flex) or the inline axis (grid).", "justify-content", "parent", `
justify-start | justify-content: flex-start
justify-end | justify-content: flex-end
justify-center | justify-content: center
justify-between | justify-content: space-between
justify-around | justify-content: space-around
justify-evenly | justify-content: space-evenly
justify-normal | justify-content: normal
`),
  topic("justify-items", "justify-items", "Flexbox & Grid", "Aligns grid items along the inline axis, inside their cells. Ignored by flex containers.", "justify-items", "grid", `
justify-items-start | justify-items: start
justify-items-end | justify-items: end
justify-items-center | justify-items: center
justify-items-stretch | justify-items: stretch
`),
  topic("justify-self", "justify-self", "Flexbox & Grid", "Overrides justify-items for one grid item.", "justify-self", "span", `
justify-self-auto | justify-self: auto
justify-self-start | justify-self: start
justify-self-end | justify-self: end
justify-self-center | justify-self: center
justify-self-stretch | justify-self: stretch
`),
  topic("align-content", "align-content", "Flexbox & Grid", "Distributes extra space between lines when there is more than one row or column. No effect on a single line.", "align-content", "parent", `
content-normal | align-content: normal
content-center | align-content: center
content-start | align-content: flex-start
content-end | align-content: flex-end
content-between | align-content: space-between
content-around | align-content: space-around
content-evenly | align-content: space-evenly
content-stretch | align-content: stretch
content-baseline | align-content: baseline
`),
  topic("align-items", "align-items", "Flexbox & Grid", "Cross-axis alignment. In a row, this is vertical.", "align-items", "parent", `
items-start | align-items: flex-start
items-end | align-items: flex-end
items-center | align-items: center
items-baseline | align-items: baseline
items-stretch | align-items: stretch
`),
  topic("align-self", "align-self", "Flexbox & Grid", "Cross-axis override for a single item.", "align-self", "child", `
self-auto | align-self: auto
self-start | align-self: flex-start
self-end | align-self: flex-end
self-center | align-self: center
self-stretch | align-self: stretch
self-baseline | align-self: baseline
`),
  topic("place-content", "place-content", "Flexbox & Grid", "Shorthand for align-content and justify-content.", "place-content", "grid", `
place-content-center | place-content: center
place-content-start | place-content: start
place-content-end | place-content: end
place-content-between | place-content: space-between
place-content-around | place-content: space-around
place-content-evenly | place-content: space-evenly
place-content-stretch | place-content: stretch
`),
  topic("place-items", "place-items", "Flexbox & Grid", "Shorthand for align-items and justify-items. place-items-center centers a grid’s cells both ways.", "place-items", "grid", `
place-items-start | place-items: start
place-items-end | place-items: end
place-items-center | place-items: center
place-items-baseline | place-items: baseline
place-items-stretch | place-items: stretch
`),
  topic("place-self", "place-self", "Flexbox & Grid", "Shorthand for align-self and justify-self on one item.", "place-self", "span", `
place-self-auto | place-self: auto
place-self-start | place-self: start
place-self-end | place-self: end
place-self-center | place-self: center
place-self-stretch | place-self: stretch
`),
];
