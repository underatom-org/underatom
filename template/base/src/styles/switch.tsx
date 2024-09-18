import type { RenderRoot } from "../_utils";

/*
  ====================================
  Switch
  ====================================
*/

export type SwitchStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type SwitchType = {
  className?: string;
  switchProps?: SwitchStyleProps;
};

export const switchDefaults: Required<SwitchStyleProps> = {
  size: "md",
};

export const switchClass = (_: SwitchType) => "";
export const switchLabelClass = (_: SwitchType) => "";
export const switchDescriptionClass = (_: SwitchType) => "";
export const switchAsteriskClass = (_: SwitchType) => "";

export const SwitchLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SwitchType;
  toggleSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SwitchToggle
  ====================================
*/

export type SwitchToggleStyleProps = {
  color?: "primary" | "success";
};

export type SwitchToggleType = {
  className?: string;
  switchToggleProps?: SwitchToggleStyleProps;
  switchProps?: SwitchStyleProps;
};

export const switchToggleDefaults: Required<SwitchToggleStyleProps> = {
  color: "primary",
};

export const switchToggleClass = (_: SwitchToggleType) => "";

export const SwitchToggleLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SwitchToggleType;
  handleSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  SwitchToggleHandle
  ====================================
*/

export type SwitchToggleHandleType = {
  className?: string;
  switchProps?: SwitchStyleProps;
  switchToggleProps?: SwitchToggleStyleProps;
};

export const switchToggleHandleClass = (_: SwitchToggleHandleType) => "";
export const switchToggleHandleIconClass = (_: SwitchToggleHandleType) => "";

export const SwitchToggleHandleLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: SwitchToggleHandleType;
  iconSlot: React.ReactNode;
}) => <></>;
