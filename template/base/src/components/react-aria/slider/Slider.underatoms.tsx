import {
  Label,
  LabelProps,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  SliderProps,
  SliderOutputProps,
  SliderStateContext,
  SliderThumbProps,
  SliderTrackProps,
} from "react-aria-components";
import { getGenericContext } from "../../../_utils";
import {
  sliderAsteriskClass,
  sliderBarClass,
  sliderBarFillClass,
  sliderBarThumbClass,
  sliderBarThumbIconClass,
  sliderClass,
  sliderDescriptionClass,
  sliderIconClass,
  sliderLabelClass,
  SliderStyleProps,
  sliderTickLabelClass,
  sliderTickLabelValueClass,
  sliderTooltipClass,
  sliderTooltipValueClass,
  sliderValueClass,
} from "../../../styles/slider";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import React from "react";

/*
  ====================================
  Slider
  ====================================
*/

export const { Provider: SliderInternalProvider, useComponentContext: useSliderInternalProvider } =
  getGenericContext<USliderRootProps>("SliderInternalProvider");
export type USliderRootProps = Omit<SliderProps, "orientation"> &
  SliderStyleProps & {
    children?: ReactNode;
    className?: string;
  };
export const USliderRoot = (props: USliderRootProps) => {
  return (
    <Slider
      {...props}
      orientation="horizontal"
      className={sliderClass({ className: props.className, sliderProps: props })}
    >
      <SliderInternalProvider value={props}>{props.children}</SliderInternalProvider>
    </Slider>
  );
};

export type USliderLabelProps = LabelProps;
export const USliderLabel = (props: USliderLabelProps) => {
  const sliderProps = useSliderInternalProvider();
  return <Label {...props} className={sliderLabelClass({ className: props.className, sliderProps })} />;
};

export type USliderDescriptionProps = ComponentPropsWithoutRef<"span">;
export const USliderDescription = (props: USliderDescriptionProps) => {
  const sliderProps = useSliderInternalProvider();
  return <span {...props} className={sliderDescriptionClass({ className: props.className, sliderProps })} />;
};

export type USliderAsteriskProps = ComponentPropsWithoutRef<"span">;
export const USliderAsterisk = (props: USliderAsteriskProps) => {
  const sliderProps = useSliderInternalProvider();
  return <span {...props} className={sliderAsteriskClass({ className: props.className, sliderProps })} />;
};

export type USliderValueProps = SliderOutputProps & {
  className?: string;
};
export const USliderValue = (props: USliderValueProps) => {
  const sliderProps = useSliderInternalProvider();
  return (
    <SliderOutput {...props} className={sliderValueClass({ className: props.className, sliderProps })}>
      {({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")}
    </SliderOutput>
  );
};

export type USliderIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const USliderIcon = ({ children, className }: USliderIconProps) => {
  const sliderProps = useSliderInternalProvider();
  return <>{children(sliderIconClass({ className, sliderProps }))}</>;
};

/*
  ====================================
  SliderBar
  ====================================
*/

export type USliderBarRootProps = SliderTrackProps & { className?: string };
export const USliderBarRoot = (props: USliderBarRootProps) => {
  const sliderProps = useSliderInternalProvider();
  return <SliderTrack {...props} className={sliderBarClass({ className: props.className, sliderProps })} />;
};

export type USliderBarFillProps = ComponentPropsWithoutRef<"div">;
export const USliderBarFill = (props: USliderBarFillProps) => {
  const sliderProps = useSliderInternalProvider();
  let state = React.useContext(SliderStateContext)!;
  const isVertical = state.orientation === "vertical";

  const thumbCount = state.values.length;
  const firstThumbPercent = state.getThumbPercent(0);
  const secondThumbPercent = thumbCount > 1 ? state.getThumbPercent(1) : null;

  let fillStyle;
  if (thumbCount === 1) {
    fillStyle = isVertical
      ? { top: 0, height: `${firstThumbPercent * 100}%` }
      : { left: 0, width: `${firstThumbPercent * 100}%` };
  } else {
    const startPercent = Math.min(firstThumbPercent, secondThumbPercent!);
    const endPercent = Math.max(firstThumbPercent, secondThumbPercent!);
    fillStyle = isVertical
      ? {
          top: `${startPercent * 100}%`,
          height: `${(endPercent - startPercent) * 100}%`,
        }
      : {
          left: `${startPercent * 100}%`,
          width: `${(endPercent - startPercent) * 100}%`,
        };
  }

  return (
    <div
      {...props}
      className={sliderBarFillClass({ className: props.className, sliderProps })}
      style={{
        position: "absolute",
        ...fillStyle,
      }}
    />
  );
};

export type USliderBarTickProps = ComponentPropsWithoutRef<"div">;
export const USliderBarTick = (props: USliderBarTickProps) => {
  const sliderProps = useSliderInternalProvider();
  return <div {...props} className={sliderBarClass({ className: props.className, sliderProps })} />;
};

/*
  ====================================
  SliderTooltip
  ====================================
*/

export type USliderTooltipRootProps = ComponentPropsWithoutRef<"div">;
export const USliderTooltipRoot = (props: USliderTooltipRootProps) => {
  const sliderProps = useSliderInternalProvider();
  return <div {...props} className={sliderTooltipClass({ className: props.className, sliderProps })}></div>;
};

export type USliderTooltipValueProps = ComponentPropsWithoutRef<"span">;
export const USliderTooltipValue = (props: USliderTooltipValueProps) => {
  const sliderProps = useSliderInternalProvider();
  let state = React.useContext(SliderStateContext)!;
  return (
    <span {...props} className={sliderTooltipValueClass({ className: props.className, sliderProps })}>
      {state.getThumbValue(0)}
    </span>
  );
};

/*
  ====================================
  SliderBarThumb
  ====================================
*/

export type USliderBarThumbRootProps = SliderThumbProps & {
  className?: string;
};
export const USliderBarThumbRoot = (props: USliderBarThumbRootProps) => {
  const sliderProps = useSliderInternalProvider();
  return (
    <SliderThumb
      {...props}
      className={sliderBarThumbClass({ className: props.className, sliderProps })}
      style={{ transform: "translate(-50%, 0%)" }}
    />
  );
};

export type USliderBarThumbIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const USliderBarThumbIcon = ({ children, className }: USliderBarThumbIconProps) => {
  const sliderProps = useSliderInternalProvider();
  return <>{children(sliderBarThumbIconClass({ className, sliderProps }))}</>;
};

/*
  ====================================
  SliderTickLabel
  ====================================
*/

export type USliderTickLabelRootProps = ComponentPropsWithoutRef<"div">;
export const USliderTickLabelRoot = (props: USliderTickLabelRootProps) => {
  const sliderProps = useSliderInternalProvider();
  return <div {...props} className={sliderTickLabelClass({ className: props.className, sliderProps })} />;
};

export type USliderTickLabelValueProps = ComponentPropsWithoutRef<"span">;
export const USliderTickLabelValue = (props: USliderTickLabelValueProps) => {
  const sliderProps = useSliderInternalProvider();
  return <div {...props} className={sliderTickLabelValueClass({ className: props.className, sliderProps })} />;
};

export type USliderTickLabelIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const USliderTickLabelIcon = ({ children, className }: USliderTickLabelIconProps) => {
  const sliderProps = useSliderInternalProvider();
  return <>{children(sliderBarThumbIconClass({ className, sliderProps }))}</>;
};
