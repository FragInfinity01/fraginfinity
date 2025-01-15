import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fraginfinity',
  build: {
    rollupOptions: {
      input: 'index.html',
    },
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true,
  },
});
