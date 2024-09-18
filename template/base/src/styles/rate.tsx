import type { RenderRoot } from "../_utils";

/*
  ====================================
  Rate
  ====================================
*/

export type RateStyleProps = {
  size?: "md";
};

export type RateType = {
  className?: string;
  rateProps?: RateStyleProps;
};

export const rateDefaults: Required<RateStyleProps> = {
  size: "md",
};

export const rateClass = (_: RateType) => "";

export const RateLayout = (_: { renderRoot: RenderRoot; styleProps: RateType; itemSlots: React.ReactNode }) => <></>;

/*
  ====================================
  RateItem
  ====================================
*/

export type RateItemType = {
  className?: string;
  rateProps?: RateStyleProps;
};

export const rateItemClass = (_: RateItemType) => "";
export const rateItemIconClass = (_: RateItemType) => "";

export const RateItemLayout = (_: { renderRoot: RenderRoot; styleProps: RateItemType; iconSlot: React.ReactNode }) => (
  <></>
);
