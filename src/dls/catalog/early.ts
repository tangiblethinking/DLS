import { topic, type Topic } from "@/dls/types";

export const earlyTopics: Topic[] = [
  topic(
    "components",
    "Components",
    "Library",
    "The product layer. Buttons, fields, and feedback built from the tokens below — not one-off class strings copied between screens.",
    "components",
    "components",
    "",
    { docsPath: undefined },
  ),
  topic(
    "tokens",
    "Tokens",
    "Library",
    "Color, type, and surface decisions live in CSS variables. Tailwind utilities read those variables, so a theme change does not require a class rewrite.",
    "custom properties",
    "tokens",
    "",
    {
      docsPath: "/docs/theme",
      detail:
        "This system customizes ink, paper, line, mute, and accent. Spacing, radius, and the default color palette stay on Tailwind’s scale so utility pages match the public API.",
    },
  ),
  topic(
    "installation",
    "Installation",
    "Getting started",
    "Tailwind v4 installs as a Vite plugin. There is no tailwind.config.js in the default path — tokens are declared in CSS.",
    "—",
    "concept",
    "",
    {
      detail:
        "This repo already runs that setup: @import \"tailwindcss\" in the global stylesheet, @tailwindcss/vite in the build, and React components that carry utilities in className.",
    },
  ),
  topic(
    "editor-setup",
    "Editor setup",
    "Getting started",
    "Class completion, conflicting-utility warnings, and CSS-on-hover come from the editor language server, not from this package.",
    "—",
    "concept",
    "",
    {
      detail:
        "Use the official Tailwind CSS IntelliSense extension in VS Code, or the Tailwind plugin in JetBrains. Point it at this stylesheet so custom tokens (bg-paper, text-accent) complete alongside the default scale.",
    },
  ),
  topic(
    "compatibility",
    "Compatibility",
    "Getting started",
    "v4 assumes a modern browser baseline: cascade layers, color-mix, registered custom properties, and logical properties.",
    "—",
    "concept",
    "",
    {
      detail:
        "Safari 16.4+, Chrome 111+, and Firefox 128+ are the practical floor. If a surface must support older engines, stay on v3 rather than hoping unsupported utilities degrade quietly.",
    },
  ),
  topic(
    "upgrade-guide",
    "Upgrade guide",
    "Getting started",
    "Moving a v3 codebase is mostly a config and a handful of renamed utilities, not a visual rewrite.",
    "—",
    "concept",
    "",
    {
      detail:
        "Replace the three @tailwind directives with @import \"tailwindcss\". Move theme.extend into @theme. Rings are box-shadows now. The default border color is currentColor, so bare border utilities pick up text color unless you set a color. Re-check shadow, ring, and space-x call sites.",
    },
  ),
  topic(
    "styling-with-utility-classes",
    "Styling with utility classes",
    "Core concepts",
    "Style at the element. A utility does one thing, and the constraint is the point: you compose from a scale instead of inventing a new rule per screen.",
    "—",
    "concept",
    "",
  ),
  topic(
    "hover-focus-and-other-states",
    "Hover, focus, and other states",
    "Core concepts",
    "Prefix a utility to scope it: hover:, focus-visible:, disabled:, aria-expanded:, data-[state=checked]:. The base class stays, the variant adds a condition.",
    "variants",
    "concept",
    "",
    {
      detail:
        "Prefer focus-visible over focus so mouse clicks do not draw a ring. Disabled styles should drop pointer events as well as contrast, or the control still feels clickable.",
    },
  ),
  topic(
    "responsive-design",
    "Responsive design",
    "Core concepts",
    "Unprefixed utilities are the small screen. sm: md: lg: xl: 2xl: apply at min-width breakpoints. Every utility accepts them.",
    "media queries",
    "concept",
    "",
    {
      detail:
        "Breakpoints: sm 40rem, md 48rem, lg 64rem, xl 80rem, 2xl 96rem. Container queries (@container, @sm:) belong next to breakpoints when the component, not the viewport, should reflow.",
    },
  ),
  topic(
    "dark-mode",
    "Dark mode",
    "Core concepts",
    "This library flips tokens on a .dark class on the document. Utilities do not need a dark: twin if they already point at those tokens.",
    "color-scheme",
    "concept",
    "",
    {
      detail:
        "Use dark: when a specific utility must differ and a token is the wrong tool — a photograph treatment, a one-off shadow. Do not maintain two full class strings for light and dark.",
    },
  ),
  topic(
    "theme",
    "Theme variables",
    "Core concepts",
    "@theme is the design-token table. A --color-* name becomes bg-*, text-*, and border-*. A --font-* name becomes a font-* family.",
    "@theme",
    "concept",
    "",
  ),
  topic(
    "colors",
    "Colors",
    "Core concepts",
    "The default palette is a set of hues stepped from 50 to 950. Name a color as {hue}-{step}. 500 is the mid tone; 950 is near-black.",
    "color",
    "swatch",
    "",
    {
      rule: "bg-red-500, text-sky-700, border-stone-200. Opacity modifiers use the slash: bg-ink/80. Prefer tokens (bg-paper, text-accent) in product UI; use the raw palette in illustrations and data viz.",
    },
  ),
  topic(
    "adding-custom-styles",
    "Adding custom styles",
    "Core concepts",
    "When a utility is missing, add a token or a tiny @utility. Reach for a raw stylesheet only for something utilities cannot express.",
    "CSS",
    "concept",
    "",
    {
      detail:
        "Order of preference: 1) an existing utility, 2) a theme token, 3) a named @utility that composes other utilities, 4) plain CSS. @apply is a last resort — it hides the styling from the markup that designers review.",
    },
  ),
  topic(
    "detecting-classes-in-source-files",
    "Detecting classes in source files",
    "Core concepts",
    "The compiler only emits classes it can see as complete strings. A concatenated name never makes it into the CSS.",
    "source detection",
    "concept",
    "",
    {
      detail:
        "Write bg-paper, not `bg-${tone}`. If a class must be chosen from data, list every candidate as a full string somewhere in the repo. This catalog does that on purpose.",
    },
  ),
  topic(
    "functions-and-directives",
    "Functions and directives",
    "Core concepts",
    "The CSS entry is a small language: @import, @theme, @utility, @custom-variant, @apply, and the theme() lookup.",
    "directives",
    "concept",
    "",
  ),
  topic(
    "preflight",
    "Preflight",
    "Base styles",
    "Preflight is the opinionated reset loaded with Tailwind. Margins collapse to zero, headings lose their browser size, images become block, and buttons inherit font.",
    "base",
    "concept",
    "",
    {
      detail:
        "v4 also sets border-color to currentColor and button cursor to default. This repo restores a pointer cursor on buttons in the base layer. Do not restyle elements in product code to fight Preflight — set the type and spacing yourself.",
    },
  ),

  topic("aspect-ratio", "aspect-ratio", "Layout", "Locks a box to a ratio so media and embeds do not jump when they load.", "aspect-ratio", "self", `
aspect-auto | aspect-ratio: auto
aspect-square | aspect-ratio: 1 / 1
aspect-video | aspect-ratio: 16 / 9
aspect-3/2 | aspect-ratio: 3 / 2
aspect-4/3 | aspect-ratio: 4 / 3
`),
  topic("columns", "columns", "Layout", "Splits inline content into newspaper columns. The element’s children flow down, then across.", "columns", "columns", `
columns-1 | columns: 1
columns-2 | columns: 2
columns-3 | columns: 3
columns-4 | columns: 4
columns-auto | columns: auto
`),
  topic("break-after", "break-after", "Layout", "Forces or avoids a break after the box. Matters in multi-column and print layouts.", "break-after", "columns", `
break-after-auto | break-after: auto
break-after-avoid | break-after: avoid
break-after-all | break-after: all
break-after-avoid-page | break-after: avoid-page
break-after-page | break-after: page
break-after-column | break-after: column
break-after-avoid-column | break-after: avoid-column
`),
  topic("break-before", "break-before", "Layout", "Same control, applied before the box.", "break-before", "columns", `
break-before-auto | break-before: auto
break-before-avoid | break-before: avoid
break-before-all | break-before: all
break-before-page | break-before: page
break-before-column | break-before: column
break-before-avoid-column | break-before: avoid-column
`),
  topic("break-inside", "break-inside", "Layout", "Keeps a card or figure from splitting across columns or pages.", "break-inside", "columns", `
break-inside-auto | break-inside: auto
break-inside-avoid | break-inside: avoid
break-inside-avoid-page | break-inside: avoid-page
break-inside-avoid-column | break-inside: avoid-column
`),
  topic("box-decoration-break", "box-decoration-break", "Layout", "Controls whether background, border, and padding are sliced or cloned when an inline box fragments.", "box-decoration-break", "text", `
box-decoration-slice | box-decoration-break: slice
box-decoration-clone | box-decoration-break: clone
`),
  topic("box-sizing", "box-sizing", "Layout", "Preflight already sets border-box. Switch a single element back only when a third-party widget assumes content-box.", "box-sizing", "self", `
box-border | box-sizing: border-box
box-content | box-sizing: content-box
`),
  topic("display", "display", "Layout", "How the box participates in flow. This is the first decision on almost every component.", "display", "parent", `
block | display: block
inline-block | display: inline-block
inline | display: inline
flex | display: flex
inline-flex | display: inline-flex
grid | display: grid
inline-grid | display: inline-grid
flow-root | display: flow-root
contents | display: contents
list-item | display: list-item
hidden | display: none
table | display: table
table-row | display: table-row
table-cell | display: table-cell
`, { detail: "hidden removes the box from layout and from the accessibility tree’s visual presentation. It does not remove it from the DOM. For screen readers, pair with the right semantics — do not use hidden as a substitute for disabled." }),
  topic("float", "float", "Layout", "Pulls a box to one side so inline content wraps it. Rare in application UI; still the right tool for text wrapping an image.", "float", "text", `
float-start | float: inline-start
float-end | float: inline-end
float-left | float: left
float-right | float: right
float-none | float: none
`),
  topic("clear", "clear", "Layout", "Stops a box from sitting beside a float.", "clear", "text", `
clear-start | clear: inline-start
clear-end | clear: inline-end
clear-left | clear: left
clear-right | clear: right
clear-both | clear: both
clear-none | clear: none
`),
  topic("isolation", "isolation", "Layout", "Creates a new stacking context so z-index inside a widget cannot escape and cover the page chrome.", "isolation", "self", `
isolate | isolation: isolate
isolation-auto | isolation: auto
`),
  topic("object-fit", "object-fit", "Layout", "How a replaced element (image, video) fills its box when the ratios differ.", "object-fit", "object", `
object-contain | object-fit: contain
object-cover | object-fit: cover
object-fill | object-fit: fill
object-none | object-fit: none
object-scale-down | object-fit: scale-down
`),
  topic("object-position", "object-position", "Layout", "Which part of the replaced element stays visible when it is cropped.", "object-position", "object", `
object-bottom | object-position: bottom
object-center | object-position: center
object-left | object-position: left
object-left-bottom | object-position: left bottom
object-left-top | object-position: left top
object-right | object-position: right
object-right-bottom | object-position: right bottom
object-right-top | object-position: right top
object-top | object-position: top
`),
  topic("overflow", "overflow", "Layout", "What happens when content is larger than the box. Pair overflow-hidden with rounded corners or the corners will leak.", "overflow", "overflow", `
overflow-auto | overflow: auto
overflow-hidden | overflow: hidden
overflow-clip | overflow: clip
overflow-visible | overflow: visible
overflow-scroll | overflow: scroll
overflow-x-auto | overflow-x: auto
overflow-y-auto | overflow-y: auto
overflow-x-hidden | overflow-x: hidden
overflow-y-hidden | overflow-y: hidden
`),
  topic("overscroll-behavior", "overscroll-behavior", "Layout", "Stops a scrollable region from chaining scroll to the page behind it. Use this on dialogs and side panels.", "overscroll-behavior", "scroll", `
overscroll-auto | overscroll-behavior: auto
overscroll-contain | overscroll-behavior: contain
overscroll-none | overscroll-behavior: none
overscroll-y-contain | overscroll-behavior-y: contain
overscroll-x-contain | overscroll-behavior-x: contain
`),
  topic("position", "position", "Layout", "relative is the local anchor. absolute is positioned against it. fixed and sticky are against the viewport.", "position", "position", `
static | position: static
relative | position: relative
absolute | position: absolute
fixed | position: fixed
sticky | position: sticky
`),
  topic(
    "top-right-bottom-left",
    "top / right / bottom / left",
    "Layout",
    "Offsets for a positioned box. Logical insets (inset-x, start, end) follow writing direction.",
    "inset",
    "position",
    `
inset-0 | inset: 0
inset-x-0 | left: 0; right: 0
inset-y-0 | top: 0; bottom: 0
top-0 | top: 0
right-0 | right: 0
bottom-0 | bottom: 0
left-0 | left: 0
top-4 | top: 1rem
start-0 | inset-inline-start: 0
end-0 | inset-inline-end: 0
`,
    { docsPath: "/docs/top-right-bottom-left", rule: "Numbers use the spacing scale. Negative offsets use the -top-4 form." },
  ),
  topic("visibility", "visibility", "Layout", "invisible keeps the box’s space and hides its paint. collapse is for table rows. hidden (display) removes the space entirely.", "visibility", "self", `
visible | visibility: visible
invisible | visibility: hidden
collapse | visibility: collapse
`),
  topic("z-index", "z-index", "Layout", "Stacking order inside a stacking context. Do not invent z-[9999]. The scale is 0, 10, 20, 30, 40, 50.", "z-index", "position", `
z-0 | z-index: 0
z-10 | z-index: 10
z-20 | z-index: 20
z-30 | z-index: 30
z-40 | z-index: 40
z-50 | z-index: 50
z-auto | z-index: auto
`),
];
