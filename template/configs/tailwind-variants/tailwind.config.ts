import { theme } from "./theme";
import type { Config } from "tailwindcss";

export default {
  content: {
    files: ["./src/**/*.{ts,tsx}"],
  },
  theme: { extend: theme },
} satisfies Config;
