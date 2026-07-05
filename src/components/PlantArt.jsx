// Hand-drawn line-art plant illustrations, all sharing one visual grammar:
// a terracotta-free clay pot, a single confident leaf silhouette per species,
// and the same stroke weight throughout so the catalog reads as one family.

const Pot = ({ fill = '#3F6355' }) => (
  <path d="M34 78 L40 100 L72 100 L78 78 Z" fill={fill} />
);

export const SnakePlant = () => (
  <svg viewBox="0 0 112 112" width="100%" height="100%">
    <Pot fill="#43594B" />
    <path d="M46 78 C40 55 44 30 52 14" stroke="#2F5D50" strokeWidth="7" fill="none" strokeLinecap="round" />
    <path d="M52 78 C50 52 56 26 58 10" stroke="#3F7A63" strokeWidth="7" fill="none" strokeLinecap="round" />
    <path d="M58 78 C60 54 68 34 70 20" stroke="#2F5D50" strokeWidth="7" fill="none" strokeLinecap="round" />
    <path d="M64 78 C66 58 60 40 54 30" stroke="#5A9179" strokeWidth="6" fill="none" strokeLinecap="round" />
  </svg>
);

export const PeaceLily = () => (
  <svg viewBox="0 0 112 112" width="100%" height="100%">
    <Pot fill="#43594B" />
    <path d="M56 78 C40 66 34 46 44 28" stroke="#2F5D50" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M56 78 C58 54 50 34 38 22" stroke="#3F7A63" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M56 78 C70 62 74 42 66 24" stroke="#2F5D50" strokeWidth="6" fill="none" strokeLinecap="round" />
    <ellipse cx="66" cy="18" rx="6" ry="12" fill="#F6F3EA" stroke="#E3A857" strokeWidth="2" transform="rotate(20 66 18)" />
  </svg>
);

export const Echeveria = () => (
  <svg viewBox="0 0 112 112" width="100%" height="100%">
    <Pot fill="#6B7B57" />
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const x = 56 + Math.cos(angle) * 22;
      const y = 62 + Math.sin(angle) * 14;
      return (
        <ellipse key={i} cx={x} cy={y} rx="14" ry="9"
          fill={i % 2 === 0 ? '#8FAE7A' : '#A9C48F'}
          transform={`rotate(${(angle * 180) / Math.PI} ${x} ${y})`} />
      );
    })}
    <circle cx="56" cy="62" r="8" fill="#C9D9A8" />
  </svg>
);

export const AloeVera = () => (
  <svg viewBox="0 0 112 112" width="100%" height="100%">
    <Pot fill="#6B7B57" />
    <path d="M56 78 L38 30" stroke="#5A9179" strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d="M56 78 L56 20" stroke="#3F7A63" strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d="M56 78 L74 30" stroke="#5A9179" strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d="M56 78 L26 48" stroke="#7CA982" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M56 78 L86 48" stroke="#7CA982" strokeWidth="8" fill="none" strokeLinecap="round" />
  </svg>
);

export const Lavender = () => (
  <svg viewBox="0 0 112 112" width="100%" height="100%">
    <Pot fill="#43594B" />
    {[30, 44, 56, 68, 82].map((x, i) => (
      <g key={i}>
        <line x1={x} y1="78" x2={x - 14 + i * 7} y2="26" stroke="#5A9179" strokeWidth="3" />
        {Array.from({ length: 5 }).map((_, j) => (
          <circle key={j} cx={x - 14 + i * 7} cy={26 + j * 6} r="4" fill="#9B7FC7" />
        ))}
      </g>
    ))}
  </svg>
);

export const Rosemary = () => (
  <svg viewBox="0 0 112 112" width="100%" height="100%">
    <Pot fill="#43594B" />
    <path d="M56 78 L56 18" stroke="#2F5D50" strokeWidth="5" fill="none" strokeLinecap="round" />
    {[24, 34, 44, 54, 64].map((y, i) => (
      <g key={i}>
        <line x1={56 - 16 + (i % 2) * 4} y1={y} x2="56" y2={y} stroke="#3F7A63" strokeWidth="3" />
        <line x1="56" y1={y} x2={56 + 16 - (i % 2) * 4} y2={y} stroke="#3F7A63" strokeWidth="3" />
      </g>
    ))}
  </svg>
);

export const plantArt = {
  'snake-plant': SnakePlant,
  'peace-lily': PeaceLily,
  echeveria: Echeveria,
  'aloe-vera': AloeVera,
  lavender: Lavender,
  rosemary: Rosemary,
};
