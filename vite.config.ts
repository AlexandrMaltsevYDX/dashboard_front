import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ! yarn add @types/node

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~shared": path.resolve(__dirname, "./src/06_shared"),
      "~pages": path.resolve(__dirname, "./src/02_pages"),
      // '~': path.resolve(__dirname, './src'), // ! <=
    },
  },
  plugins: [react()],
});
