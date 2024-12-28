import { defineConfig } from 'vite';

export default defineConfig(() => ({
  build: {
    rollupOptions: {
      input: [
        'index.html',
        './index.css',
        './index.js',
        './images'
      ],
    },
  },
}));