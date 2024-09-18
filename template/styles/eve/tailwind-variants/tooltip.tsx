import type { RenderRoot } from "../../../base/src/_utils";
import type { TooltipType } from "~/base/src/styles/tooltip";
import { tooltipDefaults } from "~/base/src/styles/tooltip";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const tooltipClass = ({ className, tooltipProps }: TooltipType) => {
  const rootClass = tv({
    base: "group/tooltip rounded-md",
    variants: {
      variant: {
        primary: "bg-primary-950 shadow-md",
        base: "border-solid border-base-200 border-1 bg-base-50 shadow-md",
        negative: "bg-white",
      },
    },

    defaultVariants: { variant: tooltipDefaults.variant },
  });
  return rootClass({
    class: className,
    variant: tooltipProps?.variant,
  });
};

export const tooltipLabelClass = ({ className, tooltipProps }: TooltipType) => {
  const labelClass = tv({
    base: "text-xs font-text font-medium",
    variants: { variant: { primary: "text-white", negative: "text-base-950", base: "text-base-950" } },

    defaultVariants: { variant: tooltipDefaults.variant },
  });
  return labelClass({
    class: className,

    variant: tooltipProps?.variant,
  });
};

export const tooltipIconClass = ({ className, tooltipProps }: TooltipType) => {
  const iconClass = tv({
    base: "w-[18px] h-[18px]",
    variants: { variant: { primary: "text-white", negative: "text-base-950", base: "text-base-950" } },

    defaultVariants: { variant: tooltipDefaults.variant },
  });
  return iconClass({
    class: className,

    variant: tooltipProps?.variant,
  });
};

export const tooltipDescriptionClass = ({ className, tooltipProps }: TooltipType) => {
  const descriptionClass = tv({
    base: "text-xs font-text font-normal",
    variants: { variant: { primary: "text-primary-100", negative: "text-base-800", base: "text-base-800" } },

    defaultVariants: { variant: tooltipDefaults.variant },
  });
  return descriptionClass({
    class: className,

    variant: tooltipProps?.variant,
  });
};

export const TooltipLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
  descriptionSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TooltipType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      <div className="h-fit w-full flex flex-col gap-[2px]">
        {labelSlot}
        {descriptionSlot}
      </div>
    </>,
    `h-fit w-full flex flex-col gap-[6px] p-3 ${className}`,
  );
