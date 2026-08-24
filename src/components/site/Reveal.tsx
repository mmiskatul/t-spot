import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, className: revealClass, style } = useReveal<HTMLDivElement>(delay);
  return (
    <Tag ref={ref as never} className={cn(revealClass, className)} style={style}>
      {children}
    </Tag>
  );
}
