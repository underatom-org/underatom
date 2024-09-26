import type { RenderRoot } from "../../../base/src/_utils";
import type { ButtonToggleType, ButtonToggleDotType } from "~/base/src/styles/button-toggle";
import { buttonToggleDefaults, buttonToggleDotDefaults } from "~/base/src/styles/button-toggle";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const buttonToggleClass = ({ className, buttonToggleProps }: ButtonToggleType) => {
  const rootClass = tv({
    base: `
group/buttonToggle
  border-solid
  data-[toggled=true]:border-primary-950
  border-1
  transition-all
  data-[toggled=true]:data-[disabled=true]:border-base-400
  data-[disabled=true]:bg-base-50
  bg-base-50
  data-[active=true]:bg-base-50
  data-[toggled=true]:hover:bg-primary-200
  data-[toggled=true]:data-[ring=true]:bg-primary-200
  data-[ring=true]:shadow-focus-ring
  border-base-300
  hover:bg-base-100
  data-[ring=true]:bg-base-100
  data-[toggled=true]:data-[disabled=true]:bg-base-50
  data-[ring=true]:z-10
  data-[disabled=true]:pointer-events-none
  cursor-pointer
`,
    variants: {
      attachment: {
        none: "data-[toggled=true]:bg-primary-100 data-[toggled=true]:data-[active=true]:bg-primary-100 rounded-md data-[ring=true]:border-base-200 data-[toggled=true]:data-[ring=true]:border-primary-950",
        center:
          "data-[toggled=true]:bg-base-100 data-[toggled=true]:data-[active=true]:bg-base-100 data-[ring=true]:rounded-md",
        start:
          "data-[toggled=true]:bg-base-100 data-[toggled=true]:data-[active=true]:bg-base-100 rounded-l-md rounded-r-[0px] data-[ring=true]:rounded-md",
        end: "data-[toggled=true]:bg-base-100 data-[toggled=true]:data-[active=true]:bg-base-100 rounded-l-[0px] rounded-r-md data-[ring=true]:rounded-md",
      },
    },

    defaultVariants: { attachment: buttonToggleDefaults.attachment },
  });
  return rootClass({
    class: className,
    attachment: buttonToggleProps?.attachment,
  });
};

export const buttonToggleIconClass = ({ className }: ButtonToggleType) => {
  return `w-5 h-5 text-base-950 group-data-[disabled=true]/buttonToggle:text-base-400 ${className}`;
};

export const buttonToggleLabelClass = ({ className }: ButtonToggleType) => {
  return `text-base-950 text-sm font-text font-medium group-data-[disabled=true]/buttonToggle:text-base-400 ${className}`;
};

export const buttonToggleDotClass = ({ className, buttonToggleDotProps }: ButtonToggleDotType) => {
  const dotClass = tv({
    base: "w-[6px] h-[6px] rounded-xs group-data-[disabled=true]/buttonToggle:bg-base-400",
    variants: {
      dotColor: { base: "bg-base-950", primary: "bg-primary-950", red: "bg-danger-500", green: "bg-success-600" },
    },

    defaultVariants: { dotColor: buttonToggleDotDefaults.color },
  });
  return dotClass({
    class: className,
    dotColor: buttonToggleDotProps?.color,
  });
};

export const buttonToggleLoaderClass = ({ className }: ButtonToggleType) => {
  return `group-data-[disabled=true]/buttonToggle:w-5 group-data-[disabled=true]/buttonToggle:h-5 group-data-[disabled=true]/buttonToggle:text-base-400 animate-spin ${className}`;
};

export const IconButtonToggleLayout = ({
  renderRoot,
  styleProps: { className, buttonToggleProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center gap-5",
      variants: { size: { sm: "h-9 w-9", md: "h-11 w-11", lg: "h-[48px] w-[48px]" } },

      defaultVariants: { size: buttonToggleDefaults.size },
    })({
      class: className,
      size: buttonToggleProps?.size,
    }),
  );
export const ButtonToggleLayout = ({
  renderRoot,
  styleProps: { className, buttonToggleProps },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
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
      defaultVariants: { size: buttonToggleDefaults.size, fullWidth: buttonToggleDefaults.fullWidth },
    })({
      class: className,
      size: buttonToggleProps?.size,
      fullWidth: buttonToggleProps?.fullWidth,
    }),
  );
export const ButtonToggleWithLeftIconLayout = ({
  renderRoot,
  styleProps: { className, buttonToggleProps },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
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
      defaultVariants: { size: buttonToggleDefaults.size, fullWidth: buttonToggleDefaults.fullWidth },
    })({
      class: className,
      size: buttonToggleProps?.size,
      fullWidth: buttonToggleProps?.fullWidth,
    }),
  );
export const ButtonToggleWithRightIconLayout = ({
  renderRoot,
  styleProps: { className, buttonToggleProps },
  labelSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
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
      defaultVariants: { size: buttonToggleDefaults.size, fullWidth: buttonToggleDefaults.fullWidth },
    })({
      class: className,
      size: buttonToggleProps?.size,
      fullWidth: buttonToggleProps?.fullWidth,
    }),
  );
export const ButtonToggleWithDotLayout = ({
  renderRoot,
  styleProps: { className, buttonToggleProps },
  dotSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
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
      defaultVariants: { size: buttonToggleDefaults.size, fullWidth: buttonToggleDefaults.fullWidth },
    })({
      class: className,
      size: buttonToggleProps?.size,
      fullWidth: buttonToggleProps?.fullWidth,
    }),
  );
export const LoadingButtonToggleLayout = ({
  renderRoot,
  styleProps: { className, buttonToggleProps },
  loaderSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ButtonToggleType;
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
        size: { sm: "h-9 gap-1", md: "h-11 gap-2", lg: "h-[48px] gap-2" },
        fullWidth: { false: "w-fit", true: "w-full" },
      },
      compoundVariants: [
        { size: ["sm"], fullWidth: [false], class: "px-3" },
        { size: ["md"], fullWidth: [false], class: "px-5" },
        { size: ["lg"], fullWidth: [false], class: "px-7" },
      ],
      defaultVariants: { size: buttonToggleDefaults.size, fullWidth: buttonToggleDefaults.fullWidth },
    })({
      class: className,
      size: buttonToggleProps?.size,
      fullWidth: buttonToggleProps?.fullWidth,
    }),
  );
