// Tipos de sistema que a HM Dev Solutions oferece. Usado na página /solucoes
// e nas opções do formulário "Começar um projeto". Para adicionar um novo,
// basta incluir mais um item aqui (o ícone vem de lucide-react).
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

export type Solucao = {
  id: string;
  icon: LucideIcon;
  title: string;
  text: string;
  features: string[];
};

export const SOLUCOES: Solucao[] = [
  {
    id: "site",
    icon: Globe,
    title: "Site profissional",
    text: "A vitrine do seu negócio: quem você é, o que faz e como falar com você.",
    features: ["Design com a sua marca", "Rápido e responsivo", "Preparado para o Google"],
  },
  {
    id: "landing",
    icon: Rocket,
    title: "Landing page",
    text: "Uma página focada em uma oferta, feita para transformar visita em contato.",
    features: ["Ideal para anúncios", "Botão direto para WhatsApp", "Lançamentos e promoções"],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce",
    text: "Sua loja virtual aberta 24 horas, com catálogo, carrinho e pagamento on-line.",
    features: ["Pix e cartão", "Controle de estoque", "Cálculo de frete"],
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM",
    text: "Organize clientes, orçamentos e vendas num só lugar, sem planilha perdida.",
    features: ["Funil de vendas", "Histórico de cada cliente", "Lembretes de retorno"],
  },
  {
    id: "agendamento",
    icon: CalendarCheck,
    title: "Agendamento on-line",
    text: "O cliente escolhe o horário sozinho e você recebe a agenda organizada.",
    features: ["Horários em tempo real", "Confirmação automática", "Ideal para salões e clínicas"],
  },
  {
    id: "catalogo",
    icon: BookOpen,
    title: "Catálogo e cardápio digital",
    text: "Produtos ou pratos com fotos e preços, com pedido enviado direto para o WhatsApp.",
    features: ["Fácil de atualizar", "Abre por link ou QR Code", "Pedido no WhatsApp"],
  },
  {
    id: "painel",
    icon: LayoutDashboard,
    title: "Painel administrativo",
    text: "Um sistema sob medida para acompanhar números, pedidos e equipe.",
    features: ["Relatórios e gráficos", "Acesso por usuário", "Feito para o seu processo"],
  },
  {
    id: "automacao",
    icon: Workflow,
    title: "Automações e integrações",
    text: "Conecte site, WhatsApp, planilhas e e-mail para o trabalho repetitivo andar sozinho.",
    features: ["Menos tarefa manual", "Avisos automáticos", "Integra com o que você já usa"],
  },
];
