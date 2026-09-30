import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import * as Switch from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition duration-200 ease-out disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  {
    variants: {
      tone: {
        solid: "bg-accent text-accent-ink hover:bg-ink",
        quiet: "bg-paper-2 text-ink hover:bg-line",
        line: "border border-line bg-paper text-ink hover:border-ink",
        ghost: "text-ink hover:bg-paper-2",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-4 text-sm",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: { tone: "solid", size: "md" },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, tone, size, asChild, type, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ tone, size }), className)}
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    />
  );
}

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-tight",
  {
    variants: {
      tone: {
        neutral: "bg-paper-2 text-ink",
        accent: "bg-accent text-accent-ink",
        line: "border border-line text-ink",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export function Badge({
  className,
  tone,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}

export function Card({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("rounded-lg border border-line bg-paper p-5", className)} {...props} />
  );
}

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function Field({ label, hint, error, className, id, ...props }: FieldProps) {
  const auto = useId();
  const fieldId = id ?? auto;
  const message = error ?? hint;
  return (
    <div className={cn("grid gap-1.5", className)}>
      <label htmlFor={fieldId} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={fieldId}
        aria-invalid={error ? true : undefined}
        aria-describedby={message ? `${fieldId}-hint` : undefined}
        className={cn(
          "h-11 rounded-md border bg-paper px-3 text-sm text-ink outline-none placeholder:text-mute focus-visible:border-ink",
          error ? "border-accent" : "border-line",
        )}
        {...props}
      />
      {message ? (
        <p id={`${fieldId}-hint`} className={cn("text-xs", error ? "text-accent" : "text-mute")}>
          {message}
        </p>
      ) : null}
    </div>
  );
}

export function Alert({
  title,
  children,
  tone = "neutral",
}: {
  title: string;
  children: ReactNode;
  tone?: "neutral" | "critical";
}) {
  return (
    <div
      role="status"
      className={cn(
        "rounded-lg border px-4 py-3",
        tone === "critical" ? "border-accent bg-paper-2" : "border-line bg-paper",
      )}
    >
      <p className="text-sm font-medium">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-mute">{children}</p>
    </div>
  );
}

export function Avatar({ initials, label }: { initials: string; label: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full bg-ink text-xs font-medium tracking-tight text-paper"
    >
      {initials}
    </span>
  );
}

export function SwitchField({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  const id = useId();
  return (
    <div className="flex items-center justify-between gap-4">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <Switch.Root
        id={id}
        defaultChecked={defaultChecked}
        className="relative h-7 w-12 shrink-0 rounded-full bg-line transition-colors data-[state=checked]:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Switch.Thumb className="block size-5 translate-x-1 rounded-full bg-paper transition-transform data-[state=checked]:translate-x-6" />
      </Switch.Root>
    </div>
  );
}

export { buttonVariants, badgeVariants };
