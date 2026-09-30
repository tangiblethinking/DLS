import { topic, type Topic } from "@/dls/types";

export const typeTopics: Topic[] = [
  topic("font-family", "font-family", "Typography", "This system sets font-sans to Outfit and font-serif to Fraunces. font-mono stays the platform default.", "font-family", "text", `
font-sans | font-family: var(--font-sans)
font-serif | font-family: var(--font-serif)
font-mono | font-family: var(--font-mono)
`),
  topic("font-size", "font-size", "Typography", "A named type scale. Each step sets size and a matching line-height.", "font-size", "text", `
text-xs | font-size: 0.75rem
text-sm | font-size: 0.875rem
text-base | font-size: 1rem
text-lg | font-size: 1.125rem
text-xl | font-size: 1.25rem
text-2xl | font-size: 1.5rem
text-3xl | font-size: 1.875rem
text-4xl | font-size: 2.25rem
text-5xl | font-size: 3rem
text-6xl | font-size: 3.75rem
`, { rule: "text-xs through text-9xl. Do not invent text-[13px]. If a size is missing, it is a token decision, not a one-off." }),
  topic("font-smoothing", "font-smoothing", "Typography", "Antialiasing hints for macOS. antialiased is the usual product default; subpixel is heavier and sharper.", "font-smoothing", "text", `
antialiased | -webkit-font-smoothing: antialiased
subpixel-antialiased | -webkit-font-smoothing: auto
`),
  topic("font-style", "font-style", "Typography", "Italic for emphasis inside prose. Do not italicize whole labels.", "font-style", "text", `
italic | font-style: italic
not-italic | font-style: normal
`),
  topic("font-weight", "font-weight", "Typography", "Weight carries hierarchy more honestly than size jumps. Medium for labels, semibold for titles.", "font-weight", "text", `
font-thin | font-weight: 100
font-extralight | font-weight: 200
font-light | font-weight: 300
font-normal | font-weight: 400
font-medium | font-weight: 500
font-semibold | font-weight: 600
font-bold | font-weight: 700
font-extrabold | font-weight: 800
font-black | font-weight: 900
`),
  topic("font-stretch", "font-stretch", "Typography", "Width axis. Only visible on families that ship a stretch axis or multiple width cuts.", "font-stretch", "text", `
font-stretch-ultra-condensed | font-stretch: ultra-condensed
font-stretch-extra-condensed | font-stretch: extra-condensed
font-stretch-condensed | font-stretch: condensed
font-stretch-semi-condensed | font-stretch: semi-condensed
font-stretch-normal | font-stretch: normal
font-stretch-semi-expanded | font-stretch: semi-expanded
font-stretch-expanded | font-stretch: expanded
font-stretch-extra-expanded | font-stretch: extra-expanded
font-stretch-ultra-expanded | font-stretch: ultra-expanded
`),
  topic("font-variant-numeric", "font-variant-numeric", "Typography", "Tabular figures keep columns of numbers aligned. Use them in prices, tables, and timers.", "font-variant-numeric", "text", `
normal-nums | font-variant-numeric: normal
tabular-nums | font-variant-numeric: tabular-nums
proportional-nums | font-variant-numeric: proportional-nums
oldstyle-nums | font-variant-numeric: oldstyle-nums
lining-nums | font-variant-numeric: lining-nums
slashed-zero | font-variant-numeric: slashed-zero
`),
  topic("font-feature-settings", "font-feature-settings", "Typography", "Low-level OpenType features when a named utility does not exist. Prefer tabular-nums and the other numeric utilities first.", "font-feature-settings", "text", "", {
    detail: "Arbitrary features use the font-[family-name] form only for the family. Feature settings are usually a one-line CSS escape: font-feature-settings: \"ss01\", \"cv11\". Do not reach for this to fake a weight.",
  }),
  topic("letter-spacing", "letter-spacing", "Typography", "Tracking. Tighten large serif headlines. Open small uppercase labels slightly.", "letter-spacing", "text", `
tracking-tighter | letter-spacing: -0.05em
tracking-tight | letter-spacing: -0.025em
tracking-normal | letter-spacing: 0
tracking-wide | letter-spacing: 0.025em
tracking-wider | letter-spacing: 0.05em
tracking-widest | letter-spacing: 0.1em
`),
  topic("line-clamp", "line-clamp", "Typography", "Truncates after a set number of lines with an ellipsis. The element needs a bounded width.", "line-clamp", "text", `
line-clamp-1 | overflow: hidden; -webkit-line-clamp: 1
line-clamp-2 | overflow: hidden; -webkit-line-clamp: 2
line-clamp-3 | overflow: hidden; -webkit-line-clamp: 3
line-clamp-none | -webkit-line-clamp: unset
`),
  topic("line-height", "line-height", "Typography", "Body copy wants about 1.5. Headlines can sit tighter.", "line-height", "text", `
leading-none | line-height: 1
leading-tight | line-height: 1.25
leading-snug | line-height: 1.375
leading-normal | line-height: 1.5
leading-relaxed | line-height: 1.625
leading-loose | line-height: 2
leading-4 | line-height: 1rem
leading-5 | line-height: 1.25rem
leading-6 | line-height: 1.5rem
`),
  topic("list-style-image", "list-style-image", "Typography", "Replaces the marker with an image. Most product lists should use a component marker instead.", "list-style-image", "list", `
list-image-none | list-style-image: none
`),
  topic("list-style-position", "list-style-position", "Typography", "inside pulls the marker into the content box so it aligns with padding. outside hangs it in the margin.", "list-style-position", "list", `
list-inside | list-style-position: inside
list-outside | list-style-position: outside
`),
  topic("list-style-type", "list-style-type", "Typography", "The marker glyph. Preflight removes list styles; add them back when the list is real content.", "list-style-type", "list", `
list-none | list-style-type: none
list-disc | list-style-type: disc
list-decimal | list-style-type: decimal
`),
  topic("text-align", "text-align", "Typography", "Alignment follows the writing mode when you use text-start and text-end.", "text-align", "text", `
text-left | text-align: left
text-center | text-align: center
text-right | text-align: right
text-justify | text-align: justify
text-start | text-align: start
text-end | text-align: end
`),
  topic("color", "color", "Typography", "Text color. In product UI use text-ink, text-mute, and text-accent. The palette page shows the raw scale.", "color", "text", `
text-inherit | color: inherit
text-current | color: currentColor
text-transparent | color: transparent
text-ink | color: var(--color-ink)
text-mute | color: var(--color-mute)
text-accent | color: var(--color-accent)
text-paper | color: var(--color-paper)
text-red-700 | color: var(--color-red-700)
text-emerald-700 | color: var(--color-emerald-700)
`, { rule: "text-{hue}-{step} for the default palette, or text-{token} for this system." }),
  topic("text-decoration-line", "text-decoration-line", "Typography", "Underline links. Skip underline on buttons — they are not links.", "text-decoration-line", "text", `
underline | text-decoration-line: underline
overline | text-decoration-line: overline
line-through | text-decoration-line: line-through
no-underline | text-decoration-line: none
`),
  topic("text-decoration-color", "text-decoration-color", "Typography", "Color of the line, independent of the text color. Useful for a quieter underline.", "text-decoration-color", "text", `
decoration-inherit | text-decoration-color: inherit
decoration-current | text-decoration-color: currentColor
decoration-transparent | text-decoration-color: transparent
decoration-accent | text-decoration-color: var(--color-accent)
decoration-line | text-decoration-color: var(--color-line)
`),
  topic("text-decoration-style", "text-decoration-style", "Typography", "Solid, double, dotted, dashed, or wavy. Wavy reads as an error in prose, so use it sparingly.", "text-decoration-style", "text", `
decoration-solid | text-decoration-style: solid
decoration-double | text-decoration-style: double
decoration-dotted | text-decoration-style: dotted
decoration-dashed | text-decoration-style: dashed
decoration-wavy | text-decoration-style: wavy
`),
  topic("text-decoration-thickness", "text-decoration-thickness", "Typography", "Stroke weight of the decoration. from-font uses the font’s own underline thickness.", "text-decoration-thickness", "text", `
decoration-auto | text-decoration-thickness: auto
decoration-from-font | text-decoration-thickness: from-font
decoration-0 | text-decoration-thickness: 0
decoration-1 | text-decoration-thickness: 1px
decoration-2 | text-decoration-thickness: 2px
decoration-4 | text-decoration-thickness: 4px
`),
  topic("text-underline-offset", "text-underline-offset", "Typography", "Pushes an underline off the baseline so it does not collide with descenders.", "text-underline-offset", "text", `
underline-offset-auto | text-underline-offset: auto
underline-offset-0 | text-underline-offset: 0
underline-offset-1 | text-underline-offset: 1px
underline-offset-2 | text-underline-offset: 2px
underline-offset-4 | text-underline-offset: 4px
underline-offset-8 | text-underline-offset: 8px
`),
  topic("text-transform", "text-transform", "Typography", "Uppercase is a style, not a content change. Screen readers may spell small labels letter by letter — keep the string short.", "text-transform", "text", `
uppercase | text-transform: uppercase
lowercase | text-transform: lowercase
capitalize | text-transform: capitalize
normal-case | text-transform: none
`),
  topic("text-overflow", "text-overflow", "Typography", "Ellipsis requires overflow-hidden, white-space nowrap, and a bounded width together.", "text-overflow", "text", `
truncate | overflow: hidden; text-overflow: ellipsis; white-space: nowrap
text-ellipsis | text-overflow: ellipsis
text-clip | text-overflow: clip
`),
  topic("text-wrap", "text-wrap", "Typography", "balance evens the rag on headlines. pretty avoids orphans. nowrap is for labels that must stay one line.", "text-wrap", "text", `
text-wrap | text-wrap: wrap
text-nowrap | text-wrap: nowrap
text-balance | text-wrap: balance
text-pretty | text-wrap: pretty
`),
  topic("text-indent", "text-indent", "Typography", "First-line indent for longform. Do not indent the paragraph after a heading.", "text-indent", "text", `
indent-0 | text-indent: 0
indent-2 | text-indent: 0.5rem
indent-4 | text-indent: 1rem
indent-8 | text-indent: 2rem
`),
  topic("tab-size", "tab-size", "Typography", "Width of a tab character inside preformatted text.", "tab-size", "text", `
tab-1 | tab-size: 1
tab-2 | tab-size: 2
tab-4 | tab-size: 4
tab-8 | tab-size: 8
`),
  topic("vertical-align", "vertical-align", "Typography", "Aligns an inline or table-cell against its line. Use flex alignment for blocks.", "vertical-align", "text", `
align-baseline | vertical-align: baseline
align-top | vertical-align: top
align-middle | vertical-align: middle
align-bottom | vertical-align: bottom
align-text-top | vertical-align: text-top
align-text-bottom | vertical-align: text-bottom
align-sub | vertical-align: sub
align-super | vertical-align: super
`),
  topic("white-space", "white-space", "Typography", "How whitespace and wrapping are handled. pre-wrap keeps line breaks in user content without overflowing.", "white-space", "text", `
whitespace-normal | white-space: normal
whitespace-nowrap | white-space: nowrap
whitespace-pre | white-space: pre
whitespace-pre-line | white-space: pre-line
whitespace-pre-wrap | white-space: pre-wrap
whitespace-break-spaces | white-space: break-spaces
`),
  topic("word-break", "word-break", "Typography", "break-all is aggressive. Prefer overflow-wrap for URLs so normal words stay intact.", "word-break", "text", `
break-normal | word-break: normal
break-all | word-break: break-all
break-keep | word-break: keep-all
`),
  topic("overflow-wrap", "overflow-wrap", "Typography", "break-words lets a long token wrap instead of blowing out the layout.", "overflow-wrap", "text", `
wrap-break-word | overflow-wrap: break-word
wrap-anywhere | overflow-wrap: anywhere
wrap-normal | overflow-wrap: normal
`),
  topic("hyphens", "hyphens", "Typography", "Automatic hyphenation. Needs a lang attribute on the document, which this app sets to en.", "hyphens", "text", `
hyphens-none | hyphens: none
hyphens-manual | hyphens: manual
hyphens-auto | hyphens: auto
`),
  topic("content", "content", "Typography", "Sets the content property, usually on a pseudo-element. The before: and after: variants are how you attach it.", "content", "text", `
content-none | content: none
content-[''] | content: ''
`),
];
