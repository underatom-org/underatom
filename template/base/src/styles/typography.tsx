import type { RenderRoot } from "../_utils";

/*
  ====================================
  Typography
  ====================================
*/

export type TypographyStyleProps = {
  type?: "h1" | "h2" | "h3" | "subheader" | "body" | "code" | "label" | "sublabel";
  color?: "base" | "secondary";
};

export type TypographyType = {
  className?: string;
  typographyProps?: TypographyStyleProps;
};

export const typographyDefaults: Required<TypographyStyleProps> = {
  type: "body",
  color: "base",
};

export const typographyClass = (_: TypographyType) => "";
export const typographyTextClass = (_: TypographyType) => "";

export const TypographyLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TypographyType;
  textSlot: React.ReactNode;
}) => <></>;
