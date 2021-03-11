import { defineConfig } from 'vite';
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
  plugins: [vue()],
});
