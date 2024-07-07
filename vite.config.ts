import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rs-react/',
  build: {
    emptyOutDir: true,
    sourcemap: true,
    target: 'es2017',
    cssCodeSplit: true,
  },
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      minimize: true,
      sourceMap: true,
    },
  },
  test: {
    setupFiles: 'src/tests/setup.ts',
    globals: true,
    environment: 'jsdom',
    css: true,
    include: [...configDefaults.include],
    exclude: [...configDefaults.exclude],
    coverage: {
      include: ['src/**/*.{js,ts,jsx,tsx}'],
      reporter: ['text', 'json', 'html'],
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-jsx'],
      },
    }),
  ],
});
