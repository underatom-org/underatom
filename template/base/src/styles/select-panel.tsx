import type { RenderRoot } from "../_utils";

/*
  ====================================
  SelectPanel
  ====================================
*/

export type SelectPanelStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type SelectPanelType = {
  className?: string;
  selectPanelProps?: SelectPanelStyleProps;
};

export const selectPanelDefaults: Required<SelectPanelStyleProps> = {
  size: "md",
};

export const selectPanelClass = (_: SelectPanelType) => "";

export const SelectPanelLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelType;
  searchSlot: React.ReactNode;
  groupSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectPanelGroup
  ====================================
*/

export type SelectPanelGroupType = {
  className?: string;
  selectPanelProps?: SelectPanelStyleProps;
};

export const selectPanelGroupClass = (_: SelectPanelGroupType) => "";
export const selectPanelGroupTitleClass = (_: SelectPanelGroupType) => "";

export const SelectPanelGroupLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupType;
  titleSlot: React.ReactNode;
  itemSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectPanelSearch
  ====================================
*/

export type SelectPanelSearchType = {
  className?: string;
  selectPanelProps?: SelectPanelStyleProps;
};

export const selectPanelSearchClass = (_: SelectPanelSearchType) => "";
export const selectPanelSearchIconClass = (_: SelectPanelSearchType) => "";
export const selectPanelSearchTextClass = (_: SelectPanelSearchType) => "";

export const SelectPanelSearchLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelSearchType;
  iconSlot: React.ReactNode;
  textSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectPanelGroupItem
  ====================================
*/

export type SelectPanelGroupItemType = {
  className?: string;
  selectPanelProps?: SelectPanelStyleProps;
};

export const selectPanelGroupItemClass = (_: SelectPanelGroupItemType) => "";
export const selectPanelGroupItemCheckIconClass = (_: SelectPanelGroupItemType) => "";

export const SelectPanelGroupItemLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemType;
  checkIconSlot: React.ReactNode;
  boxSlot: React.ReactNode;
}) => <></>;
export const SelectPanelGroupItemWithCheckboxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemType;
  checkboxSlot: React.ReactNode;
  boxSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectPanelGroupItemBox
  ====================================
*/

export type SelectPanelGroupItemBoxDotStyleProps = {
  color?: "primary" | "base" | "green" | "red";
};

export type SelectPanelGroupItemBoxType = {
  className?: string;
  selectPanelProps?: SelectPanelStyleProps;
};

export type SelectPanelGroupItemBoxDotType = {
  className?: string;
  selectPanelProps?: SelectPanelStyleProps;
  selectPanelGroupItemBoxDotProps?: SelectPanelGroupItemBoxDotStyleProps;
};

export const selectPanelGroupItemBoxDotDefaults: Required<SelectPanelGroupItemBoxDotStyleProps> = {
  color: "primary",
};

export const selectPanelGroupItemBoxClass = (_: SelectPanelGroupItemBoxType) => "";
export const selectPanelGroupItemBoxLabelClass = (_: SelectPanelGroupItemBoxType) => "";
export const selectPanelGroupItemBoxDotClass = (_: SelectPanelGroupItemBoxDotType) => "";
export const selectPanelGroupItemBoxDescriptionClass = (_: SelectPanelGroupItemBoxType) => "";
export const selectPanelGroupItemBoxSupportingClass = (_: SelectPanelGroupItemBoxType) => "";

export const SelectPanelGroupItemBoxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxType;
  iconBoxSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
}) => <></>;
export const SelectPanelGroupItemBoxWithAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
}) => <></>;
export const SelectPanelGroupItemBoxWithDotLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
}) => <></>;
export const SelectPanelGroupItemBoxWithDescriptionLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxType;
  iconBoxSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  supportingSlot: React.ReactNode;
}) => <></>;
export const SelectPanelGroupItemBoxWithAvatarAndDescriptionLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  supportingSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectPanelGroupItemBoxBadge
  ====================================
*/

export type SelectPanelGroupItemBoxBadgeStyleProps = {
  color?: "primary" | "base" | "red" | "green";
};

export type SelectPanelGroupItemBoxBadgeType = {
  className?: string;
  selectPanelGroupItemBoxBadgeProps?: SelectPanelGroupItemBoxBadgeStyleProps;
  selectPanelProps?: SelectPanelStyleProps;
};

export const selectPanelGroupItemBoxBadgeDefaults: Required<SelectPanelGroupItemBoxBadgeStyleProps> = {
  color: "primary",
};

export const selectPanelGroupItemBoxBadgeClass = (_: SelectPanelGroupItemBoxBadgeType) => "";
export const selectPanelGroupItemBoxBadgeLabelClass = (_: SelectPanelGroupItemBoxBadgeType) => "";
export const selectPanelGroupItemBoxBadgeIconClass = (_: SelectPanelGroupItemBoxBadgeType) => "";

export const SelectPanelGroupItemBoxBadgeLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxBadgeType;
  labelSlot: React.ReactNode;
}) => <></>;
export const SelectPanelGroupItemBoxBadgeWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxBadgeType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectPanelGroupItemCheckbox
  ====================================
*/

export type SelectPanelGroupItemCheckboxType = {
  className?: string;
  selectPanelProps?: SelectPanelStyleProps;
};

export const selectPanelGroupItemCheckboxClass = (_: SelectPanelGroupItemCheckboxType) => "";
export const selectPanelGroupItemCheckboxIconClass = (_: SelectPanelGroupItemCheckboxType) => "";

export const SelectPanelGroupItemCheckboxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemCheckboxType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectPanelGroupItemBoxAvatar
  ====================================
*/

export type SelectPanelGroupItemBoxAvatarStyleProps = {
  multiline?: true | false;
};

export type SelectPanelGroupItemBoxAvatarType = {
  className?: string;
  selectPanelGroupItemBoxAvatarProps?: SelectPanelGroupItemBoxAvatarStyleProps;
  selectPanelProps?: SelectPanelStyleProps;
};

export const selectPanelGroupItemBoxAvatarDefaults: Required<SelectPanelGroupItemBoxAvatarStyleProps> = {
  multiline: false,
};

export const selectPanelGroupItemBoxAvatarClass = (_: SelectPanelGroupItemBoxAvatarType) => "";
export const selectPanelGroupItemBoxAvatarImageClass = (_: SelectPanelGroupItemBoxAvatarType) => "";
export const selectPanelGroupItemBoxAvatarLabelClass = (_: SelectPanelGroupItemBoxAvatarType) => "";
export const selectPanelGroupItemBoxAvatarIconClass = (_: SelectPanelGroupItemBoxAvatarType) => "";

export const SelectPanelGroupItemBoxAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const SelectPanelGroupItemBoxAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectPanelGroupItemBoxIconBox
  ====================================
*/

export type SelectPanelGroupItemBoxIconBoxStyleProps = {
  multiline?: true | false;
};

export type SelectPanelGroupItemBoxIconBoxType = {
  className?: string;
  selectPanelGroupItemBoxIconBoxProps?: SelectPanelGroupItemBoxIconBoxStyleProps;
  selectPanelProps?: SelectPanelStyleProps;
};

export const selectPanelGroupItemBoxIconBoxDefaults: Required<SelectPanelGroupItemBoxIconBoxStyleProps> = {
  multiline: false,
};

export const selectPanelGroupItemBoxIconBoxClass = (_: SelectPanelGroupItemBoxIconBoxType) => "";
export const selectPanelGroupItemBoxIconBoxIconClass = (_: SelectPanelGroupItemBoxIconBoxType) => "";

export const SelectPanelGroupItemBoxIconBoxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxIconBoxType;
  iconSlot: React.ReactNode;
}) => <></>;
