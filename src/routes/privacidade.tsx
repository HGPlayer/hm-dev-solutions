import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CONTACT_EMAIL, INSTAGRAM_URL, INSTAGRAM_USER, SITE_URL } from "@/lib/site";

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
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="glass rounded-[2rem] p-8 md:p-12">
        <Link to="/" className="text-[0.7rem] uppercase tracking-[0.2em] text-lilac hover:underline">
          ← Voltar ao site
        </Link>
        <h1 className="mt-8 text-4xl font-extrabold leading-tight">Privacidade e cookies</h1>
        <p className="mt-3 text-xs text-muted-foreground">Atualizado em 8 de novembro de 2026</p>

        <Section title="Resumo">
          <p>
            Este site apresenta os serviços da HM Dev Solutions. Ele não cria contas, não vende nada
            on-line e não guarda informações sobre quem o visita.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            Este site <strong className="text-foreground">não usa cookies</strong>: nem de propaganda,
            nem de estatística, nem de redes sociais. Por isso, não pedimos que você aceite cookies.
          </p>
          <p>
            O navegador guarda temporariamente a posição em que você estava na página, para voltar ao
            mesmo ponto ao recarregar. Essa informação fica só no seu aparelho, é apagada quando você
            fecha a aba e não é enviada para ninguém.
          </p>
        </Section>

        <Section title="Contato">
          <p>
            Os botões de contato e o formulário “Começar um projeto” abrem o WhatsApp, o Instagram
            ou o seu programa de e-mail com a mensagem pronta. Nada é
            enviado pelo site: a conversa acontece direto nesses aplicativos, e você decide o que
            quer mandar. As informações que você enviar são usadas apenas para responder e preparar
            o seu orçamento, e não são vendidas nem repassadas a terceiros.
          </p>
        </Section>

        <Section title="Hospedagem">
          <p>
            O site é hospedado pela Vercel. Como em qualquer site, o servidor da hospedagem registra
            dados técnicos de acesso, como o endereço IP e o navegador usado, para manter o serviço
            funcionando e protegido contra ataques.
          </p>
        </Section>

        <Section title="Links para outros sites">
          <p>
            Os links para o WhatsApp, o Instagram e os sites do portfólio levam a páginas de outras
            empresas ou clientes, que têm as próprias regras de privacidade.
          </p>
        </Section>

        <Section title="Seus direitos">
          <p>
            Pela Lei Geral de Proteção de Dados (LGPD), você pode pedir para saber quais dados seus
            temos, corrigi-los ou apagá-los.
            {CONTACT_EMAIL ? (
              <>
                {" "}
                Para isso, escreva para{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-lilac hover:underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </>
            ) : (
              <>
                {" "}
                Para isso, fale com a gente no Instagram{" "}
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-lilac hover:underline">
                  @{INSTAGRAM_USER}
                </a>
                .
              </>
            )}
          </p>
        </Section>
      </div>
    </main>
  );
}
