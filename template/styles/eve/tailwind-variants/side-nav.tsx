import type { RenderRoot } from "../../../base/src/_utils";
import type {
  SideNavGroupItemBoxBadgeType,
  SideNavGroupItemBoxType,
  SideNavGroupHeaderType,
  SideNavGroupItemType,
  SideNavGroupType,
  SideNavType,
} from "~/base/src/styles/side-nav";

export const sideNavGroupItemBoxBadgeClass = ({ className }: SideNavGroupItemBoxBadgeType) => {
  return `
  group/sideNavGroupItemBoxBadge
  bg-base-950
  rounded-[999px]
  transition-all
  group-data-[disabled]/sideNavGroup:group-data-[disabled]/sideNavGroupItem:transition-all
  group-data-[disabled]/sideNavGroup:bg-base-200
  group-data-[disabled]/sideNavGroupItem:bg-base-200
  group-data-[state=on]/sideNavGroupItem:bg-white
  group-data-[disabled]/sideNavGroup:group-data-[state=on]/sideNavGroupItem:bg-base-200
  group-data-[disabled]/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:bg-base-200
  ${className}
  `;
};

export const sideNavGroupItemBoxBadgeTextClass = ({ className }: SideNavGroupItemBoxBadgeType) => {
  return `
  text-base-50
  text-xs
  font-text
  font-normal
  select-none
  group-data-[state=on]/sideNavGroupItem:text-base-950
  group-data-[disabled]/sideNavGroup:text-base-400
  group-data-[disabled]/sideNavGroupItem:text-base-400
  group-data-[disabled]/sideNavGroup:group-data-[state=on]/sideNavGroupItem:text-base-400
  group-data-[disabled]/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:text-base-400
  ${className}
  `;
};

export const sideNavGroupItemBoxBadgeIconClass = ({ className }: SideNavGroupItemBoxBadgeType) => {
  return `
  w-3
  h-3
  text-base-50
  group-data-[state=on]/sideNavGroupItem:text-base-950
  group-data-[disabled]/sideNavGroup:text-base-400
  group-data-[disabled]/sideNavGroupItem:text-base-400
  group-data-[disabled]/sideNavGroup:group-data-[state=on]/sideNavGroupItem:text-base-400
  group-data-[disabled]/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:text-base-400
  ${className}
  `;
};

export const SideNavGroupItemBoxBadgeLayout = ({
  renderRoot,
  styleProps: { className },
  textSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupItemBoxBadgeType;
  textSlot: React.ReactNode;
}) => renderRoot(<>{textSlot}</>, `h-6 w-fit flex flex-row justify-center items-center px-2 ${className}`);
export const SideNavGroupItemBoxBadgeWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  textSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupItemBoxBadgeType;
  iconSlot: React.ReactNode;
  textSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {textSlot}
    </>,
    `h-6 w-fit flex flex-row justify-center items-center gap-1 pl-1 pr-2 ${className}`,
  );

export const sideNavGroupItemBoxClass = ({ className }: SideNavGroupItemBoxType) => {
  return `
  group/sideNavGroupItemBox
  rounded-[10px]
  transition-all
  group-active/sideNavGroupItem:[background:unset]
  group-data-[disabled]/sideNavGroupItem:[background:unset]
  group-data-[disabled]/sideNavGroup:group-hover/sideNavGroupItem:[background:unset]
  group-data-[disabled]/sideNavGroup:group-data-[ring=true]/sideNavGroupItem:[background:unset]
  group-data-[disabled]/sideNavGroup:group-data-[ring=true]/sideNavGroupItem:shadow-none
  group-hover/sideNavGroupItem:bg-base-100
  group-data-[ring=true]/sideNavGroupItem:bg-base-100
  group-data-[disabled]/sideNavGroup:group-data-[state=on]/sideNavGroupItem:bg-base-100
  group-data-[disabled]/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:bg-base-100
  group-data-[ring=true]/sideNavGroupItem:shadow-focus-ring
  group-data-[state=on]/sideNavGroupItem:bg-primary-950
  group-active/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:bg-primary-950
  group-hover/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:bg-primary-900
  group-data-[ring=true]/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:bg-primary-900
  group-data-[disabled]/sideNavGroup:group-hover/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:bg-base-100
  group-data-[disabled]/sideNavGroup:group-active/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:bg-base-100
  group-data-[disabled]/sideNavGroup:group-data-[ring=true]/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:bg-base-100
  ${className}
  `;
};

export const sideNavGroupItemBoxIconClass = ({ className }: SideNavGroupItemBoxType) => {
  return `
  w-5
  h-5
  text-base-600
  group-data-[disabled]/sideNavGroup:text-base-400
  group-data-[disabled]/sideNavGroupItem:text-base-400
  group-data-[state=on]/sideNavGroupItem:text-white
  group-data-[disabled]/sideNavGroup:group-data-[state=on]/sideNavGroupItem:text-base-400
  group-data-[disabled]/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:text-base-400
  ${className}
  `;
};

export const sideNavGroupItemBoxLabelClass = ({ className }: SideNavGroupItemBoxType) => {
  return `
  text-base-950
  text-sm
  font-text
  font-medium
  select-none
  group-data-[disabled]/sideNavGroup:text-base-400
  group-data-[disabled]/sideNavGroupItem:text-base-400
  group-data-[state=on]/sideNavGroupItem:text-white
  group-data-[disabled]/sideNavGroup:group-data-[state=on]/sideNavGroupItem:text-base-400
  group-data-[disabled]/sideNavGroupItem:group-data-[state=on]/sideNavGroupItem:text-base-400
  ${className}
  `;
};

export const SideNavGroupItemBoxLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
  badgeSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupItemBoxType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-2">
        {iconSlot}
        {labelSlot}
      </div>
      {badgeSlot}
    </>,
    `h-[42px] w-full flex flex-row items-center gap-1 px-3 ${className}`,
  );

export const sideNavGroupHeaderClass = ({ className }: SideNavGroupHeaderType) => {
  return `
  group/sideNavGroupHeader
  rounded-md
  transition-all
  active:[background:unset]
  group-data-[disabled]/sideNavGroup:hover:[background:unset]
  group-data-[disabled]/sideNavGroup:data-[ring=true]:[background:unset]
  hover:bg-base-100
  data-[ring=true]:bg-base-100
  data-[ring=true]:shadow-focus-ring
  group-data-[disabled]/sideNavGroup:pointer-events-none
  group-data-[disabled]/sideNavGroup:data-[ring=true]:shadow-none
  ${className}
  `;
};

export const sideNavGroupHeaderLabelClass = ({ className }: SideNavGroupHeaderType) => {
  return `text-base-600 text-sm font-text font-medium select-none group-data-[disabled]/sideNavGroup:text-base-400 ${className}`;
};

export const sideNavGroupHeaderCaretClass = ({ className }: SideNavGroupHeaderType) => {
  return `w-5 h-5 text-base-600  transition-all group-data-[disabled]/sideNavGroup:text-base-300 ${className}`;
};

export const SideNavGroupHeaderLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
  caretSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupHeaderType;
  labelSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-[10px]">{labelSlot}</div>
      {caretSlot}
    </>,
    `h-9 w-full flex flex-row items-center gap-1 px-[10px] ${className}`,
  );

export const sideNavGroupItemClass = ({ className }: SideNavGroupItemType) => {
  return `group/sideNavGroupItem group-data-[disabled]/sideNavGroup:pointer-events-none data-[disabled]:pointer-events-none ${className}`;
};

export const SideNavGroupItemLayout = ({
  renderRoot,
  styleProps: { className },
  boxSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupItemType;
  boxSlot: React.ReactNode;
}) => renderRoot(<>{boxSlot}</>, `h-fit w-full flex flex-row justify-center items-center ${className}`);

export const sideNavGroupClass = ({ className }: SideNavGroupType) => {
  return `group/sideNavGroup  ${className}`;
};

export const SideNavGroupLayout = ({
  renderRoot,
  styleProps: { className },
  headerSlot,
  itemSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: SideNavGroupType;
  headerSlot: React.ReactNode;
  itemSlots: React.ReactNode;
}) =>
  renderRoot(
    <>
      {headerSlot}
      <div className="h-fit w-full flex flex-col px-2">{itemSlots}</div>
    </>,
    `h-fit w-full flex flex-col gap-[2px] ${className}`,
  );

export const sideNavClass = ({ className }: SideNavType) => {
  return `group/sideNav  ${className}`;
};

export const SideNavLayout = ({
  renderRoot,
  styleProps: { className },
  groupSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: SideNavType;
  groupSlots: React.ReactNode;
}) => renderRoot(<>{groupSlots}</>, `h-full w-full flex flex-col gap-5 ${className}`);
