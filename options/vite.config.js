/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '',
  build: {
    assetsDir: '',
    outDir: '../extension/options',
    emptyOutDir: true,
  },
  define: {
    __APP_VERSION__: process.env.VITE_APP_VERSION || '0.0.0',
    __GIT_REVISION__: process.env.VITE_GIT_REVISION || '',
  },
});
