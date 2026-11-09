import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowLeftRight, ArrowRight, ArrowUpRight, Check, MessageCircle, X } from "lucide-react";
import {
  CtaButton,
  Eyebrow,
  Hl,
  SectionTitle,
  SiteFooter,
  SiteHeader,
  StartButton,
  delay,
  useReveal,
} from "@/components/hm";
import { SOLUCOES } from "@/lib/solucoes";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções e resultados | HM Dev Solutions" },
      {
        name: "description",
        content:
          "Veja o antes e depois dos nossos projetos e conheça as soluções: sites, landing pages, e-commerce, CRM, agendamento e mais.",
      },
      { property: "og:title", content: "Soluções e resultados | HM Dev Solutions" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/solucoes` }],
  }),
  component: Solucoes,
});

const ANTES = [
  "Fotos das peças espalhadas no feed, misturadas com outros posts",
  "Cliente precisava perguntar preço e contato pelo direct",
  "Fora do Instagram, quase ninguém encontrava o trabalho",
  "Alcance dependia do humor do algoritmo",
];
const DEPOIS = [
  "Galeria organizada com mais de 40 fotos das facas",
  "História, coleção e contato em uma só página",
  "Domínio próprio: fabiopassoscutelaria.com",
  "Site preparado para aparecer no Google",
];
const NUMEROS = [
  ["40+", "fotos organizadas em galeria"],
  ["24h", "de vitrine aberta, todos os dias"],
  ["1", "domínio próprio com a marca"],
  ["100%", "adaptado para celular"],
] as const;

/* "Antes": ilustração de como o trabalho aparecia só no Instagram */
function InstagramMock() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0b0b0d] px-3 pb-3 pt-9 text-white">
      <p className="text-center text-[0.62rem] font-semibold">fabio_passos_cutelaria</p>
      <div className="mt-3 flex items-center gap-3">
        <img src="/projetos/fabio-ig-1.webp" alt="" className="h-14 w-14 rounded-full object-cover ring-2 ring-pink-500/70" />
        <div className="grid flex-1 grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-6 rounded bg-white/10" />
          ))}
        </div>
      </div>
      <span className="mt-3 h-2 w-1/2 rounded-full bg-white/20" />
      <span className="mt-1.5 h-2 w-3/4 rounded-full bg-white/10" />
      <div className="mt-3 grid grid-cols-2 gap-1.5 text-[0.55rem]">
        <span className="rounded bg-[#0095f6] py-1.5 text-center font-semibold">Seguir</span>
        <span className="rounded bg-white/10 py-1.5 text-center">Mensagem</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-0.5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <img key={n} src={`/projetos/fabio-ig-${n}.webp`} alt="" className="aspect-square w-full object-cover" />
        ))}
      </div>
      {/* perguntas sem resposta no direct */}
      <div className="absolute inset-x-3 bottom-4 space-y-1.5">
        {["Quanto custa essa faca?", "Faz entrega para SP?", "Tem catálogo com preços?"].map((q, i) => (
          <div
            key={q}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/80 px-2.5 py-2 text-[0.58rem] backdrop-blur"
            style={{ marginLeft: `${i * 6}px` }}
          >
            <MessageCircle className="h-3 w-3 shrink-0 text-white/60" />
            <span className="flex-1">{q}</span>
            <span className="text-white/40">sem resposta</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Celular com controle de arrastar: à esquerda o "antes", à direita o "depois" */
function BeforeAfter() {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative mx-auto w-[17rem] sm:w-[19rem]">
      <div className="relative aspect-[390/844] overflow-hidden rounded-[2.4rem] border-[5px] border-white/85 bg-black shadow-[0_0_90px_-15px_rgb(124_92_245/60%)]">
        <img
          src="/projetos/fabio-mobile.webp"
          alt="Depois: site Fábio Passos Cutelaria aberto no celular"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <InstagramMock />
        </div>
        <div className="absolute left-1/2 top-2.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

        {/* linha e botão de arrastar */}
        <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -left-px w-0.5 bg-white/90 shadow-[0_0_12px_rgb(184_162_255)]" />
          <div className="glass-strong absolute left-0 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-violet/60">
            <ArrowLeftRight className="h-4 w-4" />
          </div>
        </div>
        <span className="pointer-events-none absolute left-3 top-10 z-10 rounded-full bg-black/70 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-widest">
          Antes
        </span>
        <span className="pointer-events-none absolute right-3 top-10 z-10 rounded-full bg-violet/80 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-widest">
          Depois
        </span>

        {/* o controle real (invisível): funciona com mouse, dedo e teclado */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Arraste para comparar antes e depois"
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Arraste para comparar · “Antes” é uma ilustração com fotos reais do Fábio
      </p>
    </div>
  );
}

function ListCol({ title, items, good }: { title: ReactNode; items: string[]; good?: boolean }) {
  return (
    <div className={`rounded-3xl p-6 ${good ? "glass-strong" : "border border-white/10 bg-white/[0.02]"}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${good ? "text-lilac" : "text-muted-foreground"}`}>{title}</p>
      <ul className="mt-5 space-y-3.5 text-sm">
        {items.map((t) => (
          <li key={t} className="flex gap-3">
            {good ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-lilac" />
            ) : (
              <X className="mt-0.5 h-4 w-4 shrink-0 text-white/35" />
            )}
            <span className={good ? "" : "text-muted-foreground"}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Solucoes() {
  useReveal();

  return (
    <div className="overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* TOPO */}
        <section className="mx-auto max-w-6xl px-6 pb-12 pt-32 md:pt-40">
          <div className="hero-in">
            <Eyebrow>Soluções e resultados</Eyebrow>
          </div>
          <h1
            className="hero-in mt-6 max-w-4xl text-[2.5rem] font-extrabold leading-[1.03] tracking-tight sm:text-6xl md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Do Instagram para um <Hl>sistema que trabalha por você.</Hl>
          </h1>
          <p className="hero-in mt-6 max-w-xl text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "240ms" }}>
            Veja a diferença na prática e escolha a solução certa para o seu negócio.
          </p>
          <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
            <StartButton>
              Começar um projeto <ArrowRight className="h-4 w-4" />
            </StartButton>
            <a href="#sistemas" className="glass card-lift inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium">
              Ver soluções
            </a>
          </div>
        </section>

        {/* ANTES E DEPOIS */}
        <section id="resultados" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <div className="reveal max-w-2xl">
            <Eyebrow>Antes e depois</Eyebrow>
            <SectionTitle>
              Mesmo trabalho. <Hl>Outra percepção.</Hl>
            </SectionTitle>
            <p className="mt-6 text-lg text-muted-foreground">
              Fábio Passos forja facas artesanais em aço damasco em Canoas (RS). Antes, todo o trabalho
              dependia do Instagram. Hoje ele tem uma vitrine à altura das peças.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
            <div className="reveal">
              <BeforeAfter />
            </div>
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="reveal" style={delay(1)}>
                  <ListCol title="Antes · só Instagram" items={ANTES} />
                </div>
                <div className="reveal" style={delay(2)}>
                  <ListCol title="Depois · com site" items={DEPOIS} good />
                </div>
              </div>
              <div className="reveal grid grid-cols-2 gap-3 md:grid-cols-4" style={delay(3)}>
                {NUMEROS.map(([n, l]) => (
                  <div key={l} className="glass rounded-2xl p-4">
                    <p className="text-brand-gradient text-3xl font-extrabold">{n}</p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
              <div className="reveal flex flex-wrap gap-3" style={delay(4)}>
                <CtaButton href="https://www.fabiopassoscutelaria.com">
                  Ver o site no ar <ArrowUpRight className="h-4 w-4" />
                </CtaButton>
              </div>
            </div>
          </div>
        </section>

        {/* TIPOS DE SISTEMA */}
        <section id="sistemas" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <div className="reveal max-w-2xl">
            <Eyebrow>O que a gente constrói</Eyebrow>
            <SectionTitle>
              Uma solução para <Hl>cada etapa do negócio.</Hl>
            </SectionTitle>
            <p className="mt-6 text-lg text-muted-foreground">
              Do primeiro site ao sistema que organiza suas vendas. Tudo feito sob medida, com a sua cara.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUCOES.map((s, i) => (
              <article key={s.id} className="glass card-lift reveal group flex flex-col rounded-3xl p-6" style={delay(i % 4)}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-lilac/30 bg-violet/15 text-lilac shadow-[0_0_24px_-6px_rgb(124_92_245/70%)]">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-5 space-y-2 text-[0.8rem]">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lilac" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/comecar"
                  search={{ tipo: s.id }}
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-lilac transition-colors group-hover:text-white"
                >
                  Quero esse <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-12">
          <div className="glass-strong reveal relative overflow-hidden rounded-[2rem] p-8 text-center md:p-14">
            <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-violet/35 blur-3xl" />
            <div className="relative">
              <SectionTitle className="mx-auto max-w-2xl">
                Não sabe qual escolher? <Hl>A gente te ajuda.</Hl>
              </SectionTitle>
              <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground">
                Conte um pouco sobre o seu negócio e indicamos o caminho certo.
              </p>
              <div className="mt-9 flex justify-center">
                <StartButton>
                  Começar um projeto <ArrowRight className="h-4 w-4" />
                </StartButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
