/**
 * Micro-diagramas de cada solución (SVG, monocromo sobre Paper).
 * El cian aparece solo como nodo terminal; las líneas que se cruzan
 * remiten a la X del logotipo: integración.
 */
const stroke = '#94A3B8';
const soft = '#CBD5E1';
const blue = '#1F3A8A';
const node = '#00D2FF';

export function SolutionVisual({ kind }: { kind: string }) {
  switch (kind) {
    case 'system':
      return (
        <svg viewBox="0 0 360 150" className="h-auto w-full" fill="none" aria-hidden="true">
          <rect x="0.5" y="0.5" width="359" height="149" rx="8" fill="#fff" stroke={soft} />
          <path d="M0.5 28.5h359" stroke={soft} />
          <rect x="12" y="11" width="44" height="6" rx="3" fill={soft} />
          <path d="M84.5 28.5v121" stroke={soft} />
          {[44, 62, 80, 98].map((y, i) => (
            <rect key={y} x="14" y={y} width={i === 0 ? 56 : 46} height="6" rx="3" fill={i === 0 ? blue : soft} />
          ))}
          {[0, 1, 2, 3].map((r) => (
            <g key={r}>
              <path d={`M100 ${56 + r * 22}h244`} stroke="#E2E8F0" />
              <rect x="100" y={44 + r * 22} width="70" height="6" rx="3" fill={r === 1 ? stroke : soft} />
              <rect x="190" y={44 + r * 22} width="50" height="6" rx="3" fill={soft} />
              <circle cx="334" cy={47 + r * 22} r="3.5" fill={r === 1 ? node : soft} />
            </g>
          ))}
        </svg>
      );
    case 'integration':
      return (
        <svg viewBox="0 0 280 150" className="h-auto w-full" fill="none" aria-hidden="true">
          {[
            [8, 14, 'Ventas'],
            [192, 14, 'Cobros'],
            [8, 110, 'CRM'],
            [192, 110, 'Contabilidad'],
          ].map(([x, y, label]) => (
            <g key={label as string}>
              <rect x={x as number} y={y as number} width="80" height="26" rx="5" fill="#fff" stroke={soft} />
              <text x={(x as number) + 40} y={(y as number) + 17} textAnchor="middle" fontSize="10" fill="#475569" fontFamily="inherit">
                {label}
              </text>
            </g>
          ))}
          {/* La X: dos conexiones que se cruzan en el centro */}
          <path d="M88 27 L192 123" stroke={stroke} className="flow-line" />
          <path d="M192 27 L88 123" stroke={stroke} className="flow-line" />
          <circle cx="140" cy="75" r="9" fill="#fff" stroke={blue} strokeWidth="1.5" />
          <circle cx="140" cy="75" r="3" fill={blue} />
          <circle cx="192" cy="123" r="3.5" fill={node} />
        </svg>
      );
    case 'automation':
      return (
        <svg viewBox="0 0 280 90" className="h-auto w-full" fill="none" aria-hidden="true">
          {['Disparador', 'Regla', 'Acción'].map((label, i) => (
            <g key={label}>
              <rect x={4 + i * 96} y="30" width="76" height="30" rx="5" fill="#fff" stroke={i === 2 ? blue : soft} />
              <text x={42 + i * 96} y="49" textAnchor="middle" fontSize="10" fill="#475569" fontFamily="inherit">
                {label}
              </text>
              {i < 2 && <path d={`M${80 + i * 96} 45h16`} stroke={stroke} className="flow-line" />}
            </g>
          ))}
          <circle cx="272" cy="30" r="3.5" fill={node} />
        </svg>
      );
    case 'apps':
      return (
        <svg viewBox="0 0 280 90" className="h-auto w-full" fill="none" aria-hidden="true">
          <rect x="4" y="8" width="170" height="76" rx="6" fill="#fff" stroke={soft} />
          <path d="M4 22h170" stroke={soft} />
          <rect x="16" y="34" width="60" height="6" rx="3" fill={blue} />
          <rect x="16" y="48" width="140" height="6" rx="3" fill={soft} />
          <rect x="16" y="62" width="100" height="6" rx="3" fill={soft} />
          <rect x="204" y="4" width="48" height="84" rx="8" fill="#fff" stroke={stroke} />
          <rect x="214" y="20" width="28" height="5" rx="2.5" fill={blue} />
          <rect x="214" y="32" width="28" height="5" rx="2.5" fill={soft} />
          <rect x="214" y="44" width="20" height="5" rx="2.5" fill={soft} />
          <circle cx="228" cy="76" r="3.5" fill={node} />
          <path d="M174 46h30" stroke={stroke} className="flow-line" />
        </svg>
      );
    case 'legacy':
      return (
        <svg viewBox="0 0 280 90" className="h-auto w-full" fill="none" aria-hidden="true">
          <g stroke={soft}>
            <rect x="4.5" y="12.5" width="96" height="66" rx="4" fill="#fff" />
            {[29, 45, 61].map((y) => (
              <path key={y} d={`M4.5 ${y}.5h96`} />
            ))}
            {[36, 68].map((x) => (
              <path key={x} d={`M${x}.5 12.5v66`} />
            ))}
          </g>
          <path d="M112 45h44" stroke={stroke} className="flow-line" />
          <rect x="168.5" y="12.5" width="107" height="66" rx="6" fill="#fff" stroke={blue} />
          <rect x="180" y="26" width="50" height="6" rx="3" fill={blue} />
          <rect x="180" y="40" width="80" height="6" rx="3" fill={soft} />
          <rect x="180" y="54" width="64" height="6" rx="3" fill={soft} />
          <circle cx="264" cy="29" r="3.5" fill={node} />
        </svg>
      );
    default:
      return null;
  }
}
