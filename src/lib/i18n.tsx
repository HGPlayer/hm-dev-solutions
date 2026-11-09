// Traduções do site (português, inglês e espanhol).
// Todo texto que aparece na tela vem daqui. Para mudar um texto, altere nas
// três línguas. O idioma escolhido fica salvo no navegador do visitante.
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en" | "es";
export const LANGS: { code: Lang; label: string; html: string }[] = [
  { code: "pt", label: "Português", html: "pt-BR" },
  { code: "en", label: "English", html: "en" },
  { code: "es", label: "Español", html: "es" },
];

const pt = {
  whatsappText: "Olá! Vi o site da HM Dev Solutions e quero um orçamento.",
  langLabel: "Idioma",
  nav: {
    services: "Serviços",
    solutions: "Soluções",
    results: "Resultados",
    portfolio: "Portfólio",
    contact: "Contato",
    start: "Começar um projeto",
    quote: "Orçamento",
    menu: "Menu",
    home: "HM Dev Solutions – início",
  },
  footer: {
    tagline: "Sites e sistemas sob medida para o seu negócio ser encontrado e contratado.",
    navigation: "Navegação",
    contact: "Contato",
    home: "Início",
    privacy: "Privacidade",
    rights: "Todos os direitos reservados.",
  },
  errors: {
    notFoundTitle: "Página não encontrada",
    notFoundText: "A página que você procura não existe ou mudou de endereço.",
    errorTitle: "A página não carregou",
    errorText: "Algo deu errado do nosso lado. Tente recarregar a página ou volte ao início.",
    retry: "Tentar de novo",
    back: "Voltar ao início",
  },
  sol: {
    site: {
      title: "Site profissional",
      text: "A vitrine do seu negócio: quem você é, o que faz e como falar com você.",
      features: ["Design com a sua marca", "Rápido e responsivo", "Preparado para o Google"],
    },
    landing: {
      title: "Landing page",
      text: "Uma página focada em uma oferta, feita para transformar visita em contato.",
      features: ["Ideal para anúncios", "Botão direto para WhatsApp", "Lançamentos e promoções"],
    },
    ecommerce: {
      title: "E-commerce",
      text: "Sua loja virtual aberta 24 horas, com catálogo, carrinho e pagamento on-line.",
      features: ["Pix e cartão", "Controle de estoque", "Cálculo de frete"],
    },
    crm: {
      title: "CRM",
      text: "Organize clientes, orçamentos e vendas num só lugar, sem planilha perdida.",
      features: ["Funil de vendas", "Histórico de cada cliente", "Lembretes de retorno"],
    },
    agendamento: {
      title: "Agendamento on-line",
      text: "O cliente escolhe o horário sozinho e você recebe a agenda organizada.",
      features: ["Horários em tempo real", "Confirmação automática", "Ideal para salões e clínicas"],
    },
    catalogo: {
      title: "Catálogo e cardápio digital",
      text: "Produtos ou pratos com fotos e preços, com pedido enviado direto para o WhatsApp.",
      features: ["Fácil de atualizar", "Abre por link ou QR Code", "Pedido no WhatsApp"],
    },
    painel: {
      title: "Painel administrativo",
      text: "Um sistema sob medida para acompanhar números, pedidos e equipe.",
      features: ["Relatórios e gráficos", "Acesso por usuário", "Feito para o seu processo"],
    },
    automacao: {
      title: "Automações e integrações",
      text: "Conecte site, WhatsApp, planilhas e e-mail para o trabalho repetitivo andar sozinho.",
      features: ["Menos tarefa manual", "Avisos automáticos", "Integra com o que você já usa"],
    },
  } as Record<string, { title: string; text: string; features: string[] }>,
  home: {
    title: "HM Dev Solutions – Sites profissionais que trazem clientes",
    hero: {
      eyebrow: "Presença digital",
      a: "Seu negócio está ",
      hl: "no Instagram.",
      sub: "Mas seu cliente consegue te encontrar ",
      subStrong: "e te contratar?",
      seePortfolio: "Ver portfólio",
      questions: ["O que você oferece?", "Quanto custa?", "Como falo com você?"],
      lost: "Se o cliente precisa perguntar, você já pode ter perdido a venda.",
    },
    phone: { follow: "Seguir", message: "Mensagem", highlights: ["Projetos", "Serviços", "Preços", "Contato"] },
    problem: {
      eyebrow: "Por que ter um site",
      a: "Instagram é alugado. ",
      hl: "Site é seu.",
      text: "Se o algoritmo muda, seu alcance cai. Seu site continua no ar, trabalhando por você.",
      pillA: "O Instagram atrai. ",
      pillB: "O site converte.",
      caption: "Comparação entre ter só Instagram e ter um site",
      onlyIg: "Só Instagram",
      withSite: "Com site",
      rows: [
        "Aparece no Google",
        "Serviços e preços organizados",
        "Orçamento 24h por dia",
        "Passa mais credibilidade",
        "Clientes e conteúdo são seus",
      ],
      no: "Não",
      yes: "Sim",
    },
    services: {
      eyebrow: "Site profissional",
      a: "Seu site é a vitrine ",
      hl: "que nunca fecha.",
      text: "Serviços, preços e contato em um só lugar, 24 horas por dia.",
      pills: ["Rápido", "Responsivo", "Aparece no Google"],
      items: [
        { alt: "Notebook com formas 3D e o texto Crie seu site", title: "Site profissional", text: "Sua vitrine 24 horas: serviços, fotos e contato em um só lugar, no celular e no computador." },
        { alt: "Arte: seja encontrado na hora certa", title: "Apareça no Google", text: "Site preparado para ser encontrado por quem já está procurando o que você vende." },
        { alt: "Arte: aumente suas vendas, celular com notificação de venda", title: "Mais contatos e vendas", text: "Botões de WhatsApp e orçamento bem posicionados, que transformam visita em cliente." },
        { alt: "Arte: por um preço acessível", title: "Preço que cabe no bolso", text: "Orçamento sob medida para o tamanho do seu negócio, sem mensalidade escondida." },
      ],
      moreTitle: "Além de sites, sistemas completos.",
      moreLink: "Ver soluções e resultados",
    },
    portfolio: {
      eyebrow: "Portfólio",
      a: "Projetos ",
      hl: "no ar.",
      text: "Cada site é feito sob medida para a marca e para o cliente de quem contrata.",
      frameAria: "Abrir o site Fábio Passos Cutelaria",
      imgAlt: "Página inicial do site Fábio Passos Cutelaria",
      mobileAlt: "O mesmo site aberto no celular",
      hover: "Passe o mouse no site para ver a página inteira",
      featured: "Projeto em destaque",
      desc: "Cuteleiro de Canoas (RS) que forja facas artesanais em aço damasco. O trabalho dele vivia no Instagram; agora tem uma vitrine elegante, à altura das peças, com galeria de fotos, história e contato direto para encomendas.",
      features: [
        "Design sob medida, com a identidade da marca",
        "Galeria com mais de 40 fotos das peças",
        "Funciona perfeitamente no celular",
        "Domínio próprio e preparado para o Google",
      ],
      live: "Ver site no ar",
      nextTitle: "Seu negócio pode ser o próximo.",
      nextText: "Vamos conversar sobre o site que você precisa.",
      nextBtn: "Quero aparecer aqui",
    },
    how: {
      eyebrow: "Como funciona",
      a: "Seu site no ar em ",
      hl: "3 passos simples.",
      text: "Você explica a ideia. A gente cuida do resto.",
      steps: [
        { t: "Conversa", d: "Entendemos seu negócio, seus clientes e seu objetivo." },
        { t: "Design e código", d: "Um site com a cara da sua marca, rápido e responsivo." },
        { t: "No ar", d: "Publicamos e deixamos pronto para gerar contatos." },
      ],
    },
    contact: {
      eyebrow: "Seu próximo passo",
      a: "Quer um site que ",
      hl: "traz clientes?",
      text: "Peça seu orçamento sem compromisso. A gente responde rapidinho.",
      orDirect: "Ou fale direto",
      business: "@seunegocio",
      reply: "Te chamei no direct! ✓",
    },
  },
  solutions: {
    title: "Soluções e resultados | HM Dev Solutions",
    eyebrow: "Soluções e resultados",
    a: "Do Instagram para um ",
    hl: "sistema que trabalha por você.",
    text: "Veja a diferença na prática e escolha a solução certa para o seu negócio.",
    see: "Ver soluções",
    ba: {
      eyebrow: "Antes e depois",
      a: "Mesmo trabalho. ",
      hl: "Outra percepção.",
      text: "Fábio Passos forja facas artesanais em aço damasco em Canoas (RS). Antes, todo o trabalho dependia do Instagram. Hoje ele tem uma vitrine à altura das peças.",
      beforeTitle: "Antes · só Instagram",
      afterTitle: "Depois · com site",
      before: [
        "Fotos das peças espalhadas no feed, misturadas com outros posts",
        "Cliente precisava perguntar preço e contato pelo direct",
        "Fora do Instagram, quase ninguém encontrava o trabalho",
        "Alcance dependia do humor do algoritmo",
      ],
      after: [
        "Galeria organizada com mais de 40 fotos das facas",
        "História, coleção e contato em uma só página",
        "Domínio próprio: fabiopassoscutelaria.com",
        "Site preparado para aparecer no Google",
      ],
      numbers: [
        { n: "40+", l: "fotos organizadas em galeria" },
        { n: "24h", l: "de vitrine aberta, todos os dias" },
        { n: "1", l: "domínio próprio com a marca" },
        { n: "100%", l: "adaptado para celular" },
      ],
      live: "Ver o site no ar",
      beforeLabel: "Antes",
      afterLabel: "Depois",
      drag: "Arraste para comparar antes e depois",
      hint: "Arraste para comparar · “Antes” é uma ilustração com fotos reais do Fábio",
      afterAlt: "Depois: site Fábio Passos Cutelaria aberto no celular",
      dms: ["Quanto custa essa faca?", "Faz entrega para SP?", "Tem catálogo com preços?"],
      noReply: "sem resposta",
      follow: "Seguir",
      message: "Mensagem",
    },
    systems: {
      eyebrow: "O que a gente constrói",
      a: "Uma solução para ",
      hl: "cada etapa do negócio.",
      text: "Do primeiro site ao sistema que organiza suas vendas. Tudo feito sob medida, com a sua cara.",
      want: "Quero esse",
    },
    final: {
      a: "Não sabe qual escolher? ",
      hl: "A gente te ajuda.",
      text: "Conte um pouco sobre o seu negócio e indicamos o caminho certo.",
    },
  },
  start: {
    title: "Começar um projeto | HM Dev Solutions",
    eyebrow: "Começar um projeto",
    a: "Vamos tirar sua ideia ",
    hl: "do papel.",
    text: "Leva menos de 2 minutos e nenhum campo é obrigatório: preencha só o que quiser e a mensagem chega pronta para a gente.",
    steps: [
      { t: "Você conta a ideia", d: "Sem termos técnicos: fale do seu negócio como falaria com um amigo." },
      { t: "A gente responde", d: "Tiramos dúvidas e indicamos a melhor solução para o seu caso." },
      { t: "Orçamento sob medida", d: "Você recebe a proposta e decide sem compromisso." },
    ],
    q1: "O que você precisa?",
    notSure: "Ainda não sei",
    q2: "Sobre você",
    name: "Seu nome",
    namePh: "Como podemos te chamar?",
    business: "Nome do negócio",
    businessPh: "Ex.: Studio Bella",
    link: "Instagram ou site atual",
    linkPh: "@seunegocio ou seunegocio.com.br",
    q3: "Conte sua ideia",
    ideaPh: "O que você vende, quem são seus clientes e o que espera do projeto…",
    when: "Para quando?",
    deadlines: ["Sem pressa", "Em até 1 mês", "Urgente"],
    sendWhatsapp: "Enviar pelo WhatsApp",
    sendEmail: "Enviar por e-mail",
    sendDirect: "Copiar e abrir o direct",
    byEmail: "Por e-mail",
    byDirect: "Pelo direct",
    note: "Nada fica salvo no site: a mensagem abre pronta no aplicativo que você escolher.",
    copied: "Mensagem copiada! Cole no direct que acabou de abrir.",
    opened: "Abrimos o direct. Conte lá o que você escreveu aqui.",
    msg: {
      hello: "Olá! Quero fazer um orçamento com a HM Dev Solutions.",
      name: "Nome",
      business: "Negócio",
      link: "Instagram/site atual",
      need: "O que preciso",
      deadline: "Prazo",
      idea: "Sobre a ideia",
      subject: "Orçamento",
    },
  },
  privacy: {
    title: "Privacidade e cookies | HM Dev Solutions",
    back: "← Voltar ao site",
    h1: "Privacidade e cookies",
    updated: "Atualizado em 8 de novembro de 2026",
    sections: [
      {
        title: "Resumo",
        p: ["Este site apresenta os serviços da HM Dev Solutions. Ele não cria contas, não vende nada on-line e não guarda informações sobre quem o visita."],
      },
      {
        title: "Cookies",
        p: [
          "Este site não usa cookies: nem de propaganda, nem de estatística, nem de redes sociais. Por isso, não pedimos que você aceite cookies.",
          "O navegador guarda no seu aparelho o idioma que você escolheu e, temporariamente, a posição em que você estava na página. Essas informações não são enviadas para ninguém.",
        ],
      },
      {
        title: "Contato",
        p: [
          "Os botões de contato e o formulário “Começar um projeto” abrem o WhatsApp, o Instagram ou o seu programa de e-mail com a mensagem pronta. Nada é enviado pelo site: a conversa acontece direto nesses aplicativos, e você decide o que quer mandar. As informações que você enviar são usadas apenas para responder e preparar o seu orçamento, e não são vendidas nem repassadas a terceiros.",
        ],
      },
      {
        title: "Hospedagem",
        p: [
          "O site é hospedado pela Vercel. Como em qualquer site, o servidor da hospedagem registra dados técnicos de acesso, como o endereço IP e o navegador usado, para manter o serviço funcionando e protegido contra ataques.",
        ],
      },
      {
        title: "Links para outros sites",
        p: [
          "Os links para o WhatsApp, o Instagram e os sites do portfólio levam a páginas de outras empresas ou clientes, que têm as próprias regras de privacidade.",
        ],
      },
    ],
    rightsTitle: "Seus direitos",
    rights: "Pela Lei Geral de Proteção de Dados (LGPD), você pode pedir para saber quais dados seus temos, corrigi-los ou apagá-los.",
    writeTo: "Para isso, escreva para",
  },
};

export type Dict = typeof pt;

const en: Dict = {
  whatsappText: "Hi! I saw the HM Dev Solutions website and I'd like a quote.",
  langLabel: "Language",
  nav: {
    services: "Services",
    solutions: "Solutions",
    results: "Results",
    portfolio: "Portfolio",
    contact: "Contact",
    start: "Start a project",
    quote: "Quote",
    menu: "Menu",
    home: "HM Dev Solutions – home",
  },
  footer: {
    tagline: "Custom websites and systems so your business gets found and hired.",
    navigation: "Navigation",
    contact: "Contact",
    home: "Home",
    privacy: "Privacy",
    rights: "All rights reserved.",
  },
  errors: {
    notFoundTitle: "Page not found",
    notFoundText: "The page you're looking for doesn't exist or has moved.",
    errorTitle: "The page didn't load",
    errorText: "Something went wrong on our side. Try reloading the page or go back home.",
    retry: "Try again",
    back: "Back to home",
  },
  sol: {
    site: {
      title: "Business website",
      text: "Your business showcase: who you are, what you do and how to reach you.",
      features: ["Designed around your brand", "Fast and responsive", "Ready for Google"],
    },
    landing: {
      title: "Landing page",
      text: "A single page focused on one offer, built to turn visitors into leads.",
      features: ["Great for ads", "Direct WhatsApp button", "Launches and promotions"],
    },
    ecommerce: {
      title: "E-commerce",
      text: "Your online store open 24/7, with catalog, cart and online payments.",
      features: ["Cards and instant payments", "Inventory control", "Shipping calculation"],
    },
    crm: {
      title: "CRM",
      text: "Keep clients, quotes and sales in one place, no more lost spreadsheets.",
      features: ["Sales pipeline", "Full client history", "Follow-up reminders"],
    },
    agendamento: {
      title: "Online booking",
      text: "Clients pick a time on their own and you get an organized schedule.",
      features: ["Real-time availability", "Automatic confirmation", "Ideal for salons and clinics"],
    },
    catalogo: {
      title: "Digital catalog and menu",
      text: "Products or dishes with photos and prices, with orders sent straight to WhatsApp.",
      features: ["Easy to update", "Opens via link or QR code", "Orders on WhatsApp"],
    },
    painel: {
      title: "Admin dashboard",
      text: "A custom system to track numbers, orders and your team.",
      features: ["Reports and charts", "Per-user access", "Built around your process"],
    },
    automacao: {
      title: "Automations and integrations",
      text: "Connect your site, WhatsApp, spreadsheets and email so repetitive work runs itself.",
      features: ["Less manual work", "Automatic alerts", "Works with the tools you use"],
    },
  },
  home: {
    title: "HM Dev Solutions – Professional websites that bring in clients",
    hero: {
      eyebrow: "Digital presence",
      a: "Your business is ",
      hl: "on Instagram.",
      sub: "But can your clients find you ",
      subStrong: "and hire you?",
      seePortfolio: "See portfolio",
      questions: ["What do you offer?", "How much does it cost?", "How do I reach you?"],
      lost: "If the client has to ask, you may have already lost the sale.",
    },
    phone: { follow: "Follow", message: "Message", highlights: ["Projects", "Services", "Prices", "Contact"] },
    problem: {
      eyebrow: "Why have a website",
      a: "Instagram is rented. ",
      hl: "Your website is yours.",
      text: "When the algorithm changes, your reach drops. Your website stays online, working for you.",
      pillA: "Instagram attracts. ",
      pillB: "Your website converts.",
      caption: "Comparison between having only Instagram and having a website",
      onlyIg: "Instagram only",
      withSite: "With a website",
      rows: [
        "Shows up on Google",
        "Organized services and prices",
        "Quotes 24 hours a day",
        "More credibility",
        "You own your clients and content",
      ],
      no: "No",
      yes: "Yes",
    },
    services: {
      eyebrow: "Professional website",
      a: "Your website is the shop window ",
      hl: "that never closes.",
      text: "Services, prices and contact in one place, 24 hours a day.",
      pills: ["Fast", "Responsive", "Shows up on Google"],
      items: [
        { alt: "Laptop with 3D shapes and the text Create your website", title: "Business website", text: "Your 24-hour showcase: services, photos and contact in one place, on mobile and desktop." },
        { alt: "Artwork: be found at the right time", title: "Show up on Google", text: "A website built to be found by people already searching for what you sell." },
        { alt: "Artwork: grow your sales, phone with a sale notification", title: "More leads and sales", text: "Well-placed WhatsApp and quote buttons that turn visitors into clients." },
        { alt: "Artwork: at an affordable price", title: "A price that fits", text: "A quote tailored to the size of your business, with no hidden monthly fees." },
      ],
      moreTitle: "Beyond websites, complete systems.",
      moreLink: "See solutions and results",
    },
    portfolio: {
      eyebrow: "Portfolio",
      a: "Projects ",
      hl: "live now.",
      text: "Every website is tailor-made for the brand and the clients of whoever hires us.",
      frameAria: "Open the Fábio Passos Cutelaria website",
      imgAlt: "Home page of the Fábio Passos Cutelaria website",
      mobileAlt: "The same website on a phone",
      hover: "Hover over the site to see the whole page",
      featured: "Featured project",
      desc: "A knifemaker from Canoas, Brazil, who forges handmade Damascus steel knives. His work used to live only on Instagram; now he has an elegant showcase worthy of his pieces, with a photo gallery, his story and direct contact for orders.",
      features: [
        "Custom design with the brand's identity",
        "Gallery with more than 40 photos",
        "Works perfectly on mobile",
        "Own domain and ready for Google",
      ],
      live: "Visit the live site",
      nextTitle: "Your business could be next.",
      nextText: "Let's talk about the website you need.",
      nextBtn: "I want to be here",
    },
    how: {
      eyebrow: "How it works",
      a: "Your website live in ",
      hl: "3 simple steps.",
      text: "You explain the idea. We take care of the rest.",
      steps: [
        { t: "Talk", d: "We get to know your business, your clients and your goals." },
        { t: "Design and code", d: "A website that looks like your brand, fast and responsive." },
        { t: "Live", d: "We publish it, ready to bring in leads." },
      ],
    },
    contact: {
      eyebrow: "Your next step",
      a: "Want a website that ",
      hl: "brings in clients?",
      text: "Ask for a free, no-commitment quote. We reply quickly.",
      orDirect: "Or reach us directly",
      business: "@yourbusiness",
      reply: "Sent you a DM! ✓",
    },
  },
  solutions: {
    title: "Solutions and results | HM Dev Solutions",
    eyebrow: "Solutions and results",
    a: "From Instagram to a ",
    hl: "system that works for you.",
    text: "See the difference in practice and choose the right solution for your business.",
    see: "See solutions",
    ba: {
      eyebrow: "Before and after",
      a: "Same work. ",
      hl: "A whole new perception.",
      text: "Fábio Passos forges handmade Damascus steel knives in Canoas, Brazil. Before, all his work depended on Instagram. Today he has a showcase worthy of his pieces.",
      beforeTitle: "Before · Instagram only",
      afterTitle: "After · with a website",
      before: [
        "Photos scattered across the feed, mixed with other posts",
        "Clients had to ask for prices and contact via DM",
        "Outside Instagram, almost nobody found his work",
        "Reach depended on the algorithm's mood",
      ],
      after: [
        "Organized gallery with more than 40 photos",
        "Story, collection and contact on a single page",
        "Own domain: fabiopassoscutelaria.com",
        "Website ready to show up on Google",
      ],
      numbers: [
        { n: "40+", l: "photos organized in a gallery" },
        { n: "24h", l: "showcase open every day" },
        { n: "1", l: "own branded domain" },
        { n: "100%", l: "mobile friendly" },
      ],
      live: "Visit the live site",
      beforeLabel: "Before",
      afterLabel: "After",
      drag: "Drag to compare before and after",
      hint: "Drag to compare · “Before” is an illustration using Fábio's real photos",
      afterAlt: "After: Fábio Passos Cutelaria website on a phone",
      dms: ["How much is this knife?", "Do you ship abroad?", "Do you have a price list?"],
      noReply: "no reply",
      follow: "Follow",
      message: "Message",
    },
    systems: {
      eyebrow: "What we build",
      a: "A solution for ",
      hl: "every stage of your business.",
      text: "From your first website to the system that organizes your sales. All tailor-made, with your look.",
      want: "I want this",
    },
    final: {
      a: "Not sure which one? ",
      hl: "We'll help you.",
      text: "Tell us a bit about your business and we'll point you in the right direction.",
    },
  },
  start: {
    title: "Start a project | HM Dev Solutions",
    eyebrow: "Start a project",
    a: "Let's bring your idea ",
    hl: "to life.",
    text: "It takes less than 2 minutes and no field is required: fill in only what you want and the message reaches us ready to go.",
    steps: [
      { t: "You share the idea", d: "No tech jargon: talk about your business like you would with a friend." },
      { t: "We reply", d: "We answer your questions and suggest the best solution for you." },
      { t: "Custom quote", d: "You get a proposal and decide with no commitment." },
    ],
    q1: "What do you need?",
    notSure: "Not sure yet",
    q2: "About you",
    name: "Your name",
    namePh: "What should we call you?",
    business: "Business name",
    businessPh: "e.g. Studio Bella",
    link: "Current Instagram or website",
    linkPh: "@yourbusiness or yourbusiness.com",
    q3: "Tell us your idea",
    ideaPh: "What you sell, who your clients are and what you expect from the project…",
    when: "When do you need it?",
    deadlines: ["No rush", "Within 1 month", "Urgent"],
    sendWhatsapp: "Send via WhatsApp",
    sendEmail: "Send by email",
    sendDirect: "Copy and open Instagram DM",
    byEmail: "By email",
    byDirect: "Via Instagram DM",
    note: "Nothing is stored on this site: the message opens ready in the app you choose.",
    copied: "Message copied! Paste it in the DM that just opened.",
    opened: "We opened the DM. Tell us there what you wrote here.",
    msg: {
      hello: "Hi! I'd like a quote from HM Dev Solutions.",
      name: "Name",
      business: "Business",
      link: "Current Instagram/website",
      need: "What I need",
      deadline: "Deadline",
      idea: "About the idea",
      subject: "Quote",
    },
  },
  privacy: {
    title: "Privacy and cookies | HM Dev Solutions",
    back: "← Back to site",
    h1: "Privacy and cookies",
    updated: "Updated on November 8, 2026",
    sections: [
      {
        title: "Summary",
        p: ["This website presents the services of HM Dev Solutions. It doesn't create accounts, doesn't sell anything online and doesn't store information about its visitors."],
      },
      {
        title: "Cookies",
        p: [
          "This website doesn't use cookies: no advertising, analytics or social media cookies. That's why we don't ask you to accept cookies.",
          "Your browser stores, on your device only, the language you chose and, temporarily, your position on the page. This information is not sent to anyone.",
        ],
      },
      {
        title: "Contact",
        p: [
          "The contact buttons and the “Start a project” form open WhatsApp, Instagram or your email app with the message ready. Nothing is sent through this website: the conversation happens directly in those apps, and you decide what to send. Any information you send is used only to reply and prepare your quote, and it is never sold or shared with third parties.",
        ],
      },
      {
        title: "Hosting",
        p: [
          "The website is hosted by Vercel. As with any website, the hosting server records technical access data, such as IP address and browser, to keep the service running and protected against attacks.",
        ],
      },
      {
        title: "Links to other websites",
        p: [
          "Links to WhatsApp, Instagram and portfolio websites lead to pages of other companies or clients, which have their own privacy policies.",
        ],
      },
    ],
    rightsTitle: "Your rights",
    rights: "Under Brazil's General Data Protection Law (LGPD), you can ask which of your data we hold, and have it corrected or deleted.",
    writeTo: "To do so, write to",
  },
};

const es: Dict = {
  whatsappText: "¡Hola! Vi el sitio de HM Dev Solutions y quiero un presupuesto.",
  langLabel: "Idioma",
  nav: {
    services: "Servicios",
    solutions: "Soluciones",
    results: "Resultados",
    portfolio: "Portafolio",
    contact: "Contacto",
    start: "Empezar un proyecto",
    quote: "Cotizar",
    menu: "Menú",
    home: "HM Dev Solutions – inicio",
  },
  footer: {
    tagline: "Sitios web y sistemas a medida para que tu negocio sea encontrado y contratado.",
    navigation: "Navegación",
    contact: "Contacto",
    home: "Inicio",
    privacy: "Privacidad",
    rights: "Todos los derechos reservados.",
  },
  errors: {
    notFoundTitle: "Página no encontrada",
    notFoundText: "La página que buscas no existe o cambió de dirección.",
    errorTitle: "La página no cargó",
    errorText: "Algo salió mal de nuestro lado. Intenta recargar la página o vuelve al inicio.",
    retry: "Intentar de nuevo",
    back: "Volver al inicio",
  },
  sol: {
    site: {
      title: "Sitio web profesional",
      text: "La vitrina de tu negocio: quién eres, qué haces y cómo contactarte.",
      features: ["Diseño con tu marca", "Rápido y adaptable", "Preparado para Google"],
    },
    landing: {
      title: "Landing page",
      text: "Una página enfocada en una oferta, hecha para convertir visitas en contactos.",
      features: ["Ideal para anuncios", "Botón directo a WhatsApp", "Lanzamientos y promociones"],
    },
    ecommerce: {
      title: "E-commerce",
      text: "Tu tienda online abierta las 24 horas, con catálogo, carrito y pago en línea.",
      features: ["Tarjeta y pagos instantáneos", "Control de inventario", "Cálculo de envío"],
    },
    crm: {
      title: "CRM",
      text: "Organiza clientes, presupuestos y ventas en un solo lugar, sin hojas de cálculo perdidas.",
      features: ["Embudo de ventas", "Historial de cada cliente", "Recordatorios de seguimiento"],
    },
    agendamento: {
      title: "Reservas online",
      text: "El cliente elige el horario solo y tú recibes la agenda organizada.",
      features: ["Horarios en tiempo real", "Confirmación automática", "Ideal para salones y clínicas"],
    },
    catalogo: {
      title: "Catálogo y menú digital",
      text: "Productos o platos con fotos y precios, con pedidos enviados directo a WhatsApp.",
      features: ["Fácil de actualizar", "Se abre con enlace o código QR", "Pedidos por WhatsApp"],
    },
    painel: {
      title: "Panel administrativo",
      text: "Un sistema a medida para seguir números, pedidos y equipo.",
      features: ["Informes y gráficos", "Acceso por usuario", "Hecho para tu proceso"],
    },
    automacao: {
      title: "Automatizaciones e integraciones",
      text: "Conecta sitio, WhatsApp, hojas de cálculo y correo para que el trabajo repetitivo avance solo.",
      features: ["Menos tareas manuales", "Avisos automáticos", "Se integra con lo que ya usas"],
    },
  },
  home: {
    title: "HM Dev Solutions – Sitios web profesionales que atraen clientes",
    hero: {
      eyebrow: "Presencia digital",
      a: "Tu negocio está ",
      hl: "en Instagram.",
      sub: "Pero ¿tus clientes pueden encontrarte ",
      subStrong: "y contratarte?",
      seePortfolio: "Ver portafolio",
      questions: ["¿Qué ofreces?", "¿Cuánto cuesta?", "¿Cómo te contacto?"],
      lost: "Si el cliente tiene que preguntar, quizás ya perdiste la venta.",
    },
    phone: { follow: "Seguir", message: "Mensaje", highlights: ["Proyectos", "Servicios", "Precios", "Contacto"] },
    problem: {
      eyebrow: "Por qué tener un sitio web",
      a: "Instagram es alquilado. ",
      hl: "Tu sitio es tuyo.",
      text: "Si el algoritmo cambia, tu alcance cae. Tu sitio sigue en línea, trabajando para ti.",
      pillA: "Instagram atrae. ",
      pillB: "El sitio convierte.",
      caption: "Comparación entre tener solo Instagram y tener un sitio web",
      onlyIg: "Solo Instagram",
      withSite: "Con sitio",
      rows: [
        "Aparece en Google",
        "Servicios y precios organizados",
        "Presupuestos las 24 horas",
        "Transmite más confianza",
        "Clientes y contenido son tuyos",
      ],
      no: "No",
      yes: "Sí",
    },
    services: {
      eyebrow: "Sitio web profesional",
      a: "Tu sitio es la vitrina ",
      hl: "que nunca cierra.",
      text: "Servicios, precios y contacto en un solo lugar, las 24 horas.",
      pills: ["Rápido", "Adaptable", "Aparece en Google"],
      items: [
        { alt: "Notebook con formas 3D y el texto Crea tu sitio", title: "Sitio web profesional", text: "Tu vitrina 24 horas: servicios, fotos y contacto en un solo lugar, en el celular y en la computadora." },
        { alt: "Arte: sé encontrado en el momento justo", title: "Aparece en Google", text: "Un sitio preparado para que te encuentre quien ya busca lo que vendes." },
        { alt: "Arte: aumenta tus ventas, celular con notificación de venta", title: "Más contactos y ventas", text: "Botones de WhatsApp y presupuesto bien ubicados, que convierten visitas en clientes." },
        { alt: "Arte: a un precio accesible", title: "Un precio a tu alcance", text: "Presupuesto a medida del tamaño de tu negocio, sin mensualidades ocultas." },
      ],
      moreTitle: "Además de sitios web, sistemas completos.",
      moreLink: "Ver soluciones y resultados",
    },
    portfolio: {
      eyebrow: "Portafolio",
      a: "Proyectos ",
      hl: "en línea.",
      text: "Cada sitio se hace a medida para la marca y los clientes de quien nos contrata.",
      frameAria: "Abrir el sitio Fábio Passos Cutelaria",
      imgAlt: "Página de inicio del sitio Fábio Passos Cutelaria",
      mobileAlt: "El mismo sitio abierto en el celular",
      hover: "Pasa el mouse sobre el sitio para ver la página completa",
      featured: "Proyecto destacado",
      desc: "Cuchillero de Canoas (Brasil) que forja cuchillos artesanales de acero damasco. Su trabajo vivía solo en Instagram; ahora tiene una vitrina elegante, a la altura de sus piezas, con galería de fotos, su historia y contacto directo para encargos.",
      features: [
        "Diseño a medida, con la identidad de la marca",
        "Galería con más de 40 fotos de las piezas",
        "Funciona perfectamente en el celular",
        "Dominio propio y preparado para Google",
      ],
      live: "Ver el sitio en línea",
      nextTitle: "Tu negocio puede ser el próximo.",
      nextText: "Hablemos sobre el sitio que necesitas.",
      nextBtn: "Quiero aparecer aquí",
    },
    how: {
      eyebrow: "Cómo funciona",
      a: "Tu sitio en línea en ",
      hl: "3 pasos simples.",
      text: "Tú explicas la idea. Nosotros nos encargamos del resto.",
      steps: [
        { t: "Conversación", d: "Conocemos tu negocio, tus clientes y tu objetivo." },
        { t: "Diseño y código", d: "Un sitio con la cara de tu marca, rápido y adaptable." },
        { t: "En línea", d: "Lo publicamos y lo dejamos listo para generar contactos." },
      ],
    },
    contact: {
      eyebrow: "Tu próximo paso",
      a: "¿Quieres un sitio que ",
      hl: "atraiga clientes?",
      text: "Pide tu presupuesto sin compromiso. Respondemos rapidito.",
      orDirect: "O habla directo",
      business: "@tunegocio",
      reply: "¡Te escribí por DM! ✓",
    },
  },
  solutions: {
    title: "Soluciones y resultados | HM Dev Solutions",
    eyebrow: "Soluciones y resultados",
    a: "De Instagram a un ",
    hl: "sistema que trabaja para ti.",
    text: "Mira la diferencia en la práctica y elige la solución ideal para tu negocio.",
    see: "Ver soluciones",
    ba: {
      eyebrow: "Antes y después",
      a: "El mismo trabajo. ",
      hl: "Otra percepción.",
      text: "Fábio Passos forja cuchillos artesanales de acero damasco en Canoas (Brasil). Antes, todo su trabajo dependía de Instagram. Hoy tiene una vitrina a la altura de sus piezas.",
      beforeTitle: "Antes · solo Instagram",
      afterTitle: "Después · con sitio web",
      before: [
        "Fotos esparcidas en el feed, mezcladas con otras publicaciones",
        "El cliente tenía que preguntar precio y contacto por DM",
        "Fuera de Instagram, casi nadie encontraba su trabajo",
        "El alcance dependía del humor del algoritmo",
      ],
      after: [
        "Galería organizada con más de 40 fotos",
        "Historia, colección y contacto en una sola página",
        "Dominio propio: fabiopassoscutelaria.com",
        "Sitio preparado para aparecer en Google",
      ],
      numbers: [
        { n: "40+", l: "fotos organizadas en galería" },
        { n: "24h", l: "de vitrina abierta, todos los días" },
        { n: "1", l: "dominio propio con la marca" },
        { n: "100%", l: "adaptado al celular" },
      ],
      live: "Ver el sitio en línea",
      beforeLabel: "Antes",
      afterLabel: "Después",
      drag: "Arrastra para comparar antes y después",
      hint: "Arrastra para comparar · “Antes” es una ilustración con fotos reales de Fábio",
      afterAlt: "Después: sitio Fábio Passos Cutelaria abierto en el celular",
      dms: ["¿Cuánto cuesta este cuchillo?", "¿Hacen envíos?", "¿Tienen catálogo con precios?"],
      noReply: "sin respuesta",
      follow: "Seguir",
      message: "Mensaje",
    },
    systems: {
      eyebrow: "Lo que construimos",
      a: "Una solución para ",
      hl: "cada etapa de tu negocio.",
      text: "Del primer sitio al sistema que organiza tus ventas. Todo a medida, con tu estilo.",
      want: "Lo quiero",
    },
    final: {
      a: "¿No sabes cuál elegir? ",
      hl: "Te ayudamos.",
      text: "Cuéntanos un poco sobre tu negocio y te indicamos el camino correcto.",
    },
  },
  start: {
    title: "Empezar un proyecto | HM Dev Solutions",
    eyebrow: "Empezar un proyecto",
    a: "Hagamos realidad ",
    hl: "tu idea.",
    text: "Toma menos de 2 minutos y ningún campo es obligatorio: completa solo lo que quieras y el mensaje nos llega listo.",
    steps: [
      { t: "Nos cuentas la idea", d: "Sin términos técnicos: habla de tu negocio como lo harías con un amigo." },
      { t: "Te respondemos", d: "Resolvemos tus dudas y te indicamos la mejor solución." },
      { t: "Presupuesto a medida", d: "Recibes la propuesta y decides sin compromiso." },
    ],
    q1: "¿Qué necesitas?",
    notSure: "Todavía no sé",
    q2: "Sobre ti",
    name: "Tu nombre",
    namePh: "¿Cómo te llamamos?",
    business: "Nombre del negocio",
    businessPh: "Ej.: Studio Bella",
    link: "Instagram o sitio actual",
    linkPh: "@tunegocio o tunegocio.com",
    q3: "Cuéntanos tu idea",
    ideaPh: "Qué vendes, quiénes son tus clientes y qué esperas del proyecto…",
    when: "¿Para cuándo?",
    deadlines: ["Sin prisa", "En hasta 1 mes", "Urgente"],
    sendWhatsapp: "Enviar por WhatsApp",
    sendEmail: "Enviar por correo",
    sendDirect: "Copiar y abrir el DM",
    byEmail: "Por correo",
    byDirect: "Por DM de Instagram",
    note: "Nada se guarda en el sitio: el mensaje se abre listo en la aplicación que elijas.",
    copied: "¡Mensaje copiado! Pégalo en el DM que se acaba de abrir.",
    opened: "Abrimos el DM. Cuéntanos allí lo que escribiste aquí.",
    msg: {
      hello: "¡Hola! Quiero un presupuesto de HM Dev Solutions.",
      name: "Nombre",
      business: "Negocio",
      link: "Instagram/sitio actual",
      need: "Lo que necesito",
      deadline: "Plazo",
      idea: "Sobre la idea",
      subject: "Presupuesto",
    },
  },
  privacy: {
    title: "Privacidad y cookies | HM Dev Solutions",
    back: "← Volver al sitio",
    h1: "Privacidad y cookies",
    updated: "Actualizado el 8 de noviembre de 2026",
    sections: [
      {
        title: "Resumen",
        p: ["Este sitio presenta los servicios de HM Dev Solutions. No crea cuentas, no vende nada en línea y no guarda información sobre quienes lo visitan."],
      },
      {
        title: "Cookies",
        p: [
          "Este sitio no usa cookies: ni de publicidad, ni de estadística, ni de redes sociales. Por eso no te pedimos que aceptes cookies.",
          "Tu navegador guarda, solo en tu dispositivo, el idioma que elegiste y, temporalmente, la posición en la que estabas en la página. Esta información no se envía a nadie.",
        ],
      },
      {
        title: "Contacto",
        p: [
          "Los botones de contacto y el formulario “Empezar un proyecto” abren WhatsApp, Instagram o tu aplicación de correo con el mensaje listo. Nada se envía a través del sitio: la conversación ocurre directamente en esas aplicaciones y tú decides qué enviar. La información que envíes se usa solo para responder y preparar tu presupuesto, y nunca se vende ni se comparte con terceros.",
        ],
      },
      {
        title: "Alojamiento",
        p: [
          "El sitio está alojado en Vercel. Como en cualquier sitio, el servidor registra datos técnicos de acceso, como la dirección IP y el navegador, para mantener el servicio funcionando y protegido contra ataques.",
        ],
      },
      {
        title: "Enlaces a otros sitios",
        p: [
          "Los enlaces a WhatsApp, Instagram y a los sitios del portafolio llevan a páginas de otras empresas o clientes, que tienen sus propias políticas de privacidad.",
        ],
      },
    ],
    rightsTitle: "Tus derechos",
    rights: "Según la Ley General de Protección de Datos de Brasil (LGPD), puedes pedir saber qué datos tuyos tenemos, corregirlos o eliminarlos.",
    writeTo: "Para ello, escribe a",
  },
};

const DICTS: Record<Lang, Dict> = { pt, en, es };
const STORAGE_KEY = "hm-lang";

const LangContext = createContext<{ lang: Lang; t: Dict; setLang: (l: Lang) => void }>({
  lang: "pt",
  t: pt,
  setLang: () => {},
});

const isLang = (v: unknown): v is Lang => v === "pt" || v === "en" || v === "es";

// Escolhe o idioma inicial: link com ?lang=en|es, depois a escolha salva,
// depois o idioma do navegador (para visitantes de fora já verem traduzido).
function detectLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromUrl)) return fromUrl;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // navegador sem acesso ao armazenamento: segue para a próxima opção
  }
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("es")) return "es";
  if (nav.startsWith("en")) return "en";
  return "pt";
}

export function LangProvider({ children }: { children: ReactNode }) {
  // o servidor sempre desenha em português; no navegador trocamos se for o caso
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    // salva também o idioma que veio do link (?lang=en), para valer nas outras páginas
    setLang(detectLang());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = LANGS.find((l) => l.code === lang)?.html ?? "pt-BR";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // sem armazenamento: o idioma vale só até fechar a página
    }
  };

  return <LangContext.Provider value={{ lang, t: DICTS[lang], setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

// Atualiza o título da aba do navegador conforme o idioma.
export function useDocTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
