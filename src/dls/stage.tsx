import { useState, type ReactNode } from "react";
import { HUES, PALETTE_SAFELIST, STEPS } from "@/dls/palette-data";
import type { Topic } from "@/dls/types";
import { Concept } from "@/dls/concepts";
import { ComponentGallery } from "@/dls/gallery";
import { cn } from "@/lib/cn";

const MARK =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 320 200"><rect width="320" height="200" fill="#9c3b1e"/><circle cx="110" cy="90" r="48" fill="#f3efe6"/><rect x="170" y="58" width="100" height="84" fill="#1c1916"/></svg>`,
  );

function Frame({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border border-line bg-paper-2 p-4", className)}>{children}</div>;
}

function Cell({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex min-h-12 min-w-12 items-center justify-center rounded-md bg-ink px-3 text-sm font-medium text-paper",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Art({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-36 overflow-hidden rounded-lg", className)}>
      <div className="absolute inset-0 bg-orange-500" />
      <div className="absolute top-6 -left-2 h-24 w-24 rounded-full bg-amber-200" />
      <div className="absolute right-6 bottom-4 h-16 w-28 rounded-md bg-stone-800" />
    </div>
  );
}

function Palette() {
  return (
    <Frame>
      <p className="sr-only">{PALETTE_SAFELIST}</p>
      <div className="grid gap-3">
        {HUES.map((hue) => (
          <div key={hue} className="grid grid-cols-[4.5rem_1fr] items-center gap-2">
            <span className="text-xs text-mute">{hue}</span>
            <div className="grid grid-cols-11 overflow-hidden rounded-md">
              {STEPS.map((step) => (
                <div
                  key={step}
                  title={`${hue}-${step}`}
                  className={cn("h-8", `bg-${hue}-${step}`)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Tokens() {
  const colors = [
    ["ink", "bg-ink text-paper"],
    ["paper", "bg-paper text-ink"],
    ["paper-2", "bg-paper-2 text-ink"],
    ["line", "bg-line text-ink"],
    ["mute", "bg-mute text-paper"],
    ["accent", "bg-accent text-accent-ink"],
  ];
  return (
    <Frame>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {colors.map(([name, cls]) => (
          <div key={name} className={cn("flex h-20 flex-col justify-end rounded-md border border-line p-2", cls)}>
            <span className="font-mono text-xs">{name}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-2">
        <p className="font-serif text-4xl">Fraunces for titles</p>
        <p className="text-base">Outfit for interface text, labels, and tables.</p>
        <p className="font-mono text-sm">Mono stays the system stack, for class names.</p>
      </div>
    </Frame>
  );
}

export function Stage({ topic, active }: { topic: Topic; active: string }) {
  const cls = active;
  switch (topic.preview) {
    case "concept":
      return <Concept slug={topic.slug} />;
    case "components":
      return <ComponentGallery />;
    case "tokens":
      return <Tokens />;
    case "swatch":
      return <Palette />;
    case "text":
      return (
        <Frame>
          <p className={cn("max-w-prose text-base leading-relaxed", cls)}>
            The quick brown fox jumps over the lazy dog. Measure, weight, and color are the whole
            decision — decoration is not a substitute for hierarchy.
          </p>
        </Frame>
      );
    case "parent":
      return (
        <Frame>
          <div className={cn("flex gap-3 rounded-md bg-paper p-3", cls)}>
            <Cell>1</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
          </div>
        </Frame>
      );
    case "stack":
      return (
        <Frame>
          <div className={cn("flex flex-col rounded-md border border-transparent bg-paper", cls)}>
            <div className="px-3 py-2 text-sm">First</div>
            <div className="px-3 py-2 text-sm">Second</div>
            <div className="px-3 py-2 text-sm">Third</div>
          </div>
        </Frame>
      );
    case "child":
      return (
        <Frame>
          <div className="flex w-full gap-3">
            <Cell>1</Cell>
            <Cell className={cls}>2</Cell>
            <Cell>3</Cell>
          </div>
        </Frame>
      );
    case "grid":
      return (
        <Frame>
          <div className={cn("grid gap-2", cls)}>
            {["1", "2", "3", "4", "5", "6"].map((n) => (
              <Cell key={n}>{n}</Cell>
            ))}
          </div>
        </Frame>
      );
    case "span":
      return (
        <Frame>
          <div className="grid grid-cols-4 gap-2">
            <Cell className={cls}>A</Cell>
            <Cell>B</Cell>
            <Cell>C</Cell>
            <Cell>D</Cell>
          </div>
        </Frame>
      );
    case "position":
      return <PositionStage active={cls} />;
    case "overflow":
      return (
        <Frame>
          <div className={cn("h-24 rounded-md bg-paper p-3 text-sm leading-relaxed", cls)}>
            Overflow is a product decision. Menus, logs, and tables need a cap. Pages usually should
            not. This copy is intentionally longer than the box so the utility has something to do.
            Keep going until the edge is obvious.
          </div>
        </Frame>
      );
    case "columns":
      return (
        <Frame>
          <p className={cn("text-sm leading-relaxed", cls)}>
            Columns are for reading, not for dashboards. A measure that is too wide is as hard to
            track as one that is too narrow. Break utilities keep a heading with the paragraph that
            follows it, instead of stranding it at the bottom of a column. Use them when the text is
            the layout, and reach for grid when the regions are the layout.
          </p>
        </Frame>
      );
    case "object":
      return (
        <Frame>
          <img
            alt="Oxide square, paper circle, ink block"
            src={MARK}
            className={cn("h-36 w-full rounded-md bg-paper", cls)}
          />
        </Frame>
      );
    case "sizing":
      return (
        <Frame>
          <div className="w-full rounded-md bg-paper p-3">
            <div className={cn("h-10 rounded-md bg-ink", cls)} />
          </div>
        </Frame>
      );
    case "pad":
      return (
        <Frame>
          <div className={cn("inline-block rounded-md bg-line", cls)}>
            <div className="rounded-sm bg-ink px-2 py-1 text-xs text-paper">content</div>
          </div>
        </Frame>
      );
    case "margin":
      return (
        <Frame>
          <div className="rounded-md bg-paper p-2">
            <div className={cn("inline-block rounded-md bg-ink px-3 py-2 text-sm text-paper", cls)}>
              box
            </div>
          </div>
        </Frame>
      );
    case "list":
      return (
        <Frame>
          <ul className={cn("max-w-sm text-sm", cls)}>
            <li>Token</li>
            <li>Utility</li>
            <li>Component</li>
          </ul>
        </Frame>
      );
    case "background":
      return (
        <Frame>
          <div
            className={cn(
              "h-36 rounded-lg bg-linear-to-br from-orange-500 via-amber-200 to-stone-800",
              cls,
            )}
          />
        </Frame>
      );
    case "filter":
      return (
        <Frame>
          <Art className={cls} />
        </Frame>
      );
    case "backdrop":
      return (
        <Frame>
          <div className="relative h-40 overflow-hidden rounded-lg">
            <Art className="absolute inset-0 h-full" />
            <div
              className={cn(
                "absolute inset-x-4 bottom-4 rounded-md bg-paper/70 px-3 py-3 text-sm text-ink",
                cls,
              )}
            >
              Frosted panel
            </div>
          </div>
        </Frame>
      );
    case "shadow":
      return (
        <Frame>
          <div className={cn("mx-auto h-24 w-40 rounded-lg bg-paper", cls)} />
        </Frame>
      );
    case "blend":
      return (
        <Frame>
          <div className="relative h-36">
            <div className="absolute top-4 left-8 h-24 w-24 rounded-full bg-orange-500" />
            <div className={cn("absolute top-8 left-20 h-24 w-24 rounded-full bg-stone-800", cls)} />
          </div>
        </Frame>
      );
    case "mask":
      return (
        <Frame>
          <div className={cn("h-36 rounded-lg bg-linear-to-r from-orange-500 to-stone-800", cls)} />
        </Frame>
      );
    case "table":
      return (
        <Frame>
          <table className={cn("w-full border border-line text-left text-sm", cls)}>
            <caption className="mb-2 caption-top text-left text-xs tracking-widest text-mute uppercase">
              Release
            </caption>
            <thead>
              <tr>
                <th className="border border-line px-2 py-1 font-medium">Surface</th>
                <th className="border border-line px-2 py-1 font-medium">Adoption</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-line px-2 py-1">Checkout</td>
                <td className="border border-line px-2 py-1 tabular-nums">82%</td>
              </tr>
              <tr>
                <td className="border border-line px-2 py-1">Onboarding</td>
                <td className="border border-line px-2 py-1 tabular-nums">67%</td>
              </tr>
            </tbody>
          </table>
        </Frame>
      );
    case "transition":
      return <TransitionStage active={cls} />;
    case "animation":
      return (
        <Frame>
          <div className="flex items-center gap-6">
            <div className={cn("size-12 rounded-md bg-accent", cls)} />
            <p className="text-xs text-mute">Reduced motion turns this into a still.</p>
          </div>
        </Frame>
      );
    case "transform":
      return (
        <Frame>
          <div className="flex h-40 items-center justify-center">
            <div className={cn("size-16 rounded-md bg-ink text-paper", cls)} />
          </div>
        </Frame>
      );
    case "svg":
      return (
        <Frame>
          <svg viewBox="0 0 48 48" className={cn("size-16 fill-none stroke-ink text-ink", cls)} aria-hidden="true">
            <circle cx="16" cy="24" r="8" />
            <rect x="26" y="16" width="14" height="16" />
          </svg>
        </Frame>
      );
    case "field":
      return (
        <Frame>
          <label className="grid gap-1 text-sm">
            Specimen
            <textarea
              defaultValue="Edit me"
              className={cn(
                "min-h-16 w-full max-w-sm rounded-md border border-line bg-paper px-3 py-2 text-ink",
                cls,
              )}
            />
          </label>
          <label className="mt-3 flex items-center gap-2 text-sm">
            <input type="checkbox" className={cls} defaultChecked />
            Checkbox inherits accent color
          </label>
        </Frame>
      );
    case "scroll":
      return (
        <Frame>
          <div className={cn("h-28 overflow-y-auto rounded-md bg-paper p-3 text-sm leading-relaxed", cls)}>
            {Array.from({ length: 8 }, (_, i) => (
              <p key={i} className="py-1">
                Row {i + 1}. Scroll the specimen, not the page.
              </p>
            ))}
          </div>
        </Frame>
      );
    case "cursor":
      return (
        <Frame>
          <div
            className={cn(
              "flex h-28 items-center justify-center rounded-md border border-dashed border-line bg-paper text-sm text-mute",
              cls,
            )}
          >
            Hover this surface
          </div>
        </Frame>
      );
    case "self":
      return (
        <Frame>
          <div className={cn("inline-flex min-h-16 min-w-16 items-center justify-center rounded-md border border-line bg-paper px-4 text-sm", cls)}>
            specimen
          </div>
        </Frame>
      );
    default:
      return null;
  }
}

function PositionStage({ active }: { active: string }) {
  const simulated = active === "fixed" || active === "sticky";
  const offset = /^(inset|top-|right-|bottom-|left-|start-|end-|z-)/.test(active);
  return (
    <Frame>
      <div className="relative h-44 overflow-hidden rounded-md border border-line bg-paper">
        <span className="absolute top-2 left-2 text-xs text-mute">frame</span>
        <div
          className={cn(
            "flex size-16 items-center justify-center rounded-md bg-ink text-xs text-paper",
            offset || simulated ? "absolute" : "",
            simulated ? "top-8 left-8" : "",
            !simulated && active,
          )}
        >
          {simulated ? "sim" : "box"}
        </div>
      </div>
      {simulated ? (
        <p className="mt-2 text-xs text-mute">
          {active} is simulated inside the frame so it does not pin itself to the window.
        </p>
      ) : null}
    </Frame>
  );
}

function TransitionStage({ active }: { active: string }) {
  const [on, setOn] = useState(false);
  return (
    <Frame>
      <button
        type="button"
        onClick={() => setOn((value) => !value)}
        className={cn(
          "h-16 w-28 rounded-md bg-paper text-sm text-ink",
          active,
          on && "translate-x-6 scale-105 bg-accent text-accent-ink",
        )}
      >
        {on ? "On" : "Off"}
      </button>
      <p className="mt-3 text-xs text-mute">Toggle to see duration, delay, and easing.</p>
    </Frame>
  );
}
