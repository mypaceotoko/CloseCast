import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 用。Vercel 等で使う場合は '/' に変更してください。
  base: '/CloseCast/'
});
