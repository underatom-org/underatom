import type { RenderRoot } from "../../../base/src/_utils";
import type {
  AvatarContentType,
  AvatarActionType,
  AvatarNotificationType,
  AvatarStatusType,
  AvatarBadgeType,
  AvatarIndicatorType,
  AvatarType,
} from "~/base/src/styles/avatar";
import {
  avatarDefaults,
  avatarNotificationDefaults,
  avatarStatusDefaults,
  avatarBadgeDefaults,
} from "~/base/src/styles/avatar";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const avatarContentClass = ({ className }: AvatarContentType) => {
  return `group/avatarContent bg-base-100 rounded-[50px] ${className}`;
};

export const avatarContentImageClass = ({ className, avatarProps }: AvatarContentType) => {
  const imageClass = tv({
    base: "rounded-[50px]",
    variants: { size: { sm: "w-10 h-10", md: "w-13 h-13", lg: "w-[64px] h-[64px]", xl: "w-[92px] h-[92px]" } },

    defaultVariants: { size: avatarDefaults.size },
  });
  return imageClass({
    class: className,

    size: avatarProps?.size,
  });
};

export const avatarContentLabelClass = ({ className, avatarProps }: AvatarContentType) => {
  const labelClass = tv({
    base: "text-base-600 font-medium",
    variants: {
      size: {
        sm: "text-sm font-text",
        md: "text-lg font-text",
        lg: "text-xl font-display",
        xl: "text-3xl font-display",
      },
    },

    defaultVariants: { size: avatarDefaults.size },
  });
  return labelClass({
    class: className,

    size: avatarProps?.size,
  });
};

export const avatarContentIconClass = ({ className, avatarProps }: AvatarContentType) => {
  const iconClass = tv({
    base: "text-base-600",
    variants: { size: { sm: "w-5 h-5", md: "w-7 h-7", lg: "w-9 h-9", xl: "w-13 h-13" } },

    defaultVariants: { size: avatarDefaults.size },
  });
  return iconClass({
    class: className,

    size: avatarProps?.size,
  });
};

export const AvatarContentLayout = ({
  renderRoot,
  styleProps: { className, avatarProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarContentType;
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
      variants: { size: { sm: "h-10 w-10", md: "h-13 w-13", lg: "h-[64px] w-[64px]", xl: "h-[92px] w-[92px]" } },

      defaultVariants: { size: avatarDefaults.size },
    })({
      class: className,
      size: avatarProps?.size,
    }),
  );
export const AvatarContentWithIconLayout = ({
  renderRoot,
  styleProps: { className, avatarProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarContentType;
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
      variants: { size: { sm: "h-10 w-10", md: "h-13 w-13", lg: "h-[64px] w-[64px]", xl: "h-[92px] w-[92px]" } },

      defaultVariants: { size: avatarDefaults.size },
    })({
      class: className,
      size: avatarProps?.size,
    }),
  );

export const avatarActionClass = ({ className, avatarProps }: AvatarActionType) => {
  const rootClass = tv({
    base: `
group/avatarAction
  border-solid
  border-base-950
  border-1
  bg-base-50
  data-[active=true]:bg-base-50
  rounded-[50px]
  transition-all
  hover:bg-base-200
  data-[ring=true]:bg-base-200
  data-[ring=true]:shadow-focus-ring
  data-[disabled=true]:border-base-400
  data-[disabled=true]:bg-primary-100
`,
    variants: {
      size: {
        sm: "shadow-cut-in-elevated-sm",
        md: "shadow-cut-in-elevated-sm",
        lg: "shadow-cut-in-elevated-lg",
        xl: "shadow-cut-in-elevated-lg",
      },
    },

    defaultVariants: { size: avatarDefaults.size },
  });
  return rootClass({
    class: className,
    size: avatarProps?.size,
  });
};

export const avatarActionIconClass = ({ className, avatarProps }: AvatarActionType) => {
  const iconClass = tv({
    base: "text-base-950 group-data-[disabled=true]/avatarAction:text-base-400",
    variants: { size: { sm: "w-[14px] h-[14px]", md: "w-5 h-5", lg: "w-6 h-6", xl: "w-7 h-7" } },

    defaultVariants: { size: avatarDefaults.size },
  });
  return iconClass({
    class: className,

    size: avatarProps?.size,
  });
};

export const AvatarActionLayout = ({
  renderRoot,
  styleProps: { className, avatarProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarActionType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-7 w-7", md: "h-7 w-7", lg: "h-9 w-9", xl: "h-[42px] w-[42px]" } },

      defaultVariants: { size: avatarDefaults.size },
    })({
      class: className,
      size: avatarProps?.size,
    }),
  );

export const avatarNotificationClass = ({
  className,
  avatarProps,
  avatarNotificationProps,
}: AvatarNotificationType) => {
  const rootClass = tv({
    base: "group/avatarNotification rounded-[50px]",
    variants: {
      size: {
        sm: "shadow-cut-in-elevated-sm",
        md: "shadow-cut-in-elevated-sm",
        lg: "shadow-cut-in-elevated-lg",
        xl: "shadow-cut-in-elevated-lg",
      },
      notificationColor: { primary: "[background:#000000]", red: "bg-danger-500" },
    },

    defaultVariants: { size: avatarDefaults.size, notificationColor: avatarNotificationDefaults.color },
  });
  return rootClass({
    class: className,
    size: avatarProps?.size,
    notificationColor: avatarNotificationProps?.color,
  });
};

export const avatarNotificationCounterClass = ({ className, avatarProps }: AvatarNotificationType) => {
  const counterClass = tv({
    base: "text-white font-text font-medium",
    variants: { size: { sm: "text-xs", md: "text-xs", lg: "text-sm", xl: "text-sm" } },

    defaultVariants: { size: avatarDefaults.size },
  });
  return counterClass({
    class: className,

    size: avatarProps?.size,
  });
};

export const AvatarNotificationLayout = ({
  renderRoot,
  styleProps: { className, avatarProps },
  counterSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarNotificationType;
  counterSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{counterSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-6 w-6", xl: "h-[26px] w-[26px]" } },

      defaultVariants: { size: avatarDefaults.size },
    })({
      class: className,
      size: avatarProps?.size,
    }),
  );

export const avatarStatusClass = ({ className, avatarProps, avatarStatusProps }: AvatarStatusType) => {
  const rootClass = tv({
    base: "group/avatarStatus rounded-[50px]",
    variants: {
      size: {
        sm: "shadow-cut-in-elevated-sm",
        md: "shadow-cut-in-elevated-sm",
        lg: "shadow-cut-in-elevated-lg",
        xl: "shadow-cut-in-elevated-lg",
      },
      statusStatus: {
        online: "bg-success-600",
        offline: "border-solid border-primary-300 border-1 bg-primary-100",
        away: "bg-warning-400",
        busy: "bg-danger-500",
      },
    },

    defaultVariants: { size: avatarDefaults.size, statusStatus: avatarStatusDefaults.status },
  });
  return rootClass({
    class: className,
    size: avatarProps?.size,
    statusStatus: avatarStatusProps?.status,
  });
};

export const avatarStatusIconClass = ({ className, avatarProps, avatarStatusProps }: AvatarStatusType) => {
  const iconClass = tv({
    base: "",
    variants: {
      size: { sm: "w-[14px] h-[14px]", md: "w-[14px] h-[14px]", lg: "", xl: "" },
      statusStatus: {
        online: "w-[14px] h-[14px]",
        offline: "w-[14px] h-[14px]",
        away: "text-warning-950",
        busy: "text-white",
      },
    },
    compoundVariants: [
      { size: ["lg"], statusStatus: ["away", "busy"], class: "w-5 h-5" },
      { size: ["xl"], statusStatus: ["away", "busy"], class: "w-6 h-6" },
    ],
    defaultVariants: { size: avatarDefaults.size, statusStatus: avatarStatusDefaults.status },
  });
  return iconClass({
    class: className,

    size: avatarProps?.size,
    statusStatus: avatarStatusProps?.status,
  });
};

export const AvatarStatusLayout = ({
  renderRoot,
  styleProps: { className, avatarProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarStatusType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-6 w-6", xl: "h-[26px] w-[26px]" } },

      defaultVariants: { size: avatarDefaults.size },
    })({
      class: className,
      size: avatarProps?.size,
    }),
  );

export const avatarBadgeClass = ({ className, avatarProps, avatarBadgeProps }: AvatarBadgeType) => {
  const rootClass = tv({
    base: "group/avatarBadge rounded-[50px]",
    variants: {
      size: {
        sm: "shadow-cut-in-elevated-sm",
        md: "shadow-cut-in-elevated-sm",
        lg: "shadow-cut-in-elevated-lg",
        xl: "shadow-cut-in-elevated-lg",
      },
      badgeColor: { base: "bg-base-200", red: "bg-danger-500", primary: "bg-primary-950", green: "bg-success-600" },
    },

    defaultVariants: { size: avatarDefaults.size, badgeColor: avatarBadgeDefaults.color },
  });
  return rootClass({
    class: className,
    size: avatarProps?.size,
    badgeColor: avatarBadgeProps?.color,
  });
};

export const avatarBadgeLabelClass = ({ className, avatarProps, avatarBadgeProps }: AvatarBadgeType) => {
  const labelClass = tv({
    base: "font-text font-medium",
    variants: {
      size: { sm: "text-xs", md: "text-xs", lg: "text-sm", xl: "text-md" },
      badgeColor: { base: "text-base-950", primary: "text-white", red: "text-white", green: "text-white" },
    },

    defaultVariants: { size: avatarDefaults.size, badgeColor: avatarBadgeDefaults.color },
  });
  return labelClass({
    class: className,

    size: avatarProps?.size,
    badgeColor: avatarBadgeProps?.color,
  });
};

export const avatarBadgeIconClass = ({ className, avatarProps, avatarBadgeProps }: AvatarBadgeType) => {
  const iconClass = tv({
    base: "",
    variants: {
      size: { sm: "w-[14px] h-[14px]", md: "w-[14px] h-[14px]", lg: "w-5 h-5", xl: "w-6 h-6" },
      badgeColor: { base: "text-warning-950", primary: "text-white", red: "text-white", green: "text-white" },
    },

    defaultVariants: { size: avatarDefaults.size, badgeColor: avatarBadgeDefaults.color },
  });
  return iconClass({
    class: className,

    size: avatarProps?.size,
    badgeColor: avatarBadgeProps?.color,
  });
};

export const AvatarBadgeLayout = ({
  renderRoot,
  styleProps: { className, avatarProps },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarBadgeType;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{labelSlot}</>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: { size: { sm: "h-6 px-2", md: "h-6 px-2", lg: "h-8 px-3", xl: "h-9 px-5" } },

      defaultVariants: { size: avatarDefaults.size },
    })({
      class: className,
      size: avatarProps?.size,
    }),
  );
export const AvatarBadgeWithIconLayout = ({
  renderRoot,
  styleProps: { className, avatarProps },
  labelSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarBadgeType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {labelSlot}
      {iconSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-1",
      variants: { size: { sm: "h-6 px-2", md: "h-6 px-2", lg: "h-8 px-3", xl: "h-9 px-5" } },

      defaultVariants: { size: avatarDefaults.size },
    })({
      class: className,
      size: avatarProps?.size,
    }),
  );

export const avatarIndicatorClass = ({ className, avatarProps }: AvatarIndicatorType) => {
  const rootClass = tv({
    base: "group/avatarIndicator bg-primary-100 rounded-[50px]",
    variants: {
      size: {
        sm: "shadow-cut-in-elevated-sm",
        md: "shadow-cut-in-elevated-sm",
        lg: "shadow-cut-in-elevated-lg",
        xl: "shadow-cut-in-elevated-lg",
      },
    },

    defaultVariants: { size: avatarDefaults.size },
  });
  return rootClass({
    class: className,
    size: avatarProps?.size,
  });
};

export const avatarIndicatorImageClass = ({ className, avatarProps }: AvatarIndicatorType) => {
  const imageClass = tv({
    base: "rounded-[50px]",
    variants: { size: { sm: "w-5 h-5", md: "w-5 h-5", lg: "w-6 h-6", xl: "w-[26px] h-[26px]" } },

    defaultVariants: { size: avatarDefaults.size },
  });
  return imageClass({
    class: className,

    size: avatarProps?.size,
  });
};

export const avatarIndicatorIconClass = ({ className, avatarProps }: AvatarIndicatorType) => {
  const iconClass = tv({
    base: "text-base-700",
    variants: { size: { sm: "w-[14px] h-[14px]", md: "w-[14px] h-[14px]", lg: "w-5 h-5", xl: "w-6 h-6" } },

    defaultVariants: { size: avatarDefaults.size },
  });
  return iconClass({
    class: className,

    size: avatarProps?.size,
  });
};

export const AvatarIndicatorLayout = ({
  renderRoot,
  styleProps: { className, avatarProps },
  imageSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarIndicatorType;
  imageSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{imageSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-6 w-6", xl: "h-[26px] w-[26px]" } },

      defaultVariants: { size: avatarDefaults.size },
    })({
      class: className,
      size: avatarProps?.size,
    }),
  );
export const AvatarIndicatorWithIconLayout = ({
  renderRoot,
  styleProps: { className, avatarProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarIndicatorType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-6 w-6", xl: "h-[26px] w-[26px]" } },

      defaultVariants: { size: avatarDefaults.size },
    })({
      class: className,
      size: avatarProps?.size,
    }),
  );

export const avatarClass = ({ className }: AvatarType) => {
  return `group/avatar  ${className}`;
};

export const AvatarLayout = ({
  renderRoot,
  styleProps: { className },
  contentSlot,
  notificationSlot,
  badgeSlot,
  actionSlot,
  statusSlot,
  indicatorSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarType;
  contentSlot: React.ReactNode;
  notificationSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  actionSlot: React.ReactNode;
  statusSlot: React.ReactNode;
  indicatorSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {contentSlot}
      <div className="h-fit w-fit flex flex-row top-[14.6%] right-[14.6%] absolute translate-x-[50%] translate-y-[-50%]">
        {notificationSlot}
      </div>
      <div className="h-fit w-fit flex flex-row bottom-[0] left-[50%] absolute translate-x-[-50%] translate-y-[50%]">
        {badgeSlot}
      </div>
      <div className="h-fit w-fit flex flex-row bottom-[14.6%] right-[14.6%] absolute translate-x-[50%] translate-y-[50%]">
        {actionSlot}
        {statusSlot}
        {indicatorSlot}
      </div>
    </>,
    `h-fit w-fit flex flex-row relative ${className}`,
  );
