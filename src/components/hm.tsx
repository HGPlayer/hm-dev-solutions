// Peças compartilhadas pelas páginas do site: cabeçalho, rodapé, botões e títulos.
import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Instagram, Mail, Menu, X } from "lucide-react";
import { CONTACT_EMAIL, INSTAGRAM_URL, INSTAGRAM_USER, WHATSAPP_URL } from "@/lib/site";

const NAV = [
  ["Serviços", "/#servicos"],
  ["Soluções", "/solucoes"],
  ["Resultados", "/solucoes#resultados"],
  ["Portfólio", "/#portfolio"],
  ["Contato", "/#contato"],
] as const;

// Mostra com animação os elementos com a classe "reveal" quando entram na tela.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
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

export const delay = (i: number) => ({ transitionDelay: `${i * 110}ms` });

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.45-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.65l6.04-1.58a11.3 11.3 0 0 0 5.43 1.38h.01c6.26 0 11.36-5.1 11.37-11.36 0-3.04-1.18-5.89-3.33-8.04" />
    </svg>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-lilac/70" />
      {children}
    </p>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl ${className}`}>
      {children}
    </h2>
  );
}

export function Hl({ children }: { children: ReactNode }) {
  return <span className="text-brand-gradient">{children}</span>;
}

export function CtaButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
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

export function GhostButton({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
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

// Botão que leva à página "Começar um projeto" (navegação interna, sem recarregar)
export function StartButton({ children = "Começar um projeto", className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <Link
      to="/comecar"
      className={`btn-glow bg-brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white ${className}`}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 md:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="HM Dev Solutions – início">
          <img src="/logo-hm.png" alt="" className="h-8 w-auto" />
          <span className="hidden text-[0.72rem] font-medium tracking-[0.28em] sm:block">HM DEV SOLUTIONS</span>
        </Link>
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
          <Link
            to="/comecar"
            className="btn-glow bg-brand-gradient hidden rounded-full px-5 py-2 text-[0.8rem] font-semibold md:inline-block"
          >
            Começar um projeto
          </Link>
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
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-white/5"
              >
                {l}
              </a>
            ))}
            <Link
              to="/comecar"
              onClick={() => setOpen(false)}
              className="bg-brand-gradient mt-2 block rounded-full px-5 py-3 text-center text-sm font-semibold"
            >
              Começar um projeto
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo-hm.png" alt="HM Dev Solutions" className="h-9 w-auto" />
          <div>
            <p className="text-sm font-medium tracking-[0.25em]">HM DEV SOLUTIONS</p>
            <p className="text-xs text-muted-foreground">Sites e sistemas que trazem clientes</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <Link to="/solucoes" className="hover:text-white">
            Soluções
          </Link>
          <Link to="/comecar" className="hover:text-white">
            Começar um projeto
          </Link>
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
  );
}
