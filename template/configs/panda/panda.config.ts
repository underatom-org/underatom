import { defineConfig } from "@pandacss/dev";
import { theme } from "./theme";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  outdir: "styled-system",
  theme,
});
