import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    host: 'localhost'
  },
  preview: {
    port: 4173,
    host: 'localhost'
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          phaser: ['phaser']
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/unit/**/*.{test,spec}.ts', 'tests/integration/**/*.{test,spec}.ts']
  }
});
