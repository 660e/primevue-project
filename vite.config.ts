import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router'],
    }),

    // https://github.com/unplugin/unplugin-vue-components
    Components({
      resolvers: [PrimeVueResolver()],
    }),

    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
  },
});
