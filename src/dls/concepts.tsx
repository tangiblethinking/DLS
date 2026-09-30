import { useState, type ReactNode } from "react";
import { Button } from "@/dls/ui";

function Code({ children }: { children: string }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-md bg-ink p-4 font-mono text-xs leading-relaxed text-paper">
      {children}
    </pre>
  );
}

function Frame({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-line bg-paper-2 p-4">{children}</div>;
}

export function Concept({ slug }: { slug: string }) {
  switch (slug) {
    case "installation":
      return (
        <Frame>
          <ol className="grid gap-3 text-sm leading-relaxed">
            <li>1. Add the Vite plugin and import Tailwind once in CSS.</li>
            <li>2. Declare product tokens with @theme. Do not keep a parallel palette in JavaScript.</li>
            <li>3. Compose utilities in React. Promote a pattern to a component after the second use.</li>
          </ol>
          <Code>{`import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

/* src/styles.css */
@import "tailwindcss";
@theme { --color-ink: #1c1916; }`}</Code>
        </Frame>
      );
    case "editor-setup":
      return (
        <Frame>
          <p className="text-sm leading-relaxed">
            Install Tailwind CSS IntelliSense. It should resolve bg-paper and text-accent from this
            stylesheet, flag hover:flex on a non-flex element, and show the generated CSS on hover.
          </p>
        </Frame>
      );
    case "compatibility":
      return (
        <Frame>
          <ul className="grid gap-2 text-sm">
            <li className="flex justify-between gap-4 border-b border-line py-2">
              <span>Safari</span>
              <span className="font-mono text-xs">16.4+</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-line py-2">
              <span>Chrome</span>
              <span className="font-mono text-xs">111+</span>
            </li>
            <li className="flex justify-between gap-4 py-2">
              <span>Firefox</span>
              <span className="font-mono text-xs">128+</span>
            </li>
          </ul>
        </Frame>
      );
    case "upgrade-guide":
      return (
        <Frame>
          <ul className="grid list-disc gap-2 pl-5 text-sm leading-relaxed">
            <li>@tailwind base/components/utilities becomes @import "tailwindcss".</li>
            <li>theme.extend moves into @theme as CSS variables.</li>
            <li>shadow and ring were rebuilt. A ring is a shadow in v4.</li>
            <li>Bare border uses currentColor. Set border-line if you want the hairline.</li>
          </ul>
        </Frame>
      );
    case "styling-with-utility-classes":
      return (
        <Frame>
          <div className="flex items-baseline justify-between gap-4 rounded-md bg-paper px-4 py-3">
            <div>
              <p className="text-xs tracking-widest text-mute uppercase">Renewal</p>
              <p className="font-serif text-2xl">96.4%</p>
            </div>
            <p className="text-sm text-accent">+2.1 pts</p>
          </div>
          <Code>{`<div className="flex items-baseline justify-between">
  <p className="font-serif text-2xl">96.4%</p>
  <p className="text-sm text-accent">+2.1 pts</p>
</div>`}</Code>
        </Frame>
      );
    case "hover-focus-and-other-states":
      return <StateDemo />;
    case "responsive-design":
      return <BreakpointDemo />;
    case "dark-mode":
      return <DarkDemo />;
    case "theme":
      return (
        <Frame>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <Swatch name="ink" className="bg-ink text-paper" />
            <Swatch name="paper" className="bg-paper text-ink" />
            <Swatch name="paper-2" className="bg-paper-2 text-ink" />
            <Swatch name="line" className="bg-line text-ink" />
            <Swatch name="mute" className="bg-mute text-paper" />
            <Swatch name="accent" className="bg-accent text-accent-ink" />
          </div>
          <Code>{`@theme {
  --color-ink: #1c1916;
  --color-paper: #f3efe6;
  --color-accent: #9c3b1e;
  --font-sans: "Outfit", sans-serif;
  --font-serif: "Fraunces", serif;
}`}</Code>
        </Frame>
      );
    case "adding-custom-styles":
      return (
        <Frame>
          <p className="text-sm leading-relaxed">
            A new tone is a token. A new pattern used twice is a component in src/dls/ui.tsx. A
            one-off layout stays as utilities on the element.
          </p>
          <Code>{`@utility measure {
  max-width: 65ch;
}`}</Code>
        </Frame>
      );
    case "detecting-classes-in-source-files":
      return (
        <Frame>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-md border border-accent bg-paper p-3">
              <p className="text-xs tracking-widest text-accent uppercase">Works</p>
              <p className="mt-2 font-mono text-xs">className="bg-paper"</p>
            </div>
            <div className="rounded-md border border-line bg-paper p-3">
              <p className="text-xs tracking-widest text-mute uppercase">Dropped at build</p>
              <p className="mt-2 font-mono text-xs">{'`bg-${name}`'}</p>
            </div>
          </div>
        </Frame>
      );
    case "functions-and-directives":
      return (
        <Frame>
          <ul className="grid gap-2 font-mono text-xs leading-relaxed">
            <li>@import "tailwindcss"</li>
            <li>@theme — tokens</li>
            <li>@utility — a named class you own</li>
            <li>@custom-variant — a new prefix, like a theme or a state</li>
            <li>@apply — last resort inside a component class</li>
          </ul>
        </Frame>
      );
    case "preflight":
      return (
        <Frame>
          <div className="grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <p className="text-xs tracking-widest text-mute uppercase">After Preflight</p>
              <p className="mt-2 text-base font-normal">Heading is just text until you size it.</p>
              <ul className="mt-2">
                <li>No marker</li>
                <li>No left padding</li>
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-widest text-mute uppercase">Put the styles back</p>
              <p className="mt-2 font-serif text-2xl">A real heading</p>
              <ul className="mt-2 list-disc pl-5">
                <li>Marker restored</li>
                <li>Padding restored</li>
              </ul>
            </div>
          </div>
        </Frame>
      );
    default:
      return null;
  }
}

function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className={`flex h-16 items-end rounded-md border border-line p-2 text-xs ${className}`}>
      {name}
    </div>
  );
}

function StateDemo() {
  return (
    <Frame>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="h-11 rounded-md bg-paper px-4 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Hover
        </button>
        <button
          type="button"
          className="h-11 rounded-md border border-line bg-paper px-4 text-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Focus me
        </button>
        <Button disabled>Disabled</Button>
      </div>
      <p className="mt-3 text-xs text-mute">Tab to the middle control. The ring uses focus-visible.</p>
    </Frame>
  );
}

function BreakpointDemo() {
  const [width, setWidth] = useState(320);
  const name =
    width >= 1024 ? "lg" : width >= 768 ? "md" : width >= 640 ? "sm" : "base";
  return (
    <Frame>
      <div className="flex items-center justify-between gap-3 text-xs text-mute">
        <span>
          Container {width}px · {name}
        </span>
        <span>Drag. This uses container queries, not the window.</span>
      </div>
      <input
        className="mt-3 w-full accent-accent"
        type="range"
        min={280}
        max={960}
        value={width}
        onChange={(event) => setWidth(Number(event.target.value))}
        aria-label="Specimen width"
      />
      <div className="@container mt-4 overflow-hidden rounded-md border border-line bg-paper" style={{ width }}>
        <div className="flex flex-col gap-3 p-3 @md:flex-row @md:items-center">
          <div className="h-16 flex-1 rounded-md bg-accent" />
          <div className="grid flex-1 gap-1">
            <p className="text-sm font-medium">Stacks until the container hits md</p>
            <p className="text-xs text-mute">@md:flex-row — the component owns the breakpoint.</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function DarkDemo() {
  const [dark, setDark] = useState(false);
  return (
    <Frame>
      <button
        type="button"
        className="h-9 rounded-md border border-line bg-paper px-3 text-sm"
        onClick={() => setDark((value) => !value)}
      >
        {dark ? "Show light frame" : "Show dark frame"}
      </button>
      <div className={`mt-4 rounded-lg border border-line p-4 ${dark ? "dls-force-dark" : "dls-force-light"}`}>
        <div className="rounded-md bg-paper p-4 text-ink">
          <p className="font-serif text-xl">Token surface</p>
          <p className="mt-1 text-sm text-mute">Same classes. The variables changed, not the markup.</p>
          <p className="mt-3 inline-flex h-9 items-center rounded-md bg-accent px-3 text-sm text-accent-ink">
            Accent
          </p>
        </div>
      </div>
    </Frame>
  );
}
