import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      name: "blo",
      // the proper extensions will be added
      fileName: "blo",
    },
  },
  optimizeDeps: {
    entries: ["src/index.ts"],
  },
  plugins: [dts({ insertTypesEntry: true })],
});
