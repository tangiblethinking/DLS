export type PreviewId =
  | "concept"
  | "components"
  | "tokens"
  | "swatch"
  | "self"
  | "text"
  | "parent"
  | "child"
  | "grid"
  | "span"
  | "position"
  | "overflow"
  | "columns"
  | "object"
  | "sizing"
  | "pad"
  | "margin"
  | "list"
  | "background"
  | "filter"
  | "backdrop"
  | "shadow"
  | "blend"
  | "table"
  | "transition"
  | "animation"
  | "transform"
  | "svg"
  | "field"
  | "scroll"
  | "cursor"
  | "mask"
  | "stack";

export type ClassSpec = {
  name: string;
  css: string;
};

export type Topic = {
  slug: string;
  title: string;
  group: string;
  summary: string;
  detail?: string;
  rule?: string;
  property: string;
  preview: PreviewId;
  classes: ClassSpec[];
  docsPath?: string;
  nested?: boolean;
};

export function topic(
  slug: string,
  title: string,
  group: string,
  summary: string,
  property: string,
  preview: PreviewId,
  rows: string,
  extra?: Partial<Pick<Topic, "detail" | "rule" | "docsPath" | "nested">>,
): Topic {
  const classes = rows
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const cut = line.indexOf("|");
      const name = (cut === -1 ? line : line.slice(0, cut)).trim();
      const css = (cut === -1 ? "" : line.slice(cut + 1)).trim();
      return { name, css };
    });
  const docsPath = extra && "docsPath" in extra ? extra.docsPath : `/docs/${slug}`;
  return {
    slug,
    title,
    group,
    summary,
    property,
    preview,
    classes,
    docsPath,
    detail: extra?.detail,
    rule: extra?.rule,
    nested: extra?.nested,
  };
}
