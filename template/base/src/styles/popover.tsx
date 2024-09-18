import type { RenderRoot } from "../_utils";

/*
  ====================================
  Popover
  ====================================
*/

export type PopoverStyleProps = {
  side?: "left" | "top" | "right" | "bottom";
};

export type PopoverType = {
  className?: string;
  popoverProps?: PopoverStyleProps;
};

export const popoverDefaults: Required<PopoverStyleProps> = {
  side: "top",
};

export const popoverClass = (_: PopoverType) => "";

export const PopoverLayout = (_: { renderRoot: RenderRoot; styleProps: PopoverType }) => <></>;
