import type { RenderRoot } from "../_utils";

/*
  ====================================
  Alert
  ====================================
*/

export type AlertStyleProps = {
  status?: "primary" | "base" | "danger" | "warning" | "success";
};

export type AlertType = {
  className?: string;
  alertProps?: AlertStyleProps;
};

export const alertDefaults: Required<AlertStyleProps> = {
  status: "primary",
};

export const alertClass = (_: AlertType) => "";
export const alertTitleClass = (_: AlertType) => "";
export const alertSubtitleClass = (_: AlertType) => "";
export const alertDescriptionClass = (_: AlertType) => "";
export const alertIconClass = (_: AlertType) => "";

export const AlertLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AlertType;
  titleSlot: React.ReactNode;
  subtitleSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  iconSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
  actionSlot1: React.ReactNode;
  actionSlot2: React.ReactNode;
}) => <></>;
export const AlertWithStatusLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AlertType;
  titleSlot: React.ReactNode;
  subtitleSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  statusSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
  actionSlot1: React.ReactNode;
  actionSlot2: React.ReactNode;
}) => <></>;

/*
  ====================================
  AlertAction
  ====================================
*/

export type AlertActionStyleProps = {
  variant?: "primary" | "base";
};

export type AlertActionType = {
  className?: string;
  alertActionProps?: AlertActionStyleProps;
  alertProps?: AlertStyleProps;
};

export const alertActionDefaults: Required<AlertActionStyleProps> = {
  variant: "primary",
};

export const alertActionClass = (_: AlertActionType) => "";
export const alertActionLabelClass = (_: AlertActionType) => "";
export const alertActionIconClass = (_: AlertActionType) => "";

export const AlertActionLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AlertActionType;
  labelSlot: React.ReactNode;
}) => <></>;
export const AlertActionWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AlertActionType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AlertStatus
  ====================================
*/

export type AlertStatusType = {
  className?: string;
  alertProps?: AlertStyleProps;
};

export const alertStatusClass = (_: AlertStatusType) => "";
export const alertStatusIconClass = (_: AlertStatusType) => "";

export const AlertStatusLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AlertStatusType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  AlertDismiss
  ====================================
*/

export type AlertDismissType = {
  className?: string;
  alertProps?: AlertStyleProps;
};

export const alertDismissClass = (_: AlertDismissType) => "";
export const alertDismissIconClass = (_: AlertDismissType) => "";

export const AlertDismissLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: AlertDismissType;
  iconSlot: React.ReactNode;
}) => <></>;
