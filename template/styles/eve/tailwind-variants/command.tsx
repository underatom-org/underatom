import type { RenderRoot } from "../../../base/src/_utils";
import type {
  CommandGroupItemBoxBadgeType,
  CommandGroupItemBoxAvatarType,
  CommandGroupItemBoxSwitchType,
  CommandGroupItemBoxButtonType,
  CommandGroupItemKBDType,
  CommandFooterElementKBDType,
  CommandGroupItemBoxType,
  CommandSearchClearType,
  CommandFooterElementType,
  CommandFooterButtonType,
  CommandGroupItemType,
  CommandSearchType,
  CommandFooterType,
  CommandGroupType,
  CommandEmptyType,
  CommandType,
} from "~/base/src/styles/command";
import {
  commandGroupItemDefaults,
  commandGroupItemBoxBadgeDefaults,
  commandGroupDefaults,
} from "~/base/src/styles/command";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const commandGroupItemBoxBadgeClass = ({
  className,
  commandGroupItemProps,
  commandGroupItemBoxBadgeProps,
}: CommandGroupItemBoxBadgeType) => {
  const rootClass = tv({
    base: "group/commandGroupItemBoxBadge rounded-[999px] group-data-[disabled=true]/commandGroupItem:bg-base-300",
    variants: {
      groupItemVariant: {
        default: "",
        destructive:
          "transition-all group-hover/commandGroupItem:bg-base-50 group-data-[selected=true]/commandGroupItem:bg-base-50 group-active/commandGroupItem:bg-base-50",
      },
      groupItemBoxBadgeColor: {
        primary: "bg-base-950",
        base: "bg-primary-950",
        red: "bg-danger-500",
        green: "bg-success-600",
      },
    },

    defaultVariants: {
      groupItemVariant: commandGroupItemDefaults.variant,
      groupItemBoxBadgeColor: commandGroupItemBoxBadgeDefaults.color,
    },
  });
  return rootClass({
    class: className,
    groupItemVariant: commandGroupItemProps?.variant,
    groupItemBoxBadgeColor: commandGroupItemBoxBadgeProps?.color,
  });
};

export const commandGroupItemBoxBadgeLabelClass = ({
  className,
  commandGroupItemProps,
}: CommandGroupItemBoxBadgeType) => {
  const labelClass = tv({
    base: "text-base-50 text-xs font-text font-medium select-none group-data-[disabled=true]/commandGroupItem:text-base-400",
    variants: {
      groupItemVariant: {
        default: "",
        destructive: `
group-active/commandGroupItem:text-base-50
  group-active/commandGroupItem:select-none
  group-data-[disabled=true]/commandGroupItem:select-none
  group-hover/commandGroupItem:text-base-950
  group-data-[selected=true]/commandGroupItem:text-base-950
  group-hover/commandGroupItem:transition-all
  group-data-[selected=true]/commandGroupItem:transition-all
`,
      },
    },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return labelClass({
    class: className,

    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const commandGroupItemBoxBadgeIconClass = ({
  className,
  commandGroupItemProps,
}: CommandGroupItemBoxBadgeType) => {
  const iconClass = tv({
    base: "w-3 h-3 text-base-50 group-data-[disabled=true]/commandGroupItem:text-base-400",
    variants: {
      groupItemVariant: {
        default: "",
        destructive:
          "group-active/commandGroupItem:text-base-50 group-hover/commandGroupItem:text-base-950 group-data-[selected=true]/commandGroupItem:text-base-950",
      },
    },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return iconClass({
    class: className,

    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const CommandGroupItemBoxBadgeLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxBadgeType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-6 w-fit flex flex-row justify-center items-center px-2 ${className}`);
export const CommandGroupItemBoxBadgeWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxBadgeType;
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

export const commandGroupItemBoxAvatarClass = ({ className }: CommandGroupItemBoxAvatarType) => {
  return `
  group/commandGroupItemBoxAvatar
  bg-base-100
  group-data-[disabled=true]/commandGroupItem:bg-base-100
  rounded-[999px]
  transition-all
  group-hover/commandGroupItem:bg-base-50
  group-data-[selected=true]/commandGroupItem:bg-base-50
  group-active/commandGroupItem:bg-base-50
  ${className}
  `;
};

export const commandGroupItemBoxAvatarImageClass = ({ className }: CommandGroupItemBoxAvatarType) => {
  return `w-7 h-7 rounded-[999px] group-data-[disabled=true]/commandGroupItem:opacity-[0.6] ${className}`;
};

export const commandGroupItemBoxAvatarLabelClass = ({ className }: CommandGroupItemBoxAvatarType) => {
  return `text-base-600 text-sm font-text font-medium select-none group-data-[disabled=true]/commandGroupItem:text-base-400 ${className}`;
};

export const commandGroupItemBoxAvatarIconClass = ({ className }: CommandGroupItemBoxAvatarType) => {
  return `w-5 h-5 text-base-600 group-data-[disabled=true]/commandGroupItem:text-base-400 ${className}`;
};

export const CommandGroupItemBoxAvatarLayout = ({
  renderRoot,
  styleProps: { className },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {imageSlot}
      {labelSlot}
    </>,
    `h-7 w-7 flex flex-row justify-center items-center ${className}`,
  );
export const CommandGroupItemBoxAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {imageSlot}
      {iconSlot}
    </>,
    `h-7 w-7 flex flex-row justify-center items-center ${className}`,
  );

export const commandGroupItemBoxSwitchClass = ({ className, commandGroupItemProps }: CommandGroupItemBoxSwitchType) => {
  const rootClass = tv({
    base: "group/commandGroupItemBoxSwitch group-data-[disabled=true]/commandGroupItem:group-data-[toggled=true]/commandGroupItem:bg-base-200 rounded-[50px] transition-all group-data-[disabled=true]/commandGroupItem:pointer-events-none",
    variants: {
      groupItemVariant: {
        default: `
bg-base-200
  group-active/commandGroupItem:bg-base-200
  group-data-[disabled=true]/commandGroupItem:bg-base-200
  group-hover/commandGroupItem:bg-base-300
  group-data-[selected=true]/commandGroupItem:bg-base-300
  group-data-[toggled=true]/commandGroupItem:bg-primary-950
  group-hover/commandGroupItem:group-data-[toggled=true]/commandGroupItem:bg-primary-950
  group-active/commandGroupItem:group-data-[toggled=true]/commandGroupItem:bg-primary-950
  group-data-[selected=true]/commandGroupItem:group-data-[toggled=true]/commandGroupItem:bg-primary-950
`,
        destructive: `
bg-danger-100
  group-data-[disabled=true]/commandGroupItem:bg-base-200
  group-data-[toggled=true]/commandGroupItem:bg-danger-500
  group-hover/commandGroupItem:group-data-[toggled=true]/commandGroupItem:bg-base-50
  group-data-[selected=true]/commandGroupItem:group-data-[toggled=true]/commandGroupItem:bg-base-50
  group-active/commandGroupItem:group-data-[toggled=true]/commandGroupItem:bg-base-50
`,
      },
    },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return rootClass({
    class: className,
    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const commandGroupItemBoxSwitchHandleClass = ({
  className,
  commandGroupItemProps,
}: CommandGroupItemBoxSwitchType) => {
  const handleClass = tv({
    base: `
w-6
  h-6
  rounded-[50px]
  transition-all
  group-data-[disabled=true]/commandGroupItem:bg-base-300
  group-data-[toggled=true]/commandGroupItem:bg-base-50
  group-data-[disabled=true]/commandGroupItem:group-data-[toggled=true]/commandGroupItem:bg-base-300
`,
    variants: {
      groupItemVariant: {
        default: "bg-primary-950",
        destructive: `
bg-danger-500
  group-hover/commandGroupItem:group-data-[toggled=true]/commandGroupItem:bg-danger-500
  group-data-[selected=true]/commandGroupItem:group-data-[toggled=true]/commandGroupItem:bg-danger-500
  group-active/commandGroupItem:group-data-[toggled=true]/commandGroupItem:bg-danger-500
`,
      },
    },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return handleClass({
    class: className,

    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const CommandGroupItemBoxSwitchLayout = ({
  renderRoot,
  styleProps: { className },
  handleSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxSwitchType;
  handleSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{handleSlot}</>,
    `h-7 w-12 flex flex-row items-center px-[2px] group-data-[toggled=true]/commandGroupItem:pl-[22px] group-data-[toggled=true]/commandGroupItem:pr-[2px] ${className}`,
  );

export const commandGroupItemBoxButtonClass = ({ className, commandGroupItemProps }: CommandGroupItemBoxButtonType) => {
  const rootClass = tv({
    base: `
group/commandGroupItemBoxButton
  border-solid
  group-data-[disabled=true]/commandGroupItem:border-base-300
  border-1
  rounded-sm
  transition-all
  data-[ring=true]:shadow-focus-ring
  data-[ring=true]:z-1
  group-data-[disabled=true]/commandGroupItem:bg-base-200
  data-[disabled=true]:bg-base-200
  group-data-[disabled=true]/commandGroupItem:data-[ring=true]:shadow-none
  group-data-[disabled=true]/commandGroupItem:hover:bg-base-200
  group-data-[disabled=true]/commandGroupItem:data-[ring=true]:bg-base-200
  group-data-[disabled=true]/commandGroupItem:data-[active=true]:bg-base-200
  group-data-[disabled=true]/commandGroupItem:data-[state=open]:bg-base-200
  group-data-[disabled=true]/commandGroupItem:data-[state=open]:border-base-300
`,
    variants: {
      groupItemVariant: {
        default: `
border-base-300
  bg-base-50
  data-[active=true]:bg-base-50
  hover:bg-base-100
  data-[state=open]:bg-base-100
  data-[ring=true]:bg-base-100
  data-[state=open]:border-primary-950
  group-data-[disabled=true]/commandGroupItem:data-[active=true]:bg-base-50
  group-data-[disabled=true]/commandGroupItem:hover:bg-base-100
  group-data-[disabled=true]/commandGroupItem:data-[state=open]:bg-base-100
  group-data-[disabled=true]/commandGroupItem:data-[ring=true]:bg-base-100
  group-data-[disabled=true]/commandGroupItem:data-[state=open]:border-primary-950
`,
        destructive: `
data-[disabled=true]:border-base-300
  border-danger-300
  data-[active=true]:border-danger-300
  bg-danger-50
  data-[active=true]:bg-danger-50
  hover:border-danger-400
  data-[ring=true]:border-danger-400
  hover:bg-danger-100
  data-[state=open]:bg-danger-100
  data-[ring=true]:bg-danger-100
  data-[state=open]:border-danger-950
  group-data-[disabled=true]/commandGroupItem:hover:border-base-300
  group-data-[disabled=true]/commandGroupItem:data-[ring=true]:border-base-300
  group-data-[disabled=true]/commandGroupItem:data-[active=true]:border-base-300
  group-data-[disabled=true]/commandGroupItem:data-[active=true]:border-danger-300
  group-data-[disabled=true]/commandGroupItem:data-[active=true]:bg-danger-50
  group-data-[disabled=true]/commandGroupItem:hover:border-danger-400
  group-data-[disabled=true]/commandGroupItem:data-[ring=true]:border-danger-400
  group-data-[disabled=true]/commandGroupItem:hover:bg-danger-100
  group-data-[disabled=true]/commandGroupItem:data-[state=open]:bg-danger-100
  group-data-[disabled=true]/commandGroupItem:data-[ring=true]:bg-danger-100
  group-data-[disabled=true]/commandGroupItem:data-[state=open]:border-danger-950
`,
      },
    },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return rootClass({
    class: className,
    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const commandGroupItemBoxButtonIconClass = ({
  className,
  commandGroupItemProps,
}: CommandGroupItemBoxButtonType) => {
  const iconClass = tv({
    base: `
w-5
  group-data-[disabled=true]/commandGroupItem:group-data-[disabled=true]/commandGroupItemBoxButton:w-5
  h-5
  group-data-[disabled=true]/commandGroupItem:group-data-[disabled=true]/commandGroupItemBoxButton:h-5
  group-data-[disabled=true]/commandGroupItem:group-data-[disabled=true]/commandGroupItemBoxButton:text-base-400
`,
    variants: { groupItemVariant: { default: "text-primary-600", destructive: "text-danger-600" } },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return iconClass({
    class: className,

    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const CommandGroupItemBoxButtonLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxButtonType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-7 w-7 flex flex-row justify-center items-center gap-5 ${className}`);

export const commandGroupItemKBDClass = ({ className, commandGroupItemProps }: CommandGroupItemKBDType) => {
  const rootClass = tv({
    base: "group/commandGroupItemKBD border-solid border-1 rounded-sm transition-all",
    variants: {
      groupItemVariant: {
        default:
          "border-base-200 group-active/commandGroupItem:border-base-200 group-data-[disabled=true]/commandGroupItem:border-base-200 group-hover/commandGroupItem:border-base-300 group-data-[selected=true]/commandGroupItem:border-base-300",
        destructive:
          "border-danger-200 group-hover/commandGroupItem:border-base-50 group-data-[selected=true]/commandGroupItem:border-base-50 group-active/commandGroupItem:border-base-50",
      },
    },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return rootClass({
    class: className,
    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const commandGroupItemKBDLabelClass = ({ className, commandGroupItemProps }: CommandGroupItemKBDType) => {
  const labelClass = tv({
    base: "group-data-[disabled=true]/commandGroupItem:text-base-300 text-xs font-text font-medium select-none",
    variants: {
      groupItemVariant: {
        default: "text-base-600",
        destructive:
          "text-danger-400 group-hover/commandGroupItem:text-white group-data-[selected=true]/commandGroupItem:text-white group-active/commandGroupItem:text-white",
      },
    },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return labelClass({
    class: className,

    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const commandGroupItemKBDIconClass = ({ className, commandGroupItemProps }: CommandGroupItemKBDType) => {
  const iconClass = tv({
    base: "w-[14px] h-[14px] group-data-[disabled=true]/commandGroupItem:text-base-300",
    variants: {
      groupItemVariant: {
        default: "text-base-600",
        destructive:
          "text-danger-400 group-hover/commandGroupItem:text-white group-data-[selected=true]/commandGroupItem:text-white group-active/commandGroupItem:text-white",
      },
    },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return iconClass({
    class: className,

    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const CommandGroupItemKBDLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemKBDType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-6 w-fit flex flex-row justify-center items-center gap-1 px-1 ${className}`);
export const CommandGroupItemIconKBDLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemKBDType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-6 w-fit flex flex-row justify-center items-center gap-1 px-1 ${className}`);
export const CommandGroupItemKBDWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemKBDType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {labelSlot}
    </>,
    `h-6 w-fit flex flex-row justify-center items-center gap-1 px-1 ${className}`,
  );

export const commandFooterElementKBDClass = ({ className }: CommandFooterElementKBDType) => {
  return `group/commandFooterElementKBD bg-base-200 rounded-sm ${className}`;
};

export const commandFooterElementKBDIconClass = ({ className }: CommandFooterElementKBDType) => {
  return `w-[14px] h-[14px] text-base-600 ${className}`;
};

export const commandFooterElementKBDLabelClass = ({ className }: CommandFooterElementKBDType) => {
  return `text-base-600 text-xs font-text font-medium ${className}`;
};

export const CommandFooterElementKBDWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterElementKBDType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {labelSlot}
    </>,
    `h-6 w-fit flex flex-row justify-center items-center gap-1 pl-1 pr-[6px] ${className}`,
  );
export const CommandFooterElementKBDLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterElementKBDType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-6 w-fit flex flex-row justify-center items-center px-[6px] ${className}`);
export const CommandFooterElementIconKBDLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterElementKBDType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-6 w-fit flex flex-row justify-center items-center gap-1 px-1 ${className}`);

export const commandGroupItemBoxClass = ({ className }: CommandGroupItemBoxType) => {
  return `group/commandGroupItemBox  ${className}`;
};

export const commandGroupItemBoxIconClass = ({ className, commandGroupItemProps }: CommandGroupItemBoxType) => {
  const iconClass = tv({
    base: "w-5 h-5 group-data-[disabled=true]/commandGroupItem:text-base-300",
    variants: {
      groupItemVariant: {
        default: "text-base-600",
        destructive:
          "text-danger-600 group-active/commandGroupItem:text-danger-600 group-hover/commandGroupItem:text-white group-data-[selected=true]/commandGroupItem:text-white group-active/commandGroupItem:text-white",
      },
    },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return iconClass({
    class: className,

    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const commandGroupItemBoxLabelClass = ({ className, commandGroupItemProps }: CommandGroupItemBoxType) => {
  const labelClass = tv({
    base: "text-sm font-text font-medium select-none group-data-[disabled=true]/commandGroupItem:text-base-300",
    variants: {
      groupItemVariant: {
        default: "text-base-950",
        destructive:
          "text-danger-600 group-active/commandGroupItem:text-danger-600 group-hover/commandGroupItem:text-white group-data-[selected=true]/commandGroupItem:text-white group-active/commandGroupItem:text-white",
      },
    },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return labelClass({
    class: className,

    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const CommandGroupItemBoxLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
  badgeSlot,
  switchSlot,
  buttonSlot1,
  buttonSlot2,
  buttonSlot3,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  buttonSlot3: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-1">
        <div className="h-fit w-full flex flex-row items-center gap-2">
          <div className="h-fit w-fit flex flex-row items-center gap-[6px]">
            {iconSlot}
            {labelSlot}
          </div>
          {badgeSlot}
        </div>
      </div>
      <div className="h-fit w-fit flex flex-row items-center gap-1">
        {switchSlot}
        {buttonSlot1}
        {buttonSlot2}
        {buttonSlot3}
      </div>
    </>,
    `h-fit w-full flex flex-row items-center gap-2 ${className}`,
  );
export const CommandGroupItemBoxWithAvatarLayout = ({
  renderRoot,
  styleProps: { className },
  avatarSlot,
  labelSlot,
  badgeSlot,
  switchSlot,
  buttonSlot1,
  buttonSlot2,
  buttonSlot3,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemBoxType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  buttonSlot3: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-1">
        <div className="h-fit w-full flex flex-row items-center gap-2">
          <div className="h-fit w-fit flex flex-row items-center gap-[6px]">
            {avatarSlot}
            {labelSlot}
          </div>
          {badgeSlot}
        </div>
      </div>
      <div className="h-fit w-fit flex flex-row items-center gap-1">
        {switchSlot}
        {buttonSlot1}
        {buttonSlot2}
        {buttonSlot3}
      </div>
    </>,
    `h-fit w-full flex flex-row items-center gap-2 ${className}`,
  );

export const commandSearchClearClass = ({ className }: CommandSearchClearType) => {
  return `group/commandSearchClear bg-base-50 data-[active=true]:bg-base-50 rounded-[50px] transition-all hover:bg-base-100 data-[ring=true]:bg-base-100 data-[ring=true]:shadow-focus-ring data-[disabled=true]:[background:unset] ${className}`;
};

export const commandSearchClearIconClass = ({ className }: CommandSearchClearType) => {
  return `
  w-5
  h-5
  text-base-600
  group-data-[disabled=true]/commandSearchClear:text-base-400
  group-hover/commandSearchClear:text-base-800
  group-data-[ring=true]/commandSearchClear:text-base-800
  group-data-[active=true]/commandSearchClear:text-base-950
  ${className}
  `;
};

export const CommandSearchClearLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandSearchClearType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-7 w-7 flex flex-row justify-center items-center gap-5 ${className}`);

export const commandFooterElementClass = ({ className }: CommandFooterElementType) => {
  return `group/commandFooterElement  ${className}`;
};

export const commandFooterElementTextClass = ({ className }: CommandFooterElementType) => {
  return `text-base-600 text-xs font-text font-medium ${className}`;
};

export const CommandFooterElementLayout = ({
  renderRoot,
  styleProps: { className },
  textSlot1,
  kBDSlot1,
  kBDSlot2,
  kBDSlot3,
  kBDSlot4,
  textSlot2,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterElementType;
  textSlot1: React.ReactNode;
  textSlot2: React.ReactNode;
  kBDSlot1: React.ReactNode;
  kBDSlot2: React.ReactNode;
  kBDSlot3: React.ReactNode;
  kBDSlot4: React.ReactNode;
}) =>
  renderRoot(
    <>
      {textSlot1}
      {kBDSlot1}
      {kBDSlot2}
      {kBDSlot3}
      {kBDSlot4}
      {textSlot2}
    </>,
    `h-fit w-fit flex flex-row gap-[6px] ${className}`,
  );

export const commandFooterButtonClass = ({ className }: CommandFooterButtonType) => {
  return `
  group/commandFooterButton
  border-solid
  border-base-200
  data-[active=true]:border-base-200
  border-1
  bg-base-50
  data-[active=true]:bg-base-50
  rounded-sm
  transition-all
  hover:border-base-300
  data-[ring=true]:border-base-300
  disabled:border-base-300
  hover:bg-base-100
  data-[ring=true]:bg-base-100
  data-[ring=true]:shadow-focus-ring
  disabled:bg-base-200
  ${className}
  `;
};

export const commandFooterButtonIconClass = ({ className }: CommandFooterButtonType) => {
  return `w-5 h-5 text-base-800 group-disabled/commandFooterButton:text-base-400 ${className}`;
};

export const CommandFooterButtonLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterButtonType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-7 w-7 flex flex-row justify-center items-center gap-5 ${className}`);

export const commandGroupItemClass = ({ className, commandGroupItemProps }: CommandGroupItemType) => {
  const rootClass = tv({
    base: "group/commandGroupItem rounded-sm cursor-pointer transition-all data-[disabled=true]:[background:unset] data-[disabled=true]:pointer-events-none",
    variants: {
      groupItemVariant: {
        default: "hover:bg-base-100 data-[selected=true]:bg-base-100 active:bg-base-50",
        destructive: "hover:bg-danger-500 data-[selected=true]:bg-danger-500 active:bg-danger-600",
      },
    },

    defaultVariants: { groupItemVariant: commandGroupItemDefaults.variant },
  });
  return rootClass({
    class: className,
    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const commandGroupItemCheckIconClass = ({
  className,
  commandGroupProps,
  commandGroupItemProps,
}: CommandGroupItemType) => {
  const checkIconClass = tv({
    base: "",
    variants: {
      groupTogglable: {
        true: `
group-data-[toggled=true]/commandGroupItem:[display:unset]
  group-data-[toggled=true]/commandGroupItem:w-[14px]
  group-data-[toggled=true]/commandGroupItem:h-[14px]
  group-data-[disabled=true]/commandGroupItem:group-data-[toggled=true]/commandGroupItem:text-base-300
  hidden
`,
        false: "hidden",
      },
      groupItemVariant: { default: "", destructive: "" },
    },
    compoundVariants: [
      {
        groupTogglable: [true],
        groupItemVariant: ["default"],
        class: "group-data-[toggled=true]/commandGroupItem:text-base-800",
      },
      {
        groupTogglable: [true],
        groupItemVariant: ["destructive"],
        class: `
group-data-[toggled=true]/commandGroupItem:text-danger-500
  group-hover/commandGroupItem:group-data-[toggled=true]/commandGroupItem:text-white
  group-data-[selected=true]/commandGroupItem:group-data-[toggled=true]/commandGroupItem:text-white
  group-active/commandGroupItem:group-data-[toggled=true]/commandGroupItem:text-white
`,
      },
    ],
    defaultVariants: {
      groupTogglable: commandGroupDefaults.togglable,
      groupItemVariant: commandGroupItemDefaults.variant,
    },
  });
  return checkIconClass({
    class: className,

    groupTogglable: commandGroupProps?.togglable,
    groupItemVariant: commandGroupItemProps?.variant,
  });
};

export const CommandGroupItemLayout = ({
  renderRoot,
  styleProps: { className, commandGroupProps },
  checkIconSlot,
  boxSlot,
  kBDSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupItemType;
  checkIconSlot: React.ReactNode;
  boxSlot: React.ReactNode;
  kBDSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-full flex flex-row items-center",
          variants: { groupTogglable: { true: "gap-[6px]", false: "" } },

          defaultVariants: { groupTogglable: commandGroupDefaults.togglable },
        })({ groupTogglable: commandGroupProps?.togglable })}
      >
        <div
          className={tv({
            base: "flex flex-row justify-center items-center",
            variants: {
              groupTogglable: { true: "h-fit w-fit min-w-[16px]", false: "h-5 w-[0.00009999999747378752px]" },
            },

            defaultVariants: { groupTogglable: commandGroupDefaults.togglable },
          })({ groupTogglable: commandGroupProps?.togglable })}
        >
          {checkIconSlot}
        </div>
        {boxSlot}
      </div>
      {kBDSlot}
    </>,
    `h-fit w-full flex flex-row items-center gap-1 py-1 px-[6px] ${className}`,
  );

export const commandSearchClass = ({ className }: CommandSearchType) => {
  return `group/commandSearch border-solid border-base-200 border-t-0 border-b-1 border-x-0 bg-transparent rounded-tl-sm rounded-bl-[0px] rounded-tr-sm rounded-br-[0px] cursor-text data-[ring=true]:border-primary-950 ${className}`;
};

export const commandSearchIconClass = ({ className }: CommandSearchType) => {
  return `w-5 h-5 text-base-500 ${className}`;
};

export const commandSearchTextClass = ({ className }: CommandSearchType) => {
  return `text-base-950 text-sm font-text font-normal ${className}`;
};

export const CommandSearchLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  textSlot,
  clearSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandSearchType;
  iconSlot: React.ReactNode;
  textSlot: React.ReactNode;
  clearSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-[6px]">
        {iconSlot}
        {textSlot}
      </div>
      {clearSlot}
    </>,
    `h-[42px] w-full flex flex-row items-center gap-2 px-3 ${className}`,
  );

export const commandFooterClass = ({ className }: CommandFooterType) => {
  return `group/commandFooter border-solid border-base-200 border-t-1 border-b-0 border-x-0 ${className}`;
};

export const CommandFooterLayout = ({
  renderRoot,
  styleProps: { className },
  elementSlots,
  buttonSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandFooterType;
  elementSlots: React.ReactNode;
  buttonSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row items-center gap-5">{elementSlots}</div>
      {buttonSlot}
    </>,
    `h-11 w-full flex flex-row justify-between items-center gap-5 pt-2 px-5 ${className}`,
  );

export const commandGroupClass = ({ className }: CommandGroupType) => {
  return `group/commandGroup  ${className}`;
};

export const commandGroupTitleClass = ({ className }: CommandGroupType) => {
  return `text-base-600 text-xs font-text font-medium ${className}`;
};

export const CommandGroupLayout = ({
  renderRoot,
  styleProps: { className },
  titleSlot,
  itemSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandGroupType;
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

export const commandEmptyClass = ({ className }: CommandEmptyType) => {
  return `group/commandEmpty  ${className}`;
};

export const commandEmptyImageClass = ({ className }: CommandEmptyType) => {
  return `w-[64px] h-[64px] ${className}`;
};

export const commandEmptyTextClass = ({ className }: CommandEmptyType) => {
  return `text-base-600 text-sm font-text font-medium ${className}`;
};

export const CommandEmptyLayout = ({
  renderRoot,
  styleProps: { className },
  imageSlot,
  textSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandEmptyType;
  imageSlot: React.ReactNode;
  textSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {imageSlot}
      {textSlot}
    </>,
    `h-fit w-full flex flex-col justify-center items-center gap-1 p-5 ${className}`,
  );

export const commandClass = ({ className }: CommandType) => {
  return `group/command bg-base-50 shadow-lg rounded-md ${className}`;
};

export const CommandLayout = ({
  renderRoot,
  styleProps: { className },
  searchSlot,
  groupSlots,
  emptySlot,
  footerSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CommandType;
  searchSlot: React.ReactNode;
  groupSlots: React.ReactNode;
  emptySlot: React.ReactNode;
  footerSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {searchSlot}
      {groupSlots}

      {emptySlot}
      {footerSlot}
    </>,
    `h-fit w-full flex flex-col gap-2 pb-[6px] ${className}`,
  );
