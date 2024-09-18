import type { RenderRoot } from "../_utils";

/*
  ====================================
  Paper
  ====================================
*/

export type PaperStyleProps = {
  elevation?: "sm" | "md" | "lg";
};

export type PaperType = {
  className?: string;
  paperProps?: PaperStyleProps;
};

export const paperDefaults: Required<PaperStyleProps> = {
  elevation: "md",
};

export const paperClass = (_: PaperType) => "";

export const PaperLayout = (_: { renderRoot: RenderRoot; styleProps: PaperType }) => <></>;
