import type { ReactNode } from "react";
import { Alert, Avatar, Badge, Button, Card, Field, SwitchField } from "@/dls/ui";

function Specimen({
  title,
  children,
  code,
}: {
  title: string;
  children: ReactNode;
  code: string;
}) {
  return (
    <section className="border-t border-line py-6 first:border-t-0 first:pt-0">
      <h3 className="text-xs font-medium tracking-widest text-mute uppercase">{title}</h3>
      <div className="mt-4">{children}</div>
      <pre className="mt-4 overflow-x-auto rounded-md bg-ink px-3 py-2 font-mono text-xs leading-relaxed text-paper">
        {code}
      </pre>
    </section>
  );
}

export function ComponentGallery() {
  return (
    <div>
      <Specimen title="Button" code={`<Button tone="solid">Save changes</Button>`}>
        <div className="flex flex-wrap items-center gap-2">
          <Button tone="solid">Save changes</Button>
          <Button tone="quiet">Quiet</Button>
          <Button tone="line">Line</Button>
          <Button tone="ghost">Ghost</Button>
          <Button tone="solid" size="sm">
            Small
          </Button>
          <Button tone="solid" size="lg">
            Large
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </Specimen>
      <Specimen title="Badge" code={`<Badge tone="accent">In review</Badge>`}>
        <div className="flex flex-wrap gap-2">
          <Badge>Draft</Badge>
          <Badge tone="accent">In review</Badge>
          <Badge tone="line">Shipped</Badge>
        </div>
      </Specimen>
      <Specimen
        title="Card"
        code={`<Card>
  <h3>Checkout</h3>
  <p>43% fewer abandoned carts after the redesign.</p>
</Card>`}
      >
        <Card className="max-w-sm">
          <p className="text-xs tracking-widest text-mute uppercase">Metric</p>
          <h3 className="mt-2 font-serif text-2xl">Checkout</h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">
            43% fewer abandoned carts after the flow was rebuilt around one decision per step.
          </p>
          <div className="mt-4">
            <Button size="sm">Open study</Button>
          </div>
        </Card>
      </Specimen>
      <Specimen title="Field" code={`<Field label="Email" hint="Used for the receipt." />`}>
        <div className="grid max-w-sm gap-4">
          <Field label="Email" type="email" placeholder="ada@studio.test" hint="Used for the receipt." />
          <Field label="Code" error="That code has expired." defaultValue="1842" />
        </div>
      </Specimen>
      <Specimen title="Alert" code={`<Alert title="Saved" tone="neutral">The token file is updated.</Alert>`}>
        <div className="grid max-w-md gap-3">
          <Alert title="Saved">The token file is the source of truth. Components already read it.</Alert>
          <Alert title="Contrast failed" tone="critical">
            Accent on paper-2 is the pair to check before shipping a critical state.
          </Alert>
        </div>
      </Specimen>
      <Specimen title="Avatar and switch" code={`<Avatar initials="TD" label="Tangible DLS" />`}>
        <div className="grid max-w-sm gap-4">
          <div className="flex items-center gap-3">
            <Avatar initials="TD" label="Tangible DLS" />
            <div>
              <p className="text-sm font-medium">Tangible</p>
              <p className="text-xs text-mute">Design language system</p>
            </div>
          </div>
          <SwitchField label="Publish tokens" defaultChecked />
        </div>
      </Specimen>
    </div>
  );
}
