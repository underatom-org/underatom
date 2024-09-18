import type { RenderRoot } from "../_utils";

/*
  ====================================
  Window
  ====================================
*/

export type WindowStyleProps = {
  variant?: "default";
};

export type WindowType = {
  className?: string;
  windowProps?: WindowStyleProps;
};

export const windowDefaults: Required<WindowStyleProps> = {
  variant: "default",
};

export const windowClass = (_: WindowType) => "";

export const WindowLayout = (_: { renderRoot: RenderRoot; styleProps: WindowType }) => <></>;
