import type { RenderRoot } from "../_utils";

/*
  ====================================
  Badge
  ====================================
*/

export type BadgeStyleProps = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "base" | "red" | "green" | "yellow" | "blue" | "orange";
  variant?: "filled" | "outline";
};

export type BadgeType = {
  className?: string;
  badgeProps?: BadgeStyleProps;
};

export const badgeDefaults: Required<BadgeStyleProps> = {
  size: "md",
  color: "primary",
  variant: "filled",
};

export const badgeClass = (_: BadgeType) => "";
export const badgeLabelClass = (_: BadgeType) => "";
export const badgeIconClass = (_: BadgeType) => "";

export const BadgeLayout = (_: { renderRoot: RenderRoot; styleProps: BadgeType; labelSlot: React.ReactNode }) => <></>;
export const BadgeWithLeftIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: BadgeType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;
export const BadgeWithRightIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: BadgeType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) => <></>;
