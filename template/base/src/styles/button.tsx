import type { RenderRoot } from "../_utils";

/*
  ====================================
  Button
  ====================================
*/

export type ButtonStyleProps = {
  variant?: "primary" | "base" | "danger" | "ghost" | "link";
  attachment?: "none" | "center" | "start" | "end";
  size?: "sm" | "md" | "lg";
  fullWidth?: true | false;
};

export type ButtonDotStyleProps = {
  color?: "primary" | "base" | "green" | "red";
};

export type ButtonType = {
  className?: string;
  buttonProps?: ButtonStyleProps;
};

export type ButtonDotType = {
  className?: string;
  buttonProps?: ButtonStyleProps;
  buttonDotProps?: ButtonDotStyleProps;
};

export const buttonDefaults: Required<ButtonStyleProps> = {
  variant: "primary",
  attachment: "none",
  size: "md",
  fullWidth: false,
};

export const buttonDotDefaults: Required<ButtonDotStyleProps> = {
  color: "primary",
};

export const buttonClass = (_: ButtonType) => "";
export const buttonIconClass = (_: ButtonType) => "";
export const buttonLabelClass = (_: ButtonType) => "";
export const buttonDotClass = (_: ButtonDotType) => "";
export const buttonCaretClass = (_: ButtonType) => "";
export const buttonLoaderClass = (_: ButtonType) => "";

export const IconButtonLayout = (_: { renderRoot: RenderRoot; styleProps: ButtonType; iconSlot: React.ReactNode }) => (
  <></>
);
export const ButtonLayout = (_: { renderRoot: RenderRoot; styleProps: ButtonType; labelSlot: React.ReactNode }) => (
  <></>
);
export const ButtonWithLeftIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const ButtonWithRightIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const ButtonWithDotLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const ButtonWithCaretLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) => <></>;
export const LoadingButtonLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  labelSlot: React.ReactNode;
  loaderSlot: React.ReactNode;
}) => <></>;
