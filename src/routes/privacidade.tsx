import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CONTACT_EMAIL, INSTAGRAM_URL, INSTAGRAM_USER, SITE_URL } from "@/lib/site";
import { useDocTitle, useLang } from "@/lib/i18n";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Privacidade e cookies | HM Dev Solutions" },
      {
        name: "description",
        content: "Como o site da HM Dev Solutions trata seus dados e por que não usa cookies.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacidade` }],
  }),
  component: Privacidade,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-lilac">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Privacidade() {
  const { t: all } = useLang();
  const t = all.privacy;
  useDocTitle(t.title);

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="glass rounded-[2rem] p-8 md:p-12">
        <Link to="/" className="text-[0.7rem] uppercase tracking-[0.2em] text-lilac hover:underline">
          {t.back}
        </Link>
        <h1 className="mt-8 text-4xl font-extrabold leading-tight">{t.h1}</h1>
        <p className="mt-3 text-xs text-muted-foreground">{t.updated}</p>

        {t.sections.map((s) => (
          <Section key={s.title} title={s.title}>
            {s.p.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Section>
        ))}

        <Section title={t.rightsTitle}>
          <p>
            {t.rights}{" "}
            {CONTACT_EMAIL ? (
              <>
                {t.writeTo}{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-lilac hover:underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </>
            ) : (
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-lilac hover:underline">
                @{INSTAGRAM_USER}
              </a>
            )}
          </p>
        </Section>
      </div>
    </main>
  );
}
