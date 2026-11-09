// Tipos de sistema que a HM Dev Solutions oferece. Usado na página /solucoes
// e nas opções do formulário "Começar um projeto". Os textos de cada um
// (nas três línguas) ficam em src/lib/i18n.tsx, na parte "sol", com o mesmo id.
import {
  BookOpen,
  CalendarCheck,
  Globe,
  LayoutDashboard,
  Rocket,
  ShoppingBag,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Solucao = { id: string; icon: LucideIcon };

export const SOLUCOES: Solucao[] = [
  { id: "site", icon: Globe },
  { id: "landing", icon: Rocket },
  { id: "ecommerce", icon: ShoppingBag },
  { id: "crm", icon: Users },
  { id: "agendamento", icon: CalendarCheck },
  { id: "catalogo", icon: BookOpen },
  { id: "painel", icon: LayoutDashboard },
  { id: "automacao", icon: Workflow },
];
