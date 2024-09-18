import type { RenderRoot } from "../_utils";

/*
  ====================================
  RadioGroup
  ====================================
*/

export type RadioGroupStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type RadioGroupType = {
  className?: string;
  radioGroupProps?: RadioGroupStyleProps;
};

export const radioGroupDefaults: Required<RadioGroupStyleProps> = {
  size: "md",
};

export const radioGroupClass = (_: RadioGroupType) => "";
export const radioGroupLabelClass = (_: RadioGroupType) => "";
export const radioGroupDescriptionClass = (_: RadioGroupType) => "";
export const radioGroupAsteriskClass = (_: RadioGroupType) => "";

export const RadioGroupLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: RadioGroupType;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  radioSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  RadioGroupRadio
  ====================================
*/

export type RadioGroupRadioType = {
  className?: string;
  radioGroupProps?: RadioGroupStyleProps;
};

export const radioGroupRadioClass = (_: RadioGroupRadioType) => "";
export const radioGroupRadioLabelClass = (_: RadioGroupRadioType) => "";
export const radioGroupRadioDescriptionClass = (_: RadioGroupRadioType) => "";

export const RadioGroupRadioLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: RadioGroupRadioType;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  buttonSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  RadioGroupRadioButton
  ====================================
*/

export type RadioGroupRadioButtonType = {
  className?: string;
  radioGroupProps?: RadioGroupStyleProps;
};

export const radioGroupRadioButtonClass = (_: RadioGroupRadioButtonType) => "";
export const radioGroupRadioButtonIndicatorClass = (_: RadioGroupRadioButtonType) => "";

export const RadioGroupRadioButtonLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: RadioGroupRadioButtonType;
  indicatorSlot: React.ReactNode;
}) => <></>;
