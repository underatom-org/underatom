import type { RenderRoot } from "../_utils";

/*
  ====================================
  Chip
  ====================================
*/

export type ChipStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type ChipDotStyleProps = {
  color?: "primary" | "base" | "green" | "red";
};

export type ChipType = {
  className?: string;
  chipProps?: ChipStyleProps;
};

export type ChipDotType = {
  className?: string;
  chipProps?: ChipStyleProps;
  chipDotProps?: ChipDotStyleProps;
};

export const chipDefaults: Required<ChipStyleProps> = {
  size: "md",
};

export const chipDotDefaults: Required<ChipDotStyleProps> = {
  color: "primary",
};

export const chipClass = (_: ChipType) => "";
export const chipLabelClass = (_: ChipType) => "";
export const chipIconClass = (_: ChipType) => "";
export const chipDotClass = (_: ChipDotType) => "";

export const ChipLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const ChipWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const ChipWithAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const ChipWithDotLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ChipAvatar
  ====================================
*/

export type ChipAvatarType = {
  className?: string;
  chipProps?: ChipStyleProps;
};

export const chipAvatarClass = (_: ChipAvatarType) => "";
export const chipAvatarImageClass = (_: ChipAvatarType) => "";
export const chipAvatarLabelClass = (_: ChipAvatarType) => "";
export const chipAvatarIconClass = (_: ChipAvatarType) => "";

export const ChipAvatarLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
export const ChipAvatarWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  ChipDismiss
  ====================================
*/

export type ChipDismissType = {
  className?: string;
  chipProps?: ChipStyleProps;
};

export const chipDismissClass = (_: ChipDismissType) => "";
export const chipDismissIconClass = (_: ChipDismissType) => "";

export const ChipDismissLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: ChipDismissType;
  iconSlot: React.ReactNode;
}) => <></>;
