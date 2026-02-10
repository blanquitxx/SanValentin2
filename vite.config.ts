import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Ajustar 'base' para GitHub Pages: usa el nombre del repositorio
  base: '/SanValentin2/',
});
