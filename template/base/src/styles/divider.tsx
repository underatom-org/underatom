import type { RenderRoot } from "../_utils";

/*
  ====================================
  Divider
  ====================================
*/

export type DividerStyleProps = {
  variant?: "solid" | "dashed";
};

export type DividerType = {
  className?: string;
  dividerProps?: DividerStyleProps;
};

export const dividerDefaults: Required<DividerStyleProps> = {
  variant: "solid",
};

export const dividerClass = (_: DividerType) => "";

export const DividerLayout = (_: { renderRoot: RenderRoot; styleProps: DividerType }) => <></>;
