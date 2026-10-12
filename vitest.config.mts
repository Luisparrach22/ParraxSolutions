import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    // Reutiliza el alias `@/*` de tsconfig.json
    tsconfigPaths: true,
  },
  test: {
    // Entorno por defecto para módulos de servidor; los tests de componentes
    // declaran `// @vitest-environment jsdom` en su cabecera.
    environment: 'node',
    include: ['src/**/*.test.{ts,tsx}'],
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
  },
});
