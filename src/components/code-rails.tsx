// Colunas de "código hacker" nas laterais da tela. Elas sobem junto com a
// rolagem (mais rápido que a página, dando profundidade) e somem no topo.
import { useEffect, useRef } from "react";

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

function Column({ lines, side, speed }: { lines: string[]; side: "left" | "right"; speed: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current = window.scrollY;
    let frame = 0;
    const tick = () => {
      // aproxima aos poucos da rolagem real: movimento suave, sem trancos
      current += (window.scrollY - current) * 0.08;
      const half = el.scrollHeight / 2;
      const y = half ? (current * speed) % half : 0;
      el.style.transform = `translate3d(0, ${-y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  // um "bloco" com a lista repetida 3x (mais alto que a tela), desenhado duas
  // vezes: ao chegar no fim do primeiro bloco o laço recomeça sem emenda
  const block = [...lines, ...lines, ...lines];
  const all = [...block, ...block];
  return (
    <div className={`code-rail ${side === "left" ? "left-0 pl-5 text-left" : "right-0 pr-5 text-right"}`}>
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
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-1] hidden md:block">
      <Column lines={LEFT} side="left" speed={0.45} />
      <Column lines={RIGHT} side="right" speed={0.6} />
    </div>
  );
}
