import type { RenderRoot } from "../_utils";

/*
  ====================================
  Dialog
  ====================================
*/

export type DialogStyleProps = {
  variant?: "default";
};

export type DialogType = {
  className?: string;
  dialogProps?: DialogStyleProps;
};

export const dialogDefaults: Required<DialogStyleProps> = {
  variant: "default",
};

export const dialogClass = (_: DialogType) => "";

export const DialogLayout = (_: { renderRoot: RenderRoot; styleProps: DialogType }) => <></>;
