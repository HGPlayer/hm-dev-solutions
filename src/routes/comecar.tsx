import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Check, Copy, Instagram, Mail } from "lucide-react";
import { Eyebrow, Hl, SiteFooter, SiteHeader, WhatsAppIcon } from "@/components/hm";
import { SOLUCOES } from "@/lib/solucoes";
import { CONTACT_EMAIL, INSTAGRAM_DM_URL, INSTAGRAM_USER, SITE_URL, WHATSAPP_NUMBER, whatsappUrl } from "@/lib/site";
import { useDocTitle, useLang } from "@/lib/i18n";

export const Route = createFileRoute("/comecar")({
  validateSearch: (search: Record<string, unknown>): { tipo?: string } =>
    typeof search["tipo"] === "string" ? { tipo: search["tipo"] } : {},
  head: () => ({
    meta: [
      { title: "Começar um projeto | HM Dev Solutions" },
      {
        name: "description",
        content: "Conte sobre o seu negócio e o que você precisa. A gente responde com um orçamento sob medida.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/comecar` }],
  }),
  component: Comecar,
});

// "Ainda não sei" é guardado por este código, como os tipos de sistema,
// para a escolha continuar marcada se a pessoa trocar o idioma
const NAO_SEI = "unsure";

const inputCls =
  "w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/30 focus:border-lilac/60 focus:bg-white/[0.07]";

function Step({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div className="border-t border-white/10 pt-8 first:border-0 first:pt-0">
      <fieldset className="min-w-0">
        <legend className="flex items-center gap-3 text-lg font-semibold">
          <span className="font-mono text-sm text-lilac">{n}</span> {title}
        </legend>
        <div className="mt-5">{children}</div>
      </fieldset>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
        active
          ? "border-lilac/70 bg-violet/35 text-white shadow-[0_0_20px_-6px_rgb(124_92_245/80%)]"
          : "border-white/12 bg-white/[0.03] text-muted-foreground hover:border-white/25 hover:text-white"
      }`}
    >
      {active && <Check className="h-3.5 w-3.5" />}
      {children}
    </button>
  );
}

function Comecar() {
  const { t: all } = useLang();
  const t = all.start;
  useDocTitle(t.title);
  const { tipo } = Route.useSearch();

  const [tipos, setTipos] = useState<string[]>(tipo && all.sol[tipo] ? [tipo] : []);
  const [nome, setNome] = useState("");
  const [negocio, setNegocio] = useState("");
  const [link, setLink] = useState("");
  const [ideia, setIdeia] = useState("");
  const [prazo, setPrazo] = useState<number | null>(null);
  const [aviso, setAviso] = useState("");

  const toggle = (id: string) => setTipos((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  const nomeTipo = (id: string) => (id === NAO_SEI ? t.notSure : all.sol[id]?.title ?? id);

  // Texto que vai pronto para o WhatsApp, e-mail ou direct. Nenhum campo é
  // obrigatório: entra só o que a pessoa preencheu, para não travar o contato.
  const mensagem = () => {
    const m = t.msg;
    const detalhes = [
      nome.trim() && `${m.name}: ${nome.trim()}`,
      negocio.trim() && `${m.business}: ${negocio.trim()}`,
      link.trim() && `${m.link}: ${link.trim()}`,
      tipos.length > 0 && `${m.need}: ${tipos.map(nomeTipo).join(", ")}`,
      prazo !== null && `${m.deadline}: ${t.deadlines[prazo]}`,
      ideia.trim() && `\n${m.idea}: ${ideia.trim()}`,
    ].filter(Boolean);
    return [m.hello, ...(detalhes.length ? ["", ...detalhes] : [])].join("\n");
  };

  const enviar = async (canal: "whatsapp" | "email" | "instagram") => {
    setAviso("");
    const texto = mensagem();
    const assunto = [t.msg.subject, negocio.trim() || nome.trim()].filter(Boolean).join(" – ");
    if (canal === "whatsapp") {
      window.open(whatsappUrl(texto), "_blank", "noopener");
    } else if (canal === "email") {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(texto)}`;
    } else {
      // O Instagram não aceita texto pronto no link: copiamos para a pessoa colar no direct
      try {
        await navigator.clipboard.writeText(texto);
        setAviso(t.copied);
      } catch {
        setAviso(t.opened);
      }
      window.open(INSTAGRAM_DM_URL, "_blank", "noopener");
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void enviar(WHATSAPP_NUMBER ? "whatsapp" : CONTACT_EMAIL ? "email" : "instagram");
  };

  const principal = WHATSAPP_NUMBER
    ? { icon: <WhatsAppIcon className="h-4 w-4" />, label: t.sendWhatsapp }
    : CONTACT_EMAIL
      ? { icon: <Mail className="h-4 w-4" />, label: t.sendEmail }
      : { icon: <Copy className="h-4 w-4" />, label: t.sendDirect };

  return (
    <div className="overflow-x-hidden">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Lado esquerdo: chamada e o que acontece depois */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="hero-in">
              <Eyebrow>{t.eyebrow}</Eyebrow>
            </div>
            <h1 className="hero-in mt-6 text-5xl font-extrabold leading-[1.03] tracking-tight md:text-6xl" style={{ animationDelay: "120ms" }}>
              {t.a}
              <Hl>{t.hl}</Hl>
            </h1>
            <p className="hero-in mt-6 text-lg text-muted-foreground" style={{ animationDelay: "240ms" }}>
              {t.text}
            </p>
            <ol className="hero-in mt-10 space-y-5" style={{ animationDelay: "360ms" }}>
              {t.steps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-sm text-lilac">0{i + 1}</span>
                  <div>
                    <p className="font-semibold">{s.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Formulário */}
          <form onSubmit={onSubmit} noValidate className="glass-strong hero-in space-y-8 rounded-[2rem] p-6 md:p-10" style={{ animationDelay: "300ms" }}>
            <Step n="01" title={t.q1}>
              <div className="flex flex-wrap gap-2.5">
                {[...SOLUCOES.map((s) => s.id), NAO_SEI].map((id) => (
                  <Chip key={id} active={tipos.includes(id)} onClick={() => toggle(id)}>
                    {nomeTipo(id)}
                  </Chip>
                ))}
              </div>
            </Step>

            <Step n="02" title={t.q2}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-2 block text-muted-foreground">{t.name}</span>
                  <input className={inputCls} value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="name" placeholder={t.namePh} />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-muted-foreground">{t.business}</span>
                  <input className={inputCls} value={negocio} onChange={(e) => setNegocio(e.target.value)} autoComplete="organization" placeholder={t.businessPh} />
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="mb-2 block text-muted-foreground">{t.link}</span>
                  <input className={inputCls} value={link} onChange={(e) => setLink(e.target.value)} placeholder={t.linkPh} />
                </label>
              </div>
            </Step>

            <Step n="03" title={t.q3}>
              <textarea
                className={`${inputCls} min-h-32 resize-y`}
                value={ideia}
                onChange={(e) => setIdeia(e.target.value)}
                placeholder={t.ideaPh}
              />
              <p className="mb-3 mt-5 text-sm text-muted-foreground">{t.when}</p>
              <div className="flex flex-wrap gap-2.5">
                {t.deadlines.map((p, i) => (
                  <Chip key={i} active={prazo === i} onClick={() => setPrazo(prazo === i ? null : i)}>
                    {p}
                  </Chip>
                ))}
              </div>
            </Step>

            <div className="border-t border-white/10 pt-8">
              {aviso && (
                <p role="status" className="mb-4 rounded-2xl border border-lilac/30 bg-violet/15 px-4 py-3 text-sm">
                  {aviso}
                </p>
              )}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button type="submit" className="btn-glow bg-brand-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white sm:w-auto">
                  {principal.icon} {principal.label}
                </button>
                {WHATSAPP_NUMBER && CONTACT_EMAIL && (
                  <button type="button" onClick={() => void enviar("email")} className="glass card-lift inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm">
                    <Mail className="h-4 w-4" /> {t.byEmail}
                  </button>
                )}
                {(WHATSAPP_NUMBER || CONTACT_EMAIL) && (
                  <button type="button" onClick={() => void enviar("instagram")} className="glass card-lift inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm">
                    <Instagram className="h-4 w-4" /> {t.byDirect}
                  </button>
                )}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                {t.note}
                {WHATSAPP_NUMBER || CONTACT_EMAIL ? "" : ` (@${INSTAGRAM_USER})`}
              </p>
            </div>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
