import {
  Atom,
  BookOpenText,
  Calculator,
  FunctionSquare,
  Globe,
  Languages,
  Palette,
  Shapes,
  type LucideProps,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  Atom,
  BookOpenText,
  Calculator,
  FunctionSquare,
  Globe,
  Languages,
  Palette,
  Shapes,
};

export function SubjectIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = ICONS[name] ?? BookOpenText;
  return <Icon aria-hidden="true" {...props} />;
}
