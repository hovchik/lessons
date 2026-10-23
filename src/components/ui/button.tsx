import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "danger";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground shadow-clay-sm hover:brightness-110",
  secondary: "bg-card text-foreground shadow-clay-sm hover:bg-muted",
  accent: "bg-accent text-accent-foreground shadow-clay-sm hover:brightness-110",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  danger: "bg-destructive text-white shadow-clay-sm hover:brightness-110",
};
const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-13 px-7 text-lg",
};

export function buttonClasses({ variant = "primary", size = "md", className }: { variant?: Variant; size?: Size; className?: string }) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] font-bold clay-press select-none",
    "disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({
  variant,
  size,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button className={buttonClasses({ variant, size, className })} {...props} />;
}
