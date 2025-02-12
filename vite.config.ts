import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import path from "path"

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      "@context": path.resolve(__dirname, "src/context"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@schema": path.resolve(__dirname, "src/schema"),
      "@utils": path.resolve(__dirname, "src/utils"),
    }
  }
});