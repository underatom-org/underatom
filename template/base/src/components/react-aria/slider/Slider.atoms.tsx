/*
  ====================================
  SliderTickLabel
  ====================================
*/

import {
  SliderBarLayout,
  SliderBarThumbLayout,
  SliderLayout,
  SliderTickLabelLayout,
  SliderTooltipLayout,
} from "../../../styles/slider";
import {
  useSliderInternalProvider,
  USliderAsterisk,
  USliderBarFill,
  USliderBarRoot,
  USliderBarRootProps,
  USliderBarThumbIcon,
  USliderBarThumbRoot,
  USliderBarThumbRootProps,
  USliderDescription,
  USliderIcon,
  USliderLabel,
  USliderRoot,
  USliderRootProps,
  USliderTickLabelIcon,
  USliderTickLabelRoot,
  USliderTickLabelRootProps,
  USliderTickLabelValue,
  USliderTooltipRoot,
  USliderTooltipRootProps,
  USliderTooltipValue,
  USliderValue,
} from "./Slider.underatoms";
import { ReactNode } from "react";

/*
  ====================================
  Slider
  ====================================
*/
export type SliderProps = USliderRootProps & {
  label?: string;
  description?: string;
  tooltipSlot?: ReactNode;
  icon?: (className: string) => string;
  tickLabelSlots?: ReactNode;
  tickSlots?: ReactNode;
};
export const Slider = ({ label, description, tooltipSlot, icon, tickLabelSlots, tickSlots, ...props }: SliderProps) => {
  return (
    <SliderLayout
      renderRoot={(children, className) => (
        <USliderRoot {...props} className={className}>
          {children}
        </USliderRoot>
      )}
      styleProps={{ className: props.className, sliderProps: props }}
      labelSlot={label && <USliderLabel>{label}</USliderLabel>}
      descriptionSlot={description && <USliderDescription>{description}</USliderDescription>}
      asteriskSlot={<USliderAsterisk />}
      valueSlot={<USliderValue />}
      iconSlot={icon && <USliderIcon>{icon}</USliderIcon>}
      barSlot={<SliderBar tickSlots={tickSlots} />}
      tooltipSlot={tooltipSlot}
      tickLabelSlots={tickLabelSlots}
    />
  );
};

/*
  ====================================
  SliderBar
  ====================================
*/

export type SliderBarProps = USliderBarRootProps & {
  tickSlots: ReactNode;
};
export const SliderBar = ({ tickSlots, ...props }: SliderBarProps) => {
  const sliderProps = useSliderInternalProvider();
  return (
    <SliderBarLayout
      renderRoot={(children, className) => (
        <USliderBarRoot {...props} className={className}>
          {children}
        </USliderBarRoot>
      )}
      styleProps={{ className: props.className, sliderProps }}
      fillSlot={<USliderBarFill />}
      thumbSlot={<SliderBarThumb />}
      tickSlots={tickSlots}
    />
  );
};

/*
  ====================================
  SliderTooltip
  ====================================
*/
export type SliderTooltipProps = USliderTooltipRootProps;
export const SliderTooltip = (props: SliderTooltipProps) => {
  const sliderProps = useSliderInternalProvider();
  return (
    <SliderTooltipLayout
      renderRoot={(children, className) => (
        <USliderTooltipRoot {...props} className={className}>
          {children}
        </USliderTooltipRoot>
      )}
      styleProps={{ className: props.className, sliderProps }}
      valueSlot={<USliderTooltipValue />}
    />
  );
};
/*
  ====================================
  SliderBarThumb
  ====================================
*/

export type SliderBarThumbProps = USliderBarThumbRootProps & {
  icon?: (className: string) => string;
};
export const SliderBarThumb = ({ icon, ...props }: SliderBarThumbProps) => {
  const sliderProps = useSliderInternalProvider();
  return (
    <SliderBarThumbLayout
      renderRoot={(children, className) => (
        <USliderBarThumbRoot {...props} className={className}>
          {children}
        </USliderBarThumbRoot>
      )}
      styleProps={{ className: props.className, sliderProps }}
      iconSlot={icon && <USliderBarThumbIcon>{icon}</USliderBarThumbIcon>}
    />
  );
};
/*
  ====================================
  SliderTickLabel
  ====================================
*/

export type SliderTickLabelProps = USliderTickLabelRootProps & {
  value?: number;
  icon?: (className: string) => string;
};
export const SliderTickLabel = ({ value, icon, ...props }: SliderTickLabelProps) => {
  const sliderProps = useSliderInternalProvider();
  return (
    <SliderTickLabelLayout
      renderRoot={(children, className) => (
        <USliderTickLabelRoot {...props} className={className}>
          {children}
        </USliderTickLabelRoot>
      )}
      styleProps={{ className: props.className, sliderProps }}
      valueSlot={value && <USliderTickLabelValue>{value}</USliderTickLabelValue>}
      iconSlot={icon && <USliderTickLabelIcon>{icon}</USliderTickLabelIcon>}
    />
  );
};
