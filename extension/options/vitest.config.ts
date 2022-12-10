import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    transformMode: {
      web: [/\.tsx$/],
    },
  },
});