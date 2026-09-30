import { topic, type Topic } from "@/dls/types";

const scaleRule =
  "The spacing scale is 0, px, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, then integers through 96. 1 = 0.25rem (4px at the default root). The chips below are the steps used most often.";

export const spaceTopics: Topic[] = [
  topic(
    "padding",
    "padding",
    "Spacing",
    "Inner space. Padding is part of the box and takes background. It does not collapse.",
    "padding",
    "pad",
    `
p-0 | padding: 0
p-px | padding: 1px
p-1 | padding: 0.25rem
p-2 | padding: 0.5rem
p-3 | padding: 0.75rem
p-4 | padding: 1rem
p-6 | padding: 1.5rem
p-8 | padding: 2rem
p-12 | padding: 3rem
px-4 | padding-inline: 1rem
py-2 | padding-block: 0.5rem
pt-8 | padding-top: 2rem
pe-4 | padding-inline-end: 1rem
ps-4 | padding-inline-start: 1rem
`,
    { rule: scaleRule + " Sides: p, px, py, pt, pr, pb, pl, ps, pe." },
  ),
  topic(
    "margin",
    "margin",
    "Spacing",
    "Outer space. Vertical margins collapse with neighbors. Prefer gap on the parent when you only want space between siblings.",
    "margin",
    "margin",
    `
m-0 | margin: 0
m-auto | margin: auto
m-1 | margin: 0.25rem
m-2 | margin: 0.5rem
m-4 | margin: 1rem
m-8 | margin: 2rem
mx-auto | margin-inline: auto
my-4 | margin-block: 1rem
mt-6 | margin-top: 1.5rem
-mt-4 | margin-top: -1rem
ms-4 | margin-inline-start: 1rem
`,
    { rule: scaleRule + " mx-auto centers a fixed-width block. Negative margins use the -m-4 form." },
  ),

  topic("width", "width", "Sizing", "The inline size in horizontal writing. Includes fractions, the spacing scale, and keywords.", "width", "sizing", `
w-4 | width: 1rem
w-8 | width: 2rem
w-16 | width: 4rem
w-32 | width: 8rem
w-48 | width: 12rem
w-64 | width: 16rem
w-1/2 | width: 50%
w-1/3 | width: 33.333%
w-2/3 | width: 66.666%
w-full | width: 100%
w-screen | width: 100vw
w-auto | width: auto
w-fit | width: fit-content
w-min | width: min-content
w-max | width: max-content
`, { detail: "size-16 sets width and height together. Use it for icons and avatars instead of pairing w- and h-.", rule: "w-{n} on the spacing scale, w-{fraction}, or w-full / w-screen / w-fit / w-min / w-max / w-auto." }),
  topic("min-width", "min-width", "Sizing", "The smallest a box may become. min-w-0 lets a flex child shrink below its content size so text can truncate.", "min-width", "sizing", `
min-w-0 | min-width: 0
min-w-full | min-width: 100%
min-w-min | min-width: min-content
min-w-max | min-width: max-content
min-w-fit | min-width: fit-content
min-w-xs | min-width: var(--container-xs)
min-w-sm | min-width: var(--container-sm)
min-w-md | min-width: var(--container-md)
`),
  topic("max-width", "max-width", "Sizing", "The reading measure and the layout cap. max-w-prose is the type measure; max-w-5xl is a page.", "max-width", "sizing", `
max-w-none | max-width: none
max-w-xs | max-width: var(--container-xs)
max-w-sm | max-width: var(--container-sm)
max-w-md | max-width: var(--container-md)
max-w-lg | max-width: var(--container-lg)
max-w-xl | max-width: var(--container-xl)
max-w-2xl | max-width: var(--container-2xl)
max-w-3xl | max-width: var(--container-3xl)
max-w-prose | max-width: 65ch
max-w-full | max-width: 100%
max-w-screen | max-width: 100vw
`),
  topic("height", "height", "Sizing", "Block size in horizontal writing. Percentages need a parent with a defined height.", "height", "sizing", `
h-4 | height: 1rem
h-8 | height: 2rem
h-12 | height: 3rem
h-16 | height: 4rem
h-24 | height: 6rem
h-32 | height: 8rem
h-1/2 | height: 50%
h-full | height: 100%
h-screen | height: 100vh
h-auto | height: auto
h-fit | height: fit-content
`),
  topic("min-height", "min-height", "Sizing", "Guarantees a tap target or a hero floor without locking the box when content grows.", "min-height", "sizing", `
min-h-0 | min-height: 0
min-h-full | min-height: 100%
min-h-screen | min-height: 100vh
min-h-11 | min-height: 2.75rem
min-h-16 | min-height: 4rem
min-h-fit | min-height: fit-content
`),
  topic("max-height", "max-height", "Sizing", "Caps a menu, dialog, or log so the page itself does not grow. Pair with overflow-auto.", "max-height", "sizing", `
max-h-none | max-height: none
max-h-32 | max-height: 8rem
max-h-48 | max-height: 12rem
max-h-64 | max-height: 16rem
max-h-96 | max-height: 24rem
max-h-full | max-height: 100%
max-h-screen | max-height: 100vh
`),
  topic("inline-size", "inline-size", "Sizing", "Width in horizontal writing, height in vertical writing. Use it when the component must follow the writing mode.", "inline-size", "sizing", `
inline-4 | inline-size: 1rem
inline-16 | inline-size: 4rem
inline-32 | inline-size: 8rem
inline-64 | inline-size: 16rem
inline-1/2 | inline-size: 50%
inline-full | inline-size: 100%
inline-auto | inline-size: auto
inline-fit | inline-size: fit-content
inline-min | inline-size: min-content
inline-max | inline-size: max-content
`),
  topic("min-inline-size", "min-inline-size", "Sizing", "Logical minimum on the inline axis. Keywords follow the container scale.", "min-inline-size", "sizing", `
min-inline-0 | min-inline-size: 0
min-inline-full | min-inline-size: 100%
min-inline-3xs | min-inline-size: var(--container-3xs)
min-inline-2xs | min-inline-size: var(--container-2xs)
min-inline-xs | min-inline-size: var(--container-xs)
min-inline-sm | min-inline-size: var(--container-sm)
min-inline-md | min-inline-size: var(--container-md)
min-inline-lg | min-inline-size: var(--container-lg)
`),
  topic("max-inline-size", "max-inline-size", "Sizing", "Logical maximum on the inline axis.", "max-inline-size", "sizing", `
max-inline-none | max-inline-size: none
max-inline-xs | max-inline-size: var(--container-xs)
max-inline-sm | max-inline-size: var(--container-sm)
max-inline-md | max-inline-size: var(--container-md)
max-inline-lg | max-inline-size: var(--container-lg)
max-inline-xl | max-inline-size: var(--container-xl)
max-inline-prose | max-inline-size: 65ch
max-inline-full | max-inline-size: 100%
`),
  topic("block-size", "block-size", "Sizing", "Logical block size. Height, when text runs horizontally.", "block-size", "sizing", `
block-4 | block-size: 1rem
block-16 | block-size: 4rem
block-32 | block-size: 8rem
block-48 | block-size: 12rem
block-64 | block-size: 16rem
block-full | block-size: 100%
block-auto | block-size: auto
block-screen | block-size: 100vh
block-1/2 | block-size: 50%
`),
  topic("min-block-size", "min-block-size", "Sizing", "Logical minimum on the block axis.", "min-block-size", "sizing", `
min-block-0 | min-block-size: 0
min-block-full | min-block-size: 100%
min-block-screen | min-block-size: 100vh
min-block-xs | min-block-size: var(--container-xs)
min-block-sm | min-block-size: var(--container-sm)
min-block-md | min-block-size: var(--container-md)
`),
  topic("max-block-size", "max-block-size", "Sizing", "Logical maximum on the block axis.", "max-block-size", "sizing", `
max-block-none | max-block-size: none
max-block-32 | max-block-size: 8rem
max-block-64 | max-block-size: 16rem
max-block-96 | max-block-size: 24rem
max-block-full | max-block-size: 100%
max-block-screen | max-block-size: 100vh
`),
];
