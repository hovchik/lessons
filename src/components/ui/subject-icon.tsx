import {
  Atom,
  BookOpenText,
  Calculator,
  FunctionSquare,
  Globe,
  Languages,
  Palette,
  Shapes,
  Church,
  Compass,
  Crown,
  EighthNotes,
  FlaskConical,
  Landmark,
  Leaf,
  Map as MapIcon,
  Monitor,
  ScrollText,
  Sprout,
  Users,
  Wrench,
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
  Church,
  Compass,
  Crown,
  EighthNotes,
  FlaskConical,
  Landmark,
  Leaf,
  Map: MapIcon,
  Monitor,
  ScrollText,
  Sprout,
  Users,
  Wrench,
};

export function SubjectIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = ICONS[name] ?? BookOpenText;
  return <Icon aria-hidden="true" {...props} />;
}
