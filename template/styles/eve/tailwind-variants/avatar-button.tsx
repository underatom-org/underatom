import type { RenderRoot } from "../../../base/src/_utils";
import type {
  AvatarButtonContentType,
  AvatarButtonNotificationType,
  AvatarButtonStatusType,
  AvatarButtonBadgeType,
  AvatarButtonIndicatorType,
  AvatarButtonType,
} from "~/base/src/styles/avatar-button";
import {
  avatarButtonDefaults,
  avatarButtonNotificationDefaults,
  avatarButtonStatusDefaults,
  avatarButtonBadgeDefaults,
} from "~/base/src/styles/avatar-button";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const avatarButtonContentClass = ({ className }: AvatarButtonContentType) => {
  return `
  group/avatarButtonContent
  bg-base-100
  group-data-[active=true]/avatarButton:bg-base-100
  group-disabled/avatarButton:bg-base-100
  rounded-[50px]
  transition-all
  group-hover/avatarButton:bg-base-200
  group-data-[ring=true]/avatarButton:bg-base-200
  group-data-[state=open]/avatarButton:bg-base-200
  group-data-[ring=true]/avatarButton:shadow-focus-ring
  group-data-[state=open]/avatarButton:border-solid
  group-data-[state=open]/avatarButton:border-primary-950
  group-data-[state=open]/avatarButton:border-1
  ${className}
  `;
};

export const avatarButtonContentImageClass = ({ className, avatarButtonProps }: AvatarButtonContentType) => {
  const imageClass = tv({
    base: `
rounded-[50px]
  transition-all
  group-data-[active=true]/avatarButton:[opacity:unset]
  group-hover/avatarButton:opacity-[0.8]
  group-data-[ring=true]/avatarButton:opacity-[0.8]
  group-data-[state=open]/avatarButton:opacity-[0.8]
  group-disabled/avatarButton:opacity-[0.6]
`,
    variants: { size: { sm: "w-10 h-10", md: "w-13 h-13", lg: "w-[64px] h-[64px]", xl: "w-[92px] h-[92px]" } },

    defaultVariants: { size: avatarButtonDefaults.size },
  });
  return imageClass({
    class: className,

    size: avatarButtonProps?.size,
  });
};

export const avatarButtonContentLabelClass = ({ className, avatarButtonProps }: AvatarButtonContentType) => {
  const labelClass = tv({
    base: "text-base-600 font-medium group-disabled/avatarButton:text-base-400",
    variants: {
      size: {
        sm: "text-sm font-text",
        md: "text-lg font-text",
        lg: "text-xl font-display",
        xl: "text-3xl font-display",
      },
    },

    defaultVariants: { size: avatarButtonDefaults.size },
  });
  return labelClass({
    class: className,

    size: avatarButtonProps?.size,
  });
};

export const avatarButtonContentIconClass = ({ className, avatarButtonProps }: AvatarButtonContentType) => {
  const iconClass = tv({
    base: "text-base-600 group-disabled/avatarButton:text-primary-400",
    variants: { size: { sm: "w-5 h-5", md: "w-7 h-7", lg: "w-9 h-9", xl: "w-13 h-13" } },

    defaultVariants: { size: avatarButtonDefaults.size },
  });
  return iconClass({
    class: className,

    size: avatarButtonProps?.size,
  });
};

export const AvatarButtonContentLayout = ({
  renderRoot,
  styleProps: { className, avatarButtonProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonContentType;
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

      defaultVariants: { size: avatarButtonDefaults.size },
    })({
      class: className,
      size: avatarButtonProps?.size,
    }),
  );
export const AvatarButtonContentWithIconLayout = ({
  renderRoot,
  styleProps: { className, avatarButtonProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonContentType;
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

      defaultVariants: { size: avatarButtonDefaults.size },
    })({
      class: className,
      size: avatarButtonProps?.size,
    }),
  );

export const avatarButtonNotificationClass = ({
  className,
  avatarButtonNotificationProps,
}: AvatarButtonNotificationType) => {
  const rootClass = tv({
    base: "group/avatarButtonNotification shadow-cut-in-elevated-lg rounded-[50px] group-disabled/avatarButton:bg-base-300",
    variants: { notificationColor: { primary: "[background:#000000]", red: "bg-danger-500" } },

    defaultVariants: { notificationColor: avatarButtonNotificationDefaults.color },
  });
  return rootClass({
    class: className,
    notificationColor: avatarButtonNotificationProps?.color,
  });
};

export const avatarButtonNotificationCounterClass = ({
  className,
  avatarButtonProps,
}: AvatarButtonNotificationType) => {
  const counterClass = tv({
    base: "text-white font-text font-medium",
    variants: { size: { sm: "text-xs", md: "text-xs", lg: "text-sm", xl: "text-sm" } },

    defaultVariants: { size: avatarButtonDefaults.size },
  });
  return counterClass({
    class: className,

    size: avatarButtonProps?.size,
  });
};

export const AvatarButtonNotificationLayout = ({
  renderRoot,
  styleProps: { className, avatarButtonProps },
  counterSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonNotificationType;
  counterSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{counterSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-6 w-6", xl: "h-[26px] w-[26px]" } },

      defaultVariants: { size: avatarButtonDefaults.size },
    })({
      class: className,
      size: avatarButtonProps?.size,
    }),
  );

export const avatarButtonStatusClass = ({
  className,
  avatarButtonProps,
  avatarButtonStatusProps,
}: AvatarButtonStatusType) => {
  const rootClass = tv({
    base: "group/avatarButtonStatus rounded-[50px] group-disabled/avatarButton:bg-base-300",
    variants: {
      size: {
        sm: "shadow-cut-in-elevated-sm",
        md: "shadow-cut-in-elevated-sm",
        lg: "shadow-cut-in-elevated-lg",
        xl: "shadow-cut-in-elevated-lg",
      },
      statusStatus: {
        online: "bg-success-600",
        offline: "border-solid border-primary-300 border-1 bg-primary-100 group-disabled/avatarButton:[border:unset]",
        away: "bg-warning-400",
        busy: "bg-danger-500",
      },
    },

    defaultVariants: { size: avatarButtonDefaults.size, statusStatus: avatarButtonStatusDefaults.status },
  });
  return rootClass({
    class: className,
    size: avatarButtonProps?.size,
    statusStatus: avatarButtonStatusProps?.status,
  });
};

export const avatarButtonStatusIconClass = ({
  className,
  avatarButtonProps,
  avatarButtonStatusProps,
}: AvatarButtonStatusType) => {
  const iconClass = tv({
    base: "",
    variants: {
      size: { sm: "w-[14px] h-[14px]", md: "w-[14px] h-[14px]", lg: "", xl: "" },
      statusStatus: {
        offline: "w-[14px] h-[14px]",
        online: "w-[14px] h-[14px]",
        away: "text-warning-950 group-disabled/avatarButton:text-white",
        busy: "text-white",
      },
    },
    compoundVariants: [
      { size: ["lg"], statusStatus: ["away", "busy"], class: "w-5 h-5" },
      { size: ["xl"], statusStatus: ["away", "busy"], class: "w-6 h-6" },
    ],
    defaultVariants: { size: avatarButtonDefaults.size, statusStatus: avatarButtonStatusDefaults.status },
  });
  return iconClass({
    class: className,

    size: avatarButtonProps?.size,
    statusStatus: avatarButtonStatusProps?.status,
  });
};

export const AvatarButtonStatusLayout = ({
  renderRoot,
  styleProps: { className, avatarButtonProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonStatusType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-6 w-6", xl: "h-[26px] w-[26px]" } },

      defaultVariants: { size: avatarButtonDefaults.size },
    })({
      class: className,
      size: avatarButtonProps?.size,
    }),
  );

export const avatarButtonBadgeClass = ({
  className,
  avatarButtonProps,
  avatarButtonBadgeProps,
}: AvatarButtonBadgeType) => {
  const rootClass = tv({
    base: "group/avatarButtonBadge rounded-[50px] group-disabled/avatarButton:bg-base-300",
    variants: {
      size: {
        sm: "shadow-cut-in-elevated-sm",
        md: "shadow-cut-in-elevated-sm",
        lg: "shadow-cut-in-elevated-lg",
        xl: "shadow-cut-in-elevated-lg",
      },
      badgeColor: {
        base: "border-solid border-primary-200 border-1 bg-base-100 group-disabled/avatarButton:[border:unset]",
        red: "bg-danger-500",
        primary: "bg-primary-950",
        green: "bg-success-600",
      },
    },

    defaultVariants: { size: avatarButtonDefaults.size, badgeColor: avatarButtonBadgeDefaults.color },
  });
  return rootClass({
    class: className,
    size: avatarButtonProps?.size,
    badgeColor: avatarButtonBadgeProps?.color,
  });
};

export const avatarButtonBadgeLabelClass = ({
  className,
  avatarButtonProps,
  avatarButtonBadgeProps,
}: AvatarButtonBadgeType) => {
  const labelClass = tv({
    base: "font-text font-medium",
    variants: {
      size: { sm: "text-xs", md: "text-xs", lg: "text-sm", xl: "text-md" },
      badgeColor: {
        base: "text-base-950 group-disabled/avatarButton:text-white",
        primary: "text-white",
        red: "text-white",
        green: "text-white",
      },
    },

    defaultVariants: { size: avatarButtonDefaults.size, badgeColor: avatarButtonBadgeDefaults.color },
  });
  return labelClass({
    class: className,

    size: avatarButtonProps?.size,
    badgeColor: avatarButtonBadgeProps?.color,
  });
};

export const avatarButtonBadgeIconClass = ({ className, avatarButtonBadgeProps }: AvatarButtonBadgeType) => {
  const iconClass = tv({
    base: "w-5 h-5",
    variants: {
      badgeColor: {
        base: "text-base-950 group-disabled/avatarButton:text-white",
        primary: "text-white",
        red: "text-white",
        green: "text-white",
      },
    },

    defaultVariants: { badgeColor: avatarButtonBadgeDefaults.color },
  });
  return iconClass({
    class: className,

    badgeColor: avatarButtonBadgeProps?.color,
  });
};

export const AvatarButtonBadgeLayout = ({
  renderRoot,
  styleProps: { className, avatarButtonProps },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonBadgeType;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{labelSlot}</>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: { size: { sm: "h-6 px-2", md: "h-6 px-2", lg: "h-8 px-3", xl: "h-9 px-5" } },

      defaultVariants: { size: avatarButtonDefaults.size },
    })({
      class: className,
      size: avatarButtonProps?.size,
    }),
  );
export const AvatarButtonBadgeWithIconLayout = ({
  renderRoot,
  styleProps: { className, avatarButtonProps },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonBadgeType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {labelSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: {
        size: {
          sm: "h-6 gap-1 pl-[2px] pr-[6px]",
          md: "h-6 gap-1 pl-[2px] pr-[6px]",
          lg: "h-8 gap-1 pl-[6px] pr-3",
          xl: "h-9 gap-[6px] pl-2 pr-[14px]",
        },
      },

      defaultVariants: { size: avatarButtonDefaults.size },
    })({
      class: className,
      size: avatarButtonProps?.size,
    }),
  );

export const avatarButtonIndicatorClass = ({ className, avatarButtonProps }: AvatarButtonIndicatorType) => {
  const rootClass = tv({
    base: "group/avatarButtonIndicator bg-primary-100 rounded-[50px]",
    variants: {
      size: {
        sm: "shadow-cut-in-elevated-sm",
        md: "shadow-cut-in-elevated-sm",
        lg: "shadow-cut-in-elevated-lg",
        xl: "shadow-cut-in-elevated-lg",
      },
    },

    defaultVariants: { size: avatarButtonDefaults.size },
  });
  return rootClass({
    class: className,
    size: avatarButtonProps?.size,
  });
};

export const avatarButtonIndicatorImageClass = ({ className, avatarButtonProps }: AvatarButtonIndicatorType) => {
  const imageClass = tv({
    base: "rounded-[50px] group-disabled/avatarButton:opacity-[0.6]",
    variants: { size: { sm: "w-5 h-5", md: "w-5 h-5", lg: "w-6 h-6", xl: "w-[26px] h-[26px]" } },

    defaultVariants: { size: avatarButtonDefaults.size },
  });
  return imageClass({
    class: className,

    size: avatarButtonProps?.size,
  });
};

export const avatarButtonIndicatorIconClass = ({ className, avatarButtonProps }: AvatarButtonIndicatorType) => {
  const iconClass = tv({
    base: "text-base-700 group-disabled/avatarButton:text-white",
    variants: { size: { sm: "w-[14px] h-[14px]", md: "w-[14px] h-[14px]", lg: "w-5 h-5", xl: "w-6 h-6" } },

    defaultVariants: { size: avatarButtonDefaults.size },
  });
  return iconClass({
    class: className,

    size: avatarButtonProps?.size,
  });
};

export const AvatarButtonIndicatorLayout = ({
  renderRoot,
  styleProps: { className, avatarButtonProps },
  imageSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonIndicatorType;
  imageSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{imageSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-6 w-6", xl: "h-[26px] w-[26px]" } },

      defaultVariants: { size: avatarButtonDefaults.size },
    })({
      class: className,
      size: avatarButtonProps?.size,
    }),
  );
export const AvatarButtonIndicatorWithIconLayout = ({
  renderRoot,
  styleProps: { className, avatarButtonProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonIndicatorType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-6 w-6", xl: "h-[26px] w-[26px]" } },

      defaultVariants: { size: avatarButtonDefaults.size },
    })({
      class: className,
      size: avatarButtonProps?.size,
    }),
  );

export const avatarButtonClass = ({ className }: AvatarButtonType) => {
  return `group/avatarButton disabled:pointer-events-none ${className}`;
};

export const AvatarButtonLayout = ({
  renderRoot,
  styleProps: { className },
  contentSlot,
  notificationSlot,
  badgeSlot,
  statusSlot,
  indicatorSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarButtonType;
  contentSlot: React.ReactNode;
  notificationSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
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
        {statusSlot}
        {indicatorSlot}
      </div>
    </>,
    `h-fit w-fit flex flex-row relative ${className}`,
  );
