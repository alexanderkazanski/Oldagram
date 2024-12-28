import { defineConfig } from 'vite';

export default defineConfig(() => ({
  build: {
    rollupOptions: {
      input: [
        './index.html',
        './index.css',
        './index.js',
        './images/avatar-courbet.jpg',
        './images/avatar-ducreux.jpg',
        './images/avatar-vangogh.jpg',
        './images/icon-comment.png',
        './images/icon-dm.png',
        './images/icon-heart.png',
        './images/logo.png',
        './images/post-courbet.jpg',
        './images/post-ducreux.jpg',
        './images/post-vangogh.jpg',
        './images/user-avatar.png',
      ],
    },
  },
}));