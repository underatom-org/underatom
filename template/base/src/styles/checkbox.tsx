import type { RenderRoot } from "../_utils";

/*
  ====================================
  Checkbox
  ====================================
*/

export type CheckboxStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type CheckboxType = {
  className?: string;
  checkboxProps?: CheckboxStyleProps;
};

export const checkboxDefaults: Required<CheckboxStyleProps> = {
  size: "md",
};

export const checkboxClass = (_: CheckboxType) => "";
export const checkboxLabelClass = (_: CheckboxType) => "";
export const checkboxDescriptionClass = (_: CheckboxType) => "";
export const checkboxAsteriskClass = (_: CheckboxType) => "";

export const CheckboxLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CheckboxType;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  buttonSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  CheckboxButton
  ====================================
*/

export type CheckboxButtonType = {
  className?: string;
  checkboxProps?: CheckboxStyleProps;
};

export const checkboxButtonClass = (_: CheckboxButtonType) => "";
export const checkboxButtonIndicatorClass = (_: CheckboxButtonType) => "";

export const CheckboxButtonLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: CheckboxButtonType;
  indicatorSlot: React.ReactNode;
}) => <></>;
