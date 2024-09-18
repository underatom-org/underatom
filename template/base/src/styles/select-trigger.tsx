import type { RenderRoot } from "../_utils";

/*
  ====================================
  SelectTrigger
  ====================================
*/

export type SelectTriggerStyleProps = {
  attachment?: "none" | "start" | "center" | "end";
  size?: "sm" | "md" | "lg";
};

export type SelectTriggerType = {
  className?: string;
  selectTriggerProps?: SelectTriggerStyleProps;
};

export const selectTriggerDefaults: Required<SelectTriggerStyleProps> = {
  attachment: "none",
  size: "md",
};

export const selectTriggerClass = (_: SelectTriggerType) => "";
export const selectTriggerLabelClass = (_: SelectTriggerType) => "";
export const selectTriggerDescriptionClass = (_: SelectTriggerType) => "";
export const selectTriggerAsteriskClass = (_: SelectTriggerType) => "";

export const SelectTriggerLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerType;
  boxSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectTriggerBox
  ====================================
*/

export type SelectTriggerBoxType = {
  className?: string;
  selectTriggerProps?: SelectTriggerStyleProps;
};

export const selectTriggerBoxClass = (_: SelectTriggerBoxType) => "";
export const selectTriggerBoxIconClass = (_: SelectTriggerBoxType) => "";
export const selectTriggerBoxTextClass = (_: SelectTriggerBoxType) => "";
export const selectTriggerBoxCaretClass = (_: SelectTriggerBoxType) => "";

export const SelectTriggerBoxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxType;
  iconSlot: React.ReactNode;
  textSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) => <></>;
export const SelectTriggerBoxWithAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxType;
  avatarSlot: React.ReactNode;
  textSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) => <></>;
export const SelectTriggerBoxWithTagsLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxType;
  tagSlots: React.ReactNode;
  textSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectTriggerBoxTag
  ====================================
*/

export type SelectTriggerBoxTagType = {
  className?: string;
  selectTriggerProps?: SelectTriggerStyleProps;
};

export const selectTriggerBoxTagClass = (_: SelectTriggerBoxTagType) => "";
export const selectTriggerBoxTagLabelClass = (_: SelectTriggerBoxTagType) => "";
export const selectTriggerBoxTagIconClass = (_: SelectTriggerBoxTagType) => "";

export const SelectTriggerBoxTagLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const SelectTriggerBoxTagWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const SelectTriggerBoxTagWithAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectTriggerBoxAvatar
  ====================================
*/

export type SelectTriggerBoxAvatarType = {
  className?: string;
  selectTriggerProps?: SelectTriggerStyleProps;
};

export const selectTriggerBoxAvatarClass = (_: SelectTriggerBoxAvatarType) => "";
export const selectTriggerBoxAvatarImageClass = (_: SelectTriggerBoxAvatarType) => "";
export const selectTriggerBoxAvatarLabelClass = (_: SelectTriggerBoxAvatarType) => "";
export const selectTriggerBoxAvatarIconClass = (_: SelectTriggerBoxAvatarType) => "";

export const SelectTriggerBoxAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const SelectTriggerBoxAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectTriggerBoxTagAvatar
  ====================================
*/

export type SelectTriggerBoxTagAvatarType = {
  className?: string;
  selectTriggerProps?: SelectTriggerStyleProps;
};

export const selectTriggerBoxTagAvatarClass = (_: SelectTriggerBoxTagAvatarType) => "";
export const selectTriggerBoxTagAvatarImageClass = (_: SelectTriggerBoxTagAvatarType) => "";
export const selectTriggerBoxTagAvatarLabelClass = (_: SelectTriggerBoxTagAvatarType) => "";
export const selectTriggerBoxTagAvatarIconClass = (_: SelectTriggerBoxTagAvatarType) => "";

export const SelectTriggerBoxTagAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const SelectTriggerBoxTagAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SelectTriggerBoxTagDismiss
  ====================================
*/

export type SelectTriggerBoxTagDismissType = {
  className?: string;
  selectTriggerProps?: SelectTriggerStyleProps;
};

export const selectTriggerBoxTagDismissClass = (_: SelectTriggerBoxTagDismissType) => "";
export const selectTriggerBoxTagDismissIconClass = (_: SelectTriggerBoxTagDismissType) => "";

export const SelectTriggerBoxTagDismissLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagDismissType;
  iconSlot: React.ReactNode;
}) => <></>;
