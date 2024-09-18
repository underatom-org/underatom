import type { RenderRoot } from "../_utils";

/*
  ====================================
  Tooltip
  ====================================
*/

export type TooltipStyleProps = {
  variant?: "primary" | "base" | "negative";
};

export type TooltipType = {
  className?: string;
  tooltipProps?: TooltipStyleProps;
};

export const tooltipDefaults: Required<TooltipStyleProps> = {
  variant: "primary",
};

export const tooltipClass = (_: TooltipType) => "";
export const tooltipLabelClass = (_: TooltipType) => "";
export const tooltipIconClass = (_: TooltipType) => "";
export const tooltipDescriptionClass = (_: TooltipType) => "";

export const TooltipLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TooltipType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
}) => <></>;
