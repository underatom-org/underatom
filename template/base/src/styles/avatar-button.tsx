import type { RenderRoot } from "../_utils";

/*
  ====================================
  AvatarButton
  ====================================
*/

export type AvatarButtonStyleProps = {
  size?: "sm" | "md" | "lg" | "xl";
};

export type AvatarButtonType = {
  className?: string;
  avatarButtonProps?: AvatarButtonStyleProps;
};

export const avatarButtonDefaults: Required<AvatarButtonStyleProps> = {
  size: "md",
};

export const avatarButtonClass = (_: AvatarButtonType) => "";

export const AvatarButtonLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonType;
  contentSlot: React.ReactNode;
  notificationSlot: React.ReactNode;
  statusSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  indicatorSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarButtonBadge
  ====================================
*/

export type AvatarButtonBadgeStyleProps = {
  color?: "primary" | "base" | "red" | "green";
};

export type AvatarButtonBadgeType = {
  className?: string;
  avatarButtonBadgeProps?: AvatarButtonBadgeStyleProps;
  avatarButtonProps?: AvatarButtonStyleProps;
};

export const avatarButtonBadgeDefaults: Required<AvatarButtonBadgeStyleProps> = {
  color: "primary",
};

export const avatarButtonBadgeClass = (_: AvatarButtonBadgeType) => "";
export const avatarButtonBadgeLabelClass = (_: AvatarButtonBadgeType) => "";
export const avatarButtonBadgeIconClass = (_: AvatarButtonBadgeType) => "";

export const AvatarButtonBadgeLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonBadgeType;
  labelSlot: React.ReactNode;
}) => <></>;
export const AvatarButtonBadgeWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonBadgeType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarButtonStatus
  ====================================
*/

export type AvatarButtonStatusStyleProps = {
  status?: "online" | "offline" | "away" | "busy";
};

export type AvatarButtonStatusType = {
  className?: string;
  avatarButtonStatusProps?: AvatarButtonStatusStyleProps;
  avatarButtonProps?: AvatarButtonStyleProps;
};

export const avatarButtonStatusDefaults: Required<AvatarButtonStatusStyleProps> = {
  status: "online",
};

export const avatarButtonStatusClass = (_: AvatarButtonStatusType) => "";
export const avatarButtonStatusIconClass = (_: AvatarButtonStatusType) => "";

export const AvatarButtonStatusLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonStatusType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarButtonContent
  ====================================
*/

export type AvatarButtonContentType = {
  className?: string;
  avatarButtonProps?: AvatarButtonStyleProps;
};

export const avatarButtonContentClass = (_: AvatarButtonContentType) => "";
export const avatarButtonContentImageClass = (_: AvatarButtonContentType) => "";
export const avatarButtonContentLabelClass = (_: AvatarButtonContentType) => "";
export const avatarButtonContentIconClass = (_: AvatarButtonContentType) => "";

export const AvatarButtonContentLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonContentType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const AvatarButtonContentWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonContentType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarButtonIndicator
  ====================================
*/

export type AvatarButtonIndicatorType = {
  className?: string;
  avatarButtonProps?: AvatarButtonStyleProps;
};

export const avatarButtonIndicatorClass = (_: AvatarButtonIndicatorType) => "";
export const avatarButtonIndicatorImageClass = (_: AvatarButtonIndicatorType) => "";
export const avatarButtonIndicatorIconClass = (_: AvatarButtonIndicatorType) => "";

export const AvatarButtonIndicatorLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonIndicatorType;
  imageSlot: React.ReactNode;
}) => <></>;
export const AvatarButtonIndicatorWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonIndicatorType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AvatarButtonNotification
  ====================================
*/

export type AvatarButtonNotificationStyleProps = {
  color?: "primary" | "red";
};

export type AvatarButtonNotificationType = {
  className?: string;
  avatarButtonNotificationProps?: AvatarButtonNotificationStyleProps;
  avatarButtonProps?: AvatarButtonStyleProps;
};

export const avatarButtonNotificationDefaults: Required<AvatarButtonNotificationStyleProps> = {
  color: "primary",
};

export const avatarButtonNotificationClass = (_: AvatarButtonNotificationType) => "";
export const avatarButtonNotificationCounterClass = (_: AvatarButtonNotificationType) => "";

export const AvatarButtonNotificationLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonNotificationType;
  counterSlot: React.ReactNode;
}) => <></>;
