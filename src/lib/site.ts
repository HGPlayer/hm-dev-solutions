// Endereço público do site. Troque aqui se o site ganhar um domínio próprio
// (e também em public/sitemap.xml e public/robots.txt).
export const SITE_URL = "https://hm-dev-solutions.vercel.app";

// WhatsApp com DDI e DDD, só números. Ex.: "5551999998888".
// Enquanto estiver vazio, os botões de WhatsApp não aparecem.
export const WHATSAPP_NUMBER = "5551994201780";

// E-mail de contato. Enquanto estiver vazio, o e-mail não aparece no site.
export const CONTACT_EMAIL = "herickpassos13@gmail.com";

export const INSTAGRAM_USER = "hm.devsolutions";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USER}/`;
// Abre direto a conversa (direct) com o perfil.
export const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_USER}`;

const WHATSAPP_TEXT = "Olá! Vi o site da HM Dev Solutions e quero um orçamento.";
export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`
  : "";

// Contato principal dos botões "Peça orçamento": WhatsApp se houver número, senão o direct.
export const PRIMARY_CONTACT_URL = WHATSAPP_URL || INSTAGRAM_DM_URL;
