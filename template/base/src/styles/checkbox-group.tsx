import type { RenderRoot } from "../_utils";

/*
  ====================================
  CheckboxGroup
  ====================================
*/

export type CheckboxGroupStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type CheckboxGroupType = {
  className?: string;
  checkboxGroupProps?: CheckboxGroupStyleProps;
};

export const checkboxGroupDefaults: Required<CheckboxGroupStyleProps> = {
  size: "md",
};

export const checkboxGroupClass = (_: CheckboxGroupType) => "";
export const checkboxGroupLabelClass = (_: CheckboxGroupType) => "";
export const checkboxGroupDescriptionClass = (_: CheckboxGroupType) => "";
export const checkboxGroupAsteriskClass = (_: CheckboxGroupType) => "";

export const CheckboxGroupLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CheckboxGroupType;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  checkboxSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  CheckboxGroupCheckbox
  ====================================
*/

export type CheckboxGroupCheckboxType = {
  className?: string;
  checkboxGroupProps?: CheckboxGroupStyleProps;
};

export const checkboxGroupCheckboxClass = (_: CheckboxGroupCheckboxType) => "";
export const checkboxGroupCheckboxLabelClass = (_: CheckboxGroupCheckboxType) => "";
export const checkboxGroupCheckboxDescriptionClass = (_: CheckboxGroupCheckboxType) => "";

export const CheckboxGroupCheckboxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CheckboxGroupCheckboxType;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  buttonSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CheckboxGroupCheckboxButton
  ====================================
*/

export type CheckboxGroupCheckboxButtonType = {
  className?: string;
  checkboxGroupProps?: CheckboxGroupStyleProps;
};

export const checkboxGroupCheckboxButtonClass = (_: CheckboxGroupCheckboxButtonType) => "";
export const checkboxGroupCheckboxButtonIndicatorClass = (_: CheckboxGroupCheckboxButtonType) => "";

export const CheckboxGroupCheckboxButtonLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CheckboxGroupCheckboxButtonType;
  indicatorSlot: React.ReactNode;
}) => <></>;
