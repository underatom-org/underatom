import type { RenderRoot } from "../_utils";

/*
  ====================================
  Toast
  ====================================
*/

export type ToastStyleProps = {
  status?: "primary" | "base" | "danger" | "warning" | "success";
};

export type ToastType = {
  className?: string;
  toastProps?: ToastStyleProps;
};

export const toastDefaults: Required<ToastStyleProps> = {
  status: "primary",
};

export const toastClass = (_: ToastType) => "";
export const toastTitleClass = (_: ToastType) => "";
export const toastSubtitleClass = (_: ToastType) => "";
export const toastDescriptionClass = (_: ToastType) => "";
export const toastIconClass = (_: ToastType) => "";

export const ToastLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ToastType;
  titleSlot: React.ReactNode;
  subtitleSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  statusSlot: React.ReactNode;
  actionSlot1: React.ReactNode;
  actionSlot2: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const ToastWithAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ToastType;
  titleSlot: React.ReactNode;
  subtitleSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  avatarSlot: React.ReactNode;
  actionSlot1: React.ReactNode;
  actionSlot2: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const ToastWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ToastType;
  titleSlot: React.ReactNode;
  subtitleSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  iconSlot: React.ReactNode;
  actionSlot1: React.ReactNode;
  actionSlot2: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ToastAction
  ====================================
*/

export type ToastActionStyleProps = {
  variant?: "primary" | "ghost";
};

export type ToastActionType = {
  className?: string;
  toastActionProps?: ToastActionStyleProps;
  toastProps?: ToastStyleProps;
};

export const toastActionDefaults: Required<ToastActionStyleProps> = {
  variant: "primary",
};

export const toastActionClass = (_: ToastActionType) => "";
export const toastActionLabelClass = (_: ToastActionType) => "";
export const toastActionIconClass = (_: ToastActionType) => "";

export const ToastActionLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ToastActionType;
  labelSlot: React.ReactNode;
}) => <></>;
export const ToastActionWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ToastActionType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ToastStatus
  ====================================
*/

export type ToastStatusType = {
  className?: string;
  toastProps?: ToastStyleProps;
};

export const toastStatusClass = (_: ToastStatusType) => "";
export const toastStatusIconClass = (_: ToastStatusType) => "";

export const ToastStatusLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ToastStatusType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ToastAvatar
  ====================================
*/

export type ToastAvatarType = {
  className?: string;
  toastProps?: ToastStyleProps;
};

export const toastAvatarClass = (_: ToastAvatarType) => "";
export const toastAvatarImageClass = (_: ToastAvatarType) => "";
export const toastAvatarLabelClass = (_: ToastAvatarType) => "";
export const toastAvatarIconClass = (_: ToastAvatarType) => "";

export const ToastAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ToastAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const ToastAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ToastAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ToastDismiss
  ====================================
*/

export type ToastDismissType = {
  className?: string;
  toastProps?: ToastStyleProps;
};

export const toastDismissClass = (_: ToastDismissType) => "";
export const toastDismissIconClass = (_: ToastDismissType) => "";

export const ToastDismissLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ToastDismissType;
  iconSlot: React.ReactNode;
}) => <></>;
