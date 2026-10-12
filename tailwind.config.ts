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
          raised: '#0F1528', // superficies elevadas con sutil matiz azul noche (#161B46)
          line: '#1E293B', // bordes sobre oscuro
        },
        brand: {
          DEFAULT: '#161B46', // rgb(22, 27, 70) azul noche oficial del logotipo
          hover: '#1E2560',
          light: '#252E75',
        },
        node: {
          DEFAULT: '#05D1FF', // cian oficial del logotipo (#05D1FF)
          hover: '#38DCFF',
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
        display: ['clamp(1.75rem, 5.2vw, 3.875rem)', { lineHeight: '1.16', letterSpacing: '-0.025em', fontWeight: '600' }],
        h2: ['clamp(1.375rem, 3.8vw, 2.75rem)', { lineHeight: '1.22', letterSpacing: '-0.02em', fontWeight: '600' }],
        h3: ['clamp(1.0625rem, 2.5vw, 1.25rem)', { lineHeight: '1.38', letterSpacing: '-0.01em', fontWeight: '600' }],
        lead: ['clamp(0.9375rem, 2vw, 1.1875rem)', { lineHeight: '1.65' }],
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
