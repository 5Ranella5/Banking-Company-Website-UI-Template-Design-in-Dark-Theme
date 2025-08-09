import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

// ✅ Фікс для __dirname в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: 'src',

  build: {
    target: ['es2022', 'chrome89', 'firefox89', 'safari15'],
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        nestedTwo: resolve(__dirname, 'src/careers.html'),
        nestedFour: resolve(__dirname, 'src/about.html'),
        nestedFive: resolve(__dirname, 'src/security.html'),
        nestedSix: resolve(__dirname, 'src/signup.html'),
        nestedSeven: resolve(__dirname, 'src/login.html'),
      },
    },
  },

  plugins: [injectHTML(), FullReload(['src/*.html'])],
});
