import type { RenderRoot } from "../_utils";

/*
  ====================================
  Avatar
  ====================================
*/

export type AvatarStyleProps = {
  size?: "sm" | "md" | "lg" | "xl";
};

export type AvatarType = {
  className?: string;
  avatarProps?: AvatarStyleProps;
};

export const avatarDefaults: Required<AvatarStyleProps> = {
  size: "md",
};

export const avatarClass = (_: AvatarType) => "";

export const AvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarType;
  contentSlot: React.ReactNode;
  actionSlot: React.ReactNode;
  notificationSlot: React.ReactNode;
  statusSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  indicatorSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarBadge
  ====================================
*/

export type AvatarBadgeStyleProps = {
  color?: "primary" | "base" | "red" | "green";
};

export type AvatarBadgeType = {
  className?: string;
  avatarBadgeProps?: AvatarBadgeStyleProps;
  avatarProps?: AvatarStyleProps;
};

export const avatarBadgeDefaults: Required<AvatarBadgeStyleProps> = {
  color: "primary",
};

export const avatarBadgeClass = (_: AvatarBadgeType) => "";
export const avatarBadgeLabelClass = (_: AvatarBadgeType) => "";
export const avatarBadgeIconClass = (_: AvatarBadgeType) => "";

export const AvatarBadgeLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarBadgeType;
  labelSlot: React.ReactNode;
}) => <></>;
export const AvatarBadgeWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarBadgeType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarAction
  ====================================
*/

export type AvatarActionType = {
  className?: string;
  avatarProps?: AvatarStyleProps;
};

export const avatarActionClass = (_: AvatarActionType) => "";
export const avatarActionIconClass = (_: AvatarActionType) => "";

export const AvatarActionLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarActionType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarStatus
  ====================================
*/

export type AvatarStatusStyleProps = {
  status?: "online" | "offline" | "away" | "busy";
};

export type AvatarStatusType = {
  className?: string;
  avatarStatusProps?: AvatarStatusStyleProps;
  avatarProps?: AvatarStyleProps;
};

export const avatarStatusDefaults: Required<AvatarStatusStyleProps> = {
  status: "online",
};

export const avatarStatusClass = (_: AvatarStatusType) => "";
export const avatarStatusIconClass = (_: AvatarStatusType) => "";

export const AvatarStatusLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarStatusType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarContent
  ====================================
*/

export type AvatarContentType = {
  className?: string;
  avatarProps?: AvatarStyleProps;
};

export const avatarContentClass = (_: AvatarContentType) => "";
export const avatarContentImageClass = (_: AvatarContentType) => "";
export const avatarContentLabelClass = (_: AvatarContentType) => "";
export const avatarContentIconClass = (_: AvatarContentType) => "";

export const AvatarContentLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarContentType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const AvatarContentWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarContentType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarIndicator
  ====================================
*/

export type AvatarIndicatorType = {
  className?: string;
  avatarProps?: AvatarStyleProps;
};

export const avatarIndicatorClass = (_: AvatarIndicatorType) => "";
export const avatarIndicatorImageClass = (_: AvatarIndicatorType) => "";
export const avatarIndicatorIconClass = (_: AvatarIndicatorType) => "";

export const AvatarIndicatorLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarIndicatorType;
  imageSlot: React.ReactNode;
}) => <></>;
export const AvatarIndicatorWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarIndicatorType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarNotification
  ====================================
*/

export type AvatarNotificationStyleProps = {
  color?: "primary" | "red";
};

export type AvatarNotificationType = {
  className?: string;
  avatarNotificationProps?: AvatarNotificationStyleProps;
  avatarProps?: AvatarStyleProps;
};

export const avatarNotificationDefaults: Required<AvatarNotificationStyleProps> = {
  color: "primary",
};

export const avatarNotificationClass = (_: AvatarNotificationType) => "";
export const avatarNotificationCounterClass = (_: AvatarNotificationType) => "";

export const AvatarNotificationLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarNotificationType;
  counterSlot: React.ReactNode;
}) => <></>;
