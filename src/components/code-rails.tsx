// Colunas de "código hacker" nas laterais da tela. Elas sobem junto com a
// rolagem (mais rápido que a página, dando profundidade) e somem no topo.
// No celular as colunas são estreitas e usam só códigos curtos.
import { useEffect, useRef, useState } from "react";

const LEFT = [
  "0x7F3A9C", "const site = build()", "01001000 01001101", "npm run deploy", "200 OK",
  "<section id=\"hero\">", "await crm.sync()", "0xA1F0", "seo.score = 100", "11010110",
  "git push origin main", "ping 12ms", "export default App", "#7c5cf5", "lead.status = 'novo'",
  "0x00FF42", "render(<Vitrine />)", "10110010 0111", "cache: hit", "build ✓ 532ms",
];
const RIGHT = [
  "SELECT * FROM clientes", "0x3C9E", "if (visita) contato()", "01110011", "{ online: true }",
  "fetch('/api/pedidos')", "λ vercel --prod", "0xBEEF", "uptime 99.9%", "pedido #1042",
  "while (aberto) vender()", "1100 0101", "https://", "loja.add(produto)", "0x1F9D",
  "agenda.reservar()", "status: 201", "01101000 01101101", "ssl ✓", "> _",
];
const LEFT_SHORT = ["0x7F", "1011", "</>", "200", "0xA1", "λ", "0110", "git", "#7c", "{ }", "0x3C", "1101", "ok", "npm", "0xBE", "=>"];
const RIGHT_SHORT = ["1100", "0x9E", "</>", "201", "{ }", "0101", "ssl", "0x1F", "λ", "1001", "api", "0xFF", "=>", "0111", "> _", "seo"];

function Column({ lines, side, speed }: { lines: string[]; side: "left" | "right"; speed: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current = window.scrollY;
    let frame = 0;
    const tick = () => {
      // aproxima aos poucos da rolagem real: movimento suave, sem trancos
      const diff = window.scrollY - current;
      current += diff * 0.08;
      const half = el.scrollHeight / 2;
      const y = half ? (current * speed) % half : 0;
      el.style.transform = `translate3d(0, ${-y}px, 0)`;
      // quando a página para, a animação "dorme" até a próxima rolagem (poupa bateria)
      frame = Math.abs(diff) > 0.3 ? requestAnimationFrame(tick) : 0;
    };
    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", wake, { passive: true });
    tick();
    return () => {
      window.removeEventListener("scroll", wake);
      cancelAnimationFrame(frame);
    };
  }, [speed]);

  // um "bloco" com a lista repetida 3x (mais alto que a tela), desenhado duas
  // vezes: ao chegar no fim do primeiro bloco o laço recomeça sem emenda
  const block = [...lines, ...lines, ...lines];
  const all = [...block, ...block];
  return (
    <div className={`code-rail ${side === "left" ? "left-0 text-left" : "right-0 text-right"}`}>
      <div ref={ref} className="will-change-transform">
        {all.map((l, i) => (
          <p key={i} className={i % 7 === 3 ? "code-glow" : ""} style={{ animationDelay: `${(i * 0.7) % 6}s` }}>
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

export function CodeRails() {
  // começa com a versão de computador (igual ao HTML do servidor) e troca no celular
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-1]">
      {mobile ? (
        <>
          <Column key="ml" lines={LEFT_SHORT} side="left" speed={0.35} />
          <Column key="mr" lines={RIGHT_SHORT} side="right" speed={0.5} />
        </>
      ) : (
        <>
          <Column key="dl" lines={LEFT} side="left" speed={0.45} />
          <Column key="dr" lines={RIGHT} side="right" speed={0.6} />
        </>
      )}
    </div>
  );
}
