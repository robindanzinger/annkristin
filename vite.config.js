import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/annkristin/",
  plugins: [svelte()],
  root: "src",
  build: {
    outDir: "../docs/",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        contact: resolve(__dirname, "src/contact.html"),
        cv: resolve(__dirname, "src/cv.html"),
        impressum: resolve(__dirname, "src/impressum.html"),
      },
    },
  },
});
