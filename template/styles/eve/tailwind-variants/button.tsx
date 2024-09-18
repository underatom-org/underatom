import type { RenderRoot } from "../../../base/src/_utils";
import type { ButtonType, ButtonDotType } from "~/base/src/styles/button";
import { buttonDefaults, buttonDotDefaults } from "~/base/src/styles/button";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const buttonClass = ({ className, buttonProps }: ButtonType) => {
  const rootClass = tv({
    base: "group/button transition-all data-[ring=true]:shadow-focus-ring data-[ring=true]:z-10 disabled:pointer-events-none cursor-pointer",
    variants: {
      variant: {
        primary: `
bg-primary-950
  data-[active=true]:bg-primary-950
  disabled:bg-primary-300
  hover:bg-primary-800
  data-[state=open]:bg-primary-800
  data-[ring=true]:bg-primary-800
  data-[state=open]:border-solid
  data-[state=open]:border-base-400
  data-[state=open]:border-1
`,
        link: "data-[state=open]:border-solid data-[state=open]:border-base-950 data-[state=open]:border-1",
        base: "border-solid border-base-300 border-1 bg-base-50 hover:bg-base-100 data-[state=open]:bg-base-100 data-[ring=true]:bg-base-100 data-[active=true]:bg-base-200",
        danger:
          "bg-danger-500 data-[active=true]:bg-danger-500 disabled:bg-danger-300 hover:bg-danger-600 data-[state=open]:bg-danger-600 data-[ring=true]:bg-danger-600",
        ghost:
          "disabled:[background:unset] hover:bg-base-100 data-[state=open]:bg-base-100 data-[ring=true]:bg-base-100 data-[state=open]:border-solid data-[state=open]:border-base-950 data-[state=open]:border-1 data-[active=true]:bg-base-200",
      },
      attachment: {
        none: "rounded-md",
        start: "rounded-l-md rounded-r-[0px]",
        center: "data-[ring=true]:rounded-md",
        end: "rounded-l-[0px] rounded-r-md data-[ring=true]:rounded-md",
      },
    },
    compoundVariants: [
      { variant: ["primary"], attachment: ["none"], class: "shadow-sm" },
      { variant: ["link"], attachment: ["none"], class: "data-[ring=true]:bg-background-50" },
      { variant: ["base"], attachment: ["none"], class: "shadow-sm disabled:border-base-200 disabled:bg-white" },
      {
        variant: ["danger"],
        attachment: ["none"],
        class: "shadow-sm data-[state=open]:border-solid data-[state=open]:border-base-950 data-[state=open]:border-1",
      },
      {
        variant: ["ghost"],
        attachment: ["none"],
        class: "disabled:shadow-none hover:shadow-sm data-[state=open]:shadow-sm data-[active=true]:shadow-sm",
      },
      {
        variant: ["primary"],
        attachment: ["start"],
        class: "data-[ring=true]:rounded-l-md data-[ring=true]:rounded-r-sm",
      },
      { variant: ["link"], attachment: ["start"], class: "data-[ring=true]:bg-white data-[ring=true]:rounded-md" },
      { variant: ["base"], attachment: ["start"], class: "disabled:bg-base-50 data-[ring=true]:rounded-md" },
      { variant: ["danger", "ghost"], attachment: ["start"], class: "data-[ring=true]:rounded-md" },
      { variant: ["link"], attachment: ["center", "end"], class: "data-[ring=true]:bg-white" },
      { variant: ["base"], attachment: ["center", "end"], class: "disabled:bg-base-50" },
    ],
    defaultVariants: { variant: buttonDefaults.variant, attachment: buttonDefaults.attachment },
  });
  return rootClass({
    class: className,
    variant: buttonProps?.variant,
    attachment: buttonProps?.attachment,
  });
};

export const buttonIconClass = ({ className, buttonProps }: ButtonType) => {
  const iconClass = tv({
    base: "w-5 h-5",
    variants: {
      variant: {
        primary: "text-white",
        link: "text-base-950 group-disabled/button:text-primary-400",
        base: "text-base-950 group-disabled/button:text-primary-400",
        danger: "text-white",
        ghost: "text-base-950 group-disabled/button:text-primary-400",
      },
    },

    defaultVariants: { variant: buttonDefaults.variant },
  });
  return iconClass({
    class: className,

    variant: buttonProps?.variant,
  });
};

export const buttonLabelClass = ({ className, buttonProps }: ButtonType) => {
  const labelClass = tv({
    base: "text-sm font-text font-medium",
    variants: {
      variant: {
        primary: "text-white",
        link: `
text-base-950
  group-disabled/button:text-sm
  group-data-[active=true]/button:text-sm
  group-disabled/button:font-text
  group-data-[active=true]/button:font-text
  group-disabled/button:text-primary-400
  group-disabled/button:[text-decoration-line:unset]
  group-data-[active=true]/button:[text-decoration-line:unset]
  group-hover/button:text-[14px]
  group-data-[state=open]/button:text-[14px]
  group-data-[ring=true]/button:text-[14px]
  group-hover/button:font-['GeistVariable']
  group-data-[state=open]/button:font-['GeistVariable']
  group-data-[ring=true]/button:font-['GeistVariable']
  group-hover/button:leading-[24px]
  group-data-[state=open]/button:leading-[24px]
  group-data-[ring=true]/button:leading-[24px]
  group-hover/button:underline
  group-data-[state=open]/button:underline
  group-data-[ring=true]/button:underline
`,
        base: "text-base-950 group-disabled/button:text-primary-400",
        danger: "text-white",
        ghost: "text-base-950 group-disabled/button:text-primary-400",
      },
    },

    defaultVariants: { variant: buttonDefaults.variant },
  });
  return labelClass({
    class: className,

    variant: buttonProps?.variant,
  });
};

export const buttonDotClass = ({ className, buttonProps, buttonDotProps }: ButtonDotType) => {
  const dotClass = tv({
    base: "w-[6px] h-[6px] rounded-xs transition-all",
    variants: {
      variant: {
        primary: "bg-white group-disabled/button:[background:#fcfcfc]",
        danger: "bg-white group-disabled/button:[background:#fcfcfc]",
        base: "group-disabled/button:[background:#8b8b8d]",
        ghost: "group-disabled/button:[background:#8b8b8d]",
        link: "",
      },
      dotColor: { base: "", primary: "", red: "", green: "" },
    },
    compoundVariants: [
      { variant: ["base", "ghost"], dotColor: ["base"], class: "[background:#09090b]" },
      { variant: ["base", "ghost"], dotColor: ["primary"], class: "[background:#18181b]" },
      { variant: ["base", "ghost"], dotColor: ["red"], class: "[background:#dc2626]" },
      { variant: ["base", "ghost"], dotColor: ["green"], class: "bg-success-500" },
    ],
    defaultVariants: { dotColor: buttonDotDefaults.color, variant: buttonDefaults.variant },
  });
  return dotClass({
    class: className,
    dotColor: buttonDotProps?.color,
    variant: buttonProps?.variant,
  });
};

export const buttonCaretClass = ({ className, buttonProps }: ButtonType) => {
  const caretClass = tv({
    base: "w-5 h-5",
    variants: {
      variant: {
        primary: "text-white",
        base: "text-base-950 group-disabled/button:text-primary-400",
        danger: "text-white",
        ghost: "text-base-950 group-disabled/button:text-primary-400",
        link: "",
      },
    },

    defaultVariants: { variant: buttonDefaults.variant },
  });
  return caretClass({
    class: className,

    variant: buttonProps?.variant,
  });
};

export const buttonLoaderClass = ({ className, buttonProps }: ButtonType) => {
  const loaderClass = tv({
    base: "group-disabled/button:w-5 group-disabled/button:h-5 animate-spin",
    variants: {
      variant: {
        primary: "group-disabled/button:text-base-50",
        danger: "group-disabled/button:text-base-50",
        base: "group-disabled/button:text-base-400",
        ghost: "group-disabled/button:text-base-400",
        link: "group-disabled/button:text-base-400",
      },
    },

    defaultVariants: { variant: buttonDefaults.variant },
  });
  return loaderClass({
    class: className,

    variant: buttonProps?.variant,
  });
};

export const IconButtonLayout = ({
  renderRoot,
  styleProps: { className, buttonProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center gap-5",
      variants: { size: { sm: "h-9 w-9", md: "h-11 w-11", lg: "h-[48px] w-[48px]" } },

      defaultVariants: { size: buttonDefaults.size },
    })({
      class: className,
      size: buttonProps?.size,
    }),
  );
export const ButtonLayout = ({
  renderRoot,
  styleProps: { className, buttonProps },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{labelSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: {
        size: { sm: "h-9 gap-1", md: "h-11 gap-2", lg: "h-[48px] gap-[10px]" },
        fullWidth: { false: "w-fit", true: "w-full" },
      },
      compoundVariants: [
        { size: ["sm"], fullWidth: [false], class: "px-3" },
        { size: ["md"], fullWidth: [false], class: "px-5" },
        { size: ["lg"], fullWidth: [false], class: "px-7" },
      ],
      defaultVariants: { size: buttonDefaults.size, fullWidth: buttonDefaults.fullWidth },
    })({
      class: className,
      size: buttonProps?.size,
      fullWidth: buttonProps?.fullWidth,
    }),
  );
export const ButtonWithLeftIconLayout = ({
  renderRoot,
  styleProps: { className, buttonProps },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {labelSlot}
    </>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: {
        size: { sm: "h-9 gap-1", md: "h-11 gap-2", lg: "h-[48px] gap-[10px]" },
        fullWidth: { false: "w-fit", true: "w-full" },
      },
      compoundVariants: [
        { size: ["sm"], fullWidth: [false], class: "px-3" },
        { size: ["md"], fullWidth: [false], class: "px-5" },
        { size: ["lg"], fullWidth: [false], class: "px-7" },
      ],
      defaultVariants: { size: buttonDefaults.size, fullWidth: buttonDefaults.fullWidth },
    })({
      class: className,
      size: buttonProps?.size,
      fullWidth: buttonProps?.fullWidth,
    }),
  );
export const ButtonWithRightIconLayout = ({
  renderRoot,
  styleProps: { className, buttonProps },
  labelSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  labelSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {labelSlot}
      {iconSlot}
    </>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: {
        size: { sm: "h-9 gap-1", md: "h-11 gap-2", lg: "h-[48px] gap-[10px]" },
        fullWidth: { false: "w-fit", true: "w-full" },
      },
      compoundVariants: [
        { size: ["sm"], fullWidth: [false], class: "px-3" },
        { size: ["md"], fullWidth: [false], class: "px-5" },
        { size: ["lg"], fullWidth: [false], class: "px-7" },
      ],
      defaultVariants: { size: buttonDefaults.size, fullWidth: buttonDefaults.fullWidth },
    })({
      class: className,
      size: buttonProps?.size,
      fullWidth: buttonProps?.fullWidth,
    }),
  );
export const ButtonWithDotLayout = ({
  renderRoot,
  styleProps: { className, buttonProps },
  dotSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {dotSlot}
      {labelSlot}
    </>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: {
        size: { sm: "h-9 gap-[6px]", md: "h-11 gap-2", lg: "h-[48px] gap-[10px]" },
        fullWidth: { false: "w-fit", true: "w-full" },
      },
      compoundVariants: [
        { size: ["sm"], fullWidth: [false], class: "px-3" },
        { size: ["md"], fullWidth: [false], class: "px-5" },
        { size: ["lg"], fullWidth: [false], class: "px-7" },
      ],
      defaultVariants: { size: buttonDefaults.size, fullWidth: buttonDefaults.fullWidth },
    })({
      class: className,
      size: buttonProps?.size,
      fullWidth: buttonProps?.fullWidth,
    }),
  );
export const ButtonWithCaretLayout = ({
  renderRoot,
  styleProps: { className, buttonProps },
  iconSlot,
  labelSlot,
  caretSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center",
          variants: { size: { sm: "gap-1", md: "gap-2", lg: "gap-2" } },

          defaultVariants: { size: buttonDefaults.size },
        })({ size: buttonProps?.size })}
      >
        {iconSlot}
        {labelSlot}
      </div>
      {caretSlot}
    </>,
    tv({
      base: "flex flex-row items-center",
      variants: {
        size: { sm: "h-9 px-3", md: "h-11 px-5", lg: "h-[48px] px-7" },
        fullWidth: { false: "w-fit justify-center", true: "w-full justify-between" },
      },
      compoundVariants: [
        { size: ["sm"], fullWidth: [false], class: "gap-5" },
        { size: ["md"], fullWidth: [false], class: "gap-7" },
        { size: ["lg"], fullWidth: [false], class: "gap-9" },
        { size: ["sm"], fullWidth: [true], class: "gap-1" },
        { size: ["md", "lg"], fullWidth: [true], class: "gap-2" },
      ],
      defaultVariants: { size: buttonDefaults.size, fullWidth: buttonDefaults.fullWidth },
    })({
      class: className,
      size: buttonProps?.size,
      fullWidth: buttonProps?.fullWidth,
    }),
  );
export const LoadingButtonLayout = ({
  renderRoot,
  styleProps: { className, buttonProps },
  loaderSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonType;
  loaderSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {loaderSlot}
      {labelSlot}
    </>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: {
        size: { sm: "h-9 gap-[6px]", md: "h-11 gap-2", lg: "h-[48px] gap-2" },
        fullWidth: { false: "w-fit", true: "w-full" },
      },
      compoundVariants: [
        { size: ["sm"], fullWidth: [false], class: "px-3" },
        { size: ["md"], fullWidth: [false], class: "px-5" },
        { size: ["lg"], fullWidth: [false], class: "px-7" },
      ],
      defaultVariants: { size: buttonDefaults.size, fullWidth: buttonDefaults.fullWidth },
    })({
      class: className,
      size: buttonProps?.size,
      fullWidth: buttonProps?.fullWidth,
    }),
  );
