import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "node:url";

const libEntry = fileURLToPath(new URL("./src/lib.ts", import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/lib.ts", "src/components", "src/theme"],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: libEntry,
      name: "NanDesign",
      fileName: (format) => `nan-design.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
});
