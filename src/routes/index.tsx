import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Check,
  Instagram,
  Mail,
  MousePointer2,
  Phone,
  Tag,
  X,
} from "lucide-react";
import {
  CtaButton,
  Eyebrow,
  GhostButton,
  Hl,
  SectionTitle,
  SiteFooter,
  SiteHeader,
  StartButton,
  WhatsAppIcon,
  delay,
  useReveal,
} from "@/components/hm";
import { SOLUCOES } from "@/lib/solucoes";
import { CONTACT_EMAIL, INSTAGRAM_DM_URL, INSTAGRAM_USER, SITE_URL, whatsappUrl } from "@/lib/site";
import { useDocTitle, useLang, type Dict } from "@/lib/i18n";

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

// Imagens dos cartões de serviço (os textos vêm das traduções, na mesma ordem)
const SERVICE_IMGS = [
  { img: "/artes/crie-seu-site.webp", contain: true },
  { img: "/artes/hora-certa.webp" },
  { img: "/artes/aumente-vendas.webp" },
  { img: "/artes/preco-acessivel.webp" },
];

/* Celular do hero: um perfil de Instagram que não responde às perguntas do cliente */
function PhoneMock({ t }: { t: Dict["home"]["phone"] }) {
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
        <span className="rounded-lg bg-violet py-2 text-center font-semibold">{t.follow}</span>
        <span className="rounded-lg bg-white/10 py-2 text-center">{t.message}</span>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-2 text-center text-[0.55rem] text-white/70">
        {t.highlights.map((l) => (
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

const QUESTION_ICONS = [Box, Tag, Phone];

function Index() {
  useReveal();
  const { t: all } = useLang();
  const t = all.home;
  useDocTitle(t.title);
  const wa = whatsappUrl(all.whatsappText);

  return (
    <div className="overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 md:pt-40">
          <div className="hero-in">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          </div>
          <h1
            className="hero-in mt-6 max-w-3xl text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            {t.hero.a}
            <Hl>{t.hero.hl}</Hl>
          </h1>
          <p
            className="hero-in mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            {t.hero.sub}
            <strong className="font-semibold text-white">{t.hero.subStrong}</strong>
          </p>
          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ animationDelay: "360ms" }}>
            <StartButton>
              {all.nav.start} <ArrowRight className="h-4 w-4" />
            </StartButton>
            <GhostButton href="#portfolio">
              {t.hero.seePortfolio} <ArrowRight className="h-4 w-4" />
            </GhostButton>
          </div>

          <div className="mt-16 flex flex-col items-center gap-10 lg:mt-20 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
            <div className="hero-in" style={{ animationDelay: "450ms" }}>
              <div className="bob">
                <PhoneMock t={t.phone} />
              </div>
            </div>
            <div className="flex w-full max-w-md flex-col gap-5">
              {t.hero.questions.map((q, i) => {
                const Icon = QUESTION_ICONS[i] ?? Box;
                return (
                  <QuestionCard key={i} i={i} icon={<Icon className="h-5 w-5" />}>
                    {q}
                  </QuestionCard>
                );
              })}
              <p className="hero-in pl-2 text-sm text-muted-foreground" style={{ animationDelay: "1200ms" }}>
                {t.hero.lost}
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEMA: INSTAGRAM x SITE */}
        <section id="problema" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="reveal">
              <Eyebrow>{t.problem.eyebrow}</Eyebrow>
              <SectionTitle>
                {t.problem.a}
                <Hl>{t.problem.hl}</Hl>
              </SectionTitle>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">{t.problem.text}</p>
              <p className="glass mt-8 inline-block rounded-full px-6 py-3 font-semibold">
                {t.problem.pillA}
                <span className="text-lilac">{t.problem.pillB}</span>
              </p>
            </div>
            <div className="glass reveal overflow-hidden rounded-3xl" style={delay(1)}>
              <table className="w-full text-left text-sm md:text-base">
                <caption className="sr-only">{t.problem.caption}</caption>
                <thead>
                  <tr className="border-b">
                    <th scope="col" className="p-5 font-normal" />
                    <th scope="col" className="w-24 p-4 text-center text-[0.65rem] font-normal uppercase tracking-[0.2em] text-muted-foreground md:w-32">
                      {t.problem.onlyIg}
                    </th>
                    <th scope="col" className="w-24 bg-violet/25 p-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] md:w-32">
                      {t.problem.withSite}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.problem.rows.map((row) => (
                    <tr key={row} className="border-b last:border-0">
                      <th scope="row" className="p-5 font-normal">{row}</th>
                      <td className="text-center text-white/40">
                        <X className="mx-auto h-5 w-5" aria-label={t.problem.no} />
                      </td>
                      <td className="bg-violet/25 text-center text-lilac">
                        <Check className="mx-auto h-5 w-5" aria-label={t.problem.yes} />
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
            <Eyebrow>{t.services.eyebrow}</Eyebrow>
            <SectionTitle>
              {t.services.a}
              <Hl>{t.services.hl}</Hl>
            </SectionTitle>
            <p className="mt-6 text-lg text-muted-foreground">{t.services.text}</p>
            <ul className="mt-7 flex flex-wrap gap-3">
              {t.services.pills.map((p) => (
                <li key={p} className="glass rounded-full px-5 py-2 text-sm">{p}</li>
              ))}
            </ul>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((s, i) => {
              const media = SERVICE_IMGS[i];
              return (
                <article key={i} className="glass card-lift reveal flex flex-col rounded-3xl p-3" style={delay(i)}>
                  <div className="aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-gradient-to-br from-[#2a1856] to-[#120a24]">
                    <img
                      src={media?.img}
                      alt={s.alt}
                      loading="lazy"
                      className={`h-full w-full ${media?.contain ? "object-contain p-3" : "object-cover"}`}
                    />
                  </div>
                  <div className="p-3 pt-5">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Além de sites: prévia das soluções */}
          <div className="glass reveal mt-6 flex flex-col gap-6 rounded-[2rem] p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-xl font-semibold">{t.services.moreTitle}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SOLUCOES.slice(1).map((s) => (
                  <li key={s.id} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted-foreground">
                    <s.icon className="h-3.5 w-3.5 text-lilac" /> {all.sol[s.id]?.title}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/solucoes"
              className="glass card-lift inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
            >
              {t.services.moreLink} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* PORTFÓLIO */}
        <section id="portfolio" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="reveal max-w-2xl">
            <Eyebrow>{t.portfolio.eyebrow}</Eyebrow>
            <SectionTitle>
              {t.portfolio.a}
              <Hl>{t.portfolio.hl}</Hl>
            </SectionTitle>
            <p className="mt-6 text-lg text-muted-foreground">{t.portfolio.text}</p>
          </div>

          <article className="glass-strong reveal mt-14 grid gap-10 rounded-[2rem] p-5 md:p-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div className="relative pb-10 pr-6 sm:pr-14">
              <a
                href="https://www.fabiopassoscutelaria.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.portfolio.frameAria}
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
                  <img src="/projetos/fabio-full.webp" alt={t.portfolio.imgAlt} loading="lazy" className="w-full" />
                </div>
              </a>
              <div className="absolute bottom-0 right-0 w-[26%] min-w-[5.5rem] max-w-[9.5rem] overflow-hidden rounded-[1.4rem] border-4 border-white/80 bg-black shadow-2xl">
                <img src="/projetos/fabio-mobile.webp" alt={t.portfolio.mobileAlt} loading="lazy" className="w-full" />
              </div>
              <p className="mt-4 hidden items-center gap-2 text-xs text-muted-foreground md:flex">
                <MousePointer2 className="h-3.5 w-3.5" /> {t.portfolio.hover}
              </p>
            </div>

            <div className="lg:pr-4">
              <p className="eyebrow">{t.portfolio.featured}</p>
              <h3 className="mt-3 text-3xl font-bold leading-tight">Fábio Passos Cutelaria</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{t.portfolio.desc}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {t.portfolio.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lilac" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton href="https://www.fabiopassoscutelaria.com">
                  {t.portfolio.live} <ArrowUpRight className="h-4 w-4" />
                </CtaButton>
              </div>
            </div>
          </article>

          <div className="reveal mt-6 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-dashed border-white/20 p-8 md:flex-row md:items-center">
            <div>
              <p className="text-xl font-semibold">{t.portfolio.nextTitle}</p>
              <p className="mt-1 text-muted-foreground">{t.portfolio.nextText}</p>
            </div>
            <Link
              to="/comecar"
              className="glass card-lift inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
            >
              {t.portfolio.nextBtn} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="reveal">
              <Eyebrow>{t.how.eyebrow}</Eyebrow>
              <SectionTitle>
                {t.how.a}
                <Hl>{t.how.hl}</Hl>
              </SectionTitle>
              <p className="mt-6 text-lg text-muted-foreground">{t.how.text}</p>
            </div>
            <ol className="space-y-5">
              {t.how.steps.map((s, i) => (
                <li key={i} className="glass card-lift reveal flex items-center gap-5 rounded-3xl p-5 md:p-6" style={delay(i)}>
                  <span className="bg-brand-gradient grid h-14 w-14 shrink-0 place-items-center rounded-full text-xl font-extrabold shadow-[var(--shadow-glow)]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{s.t}</h3>
                    <p className="mt-1 text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <div className="glass-strong reveal relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/40 blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <Eyebrow>{t.contact.eyebrow}</Eyebrow>
                <SectionTitle>
                  {t.contact.a}
                  <Hl>{t.contact.hl}</Hl>
                </SectionTitle>
                <p className="mt-6 text-lg text-muted-foreground">{t.contact.text}</p>
                <StartButton className="mt-9 w-full sm:w-auto">
                  {all.nav.start} <ArrowRight className="h-4 w-4" />
                </StartButton>
                <p className="mt-7 text-xs uppercase tracking-[0.25em] text-muted-foreground">{t.contact.orDirect}</p>
                <div className="mt-3 grid grid-cols-3 gap-2.5 sm:flex sm:flex-wrap">
                  {[
                    wa && { href: wa, icon: <WhatsAppIcon className="h-5 w-5" />, label: "WhatsApp", ext: true },
                    { href: INSTAGRAM_DM_URL, icon: <Instagram className="h-5 w-5" />, label: "Instagram", ext: true },
                    CONTACT_EMAIL && { href: `mailto:${CONTACT_EMAIL}`, icon: <Mail className="h-5 w-5" />, label: "E-mail", ext: false },
                  ]
                    .filter((c) => !!c)
                    .map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="glass card-lift flex flex-col items-center justify-center gap-1.5 rounded-2xl px-3 py-3.5 text-xs font-medium sm:flex-row sm:gap-2 sm:rounded-full sm:px-6 sm:text-sm"
                      >
                        <span className="text-lilac">{c.icon}</span> {c.label}
                      </a>
                    ))}
                </div>
              </div>

              <div className="glass hidden rounded-3xl p-6 lg:block" aria-hidden="true">
                <div className="flex gap-4">
                  <span className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-white/40 to-white/10" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{t.contact.business}</p>
                    <p className="text-brand-gradient text-4xl font-extrabold">SITE</p>
                    <div className="mt-4 rounded-2xl bg-violet/30 px-4 py-3 text-sm">
                      <strong>@{INSTAGRAM_USER}</strong> {t.contact.reply}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
