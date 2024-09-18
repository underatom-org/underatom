import type { RenderRoot } from "../_utils";

/*
  ====================================
  Textarea
  ====================================
*/

export type TextareaStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type TextareaType = {
  className?: string;
  textareaProps?: TextareaStyleProps;
};

export const textareaDefaults: Required<TextareaStyleProps> = {
  size: "md",
};

export const textareaClass = (_: TextareaType) => "";
export const textareaLabelClass = (_: TextareaType) => "";
export const textareaDescriptionClass = (_: TextareaType) => "";
export const textareaAsteriskClass = (_: TextareaType) => "";

export const TextareaLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TextareaType;
  boxSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  TextareaBox
  ====================================
*/

export type TextareaBoxType = {
  className?: string;
  textareaProps?: TextareaStyleProps;
};

export const textareaBoxClass = (_: TextareaBoxType) => "";
export const textareaBoxTextClass = (_: TextareaBoxType) => "";

export const TextareaBoxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxType;
  textSlot: React.ReactNode;
}) => <></>;
export const TextareaBoxWithTagsLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxType;
  tagSlots: React.ReactNode;
  textSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  TextareaBoxTag
  ====================================
*/

export type TextareaBoxTagType = {
  className?: string;
  textareaProps?: TextareaStyleProps;
};

export const textareaBoxTagClass = (_: TextareaBoxTagType) => "";
export const textareaBoxTagLabelClass = (_: TextareaBoxTagType) => "";
export const textareaBoxTagIconClass = (_: TextareaBoxTagType) => "";
export const textareaBoxTagDotClass = (_: TextareaBoxTagType) => "";

export const TextareaBoxTagLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const TextareaBoxTagWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const TextareaBoxTagWithDotLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const TextareaBoxTagWithAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  TextareaBoxTagAvatar
  ====================================
*/

export type TextareaBoxTagAvatarType = {
  className?: string;
  textareaProps?: TextareaStyleProps;
};

export const textareaBoxTagAvatarClass = (_: TextareaBoxTagAvatarType) => "";
export const textareaBoxTagAvatarImageClass = (_: TextareaBoxTagAvatarType) => "";
export const textareaBoxTagAvatarLabelClass = (_: TextareaBoxTagAvatarType) => "";
export const textareaBoxTagAvatarIconClass = (_: TextareaBoxTagAvatarType) => "";

export const TextareaBoxTagAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const TextareaBoxTagAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  TextareaBoxTagDismiss
  ====================================
*/

export type TextareaBoxTagDismissType = {
  className?: string;
  textareaProps?: TextareaStyleProps;
};

export const textareaBoxTagDismissClass = (_: TextareaBoxTagDismissType) => "";
export const textareaBoxTagDismissIconClass = (_: TextareaBoxTagDismissType) => "";

export const TextareaBoxTagDismissLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagDismissType;
  iconSlot: React.ReactNode;
}) => <></>;
