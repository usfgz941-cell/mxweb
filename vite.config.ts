import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mxweb/',  // <--- 新增了这一行，用于指定 GitHub Pages 的路径
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
