import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Check, Copy, Instagram, Mail } from "lucide-react";
import { Eyebrow, Hl, SiteFooter, SiteHeader, WhatsAppIcon } from "@/components/hm";
import { SOLUCOES } from "@/lib/solucoes";
import { CONTACT_EMAIL, INSTAGRAM_DM_URL, INSTAGRAM_USER, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";

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

const PRAZOS = ["Sem pressa", "Em até 1 mês", "Urgente"];
const NAO_SEI = "Ainda não sei";

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
  const { tipo } = Route.useSearch();
  const inicial = SOLUCOES.find((s) => s.id === tipo)?.title;

  const [tipos, setTipos] = useState<string[]>(inicial ? [inicial] : []);
  const [nome, setNome] = useState("");
  const [negocio, setNegocio] = useState("");
  const [link, setLink] = useState("");
  const [ideia, setIdeia] = useState("");
  const [prazo, setPrazo] = useState("");
  const [aviso, setAviso] = useState("");

  const toggle = (t: string) => setTipos((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  // Texto que vai pronto para o WhatsApp, e-mail ou direct. Nenhum campo é
  // obrigatório: entra só o que a pessoa preencheu, para não travar o contato.
  const mensagem = () => {
    const detalhes = [
      nome.trim() && `Nome: ${nome.trim()}`,
      negocio.trim() && `Negócio: ${negocio.trim()}`,
      link.trim() && `Instagram/site atual: ${link.trim()}`,
      tipos.length > 0 && `O que preciso: ${tipos.join(", ")}`,
      prazo && `Prazo: ${prazo}`,
      ideia.trim() && `\nSobre a ideia: ${ideia.trim()}`,
    ].filter(Boolean);
    return ["Olá! Quero fazer um orçamento com a HM Dev Solutions.", ...(detalhes.length ? ["", ...detalhes] : [])].join("\n");
  };

  const enviar = async (canal: "whatsapp" | "email" | "instagram") => {
    setAviso("");
    const texto = mensagem();
    const assunto = ["Orçamento", negocio.trim() || nome.trim()].filter(Boolean).join(" – ");
    if (canal === "whatsapp") {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
    } else if (canal === "email") {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(texto)}`;
    } else {
      // O Instagram não aceita texto pronto no link: copiamos para a pessoa colar no direct
      try {
        await navigator.clipboard.writeText(texto);
        setAviso("Mensagem copiada! Cole no direct que acabou de abrir.");
      } catch {
        setAviso("Abrimos o direct. Conte lá o que você escreveu aqui.");
      }
      window.open(INSTAGRAM_DM_URL, "_blank", "noopener");
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void enviar(WHATSAPP_NUMBER ? "whatsapp" : CONTACT_EMAIL ? "email" : "instagram");
  };

  const principal = WHATSAPP_NUMBER
    ? { icon: <WhatsAppIcon className="h-4 w-4" />, label: "Enviar pelo WhatsApp" }
    : CONTACT_EMAIL
      ? { icon: <Mail className="h-4 w-4" />, label: "Enviar por e-mail" }
      : { icon: <Copy className="h-4 w-4" />, label: "Copiar e abrir o direct" };

  return (
    <div className="overflow-x-hidden">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Lado esquerdo: chamada e o que acontece depois */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="hero-in">
              <Eyebrow>Começar um projeto</Eyebrow>
            </div>
            <h1 className="hero-in mt-6 text-5xl font-extrabold leading-[1.03] tracking-tight md:text-6xl" style={{ animationDelay: "120ms" }}>
              Vamos tirar sua ideia <Hl>do papel.</Hl>
            </h1>
            <p className="hero-in mt-6 text-lg text-muted-foreground" style={{ animationDelay: "240ms" }}>
              Leva menos de 2 minutos e nenhum campo é obrigatório: preencha só o que quiser e a
              mensagem chega pronta para a gente.
            </p>
            <ol className="hero-in mt-10 space-y-5" style={{ animationDelay: "360ms" }}>
              {[
                ["Você conta a ideia", "Sem termos técnicos: fale do seu negócio como falaria com um amigo."],
                ["A gente responde", "Tiramos dúvidas e indicamos a melhor solução para o seu caso."],
                ["Orçamento sob medida", "Você recebe a proposta e decide sem compromisso."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="font-mono text-sm text-lilac">0{i + 1}</span>
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Formulário */}
          <form onSubmit={onSubmit} noValidate className="glass-strong hero-in space-y-8 rounded-[2rem] p-6 md:p-10" style={{ animationDelay: "300ms" }}>
            <Step n="01" title="O que você precisa?">
              <div className="flex flex-wrap gap-2.5">
                {SOLUCOES.map((s) => (
                  <Chip key={s.id} active={tipos.includes(s.title)} onClick={() => toggle(s.title)}>
                    {s.title}
                  </Chip>
                ))}
                <Chip active={tipos.includes(NAO_SEI)} onClick={() => toggle(NAO_SEI)}>
                  {NAO_SEI}
                </Chip>
              </div>
            </Step>

            <Step n="02" title="Sobre você">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-2 block text-muted-foreground">Seu nome</span>
                  <input className={inputCls} value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="name" placeholder="Como podemos te chamar?" />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-muted-foreground">Nome do negócio</span>
                  <input className={inputCls} value={negocio} onChange={(e) => setNegocio(e.target.value)} autoComplete="organization" placeholder="Ex.: Studio Bella" />
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="mb-2 block text-muted-foreground">Instagram ou site atual</span>
                  <input className={inputCls} value={link} onChange={(e) => setLink(e.target.value)} placeholder="@seunegocio ou seunegocio.com.br" />
                </label>
              </div>
            </Step>

            <Step n="03" title="Conte sua ideia">
              <textarea
                className={`${inputCls} min-h-32 resize-y`}
                value={ideia}
                onChange={(e) => setIdeia(e.target.value)}
                placeholder="O que você vende, quem são seus clientes e o que espera do projeto…"
              />
              <p className="mb-3 mt-5 text-sm text-muted-foreground">Para quando?</p>
              <div className="flex flex-wrap gap-2.5">
                {PRAZOS.map((p) => (
                  <Chip key={p} active={prazo === p} onClick={() => setPrazo(prazo === p ? "" : p)}>
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
                    <Mail className="h-4 w-4" /> Por e-mail
                  </button>
                )}
                {(WHATSAPP_NUMBER || CONTACT_EMAIL) && (
                  <button type="button" onClick={() => void enviar("instagram")} className="glass card-lift inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm">
                    <Instagram className="h-4 w-4" /> Pelo direct
                  </button>
                )}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Nada fica salvo no site: a mensagem abre pronta no aplicativo que você escolher
                {WHATSAPP_NUMBER || CONTACT_EMAIL ? "" : ` (direct do @${INSTAGRAM_USER})`}.
              </p>
            </div>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
