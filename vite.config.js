import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['module-name'], // Replace 'module-name' with the actual module name you want to externalize
      onwarn: (warning, warn) => {
        // Handle warnings as needed
        warn(warning);
      }
    }
  }
});
