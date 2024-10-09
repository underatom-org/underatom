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
import {
  Slider,
  SliderLabelProps,
  SliderMarkerProps,
  SliderRangeProps,
  SliderRootProps,
  SliderThumbProps,
  SliderTrackProps,
  SliderValueTextProps,
  UseSliderContext,
} from "@ark-ui/react";
import React from "react";

/*
  ====================================
  Slider
  ====================================
*/

export const { Provider: SliderInternalProvider, useComponentContext: useSliderInternalProvider } = getGenericContext<
  USliderRootProps & { context: UseSliderContext }
>("SliderInternalProvider");
export type USliderRootProps = SliderRootProps &
  SliderStyleProps & {
    children?: ReactNode;
    className?: string;
  };
export const USliderRoot = (props: USliderRootProps) => {
  return (
    <Slider.Root {...props} className={sliderClass({ className: props.className, sliderProps: props })}>
      <Slider.Context>
        {(context) => <SliderInternalProvider value={{ ...props, context }}>{props.children}</SliderInternalProvider>}
      </Slider.Context>
    </Slider.Root>
  );
};

export type USliderLabelProps = SliderLabelProps;
export const USliderLabel = (props: USliderLabelProps) => {
  const sliderProps = useSliderInternalProvider();
  return <Slider.Label {...props} className={sliderLabelClass({ className: props.className, sliderProps })} />;
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

export type USliderValueProps = SliderValueTextProps & {
  className?: string;
};
export const USliderValue = (props: USliderValueProps) => {
  const sliderProps = useSliderInternalProvider();
  return <Slider.ValueText {...props} className={sliderValueClass({ className: props.className, sliderProps })} />;
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
  return (
    <Slider.Control asChild>
      <Slider.Track {...props} className={sliderBarClass({ className: props.className, sliderProps }) + " BAR"}>
        {props.children}
      </Slider.Track>
    </Slider.Control>
  );
};

export type USliderBarFillProps = SliderRangeProps;
export const USliderBarFill = (props: USliderBarFillProps) => {
  const sliderProps = useSliderInternalProvider();
  return (
    <Slider.Range
      {...props}
      // style={{ width: `${sliderProps.context.getThumbPercent(0) * 100}%` }}
      style={{ width: "unset" }}
      className={sliderBarFillClass({ className: props.className, sliderProps }) + " FILL"}
    />
  );
};

export type USliderBarTickProps = SliderMarkerProps;
export const USliderBarTick = (props: USliderBarTickProps) => {
  const sliderProps = useSliderInternalProvider();
  return <Slider.Marker {...props} className={sliderBarClass({ className: props.className, sliderProps })} />;
};

// /*
//   ====================================
//   SliderTooltip
//   ====================================
// */

// export type USliderTooltipRootProps = ComponentPropsWithoutRef<"div">;
// export const USliderTooltipRoot = (props: USliderTooltipRootProps) => {
//   const sliderProps = useSliderInternalProvider();
//   return <div {...props} className={sliderTooltipClass({ className: props.className, sliderProps })}></div>;
// };

// export type USliderTooltipValueProps = ComponentPropsWithoutRef<"span">;
// export const USliderTooltipValue = (props: USliderTooltipValueProps) => {
//   const sliderProps = useSliderInternalProvider();
//   let state = React.useContext(SliderStateContext)!;
//   return (
//     <span {...props} className={sliderTooltipValueClass({ className: props.className, sliderProps })}>
//       {state.getThumbValue(0)}
//     </span>
//   );
// };

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
    <Slider.Thumb {...props} className={sliderBarThumbClass({ className: props.className, sliderProps }) + " THUMB"}>
      <Slider.HiddenInput />
      {props.children}
    </Slider.Thumb>
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
