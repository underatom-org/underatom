import type { RenderRoot } from "../../../base/src/_utils";
import type {
  IconSideNavGroupItemBoxType,
  IconSideNavGroupItemType,
  IconSideNavGroupType,
  IconSideNavType,
} from "~/base/src/styles/icon-side-nav";

export const iconSideNavGroupItemBoxClass = ({ className }: IconSideNavGroupItemBoxType) => {
  return `group/iconSideNavGroupItemBox rounded-[10px] group-data-[state=on]/iconSideNavGroupItem:bg-primary-950 ${className}`;
};

export const iconSideNavGroupItemBoxIconClass = ({ className }: IconSideNavGroupItemBoxType) => {
  return `w-5 h-5 text-base-950 group-data-[state=on]/iconSideNavGroupItem:text-white ${className}`;
};

export const IconSideNavGroupItemBoxLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: IconSideNavGroupItemBoxType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-13 w-13 flex flex-row justify-between items-center gap-5 px-5 ${className}`);

export const iconSideNavGroupItemClass = ({ className }: IconSideNavGroupItemType) => {
  return `group/iconSideNavGroupItem  ${className}`;
};

export const IconSideNavGroupItemLayout = ({
  renderRoot,
  styleProps: { className },
  boxSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: IconSideNavGroupItemType;
  boxSlot: React.ReactNode;
}) => renderRoot(<>{boxSlot}</>, `h-fit w-fit flex flex-row items-center ${className}`);

export const iconSideNavGroupClass = ({ className }: IconSideNavGroupType) => {
  return `group/iconSideNavGroup  ${className}`;
};

export const iconSideNavGroupLabelClass = ({ className }: IconSideNavGroupType) => {
  return `text-primary-600 text-sm font-text font-medium ${className}`;
};

export const IconSideNavGroupLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
  itemSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: IconSideNavGroupType;
  labelSlot: React.ReactNode;
  itemSlots: React.ReactNode;
}) =>
  renderRoot(
    <>
      {labelSlot}
      <div className="h-fit w-fit flex flex-col">{itemSlots}</div>
    </>,
    `h-fit w-fit flex flex-col justify-center items-center gap-1 p-5 ${className}`,
  );

export const iconSideNavClass = ({ className }: IconSideNavType) => {
  return `group/iconSideNav border-solid border-base-200 border-y-0 border-l-0 border-r-1 bg-base-50 ${className}`;
};

export const IconSideNavLayout = ({
  renderRoot,
  styleProps: { className },
  groupSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: IconSideNavType;
  groupSlots: React.ReactNode;
}) => renderRoot(<>{groupSlots}</>, `h-full w-fit flex flex-col items-center pt-9 pb-5 ${className}`);
