import { earlyTopics } from "@/dls/catalog/early";
import { flexTopics } from "@/dls/catalog/flex";
import { spaceTopics } from "@/dls/catalog/space";
import { typeTopics } from "@/dls/catalog/type";
import { surfaceTopics } from "@/dls/catalog/surface";
import { restTopics } from "@/dls/catalog/rest";
import type { Topic } from "@/dls/types";

export const GROUPS: { name: string; blurb: string }[] = [
  { name: "Library", blurb: "React components and the tokens they are built from." },
  { name: "Getting started", blurb: "How this repo runs Tailwind, and what v4 actually requires." },
  { name: "Core concepts", blurb: "Utilities, variants, breakpoints, dark mode, and tokens." },
  { name: "Base styles", blurb: "What Preflight already changed before you write a class." },
  { name: "Layout", blurb: "Display, position, overflow, and the box model." },
  { name: "Flexbox & Grid", blurb: "Axes, tracks, placement, and gap." },
  { name: "Spacing", blurb: "Padding and margin on one scale." },
  { name: "Sizing", blurb: "Width, height, and the logical inline and block sizes." },
  { name: "Typography", blurb: "Family, measure, weight, and wrapping." },
  { name: "Backgrounds", blurb: "Color, gradients, and image placement." },
  { name: "Borders", blurb: "Radius, width, outlines, and sibling dividers." },
  { name: "Effects", blurb: "Shadow, opacity, blend, and masks." },
  { name: "Filters", blurb: "Filter functions and backdrop filters." },
  { name: "Tables", blurb: "Collapse, spacing, and layout algorithm." },
  { name: "Transitions & Animation", blurb: "What moves, how long, and on which curve." },
  { name: "Transforms", blurb: "Move, scale, and rotate without reflow — and zoom, which does reflow." },
  { name: "Interactivity", blurb: "Cursors, scrolling, selection, and native control color." },
  { name: "SVG", blurb: "Fill, stroke, and stroke weight for icons." },
  { name: "Accessibility", blurb: "Forced colors, and text that is only for assistive tech." },
];

export const topics: Topic[] = [
  ...earlyTopics,
  ...flexTopics,
  ...spaceTopics,
  ...typeTopics,
  ...surfaceTopics,
  ...restTopics,
];

const bySlug = new Map(topics.map((item) => [item.slug, item]));

export function getTopic(slug?: string): Topic | undefined {
  if (!slug) return undefined;
  return bySlug.get(slug);
}

export function topicsInGroup(name: string): Topic[] {
  return topics.filter((item) => item.group === name);
}
