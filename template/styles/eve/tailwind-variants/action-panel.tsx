import type { RenderRoot } from "../../../base/src/_utils";
import type {
  ActionPanelGroupItemBoxIconBoxType,
  ActionPanelGroupItemBoxSwitchType,
  ActionPanelGroupItemBoxAvatarType,
  ActionPanelGroupItemBoxBadgeType,
  ActionPanelGroupItemBoxType,
  ActionPanelGroupItemKBDType,
  ActionPanelGroupItemType,
  ActionPanelGroupType,
  ActionPanelType,
} from "~/base/src/styles/action-panel";
import {
  actionPanelGroupItemDefaults,
  actionPanelGroupItemBoxAvatarDefaults,
  actionPanelGroupItemBoxBadgeDefaults,
  actionPanelGroupDefaults,
} from "~/base/src/styles/action-panel";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const actionPanelGroupItemBoxIconBoxClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemBoxIconBoxType) => {
  const rootClass = tv({
    base: "group/actionPanelGroupItemBoxIconBox group-data-[disabled]/actionPanelGroupItem:bg-base-100 rounded-sm transition-all",
    variants: {
      groupItemVariant: {
        default:
          "bg-base-100 group-hover/actionPanelGroupItem:bg-base-50 group-data-[highlighted]/actionPanelGroupItem:bg-base-50 group-active/actionPanelGroupItem:bg-base-50 group-data-[state=open]/actionPanelGroupItem:bg-base-50",
        destructive:
          "bg-danger-100 group-hover/actionPanelGroupItem:bg-danger-50 group-data-[highlighted]/actionPanelGroupItem:bg-danger-50 group-active/actionPanelGroupItem:bg-danger-50 group-data-[state=open]/actionPanelGroupItem:bg-danger-50",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return rootClass({
    class: className,
    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const actionPanelGroupItemBoxIconBoxIconClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemBoxIconBoxType) => {
  const iconClass = tv({
    base: "w-5 h-5 group-data-[disabled]/actionPanelGroupItem:text-base-400",
    variants: {
      groupItemVariant: {
        default: "text-base-600",
        destructive:
          "w-5 group-data-[disabled]/actionPanelGroupItem:w-5 h-5 group-data-[disabled]/actionPanelGroupItem:h-5 text-danger-600 text-danger-600",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return iconClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const ActionPanelGroupItemBoxIconBoxLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxIconBoxType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-10 w-10 flex flex-row justify-center items-center min-w-[36px] ${className}`);

export const actionPanelGroupItemBoxSwitchClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemBoxSwitchType) => {
  const rootClass = tv({
    base: "group/actionPanelGroupItemBoxSwitch group-data-[disabled]/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-base-200 group-data-[disabled]/actionPanelGroupItem:pointer-events-none",
    variants: {
      groupItemVariant: {
        default: `
bg-base-200
  group-active/actionPanelGroupItem:bg-base-200
  group-data-[disabled]/actionPanelGroupItem:bg-base-200
  rounded-[50px]
  group-data-[state=checked]/actionPanelGroupItem:rounded-[50px]
  transition-all
  group-data-[state=checked]/actionPanelGroupItem:transition-all
  group-hover/actionPanelGroupItem:bg-base-300
  group-data-[highlighted]/actionPanelGroupItem:bg-base-300
  group-data-[state=open]/actionPanelGroupItem:bg-base-300
  group-data-[state=checked]/actionPanelGroupItem:bg-primary-950
  group-hover/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-primary-950
  group-active/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-primary-950
  group-data-[highlighted]/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-primary-950
`,
        destructive: `
bg-danger-100
  rounded-[50px]
  transition-all
  group-data-[disabled]/actionPanelGroupItem:bg-base-200
  group-data-[state=checked]/actionPanelGroupItem:bg-danger-500
  group-hover/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-base-50
  group-data-[highlighted]/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-base-50
  group-active/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-base-50
  group-data-[state=open]/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-base-50
`,
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return rootClass({
    class: className,
    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const actionPanelGroupItemBoxSwitchHandleClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemBoxSwitchType) => {
  const handleClass = tv({
    base: "group-data-[disabled]/actionPanelGroupItem:bg-base-300 group-data-[state=checked]/actionPanelGroupItem:bg-base-50 group-data-[disabled]/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-base-300",
    variants: {
      groupItemVariant: {
        default: `
w-6
  group-data-[state=checked]/actionPanelGroupItem:w-6
  h-6
  group-data-[state=checked]/actionPanelGroupItem:h-6
  bg-primary-950
  rounded-[50px]
  group-data-[state=checked]/actionPanelGroupItem:rounded-[50px]
  transition-all
  group-data-[state=checked]/actionPanelGroupItem:transition-all
`,
        destructive: `
w-6
  h-6
  rounded-[50px]
  bg-danger-500
  group-hover/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-danger-500
  group-data-[highlighted]/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-danger-500
  group-active/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-danger-500
  group-data-[state=open]/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:bg-danger-500
  transition-all
`,
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return handleClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const ActionPanelGroupItemBoxSwitchLayout = ({
  renderRoot,
  styleProps: { className },
  handleSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxSwitchType;
  handleSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{handleSlot}</>,
    `h-7 w-12 flex flex-row items-center px-[2px] group-data-[state=checked]/actionPanelGroupItem:pl-[22px] group-data-[state=checked]/actionPanelGroupItem:pr-[2px] ${className}`,
  );

export const actionPanelGroupItemBoxAvatarClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemBoxAvatarType) => {
  const rootClass = tv({
    base: "group/actionPanelGroupItemBoxAvatar rounded-[999px]",
    variants: {
      groupItemVariant: {
        default:
          "bg-base-100 group-active/actionPanelGroupItem:bg-base-100 group-data-[highlighted]/actionPanelGroupItem:bg-base-100 group-hover/actionPanelGroupItem:bg-base-50 group-data-[disabled]/actionPanelGroupItem:bg-base-50",
        destructive:
          "bg-danger-100 group-active/actionPanelGroupItem:bg-danger-100 group-data-[highlighted]/actionPanelGroupItem:bg-danger-100 group-hover/actionPanelGroupItem:bg-danger-50",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return rootClass({
    class: className,
    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const actionPanelGroupItemBoxAvatarImageClass = ({
  className,
  actionPanelGroupItemBoxAvatarProps,
}: ActionPanelGroupItemBoxAvatarType) => {
  const imageClass = tv({
    base: "rounded-[50px] group-data-[disabled]/actionPanelGroupItem:opacity-[0.42]",
    variants: { groupItemBoxAvatarMultiline: { true: "w-10 h-10", false: "w-7 h-7" } },

    defaultVariants: { groupItemBoxAvatarMultiline: actionPanelGroupItemBoxAvatarDefaults.multiline },
  });
  return imageClass({
    class: className,

    groupItemBoxAvatarMultiline: actionPanelGroupItemBoxAvatarProps?.multiline,
  });
};

export const actionPanelGroupItemBoxAvatarLabelClass = ({
  className,
  actionPanelGroupItemProps,
  actionPanelGroupItemBoxAvatarProps,
}: ActionPanelGroupItemBoxAvatarType) => {
  const labelClass = tv({
    base: "text-base-600 font-text font-medium select-none group-data-[disabled]/actionPanelGroupItem:text-base-400",
    variants: {
      groupItemVariant: { default: "", destructive: "text-danger-500" },
      groupItemBoxAvatarMultiline: { true: "text-xs", false: "text-sm" },
    },

    defaultVariants: {
      groupItemVariant: actionPanelGroupItemDefaults.variant,
      groupItemBoxAvatarMultiline: actionPanelGroupItemBoxAvatarDefaults.multiline,
    },
  });
  return labelClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
    groupItemBoxAvatarMultiline: actionPanelGroupItemBoxAvatarProps?.multiline,
  });
};

export const actionPanelGroupItemBoxAvatarIconClass = ({
  className,
  actionPanelGroupItemProps,
  actionPanelGroupItemBoxAvatarProps,
}: ActionPanelGroupItemBoxAvatarType) => {
  const iconClass = tv({
    base: "group-data-[disabled]/actionPanelGroupItem:text-base-400",
    variants: {
      groupItemVariant: { default: "text-base-600", destructive: "text-danger-600" },
      groupItemBoxAvatarMultiline: { false: "w-3 h-3", true: "w-6 h-6" },
    },

    defaultVariants: {
      groupItemVariant: actionPanelGroupItemDefaults.variant,
      groupItemBoxAvatarMultiline: actionPanelGroupItemBoxAvatarDefaults.multiline,
    },
  });
  return iconClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
    groupItemBoxAvatarMultiline: actionPanelGroupItemBoxAvatarProps?.multiline,
  });
};

export const ActionPanelGroupItemBoxAvatarLayout = ({
  renderRoot,
  styleProps: { className, actionPanelGroupItemBoxAvatarProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxAvatarType;
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
      variants: { groupItemBoxAvatarMultiline: { true: "h-10 w-10 min-w-[36px]", false: "h-7 w-7" } },

      defaultVariants: { groupItemBoxAvatarMultiline: actionPanelGroupItemBoxAvatarDefaults.multiline },
    })({
      class: className,
      groupItemBoxAvatarMultiline: actionPanelGroupItemBoxAvatarProps?.multiline,
    }),
  );
export const ActionPanelGroupItemBoxAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className, actionPanelGroupItemBoxAvatarProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxAvatarType;
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
      variants: { groupItemBoxAvatarMultiline: { true: "h-10 w-10 min-w-[36px]", false: "h-7 w-7" } },

      defaultVariants: { groupItemBoxAvatarMultiline: actionPanelGroupItemBoxAvatarDefaults.multiline },
    })({
      class: className,
      groupItemBoxAvatarMultiline: actionPanelGroupItemBoxAvatarProps?.multiline,
    }),
  );

export const actionPanelGroupItemBoxBadgeClass = ({
  className,
  actionPanelGroupItemProps,
  actionPanelGroupItemBoxBadgeProps,
}: ActionPanelGroupItemBoxBadgeType) => {
  const rootClass = tv({
    base: "group/actionPanelGroupItemBoxBadge rounded-[999px]",
    variants: {
      groupItemVariant: {
        default: "",
        destructive:
          "transition-all group-hover/actionPanelGroupItem:bg-white group-active/actionPanelGroupItem:bg-white group-data-[highlighted]/actionPanelGroupItem:bg-white group-data-[state=open]/actionPanelGroupItem:bg-white",
      },
      groupItemBoxBadgeColor: {
        primary: "bg-base-950 group-data-[disabled]/actionPanelGroupItem:bg-base-200",
        base: "group-data-[disabled]/actionPanelGroupItem:bg-base-200 bg-primary-950",
        red: "bg-danger-500",
        green: "bg-success-600",
      },
    },

    defaultVariants: {
      groupItemVariant: actionPanelGroupItemDefaults.variant,
      groupItemBoxBadgeColor: actionPanelGroupItemBoxBadgeDefaults.color,
    },
  });
  return rootClass({
    class: className,
    groupItemVariant: actionPanelGroupItemProps?.variant,
    groupItemBoxBadgeColor: actionPanelGroupItemBoxBadgeProps?.color,
  });
};

export const actionPanelGroupItemBoxBadgeLabelClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemBoxBadgeType) => {
  const labelClass = tv({
    base: "text-white text-xs font-text font-medium select-none text-nowrap group-data-[disabled]/actionPanelGroupItem:text-base-400",
    variants: {
      groupItemVariant: {
        default: "",
        destructive:
          "group-hover/actionPanelGroupItem:text-base-950 group-active/actionPanelGroupItem:text-base-950 group-data-[highlighted]/actionPanelGroupItem:text-base-950 group-data-[state=open]/actionPanelGroupItem:text-base-950",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return labelClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const actionPanelGroupItemBoxBadgeIconClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemBoxBadgeType) => {
  const iconClass = tv({
    base: "w-3 h-3 text-white group-data-[disabled]/actionPanelGroupItem:text-base-400",
    variants: {
      groupItemVariant: {
        default: "",
        destructive:
          "group-hover/actionPanelGroupItem:text-base-950 group-active/actionPanelGroupItem:text-base-950 group-data-[highlighted]/actionPanelGroupItem:text-base-950 group-data-[state=open]/actionPanelGroupItem:text-base-950",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return iconClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const ActionPanelGroupItemBoxBadgeLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxBadgeType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-[22px] w-fit flex flex-row justify-center items-center px-[10px] ${className}`);
export const ActionPanelGroupItemBoxBadgeWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxBadgeType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {labelSlot}
    </>,
    `h-[22px] w-fit flex flex-row justify-center items-center gap-1 pl-1 pr-2 ${className}`,
  );

export const actionPanelGroupItemBoxClass = ({ className }: ActionPanelGroupItemBoxType) => {
  return `group/actionPanelGroupItemBox  ${className}`;
};

export const actionPanelGroupItemBoxIconClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemBoxType) => {
  const iconClass = tv({
    base: "w-5 h-5 group-data-[disabled]/actionPanelGroupItem:text-base-400",
    variants: {
      groupItemVariant: {
        default: "text-base-600",
        destructive:
          "text-danger-500 group-hover/actionPanelGroupItem:text-base-50 group-active/actionPanelGroupItem:text-base-50 group-data-[highlighted]/actionPanelGroupItem:text-base-50 group-data-[state=open]/actionPanelGroupItem:text-base-50",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return iconClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const actionPanelGroupItemBoxLabelClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemBoxType) => {
  const labelClass = tv({
    base: "text-sm font-text font-medium select-none group-data-[disabled]/actionPanelGroupItem:text-base-400",
    variants: {
      groupItemVariant: {
        default: "text-base-950",
        destructive: `
text-danger-600
  group-hover/actionPanelGroupItem:text-background-50
  group-active/actionPanelGroupItem:text-background-50
  group-data-[highlighted]/actionPanelGroupItem:text-background-50
  group-data-[state=open]/actionPanelGroupItem:text-background-50
`,
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return labelClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const actionPanelGroupItemBoxSupportingClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemBoxType) => {
  const supportingClass = tv({
    base: "text-base-500 text-xs font-text font-medium select-none group-data-[disabled]/actionPanelGroupItem:text-base-400",
    variants: {
      groupItemVariant: {
        default: "",
        destructive:
          "group-hover/actionPanelGroupItem:text-base-50 group-active/actionPanelGroupItem:text-base-50 group-data-[highlighted]/actionPanelGroupItem:text-base-50 group-data-[state=open]/actionPanelGroupItem:text-base-50",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return supportingClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const actionPanelGroupItemBoxDescriptionClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemBoxType) => {
  const descriptionClass = tv({
    base: "text-base-700 text-sm font-text font-medium select-none group-data-[disabled]/actionPanelGroupItem:text-base-400",
    variants: {
      groupItemVariant: {
        default: "",
        destructive:
          "group-hover/actionPanelGroupItem:text-base-50 group-active/actionPanelGroupItem:text-base-50 group-data-[highlighted]/actionPanelGroupItem:text-base-50 group-data-[state=open]/actionPanelGroupItem:text-base-50",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return descriptionClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const ActionPanelGroupItemBoxLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
  badgeSlot,
  switchSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-[6px]">
        {iconSlot}
        {labelSlot}
      </div>
      <div className="h-fit w-fit flex flex-row justify-end items-center gap-[6px]">
        {badgeSlot}
        {switchSlot}
      </div>
    </>,
    `h-7 w-full flex flex-row items-center gap-5 ${className}`,
  );
export const ActionPanelGroupItemBoxWithAvatarLayout = ({
  renderRoot,
  styleProps: { className },
  avatarSlot,
  labelSlot,
  badgeSlot,
  switchSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-[6px]">
        {avatarSlot}
        {labelSlot}
      </div>
      <div className="h-fit w-fit flex flex-row justify-end items-center gap-[6px]">
        {badgeSlot}
        {switchSlot}
      </div>
    </>,
    `h-7 w-full flex flex-row items-center gap-5 ${className}`,
  );
export const ActionPanelGroupItemBoxWithDescriptionLayout = ({
  renderRoot,
  styleProps: { className },
  iconBoxSlot,
  labelSlot,
  supportingSlot,
  descriptionSlot,
  badgeSlot,
  switchSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxType;
  iconBoxSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  supportingSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-2">
        {iconBoxSlot}
        <div className="h-fit w-full flex flex-col justify-center [&>*:not(:first-child)]:[margin-top:-4px]">
          <div className="h-fit w-full flex flex-row items-end gap-1">
            {labelSlot}
            {supportingSlot}
          </div>
          {descriptionSlot}
        </div>
      </div>
      <div className="h-fit w-fit flex flex-row justify-end items-center gap-[6px]">
        {badgeSlot}
        {switchSlot}
      </div>
    </>,
    `h-12 w-full flex flex-row items-center gap-5 ${className}`,
  );
export const ActionPanelGroupItemBoxWithAvatarAndDescriptionLayout = ({
  renderRoot,
  styleProps: { className },
  avatarSlot,
  labelSlot,
  supportingSlot,
  descriptionSlot,
  badgeSlot,
  switchSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemBoxType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  supportingSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  switchSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-2">
        {avatarSlot}
        <div className="h-fit w-full flex flex-col justify-center [&>*:not(:first-child)]:[margin-top:-4px]">
          <div className="h-fit w-full flex flex-row items-end gap-1">
            {labelSlot}
            {supportingSlot}
          </div>
          {descriptionSlot}
        </div>
      </div>
      <div className="h-fit w-fit flex flex-row justify-end items-center gap-[6px]">
        {badgeSlot}
        {switchSlot}
      </div>
    </>,
    `h-12 w-full flex flex-row items-center gap-5 ${className}`,
  );

export const actionPanelGroupItemKBDClass = ({ className, actionPanelGroupItemProps }: ActionPanelGroupItemKBDType) => {
  const rootClass = tv({
    base: "group/actionPanelGroupItemKBD border-solid border-1 rounded-sm group-data-[disabled]/actionPanelGroupItem:border-base-400",
    variants: {
      groupItemVariant: {
        default:
          "border-base-100 group-hover/actionPanelGroupItem:border-base-200 group-active/actionPanelGroupItem:border-base-200 group-data-[highlighted]/actionPanelGroupItem:border-base-200 group-data-[state=open]/actionPanelGroupItem:border-base-200",
        destructive: `
border-danger-300
  group-hover/actionPanelGroupItem:border-danger-50
  group-active/actionPanelGroupItem:border-danger-50
  group-data-[highlighted]/actionPanelGroupItem:border-danger-50
  group-data-[state=open]/actionPanelGroupItem:border-danger-50
`,
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return rootClass({
    class: className,
    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const actionPanelGroupItemKBDLabelClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemKBDType) => {
  const labelClass = tv({
    base: "text-xs font-text font-medium select-none group-data-[disabled]/actionPanelGroupItem:text-base-400",
    variants: {
      groupItemVariant: {
        default: "text-base-600",
        destructive:
          "text-danger-400 group-hover/actionPanelGroupItem:text-danger-50 group-active/actionPanelGroupItem:text-danger-50 group-data-[highlighted]/actionPanelGroupItem:text-danger-50 group-data-[state=open]/actionPanelGroupItem:text-danger-50",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return labelClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const actionPanelGroupItemKBDIconClass = ({
  className,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemKBDType) => {
  const iconClass = tv({
    base: "w-[14px] h-[14px]",
    variants: {
      groupItemVariant: {
        default:
          "group-data-[disabled]/actionPanelGroupItem:w-[14px] group-data-[disabled]/actionPanelGroupItem:h-[14px] text-base-600 group-data-[disabled]/actionPanelGroupItem:text-base-400",
        destructive:
          "text-danger-400 group-hover/actionPanelGroupItem:text-danger-50 group-active/actionPanelGroupItem:text-danger-50 group-data-[highlighted]/actionPanelGroupItem:text-danger-50 group-data-[state=open]/actionPanelGroupItem:text-danger-50",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return iconClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const ActionPanelGroupItemKBDWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemKBDType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {labelSlot}
      {iconSlot}
    </>,
    `h-6 w-fit flex flex-row justify-center items-center gap-1 px-1 ${className}`,
  );
export const ActionPanelGroupItemKBDLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemKBDType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-6 w-fit flex flex-row justify-center items-center gap-1 px-1 ${className}`);

export const actionPanelGroupItemClass = ({ className, actionPanelGroupItemProps }: ActionPanelGroupItemType) => {
  const rootClass = tv({
    base: "group/actionPanelGroupItem bg-transparent data-[disabled]:bg-transparent rounded-sm cursor-pointer transition-all data-[disabled]:pointer-events-none",
    variants: {
      groupItemVariant: {
        default: "hover:bg-base-100 data-[highlighted]:bg-base-100 active:bg-base-50 data-[state=open]:bg-base-50",
        destructive:
          "hover:bg-danger-500 data-[highlighted]:bg-danger-500 active:bg-danger-600 data-[state=open]:bg-danger-600",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return rootClass({
    class: className,
    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const actionPanelGroupItemCheckIconClass = ({
  className,
  actionPanelGroupProps,
  actionPanelGroupItemProps,
}: ActionPanelGroupItemType) => {
  const checkIconClass = tv({
    base: "w-[14px] h-[14px]",
    variants: {
      groupTogglable: {
        true: "group-data-[disabled]/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:text-base-400",
        false: "",
      },
      groupItemVariant: { default: "", destructive: "" },
    },
    compoundVariants: [
      {
        groupTogglable: [true],
        groupItemVariant: ["default"],
        class: "group-data-[state=checked]/actionPanelGroupItem:text-base-800",
      },
      {
        groupTogglable: [true],
        groupItemVariant: ["destructive"],
        class: `
group-data-[state=checked]/actionPanelGroupItem:text-danger-500
  group-hover/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:text-white
  group-active/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:text-white
  group-data-[highlighted]/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:text-white
  group-data-[state=open]/actionPanelGroupItem:group-data-[state=checked]/actionPanelGroupItem:text-white
`,
      },
    ],
    defaultVariants: {
      groupTogglable: actionPanelGroupDefaults.togglable,
      groupItemVariant: actionPanelGroupItemDefaults.variant,
    },
  });
  return checkIconClass({
    class: className,

    groupTogglable: actionPanelGroupProps?.togglable,
    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const actionPanelGroupItemCaretClass = ({ className, actionPanelGroupItemProps }: ActionPanelGroupItemType) => {
  const caretClass = tv({
    base: "w-5 h-5 group-data-[disabled]/actionPanelGroupItem:text-base-400",
    variants: {
      groupItemVariant: {
        default: "text-base-800",
        destructive:
          "text-danger-500 group-hover/actionPanelGroupItem:text-base-50 group-active/actionPanelGroupItem:text-base-50 group-data-[highlighted]/actionPanelGroupItem:text-base-50 group-data-[state=open]/actionPanelGroupItem:text-base-50",
      },
    },

    defaultVariants: { groupItemVariant: actionPanelGroupItemDefaults.variant },
  });
  return caretClass({
    class: className,

    groupItemVariant: actionPanelGroupItemProps?.variant,
  });
};

export const ActionPanelGroupItemLayout = ({
  renderRoot,
  styleProps: { className, actionPanelGroupProps },
  checkIconSlot,
  boxSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemType;
  checkIconSlot: React.ReactNode;
  boxSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-full flex flex-row items-center",
          variants: { groupTogglable: { false: "", true: "gap-[6px]" } },

          defaultVariants: { groupTogglable: actionPanelGroupDefaults.togglable },
        })({ groupTogglable: actionPanelGroupProps?.togglable })}
      >
        <div
          className={tv({
            base: "flex flex-row justify-center items-center",
            variants: { groupTogglable: { false: "h-6 w-[0.00009999999747378752px]", true: "h-5 w-5 min-w-[16px]" } },

            defaultVariants: { groupTogglable: actionPanelGroupDefaults.togglable },
          })({ groupTogglable: actionPanelGroupProps?.togglable })}
        >
          {checkIconSlot}
        </div>
        {boxSlot}
      </div>
    </>,
    `h-fit w-full flex flex-row justify-between items-center gap-3 py-1 px-[6px] ${className}`,
  );
export const ActionPanelGroupItemWithKBDLayout = ({
  renderRoot,
  styleProps: { className, actionPanelGroupProps },
  checkIconSlot,
  boxSlot,
  kBDSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemType;
  checkIconSlot: React.ReactNode;
  boxSlot: React.ReactNode;
  kBDSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-full flex flex-row items-center",
          variants: { groupTogglable: { false: "", true: "gap-[6px]" } },

          defaultVariants: { groupTogglable: actionPanelGroupDefaults.togglable },
        })({ groupTogglable: actionPanelGroupProps?.togglable })}
      >
        <div
          className={tv({
            base: "flex flex-row justify-center items-center",
            variants: { groupTogglable: { false: "h-6 w-[0.00009999999747378752px]", true: "h-5 w-5 min-w-[16px]" } },

            defaultVariants: { groupTogglable: actionPanelGroupDefaults.togglable },
          })({ groupTogglable: actionPanelGroupProps?.togglable })}
        >
          {checkIconSlot}
        </div>
        {boxSlot}
      </div>
      {kBDSlot}
    </>,
    `h-fit w-full flex flex-row items-center gap-[6px] py-1 px-[6px] ${className}`,
  );
export const ActionPanelGroupItemWithCaretLayout = ({
  renderRoot,
  styleProps: { className, actionPanelGroupProps },
  checkIconSlot,
  boxSlot,
  caretSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupItemType;
  checkIconSlot: React.ReactNode;
  boxSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-full flex flex-row items-center",
          variants: { groupTogglable: { false: "", true: "gap-[6px]" } },

          defaultVariants: { groupTogglable: actionPanelGroupDefaults.togglable },
        })({ groupTogglable: actionPanelGroupProps?.togglable })}
      >
        <div
          className={tv({
            base: "flex flex-row justify-center items-center",
            variants: { groupTogglable: { false: "h-6 w-[0.00009999999747378752px]", true: "h-5 w-5 min-w-[16px]" } },

            defaultVariants: { groupTogglable: actionPanelGroupDefaults.togglable },
          })({ groupTogglable: actionPanelGroupProps?.togglable })}
        >
          {checkIconSlot}
        </div>
        {boxSlot}
      </div>
      {caretSlot}
    </>,
    `h-fit w-full flex flex-row items-center gap-2 py-1 px-[6px] ${className}`,
  );

export const actionPanelGroupClass = ({ className }: ActionPanelGroupType) => {
  return `group/actionPanelGroup  ${className}`;
};

export const actionPanelGroupTitleClass = ({ className }: ActionPanelGroupType) => {
  return `text-primary-500 text-sm font-text font-medium ${className}`;
};

export const ActionPanelGroupLayout = ({
  renderRoot,
  styleProps: { className },
  titleSlot,
  itemSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelGroupType;
  titleSlot: React.ReactNode;
  itemSlots: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-col pl-[6px]">{titleSlot}</div>
      <div className="h-fit w-full flex flex-col gap-[2px]">{itemSlots}</div>
    </>,
    `h-fit w-full flex flex-col gap-[6px] pt-[6px] px-2 ${className}`,
  );

export const actionPanelClass = ({ className }: ActionPanelType) => {
  return `group/actionPanel border-solid border-base-100 border-1 bg-background-50 shadow-md rounded-md min-w-[300px] ${className}`;
};

export const ActionPanelLayout = ({
  renderRoot,
  styleProps: { className },
  groupSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: ActionPanelType;
  groupSlots: React.ReactNode;
}) => renderRoot(<>{groupSlots}</>, `h-fit w-full flex flex-col gap-[10px] pb-2 ${className}`);
