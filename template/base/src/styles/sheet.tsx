import type { RenderRoot } from "../_utils";

/*
  ====================================
  Sheet
  ====================================
*/

export type SheetStyleProps = {
  side?: "left" | "right";
};

export type SheetType = {
  className?: string;
  sheetProps?: SheetStyleProps;
};

export const sheetDefaults: Required<SheetStyleProps> = {
  side: "right",
};

export const sheetClass = (_: SheetType) => "";

export const SheetLayout = (_: { renderRoot: RenderRoot; styleProps: SheetType }) => <></>;
