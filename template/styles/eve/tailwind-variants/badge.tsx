import type { RenderRoot } from "../../../base/src/_utils";
import type { BadgeType } from "~/base/src/styles/badge";
import { badgeDefaults } from "~/base/src/styles/badge";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const badgeClass = ({ className, badgeProps }: BadgeType) => {
  const rootClass = tv({
    base: "group/badge rounded-[50px]",
    variants: {
      color: { primary: "", base: "", red: "", green: "", yellow: "", blue: "", orange: "" },
      variant: { filled: "", outline: "border-solid border-1 bg-white" },
    },
    compoundVariants: [
      { color: ["primary"], variant: ["filled"], class: "bg-primary-950" },
      { color: ["base"], variant: ["filled"], class: "bg-base-50" },
      { color: ["red"], variant: ["filled"], class: "bg-danger-500" },
      { color: ["green"], variant: ["filled"], class: "bg-success-600" },
      { color: ["yellow"], variant: ["filled"], class: "bg-warning-500" },
      { color: ["blue"], variant: ["filled"], class: "bg-misc-blue" },
      { color: ["orange"], variant: ["filled"], class: "bg-misc-orange" },
      { color: ["primary"], variant: ["outline"], class: "border-primary-950" },
      { color: ["base"], variant: ["outline"], class: "border-base-400" },
      { color: ["red"], variant: ["outline"], class: "border-danger-500" },
      { color: ["green"], variant: ["outline"], class: "border-success-600" },
      { color: ["yellow"], variant: ["outline"], class: "border-warning-500" },
      { color: ["blue"], variant: ["outline"], class: "border-misc-blue" },
      { color: ["orange"], variant: ["outline"], class: "border-misc-orange" },
    ],
    defaultVariants: { color: badgeDefaults.color, variant: badgeDefaults.variant },
  });
  return rootClass({
    class: className,
    color: badgeProps?.color,
    variant: badgeProps?.variant,
  });
};

export const badgeLabelClass = ({ className, badgeProps }: BadgeType) => {
  const labelClass = tv({
    base: "text-xs font-text font-medium",
    variants: {
      color: { primary: "", red: "", green: "", yellow: "", blue: "", orange: "", base: "" },
      variant: { filled: "", outline: "" },
    },
    compoundVariants: [
      { color: ["primary", "red", "green", "yellow", "blue", "orange"], variant: ["filled"], class: "text-white" },
      { color: ["base"], variant: ["filled"], class: "text-[#262322]" },
      { color: ["primary"], variant: ["outline"], class: "text-primary-950" },
      { color: ["base"], variant: ["outline"], class: "text-base-950" },
      { color: ["red"], variant: ["outline"], class: "text-danger-500" },
      { color: ["green"], variant: ["outline"], class: "text-success-600" },
      { color: ["yellow"], variant: ["outline"], class: "text-warning-500" },
      { color: ["blue"], variant: ["outline"], class: "text-misc-blue" },
      { color: ["orange"], variant: ["outline"], class: "text-misc-orange" },
    ],
    defaultVariants: { color: badgeDefaults.color, variant: badgeDefaults.variant },
  });
  return labelClass({
    class: className,

    color: badgeProps?.color,
    variant: badgeProps?.variant,
  });
};

export const badgeIconClass = ({ className, badgeProps }: BadgeType) => {
  const iconClass = tv({
    base: "w-[14px] h-[14px]",
    variants: {
      color: {
        primary: "",
        red: "",
        green: "",
        yellow: "",
        blue: "",
        purple: "text-white",
        orange: "",
        pink: "text-white",
        base: "text-base-950",
        bas: "text-[#262322]",
      },
      variant: { filled: "", outline: "" },
    },
    compoundVariants: [
      { color: ["primary", "red", "green", "yellow", "blue", "orange"], variant: ["filled"], class: "text-white" },
      { color: ["primary"], variant: ["outline"], class: "text-primary-950" },
      { color: ["green"], variant: ["outline"], class: "text-success-600" },
      { color: ["yellow"], variant: ["outline"], class: "text-warning-500" },
      { color: ["red"], variant: ["outline"], class: "text-danger-500" },
      { color: ["blue"], variant: ["outline"], class: "text-misc-blue" },
      { color: ["orange"], variant: ["outline"], class: "text-misc-orange" },
    ],
    defaultVariants: { color: badgeDefaults.color, variant: badgeDefaults.variant },
  });
  return iconClass({
    class: className,

    color: badgeProps?.color,
    variant: badgeProps?.variant,
  });
};

export const BadgeLayout = ({
  renderRoot,
  styleProps: { className, badgeProps },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: BadgeType;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{labelSlot}</>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: { size: { sm: "h-6 px-2", md: "h-7 px-[10px]", lg: "h-[26px] px-[10px]" } },

      defaultVariants: { size: badgeDefaults.size },
    })({
      class: className,
      size: badgeProps?.size,
    }),
  );
export const BadgeWithLeftIconLayout = ({
  renderRoot,
  styleProps: { className, badgeProps },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: BadgeType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {labelSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-1",
      variants: { size: { sm: "h-6 pl-1 pr-[6px]", md: "h-7 pl-[6px] pr-2", lg: "h-[26px] pl-2 pr-[10px]" } },

      defaultVariants: { size: badgeDefaults.size },
    })({
      class: className,
      size: badgeProps?.size,
    }),
  );
export const BadgeWithRightIconLayout = ({
  renderRoot,
  styleProps: { className, badgeProps },
  labelSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: BadgeType;
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
      variants: { size: { sm: "h-6 pl-[6px] pr-1", md: "h-7 pl-2 pr-[6px]", lg: "h-[26px] pl-[10px] pr-2" } },

      defaultVariants: { size: badgeDefaults.size },
    })({
      class: className,
      size: badgeProps?.size,
    }),
  );
