import type { RenderRoot } from "../_utils";

/*
  ====================================
  SideNav
  ====================================
*/

export type SideNavStyleProps = {
  size?: "md";
};

export type SideNavType = {
  className?: string;
  sideNavProps?: SideNavStyleProps;
};

export const sideNavDefaults: Required<SideNavStyleProps> = {
  size: "md",
};

export const sideNavClass = (_: SideNavType) => "";

export const SideNavLayout = (_: { renderRoot: RenderRoot; styleProps: SideNavType; groupSlots: React.ReactNode }) => (
  <></>
);

/*
  ====================================
  SideNavGroup
  ====================================
*/

export type SideNavGroupType = {
  className?: string;
  sideNavProps?: SideNavStyleProps;
};

export const sideNavGroupClass = (_: SideNavGroupType) => "";

export const SideNavGroupLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupType;
  headerSlot: React.ReactNode;
  itemSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  SideNavGroupItem
  ====================================
*/

export type SideNavGroupItemType = {
  className?: string;
  sideNavProps?: SideNavStyleProps;
};

export const sideNavGroupItemClass = (_: SideNavGroupItemType) => "";

export const SideNavGroupItemLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupItemType;
  boxSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SideNavGroupHeader
  ====================================
*/

export type SideNavGroupHeaderType = {
  className?: string;
  sideNavProps?: SideNavStyleProps;
};

export const sideNavGroupHeaderClass = (_: SideNavGroupHeaderType) => "";
export const sideNavGroupHeaderCaretClass = (_: SideNavGroupHeaderType) => "";
export const sideNavGroupHeaderLabelClass = (_: SideNavGroupHeaderType) => "";

export const SideNavGroupHeaderLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupHeaderType;
  caretSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SideNavGroupItemBox
  ====================================
*/

export type SideNavGroupItemBoxType = {
  className?: string;
  sideNavProps?: SideNavStyleProps;
};

export const sideNavGroupItemBoxClass = (_: SideNavGroupItemBoxType) => "";
export const sideNavGroupItemBoxLabelClass = (_: SideNavGroupItemBoxType) => "";
export const sideNavGroupItemBoxIconClass = (_: SideNavGroupItemBoxType) => "";

export const SideNavGroupItemBoxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupItemBoxType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SideNavGroupItemBoxBadge
  ====================================
*/

export type SideNavGroupItemBoxBadgeType = {
  className?: string;
  sideNavProps?: SideNavStyleProps;
};

export const sideNavGroupItemBoxBadgeClass = (_: SideNavGroupItemBoxBadgeType) => "";
export const sideNavGroupItemBoxBadgeTextClass = (_: SideNavGroupItemBoxBadgeType) => "";
export const sideNavGroupItemBoxBadgeIconClass = (_: SideNavGroupItemBoxBadgeType) => "";

export const SideNavGroupItemBoxBadgeLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupItemBoxBadgeType;
  textSlot: React.ReactNode;
}) => <></>;
export const SideNavGroupItemBoxBadgeWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupItemBoxBadgeType;
  textSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;
