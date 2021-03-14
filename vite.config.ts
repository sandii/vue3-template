import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3001,
    open: true,
    proxy: {
      '/foo': 'http://localhost:4567/foo',
    },
  },
  resolve: {
    alias: [{
      find: /^\/@\//,
      replacement: resolve(__dirname, 'src') + '/',
    }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/theme.scss";',
      },
    },
  },
  plugins: [vue()],
});
