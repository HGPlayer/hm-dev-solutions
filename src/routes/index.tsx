import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Check,
  Instagram,
  Mail,
  Menu,
  MousePointer2,
  Phone,
  Send,
  Tag,
  X,
} from "lucide-react";
import {
  CONTACT_EMAIL,
  INSTAGRAM_DM_URL,
  INSTAGRAM_URL,
  INSTAGRAM_USER,
  PRIMARY_CONTACT_URL,
  SITE_URL,
  WHATSAPP_URL,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HM Dev Solutions – Sites profissionais que trazem clientes" },
      {
        name: "description",
        content:
          "Seu negócio está no Instagram, mas o cliente consegue te encontrar e te contratar? Criamos sites rápidos, responsivos e que aparecem no Google.",
      },
      { property: "og:title", content: "HM Dev Solutions – Seu site é a vitrine que nunca fecha" },
      {
        property: "og:description",
        content: "Sites profissionais, rápidos e que aparecem no Google. Peça seu orçamento.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Index,
});

const NAV = [
  ["Por que ter um site", "#problema"],
  ["Serviços", "#servicos"],
  ["Portfólio", "#portfolio"],
  ["Como funciona", "#como-funciona"],
  ["Contato", "#contato"],
] as const;

const COMPARE = [
  "Aparece no Google",
  "Serviços e preços organizados",
  "Orçamento 24h por dia",
  "Passa mais credibilidade",
  "Clientes e conteúdo são seus",
];

const SERVICES = [
  {
    img: "/artes/crie-seu-site.webp",
    alt: "Notebook com formas 3D e o texto Crie seu site",
    title: "Site profissional",
    text: "Sua vitrine 24 horas: serviços, fotos e contato em um só lugar, no celular e no computador.",
    contain: true,
  },
  {
    img: "/artes/hora-certa.webp",
    alt: "Arte: seja encontrado na hora certa",
    title: "Apareça no Google",
    text: "Site preparado para ser encontrado por quem já está procurando o que você vende.",
  },
  {
    img: "/artes/aumente-vendas.webp",
    alt: "Arte: aumente suas vendas, celular com notificação de venda",
    title: "Mais contatos e vendas",
    text: "Botões de WhatsApp e orçamento bem posicionados, que transformam visita em cliente.",
  },
  {
    img: "/artes/preco-acessivel.webp",
    alt: "Arte: por um preço acessível",
    title: "Preço que cabe no bolso",
    text: "Orçamento sob medida para o tamanho do seu negócio, sem mensalidade escondida.",
  },
];

const STEPS = [
  ["Conversa", "Entendemos seu negócio, seus clientes e seu objetivo."],
  ["Design e código", "Um site com a cara da sua marca, rápido e responsivo."],
  ["No ar", "Publicamos e deixamos pronto para gerar contatos."],
] as const;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const delay = (i: number) => ({ transitionDelay: `${i * 110}ms` });

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.45-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.65l6.04-1.58a11.3 11.3 0 0 0 5.43 1.38h.01c6.26 0 11.36-5.1 11.37-11.36 0-3.04-1.18-5.89-3.33-8.04" />
    </svg>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-lilac/70" />
      {children}
    </p>
  );
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl ${className}`}>
      {children}
    </h2>
  );
}

function Hl({ children }: { children: ReactNode }) {
  return <span className="text-brand-gradient">{children}</span>;
}

function CtaButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-glow bg-brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white ${className}`}
    >
      {children}
    </a>
  );
}

function GhostButton({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="glass card-lift inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
    >
      {children}
    </a>
  );
}

/* Celular do hero: um perfil de Instagram que não responde às perguntas do cliente */
function PhoneMock() {
  return (
    <div className="relative w-[15.5rem] shrink-0 rounded-[2.6rem] border-[5px] border-white/80 bg-[#0e0a18] p-4 pt-9 shadow-[0_0_80px_-10px_rgb(124_92_245/55%)] sm:w-[17rem]">
      <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="flex items-center gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#a78bfa] to-[#5b3fd6]">
          <img src="/logo-hm.png" alt="" className="h-8 w-auto" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="h-2.5 w-full rounded-full bg-white/15" />
          <div className="h-2.5 w-2/3 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
        <span className="rounded-lg bg-violet py-2 text-center font-semibold">Seguir</span>
        <span className="rounded-lg bg-white/10 py-2 text-center">Mensagem</span>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-2 text-center text-[0.55rem] text-white/70">
        {["Projetos", "Serviços", "Preços", "Contato"].map((l) => (
          <div key={l}>
            <span className="block">{l}</span>
            <span className="mx-auto mt-1.5 block aspect-square w-full rounded-full border border-lilac/80" />
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-1.5">
        {[
          "from-[#7357f2] to-[#3b2580]",
          "from-[#4a3a7a] to-[#2b2050]",
          "from-[#a58cff] to-[#4b37a0]",
          "from-[#3a2d63] to-[#241a40]",
          "from-[#8f73ff] to-[#3c2a85]",
          "from-[#4d3d80] to-[#2a1f4d]",
        ].map((g) => (
          <span key={g} className={`aspect-square rounded-md bg-gradient-to-br ${g}`} />
        ))}
      </div>
    </div>
  );
}

function QuestionCard({ icon, children, i }: { icon: ReactNode; children: ReactNode; i: number }) {
  return (
    <div className="hero-in relative" style={{ animationDelay: `${600 + i * 180}ms` }}>
      <span className="absolute -left-10 top-1/2 hidden h-px w-10 bg-lilac/60 lg:block" />
      <div className="glass flex items-center gap-4 rounded-3xl p-4 pr-6 md:p-5">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-lilac/80 text-lilac">
          {icon}
        </span>
        <div className="flex-1">
          <p className="text-base font-semibold leading-tight md:text-lg">{children}</p>
          <span className="mt-2 block h-2 w-3/4 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);

  const goTo = (hash: string) => {
    setOpen(false);
    window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <div className="overflow-x-hidden">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
        <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 md:px-6">
          <a href="#inicio" className="flex items-center gap-3" aria-label="HM Dev Solutions – início">
            <img src="/logo-hm.png" alt="" className="h-8 w-auto" />
            <span className="hidden text-[0.72rem] font-medium tracking-[0.28em] sm:block">HM DEV SOLUTIONS</span>
          </a>
          <ul className="hidden gap-6 lg:flex">
            {NAV.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="text-[0.8rem] text-muted-foreground transition-colors hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={PRIMARY_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow bg-brand-gradient hidden rounded-full px-5 py-2 text-[0.8rem] font-semibold md:inline-block"
            >
              Peça orçamento
            </a>
            <button
              className="grid h-10 w-10 place-items-center rounded-full lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X className="text-lilac" /> : <Menu className="text-lilac" />}
            </button>
          </div>
        </nav>
        <div className={`mobile-menu mx-auto max-w-6xl lg:hidden ${open ? "is-open" : ""}`}>
          <div className="min-h-0 overflow-hidden">
            <div className="glass-strong mt-2 rounded-3xl bg-background/70 p-4">
              {NAV.map(([l, h]) => (
                <a
                  key={h}
                  href={h}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(h);
                  }}
                  className="block rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-white/5"
                >
                  {l}
                </a>
              ))}
              <a
                href={PRIMARY_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gradient mt-2 block rounded-full px-5 py-3 text-center text-sm font-semibold"
              >
                Peça orçamento
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 md:pt-40">
          <div className="hero-in">
            <Eyebrow>Presença digital</Eyebrow>
          </div>
          <h1
            className="hero-in mt-6 max-w-3xl text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Seu negócio está <Hl>no Instagram.</Hl>
          </h1>
          <p
            className="hero-in mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            Mas seu cliente consegue te encontrar <strong className="font-semibold text-white">e te contratar?</strong>
          </p>
          <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
            <CtaButton href={PRIMARY_CONTACT_URL}>
              {WHATSAPP_URL ? <WhatsAppIcon className="h-4 w-4" /> : <Send className="h-4 w-4" />}
              Quero meu site
            </CtaButton>
            <GhostButton href="#portfolio">
              Ver portfólio <ArrowRight className="h-4 w-4" />
            </GhostButton>
          </div>

          <div className="mt-16 flex flex-col items-center gap-10 lg:mt-20 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
            <div className="hero-in" style={{ animationDelay: "450ms" }}>
              <div className="bob">
                <PhoneMock />
              </div>
            </div>
            <div className="flex w-full max-w-md flex-col gap-5">
              <QuestionCard i={0} icon={<Box className="h-5 w-5" />}>O que você oferece?</QuestionCard>
              <QuestionCard i={1} icon={<Tag className="h-5 w-5" />}>Quanto custa?</QuestionCard>
              <QuestionCard i={2} icon={<Phone className="h-5 w-5" />}>Como falo com você?</QuestionCard>
              <p className="hero-in pl-2 text-sm text-muted-foreground" style={{ animationDelay: "1200ms" }}>
                Se o cliente precisa perguntar, você já pode ter perdido a venda.
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEMA: INSTAGRAM x SITE */}
        <section id="problema" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="reveal">
              <Eyebrow>Por que ter um site</Eyebrow>
              <SectionTitle>
                Instagram é alugado. <Hl>Site é seu.</Hl>
              </SectionTitle>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Se o algoritmo muda, seu alcance cai. Seu site continua no ar, trabalhando por você.
              </p>
              <p className="glass mt-8 inline-block rounded-full px-6 py-3 font-semibold">
                O Instagram atrai. <span className="text-lilac">O site converte.</span>
              </p>
            </div>
            <div className="glass reveal overflow-hidden rounded-3xl" style={delay(1)}>
              <table className="w-full text-left text-sm md:text-base">
                <caption className="sr-only">Comparação entre ter só Instagram e ter um site</caption>
                <thead>
                  <tr className="border-b">
                    <th scope="col" className="p-5 font-normal" />
                    <th scope="col" className="w-24 p-4 text-center text-[0.65rem] font-normal uppercase tracking-[0.2em] text-muted-foreground md:w-32">
                      Só Instagram
                    </th>
                    <th scope="col" className="w-24 bg-violet/25 p-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] md:w-32">
                      Com site
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row) => (
                    <tr key={row} className="border-b last:border-0">
                      <th scope="row" className="p-5 font-normal">{row}</th>
                      <td className="text-center text-white/40">
                        <X className="mx-auto h-5 w-5" aria-label="Não" />
                      </td>
                      <td className="bg-violet/25 text-center text-lilac">
                        <Check className="mx-auto h-5 w-5" aria-label="Sim" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="reveal max-w-2xl">
            <Eyebrow>Site profissional</Eyebrow>
            <SectionTitle>
              Seu site é a vitrine <Hl>que nunca fecha.</Hl>
            </SectionTitle>
            <p className="mt-6 text-lg text-muted-foreground">
              Serviços, preços e contato em um só lugar, 24 horas por dia.
            </p>
            <ul className="mt-7 flex flex-wrap gap-3">
              {["Rápido", "Responsivo", "Aparece no Google"].map((p) => (
                <li key={p} className="glass rounded-full px-5 py-2 text-sm">{p}</li>
              ))}
            </ul>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <article key={s.title} className="glass card-lift reveal flex flex-col rounded-3xl p-3" style={delay(i)}>
                <div className="aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-gradient-to-br from-[#2a1856] to-[#120a24]">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className={`h-full w-full ${s.contain ? "object-contain p-3" : "object-cover"}`}
                  />
                </div>
                <div className="p-3 pt-5">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PORTFÓLIO */}
        <section id="portfolio" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="reveal max-w-2xl">
            <Eyebrow>Portfólio</Eyebrow>
            <SectionTitle>
              Projetos <Hl>no ar.</Hl>
            </SectionTitle>
            <p className="mt-6 text-lg text-muted-foreground">
              Cada site é feito sob medida para a marca e para o cliente de quem contrata.
            </p>
          </div>

          <article className="glass-strong reveal mt-14 grid gap-10 rounded-[2rem] p-5 md:p-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div className="relative pb-10 pr-6 sm:pr-14">
              <a
                href="https://www.fabiopassoscutelaria.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir o site Fábio Passos Cutelaria"
                className="site-frame block overflow-hidden rounded-2xl border border-white/15 bg-[#120c08] shadow-2xl"
              >
                <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-2.5">
                  <span className="flex gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    <i className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    <i className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  </span>
                  <span className="mx-auto truncate rounded-full bg-black/40 px-4 py-1 text-[0.7rem] text-white/70">
                    fabiopassoscutelaria.com
                  </span>
                </div>
                <div className="site-scroll">
                  <img
                    src="/projetos/fabio-full.webp"
                    alt="Página inicial do site Fábio Passos Cutelaria"
                    loading="lazy"
                    className="w-full"
                  />
                </div>
              </a>
              <div className="absolute bottom-0 right-0 w-[26%] min-w-[5.5rem] max-w-[9.5rem] overflow-hidden rounded-[1.4rem] border-4 border-white/80 bg-black shadow-2xl">
                <img src="/projetos/fabio-mobile.webp" alt="O mesmo site aberto no celular" loading="lazy" className="w-full" />
              </div>
              <p className="mt-4 hidden items-center gap-2 text-xs text-muted-foreground md:flex">
                <MousePointer2 className="h-3.5 w-3.5" /> Passe o mouse no site para ver a página inteira
              </p>
            </div>

            <div className="lg:pr-4">
              <p className="eyebrow">Projeto em destaque</p>
              <h3 className="mt-3 text-3xl font-bold leading-tight">Fábio Passos Cutelaria</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Cuteleiro de Canoas (RS) que forja facas artesanais em aço damasco. O trabalho dele
                vivia no Instagram; agora tem uma vitrine elegante, à altura das peças, com galeria de
                fotos, história e contato direto para encomendas.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {[
                  "Design sob medida, com a identidade da marca",
                  "Galeria com mais de 40 fotos das peças",
                  "Funciona perfeitamente no celular",
                  "Domínio próprio e preparado para o Google",
                ].map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lilac" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton href="https://www.fabiopassoscutelaria.com">
                  Ver site no ar <ArrowUpRight className="h-4 w-4" />
                </CtaButton>
              </div>
            </div>
          </article>

          <div className="reveal mt-6 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-dashed border-white/20 p-8 md:flex-row md:items-center">
            <div>
              <p className="text-xl font-semibold">Seu negócio pode ser o próximo.</p>
              <p className="mt-1 text-muted-foreground">Vamos conversar sobre o site que você precisa.</p>
            </div>
            <GhostButton href={PRIMARY_CONTACT_URL} external>
              Quero aparecer aqui <ArrowRight className="h-4 w-4" />
            </GhostButton>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="reveal">
              <Eyebrow>Como funciona</Eyebrow>
              <SectionTitle>
                Seu site no ar em <Hl>3 passos simples.</Hl>
              </SectionTitle>
              <p className="mt-6 text-lg text-muted-foreground">Você explica a ideia. A gente cuida do resto.</p>
            </div>
            <ol className="space-y-5">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="glass card-lift reveal flex items-center gap-5 rounded-3xl p-5 md:p-6" style={delay(i)}>
                  <span className="bg-brand-gradient grid h-14 w-14 shrink-0 place-items-center rounded-full text-xl font-extrabold shadow-[var(--shadow-glow)]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{t}</h3>
                    <p className="mt-1 text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="glass-strong reveal relative overflow-hidden rounded-[2rem] p-8 md:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/40 blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <Eyebrow>Seu próximo passo</Eyebrow>
                <SectionTitle>
                  Quer um site que <Hl>traz clientes?</Hl>
                </SectionTitle>
                <p className="mt-6 text-lg text-muted-foreground">
                  Peça seu orçamento sem compromisso. A gente responde rapidinho.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {WHATSAPP_URL && (
                    <CtaButton href={WHATSAPP_URL}>
                      <WhatsAppIcon className="h-4 w-4" /> Chamar no WhatsApp
                    </CtaButton>
                  )}
                  {WHATSAPP_URL ? (
                    <GhostButton href={INSTAGRAM_DM_URL} external>
                      <Instagram className="h-4 w-4" /> Direct no Instagram
                    </GhostButton>
                  ) : (
                    <CtaButton href={INSTAGRAM_DM_URL}>
                      <Send className="h-4 w-4" /> Chamar no direct
                    </CtaButton>
                  )}
                  {CONTACT_EMAIL && (
                    <GhostButton href={`mailto:${CONTACT_EMAIL}`}>
                      <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
                    </GhostButton>
                  )}
                </div>
              </div>

              <div className="glass rounded-3xl p-6" aria-hidden="true">
                <div className="flex gap-4">
                  <span className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-white/40 to-white/10" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">@seunegocio</p>
                    <p className="text-brand-gradient text-4xl font-extrabold">SITE</p>
                    <div className="mt-4 rounded-2xl bg-violet/30 px-4 py-3 text-sm">
                      <strong>@{INSTAGRAM_USER}</strong> Te chamei no direct! ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-hm.png" alt="HM Dev Solutions" className="h-9 w-auto" />
            <div>
              <p className="text-sm font-medium tracking-[0.25em]">HM DEV SOLUTIONS</p>
              <p className="text-xs text-muted-foreground">Sites profissionais que trazem clientes</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <Instagram className="h-4 w-4" /> @{INSTAGRAM_USER}
            </a>
            {WHATSAPP_URL && (
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            )}
            {CONTACT_EMAIL && (
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> E-mail
              </a>
            )}
            <Link to="/privacidade" className="hover:text-white">
              Privacidade
            </Link>
          </div>
        </div>
        <p className="pb-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} HM Dev Solutions. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
