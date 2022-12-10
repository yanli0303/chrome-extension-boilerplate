/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const manualChunks = {
  redux: [
    'react-router',
    'react-router-dom',
    'redux',
    'react-redux',
    '@reduxjs/toolkit',
  ],
  mui: [
    '@emotion/react',
    '@emotion/styled',
    '@mui/icons-material',
    '@mui/material',
  ],
};

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  plugins: [react()],
  base: '',
  build: {
    assetsDir: '',
    outDir: '../dist/popup',
    emptyOutDir: true,
    rollupOptions: process.env.HMR ? undefined : { output: { manualChunks } },
  },
});
