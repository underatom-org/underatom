import type { RenderRoot } from "../_utils";

/*
  ====================================
  Menubar
  ====================================
*/

export type MenubarStyleProps = {
  size?: "sm" | "md" | "lg";
};

export type MenubarType = {
  className?: string;
  menubarProps?: MenubarStyleProps;
};

export const menubarDefaults: Required<MenubarStyleProps> = {
  size: "md",
};

export const menubarClass = (_: MenubarType) => "";

export const MenubarLayout = (_: { renderRoot: RenderRoot; styleProps: MenubarType; itemSlots: React.ReactNode }) => (
  <></>
);

/*
  ====================================
  MenubarItem
  ====================================
*/

export type MenubarItemStyleProps = {
  attachment?: "center" | "start" | "end";
};

export type MenubarItemType = {
  className?: string;
  menubarItemProps?: MenubarItemStyleProps;
  menubarProps?: MenubarStyleProps;
};

export const menubarItemDefaults: Required<MenubarItemStyleProps> = {
  attachment: "center",
};

export const menubarItemClass = (_: MenubarItemType) => "";
export const menubarItemLabelClass = (_: MenubarItemType) => "";
export const menubarItemIconClass = (_: MenubarItemType) => "";

export const MenubarItemLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: MenubarItemType;
  labelSlot: React.ReactNode;
}) => <></>;
export const MenubarItemWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: MenubarItemType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;
