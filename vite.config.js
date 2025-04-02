import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// ADD THIS PATCH
import inject from '@vercel/webpack-asset-relocator-loader';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      external: ['@emotion/styled', '@emotion/react'],
    }
  },
});
