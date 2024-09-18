import type { RenderRoot } from "../_utils";

/*
  ====================================
  AvatarGroup
  ====================================
*/

export type AvatarGroupStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type AvatarGroupType = {
  className?: string;
  avatarGroupProps?: AvatarGroupStyleProps;
};

export const avatarGroupDefaults: Required<AvatarGroupStyleProps> = {
  size: "md",
};

export const avatarGroupClass = (_: AvatarGroupType) => "";

export const AvatarGroupLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarGroupType;
  avatarSlots: React.ReactNode;
  actionSlot: React.ReactNode;
  infoSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarGroupInfo
  ====================================
*/

export type AvatarGroupInfoType = {
  className?: string;
  avatarGroupProps?: AvatarGroupStyleProps;
};

export const avatarGroupInfoClass = (_: AvatarGroupInfoType) => "";
export const avatarGroupInfoLabelClass = (_: AvatarGroupInfoType) => "";

export const AvatarGroupInfoLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarGroupInfoType;
  labelSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarGroupAction
  ====================================
*/

export type AvatarGroupActionType = {
  className?: string;
  avatarGroupProps?: AvatarGroupStyleProps;
};

export const avatarGroupActionClass = (_: AvatarGroupActionType) => "";
export const avatarGroupActionIconClass = (_: AvatarGroupActionType) => "";

export const AvatarGroupActionLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarGroupActionType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarGroupAvatar
  ====================================
*/

export type AvatarGroupAvatarType = {
  className?: string;
  avatarGroupProps?: AvatarGroupStyleProps;
};

export const avatarGroupAvatarClass = (_: AvatarGroupAvatarType) => "";
export const avatarGroupAvatarImageClass = (_: AvatarGroupAvatarType) => "";
export const avatarGroupAvatarLabelClass = (_: AvatarGroupAvatarType) => "";
export const avatarGroupAvatarIconClass = (_: AvatarGroupAvatarType) => "";

export const AvatarGroupAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarGroupAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const AvatarGroupAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarGroupAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;
