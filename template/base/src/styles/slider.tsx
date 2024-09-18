import type { RenderRoot } from "../_utils";

/*
  ====================================
  Slider
  ====================================
*/

export type SliderStyleProps = {
  color?: "primary" | "base";
};

export type SliderType = {
  className?: string;
  sliderProps?: SliderStyleProps;
};

export const sliderDefaults: Required<SliderStyleProps> = {
  color: "primary",
};

export const sliderClass = (_: SliderType) => "";
export const sliderLabelClass = (_: SliderType) => "";
export const sliderDescriptionClass = (_: SliderType) => "";
export const sliderAsteriskClass = (_: SliderType) => "";
export const sliderValueClass = (_: SliderType) => "";
export const sliderIconClass = (_: SliderType) => "";

export const SliderLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SliderType;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  valueSlot: React.ReactNode;
  iconSlot: React.ReactNode;
  barSlot: React.ReactNode;
  tooltipSlot: React.ReactNode;
  tickLabelSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  SliderBar
  ====================================
*/

export type SliderBarType = {
  className?: string;
  sliderProps?: SliderStyleProps;
};

export const sliderBarClass = (_: SliderBarType) => "";
export const sliderBarFillClass = (_: SliderBarType) => "";
export const sliderBarTickClass = (_: SliderBarType) => "";

export const SliderBarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SliderBarType;
  fillSlot: React.ReactNode;
  thumbSlot: React.ReactNode;
  tickSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  SliderTooltip
  ====================================
*/

export type SliderTooltipType = {
  className?: string;
  sliderProps?: SliderStyleProps;
};

export const sliderTooltipClass = (_: SliderTooltipType) => "";
export const sliderTooltipValueClass = (_: SliderTooltipType) => "";

export const SliderTooltipLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SliderTooltipType;
  valueSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SliderBarThumb
  ====================================
*/

export type SliderBarThumbType = {
  className?: string;
  sliderProps?: SliderStyleProps;
};

export const sliderBarThumbClass = (_: SliderBarThumbType) => "";
export const sliderBarThumbIconClass = (_: SliderBarThumbType) => "";

export const SliderBarThumbLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SliderBarThumbType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SliderTickLabel
  ====================================
*/

export type SliderTickLabelType = {
  className?: string;
  sliderProps?: SliderStyleProps;
};

export const sliderTickLabelClass = (_: SliderTickLabelType) => "";
export const sliderTickLabelValueClass = (_: SliderTickLabelType) => "";
export const sliderTickLabelIconClass = (_: SliderTickLabelType) => "";

export const SliderTickLabelLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SliderTickLabelType;
  valueSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;
