import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sharedRollup = {
  external: ["react", "react-dom"],
  output: {
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
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
      name: "LucaUIKit",
      formats: ["es", "umd"],
      fileName: (format) => `luca-ui-kit.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: sharedRollup,
    cssCodeSplit: false,
  },
});
