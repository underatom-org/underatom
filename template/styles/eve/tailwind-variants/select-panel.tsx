import type { RenderRoot } from "../../../base/src/_utils";
import type {
  SelectPanelGroupItemBoxIconBoxType,
  SelectPanelGroupItemBoxAvatarType,
  SelectPanelGroupItemBoxBadgeType,
  SelectPanelGroupItemCheckboxType,
  SelectPanelGroupItemBoxType,
  SelectPanelGroupItemBoxDotType,
  SelectPanelGroupItemType,
  SelectPanelSearchType,
  SelectPanelGroupType,
  SelectPanelType,
} from "~/base/src/styles/select-panel";
import {
  selectPanelGroupItemBoxIconBoxDefaults,
  selectPanelGroupItemBoxAvatarDefaults,
  selectPanelGroupItemBoxBadgeDefaults,
  selectPanelGroupItemBoxDotDefaults,
} from "~/base/src/styles/select-panel";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const selectPanelGroupItemBoxIconBoxClass = ({
  className,
  selectPanelGroupItemBoxIconBoxProps,
}: SelectPanelGroupItemBoxIconBoxType) => {
  const rootClass = tv({
    base: "group/selectPanelGroupItemBoxIconBox rounded-md",
    variants: {
      groupItemBoxIconBoxMultiline: {
        false: "",
        true: "bg-base-100 group-active/selectPanelGroupItem:bg-base-100 group-data-[disabled]/selectPanelGroupItem:bg-base-100 group-hover/selectPanelGroupItem:bg-base-50 group-data-[highlighted]/selectPanelGroupItem:bg-base-50",
      },
    },

    defaultVariants: { groupItemBoxIconBoxMultiline: selectPanelGroupItemBoxIconBoxDefaults.multiline },
  });
  return rootClass({
    class: className,
    groupItemBoxIconBoxMultiline: selectPanelGroupItemBoxIconBoxProps?.multiline,
  });
};

export const selectPanelGroupItemBoxIconBoxIconClass = ({
  className,
  selectPanelGroupItemBoxIconBoxProps,
}: SelectPanelGroupItemBoxIconBoxType) => {
  const iconClass = tv({
    base: "text-base-600 group-data-[disabled]/selectPanelGroupItem:text-base-400",
    variants: { groupItemBoxIconBoxMultiline: { false: "w-5 h-5", true: "w-6 h-6" } },

    defaultVariants: { groupItemBoxIconBoxMultiline: selectPanelGroupItemBoxIconBoxDefaults.multiline },
  });
  return iconClass({
    class: className,

    groupItemBoxIconBoxMultiline: selectPanelGroupItemBoxIconBoxProps?.multiline,
  });
};

export const SelectPanelGroupItemBoxIconBoxLayout = ({
  renderRoot,
  styleProps: { className, selectPanelGroupItemBoxIconBoxProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxIconBoxType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { groupItemBoxIconBoxMultiline: { false: "h-fit w-fit", true: "h-10 w-10" } },

      defaultVariants: { groupItemBoxIconBoxMultiline: selectPanelGroupItemBoxIconBoxDefaults.multiline },
    })({
      class: className,
      groupItemBoxIconBoxMultiline: selectPanelGroupItemBoxIconBoxProps?.multiline,
    }),
  );

export const selectPanelGroupItemBoxAvatarClass = ({ className }: SelectPanelGroupItemBoxAvatarType) => {
  return `
  group/selectPanelGroupItemBoxAvatar
  bg-base-100
  group-active/selectPanelGroupItem:bg-base-100
  group-data-[disabled]/selectPanelGroupItem:bg-base-100
  rounded-[999px]
  transition-all
  group-hover/selectPanelGroupItem:bg-base-50
  group-data-[highlighted]/selectPanelGroupItem:bg-base-50
  group-data-[disabled]/selectPanelGroupItem:bg-base-50
  ${className}
  `;
};

export const selectPanelGroupItemBoxAvatarImageClass = ({
  className,
  selectPanelGroupItemBoxAvatarProps,
}: SelectPanelGroupItemBoxAvatarType) => {
  const imageClass = tv({
    base: "rounded-[999px] group-data-[disabled]/selectPanelGroupItem:opacity-[0.6]",
    variants: { groupItemBoxAvatarMultiline: { false: "w-7 h-7", true: "w-10 h-10" } },

    defaultVariants: { groupItemBoxAvatarMultiline: selectPanelGroupItemBoxAvatarDefaults.multiline },
  });
  return imageClass({
    class: className,

    groupItemBoxAvatarMultiline: selectPanelGroupItemBoxAvatarProps?.multiline,
  });
};

export const selectPanelGroupItemBoxAvatarLabelClass = ({
  className,
  selectPanelGroupItemBoxAvatarProps,
}: SelectPanelGroupItemBoxAvatarType) => {
  const labelClass = tv({
    base: "text-base-600 font-text select-none group-data-[disabled]/selectPanelGroupItem:text-base-400",
    variants: { groupItemBoxAvatarMultiline: { false: "text-xs font-normal", true: "text-md font-medium" } },

    defaultVariants: { groupItemBoxAvatarMultiline: selectPanelGroupItemBoxAvatarDefaults.multiline },
  });
  return labelClass({
    class: className,

    groupItemBoxAvatarMultiline: selectPanelGroupItemBoxAvatarProps?.multiline,
  });
};

export const selectPanelGroupItemBoxAvatarIconClass = ({
  className,
  selectPanelGroupItemBoxAvatarProps,
}: SelectPanelGroupItemBoxAvatarType) => {
  const iconClass = tv({
    base: "text-primary-600 group-data-[disabled]/selectPanelGroupItem:text-base-400",
    variants: { groupItemBoxAvatarMultiline: { false: "w-3 h-3", true: "w-6 h-6" } },

    defaultVariants: { groupItemBoxAvatarMultiline: selectPanelGroupItemBoxAvatarDefaults.multiline },
  });
  return iconClass({
    class: className,

    groupItemBoxAvatarMultiline: selectPanelGroupItemBoxAvatarProps?.multiline,
  });
};

export const SelectPanelGroupItemBoxAvatarLayout = ({
  renderRoot,
  styleProps: { className, selectPanelGroupItemBoxAvatarProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {imageSlot}
      {labelSlot}
    </>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { groupItemBoxAvatarMultiline: { false: "h-7 w-7", true: "h-10 w-10" } },

      defaultVariants: { groupItemBoxAvatarMultiline: selectPanelGroupItemBoxAvatarDefaults.multiline },
    })({
      class: className,
      groupItemBoxAvatarMultiline: selectPanelGroupItemBoxAvatarProps?.multiline,
    }),
  );
export const SelectPanelGroupItemBoxAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className, selectPanelGroupItemBoxAvatarProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {imageSlot}
      {iconSlot}
    </>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { groupItemBoxAvatarMultiline: { false: "h-7 w-7", true: "h-10 w-10" } },

      defaultVariants: { groupItemBoxAvatarMultiline: selectPanelGroupItemBoxAvatarDefaults.multiline },
    })({
      class: className,
      groupItemBoxAvatarMultiline: selectPanelGroupItemBoxAvatarProps?.multiline,
    }),
  );

export const selectPanelGroupItemBoxBadgeClass = ({
  className,
  selectPanelGroupItemBoxBadgeProps,
}: SelectPanelGroupItemBoxBadgeType) => {
  const rootClass = tv({
    base: "group/selectPanelGroupItemBoxBadge rounded-[999px] group-data-[disabled]/selectPanelGroupItem:bg-base-300",
    variants: {
      groupItemBoxBadgeColor: {
        base: "bg-base-950",
        primary: "bg-primary-950",
        red: "bg-danger-600",
        green: "bg-success-600",
      },
    },

    defaultVariants: { groupItemBoxBadgeColor: selectPanelGroupItemBoxBadgeDefaults.color },
  });
  return rootClass({
    class: className,
    groupItemBoxBadgeColor: selectPanelGroupItemBoxBadgeProps?.color,
  });
};

export const selectPanelGroupItemBoxBadgeLabelClass = ({ className }: SelectPanelGroupItemBoxBadgeType) => {
  return `text-base-50 text-xs font-text font-medium select-none ${className}`;
};

export const selectPanelGroupItemBoxBadgeIconClass = ({ className }: SelectPanelGroupItemBoxBadgeType) => {
  return `w-3 h-3 text-base-50 ${className}`;
};

export const SelectPanelGroupItemBoxBadgeLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxBadgeType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-6 w-fit flex flex-row justify-center items-center px-2 ${className}`);
export const SelectPanelGroupItemBoxBadgeWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxBadgeType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {labelSlot}
    </>,
    `h-6 w-fit flex flex-row justify-center items-center gap-1 pl-1 pr-2 ${className}`,
  );

export const selectPanelGroupItemCheckboxClass = ({ className }: SelectPanelGroupItemCheckboxType) => {
  return `
  group/selectPanelGroupItemCheckbox
  border-solid
  group-data-[disabled]/selectPanelGroupItem:data-[disabled]:border-solid
  border-primary-950
  border-1
  group-data-[disabled]/selectPanelGroupItem:data-[disabled]:border-1
  bg-base-50
  active:bg-base-50
  rounded-xs
  group-data-[disabled]/selectPanelGroupItem:data-[disabled]:rounded-xs
  hover:bg-base-200
  data-[ring=true]:bg-base-200
  data-[ring=true]:shadow-focus-ring
  group-data-[state=checked]/selectPanelGroupItem:[border:unset]
  group-data-[disabled]/selectPanelGroupItem:group-data-[state=checked]/selectPanelGroupItem:data-[disabled]:[border:unset]
  group-data-[state=checked]/selectPanelGroupItem:bg-primary-950
  group-data-[state=checked]/selectPanelGroupItem:active:bg-primary-950
  group-data-[state=checked]/selectPanelGroupItem:hover:bg-primary-800
  group-data-[state=checked]/selectPanelGroupItem:data-[ring=true]:bg-primary-800
  data-[disabled]:border-primary-200
  data-[disabled]:bg-primary-50
  group-data-[state=checked]/selectPanelGroupItem:data-[disabled]:bg-primary-300
  ${className}
  `;
};

export const selectPanelGroupItemCheckboxIconClass = ({ className }: SelectPanelGroupItemCheckboxType) => {
  return `
  w-[14px]
  group-data-[disabled]/selectPanelGroupItemCheckbox:w-[14px]
  group-data-[state=checked]/selectPanelGroupItem:w-[14px]
  h-[14px]
  group-data-[disabled]/selectPanelGroupItemCheckbox:h-[14px]
  group-data-[state=checked]/selectPanelGroupItem:h-[14px]
  group-data-[state=checked]/selectPanelGroupItem:text-white
  group-data-[state=checked]/selectPanelGroupItem:group-data-[disabled]/selectPanelGroupItemCheckbox:text-primary-400
  ${className}
  `;
};

export const SelectPanelGroupItemCheckboxLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemCheckboxType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(<>{iconSlot}</>, `h-[14px] w-[14px] flex flex-row justify-center items-center min-w-[14px] ${className}`);

export const selectPanelGroupItemBoxClass = ({ className }: SelectPanelGroupItemBoxType) => {
  return `group/selectPanelGroupItemBox  ${className}`;
};

export const selectPanelGroupItemBoxLabelClass = ({ className }: SelectPanelGroupItemBoxType) => {
  return `text-base-950 text-sm font-text font-medium select-none group-data-[disabled]/selectPanelGroupItem:text-base-400 ${className}`;
};

export const selectPanelGroupItemBoxDotClass = ({
  className,
  selectPanelGroupItemBoxDotProps,
}: SelectPanelGroupItemBoxDotType) => {
  const dotClass = tv({
    base: "w-[6px] h-[6px] rounded-[999px] group-data-[disabled]/selectPanelGroupItem:bg-base-400",
    variants: {
      groupItemBoxDotColor: {
        base: "bg-base-950",
        primary: "bg-primary-950",
        red: "bg-danger-500",
        green: "bg-success-500",
      },
    },

    defaultVariants: { groupItemBoxDotColor: selectPanelGroupItemBoxDotDefaults.color },
  });
  return dotClass({
    class: className,
    groupItemBoxDotColor: selectPanelGroupItemBoxDotProps?.color,
  });
};

export const selectPanelGroupItemBoxSupportingClass = ({ className }: SelectPanelGroupItemBoxType) => {
  return `text-base-500 text-xs font-text font-normal select-none group-data-[disabled]/selectPanelGroupItem:text-base-300 ${className}`;
};

export const selectPanelGroupItemBoxDescriptionClass = ({ className }: SelectPanelGroupItemBoxType) => {
  return `text-base-900 text-sm font-text font-normal select-none group-data-[disabled]/selectPanelGroupItem:text-base-300 ${className}`;
};

export const SelectPanelGroupItemBoxLayout = ({
  renderRoot,
  styleProps: { className },
  iconBoxSlot,
  labelSlot,
  badgeSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxType;
  iconBoxSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row items-center gap-[6px]">
        {iconBoxSlot}
        {labelSlot}
      </div>
      {badgeSlot}
    </>,
    `h-7 w-full flex flex-row items-center gap-[6px] ${className}`,
  );
export const SelectPanelGroupItemBoxWithAvatarLayout = ({
  renderRoot,
  styleProps: { className },
  avatarSlot,
  labelSlot,
  badgeSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row items-center gap-[6px]">
        {avatarSlot}
        {labelSlot}
      </div>
      {badgeSlot}
    </>,
    `h-7 w-full flex flex-row items-center gap-[6px] ${className}`,
  );
export const SelectPanelGroupItemBoxWithDotLayout = ({
  renderRoot,
  styleProps: { className },
  dotSlot,
  labelSlot,
  badgeSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row items-center gap-[11px] pl-[5px]">
        {dotSlot}
        {labelSlot}
      </div>
      {badgeSlot}
    </>,
    `h-7 w-full flex flex-row items-center gap-[6px] ${className}`,
  );
export const SelectPanelGroupItemBoxWithDescriptionLayout = ({
  renderRoot,
  styleProps: { className },
  iconBoxSlot,
  labelSlot,
  supportingSlot,
  descriptionSlot,
  badgeSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxType;
  iconBoxSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  supportingSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row items-center gap-[6px]">
        {iconBoxSlot}
        <div className="h-fit w-fit flex flex-col justify-center [&>*:not(:first-child)]:[margin-top:-4px]">
          <div className="h-fit w-[109px] flex flex-row items-baseline gap-1">
            {labelSlot}
            {supportingSlot}
          </div>
          {descriptionSlot}
        </div>
      </div>
      {badgeSlot}
    </>,
    `h-12 w-full flex flex-row items-center gap-[6px] ${className}`,
  );
export const SelectPanelGroupItemBoxWithAvatarAndDescriptionLayout = ({
  renderRoot,
  styleProps: { className },
  avatarSlot,
  labelSlot,
  supportingSlot,
  descriptionSlot,
  badgeSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemBoxType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  supportingSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row items-center gap-[6px]">
        {avatarSlot}
        <div className="h-fit w-fit flex flex-col justify-center [&>*:not(:first-child)]:[margin-top:-4px]">
          <div className="h-fit w-fit flex flex-row items-baseline gap-1">
            {labelSlot}
            {supportingSlot}
          </div>
          {descriptionSlot}
        </div>
      </div>
      {badgeSlot}
    </>,
    `h-12 w-full flex flex-row items-center gap-[6px] ${className}`,
  );

export const selectPanelGroupItemClass = ({ className }: SelectPanelGroupItemType) => {
  return `group/selectPanelGroupItem rounded-sm cursor-pointer hover:bg-base-100 data-[highlighted]:bg-base-100 active:bg-base-50 data-[disabled]:bg-base-50 data-[disabled]:pointer-events-none ${className}`;
};

export const selectPanelGroupItemCheckIconClass = ({ className }: SelectPanelGroupItemType) => {
  return `
  group-data-[state=checked]/selectPanelGroupItem:[display:unset]
  group-data-[state=checked]/selectPanelGroupItem:w-5
  group-data-[state=checked]/selectPanelGroupItem:h-5
  group-data-[state=checked]/selectPanelGroupItem:text-primary-600
  group-data-[disabled]/selectPanelGroupItem:group-data-[state=checked]/selectPanelGroupItem:text-base-400
  hidden
  ${className}
  `;
};

export const SelectPanelGroupItemLayout = ({
  renderRoot,
  styleProps: { className },
  boxSlot,
  checkIconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemType;
  boxSlot: React.ReactNode;
  checkIconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {boxSlot}
      <div className="h-5 w-5 flex flex-row justify-center items-center gap-[10px]">{checkIconSlot}</div>
    </>,
    `h-fit w-full flex flex-row items-center gap-5 py-1 px-[6px] ${className}`,
  );
export const SelectPanelGroupItemWithCheckboxLayout = ({
  renderRoot,
  styleProps: { className },
  boxSlot,
  checkboxSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupItemType;
  boxSlot: React.ReactNode;
  checkboxSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {boxSlot}
      {checkboxSlot}
    </>,
    `h-fit w-full flex flex-row items-center gap-5 py-1 px-[6px] ${className}`,
  );

export const selectPanelSearchClass = ({ className }: SelectPanelSearchType) => {
  return `group/selectPanelSearch border-solid border-base-200 border-t-0 border-b-1 border-x-0 bg-base-50 rounded-tl-md rounded-bl-[0px] rounded-tr-md rounded-br-[0px] ${className}`;
};

export const selectPanelSearchIconClass = ({ className }: SelectPanelSearchType) => {
  return `w-5 h-5 text-base-600 group-disabled/selectPanelSearch:text-base-300 ${className}`;
};

export const selectPanelSearchTextClass = ({ className }: SelectPanelSearchType) => {
  return `text-base-950 text-sm font-text font-normal group-disabled/selectPanelSearch:text-base-300 ${className}`;
};

export const SelectPanelSearchLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  textSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelSearchType;
  iconSlot: React.ReactNode;
  textSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {textSlot}
    </>,
    `h-9 w-full flex flex-row items-center gap-2 px-2 ${className}`,
  );

export const selectPanelGroupClass = ({ className }: SelectPanelGroupType) => {
  return `group/selectPanelGroup  ${className}`;
};

export const selectPanelGroupTitleClass = ({ className }: SelectPanelGroupType) => {
  return `text-base-600 text-xs font-text font-medium ${className}`;
};

export const SelectPanelGroupLayout = ({
  renderRoot,
  styleProps: { className },
  titleSlot,
  itemSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelGroupType;
  titleSlot: React.ReactNode;
  itemSlots: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-col gap-[10px] pl-[6px]">{titleSlot}</div>
      <div className="h-fit w-full flex flex-col gap-[2px]">{itemSlots}</div>
    </>,
    `h-fit w-full flex flex-col gap-[6px] pt-2 px-2 ${className}`,
  );

export const selectPanelClass = ({ className }: SelectPanelType) => {
  return `group/selectPanel border-solid border-base-100 border-1 bg-base-50 shadow-md rounded-md ${className}`;
};

export const SelectPanelLayout = ({
  renderRoot,
  styleProps: { className },
  searchSlot,
  groupSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectPanelType;
  searchSlot: React.ReactNode;
  groupSlots: React.ReactNode;
}) =>
  renderRoot(
    <>
      {searchSlot}
      <div className="h-fit w-full flex flex-col gap-[6px]">{groupSlots}</div>
    </>,
    `h-fit w-full flex flex-col gap-1 pb-[6px] ${className}`,
  );
