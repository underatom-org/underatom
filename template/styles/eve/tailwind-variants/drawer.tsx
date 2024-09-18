import type { RenderRoot } from "../../../base/src/_utils";
import type { DrawerType } from "~/base/src/styles/drawer";

export const drawerClass = ({ className }: DrawerType) => {
  return `group/drawer bg-white rounded-sm ${className}`;
};

export const DrawerLayout = ({
  renderRoot,
  styleProps: { className },
}: {
  renderRoot: RenderRoot;
  styleProps: DrawerType;
}) => renderRoot(<></>, `h-full w-full flex flex-row gap-5 p-5 ${className}`);
