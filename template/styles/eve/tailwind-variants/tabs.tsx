import type { RenderRoot } from "../../../base/src/_utils";
import type {
  TabsItemBadgeType,
  TabsItemNotificationType,
  TabsItemDismissType,
  TabsItemType,
  TabsItemIndicatorType,
  TabsType,
} from "~/base/src/styles/tabs";
import {
  tabsDefaults,
  tabsItemBadgeDefaults,
  tabsItemNotificationDefaults,
  tabsItemIndicatorDefaults,
} from "~/base/src/styles/tabs";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const tabsItemBadgeClass = ({ className, tabsProps, tabsItemBadgeProps }: TabsItemBadgeType) => {
  const rootClass = tv({
    base: "group/tabsItemBadge rounded-[999px] group-data-[disabled=true]/tabs:bg-base-400 group-data-[disabled]/tabsItem:bg-base-400",
    variants: {
      variant: {
        underline: "",
        handle: "",
        fill: "transition-all group-data-[state=active]/tabsItem:bg-white group-data-[disabled=true]/tabs:group-data-[state=active]/tabsItem:bg-base-400 group-data-[disabled]/tabsItem:group-data-[state=active]/tabsItem:bg-base-400",
      },
      itemBadgeColor: { base: "", primary: "", red: "", green: "" },
    },
    compoundVariants: [
      { variant: ["underline", "handle"], itemBadgeColor: ["base"], class: "bg-base-950" },
      { variant: ["fill"], itemBadgeColor: ["base"], class: "bg-base-950" },
      { variant: ["underline", "handle"], itemBadgeColor: ["primary"], class: "bg-primary-950" },
      { variant: ["fill"], itemBadgeColor: ["primary"], class: "bg-primary-950" },
      { variant: ["fill"], itemBadgeColor: ["red"], class: "bg-danger-500" },
      { variant: ["fill"], itemBadgeColor: ["green"], class: "bg-success-600" },
      { variant: ["underline", "handle"], itemBadgeColor: ["red"], class: "bg-danger-500" },
      { variant: ["underline", "handle"], itemBadgeColor: ["green"], class: "bg-success-600" },
    ],
    defaultVariants: { variant: tabsDefaults.variant, itemBadgeColor: tabsItemBadgeDefaults.color },
  });
  return rootClass({
    class: className,
    variant: tabsProps?.variant,
    itemBadgeColor: tabsItemBadgeProps?.color,
  });
};

export const tabsItemBadgeLabelClass = ({ className, tabsProps }: TabsItemBadgeType) => {
  const labelClass = tv({
    base: "text-xs font-text font-normal select-none",
    variants: {
      variant: {
        underline: "text-base-50",
        handle: "text-base-50",
        fill: "group-data-[disabled=true]/tabs:group-data-[state=active]/tabsItem:text-base-50 text-base-50 group-data-[disabled]/tabsItem:group-data-[state=active]/tabsItem:text-base-50 group-data-[state=active]/tabsItem:text-base-950",
      },
    },

    defaultVariants: { variant: tabsDefaults.variant },
  });
  return labelClass({
    class: className,

    variant: tabsProps?.variant,
  });
};

export const tabsItemBadgeIconClass = ({ className, tabsProps }: TabsItemBadgeType) => {
  const iconClass = tv({
    base: "w-[14px] h-[14px]",
    variants: {
      variant: {
        underline: "text-base-50",
        handle: "text-base-50",
        fill: "group-data-[disabled=true]/tabs:group-data-[state=active]/tabsItem:text-base-50 text-base-50 group-data-[disabled]/tabsItem:group-data-[state=active]/tabsItem:text-base-50 group-data-[state=active]/tabsItem:text-base-700",
      },
    },

    defaultVariants: { variant: tabsDefaults.variant },
  });
  return iconClass({
    class: className,

    variant: tabsProps?.variant,
  });
};

export const TabsItemBadgeLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TabsItemBadgeType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-6 w-fit flex flex-row justify-center items-center px-2 ${className}`);
export const TabsItemBadgeWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TabsItemBadgeType;
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

export const tabsItemNotificationClass = ({
  className,
  tabsProps,
  tabsItemNotificationProps,
}: TabsItemNotificationType) => {
  const rootClass = tv({
    base: "group/tabsItemNotification rounded-[50px] transition-all group-data-[disabled=true]/tabs:bg-base-400 group-data-[disabled]/tabsItem:bg-base-400",
    variants: {
      variant: {
        underline: "",
        handle: "",
        fill: "group-data-[state=active]/tabsItem:bg-white group-data-[disabled=true]/tabs:group-data-[state=active]/tabsItem:bg-base-400 group-data-[disabled]/tabsItem:group-data-[state=active]/tabsItem:bg-base-400",
      },
      itemNotificationColor: { primary: "", red: "" },
    },
    compoundVariants: [
      { variant: ["underline", "handle"], itemNotificationColor: ["primary"], class: "bg-primary-950" },
      { variant: ["fill"], itemNotificationColor: ["primary"], class: "bg-primary-950" },
      { variant: ["underline", "handle"], itemNotificationColor: ["red"], class: "bg-danger-500" },
      { variant: ["fill"], itemNotificationColor: ["red"], class: "bg-danger-500" },
    ],
    defaultVariants: { variant: tabsDefaults.variant, itemNotificationColor: tabsItemNotificationDefaults.color },
  });
  return rootClass({
    class: className,
    variant: tabsProps?.variant,
    itemNotificationColor: tabsItemNotificationProps?.color,
  });
};

export const tabsItemNotificationLabelClass = ({ className, tabsProps }: TabsItemNotificationType) => {
  const labelClass = tv({
    base: "text-xs font-text font-medium",
    variants: {
      variant: {
        underline: "text-base-50",
        handle: "text-base-50",
        fill: "group-data-[disabled=true]/tabs:group-data-[state=active]/tabsItem:text-base-50 text-base-50 group-data-[disabled]/tabsItem:group-data-[state=active]/tabsItem:text-base-50 group-data-[state=active]/tabsItem:text-base-950",
      },
    },

    defaultVariants: { variant: tabsDefaults.variant },
  });
  return labelClass({
    class: className,

    variant: tabsProps?.variant,
  });
};

export const TabsItemNotificationLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TabsItemNotificationType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-6 w-6 flex flex-row justify-center items-center ${className}`);

export const tabsItemDismissClass = ({ className }: TabsItemDismissType) => {
  return `group/tabsItemDismiss rounded-[50px] disabled:rounded-[50px] data-[ring=true]:bg-transparent data-[ring=true]:shadow-focus-ring ${className}`;
};

export const tabsItemDismissIconClass = ({ className, tabsProps }: TabsItemDismissType) => {
  const iconClass = tv({
    base: "w-5 group-disabled/tabsItemDismiss:w-5 h-5 group-disabled/tabsItemDismiss:h-5 text-base-600 group-data-[active=true]/tabsItemDismiss:text-base-600 group-disabled/tabsItemDismiss:text-primary-200",
    variants: {
      variant: {
        underline: "group-hover/tabsItemDismiss:text-base-950 group-data-[ring=true]/tabsItemDismiss:text-base-950",
        handle: "group-hover/tabsItemDismiss:text-base-950 group-data-[ring=true]/tabsItemDismiss:text-base-950",
        fill: `
group-hover/tabsItemDismiss:text-base-950
  group-data-[ring=true]/tabsItemDismiss:text-base-950
  group-data-[state=active]/tabsItem:group-hover/tabsItemDismiss:text-base-50
  group-data-[state=active]/tabsItem:group-data-[ring=true]/tabsItemDismiss:text-base-50
`,
      },
    },

    defaultVariants: { variant: tabsDefaults.variant },
  });
  return iconClass({
    class: className,

    variant: tabsProps?.variant,
  });
};

export const TabsItemDismissLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TabsItemDismissType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-6 w-6 flex flex-row justify-center items-center ${className}`);

export const tabsItemClass = ({ className, tabsProps }: TabsItemType) => {
  const rootClass = tv({
    base: "group/tabsItem transition-all data-[ring=true]:bg-transparent",
    variants: {
      variant: {
        fill: `
group-data-[disabled=true]/tabs:data-[ring=true]:shadow-focus-ring
  data-[ring=true]:shadow-focus-ring
  group-data-[disabled=true]/tabs:data-[ring=true]:rounded-sm
  data-[ring=true]:rounded-sm
  data-[state=active]:bg-primary-950
  data-[ring=true]:data-[state=active]:bg-primary-950
`,
        underline: `
border-solid
  data-[state=active]:border-solid
  group-data-[disabled=true]/tabs:border-base-300
  border-base-300
  border-t-0
  border-b-1
  border-x-0
  data-[state=active]:border-t-0
  data-[state=active]:border-b-1
  data-[state=active]:border-x-0
  group-data-[disabled=true]/tabs:transition-all
  data-[ring=true]:shadow-focus-ring
  data-[ring=true]:rounded-sm
  data-[state=active]:border-primary-950
  group-data-[disabled=true]/tabs:data-[state=active]:bg-base-100
  data-[state=active]:bg-base-100
  data-[ring=true]:data-[state=active]:[border:unset]
`,
        handle: `
group-data-[disabled=true]/tabs:rounded-sm
  rounded-sm
  group-data-[disabled=true]/tabs:transition-all
  data-[ring=true]:shadow-focus-ring
  data-[state=active]:bg-base-50
  data-[state=active]:shadow-md
  data-[ring=true]:data-[state=active]:bg-base-50
`,
      },
      fullWidth: {
        true: "group-data-[disabled=true]/tabs:transition-all group-data-[disabled=true]/tabs:data-[ring=true]:[background:unset]",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: ["fill"],
        fullWidth: [true],
        class:
          "group-data-[disabled=true]/tabs:data-[ring=true]:shadow-none group-data-[disabled=true]/tabs:data-[state=active]:bg-primary-200 group-data-[disabled=true]/tabs:data-[ring=true]:data-[state=active]:bg-primary-200",
      },
      {
        variant: ["fill"],
        fullWidth: [false],
        class:
          "group-data-[disabled=true]/tabs:transition-all group-data-[disabled=true]/tabs:data-[disabled]:data-[state=active]:transition-all group-data-[disabled=true]/tabs:data-[disabled]:data-[state=active]:bg-primary-200",
      },
      {
        variant: ["underline"],
        fullWidth: [true],
        class: `
group-data-[disabled=true]/tabs:border-solid
  group-data-[disabled=true]/tabs:border-t-0
  group-data-[disabled=true]/tabs:border-b-1
  group-data-[disabled=true]/tabs:border-x-0
  group-data-[disabled=true]/tabs:data-[ring=true]:shadow-none
  group-data-[disabled=true]/tabs:data-[state=active]:border-primary-400
  data-[ring=true]:data-[state=active]:bg-base-100
`,
      },
      {
        variant: ["underline"],
        fullWidth: [false],
        class: `
group-data-[disabled=true]/tabs:border-solid
  group-data-[disabled=true]/tabs:data-[state=active]:border-solid
  group-data-[disabled=true]/tabs:border-t-0
  group-data-[disabled=true]/tabs:border-b-1
  group-data-[disabled=true]/tabs:border-x-0
  group-data-[disabled=true]/tabs:data-[state=active]:border-t-0
  group-data-[disabled=true]/tabs:data-[state=active]:border-b-1
  group-data-[disabled=true]/tabs:data-[state=active]:border-x-0
  group-data-[disabled=true]/tabs:data-[disabled]:data-[state=active]:border-primary-400
  group-data-[disabled=true]/tabs:data-[state=active]:border-primary-950
  group-data-[disabled=true]/tabs:data-[ring=true]:data-[state=active]:[border:unset]
  data-[ring=true]:data-[state=active]:bg-base-100
`,
      },
      {
        variant: ["handle"],
        fullWidth: [true],
        class: `
group-data-[disabled=true]/tabs:data-[ring=true]:shadow-none
  group-data-[disabled=true]/tabs:data-[state=active]:shadow-none
  group-data-[disabled=true]/tabs:data-[state=active]:bg-base-100
  group-data-[disabled=true]/tabs:data-[ring=true]:data-[state=active]:bg-base-100
  data-[ring=true]:data-[state=active]:shadow-focus-ring
`,
      },
      {
        variant: ["handle"],
        fullWidth: [false],
        class:
          "group-data-[disabled=true]/tabs:data-[disabled]:data-[state=active]:bg-base-100 group-data-[disabled=true]/tabs:data-[disabled]:data-[state=active]:shadow-none data-[ring=true]:data-[state=active]:shadow-focus-ring",
      },
    ],
    defaultVariants: { variant: tabsDefaults.variant, fullWidth: tabsDefaults.fullWidth },
  });
  return rootClass({
    class: className,
    variant: tabsProps?.variant,
    fullWidth: tabsProps?.fullWidth,
  });
};

export const tabsItemLabelClass = ({ className, tabsProps }: TabsItemType) => {
  const labelClass = tv({
    base: `
text-primary-700
  text-sm
  font-text
  font-medium
  select-none
  group-data-[disabled=true]/tabs:text-base-400
  group-data-[disabled]/tabsItem:text-base-400
  group-data-[disabled=true]/tabs:group-data-[state=active]/tabsItem:text-base-400
  group-data-[disabled]/tabsItem:group-data-[state=active]/tabsItem:text-base-400
`,
    variants: {
      variant: {
        fill: "group-data-[state=active]/tabsItem:text-base-50",
        underline: "group-data-[state=active]/tabsItem:text-primary-950",
        handle: "group-data-[state=active]/tabsItem:text-primary-950",
      },
    },

    defaultVariants: { variant: tabsDefaults.variant },
  });
  return labelClass({
    class: className,

    variant: tabsProps?.variant,
  });
};

export const tabsItemIndicatorClass = ({ className, tabsProps, tabsItemIndicatorProps }: TabsItemIndicatorType) => {
  const indicatorClass = tv({
    base: "w-[6px] h-[6px] rounded-[50px] transition-all group-data-[disabled=true]/tabs:bg-base-400 group-data-[disabled]/tabsItem:bg-base-400",
    variants: {
      variant: {
        fill: `
group-data-[state=active]/tabsItem:bg-white
  group-data-[disabled]/tabsItem:group-data-[state=active]/tabsItem:bg-white
  group-data-[disabled=true]/tabs:group-data-[state=active]/tabsItem:bg-base-400
  group-data-[disabled]/tabsItem:group-data-[state=active]/tabsItem:bg-base-400
`,
        underline: "",
        handle: "",
      },
      itemIndicatorColor: { red: "", primary: "" },
    },
    compoundVariants: [
      { variant: ["fill"], itemIndicatorColor: ["red"], class: "bg-danger-500" },
      { variant: ["underline", "handle"], itemIndicatorColor: ["red"], class: "bg-danger-500" },
      { variant: ["fill"], itemIndicatorColor: ["primary"], class: "bg-primary-950" },
      { variant: ["underline", "handle"], itemIndicatorColor: ["primary"], class: "bg-primary-950" },
    ],
    defaultVariants: { itemIndicatorColor: tabsItemIndicatorDefaults.color, variant: tabsDefaults.variant },
  });
  return indicatorClass({
    class: className,
    itemIndicatorColor: tabsItemIndicatorProps?.color,
    variant: tabsProps?.variant,
  });
};

export const tabsItemIconClass = ({ className, tabsProps }: TabsItemType) => {
  const iconClass = tv({
    base: "w-5 h-5 group-data-[disabled=true]/tabs:text-base-400 group-data-[disabled]/tabsItem:text-base-400",
    variants: {
      variant: {
        fill: "text-base-600 group-data-[state=active]/tabsItem:text-base-50 group-data-[disabled=true]/tabs:group-data-[state=active]/tabsItem:text-base-400 group-data-[disabled]/tabsItem:group-data-[state=active]/tabsItem:text-base-400",
        underline: "text-base-600",
        handle: "text-base-600",
      },
    },

    defaultVariants: { variant: tabsDefaults.variant },
  });
  return iconClass({
    class: className,

    variant: tabsProps?.variant,
  });
};

export const tabsItemLoaderClass = ({ className, tabsProps }: TabsItemType) => {
  const loaderClass = tv({
    base: `
w-5
  h-5
  text-primary-700
  group-data-[disabled=true]/tabs:text-base-400
  group-data-[disabled]/tabsItem:text-base-400
  group-data-[disabled=true]/tabs:group-data-[state=active]/tabsItem:text-base-400
  group-data-[disabled]/tabsItem:group-data-[state=active]/tabsItem:text-base-400
  animate-spin
`,
    variants: {
      variant: {
        fill: "group-data-[state=active]/tabsItem:text-base-50",
        underline: "group-data-[state=active]/tabsItem:text-primary-950",
        handle: "group-data-[state=active]/tabsItem:text-primary-950",
      },
    },

    defaultVariants: { variant: tabsDefaults.variant },
  });
  return loaderClass({
    class: className,

    variant: tabsProps?.variant,
  });
};

export const TabsItemLayout = ({
  renderRoot,
  styleProps: { className, tabsProps },
  labelSlot,
  badgeSlot,
  notificationSlot,
  indicatorSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TabsItemType;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  notificationSlot: React.ReactNode;
  indicatorSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row gap-[6px]">
        <div className="h-fit w-fit flex flex-row items-center gap-[6px]">
          {labelSlot}
          {badgeSlot}
          {notificationSlot}
        </div>
        {indicatorSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "flex flex-row items-center gap-5",
      variants: {
        size: { md: "pl-2 pr-[6px]", lg: "h-13 pl-3 pr-[10px]" },
        variant: { fill: "", underline: "", handle: "" },
        fullWidth: { false: "w-fit", true: "w-full justify-between" },
      },
      compoundVariants: [
        { size: ["md"], variant: ["fill", "underline"], class: "h-10" },
        { size: ["md"], variant: ["handle"], class: "h-8" },
      ],
      defaultVariants: { size: tabsDefaults.size, variant: tabsDefaults.variant, fullWidth: tabsDefaults.fullWidth },
    })({
      class: className,
      size: tabsProps?.size,
      variant: tabsProps?.variant,
      fullWidth: tabsProps?.fullWidth,
    }),
  );
export const TabsItemWithIconLayout = ({
  renderRoot,
  styleProps: { className, tabsProps },
  iconSlot,
  labelSlot,
  badgeSlot,
  notificationSlot,
  indicatorSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TabsItemType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  notificationSlot: React.ReactNode;
  indicatorSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row gap-[6px]">
        <div className="h-fit w-fit flex flex-row justify-center items-center gap-[6px]">
          <div className="h-fit w-fit flex flex-row justify-center items-center gap-[6px]">
            {iconSlot}
            {labelSlot}
          </div>
          {badgeSlot}
          {notificationSlot}
        </div>
        {indicatorSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "flex flex-row items-center gap-5",
      variants: {
        size: { md: "pl-2 pr-[6px]", lg: "h-13 pl-3 pr-[10px]" },
        variant: { fill: "", underline: "", handle: "" },
        fullWidth: { false: "w-fit", true: "w-full justify-between" },
      },
      compoundVariants: [
        { size: ["md"], variant: ["fill", "underline"], class: "h-10" },
        { size: ["md"], variant: ["handle"], class: "h-8" },
      ],
      defaultVariants: { size: tabsDefaults.size, variant: tabsDefaults.variant, fullWidth: tabsDefaults.fullWidth },
    })({
      class: className,
      size: tabsProps?.size,
      variant: tabsProps?.variant,
      fullWidth: tabsProps?.fullWidth,
    }),
  );
export const LoadingTabsItemLayout = ({
  renderRoot,
  styleProps: { className, tabsProps },
  loaderSlot,
  labelSlot,
  badgeSlot,
  notificationSlot,
  indicatorSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TabsItemType;
  loaderSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  notificationSlot: React.ReactNode;
  indicatorSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row gap-[6px]">
        <div className="h-fit w-fit flex flex-row justify-center items-center gap-[6px]">
          <div className="h-fit w-fit flex flex-row justify-center items-center gap-1">
            {loaderSlot}
            {labelSlot}
          </div>
          {badgeSlot}
          {notificationSlot}
        </div>
        {indicatorSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "flex flex-row items-center gap-5",
      variants: {
        size: { md: "pl-2 pr-[6px]", lg: "h-13 pl-3 pr-[10px]" },
        variant: { fill: "", underline: "", handle: "" },
        fullWidth: { false: "w-fit", true: "w-full" },
      },
      compoundVariants: [
        { size: ["md"], variant: ["fill", "underline"], class: "h-10" },
        { size: ["md"], variant: ["handle"], class: "h-8" },
      ],
      defaultVariants: { size: tabsDefaults.size, variant: tabsDefaults.variant, fullWidth: tabsDefaults.fullWidth },
    })({
      class: className,
      size: tabsProps?.size,
      variant: tabsProps?.variant,
      fullWidth: tabsProps?.fullWidth,
    }),
  );
export const IconTabsItemLayout = ({
  renderRoot,
  styleProps: { className, tabsProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TabsItemType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center gap-5",
      variants: { size: { md: "w-full", lg: "h-13 w-13" }, variant: { fill: "", underline: "", handle: "" } },
      compoundVariants: [
        { size: ["md"], variant: ["fill", "underline"], class: "h-10" },
        { size: ["md"], variant: ["handle"], class: "h-8" },
      ],
      defaultVariants: { size: tabsDefaults.size, variant: tabsDefaults.variant },
    })({
      class: className,
      size: tabsProps?.size,
      variant: tabsProps?.variant,
    }),
  );

export const tabsClass = ({ className, tabsProps }: TabsType) => {
  const rootClass = tv({
    base: "group/tabs ",
    variants: {
      variant: {
        fill: "",
        underline: "bg-transparent shadow-[inset_0px_-1px_0px_0px_#d9d9de]",
        handle: "bg-base-100 rounded-sm",
      },
    },

    defaultVariants: { variant: tabsDefaults.variant },
  });
  return rootClass({
    class: className,
    variant: tabsProps?.variant,
  });
};

export const TabsLayout = ({
  renderRoot,
  styleProps: { className, tabsProps },
  itemSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: TabsType;
  itemSlots: React.ReactNode;
}) =>
  renderRoot(
    <>{itemSlots}</>,
    tv({
      base: "h-fit w-full flex flex-row items-center",
      variants: { variant: { fill: "", underline: "", handle: "p-1" } },

      defaultVariants: { variant: tabsDefaults.variant },
    })({
      class: className,
      variant: tabsProps?.variant,
    }),
  );
