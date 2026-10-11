import type { Config } from 'tailwindcss';

/**
 * Parrax Solutions · Design tokens
 * Colores derivados del logotipo. El cian (#00D2FF) es el "nodo" de marca:
 * se reserva para el punto, botones primarios, estados activos y focus.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#090D16', // base oscura
          raised: '#0D1320', // superficies elevadas sobre obsidian
          line: '#1E293B', // = Slate 800, bordes sobre oscuro
        },
        brand: {
          DEFAULT: '#1F3A8A', // azul del logo, solo sobre superficies claras
          hover: '#1A3175',
        },
        node: {
          DEFAULT: '#00D2FF', // cian de acento
          hover: '#33DBFF',
        },
        paper: '#F8FAFC',
        ink: '#0F172A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Escala tipográfica adaptativa con lectura cómoda en pantallas de 360px a 1440px
        display: ['clamp(1.875rem, 5.5vw, 3.875rem)', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '600' }],
        h2: ['clamp(1.5rem, 4vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        h3: ['clamp(1.125rem, 2.5vw, 1.25rem)', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
        lead: ['clamp(1rem, 2vw, 1.1875rem)', { lineHeight: '1.6' }],
        micro: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.14em', fontWeight: '500' }],
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '8px',
        lg: '10px',
      },
      spacing: {
        // Ritmo vertical adaptativo (múltiplos de 8)
        section: '128px',
        'section-sm': '64px',
      },
      maxWidth: {
        content: '1200px',
        prose: '68ch',
      },
      keyframes: {
        flow: { to: { strokeDashoffset: '-24' } },
        pulse_node: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        travel: {
          '0%': { offsetDistance: '0%', opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '100%': { offsetDistance: '100%', opacity: '0' },
        },
      },
      animation: {
        flow: 'flow 1.2s linear infinite',
        'pulse-node': 'pulse_node 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
