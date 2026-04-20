import { defineConfig } from 'vite';

/**
 * Shared Vite configuration base.
 * Each workspace project should import and extend this config.
 *
 * Usage in project vite.config.ts:
 *   import baseConfig from '../../vite.config.base';
 *   export default defineConfig({
 *     ...baseConfig,
 *     // project-specific overrides
 *   });
 */
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    target: 'esnext',
    minify: 'esbuild',
  },
  esbuild: {
    target: 'esnext',
  },
});