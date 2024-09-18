import type { RenderRoot } from "../_utils";

/*
  ====================================
  Progress
  ====================================
*/

export type ProgressStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type ProgressType = {
  className?: string;
  progressProps?: ProgressStyleProps;
};

export const progressDefaults: Required<ProgressStyleProps> = {
  size: "md",
};

export const progressClass = (_: ProgressType) => "";
export const progressLabelClass = (_: ProgressType) => "";
export const progressDescriptionClass = (_: ProgressType) => "";
export const progressValueClass = (_: ProgressType) => "";

export const ProgressLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ProgressType;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  barSlot: React.ReactNode;
  valueSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ProgressBar
  ====================================
*/

export type ProgressBarStyleProps = {
  color?: "primary" | "base";
};

export type ProgressBarType = {
  className?: string;
  progressBarProps?: ProgressBarStyleProps;
  progressProps?: ProgressStyleProps;
};

export const progressBarDefaults: Required<ProgressBarStyleProps> = {
  color: "primary",
};

export const progressBarClass = (_: ProgressBarType) => "";
export const progressBarFillerClass = (_: ProgressBarType) => "";

export const ProgressBarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ProgressBarType;
  fillerSlot: React.ReactNode;
}) => <></>;
