git pull
docker-compose down
docker rmi ghcr.io/isikepalaku/reserseai:latest
docker-compose pull
docker-compose up -dimport { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'src/static',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: true,
  },
});
