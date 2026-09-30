import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Menu, Moon, Search, Sun, X } from "lucide-react";
import { GROUPS, getTopic, topics, topicsInGroup } from "@/dls/catalog";
import { Stage } from "@/dls/stage";
import { cn } from "@/lib/cn";

const COMPONENT_COUNT = 7;

export function DlsApp({
  topic,
  onTopic,
}: {
  topic?: string;
  onTopic: (slug?: string) => void;
}) {
  const current = getTopic(topic);
  const [query, setQuery] = useState("");
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [navOpen, setNavOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("");
  const [copied, setCopied] = useState(false);
  const pick = useRef<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("dls-theme");
    const next = stored === "dark";
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
  }, []);

  useEffect(() => {
    const item = getTopic(topic);
    setActive(pick.current ?? item?.classes[0]?.name ?? "");
    pick.current = null;
    setCopied(false);
    window.scrollTo(0, 0);
  }, [topic]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", navOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [navOpen]);

  const q = query.trim().toLowerCase();
  const matches = useMemo(() => {
    if (!q) return [];
    return topics.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.classes.some((spec) => spec.name.toLowerCase().includes(q))
      );
    });
  }, [q]);

  const activeGroup = current?.group ?? "Library";
  const classCount = topics.reduce((sum, item) => sum + item.classes.length, 0);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("dls-theme", next ? "dark" : "light");
  }

  function openTopic(slug?: string) {
    if (slug && q) {
      const item = getTopic(slug);
      const hit = item?.classes.find((spec) => spec.name.toLowerCase().includes(q));
      pick.current = hit?.name ?? null;
    }
    onTopic(slug);
    setNavOpen(false);
  }

  function groupOpen(name: string) {
    if (name === activeGroup) return true;
    if (name in openGroups) return openGroups[name];
    return name === "Library";
  }

  async function copyActive() {
    if (!active) return;
    try {
      await navigator.clipboard.writeText(active);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-line bg-paper px-3 sm:px-4">
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md lg:hidden"
          aria-label={navOpen ? "Close sections" : "Open sections"}
          onClick={() => setNavOpen((value) => !value)}
        >
          {navOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        <button type="button" onClick={() => openTopic(undefined)} className="min-w-0 text-left">
          <span className="block font-serif text-lg leading-none tracking-tight">Tangible DLS</span>
        </button>
        <div className="ml-auto flex items-center gap-1">
          <a
            href="https://github.com/tangiblethinking/DLS"
            className="hidden h-11 items-center gap-1 px-2 text-sm text-mute sm:inline-flex"
          >
            GitHub
            <ArrowUpRight className="size-4" />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex size-11 items-center justify-center rounded-md"
            aria-label={dark ? "Use light theme" : "Use dark theme"}
          >
            {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
        </div>
      </header>

      <div className="lg:grid lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside
          className={cn(
            "border-line bg-paper-2 lg:sticky lg:top-14 lg:block lg:h-[calc(100vh-3.5rem)] lg:overflow-y-auto lg:border-r",
            navOpen ? "fixed inset-x-0 top-14 bottom-0 z-30 overflow-y-auto" : "hidden",
          )}
        >
          <div className="p-3">
            <label className="relative block">
              <span className="sr-only">Search utilities</span>
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-mute" />
              <input
                ref={searchRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search, or press /"
                suppressHydrationWarning
                className="h-11 w-full rounded-md border border-line bg-paper pr-3 pl-9 text-sm outline-none focus-visible:border-ink"
              />
            </label>
          </div>
          <nav aria-label="Library sections" className="px-2 pb-8">
            {q ? (
              <ul className="grid">
                {matches.length === 0 ? (
                  <li className="px-2 py-3 text-sm text-mute">Nothing matches “{query.trim()}”.</li>
                ) : (
                  matches.map((item) => (
                    <li key={item.slug}>
                      <NavButton
                        active={item.slug === topic}
                        nested={item.nested}
                        label={item.title}
                        meta={item.group}
                        onClick={() => openTopic(item.slug)}
                      />
                    </li>
                  ))
                )}
              </ul>
            ) : (
              GROUPS.map((group) => {
                const items = topicsInGroup(group.name);
                const shown = groupOpen(group.name);
                return (
                  <div key={group.name} className="mb-1">
                    <button
                      type="button"
                      className="flex h-10 w-full items-center justify-between px-2 text-left text-xs font-medium tracking-widest text-mute uppercase"
                      aria-expanded={shown}
                      onClick={() =>
                        setOpenGroups((state) => ({
                          ...state,
                          [group.name]: !groupOpen(group.name),
                        }))
                      }
                    >
                      {group.name}
                      <span className="font-mono text-xs tracking-normal">{items.length}</span>
                    </button>
                    {shown ? (
                      <ul className="grid">
                        {items.map((item) => (
                          <li key={item.slug}>
                            <NavButton
                              active={item.slug === topic}
                              nested={item.nested}
                              label={item.title}
                              onClick={() => openTopic(item.slug)}
                            />
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })
            )}
          </nav>
        </aside>

        <main id="content" className="min-w-0 px-4 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-3xl">
            {current ? (
              <article>
                <p className="text-xs font-medium tracking-widest text-mute uppercase">{current.group}</p>
                <h1 className="mt-2 font-serif text-4xl tracking-tight text-balance">{current.title}</h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed">{current.summary}</p>
                {current.detail ? (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">{current.detail}</p>
                ) : null}
                {current.rule ? (
                  <p className="mt-4 max-w-2xl border-l-2 border-accent pl-3 text-sm leading-relaxed">
                    {current.rule}
                  </p>
                ) : null}
                {current.docsPath ? (
                  <a
                    href={`https://tailwindcss.com${current.docsPath}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-accent"
                  >
                    Official reference
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : null}
                <div className="mt-8">
                  <Stage topic={current} active={active} />
                </div>
                {current.classes.length > 0 ? (
                  <>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <p className="mr-auto font-mono text-xs text-mute">{active || current.property}</p>
                      <button
                        type="button"
                        onClick={() => void copyActive()}
                        className="inline-flex h-9 items-center gap-1 rounded-md border border-line px-3 text-xs"
                      >
                        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                        {copied ? "Copied" : "Copy class"}
                      </button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {current.classes.map((spec) => (
                        <button
                          key={spec.name}
                          type="button"
                          aria-pressed={spec.name === active}
                          onClick={() => {
                            setActive(spec.name);
                            setCopied(false);
                          }}
                          className={cn(
                            "rounded-md border px-2.5 py-1.5 font-mono text-xs",
                            spec.name === active
                              ? "border-ink bg-ink text-paper"
                              : "border-line bg-paper text-ink",
                          )}
                        >
                          {spec.name}
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-line text-xs tracking-widest text-mute uppercase">
                            <th className="py-2 pr-4 font-medium">Class</th>
                            <th className="py-2 font-medium">CSS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {current.classes.map((spec) => (
                            <tr
                              key={spec.name}
                              className={cn("border-b border-line", spec.name === active && "bg-paper-2")}
                            >
                              <td className="py-2 pr-4 font-mono text-xs">{spec.name}</td>
                              <td className="py-2 font-mono text-xs text-mute">{spec.css}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : null}
              </article>
            ) : (
              <Home
                classCount={classCount}
                onOpen={openTopic}
              />
            )}
            <footer className="mt-16 border-t border-line pt-4 text-xs leading-relaxed text-mute">
              Not affiliated with Tailwind Labs. Class names follow their public API. Explanations
              and components in this library are original.
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

function NavButton({
  active,
  nested,
  label,
  meta,
  onClick,
}: {
  active: boolean;
  nested?: boolean;
  label: string;
  meta?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex min-h-10 w-full items-center justify-between gap-3 rounded-md px-2 text-left text-sm",
        nested && "pl-5",
        active ? "bg-ink text-paper" : "text-ink hover:bg-line",
      )}
    >
      <span className="truncate">{label}</span>
      {meta ? <span className={cn("shrink-0 text-xs", active ? "text-paper" : "text-mute")}>{meta}</span> : null}
    </button>
  );
}

function Home({
  classCount,
  onOpen,
}: {
  classCount: number;
  onOpen: (slug?: string) => void;
}) {
  return (
    <div>
      <p className="text-xs font-medium tracking-widest text-mute uppercase">Tangible Thinking</p>
      <h1 className="mt-3 max-w-xl font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
        Design language system
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed">
        A React component library indexed to the full Tailwind CSS map: every current docs group,
        from installation through accessibility, with live specimens.
      </p>
      <dl className="mt-8 grid grid-cols-3 gap-3 border-y border-line py-4">
        <Stat value={String(topics.length)} label="Topics" />
        <Stat value={String(GROUPS.length)} label="Groups" />
        <Stat value={String(classCount)} label="Classes shown" />
      </dl>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Principle title="Tokens, then utilities" body="Product color and type live in @theme. Utilities read the variables." />
        <Principle title="Components are the API" body={`${COMPONENT_COUNT} React pieces sit on top of the utility map. Copy those, not class soup.`} />
        <Principle title="Scales, not dumps" body="Each page shows the naming rule and the steps you actually reach for." />
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onOpen("components")}
          className="inline-flex h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-ink"
        >
          Open components
        </button>
        <button
          type="button"
          onClick={() => onOpen("colors")}
          className="inline-flex h-11 items-center rounded-md border border-line px-4 text-sm"
        >
          Browse the palette
        </button>
      </div>
      <h2 className="mt-12 font-serif text-2xl">Index</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {GROUPS.map((group) => (
          <li key={group.name}>
            <button
              type="button"
              onClick={() => onOpen(topicsInGroup(group.name)[0]?.slug)}
              className="flex h-full w-full flex-col rounded-lg border border-line bg-paper px-4 py-3 text-left hover:border-ink"
            >
              <span className="text-sm font-medium">{group.name}</span>
              <span className="mt-1 text-xs leading-relaxed text-mute">{group.blurb}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-xs tracking-widest text-mute uppercase">{label}</dt>
      <dd className="mt-1 font-serif text-3xl tabular-nums">{value}</dd>
    </div>
  );
}

function Principle({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-line p-4">
      <h2 className="text-sm font-medium">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-mute">{body}</p>
    </div>
  );
}
