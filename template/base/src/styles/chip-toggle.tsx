import type { RenderRoot } from "../_utils";

/*
  ====================================
  ChipToggle
  ====================================
*/

export type ChipToggleStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type ChipToggleDotStyleProps = {
  color?: "primary" | "base" | "green" | "red";
};

export type ChipToggleType = {
  className?: string;
  chipToggleProps?: ChipToggleStyleProps;
};

export type ChipToggleDotType = {
  className?: string;
  chipToggleProps?: ChipToggleStyleProps;
  chipToggleDotProps?: ChipToggleDotStyleProps;
};

export const chipToggleDefaults: Required<ChipToggleStyleProps> = {
  size: "md",
};

export const chipToggleDotDefaults: Required<ChipToggleDotStyleProps> = {
  color: "primary",
};

export const chipToggleClass = (_: ChipToggleType) => "";
export const chipToggleLabelClass = (_: ChipToggleType) => "";
export const chipToggleIconClass = (_: ChipToggleType) => "";
export const chipToggleDotClass = (_: ChipToggleDotType) => "";

export const ChipToggleLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const ChipToggleWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const ChipToggleWithAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const ChipToggleWithDotLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ChipToggleAvatar
  ====================================
*/

export type ChipToggleAvatarType = {
  className?: string;
  chipToggleProps?: ChipToggleStyleProps;
};

export const chipToggleAvatarClass = (_: ChipToggleAvatarType) => "";
export const chipToggleAvatarImageClass = (_: ChipToggleAvatarType) => "";
export const chipToggleAvatarLabelClass = (_: ChipToggleAvatarType) => "";
export const chipToggleAvatarIconClass = (_: ChipToggleAvatarType) => "";

export const ChipToggleAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const ChipToggleAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ChipToggleDismiss
  ====================================
*/

export type ChipToggleDismissType = {
  className?: string;
  chipToggleProps?: ChipToggleStyleProps;
};

export const chipToggleDismissClass = (_: ChipToggleDismissType) => "";
export const chipToggleDismissIconClass = (_: ChipToggleDismissType) => "";

export const ChipToggleDismissLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleDismissType;
  iconSlot: React.ReactNode;
}) => <></>;
