import type { RenderRoot } from "../_utils";

/*
  ====================================
  FloatingPaper
  ====================================
*/

export type FloatingPaperStyleProps = {
  elevation?: "sm" | "md" | "lg";
  variant?: "default" | "outline";
};

export type FloatingPaperType = {
  className?: string;
  floatingPaperProps?: FloatingPaperStyleProps;
};

export const floatingPaperDefaults: Required<FloatingPaperStyleProps> = {
  elevation: "md",
  variant: "default",
};

export const floatingPaperClass = (_: FloatingPaperType) => "";

export const FloatingPaperLayout = (_: { renderRoot: RenderRoot; styleProps: FloatingPaperType }) => <></>;
