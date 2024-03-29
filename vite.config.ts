import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ! yarn add @types/node

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
  resolve: {
    alias: {
      "~shared": path.resolve(__dirname, "./src/06_shared"),
      "~pages": path.resolve(__dirname, "./src/02_pages"),
      "~widgets": path.resolve(__dirname, "./src/03_widgets"),
      // '~': path.resolve(__dirname, './src'), // ! <=
    },
  },
  plugins: [react()],
});
