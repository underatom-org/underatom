import type { RenderRoot } from "../_utils";

/*
  ====================================
  ActionPanel
  ====================================
*/

export type ActionPanelStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type ActionPanelType = {
  className?: string;
  actionPanelProps?: ActionPanelStyleProps;
};

export const actionPanelDefaults: Required<ActionPanelStyleProps> = {
  size: "md",
};

export const actionPanelClass = (_: ActionPanelType) => "";

export const ActionPanelLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelType;
  groupSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  ActionPanelGroup
  ====================================
*/

export type ActionPanelGroupStyleProps = {
  togglable?: true | false;
};

export type ActionPanelGroupType = {
  className?: string;
  actionPanelGroupProps?: ActionPanelGroupStyleProps;
  actionPanelProps?: ActionPanelStyleProps;
};

export const actionPanelGroupDefaults: Required<ActionPanelGroupStyleProps> = {
  togglable: false,
};

export const actionPanelGroupClass = (_: ActionPanelGroupType) => "";
export const actionPanelGroupTitleClass = (_: ActionPanelGroupType) => "";

export const ActionPanelGroupLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupType;
  titleSlot: React.ReactNode;
  itemSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  ActionPanelGroupItem
  ====================================
*/

export type ActionPanelGroupItemStyleProps = {
  variant?: "default" | "destructive";
};

export type ActionPanelGroupItemType = {
  className?: string;
  actionPanelGroupItemProps?: ActionPanelGroupItemStyleProps;
  actionPanelProps?: ActionPanelStyleProps;
  actionPanelGroupProps?: ActionPanelGroupStyleProps;
};

export const actionPanelGroupItemDefaults: Required<ActionPanelGroupItemStyleProps> = {
  variant: "default",
};

export const actionPanelGroupItemClass = (_: ActionPanelGroupItemType) => "";
export const actionPanelGroupItemCheckIconClass = (_: ActionPanelGroupItemType) => "";
export const actionPanelGroupItemCaretClass = (_: ActionPanelGroupItemType) => "";

export const ActionPanelGroupItemWithCaretLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemType;
  checkIconSlot: React.ReactNode;
  boxSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) => <></>;
export const ActionPanelGroupItemWithKBDLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemType;
  checkIconSlot: React.ReactNode;
  boxSlot: React.ReactNode;
  kBDSlot: React.ReactNode;
}) => <></>;
export const ActionPanelGroupItemLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemType;
  checkIconSlot: React.ReactNode;
  boxSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ActionPanelGroupItemKBD
  ====================================
*/

export type ActionPanelGroupItemKBDType = {
  className?: string;
  actionPanelProps?: ActionPanelStyleProps;
  actionPanelGroupProps?: ActionPanelGroupStyleProps;
  actionPanelGroupItemProps?: ActionPanelGroupItemStyleProps;
};

export const actionPanelGroupItemKBDClass = (_: ActionPanelGroupItemKBDType) => "";
export const actionPanelGroupItemKBDLabelClass = (_: ActionPanelGroupItemKBDType) => "";
export const actionPanelGroupItemKBDIconClass = (_: ActionPanelGroupItemKBDType) => "";

export const ActionPanelGroupItemKBDLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemKBDType;
  labelSlot: React.ReactNode;
}) => <></>;
export const ActionPanelGroupItemKBDWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemKBDType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ActionPanelGroupItemBox
  ====================================
*/

export type ActionPanelGroupItemBoxType = {
  className?: string;
  actionPanelProps?: ActionPanelStyleProps;
  actionPanelGroupProps?: ActionPanelGroupStyleProps;
  actionPanelGroupItemProps?: ActionPanelGroupItemStyleProps;
};

export const actionPanelGroupItemBoxClass = (_: ActionPanelGroupItemBoxType) => "";
export const actionPanelGroupItemBoxIconClass = (_: ActionPanelGroupItemBoxType) => "";
export const actionPanelGroupItemBoxLabelClass = (_: ActionPanelGroupItemBoxType) => "";
export const actionPanelGroupItemBoxDescriptionClass = (_: ActionPanelGroupItemBoxType) => "";
export const actionPanelGroupItemBoxSupportingClass = (_: ActionPanelGroupItemBoxType) => "";

export const ActionPanelGroupItemBoxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
}) => <></>;
export const ActionPanelGroupItemBoxWithAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
}) => <></>;
export const ActionPanelGroupItemBoxWithDescriptionLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxType;
  iconBoxSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  supportingSlot: React.ReactNode;
}) => <></>;
export const ActionPanelGroupItemBoxWithAvatarAndDescriptionLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  supportingSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ActionPanelGroupItemBoxBadge
  ====================================
*/

export type ActionPanelGroupItemBoxBadgeStyleProps = {
  color?: "primary" | "base" | "red" | "green";
};

export type ActionPanelGroupItemBoxBadgeType = {
  className?: string;
  actionPanelGroupItemBoxBadgeProps?: ActionPanelGroupItemBoxBadgeStyleProps;
  actionPanelProps?: ActionPanelStyleProps;
  actionPanelGroupProps?: ActionPanelGroupStyleProps;
  actionPanelGroupItemProps?: ActionPanelGroupItemStyleProps;
};

export const actionPanelGroupItemBoxBadgeDefaults: Required<ActionPanelGroupItemBoxBadgeStyleProps> = {
  color: "primary",
};

export const actionPanelGroupItemBoxBadgeClass = (_: ActionPanelGroupItemBoxBadgeType) => "";
export const actionPanelGroupItemBoxBadgeLabelClass = (_: ActionPanelGroupItemBoxBadgeType) => "";
export const actionPanelGroupItemBoxBadgeIconClass = (_: ActionPanelGroupItemBoxBadgeType) => "";

export const ActionPanelGroupItemBoxBadgeLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxBadgeType;
  labelSlot: React.ReactNode;
}) => <></>;
export const ActionPanelGroupItemBoxBadgeWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxBadgeType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ActionPanelGroupItemBoxSwitch
  ====================================
*/

export type ActionPanelGroupItemBoxSwitchType = {
  className?: string;
  actionPanelProps?: ActionPanelStyleProps;
  actionPanelGroupProps?: ActionPanelGroupStyleProps;
  actionPanelGroupItemProps?: ActionPanelGroupItemStyleProps;
};

export const actionPanelGroupItemBoxSwitchClass = (_: ActionPanelGroupItemBoxSwitchType) => "";
export const actionPanelGroupItemBoxSwitchHandleClass = (_: ActionPanelGroupItemBoxSwitchType) => "";

export const ActionPanelGroupItemBoxSwitchLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxSwitchType;
  handleSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ActionPanelGroupItemBoxAvatar
  ====================================
*/

export type ActionPanelGroupItemBoxAvatarStyleProps = {
  multiline?: true | false;
};

export type ActionPanelGroupItemBoxAvatarType = {
  className?: string;
  actionPanelGroupItemBoxAvatarProps?: ActionPanelGroupItemBoxAvatarStyleProps;
  actionPanelProps?: ActionPanelStyleProps;
  actionPanelGroupProps?: ActionPanelGroupStyleProps;
  actionPanelGroupItemProps?: ActionPanelGroupItemStyleProps;
};

export const actionPanelGroupItemBoxAvatarDefaults: Required<ActionPanelGroupItemBoxAvatarStyleProps> = {
  multiline: false,
};

export const actionPanelGroupItemBoxAvatarClass = (_: ActionPanelGroupItemBoxAvatarType) => "";
export const actionPanelGroupItemBoxAvatarImageClass = (_: ActionPanelGroupItemBoxAvatarType) => "";
export const actionPanelGroupItemBoxAvatarLabelClass = (_: ActionPanelGroupItemBoxAvatarType) => "";
export const actionPanelGroupItemBoxAvatarIconClass = (_: ActionPanelGroupItemBoxAvatarType) => "";

export const ActionPanelGroupItemBoxAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const ActionPanelGroupItemBoxAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ActionPanelGroupItemBoxIconBox
  ====================================
*/

export type ActionPanelGroupItemBoxIconBoxType = {
  className?: string;
  actionPanelProps?: ActionPanelStyleProps;
  actionPanelGroupProps?: ActionPanelGroupStyleProps;
  actionPanelGroupItemProps?: ActionPanelGroupItemStyleProps;
};

export const actionPanelGroupItemBoxIconBoxClass = (_: ActionPanelGroupItemBoxIconBoxType) => "";
export const actionPanelGroupItemBoxIconBoxIconClass = (_: ActionPanelGroupItemBoxIconBoxType) => "";

export const ActionPanelGroupItemBoxIconBoxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxIconBoxType;
  iconSlot: React.ReactNode;
}) => <></>;
