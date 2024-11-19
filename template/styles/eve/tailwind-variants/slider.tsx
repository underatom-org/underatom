import type { RenderRoot } from "../../../base/src/_utils";
import type {
  SliderBarThumbType,
  SliderTooltipType,
  SliderTickLabelType,
  SliderBarType,
  SliderType,
} from "~/base/src/styles/slider";
import { sliderDefaults } from "~/base/src/styles/slider";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const sliderBarThumbClass = ({ className }: SliderBarThumbType) => {
  return `
  group/sliderBarThumb
  border-solid
  border-primary-300
  border-1
  bg-base-50
  shadow-sm
  data-[ring=true]:shadow-sm
  rounded-[50px]
  data-[dragging=true]:shadow-md
  group-data-[disabled=true]/slider:border-primary-200
  data-[disabled]:border-primary-200
  group-data-[disabled=true]/slider:bg-base-100
  data-[disabled]:bg-base-100
  data-[disabled]:shadow-none
  group-data-[disabled=true]/slider:shadow-none
  group-data-[disabled=true]/slider:data-[dragging=true]:shadow-none
  group-data-[disabled=true]/slider:data-[ring=true]:shadow-none
  ${className}
  `;
};

export const sliderBarThumbIconClass = ({ className }: SliderBarThumbType) => {
  return `w-[14px] h-[14px] [background:#ffffff] ${className}`;
};

export const SliderBarThumbLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SliderBarThumbType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    `
  h-[14px]
  data-[ring=true]:h-[14px]
  data-[disabled]:h-[14px]
  w-[14px]
  data-[ring=true]:w-[14px]
  data-[disabled]:w-[14px]
  flex
  flex-row
  justify-center
  items-center
  gap-5
  data-[dragging=true]:h-[18px]
  data-[dragging=true]:w-[18px]
  data-[dragging=true]:transition-[width,height]
  ${className}
  `,
  );

export const sliderTooltipClass = ({ className }: SliderTooltipType) => {
  return `group/sliderTooltip bg-primary-950 rounded-sm ${className}`;
};

export const sliderTooltipValueClass = ({ className }: SliderTooltipType) => {
  return `text-white text-sm font-text font-medium ${className}`;
};

export const SliderTooltipLayout = ({
  renderRoot,
  styleProps: { className },
  valueSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SliderTooltipType;
  valueSlot: React.ReactNode;
}) => renderRoot(<>{valueSlot}</>, `h-9 w-fit flex flex-row justify-center items-center px-[10px] ${className}`);

export const sliderTickLabelClass = ({ className }: SliderTickLabelType) => {
  return `group/sliderTickLabel  ${className}`;
};

export const sliderTickLabelIconClass = ({ className }: SliderTickLabelType) => {
  return `w-5 h-5 text-primary-600 ${className}`;
};

export const sliderTickLabelValueClass = ({ className }: SliderTickLabelType) => {
  return `text-primary-600 text-xs font-text font-medium ${className}`;
};

export const SliderTickLabelLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  valueSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SliderTickLabelType;
  iconSlot: React.ReactNode;
  valueSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {valueSlot}
    </>,
    `h-fit w-fit flex flex-col justify-center items-center gap-[2px] ${className}`,
  );

export const sliderBarClass = ({ className }: SliderBarType) => {
  return `
  group/sliderBar
  border-solid
  border-base-200
  group-data-[disabled=true]/slider:group-data-[invalid=true]/slider:border-base-200
  border-1
  bg-base-50
  rounded-[50px]
  group-data-[disabled=true]/slider:bg-base-100
  group-data-[invalid=true]/slider:border-danger-800
  ${className}
  `;
};

export const sliderBarFillClass = ({ className, sliderProps }: SliderBarType) => {
  const fillClass = tv({
    base: "w-[75px] h-[6px] rounded-[50px] group-data-[invalid=true]/slider:bg-danger-500 group-data-[disabled=true]/slider:bg-base-400 group-data-[disabled=true]/slider:group-data-[invalid=true]/slider:bg-base-400",
    variants: { color: { primary: "bg-primary-950", base: "bg-base-950" } },

    defaultVariants: { color: sliderDefaults.color },
  });
  return fillClass({
    class: className,

    color: sliderProps?.color,
  });
};

export const sliderBarTickClass = ({ className }: SliderBarType) => {
  return `w-1 h-1 bg-base-200 rounded-[50px] ${className}`;
};

export const SliderBarLayout = ({
  renderRoot,
  styleProps: { className },
  fillSlot,
  thumbSlot,
  tickSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: SliderBarType;
  fillSlot: React.ReactNode;
  thumbSlot: React.ReactNode;
  tickSlots: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center [&>*:not(:first-child)]:[margin-left:-2px]">
        {fillSlot}
        {thumbSlot}
      </div>
      {tickSlots}
    </>,
    `h-[6px] w-full flex flex-row justify-between items-center gap-5 ${className}`,
  );

export const sliderClass = ({ className }: SliderType) => {
  return `group/slider  ${className}`;
};

export const sliderLabelClass = ({ className }: SliderType) => {
  return `text-base-950 text-sm font-text font-medium group-data-[disabled=true]/slider:text-base-400 ${className}`;
};

export const sliderAsteriskClass = ({ className }: SliderType) => {
  return `
  group-data-[required=true]/slider:[display:unset]
  group-data-[required=true]/slider:text-danger-500
  group-data-[required=true]/slider:text-sm
  group-data-[required=true]/slider:font-text
  group-data-[required=true]/slider:font-medium
  group-data-[disabled=true]/slider:group-data-[required=true]/slider:text-base-400
  hidden
  ${className}
  `;
};

export const sliderValueClass = ({ className }: SliderType) => {
  return `text-base-800 text-sm font-text font-medium group-data-[invalid=true]/slider:text-danger-500 group-data-[disabled=true]/slider:text-base-400 group-data-[disabled=true]/slider:group-data-[invalid=true]/slider:text-base-400 ${className}`;
};

export const sliderDescriptionClass = ({ className }: SliderType) => {
  return `text-base-800 text-sm font-text font-normal group-data-[invalid=true]/slider:text-danger-500 group-data-[disabled=true]/slider:text-base-400 group-data-[disabled=true]/slider:group-data-[invalid=true]/slider:text-base-400 ${className}`;
};

export const sliderIconClass = ({ className }: SliderType) => {
  return `w-5 h-5 [background:#000000] rounded-[100px] ${className}`;
};

export const SliderLayout = ({
  renderRoot,
  styleProps: { className },
  tooltipSlot,
  labelSlot,
  asteriskSlot,
  valueSlot,
  barSlot,
  tickLabelSlots,
  descriptionSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SliderType;
  tooltipSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  valueSlot: React.ReactNode;
  barSlot: React.ReactNode;
  tickLabelSlots: React.ReactNode;
  descriptionSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {tooltipSlot}
      <div className="h-fit w-full flex flex-row justify-between items-center gap-[2px]">
        <div className="h-fit w-fit flex flex-row items-center gap-[2px]">
          {labelSlot}
          {asteriskSlot}
        </div>
        {valueSlot}
      </div>
      {barSlot}
      <div className="h-fit w-full flex flex-row justify-between items-center gap-5">{tickLabelSlots}</div>
      {descriptionSlot}
      {iconSlot}
    </>,
    `h-fit w-full flex flex-col justify-center gap-[2px] ${className}`,
  );
