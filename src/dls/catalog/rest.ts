import { topic, type Topic } from "@/dls/types";

export const restTopics: Topic[] = [
  topic("border-collapse", "border-collapse", "Tables", "collapse merges adjacent cell borders into one. separate keeps them apart so border-spacing can work.", "border-collapse", "table", `
border-collapse | border-collapse: collapse
border-separate | border-collapse: separate
`),
  topic("border-spacing", "border-spacing", "Tables", "Gap between cells when the table is border-separate. Ignored under collapse.", "border-spacing", "table", `
border-spacing-0 | border-spacing: 0
border-spacing-1 | border-spacing: 0.25rem
border-spacing-2 | border-spacing: 0.5rem
border-spacing-4 | border-spacing: 1rem
border-spacing-8 | border-spacing: 2rem
`),
  topic("table-layout", "table-layout", "Tables", "fixed uses the first row (or col widths) and ignores content. auto sizes from content and is slower.", "table-layout", "table", `
table-auto | table-layout: auto
table-fixed | table-layout: fixed
`),
  topic("caption-side", "caption-side", "Tables", "Where the <caption> sits. Top is the default and the one people find.", "caption-side", "table", `
caption-top | caption-side: top
caption-bottom | caption-side: bottom
`),

  topic("transition-property", "transition-property", "Transitions & Animation", "Which properties animate. Prefer transition-colors or transition-transform over transition-all.", "transition-property", "transition", `
transition-none | transition-property: none
transition-all | transition-property: all
transition | color, background, border, outline, text-decoration, fill, stroke, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter
transition-colors | color, background-color, border-color, outline-color, text-decoration-color, fill, stroke
transition-opacity | opacity
transition-shadow | box-shadow
transition-transform | transform, translate, scale, rotate
`),
  topic("transition-behavior", "transition-behavior", "Transitions & Animation", "allow-discrete lets display and content animate, including the new starting style. normal is the classic behavior.", "transition-behavior", "transition", `
transition-normal | transition-behavior: normal
transition-discrete | transition-behavior: allow-discrete
`),
  topic("transition-duration", "transition-duration", "Transitions & Animation", "How long the change takes. 150–200ms for hover. Longer than 300ms feels late.", "transition-duration", "transition", `
duration-0 | transition-duration: 0ms
duration-75 | transition-duration: 75ms
duration-100 | transition-duration: 100ms
duration-150 | transition-duration: 150ms
duration-200 | transition-duration: 200ms
duration-300 | transition-duration: 300ms
duration-500 | transition-duration: 500ms
duration-700 | transition-duration: 700ms
duration-1000 | transition-duration: 1000ms
`),
  topic("transition-timing-function", "transition-timing-function", "Transitions & Animation", "The curve. ease-out for things entering. ease-in for things leaving. linear only for continuous motion.", "transition-timing-function", "transition", `
ease-linear | transition-timing-function: linear
ease-in | transition-timing-function: cubic-bezier(0.4, 0, 1, 1)
ease-out | transition-timing-function: cubic-bezier(0, 0, 0.2, 1)
ease-in-out | transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
`),
  topic("transition-delay", "transition-delay", "Transitions & Animation", "Wait before starting. Use it to stagger a short list, not to delay a button.", "transition-delay", "transition", `
delay-0 | transition-delay: 0ms
delay-75 | transition-delay: 75ms
delay-100 | transition-delay: 100ms
delay-150 | transition-delay: 150ms
delay-200 | transition-delay: 200ms
delay-300 | transition-delay: 300ms
delay-500 | transition-delay: 500ms
delay-1000 | transition-delay: 1000ms
`),
  topic("animation", "animation", "Transitions & Animation", "Named keyframes. spin for loaders, pulse for skeletons, ping for a live dot, bounce sparingly.", "animation", "animation", `
animate-none | animation: none
animate-spin | animation: spin 1s linear infinite
animate-ping | animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite
animate-pulse | animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite
animate-bounce | animation: bounce 1s infinite
`, { detail: "If the operating system asks for reduced motion, this app cuts animation to nearly nothing. Do not build a loader that only communicates through motion." }),

  topic("backface-visibility", "backface-visibility", "Transforms", "Hides the back of a flipped card. Pair with rotate and transform-style 3d.", "backface-visibility", "transform", `
backface-hidden | backface-visibility: hidden
backface-visible | backface-visibility: visible
`),
  topic("perspective", "perspective", "Transforms", "Vanishing point distance on the parent of a 3D child. Smaller numbers are more dramatic.", "perspective", "transform", `
perspective-none | perspective: none
perspective-dramatic | perspective: 100px
perspective-near | perspective: 300px
perspective-normal | perspective: 500px
perspective-midrange | perspective: 800px
perspective-distant | perspective: 1200px
`),
  topic("perspective-origin", "perspective-origin", "Transforms", "Where the viewer is looking from.", "perspective-origin", "transform", `
perspective-origin-center | perspective-origin: center
perspective-origin-top | perspective-origin: top
perspective-origin-bottom | perspective-origin: bottom
perspective-origin-left | perspective-origin: left
perspective-origin-right | perspective-origin: right
`),
  topic("rotate", "rotate", "Transforms", "Rotation, including the separate X/Y/Z utilities in v4.", "rotate", "transform", `
rotate-0 | rotate: 0deg
rotate-1 | rotate: 1deg
rotate-2 | rotate: 2deg
rotate-3 | rotate: 3deg
rotate-6 | rotate: 6deg
rotate-12 | rotate: 12deg
rotate-45 | rotate: 45deg
rotate-90 | rotate: 90deg
rotate-180 | rotate: 180deg
-rotate-6 | rotate: -6deg
-rotate-12 | rotate: -12deg
`),
  topic("scale", "scale", "Transforms", "Size without affecting layout. scale-95 is a press state. scale-105 is a hover lift.", "scale", "transform", `
scale-0 | scale: 0
scale-50 | scale: 0.5
scale-75 | scale: 0.75
scale-90 | scale: 0.9
scale-95 | scale: 0.95
scale-100 | scale: 1
scale-105 | scale: 1.05
scale-110 | scale: 1.1
scale-125 | scale: 1.25
scale-150 | scale: 1.5
scale-x-75 | scaleX: 0.75
scale-y-125 | scaleY: 1.25
`),
  topic("skew", "skew", "Transforms", "Shear. Mostly decorative. It makes text harder to read, so skew the container, not the type.", "skew", "transform", `
skew-0 | skew: 0
skew-1 | skew: 1deg
skew-2 | skew: 2deg
skew-3 | skew: 3deg
skew-6 | skew: 6deg
skew-12 | skew: 12deg
-skew-6 | skew: -6deg
skew-x-6 | skewX: 6deg
skew-y-3 | skewY: 3deg
`),
  topic("transform", "transform", "Transforms", "transform-none clears translate, rotate, and scale. transform-gpu hints a compositor layer — only when you have measured a problem.", "transform", "transform", `
transform-none | transform: none
transform-gpu | transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)
`),
  topic("transform-origin", "transform-origin", "Transforms", "The pivot. origin-top on a dropdown. origin-left on a nav tray.", "transform-origin", "transform", `
origin-center | transform-origin: center
origin-top | transform-origin: top
origin-top-right | transform-origin: top right
origin-right | transform-origin: right
origin-bottom | transform-origin: bottom
origin-bottom-left | transform-origin: bottom left
origin-left | transform-origin: left
`),
  topic("transform-style", "transform-style", "Transforms", "preserve-3d lets children live in the parent’s 3D space. flat flattens them.", "transform-style", "transform", `
transform-flat | transform-style: flat
transform-3d | transform-style: preserve-3d
`),
  topic("translate", "translate", "Transforms", "Move an element without taking it out of flow. Prefer this to a relative offset for small nudges.", "translate", "transform", `
translate-0 | translate: 0
translate-x-1 | translateX: 0.25rem
translate-x-4 | translateX: 1rem
translate-x-8 | translateX: 2rem
translate-y-1 | translateY: 0.25rem
translate-y-4 | translateY: 1rem
-translate-y-2 | translateY: -0.5rem
translate-x-1/2 | translateX: 50%
translate-full | translate: 100%
`),
  topic("zoom", "zoom", "Transforms", "CSS zoom scales layout, not just paint. It affects document flow. Prefer scale unless you truly want the layout to change.", "zoom", "transform", `
zoom-75 | zoom: 0.75
zoom-100 | zoom: 1
zoom-125 | zoom: 1.25
zoom-150 | zoom: 1.5
`),

  topic("accent-color", "accent-color", "Interactivity", "The color of checkboxes, radios, and range thumbs. Set it once on a form, not on every control.", "accent-color", "field", `
accent-auto | accent-color: auto
accent-current | accent-color: currentColor
accent-accent | accent-color: var(--color-accent)
accent-ink | accent-color: var(--color-ink)
accent-emerald-700 | accent-color: var(--color-emerald-700)
`),
  topic("appearance", "appearance", "Interactivity", "appearance-none strips native chrome so you can draw your own. You then own the focus style.", "appearance", "field", `
appearance-none | appearance: none
appearance-auto | appearance: auto
`),
  topic("caret-color", "caret-color", "Interactivity", "The text cursor color inside inputs. Match it to the accent, not to a random hue.", "caret-color", "field", `
caret-transparent | caret-color: transparent
caret-current | caret-color: currentColor
caret-accent | caret-color: var(--color-accent)
caret-ink | caret-color: var(--color-ink)
`),
  topic("color-scheme", "color-scheme", "Interactivity", "Tells the engine which native form controls and scrollbars to paint. This app sets it from the .dark class.", "color-scheme", "self", `
scheme-normal | color-scheme: normal
scheme-dark | color-scheme: dark
scheme-light | color-scheme: light
scheme-light-dark | color-scheme: light dark
scheme-only-dark | color-scheme: dark only
scheme-only-light | color-scheme: light only
`),
  topic("cursor", "cursor", "Interactivity", "The pointer. Buttons already get cursor-pointer from the base layer. Use not-allowed on disabled, text on editors, grab on drag handles.", "cursor", "cursor", `
cursor-auto | cursor: auto
cursor-default | cursor: default
cursor-pointer | cursor: pointer
cursor-wait | cursor: wait
cursor-text | cursor: text
cursor-move | cursor: move
cursor-not-allowed | cursor: not-allowed
cursor-grab | cursor: grab
cursor-grabbing | cursor: grabbing
cursor-crosshair | cursor: crosshair
cursor-zoom-in | cursor: zoom-in
cursor-none | cursor: none
`),
  topic("field-sizing", "field-sizing", "Interactivity", "content lets a textarea grow with its text. fixed is the classic size attribute behavior.", "field-sizing", "field", `
field-sizing-fixed | field-sizing: fixed
field-sizing-content | field-sizing: content
`),
  topic("pointer-events", "pointer-events", "Interactivity", "none lets clicks pass through. Use it on decorative overlays, not to fake a disabled button — disabled users still need the control announced.", "pointer-events", "self", `
pointer-events-none | pointer-events: none
pointer-events-auto | pointer-events: auto
`),
  topic("resize", "resize", "Interactivity", "Allows a textarea to be dragged. resize-y is the one that does not break a layout.", "resize", "field", `
resize-none | resize: none
resize | resize: both
resize-y | resize: vertical
resize-x | resize: horizontal
`),
  topic("scroll-behavior", "scroll-behavior", "Interactivity", "smooth animates anchor jumps. Skip it when the user has asked for reduced motion — this app already does.", "scroll-behavior", "scroll", `
scroll-auto | scroll-behavior: auto
scroll-smooth | scroll-behavior: smooth
`),
  topic("scrollbar-color", "scrollbar-color", "Interactivity", "Thumb and track colors. Name them independently: scrollbar-thumb-* and scrollbar-track-*.", "scrollbar-color", "scroll", `
scrollbar-thumb-stone-500 | thumb color
scrollbar-track-stone-200 | track color
scrollbar-thumb-ink | thumb: var(--color-ink)
scrollbar-track-paper-2 | track: var(--color-paper-2)
`, { rule: "scrollbar-thumb-{color} and scrollbar-track-{color}, including palette steps and your tokens." }),
  topic("scrollbar-width", "scrollbar-width", "Interactivity", "thin is the compact scrollbar. none hides it — only do that if another affordance shows that the region scrolls.", "scrollbar-width", "scroll", `
scrollbar-auto | scrollbar-width: auto
scrollbar-thin | scrollbar-width: thin
scrollbar-none | scrollbar-width: none
`),
  topic("scrollbar-gutter", "scrollbar-gutter", "Interactivity", "Reserves space for the scrollbar so the layout does not shift when content overflows.", "scrollbar-gutter", "scroll", `
scrollbar-gutter-auto | scrollbar-gutter: auto
scrollbar-gutter-stable | scrollbar-gutter: stable
scrollbar-gutter-both | scrollbar-gutter: stable both-edges
`),
  topic("scroll-margin", "scroll-margin", "Interactivity", "Offset for scroll-into-view and anchor links, so a sticky header does not cover the target.", "scroll-margin", "scroll", `
scroll-m-0 | scroll-margin: 0
scroll-mt-4 | scroll-margin-top: 1rem
scroll-mt-16 | scroll-margin-top: 4rem
scroll-m-8 | scroll-margin: 2rem
`),
  topic("scroll-padding", "scroll-padding", "Interactivity", "The same offset, applied on the scroll container instead of the target.", "scroll-padding", "scroll", `
scroll-p-0 | scroll-padding: 0
scroll-pt-4 | scroll-padding-top: 1rem
scroll-pt-16 | scroll-padding-top: 4rem
scroll-p-8 | scroll-padding: 2rem
`),
  topic("scroll-snap-align", "scroll-snap-align", "Interactivity", "Where a child rests inside a snap container. start for carousels, center for pickers.", "scroll-snap-align", "scroll", `
snap-start | scroll-snap-align: start
snap-end | scroll-snap-align: end
snap-center | scroll-snap-align: center
snap-align-none | scroll-snap-align: none
`),
  topic("scroll-snap-stop", "scroll-snap-stop", "Interactivity", "always forces the scroll to stop on this item instead of flying past it.", "scroll-snap-stop", "scroll", `
snap-normal | scroll-snap-stop: normal
snap-always | scroll-snap-stop: always
`),
  topic("scroll-snap-type", "scroll-snap-type", "Interactivity", "Turns a scroller into a snap container. mandatory stops hard. proximity only snaps when you are close.", "scroll-snap-type", "scroll", `
snap-none | scroll-snap-type: none
snap-x | scroll-snap-type: x var(--tw-scroll-snap-strictness)
snap-y | scroll-snap-type: y mandatory (strictness separate)
snap-both | scroll-snap-type: both
snap-mandatory | scroll-snap-type: var(--tw-scroll-snap-strictness): mandatory
snap-proximity | scroll-snap-type: proximity
`),
  topic("touch-action", "touch-action", "Interactivity", "Which gestures the browser handles. manipulation removes the double-tap zoom delay on controls.", "touch-action", "self", `
touch-auto | touch-action: auto
touch-none | touch-action: none
touch-pan-x | touch-action: pan-x
touch-pan-y | touch-action: pan-y
touch-pan-left | touch-action: pan-left
touch-pan-right | touch-action: pan-right
touch-pinch-zoom | touch-action: pinch-zoom
touch-manipulation | touch-action: manipulation
`),
  topic("user-select", "user-select", "Interactivity", "select-none on draggable chrome. select-all for a copy-this code chip. Do not block selection on body copy.", "user-select", "text", `
select-none | user-select: none
select-text | user-select: text
select-all | user-select: all
select-auto | user-select: auto
`),
  topic("will-change", "will-change", "Interactivity", "A performance hint, not an animation. Set it only on something that is about to change, then remove it.", "will-change", "self", `
will-change-auto | will-change: auto
will-change-scroll | will-change: scroll-position
will-change-contents | will-change: contents
will-change-transform | will-change: transform
`),

  topic("fill", "fill", "SVG", "Fill of SVG shapes. fill-current inherits text color, which is how icons follow the button.", "fill", "svg", `
fill-none | fill: none
fill-inherit | fill: inherit
fill-current | fill: currentColor
fill-transparent | fill: transparent
fill-ink | fill: var(--color-ink)
fill-accent | fill: var(--color-accent)
fill-paper | fill: var(--color-paper)
`),
  topic("stroke", "stroke", "SVG", "Stroke color. Same token story as fill.", "stroke", "svg", `
stroke-none | stroke: none
stroke-inherit | stroke: inherit
stroke-current | stroke: currentColor
stroke-ink | stroke: var(--color-ink)
stroke-accent | stroke: var(--color-accent)
stroke-paper | stroke: var(--color-paper)
`),
  topic("stroke-width", "stroke-width", "SVG", "Stroke weight in px. 1.5 and 2 are the icon weights. Thinner than 1 disappears at 16px.", "stroke-width", "svg", `
stroke-0 | stroke-width: 0
stroke-1 | stroke-width: 1
stroke-2 | stroke-width: 2
`),

  topic("forced-color-adjust", "forced-color-adjust", "Accessibility", "Windows high-contrast mode replaces colors. none opts a graphic out. Leave text and controls on auto.", "forced-color-adjust", "self", `
forced-color-adjust-auto | forced-color-adjust: auto
forced-color-adjust-none | forced-color-adjust: none
`),
  topic(
    "screen-readers",
    "Screen readers",
    "Accessibility",
    "sr-only hides something visually and keeps it available to assistive tech. not-sr-only brings it back at a breakpoint.",
    "clip",
    "text",
    `
sr-only | position absolute; size 1px; clip; no margin
not-sr-only | position static; size auto; clip auto
`,
    {
      docsPath: undefined,
      detail:
        "Use sr-only for a button that is only an icon, and for skip links. Do not use it to hide an error message that sighted people also need. The current Tailwind nav lists forced-color-adjust as the accessibility page; sr-only still ships and belongs in a component library.",
    },
  ),
];
