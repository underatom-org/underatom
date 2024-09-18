import { createTV } from "tailwind-variants";
import { theme } from "./theme";

export const tv = createTV({
  twMergeConfig: {
    classGroups: {
      "font-size": Object.keys(theme.fontSize ?? {}).map((key) => `text-${key}`),
    },
  },
});
