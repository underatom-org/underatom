import type { RenderRoot } from "../_utils";

/*
  ====================================
  Command
  ====================================
*/

export type CommandStyleProps = {
  size?: "md";
};

export type CommandType = {
  className?: string;
  commandProps?: CommandStyleProps;
};

export const commandDefaults: Required<CommandStyleProps> = {
  size: "md",
};

export const commandClass = (_: CommandType) => "";

export const CommandLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandType;
  searchSlot: React.ReactNode;
  groupSlots: React.ReactNode;
  emptySlot: React.ReactNode;
  footerSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandGroup
  ====================================
*/

export type CommandGroupStyleProps = {
  togglable?: true | false;
};

export type CommandGroupType = {
  className?: string;
  commandGroupProps?: CommandGroupStyleProps;
  commandProps?: CommandStyleProps;
};

export const commandGroupDefaults: Required<CommandGroupStyleProps> = {
  togglable: false,
};

export const commandGroupClass = (_: CommandGroupType) => "";
export const commandGroupTitleClass = (_: CommandGroupType) => "";

export const CommandGroupLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupType;
  titleSlot: React.ReactNode;
  itemSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandEmpty
  ====================================
*/

export type CommandEmptyType = {
  className?: string;
  commandProps?: CommandStyleProps;
};

export const commandEmptyClass = (_: CommandEmptyType) => "";
export const commandEmptyImageClass = (_: CommandEmptyType) => "";
export const commandEmptyTextClass = (_: CommandEmptyType) => "";

export const CommandEmptyLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandEmptyType;
  imageSlot: React.ReactNode;
  textSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandSearch
  ====================================
*/

export type CommandSearchType = {
  className?: string;
  commandProps?: CommandStyleProps;
};

export const commandSearchClass = (_: CommandSearchType) => "";
export const commandSearchIconClass = (_: CommandSearchType) => "";
export const commandSearchTextClass = (_: CommandSearchType) => "";

export const CommandSearchLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandSearchType;
  iconSlot: React.ReactNode;
  textSlot: React.ReactNode;
  clearSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandFooter
  ====================================
*/

export type CommandFooterType = {
  className?: string;
  commandProps?: CommandStyleProps;
};

export const commandFooterClass = (_: CommandFooterType) => "";

export const CommandFooterLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterType;
  elementSlots: React.ReactNode;
  buttonSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandGroupItem
  ====================================
*/

export type CommandGroupItemStyleProps = {
  variant?: "default" | "destructive";
};

export type CommandGroupItemType = {
  className?: string;
  commandGroupItemProps?: CommandGroupItemStyleProps;
  commandProps?: CommandStyleProps;
  commandGroupProps?: CommandGroupStyleProps;
};

export const commandGroupItemDefaults: Required<CommandGroupItemStyleProps> = {
  variant: "default",
};

export const commandGroupItemClass = (_: CommandGroupItemType) => "";
export const commandGroupItemCheckIconClass = (_: CommandGroupItemType) => "";

export const CommandGroupItemLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemType;
  boxSlot: React.ReactNode;
  checkIconSlot: React.ReactNode;
  kBDSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandSearchClear
  ====================================
*/

export type CommandSearchClearType = {
  className?: string;
  commandProps?: CommandStyleProps;
};

export const commandSearchClearClass = (_: CommandSearchClearType) => "";
export const commandSearchClearIconClass = (_: CommandSearchClearType) => "";

export const CommandSearchClearLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandSearchClearType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandGroupItemKBD
  ====================================
*/

export type CommandGroupItemKBDType = {
  className?: string;
  commandProps?: CommandStyleProps;
  commandGroupProps?: CommandGroupStyleProps;
  commandGroupItemProps?: CommandGroupItemStyleProps;
};

export const commandGroupItemKBDClass = (_: CommandGroupItemKBDType) => "";
export const commandGroupItemKBDLabelClass = (_: CommandGroupItemKBDType) => "";
export const commandGroupItemKBDIconClass = (_: CommandGroupItemKBDType) => "";

export const CommandGroupItemKBDLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemKBDType;
  labelSlot: React.ReactNode;
}) => <></>;
export const CommandGroupItemKBDWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemKBDType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;
export const CommandGroupItemIconKBDLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemKBDType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandGroupItemBox
  ====================================
*/

export type CommandGroupItemBoxType = {
  className?: string;
  commandProps?: CommandStyleProps;
  commandGroupProps?: CommandGroupStyleProps;
  commandGroupItemProps?: CommandGroupItemStyleProps;
};

export const commandGroupItemBoxClass = (_: CommandGroupItemBoxType) => "";
export const commandGroupItemBoxLabelClass = (_: CommandGroupItemBoxType) => "";
export const commandGroupItemBoxIconClass = (_: CommandGroupItemBoxType) => "";

export const CommandGroupItemBoxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  buttonSlot3: React.ReactNode;
}) => <></>;
export const CommandGroupItemBoxWithAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxType;
  labelSlot: React.ReactNode;
  avatarSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  buttonSlot3: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandFooterButton
  ====================================
*/

export type CommandFooterButtonType = {
  className?: string;
  commandProps?: CommandStyleProps;
};

export const commandFooterButtonClass = (_: CommandFooterButtonType) => "";
export const commandFooterButtonIconClass = (_: CommandFooterButtonType) => "";

export const CommandFooterButtonLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterButtonType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandFooterElement
  ====================================
*/

export type CommandFooterElementType = {
  className?: string;
  commandProps?: CommandStyleProps;
};

export const commandFooterElementClass = (_: CommandFooterElementType) => "";
export const commandFooterElementTextClass = (_: CommandFooterElementType) => "";

export const CommandFooterElementLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterElementType;
  textSlot1: React.ReactNode;
  textSlot2: React.ReactNode;
  kBDSlot1: React.ReactNode;
  kBDSlot2: React.ReactNode;
  kBDSlot3: React.ReactNode;
  kBDSlot4: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandFooterElementKBD
  ====================================
*/

export type CommandFooterElementKBDType = {
  className?: string;
  commandProps?: CommandStyleProps;
};

export const commandFooterElementKBDClass = (_: CommandFooterElementKBDType) => "";
export const commandFooterElementKBDLabelClass = (_: CommandFooterElementKBDType) => "";
export const commandFooterElementKBDIconClass = (_: CommandFooterElementKBDType) => "";

export const CommandFooterElementKBDLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterElementKBDType;
  labelSlot: React.ReactNode;
}) => <></>;
export const CommandFooterElementKBDWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterElementKBDType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;
export const CommandFooterElementIconKBDLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterElementKBDType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandGroupItemBoxBadge
  ====================================
*/

export type CommandGroupItemBoxBadgeStyleProps = {
  color?: "primary" | "base" | "red" | "green";
};

export type CommandGroupItemBoxBadgeType = {
  className?: string;
  commandGroupItemBoxBadgeProps?: CommandGroupItemBoxBadgeStyleProps;
  commandProps?: CommandStyleProps;
  commandGroupProps?: CommandGroupStyleProps;
  commandGroupItemProps?: CommandGroupItemStyleProps;
};

export const commandGroupItemBoxBadgeDefaults: Required<CommandGroupItemBoxBadgeStyleProps> = {
  color: "primary",
};

export const commandGroupItemBoxBadgeClass = (_: CommandGroupItemBoxBadgeType) => "";
export const commandGroupItemBoxBadgeLabelClass = (_: CommandGroupItemBoxBadgeType) => "";
export const commandGroupItemBoxBadgeIconClass = (_: CommandGroupItemBoxBadgeType) => "";

export const CommandGroupItemBoxBadgeLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxBadgeType;
  labelSlot: React.ReactNode;
}) => <></>;
export const CommandGroupItemBoxBadgeWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxBadgeType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandGroupItemBoxAvatar
  ====================================
*/

export type CommandGroupItemBoxAvatarType = {
  className?: string;
  commandProps?: CommandStyleProps;
  commandGroupProps?: CommandGroupStyleProps;
  commandGroupItemProps?: CommandGroupItemStyleProps;
};

export const commandGroupItemBoxAvatarClass = (_: CommandGroupItemBoxAvatarType) => "";
export const commandGroupItemBoxAvatarImageClass = (_: CommandGroupItemBoxAvatarType) => "";
export const commandGroupItemBoxAvatarLabelClass = (_: CommandGroupItemBoxAvatarType) => "";
export const commandGroupItemBoxAvatarIconClass = (_: CommandGroupItemBoxAvatarType) => "";

export const CommandGroupItemBoxAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const CommandGroupItemBoxAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandGroupItemBoxSwitch
  ====================================
*/

export type CommandGroupItemBoxSwitchType = {
  className?: string;
  commandProps?: CommandStyleProps;
  commandGroupProps?: CommandGroupStyleProps;
  commandGroupItemProps?: CommandGroupItemStyleProps;
};

export const commandGroupItemBoxSwitchClass = (_: CommandGroupItemBoxSwitchType) => "";
export const commandGroupItemBoxSwitchHandleClass = (_: CommandGroupItemBoxSwitchType) => "";

export const CommandGroupItemBoxSwitchLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxSwitchType;
  handleSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CommandGroupItemBoxButton
  ====================================
*/

export type CommandGroupItemBoxButtonType = {
  className?: string;
  commandProps?: CommandStyleProps;
  commandGroupProps?: CommandGroupStyleProps;
  commandGroupItemProps?: CommandGroupItemStyleProps;
};

export const commandGroupItemBoxButtonClass = (_: CommandGroupItemBoxButtonType) => "";
export const commandGroupItemBoxButtonIconClass = (_: CommandGroupItemBoxButtonType) => "";

export const CommandGroupItemBoxButtonLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxButtonType;
  iconSlot: React.ReactNode;
}) => <></>;
