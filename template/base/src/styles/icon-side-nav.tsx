import type { RenderRoot } from "../_utils";

/*
  ====================================
  IconSideNav
  ====================================
*/

export type IconSideNavStyleProps = {
  size?: "md";
};

export type IconSideNavType = {
  className?: string;
  iconSideNavProps?: IconSideNavStyleProps;
};

export const iconSideNavDefaults: Required<IconSideNavStyleProps> = {
  size: "md",
};

export const iconSideNavClass = (_: IconSideNavType) => "";

export const IconSideNavLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: IconSideNavType;
  groupSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  IconSideNavGroup
  ====================================
*/

export type IconSideNavGroupType = {
  className?: string;
  iconSideNavProps?: IconSideNavStyleProps;
};

export const iconSideNavGroupClass = (_: IconSideNavGroupType) => "";
export const iconSideNavGroupLabelClass = (_: IconSideNavGroupType) => "";

export const IconSideNavGroupLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: IconSideNavGroupType;
  labelSlot: React.ReactNode;
  itemSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  IconSideNavGroupItem
  ====================================
*/

export type IconSideNavGroupItemType = {
  className?: string;
  iconSideNavProps?: IconSideNavStyleProps;
};

export const iconSideNavGroupItemClass = (_: IconSideNavGroupItemType) => "";

export const IconSideNavGroupItemLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: IconSideNavGroupItemType;
  boxSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  IconSideNavGroupItemBox
  ====================================
*/

export type IconSideNavGroupItemBoxType = {
  className?: string;
  iconSideNavProps?: IconSideNavStyleProps;
};

export const iconSideNavGroupItemBoxClass = (_: IconSideNavGroupItemBoxType) => "";
export const iconSideNavGroupItemBoxIconClass = (_: IconSideNavGroupItemBoxType) => "";

export const IconSideNavGroupItemBoxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: IconSideNavGroupItemBoxType;
  iconSlot: React.ReactNode;
}) => <></>;
