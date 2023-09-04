import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: resolve(__dirname, "./plugins/html-injection.js"),
      name: "HtmlInjection",
      fileName: "html-injection",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["fs", "path"],
    },
  },
});