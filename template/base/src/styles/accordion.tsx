import type { RenderRoot } from "../_utils";

/*
  ====================================
  Accordion
  ====================================
*/

export type AccordionStyleProps = {
  variant?: "attached" | "separated";
};

export type AccordionType = {
  className?: string;
  accordionProps?: AccordionStyleProps;
};

export const accordionDefaults: Required<AccordionStyleProps> = {
  variant: "separated",
};

export const accordionClass = (_: AccordionType) => "";

export const AccordionLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AccordionType;
  itemSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  AccordionItem
  ====================================
*/

export type AccordionItemStyleProps = {
  attachment?: "none" | "start" | "center" | "end";
};

export type AccordionItemType = {
  className?: string;
  accordionItemProps?: AccordionItemStyleProps;
  accordionProps?: AccordionStyleProps;
};

export const accordionItemDefaults: Required<AccordionItemStyleProps> = {
  attachment: "none",
};

export const accordionItemClass = (_: AccordionItemType) => "";

export const AccordionItemLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemType;
  headerSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AccordionItemHeader
  ====================================
*/

export type AccordionItemHeaderType = {
  className?: string;
  accordionProps?: AccordionStyleProps;
  accordionItemProps?: AccordionItemStyleProps;
};

export const accordionItemHeaderClass = (_: AccordionItemHeaderType) => "";
export const accordionItemHeaderIconClass = (_: AccordionItemHeaderType) => "";
export const accordionItemHeaderLabelClass = (_: AccordionItemHeaderType) => "";
export const accordionItemHeaderCaretClass = (_: AccordionItemHeaderType) => "";
export const accordionItemHeaderFillClass = (_: AccordionItemHeaderType) => "";
export const accordionItemHeaderPercentageClass = (_: AccordionItemHeaderType) => "";

export const AccordionItemHeaderLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  caretSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
}) => <></>;
export const AccordionItemHeaderVotingLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderType;
  fillSlot: React.ReactNode;
  percentageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  caretSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  rateSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AccordionItemHeaderRate
  ====================================
*/

export type AccordionItemHeaderRateType = {
  className?: string;
  accordionProps?: AccordionStyleProps;
  accordionItemProps?: AccordionItemStyleProps;
};

export const accordionItemHeaderRateClass = (_: AccordionItemHeaderRateType) => "";

export const AccordionItemHeaderRateLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderRateType;
  itemSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  AccordionItemHeaderBadge
  ====================================
*/

export type AccordionItemHeaderBadgeStyleProps = {
  color?: "primary" | "base" | "green" | "red";
};

export type AccordionItemHeaderBadgeType = {
  className?: string;
  accordionItemHeaderBadgeProps?: AccordionItemHeaderBadgeStyleProps;
  accordionProps?: AccordionStyleProps;
  accordionItemProps?: AccordionItemStyleProps;
};

export const accordionItemHeaderBadgeDefaults: Required<AccordionItemHeaderBadgeStyleProps> = {
  color: "primary",
};

export const accordionItemHeaderBadgeClass = (_: AccordionItemHeaderBadgeType) => "";
export const accordionItemHeaderBadgeLabelClass = (_: AccordionItemHeaderBadgeType) => "";
export const accordionItemHeaderBadgeIconClass = (_: AccordionItemHeaderBadgeType) => "";

export const AccordionItemHeaderBadgeLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderBadgeType;
  labelSlot: React.ReactNode;
}) => <></>;
export const AccordionItemHeaderBadgeWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderBadgeType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AccordionItemHeaderRateItem
  ====================================
*/

export type AccordionItemHeaderRateItemType = {
  className?: string;
  accordionProps?: AccordionStyleProps;
  accordionItemProps?: AccordionItemStyleProps;
};

export const accordionItemHeaderRateItemClass = (_: AccordionItemHeaderRateItemType) => "";
export const accordionItemHeaderRateItemIconClass = (_: AccordionItemHeaderRateItemType) => "";

export const AccordionItemHeaderRateItemLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderRateItemType;
  iconSlot: React.ReactNode;
}) => <></>;
