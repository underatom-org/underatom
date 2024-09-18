import type { RenderRoot } from "../_utils";

/*
  ====================================
  AvatarToggle
  ====================================
*/

export type AvatarToggleStyleProps = {
  size?: "sm" | "md" | "lg" | "xl";
};

export type AvatarToggleType = {
  className?: string;
  avatarToggleProps?: AvatarToggleStyleProps;
};

export const avatarToggleDefaults: Required<AvatarToggleStyleProps> = {
  size: "md",
};

export const avatarToggleClass = (_: AvatarToggleType) => "";

export const AvatarToggleLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarToggleType;
  contentSlot: React.ReactNode;
  checkSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarToggleCheck
  ====================================
*/

export type AvatarToggleCheckType = {
  className?: string;
  avatarToggleProps?: AvatarToggleStyleProps;
};

export const avatarToggleCheckClass = (_: AvatarToggleCheckType) => "";
export const avatarToggleCheckIconClass = (_: AvatarToggleCheckType) => "";

export const AvatarToggleCheckLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarToggleCheckType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarToggleContent
  ====================================
*/

export type AvatarToggleContentType = {
  className?: string;
  avatarToggleProps?: AvatarToggleStyleProps;
};

export const avatarToggleContentClass = (_: AvatarToggleContentType) => "";
export const avatarToggleContentImageClass = (_: AvatarToggleContentType) => "";
export const avatarToggleContentLabelClass = (_: AvatarToggleContentType) => "";
export const avatarToggleContentIconClass = (_: AvatarToggleContentType) => "";

export const AvatarToggleContentLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarToggleContentType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const AvatarToggleContentWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarToggleContentType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;
