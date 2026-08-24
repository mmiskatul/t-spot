import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-lift hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-border bg-card text-foreground shadow-soft hover:border-primary/50 hover:text-primary hover:-translate-y-0.5",
  ghost: "text-foreground/80 hover:text-primary",
  soft: "bg-accent text-accent-foreground hover:bg-accent/70",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
} as const;

type Common = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

export function ActionLink({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: Common & { href: string; external?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </a>
  );
}

export function ActionButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-[0.16em] text-accent-foreground uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl leading-[1.1] font-bold text-balance sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base text-pretty text-muted-foreground sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
