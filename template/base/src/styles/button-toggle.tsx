import type { RenderRoot } from "../_utils";

/*
  ====================================
  ButtonToggle
  ====================================
*/

export type ButtonToggleStyleProps = {
  attachment?: "none" | "center" | "start" | "end";
  fullWidth?: true | false;
  size?: "sm" | "md" | "lg";
};

export type ButtonToggleDotStyleProps = {
  color?: "primary" | "base" | "green" | "red";
};

export type ButtonToggleType = {
  className?: string;
  buttonToggleProps?: ButtonToggleStyleProps;
};

export type ButtonToggleDotType = {
  className?: string;
  buttonToggleProps?: ButtonToggleStyleProps;
  buttonToggleDotProps?: ButtonToggleDotStyleProps;
};

export const buttonToggleDefaults: Required<ButtonToggleStyleProps> = {
  attachment: "none",
  fullWidth: false,
  size: "md",
};

export const buttonToggleDotDefaults: Required<ButtonToggleDotStyleProps> = {
  color: "primary",
};

export const buttonToggleClass = (_: ButtonToggleType) => "";
export const buttonToggleIconClass = (_: ButtonToggleType) => "";
export const buttonToggleLabelClass = (_: ButtonToggleType) => "";
export const buttonToggleDotClass = (_: ButtonToggleDotType) => "";
export const buttonToggleLoaderClass = (_: ButtonToggleType) => "";

export const IconButtonToggleLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
  iconSlot: React.ReactNode;
}) => <></>;
export const ButtonToggleLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
  labelSlot: React.ReactNode;
}) => <></>;
export const ButtonToggleWithLeftIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const ButtonToggleWithRightIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const ButtonToggleWithDotLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const LoadingButtonToggleLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
  labelSlot: React.ReactNode;
  loaderSlot: React.ReactNode;
}) => <></>;
