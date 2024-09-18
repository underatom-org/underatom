import type { RenderRoot } from "../../../base/src/_utils";
import type { MenubarItemType, MenubarType } from "~/base/src/styles/menubar";

export const menubarItemClass = ({ className }: MenubarItemType) => {
  return `
  group/menubarItem
  rounded-sm
  transition-all
  active:[background:unset]
  data-[disabled]:[background:unset]
  hover:bg-primary-100
  data-[highlighted]:bg-primary-100
  data-[state=open]:bg-primary-100
  data-[highlighted]:shadow-focus-ring
  data-[state=open]:border-solid
  data-[state=open]:border-primary-950
  data-[state=open]:border-1
  ${className}
  `;
};

export const menubarItemLabelClass = ({ className }: MenubarItemType) => {
  return `text-base-950 text-sm font-text font-medium group-data-[disabled]/menubarItem:text-base-400 ${className}`;
};

export const menubarItemIconClass = ({ className }: MenubarItemType) => {
  return `w-5 h-5 text-base-950 group-data-[disabled]/menubarItem:text-base-400 ${className}`;
};

export const MenubarItemLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: MenubarItemType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-[26px] w-fit flex flex-row justify-center items-center gap-5 px-5 ${className}`);
export const MenubarItemWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: MenubarItemType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {labelSlot}
    </>,
    `h-[26px] w-fit flex flex-row justify-center items-center gap-1 px-5 ${className}`,
  );

export const menubarClass = ({ className }: MenubarType) => {
  return `group/menubar border-solid border-primary-200 border-1 bg-primary-50 shadow-sm rounded-md ${className}`;
};

export const MenubarLayout = ({
  renderRoot,
  styleProps: { className },
  itemSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: MenubarType;
  itemSlots: React.ReactNode;
}) => renderRoot(<>{itemSlots}</>, `h-[34px] w-fit flex flex-row justify-center items-center px-1 ${className}`);
