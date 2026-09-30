import { topic, type Topic } from "@/dls/types";

export const surfaceTopics: Topic[] = [
  topic("background-attachment", "background-attachment", "Backgrounds", "fixed pins the image to the viewport. local scrolls it with the element’s own overflow.", "background-attachment", "background", `
bg-fixed | background-attachment: fixed
bg-local | background-attachment: local
bg-scroll | background-attachment: scroll
`),
  topic("background-clip", "background-clip", "Backgrounds", "Where the background paints. bg-clip-text plus a gradient is the filled-type trick.", "background-clip", "background", `
bg-clip-border | background-clip: border-box
bg-clip-padding | background-clip: padding-box
bg-clip-content | background-clip: content-box
bg-clip-text | background-clip: text
`),
  topic("background-color", "background-color", "Backgrounds", "Surface color. Product chrome uses bg-paper, bg-paper-2, bg-ink, and bg-accent.", "background-color", "background", `
bg-transparent | background-color: transparent
bg-current | background-color: currentColor
bg-inherit | background-color: inherit
bg-paper | background-color: var(--color-paper)
bg-paper-2 | background-color: var(--color-paper-2)
bg-ink | background-color: var(--color-ink)
bg-accent | background-color: var(--color-accent)
bg-line | background-color: var(--color-line)
bg-orange-500 | background-color: var(--color-orange-500)
bg-stone-800 | background-color: var(--color-stone-800)
`, { rule: "bg-{hue}-{step} or bg-{token}. The Colors page is the full palette." }),
  topic("background-image", "background-image", "Backgrounds", "Gradients are background images. Direction utilities compose with from, via, and to color stops.", "background-image", "background", `
bg-none | background-image: none
bg-linear-to-r | background-image: linear-gradient(to right, ...)
bg-linear-to-b | background-image: linear-gradient(to bottom, ...)
bg-linear-to-br | background-image: linear-gradient(to bottom right, ...)
bg-radial | background-image: radial-gradient(...)
bg-conic | background-image: conic-gradient(...)
`, { detail: "Color stops are separate utilities: from-orange-500, via-amber-200, to-stone-800. They only paint when a gradient image is also set." }),
  topic("background-origin", "background-origin", "Backgrounds", "The box the background-position is calculated from.", "background-origin", "background", `
bg-origin-border | background-origin: border-box
bg-origin-padding | background-origin: padding-box
bg-origin-content | background-origin: content-box
`),
  topic("background-position", "background-position", "Backgrounds", "Anchor point of a background image.", "background-position", "background", `
bg-bottom | background-position: bottom
bg-center | background-position: center
bg-left | background-position: left
bg-left-bottom | background-position: left bottom
bg-left-top | background-position: left top
bg-right | background-position: right
bg-right-bottom | background-position: right bottom
bg-right-top | background-position: right top
bg-top | background-position: top
`),
  topic("background-repeat", "background-repeat", "Backgrounds", "Whether a pattern tiles. no-repeat is the default you want for a single image.", "background-repeat", "background", `
bg-repeat | background-repeat: repeat
bg-no-repeat | background-repeat: no-repeat
bg-repeat-x | background-repeat: repeat-x
bg-repeat-y | background-repeat: repeat-y
bg-repeat-round | background-repeat: round
bg-repeat-space | background-repeat: space
`),
  topic("background-size", "background-size", "Backgrounds", "cover fills and crops. contain fits the whole image. auto is the intrinsic size.", "background-size", "background", `
bg-auto | background-size: auto
bg-cover | background-size: cover
bg-contain | background-size: contain
`),

  topic("border-radius", "border-radius", "Borders", "Corner radius from the default theme scale. This system does not override it, so the steps match the public docs.", "border-radius", "self", `
rounded-none | border-radius: 0
rounded-sm | border-radius: 0.25rem
rounded | border-radius: 0.25rem
rounded-md | border-radius: 0.375rem
rounded-lg | border-radius: 0.5rem
rounded-xl | border-radius: 0.75rem
rounded-2xl | border-radius: 1rem
rounded-3xl | border-radius: 1.5rem
rounded-full | border-radius: 9999px
rounded-t-lg | border-top-left-radius + border-top-right-radius
rounded-s-lg | border-start-start-radius + border-end-start-radius
`),
  topic("border-width", "border-width", "Borders", "Preflight sets borders to 0. Adding border turns on a 1px line in currentColor unless you set a color.", "border-width", "self", `
border-0 | border-width: 0
border | border-width: 1px
border-2 | border-width: 2px
border-4 | border-width: 4px
border-8 | border-width: 8px
border-x | border-inline-width: 1px
border-y | border-block-width: 1px
border-t-2 | border-top-width: 2px
border-s | border-inline-start-width: 1px
`),
  topic("border-color", "border-color", "Borders", "Hairlines in this system use border-line. Critical edges use border-accent.", "border-color", "self", `
border-transparent | border-color: transparent
border-current | border-color: currentColor
border-inherit | border-color: inherit
border-line | border-color: var(--color-line)
border-ink | border-color: var(--color-ink)
border-accent | border-color: var(--color-accent)
border-stone-300 | border-color: var(--color-stone-300)
`),
  topic("border-style", "border-style", "Borders", "solid is the product default. dashed is for drop zones. dotted is rarely worth it.", "border-style", "self", `
border-solid | border-style: solid
border-dashed | border-style: dashed
border-dotted | border-style: dotted
border-double | border-style: double
border-hidden | border-style: hidden
border-none | border-style: none
`),
  topic("outline-width", "outline-width", "Borders", "Outlines sit outside the box and do not affect layout. Use them for focus, not for decoration.", "outline-width", "self", `
outline-0 | outline-width: 0
outline-1 | outline-width: 1px
outline-2 | outline-width: 2px
outline-4 | outline-width: 4px
outline-8 | outline-width: 8px
`),
  topic("outline-color", "outline-color", "Borders", "Focus outlines in this system use outline-accent.", "outline-color", "self", `
outline-transparent | outline-color: transparent
outline-current | outline-color: currentColor
outline-accent | outline-color: var(--color-accent)
outline-ink | outline-color: var(--color-ink)
`),
  topic("outline-style", "outline-style", "Borders", "outline-none removes the outline. Always replace it with a focus-visible style.", "outline-style", "self", `
outline-none | outline-style: none
outline-solid | outline-style: solid
outline-dashed | outline-style: dashed
outline-dotted | outline-style: dotted
outline-double | outline-style: double
`),
  topic("outline-offset", "outline-offset", "Borders", "Gap between the box and its outline so the ring does not sit on the border.", "outline-offset", "self", `
outline-offset-0 | outline-offset: 0
outline-offset-1 | outline-offset: 1px
outline-offset-2 | outline-offset: 2px
outline-offset-4 | outline-offset: 4px
outline-offset-8 | outline-offset: 8px
`),
  topic("divide-width", "divide-width", "Borders", "Borders between siblings, without painting an outer edge. Still the right tool for stacks and toolbars.", "border-width", "stack", `
divide-x | border-inline-width between children: 1px
divide-y | border-block-width between children: 1px
divide-x-0 | no inline dividers
divide-y-2 | 2px block dividers
divide-y-4 | 4px block dividers
divide-y-8 | 8px block dividers
`, { docsPath: "/docs/border-width", detail: "divide-* is not its own page in the current docs nav. It still ships, and it belongs with borders." }),
  topic("divide-color", "divide-color", "Borders", "Color of those sibling dividers.", "border-color", "stack", `
divide-line | divider color: var(--color-line)
divide-ink | divider color: var(--color-ink)
divide-accent | divider color: var(--color-accent)
divide-transparent | divider color: transparent
`, { docsPath: "/docs/border-color" }),
  topic("divide-style", "divide-style", "Borders", "Style of sibling dividers.", "border-style", "stack", `
divide-solid | border-style: solid
divide-dashed | border-style: dashed
divide-dotted | border-style: dotted
divide-none | border-style: none
`, { docsPath: "/docs/border-style" }),

  topic("box-shadow", "box-shadow", "Effects", "Elevation. One soft shadow is enough. Stacking three shadows is how cards start to look like stickers.", "box-shadow", "shadow", `
shadow-2xs | box-shadow: var(--shadow-2xs)
shadow-xs | box-shadow: var(--shadow-xs)
shadow-sm | box-shadow: var(--shadow-sm)
shadow | box-shadow: var(--shadow)
shadow-md | box-shadow: var(--shadow-md)
shadow-lg | box-shadow: var(--shadow-lg)
shadow-xl | box-shadow: var(--shadow-xl)
shadow-2xl | box-shadow: var(--shadow-2xl)
shadow-none | box-shadow: none
shadow-inner | box-shadow: inset ...
`),
  topic("text-shadow", "text-shadow", "Effects", "A last-resort legibility aid over photography. Do not shadow body copy.", "text-shadow", "text", `
text-shadow-2xs | text-shadow: var(--text-shadow-2xs)
text-shadow-xs | text-shadow: var(--text-shadow-xs)
text-shadow-sm | text-shadow: var(--text-shadow-sm)
text-shadow-md | text-shadow: var(--text-shadow-md)
text-shadow-lg | text-shadow: var(--text-shadow-lg)
text-shadow-none | text-shadow: none
`),
  topic("opacity", "opacity", "Effects", "Fades the entire element, including children. To fade only a color, use the slash modifier (bg-ink/40) instead.", "opacity", "self", `
opacity-0 | opacity: 0
opacity-5 | opacity: 0.05
opacity-10 | opacity: 0.1
opacity-20 | opacity: 0.2
opacity-25 | opacity: 0.25
opacity-40 | opacity: 0.4
opacity-50 | opacity: 0.5
opacity-60 | opacity: 0.6
opacity-75 | opacity: 0.75
opacity-80 | opacity: 0.8
opacity-90 | opacity: 0.9
opacity-100 | opacity: 1
`),
  topic("mix-blend-mode", "mix-blend-mode", "Effects", "Blends the element with what is behind it. multiply and screen are the two you will actually use.", "mix-blend-mode", "blend", `
mix-blend-normal | mix-blend-mode: normal
mix-blend-multiply | mix-blend-mode: multiply
mix-blend-screen | mix-blend-mode: screen
mix-blend-overlay | mix-blend-mode: overlay
mix-blend-darken | mix-blend-mode: darken
mix-blend-lighten | mix-blend-mode: lighten
mix-blend-difference | mix-blend-mode: difference
mix-blend-exclusion | mix-blend-mode: exclusion
`),
  topic("background-blend-mode", "background-blend-mode", "Effects", "Blends layered backgrounds on the same element — a color wash over a gradient or image.", "background-blend-mode", "background", `
bg-blend-normal | background-blend-mode: normal
bg-blend-multiply | background-blend-mode: multiply
bg-blend-screen | background-blend-mode: screen
bg-blend-overlay | background-blend-mode: overlay
bg-blend-darken | background-blend-mode: darken
bg-blend-lighten | background-blend-mode: lighten
`),
  topic("mask-clip", "mask-clip", "Effects", "Which box the mask is clipped to.", "mask-clip", "mask", `
mask-clip-border | mask-clip: border-box
mask-clip-padding | mask-clip: padding-box
mask-clip-content | mask-clip: content-box
mask-clip-fill | mask-clip: fill-box
mask-clip-stroke | mask-clip: stroke-box
mask-clip-view | mask-clip: view-box
mask-no-clip | mask-clip: no-clip
`),
  topic("mask-composite", "mask-composite", "Effects", "How multiple mask layers combine: add, subtract, intersect, exclude.", "mask-composite", "mask", `
mask-add | mask-composite: add
mask-subtract | mask-composite: subtract
mask-intersect | mask-composite: intersect
mask-exclude | mask-composite: exclude
`),
  topic("mask-image", "mask-image", "Effects", "Uses an image or a gradient as the alpha of the element. Linear masks fade an edge; radial masks punch a vignette.", "mask-image", "mask", `
mask-none | mask-image: none
mask-linear-from-50% | linear gradient mask, opaque until 50%
mask-b-from-50% | fade the bottom edge
mask-t-from-40% | fade the top edge
mask-radial-from-70% | radial fade from 70%
`, { rule: "mask-linear-*, mask-radial-*, and edge forms such as mask-b-from-{n} and mask-t-to-{n}. Arbitrary images use mask-[url(...)]." }),
  topic("mask-mode", "mask-mode", "Effects", "Whether a mask layer uses alpha or luminance.", "mask-mode", "mask", `
mask-alpha | mask-mode: alpha
mask-luminance | mask-mode: luminance
mask-match | mask-mode: match-source
`),
  topic("mask-origin", "mask-origin", "Effects", "The origin box of the mask, matching background-origin.", "mask-origin", "mask", `
mask-origin-border | mask-origin: border-box
mask-origin-padding | mask-origin: padding-box
mask-origin-content | mask-origin: content-box
mask-origin-fill | mask-origin: fill-box
mask-origin-stroke | mask-origin: stroke-box
mask-origin-view | mask-origin: view-box
`),
  topic("mask-position", "mask-position", "Effects", "Position of the mask image, with the same keywords as backgrounds.", "mask-position", "mask", `
mask-top | mask-position: top
mask-center | mask-position: center
mask-bottom | mask-position: bottom
mask-left | mask-position: left
mask-right | mask-position: right
`),
  topic("mask-repeat", "mask-repeat", "Effects", "Tiling of the mask image.", "mask-repeat", "mask", `
mask-repeat | mask-repeat: repeat
mask-no-repeat | mask-repeat: no-repeat
mask-repeat-x | mask-repeat: repeat-x
mask-repeat-y | mask-repeat: repeat-y
mask-repeat-round | mask-repeat: round
mask-repeat-space | mask-repeat: space
`),
  topic("mask-size", "mask-size", "Effects", "Size of the mask image.", "mask-size", "mask", `
mask-auto | mask-size: auto
mask-cover | mask-size: cover
mask-contain | mask-size: contain
`),
  topic("mask-type", "mask-type", "Effects", "How an SVG <mask> is read. Alpha uses opacity. Luminance uses brightness — keep that mask grayscale.", "mask-type", "svg", `
mask-type-alpha | mask-type: alpha
mask-type-luminance | mask-type: luminance
`),

  topic("filter", "filter", "Filters", "The filter property is applied by the function utilities below. filter-none clears every function on the element.", "filter", "filter", `
filter-none | filter: none
`),
  topic("filter-blur", "blur", "Filters", "Gaussian blur. xs and sm are focus treatments. 2xl and 3xl are decorative.", "filter: blur()", "filter", `
blur-none | filter: blur(0)
blur-xs | filter: blur(4px) scale varies by theme
blur-sm | filter: blur(8px)
blur-md | filter: blur(12px)
blur-lg | filter: blur(16px)
blur-xl | filter: blur(24px)
blur-2xl | filter: blur(40px)
blur-3xl | filter: blur(64px)
`, { nested: true }),
  topic("filter-brightness", "brightness", "Filters", "Multiplies luminosity. 100 is identity. Below darkens, above blows out.", "filter: brightness()", "filter", `
brightness-0 | brightness(0)
brightness-50 | brightness(0.5)
brightness-75 | brightness(0.75)
brightness-90 | brightness(0.9)
brightness-100 | brightness(1)
brightness-110 | brightness(1.1)
brightness-125 | brightness(1.25)
brightness-150 | brightness(1.5)
brightness-200 | brightness(2)
`, { nested: true }),
  topic("filter-contrast", "contrast", "Filters", "Expands or compresses the tonal range.", "filter: contrast()", "filter", `
contrast-0 | contrast(0)
contrast-50 | contrast(0.5)
contrast-75 | contrast(0.75)
contrast-100 | contrast(1)
contrast-125 | contrast(1.25)
contrast-150 | contrast(1.5)
contrast-200 | contrast(2)
`, { nested: true }),
  topic("filter-drop-shadow", "drop-shadow", "Filters", "A shadow that follows the alpha of the element, including PNG and SVG silhouettes. box-shadow cannot do that.", "filter: drop-shadow()", "filter", `
drop-shadow-xs | drop-shadow(var(--drop-shadow-xs))
drop-shadow-sm | drop-shadow(var(--drop-shadow-sm))
drop-shadow-md | drop-shadow(var(--drop-shadow-md))
drop-shadow-lg | drop-shadow(var(--drop-shadow-lg))
drop-shadow-xl | drop-shadow(var(--drop-shadow-xl))
drop-shadow-2xl | drop-shadow(var(--drop-shadow-2xl))
drop-shadow-none | drop-shadow(0 0 #0000)
`, { nested: true }),
  topic("filter-grayscale", "grayscale", "Filters", "Removes chroma. grayscale is the full effect; grayscale-0 is the off switch for a hover transition.", "filter: grayscale()", "filter", `
grayscale-0 | grayscale(0)
grayscale | grayscale(100%)
`, { nested: true }),
  topic("filter-hue-rotate", "hue-rotate", "Filters", "Rotates every color around the wheel. Useful for theme variants of a single illustration.", "filter: hue-rotate()", "filter", `
hue-rotate-0 | hue-rotate(0deg)
hue-rotate-15 | hue-rotate(15deg)
hue-rotate-30 | hue-rotate(30deg)
hue-rotate-60 | hue-rotate(60deg)
hue-rotate-90 | hue-rotate(90deg)
hue-rotate-180 | hue-rotate(180deg)
-hue-rotate-15 | hue-rotate(-15deg)
`, { nested: true }),
  topic("filter-invert", "invert", "Filters", "Flips color. invert is a crude dark-treatment for a third-party logo — prefer a real second asset.", "filter: invert()", "filter", `
invert-0 | invert(0)
invert | invert(100%)
`, { nested: true }),
  topic("filter-saturate", "saturate", "Filters", "Chroma intensity. 0 is gray. 100 is identity. 200 is posterized.", "filter: saturate()", "filter", `
saturate-0 | saturate(0)
saturate-50 | saturate(0.5)
saturate-100 | saturate(1)
saturate-150 | saturate(1.5)
saturate-200 | saturate(2)
`, { nested: true }),
  topic("filter-sepia", "sepia", "Filters", "A warm brown cast. sepia is full; sepia-0 clears it.", "filter: sepia()", "filter", `
sepia-0 | sepia(0)
sepia | sepia(100%)
`, { nested: true }),

  topic("backdrop-filter", "backdrop-filter", "Filters", "Filters what is behind a translucent element. The element needs a semi-transparent background or there is nothing to see.", "backdrop-filter", "backdrop", `
backdrop-filter-none | backdrop-filter: none
`),
  topic("backdrop-filter-blur", "blur", "Filters", "The frosted-panel blur. md is usually enough; 3xl melts the page.", "backdrop-filter: blur()", "backdrop", `
backdrop-blur-none | backdrop-filter: blur(0)
backdrop-blur-xs | backdrop-filter: blur(4px)
backdrop-blur-sm | backdrop-filter: blur(8px)
backdrop-blur-md | backdrop-filter: blur(12px)
backdrop-blur-lg | backdrop-filter: blur(16px)
backdrop-blur-xl | backdrop-filter: blur(24px)
backdrop-blur-2xl | backdrop-filter: blur(40px)
backdrop-blur-3xl | backdrop-filter: blur(64px)
`, { nested: true }),
  topic("backdrop-filter-brightness", "brightness", "Filters", "Brightness of the backdrop only.", "backdrop-filter: brightness()", "backdrop", `
backdrop-brightness-50 | brightness(0.5)
backdrop-brightness-75 | brightness(0.75)
backdrop-brightness-100 | brightness(1)
backdrop-brightness-125 | brightness(1.25)
backdrop-brightness-150 | brightness(1.5)
`, { nested: true }),
  topic("backdrop-filter-contrast", "contrast", "Filters", "Contrast of the backdrop only.", "backdrop-filter: contrast()", "backdrop", `
backdrop-contrast-50 | contrast(0.5)
backdrop-contrast-75 | contrast(0.75)
backdrop-contrast-100 | contrast(1)
backdrop-contrast-125 | contrast(1.25)
backdrop-contrast-150 | contrast(1.5)
`, { nested: true }),
  topic("backdrop-filter-grayscale", "grayscale", "Filters", "Desaturates whatever sits behind the panel.", "backdrop-filter: grayscale()", "backdrop", `
backdrop-grayscale-0 | grayscale(0)
backdrop-grayscale | grayscale(100%)
`, { nested: true }),
  topic("backdrop-filter-hue-rotate", "hue-rotate", "Filters", "Hue shift of the backdrop.", "backdrop-filter: hue-rotate()", "backdrop", `
backdrop-hue-rotate-0 | hue-rotate(0)
backdrop-hue-rotate-15 | hue-rotate(15deg)
backdrop-hue-rotate-90 | hue-rotate(90deg)
backdrop-hue-rotate-180 | hue-rotate(180deg)
`, { nested: true }),
  topic("backdrop-filter-invert", "invert", "Filters", "Inverts the backdrop. Harsh. Almost never a product treatment.", "backdrop-filter: invert()", "backdrop", `
backdrop-invert-0 | invert(0)
backdrop-invert | invert(100%)
`, { nested: true }),
  topic("backdrop-filter-opacity", "opacity", "Filters", "Opacity of the backdrop samples, not of the element. Different from the opacity utility.", "backdrop-filter: opacity()", "backdrop", `
backdrop-opacity-0 | opacity(0)
backdrop-opacity-20 | opacity(0.2)
backdrop-opacity-50 | opacity(0.5)
backdrop-opacity-80 | opacity(0.8)
backdrop-opacity-100 | opacity(1)
`, { nested: true }),
  topic("backdrop-filter-saturate", "saturate", "Filters", "Often paired with blur so a frosted bar stays colorful instead of milky.", "backdrop-filter: saturate()", "backdrop", `
backdrop-saturate-0 | saturate(0)
backdrop-saturate-50 | saturate(0.5)
backdrop-saturate-100 | saturate(1)
backdrop-saturate-150 | saturate(1.5)
backdrop-saturate-200 | saturate(2)
`, { nested: true }),
  topic("backdrop-filter-sepia", "sepia", "Filters", "Sepia on the backdrop only.", "backdrop-filter: sepia()", "backdrop", `
backdrop-sepia-0 | sepia(0)
backdrop-sepia | sepia(100%)
`, { nested: true }),
];
