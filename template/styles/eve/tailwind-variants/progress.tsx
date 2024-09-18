import type { RenderRoot } from "../../../base/src/_utils";
import type { ProgressBarType, ProgressType } from "~/base/src/styles/progress";
import { progressDefaults, progressBarDefaults } from "~/base/src/styles/progress";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const progressBarClass = ({ className }: ProgressBarType) => {
  return `group/progressBar border-solid border-base-200 border-1 bg-base-50 rounded-[50px] group-data-[invalid=true]/progress:border-danger-500 ${className}`;
};

export const progressBarFillerClass = ({ className, progressProps, progressBarProps }: ProgressBarType) => {
  const fillerClass = tv({
    base: "w-[86px] rounded-l-[50px] rounded-r-[0px] group-data-[invalid=true]/progress:bg-danger-500",
    variants: {
      size: { sm: "h-[6px]", md: "h-2", lg: "h-3" },
      barColor: { primary: "bg-primary-950", base: "bg-base-900" },
    },

    defaultVariants: { size: progressDefaults.size, barColor: progressBarDefaults.color },
  });
  return fillerClass({
    class: className,

    size: progressProps?.size,
    barColor: progressBarProps?.color,
  });
};

export const ProgressBarLayout = ({
  renderRoot,
  styleProps: { className, progressProps },
  fillerSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ProgressBarType;
  fillerSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{fillerSlot}</>,
    tv({
      base: "w-full flex flex-row items-center gap-5",
      variants: { size: { sm: "h-2", md: "h-[10px]", lg: "h-[14px]" } },

      defaultVariants: { size: progressDefaults.size },
    })({
      class: className,
      size: progressProps?.size,
    }),
  );

export const progressClass = ({ className }: ProgressType) => {
  return `group/progress  ${className}`;
};

export const progressLabelClass = ({ className }: ProgressType) => {
  return `text-base-950 text-sm font-text font-medium ${className}`;
};

export const progressValueClass = ({ className, progressProps }: ProgressType) => {
  const valueClass = tv({
    base: "text-base-950 font-text font-medium group-data-[invalid=true]/progress:text-danger-500",
    variants: { size: { sm: "text-xs", md: "text-xs", lg: "text-sm" } },

    defaultVariants: { size: progressDefaults.size },
  });
  return valueClass({
    class: className,

    size: progressProps?.size,
  });
};

export const progressDescriptionClass = ({ className }: ProgressType) => {
  return `text-primary-700 text-sm font-text font-normal group-data-[invalid=true]/progress:text-danger-500 ${className}`;
};

export const ProgressLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
  barSlot,
  valueSlot,
  descriptionSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ProgressType;
  labelSlot: React.ReactNode;
  barSlot: React.ReactNode;
  valueSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {labelSlot}
      <div className="h-fit w-full flex flex-row items-center gap-1">
        {barSlot}
        {valueSlot}
      </div>
      {descriptionSlot}
    </>,
    `h-fit w-full flex flex-col justify-center [&>*:not(:first-child)]:[margin-top:-2px] ${className}`,
  );
