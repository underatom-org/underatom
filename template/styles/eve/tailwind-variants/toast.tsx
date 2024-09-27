import type { RenderRoot } from "../../../base/src/_utils";
import type {
  ToastStatusType,
  ToastDismissType,
  ToastActionType,
  ToastAvatarType,
  ToastType,
} from "~/base/src/styles/toast";
import { toastDefaults, toastActionDefaults } from "~/base/src/styles/toast";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const toastStatusClass = ({ className, toastProps }: ToastStatusType) => {
  const rootClass = tv({
    base: "group/toastStatus rounded-sm",
    variants: {
      status: {
        primary: "bg-primary-950",
        base: "bg-primary-200",
        danger: "bg-danger-200",
        warning: "bg-warning-200",
        success: "bg-success-200",
      },
    },

    defaultVariants: { status: toastDefaults.status },
  });
  return rootClass({
    class: className,
    status: toastProps?.status,
  });
};

export const toastStatusIconClass = ({ className, toastProps }: ToastStatusType) => {
  const iconClass = tv({
    base: "w-5 h-5",
    variants: {
      status: {
        primary: "text-white",
        base: "text-base-800",
        danger: "text-danger-600",
        warning: "text-warning-600",
        success: "text-success-700",
      },
    },

    defaultVariants: { status: toastDefaults.status },
  });
  return iconClass({
    class: className,

    status: toastProps?.status,
  });
};

export const ToastStatusLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ToastStatusType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-7 w-7 flex flex-row justify-center items-center ${className}`);

export const toastDismissClass = ({ className }: ToastDismissType) => {
  return `group/toastDismiss  ${className}`;
};

export const toastDismissIconClass = ({ className, toastProps }: ToastDismissType) => {
  const iconClass = tv({
    base: "w-5 h-5 group-data-[disabled]/toastDismiss:text-primary-400",
    variants: {
      status: {
        primary: "text-primary-600",
        base: "text-primary-600",
        danger: "text-danger-700",
        warning: "text-warning-700",
        success: "text-success-700",
      },
    },

    defaultVariants: { status: toastDefaults.status },
  });
  return iconClass({
    class: className,

    status: toastProps?.status,
  });
};

export const ToastDismissLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ToastDismissType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-7 w-7 flex flex-row justify-center items-center gap-5 ${className}`);

export const toastActionClass = ({ className, toastProps, toastActionProps }: ToastActionType) => {
  const rootClass = tv({
    base: "group/toastAction rounded-sm data-[focus-visible]:shadow-focus-ring",
    variants: {
      status: { primary: "", base: "", danger: "", warning: "", success: "" },
      actionVariant: { primary: "", ghost: "data-[pressed]:[background:unset] data-[disabled]:[background:unset]" },
    },
    compoundVariants: [
      {
        status: ["primary"],
        actionVariant: ["primary"],
        class:
          "bg-primary-950 data-[pressed]:bg-primary-950 hover:bg-primary-800 data-[focus-visible]:bg-primary-800 data-[disabled]:bg-primary-200",
      },
      { status: ["primary"], actionVariant: ["ghost"], class: "hover:bg-base-200 data-[focus-visible]:bg-base-200" },
      {
        status: ["base"],
        actionVariant: ["primary"],
        class:
          "bg-base-950 data-[pressed]:bg-base-950 hover:bg-base-800 data-[focus-visible]:bg-base-800 data-[disabled]:bg-base-200",
      },
      { status: ["base"], actionVariant: ["ghost"], class: "hover:bg-base-100 data-[focus-visible]:bg-base-100" },
      {
        status: ["danger"],
        actionVariant: ["primary"],
        class:
          "bg-danger-500 data-[pressed]:bg-danger-500 hover:bg-danger-600 data-[focus-visible]:bg-danger-600 data-[disabled]:bg-danger-200",
      },
      { status: ["danger"], actionVariant: ["ghost"], class: "hover:bg-danger-200 data-[focus-visible]:bg-danger-200" },
      {
        status: ["warning"],
        actionVariant: ["primary"],
        class:
          "bg-warning-600 data-[pressed]:bg-warning-600 hover:bg-warning-700 data-[focus-visible]:bg-warning-700 data-[disabled]:bg-warning-200",
      },
      {
        status: ["warning"],
        actionVariant: ["ghost"],
        class: "hover:bg-warning-200 data-[focus-visible]:bg-warning-200",
      },
      {
        status: ["success"],
        actionVariant: ["primary"],
        class:
          "bg-success-600 data-[pressed]:bg-success-600 hover:bg-success-700 data-[focus-visible]:bg-success-700 data-[disabled]:bg-success-200",
      },
      {
        status: ["success"],
        actionVariant: ["ghost"],
        class: "hover:bg-success-200 data-[focus-visible]:bg-success-200",
      },
    ],
    defaultVariants: { status: toastDefaults.status, actionVariant: toastActionDefaults.variant },
  });
  return rootClass({
    class: className,
    status: toastProps?.status,
    actionVariant: toastActionProps?.variant,
  });
};

export const toastActionLabelClass = ({ className, toastProps, toastActionProps }: ToastActionType) => {
  const labelClass = tv({
    base: "text-sm font-text font-medium",
    variants: {
      status: {
        primary: "group-data-[disabled]/toastAction:text-primary-400",
        base: "group-data-[disabled]/toastAction:text-base-400",
        danger: "group-data-[disabled]/toastAction:text-danger-400",
        warning: "group-data-[disabled]/toastAction:text-warning-500",
        success: "group-data-[disabled]/toastAction:text-success-500",
      },
      actionVariant: { primary: "text-white", ghost: "" },
    },
    compoundVariants: [
      { status: ["primary"], actionVariant: ["ghost"], class: "text-primary-950" },
      { status: ["base"], actionVariant: ["ghost"], class: "text-base-950" },
      { status: ["danger"], actionVariant: ["ghost"], class: "text-danger-700" },
      { status: ["warning"], actionVariant: ["ghost"], class: "text-warning-700" },
      { status: ["success"], actionVariant: ["ghost"], class: "text-success-800" },
    ],
    defaultVariants: { status: toastDefaults.status, actionVariant: toastActionDefaults.variant },
  });
  return labelClass({
    class: className,

    status: toastProps?.status,
    actionVariant: toastActionProps?.variant,
  });
};

export const toastActionIconClass = ({ className, toastProps, toastActionProps }: ToastActionType) => {
  const iconClass = tv({
    base: "w-5 h-5",
    variants: {
      status: {
        primary: "group-data-[disabled]/toastAction:text-primary-400",
        base: "group-data-[disabled]/toastAction:text-base-400",
        danger: "group-data-[disabled]/toastAction:text-danger-400",
        warning: "group-data-[disabled]/toastAction:text-warning-500",
        success: "group-data-[disabled]/toastAction:text-success-500",
      },
      actionVariant: { primary: "text-white", ghost: "" },
    },
    compoundVariants: [
      { status: ["primary"], actionVariant: ["ghost"], class: "text-primary-950" },
      { status: ["base"], actionVariant: ["ghost"], class: "text-base-950" },
      { status: ["danger"], actionVariant: ["ghost"], class: "text-danger-700" },
      { status: ["warning"], actionVariant: ["ghost"], class: "text-warning-700" },
      { status: ["success"], actionVariant: ["ghost"], class: "text-success-800" },
    ],
    defaultVariants: { status: toastDefaults.status, actionVariant: toastActionDefaults.variant },
  });
  return iconClass({
    class: className,

    status: toastProps?.status,
    actionVariant: toastActionProps?.variant,
  });
};

export const ToastActionLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ToastActionType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-9 w-fit flex flex-row justify-center items-center px-3 ${className}`);
export const ToastActionWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ToastActionType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {labelSlot}
    </>,
    `h-9 w-fit flex flex-row justify-center items-center gap-[6px] px-3 ${className}`,
  );

export const toastAvatarClass = ({ className, toastProps }: ToastAvatarType) => {
  const rootClass = tv({
    base: "group/toastAvatar rounded-[50px]",
    variants: {
      status: {
        base: "bg-primary-100",
        primary: "bg-white",
        danger: "bg-white",
        warning: "bg-white",
        success: "bg-white",
      },
    },

    defaultVariants: { status: toastDefaults.status },
  });
  return rootClass({
    class: className,
    status: toastProps?.status,
  });
};

export const toastAvatarImageClass = ({ className }: ToastAvatarType) => {
  return `w-10 h-10 rounded-[50px] ${className}`;
};

export const toastAvatarLabelClass = ({ className }: ToastAvatarType) => {
  return `text-primary-600 text-sm font-text font-medium ${className}`;
};

export const toastAvatarIconClass = ({ className }: ToastAvatarType) => {
  return `w-[18px] h-[18px] text-primary-600 ${className}`;
};

export const ToastAvatarLayout = ({
  renderRoot,
  styleProps: { className },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ToastAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {imageSlot}
      {labelSlot}
    </>,
    `h-10 w-10 flex flex-row justify-center items-center ${className}`,
  );
export const ToastAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ToastAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {imageSlot}
      {iconSlot}
    </>,
    `h-10 w-10 flex flex-row justify-center items-center ${className}`,
  );

export const toastClass = ({ className, toastProps }: ToastType) => {
  const rootClass = tv({
    base: "group/toast border-solid border-1 shadow-lg rounded-lg",
    variants: {
      status: {
        primary: "border-primary-900 bg-primary-50",
        base: "border-primary-200 bg-base-50",
        success: "border-success-500 bg-success-50",
        warning: "border-warning-500 bg-warning-50",
        danger: "border-danger-500 bg-danger-50",
      },
    },

    defaultVariants: { status: toastDefaults.status },
  });
  return rootClass({
    class: className,
    status: toastProps?.status,
  });
};

export const toastTitleClass = ({ className, toastProps }: ToastType) => {
  const titleClass = tv({
    base: "text-sm font-text font-medium",
    variants: {
      status: {
        primary: "text-primary-950",
        base: "text-base-950",
        success: "text-success-900",
        warning: "text-warning-900",
        danger: "text-danger-900",
      },
    },

    defaultVariants: { status: toastDefaults.status },
  });
  return titleClass({
    class: className,

    status: toastProps?.status,
  });
};

export const toastSubtitleClass = ({ className, toastProps }: ToastType) => {
  const subtitleClass = tv({
    base: "text-xs font-text font-normal",
    variants: {
      status: {
        primary: "text-primary-600",
        base: "text-primary-600",
        success: "text-success-600",
        warning: "text-warning-600",
        danger: "text-danger-600",
      },
    },

    defaultVariants: { status: toastDefaults.status },
  });
  return subtitleClass({
    class: className,

    status: toastProps?.status,
  });
};

export const toastDescriptionClass = ({ className, toastProps }: ToastType) => {
  const descriptionClass = tv({
    base: "text-sm font-text font-normal",
    variants: {
      status: {
        primary: "text-primary-800",
        base: "text-primary-800",
        success: "text-success-700",
        warning: "text-warning-700",
        danger: "text-danger-700",
      },
    },

    defaultVariants: { status: toastDefaults.status },
  });
  return descriptionClass({
    class: className,

    status: toastProps?.status,
  });
};

export const toastIconClass = ({ className, toastProps }: ToastType) => {
  const iconClass = tv({
    base: "w-5 h-5",
    variants: {
      status: {
        primary: "text-primary-800",
        base: "text-primary-800",
        success: "text-success-700",
        warning: "text-warning-700",
        danger: "text-danger-700",
      },
    },

    defaultVariants: { status: toastDefaults.status },
  });
  return iconClass({
    class: className,

    status: toastProps?.status,
  });
};

export const ToastLayout = ({
  renderRoot,
  styleProps: { className },
  statusSlot,
  titleSlot,
  subtitleSlot,
  descriptionSlot,
  dismissSlot,
  actionSlot1,
  actionSlot2,
}: {
  renderRoot: RenderRoot;
  styleProps: ToastType;
  statusSlot: React.ReactNode;
  titleSlot: React.ReactNode;
  subtitleSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
  actionSlot1: React.ReactNode;
  actionSlot2: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row gap-5">
        <div className="h-fit w-full flex flex-row gap-2">
          {statusSlot}
          <div className="h-fit w-full flex flex-col gap-[6px]">
            <div className="h-fit w-full flex flex-col [&>*:not(:first-child)]:[margin-top:-2px]">
              {titleSlot}
              {subtitleSlot}
            </div>
            {descriptionSlot}
          </div>
        </div>
        {dismissSlot}
      </div>
      <div className="h-fit w-fit flex flex-row gap-[6px]">
        {actionSlot1}
        {actionSlot2}
      </div>
    </>,
    `h-fit w-full flex flex-col justify-end items-end gap-5 p-5 ${className}`,
  );
export const ToastWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  titleSlot,
  subtitleSlot,
  descriptionSlot,
  dismissSlot,
  actionSlot1,
  actionSlot2,
}: {
  renderRoot: RenderRoot;
  styleProps: ToastType;
  iconSlot: React.ReactNode;
  titleSlot: React.ReactNode;
  subtitleSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
  actionSlot1: React.ReactNode;
  actionSlot2: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row gap-5">
        <div className="h-fit w-full flex flex-row gap-2">
          <div className="h-fit w-fit flex flex-row gap-[10px] pt-1">{iconSlot}</div>
          <div className="h-fit w-full flex flex-col gap-[6px]">
            <div className="h-fit w-full flex flex-col [&>*:not(:first-child)]:[margin-top:-2px]">
              {titleSlot}
              {subtitleSlot}
            </div>
            {descriptionSlot}
          </div>
        </div>
        {dismissSlot}
      </div>
      <div className="h-fit w-fit flex flex-row gap-[6px]">
        {actionSlot1}
        {actionSlot2}
      </div>
    </>,
    `h-fit w-full flex flex-col justify-end items-end gap-5 p-5 ${className}`,
  );
export const ToastWithAvatarLayout = ({
  renderRoot,
  styleProps: { className },
  avatarSlot,
  titleSlot,
  subtitleSlot,
  descriptionSlot,
  dismissSlot,
  actionSlot1,
  actionSlot2,
}: {
  renderRoot: RenderRoot;
  styleProps: ToastType;
  avatarSlot: React.ReactNode;
  titleSlot: React.ReactNode;
  subtitleSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
  actionSlot1: React.ReactNode;
  actionSlot2: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row gap-5">
        <div className="h-fit w-full flex flex-row gap-2">
          {avatarSlot}
          <div className="h-fit w-full flex flex-col gap-[6px]">
            <div className="h-fit w-full flex flex-col [&>*:not(:first-child)]:[margin-top:-2px]">
              {titleSlot}
              {subtitleSlot}
            </div>
            {descriptionSlot}
          </div>
        </div>
        {dismissSlot}
      </div>
      <div className="h-fit w-fit flex flex-row gap-[6px]">
        {actionSlot1}
        {actionSlot2}
      </div>
    </>,
    `h-fit w-full flex flex-col justify-end items-end gap-5 p-5 ${className}`,
  );
