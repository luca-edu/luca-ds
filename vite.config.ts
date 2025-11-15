import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sharedRollup = {
  external: ["react", "react-dom", "react/jsx-runtime"],
  output: {
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
      "react/jsx-runtime": "jsxRuntime",
    },
  },
};

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      entryRoot: "src",
      include: ["src/components/**/*", "src/index.ts", "src/utils/**/*"],
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "LucaDS",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format === "es" ? "js" : "umd.cjs"}`,
      cssFileName: "style",
    },
    rollupOptions: sharedRollup,
    cssCodeSplit: false,
  },
});
