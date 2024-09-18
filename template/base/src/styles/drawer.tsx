import type { RenderRoot } from "../_utils";

/*
  ====================================
  Drawer
  ====================================
*/

export type DrawerStyleProps = {
  variant?: "default";
};

export type DrawerType = {
  className?: string;
  drawerProps?: DrawerStyleProps;
};

export const drawerDefaults: Required<DrawerStyleProps> = {
  variant: "default",
};

export const drawerClass = (_: DrawerType) => "";

export const DrawerLayout = (_: { renderRoot: RenderRoot; styleProps: DrawerType }) => <></>;
