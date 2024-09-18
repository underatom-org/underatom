import type { RenderRoot } from "../_utils";

/*
  ====================================
  Input
  ====================================
*/

export type InputStyleProps = {
  size?: "sm" | "md" | "lg";
  attachment?: "none" | "start" | "center" | "end";
};

export type InputType = {
  className?: string;
  inputProps?: InputStyleProps;
};

export const inputDefaults: Required<InputStyleProps> = {
  size: "md",
  attachment: "none",
};

export const inputClass = (_: InputType) => "";
export const inputLabelClass = (_: InputType) => "";
export const inputDescriptionClass = (_: InputType) => "";
export const inputAsteriskClass = (_: InputType) => "";

export const InputLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputType;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  boxSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  InputBox
  ====================================
*/

export type InputBoxType = {
  className?: string;
  inputProps?: InputStyleProps;
};

export const inputBoxClass = (_: InputBoxType) => "";
export const inputBoxTextClass = (_: InputBoxType) => "";
export const inputBoxTrailingIconClass = (_: InputBoxType) => "";
export const inputBoxLeadingIconClass = (_: InputBoxType) => "";

export const InputBoxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxType;
  textSlot: React.ReactNode;
  trailingIconSlot: React.ReactNode;
  leadingIconSlot: React.ReactNode;
  clearSlot: React.ReactNode;
}) => <></>;
export const InputBoxWithSegmentsLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxType;
  trailingIconSlot: React.ReactNode;
  segmentSlots: React.ReactNode;
  clearSlot: React.ReactNode;
}) => <></>;
export const InputBoxWithTagsLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxType;
  textSlot: React.ReactNode;
  trailingIconSlot: React.ReactNode;
  tagSlots: React.ReactNode;
  clearSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  InputBoxTag
  ====================================
*/

export type InputBoxTagType = {
  className?: string;
  inputProps?: InputStyleProps;
};

export const inputBoxTagClass = (_: InputBoxTagType) => "";
export const inputBoxTagLabelClass = (_: InputBoxTagType) => "";
export const inputBoxTagIconClass = (_: InputBoxTagType) => "";
export const inputBoxTagDotClass = (_: InputBoxTagType) => "";

export const InputBoxTagLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const InputBoxTagWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const InputBoxTagWithDotLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const InputBoxTagWithAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  InputBoxClear
  ====================================
*/

export type InputBoxClearType = {
  className?: string;
  inputProps?: InputStyleProps;
};

export const inputBoxClearClass = (_: InputBoxClearType) => "";
export const inputBoxClearIconClass = (_: InputBoxClearType) => "";

export const InputBoxClearLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxClearType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  InputBoxSegment
  ====================================
*/

export type InputBoxSegmentType = {
  className?: string;
  inputProps?: InputStyleProps;
};

export const inputBoxSegmentClass = (_: InputBoxSegmentType) => "";
export const inputBoxSegmentLabelClass = (_: InputBoxSegmentType) => "";

export const InputBoxSegmentLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxSegmentType;
  labelSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  InputBoxTagAvatar
  ====================================
*/

export type InputBoxTagAvatarType = {
  className?: string;
  inputProps?: InputStyleProps;
};

export const inputBoxTagAvatarClass = (_: InputBoxTagAvatarType) => "";
export const inputBoxTagAvatarImageClass = (_: InputBoxTagAvatarType) => "";
export const inputBoxTagAvatarLabelClass = (_: InputBoxTagAvatarType) => "";
export const inputBoxTagAvatarIconClass = (_: InputBoxTagAvatarType) => "";

export const InputBoxTagAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const InputBoxTagAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  InputBoxTagDismiss
  ====================================
*/

export type InputBoxTagDismissType = {
  className?: string;
  inputProps?: InputStyleProps;
};

export const inputBoxTagDismissClass = (_: InputBoxTagDismissType) => "";
export const inputBoxTagDismissIconClass = (_: InputBoxTagDismissType) => "";

export const InputBoxTagDismissLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagDismissType;
  iconSlot: React.ReactNode;
}) => <></>;
