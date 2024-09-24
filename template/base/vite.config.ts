import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
// import banner from "rollup-plugin-banner2";
// import dts from "vite-plugin-dts";
// import { visualizer } from "rollup-plugin-visualizer";
// const isLibrary = process.env.BUILD_TARGET === "library";

const port = parseInt(process.env.VITE_PORT || "8088");

export default defineConfig({
  plugins: [
    react(),
    // ...(isLibrary
    //   ? [
    //       dts({
    //         insertTypesEntry: true,
    //       }),
    //       visualizer({ gzipSize: true, brotliSize: true }),
    //       banner(() => '"use client";'),
    //     ]
    //   : []),
  ],
  server: {
    port,
    strictPort: true,
    host: true,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: path.resolve(__dirname, "index.html"),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
