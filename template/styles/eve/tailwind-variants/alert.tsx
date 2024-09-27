import type { RenderRoot } from "../../../base/src/_utils";
import type { AlertStatusType, AlertActionType, AlertDismissType, AlertType } from "~/base/src/styles/alert";
import { alertDefaults, alertActionDefaults } from "~/base/src/styles/alert";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const alertStatusClass = ({ className, alertProps }: AlertStatusType) => {
  const rootClass = tv({
    base: "group/alertStatus rounded-sm",
    variants: {
      status: {
        primary: "bg-primary-950",
        base: "bg-primary-300",
        danger: "bg-danger-200",
        warning: "bg-warning-200",
        success: "bg-success-300",
      },
    },

    defaultVariants: { status: alertDefaults.status },
  });
  return rootClass({
    class: className,
    status: alertProps?.status,
  });
};

export const alertStatusIconClass = ({ className, alertProps }: AlertStatusType) => {
  const iconClass = tv({
    base: "w-5 h-5",
    variants: {
      status: {
        primary: "text-white",
        base: "text-base-800",
        danger: "text-danger-500",
        warning: "text-warning-600",
        success: "text-success-700",
      },
    },

    defaultVariants: { status: alertDefaults.status },
  });
  return iconClass({
    class: className,

    status: alertProps?.status,
  });
};

export const AlertStatusLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AlertStatusType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-7 w-7 flex flex-row justify-center items-center ${className}`);

export const alertActionClass = ({ className, alertProps, alertActionProps }: AlertActionType) => {
  const rootClass = tv({
    base: "group/alertAction rounded-sm transition-all data-[ring=true]:shadow-focus-ring",
    variants: {
      status: { primary: "", base: "", danger: "", warning: "", success: "" },
      actionVariant: {
        primary: "",
        base: "data-[active=true]:[background:unset] data-[disabled=true]:[background:unset]",
      },
    },
    compoundVariants: [
      {
        status: ["primary"],
        actionVariant: ["primary"],
        class:
          "bg-primary-950 data-[active=true]:bg-primary-950 hover:bg-primary-800 data-[ring=true]:bg-primary-800 data-[disabled=true]:bg-primary-200",
      },
      { status: ["primary"], actionVariant: ["base"], class: "hover:bg-base-200 data-[ring=true]:bg-base-200" },
      {
        status: ["base"],
        actionVariant: ["primary"],
        class:
          "bg-base-950 data-[active=true]:bg-base-950 hover:bg-base-800 data-[ring=true]:bg-base-800 data-[disabled=true]:bg-base-200",
      },
      { status: ["base"], actionVariant: ["base"], class: "hover:bg-base-100 data-[ring=true]:bg-base-100" },
      {
        status: ["danger"],
        actionVariant: ["primary"],
        class:
          "bg-danger-500 data-[active=true]:bg-danger-500 hover:bg-danger-600 data-[ring=true]:bg-danger-600 data-[disabled=true]:bg-danger-200",
      },
      { status: ["danger"], actionVariant: ["base"], class: "hover:bg-danger-200 data-[ring=true]:bg-danger-200" },
      {
        status: ["warning"],
        actionVariant: ["primary"],
        class:
          "bg-warning-600 data-[active=true]:bg-warning-600 hover:bg-warning-700 data-[ring=true]:bg-warning-700 data-[disabled=true]:bg-warning-200",
      },
      { status: ["warning"], actionVariant: ["base"], class: "hover:bg-warning-200 data-[ring=true]:bg-warning-200" },
      {
        status: ["success"],
        actionVariant: ["primary"],
        class:
          "bg-success-600 data-[active=true]:bg-success-600 hover:bg-success-700 data-[ring=true]:bg-success-700 data-[disabled=true]:bg-success-200",
      },
      { status: ["success"], actionVariant: ["base"], class: "hover:bg-success-200 data-[ring=true]:bg-success-200" },
    ],
    defaultVariants: { status: alertDefaults.status, actionVariant: alertActionDefaults.variant },
  });
  return rootClass({
    class: className,
    status: alertProps?.status,
    actionVariant: alertActionProps?.variant,
  });
};

export const alertActionLabelClass = ({ className, alertProps, alertActionProps }: AlertActionType) => {
  const labelClass = tv({
    base: "text-sm font-text font-medium",
    variants: {
      status: {
        primary: "group-data-[disabled=true]/alertAction:text-primary-400",
        base: "group-data-[disabled=true]/alertAction:text-base-400",
        danger: "group-data-[disabled=true]/alertAction:text-danger-400",
        warning: "group-data-[disabled=true]/alertAction:text-warning-500",
        success: "group-data-[disabled=true]/alertAction:text-success-500",
      },
      actionVariant: { primary: "text-white", base: "" },
    },
    compoundVariants: [
      { status: ["primary"], actionVariant: ["base"], class: "text-primary-950" },
      { status: ["base"], actionVariant: ["base"], class: "text-base-950" },
      { status: ["danger"], actionVariant: ["base"], class: "text-danger-700" },
      { status: ["warning"], actionVariant: ["base"], class: "text-warning-700" },
      { status: ["success"], actionVariant: ["base"], class: "text-success-800" },
    ],
    defaultVariants: { status: alertDefaults.status, actionVariant: alertActionDefaults.variant },
  });
  return labelClass({
    class: className,

    status: alertProps?.status,
    actionVariant: alertActionProps?.variant,
  });
};

export const alertActionIconClass = ({ className, alertProps, alertActionProps }: AlertActionType) => {
  const iconClass = tv({
    base: "w-5 h-5",
    variants: {
      status: {
        primary: "group-data-[disabled=true]/alertAction:text-primary-400",
        base: "group-data-[disabled=true]/alertAction:text-base-400",
        danger: "group-data-[disabled=true]/alertAction:text-danger-400",
        warning: "group-data-[disabled=true]/alertAction:text-warning-500",
        success: "group-data-[disabled=true]/alertAction:text-success-500",
      },
      actionVariant: { primary: "text-white", base: "" },
    },
    compoundVariants: [
      { status: ["primary"], actionVariant: ["base"], class: "text-primary-950" },
      { status: ["base"], actionVariant: ["base"], class: "text-base-950" },
      { status: ["danger"], actionVariant: ["base"], class: "text-danger-700" },
      { status: ["warning"], actionVariant: ["base"], class: "text-warning-700" },
      { status: ["success"], actionVariant: ["base"], class: "text-success-800" },
    ],
    defaultVariants: { status: alertDefaults.status, actionVariant: alertActionDefaults.variant },
  });
  return iconClass({
    class: className,

    status: alertProps?.status,
    actionVariant: alertActionProps?.variant,
  });
};

export const AlertActionLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AlertActionType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-9 w-fit flex flex-row justify-center items-center px-3 ${className}`);
export const AlertActionWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AlertActionType;
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

export const alertDismissClass = ({ className }: AlertDismissType) => {
  return `group/alertDismiss rounded-[50px] transition-all data-[ring=true]:bg-transparent data-[ring=true]:shadow-focus-ring ${className}`;
};

export const alertDismissIconClass = ({ className, alertProps }: AlertDismissType) => {
  const iconClass = tv({
    base: "w-5 h-5",
    variants: {
      status: {
        primary:
          "text-primary-500 group-data-[active=true]/alertDismiss:text-primary-500 group-hover/alertDismiss:text-primary-600 group-data-[ring=true]/alertDismiss:text-primary-600",
        base: "text-base-500 group-data-[active=true]/alertDismiss:text-base-500 group-hover/alertDismiss:text-base-800 group-data-[ring=true]/alertDismiss:text-base-800",
        danger:
          "text-danger-500 group-data-[active=true]/alertDismiss:text-danger-500 group-hover/alertDismiss:text-danger-700 group-data-[ring=true]/alertDismiss:text-danger-700",
        warning:
          "text-warning-600 group-data-[active=true]/alertDismiss:text-warning-600 group-hover/alertDismiss:text-warning-700 group-data-[ring=true]/alertDismiss:text-warning-700",
        success:
          "text-success-600 group-data-[active=true]/alertDismiss:text-success-600 group-hover/alertDismiss:text-success-700 group-data-[ring=true]/alertDismiss:text-success-700",
      },
    },

    defaultVariants: { status: alertDefaults.status },
  });
  return iconClass({
    class: className,

    status: alertProps?.status,
  });
};

export const AlertDismissLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AlertDismissType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-7 w-7 flex flex-row justify-center items-center gap-5 ${className}`);

export const alertClass = ({ className, alertProps }: AlertType) => {
  const rootClass = tv({
    base: "group/alert rounded-lg",
    variants: {
      status: {
        primary: "bg-primary-100",
        base: "bg-base-100",
        success: "bg-success-100",
        warning: "bg-warning-50",
        danger: "bg-danger-50",
      },
    },

    defaultVariants: { status: alertDefaults.status },
  });
  return rootClass({
    class: className,
    status: alertProps?.status,
  });
};

export const alertIconClass = ({ className, alertProps }: AlertType) => {
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

    defaultVariants: { status: alertDefaults.status },
  });
  return iconClass({
    class: className,

    status: alertProps?.status,
  });
};

export const alertTitleClass = ({ className, alertProps }: AlertType) => {
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

    defaultVariants: { status: alertDefaults.status },
  });
  return titleClass({
    class: className,

    status: alertProps?.status,
  });
};

export const alertSubtitleClass = ({ className, alertProps }: AlertType) => {
  const subtitleClass = tv({
    base: "text-xs font-text font-normal",
    variants: {
      status: {
        primary: "text-primary-600",
        base: "text-primary-600",
        success: "text-success-700",
        warning: "text-warning-700",
        danger: "text-danger-600",
      },
    },

    defaultVariants: { status: alertDefaults.status },
  });
  return subtitleClass({
    class: className,

    status: alertProps?.status,
  });
};

export const alertDescriptionClass = ({ className, alertProps }: AlertType) => {
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

    defaultVariants: { status: alertDefaults.status },
  });
  return descriptionClass({
    class: className,

    status: alertProps?.status,
  });
};

export const AlertLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  titleSlot,
  subtitleSlot,
  descriptionSlot,
  actionSlot1,
  actionSlot2,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AlertType;
  iconSlot: React.ReactNode;
  titleSlot: React.ReactNode;
  subtitleSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  actionSlot1: React.ReactNode;
  actionSlot2: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row gap-5">
        <div className="h-fit w-full flex flex-row gap-2">
          <div className="h-fit w-fit flex flex-row gap-[10px] pt-1">{iconSlot}</div>
          <div className="h-fit w-full flex flex-col gap-5">
            <div className="h-fit w-full flex flex-col gap-[6px]">
              <div className="h-fit w-full flex flex-col [&>*:not(:first-child)]:[margin-top:-2px]">
                {titleSlot}
                {subtitleSlot}
              </div>
              {descriptionSlot}
            </div>
            <div className="h-fit w-fit flex flex-row gap-[6px]">
              {actionSlot1}
              {actionSlot2}
            </div>
          </div>
        </div>
        {dismissSlot}
      </div>
    </>,
    `h-fit w-full flex flex-col justify-end gap-5 p-5 ${className}`,
  );
export const AlertWithStatusLayout = ({
  renderRoot,
  styleProps: { className },
  statusSlot,
  titleSlot,
  subtitleSlot,
  descriptionSlot,
  actionSlot1,
  actionSlot2,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AlertType;
  statusSlot: React.ReactNode;
  titleSlot: React.ReactNode;
  subtitleSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  actionSlot1: React.ReactNode;
  actionSlot2: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row gap-5">
        <div className="h-fit w-full flex flex-row gap-3">
          {statusSlot}
          <div className="h-fit w-full flex flex-col gap-5">
            <div className="h-fit w-full flex flex-col gap-[6px]">
              <div className="h-fit w-full flex flex-col [&>*:not(:first-child)]:[margin-top:-2px]">
                {titleSlot}
                {subtitleSlot}
              </div>
              {descriptionSlot}
            </div>
            <div className="h-fit w-fit flex flex-row gap-[6px]">
              {actionSlot1}
              {actionSlot2}
            </div>
          </div>
        </div>
        {dismissSlot}
      </div>
    </>,
    `h-fit w-full flex flex-col justify-end items-end gap-5 p-5 ${className}`,
  );
