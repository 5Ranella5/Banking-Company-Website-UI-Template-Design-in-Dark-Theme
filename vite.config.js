import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ command }) => ({
  root: 'src',
  base: '/', // на Vercel ок
  build: {
    target: ['es2022', 'chrome89', 'firefox89', 'safari15'],
    outDir: '../dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        careers: resolve(__dirname, 'src/careers.html'),
        about: resolve(__dirname, 'src/about.html'),
        security: resolve(__dirname, 'src/security.html'),
        signup: resolve(__dirname, 'src/signup.html'),
        login: resolve(__dirname, 'src/login.html'),
      },
    },
  },
  plugins: [
    // Копіюємо всі картинки та SVG зі src/img → dist/img
    viteStaticCopy({
      targets: [
        { src: 'src/img/**/*', dest: 'img' },
        // за потреби: { src: 'src/fonts/**/*', dest: 'fonts' },
      ],
    }),
    injectHTML(),
    ...(command === 'serve' ? [FullReload(['**/*.html'])] : []),
  ],
}));
