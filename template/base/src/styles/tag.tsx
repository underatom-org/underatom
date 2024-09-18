import type { RenderRoot } from "../_utils";

/*
  ====================================
  Tag
  ====================================
*/

export type TagStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type TagDotStyleProps = {
  color?: "primary" | "base" | "green" | "red";
};

export type TagType = {
  className?: string;
  tagProps?: TagStyleProps;
};

export type TagDotType = {
  className?: string;
  tagProps?: TagStyleProps;
  tagDotProps?: TagDotStyleProps;
};

export const tagDefaults: Required<TagStyleProps> = {
  size: "md",
};

export const tagDotDefaults: Required<TagDotStyleProps> = {
  color: "primary",
};

export const tagClass = (_: TagType) => "";
export const tagLabelClass = (_: TagType) => "";
export const tagIconClass = (_: TagType) => "";
export const tagDotClass = (_: TagDotType) => "";

export const TagLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TagType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const TagWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TagType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const TagWithDotLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TagType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const TagWithAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TagType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  TagAvatar
  ====================================
*/

export type TagAvatarType = {
  className?: string;
  tagProps?: TagStyleProps;
};

export const tagAvatarClass = (_: TagAvatarType) => "";
export const tagAvatarImageClass = (_: TagAvatarType) => "";
export const tagAvatarLabelClass = (_: TagAvatarType) => "";
export const tagAvatarIconClass = (_: TagAvatarType) => "";

export const TagAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TagAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const TagAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TagAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  TagDismiss
  ====================================
*/

export type TagDismissType = {
  className?: string;
  tagProps?: TagStyleProps;
};

export const tagDismissClass = (_: TagDismissType) => "";
export const tagDismissIconClass = (_: TagDismissType) => "";

export const TagDismissLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TagDismissType;
  iconSlot: React.ReactNode;
}) => <></>;
