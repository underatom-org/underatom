import type { ReactNode } from "react";
import {
  ButtonToggleWithLeftIconLayout,
  ButtonToggleWithRightIconLayout,
  ButtonToggleWithDotLayout,
  IconButtonToggleLayout,
  LoadingButtonToggleLayout,
  ButtonToggleDotStyleProps,
} from "../../../styles/button-toggle";
import { ButtonToggleLayout } from "../../../styles/button-toggle";
import type { UButtonToggleRootProps } from "../../react-aria/button-toggle/ButtonToggle.underatoms";
import {
  UButtonToggleRoot,
  UButtonToggleIcon,
  UButtonToggleLabel,
  UButtonToggleDot,
  UButtonToggleLoader,
} from "../../react-aria/button-toggle/ButtonToggle.underatoms";

export type ButtonToggleProps = UButtonToggleRootProps & {
  /** Text content */
  children: ReactNode;
};
export const ButtonToggle = (props: ButtonToggleProps) => {
  return (
    <ButtonToggleLayout
      renderRoot={(children, className) => (
        <UButtonToggleRoot {...props} className={className}>
          {children}
        </UButtonToggleRoot>
      )}
      styleProps={{ className: props.className, buttonToggleProps: props }}
      labelSlot={<UButtonToggleLabel>{props.children}</UButtonToggleLabel>}
    />
  );
};

export type ButtonToggleWithLeftIconProps = UButtonToggleRootProps & {
  /** The icon render function */
  icon?: (className: string) => ReactNode;
  /** Text content */
  children: ReactNode;
};
export const ButtonToggleWithLeftIcon = (props: ButtonToggleWithLeftIconProps) => {
  return (
    <ButtonToggleWithLeftIconLayout
      renderRoot={(children, className) => (
        <UButtonToggleRoot {...props} className={className}>
          {children}
        </UButtonToggleRoot>
      )}
      styleProps={{ className: props.className, buttonToggleProps: props }}
      iconSlot={props.icon && <UButtonToggleIcon>{props.icon}</UButtonToggleIcon>}
      labelSlot={<UButtonToggleLabel>{props.children}</UButtonToggleLabel>}
    />
  );
};

export type ButtonToggleWithRightIconProps = UButtonToggleRootProps & {
  /** The icon render function */
  icon?: (className: string) => ReactNode;
  /** Text content */
  children: ReactNode;
};
export const ButtonToggleWithRightIcon = (props: ButtonToggleWithRightIconProps) => {
  return (
    <ButtonToggleWithRightIconLayout
      renderRoot={(children, className) => (
        <UButtonToggleRoot {...props} className={className}>
          {children}
        </UButtonToggleRoot>
      )}
      styleProps={{ className: props.className, buttonToggleProps: props }}
      iconSlot={props.icon && <UButtonToggleIcon>{props.icon}</UButtonToggleIcon>}
      labelSlot={<UButtonToggleLabel>{props.children}</UButtonToggleLabel>}
    />
  );
};

export type ButtonToggleWithDotProps = UButtonToggleRootProps & {
  /** Text content */
  children: ReactNode;
  dotColor?: ButtonToggleDotStyleProps["color"];
};
export const ButtonToggleWithDot = (props: ButtonToggleWithDotProps) => {
  return (
    <ButtonToggleWithDotLayout
      renderRoot={(children, className) => (
        <UButtonToggleRoot {...props} className={className}>
          {children}
        </UButtonToggleRoot>
      )}
      styleProps={{ className: props.className, buttonToggleProps: props }}
      dotSlot={<UButtonToggleDot color={props.dotColor} />}
      labelSlot={<UButtonToggleLabel>{props.children}</UButtonToggleLabel>}
    />
  );
};

export type IconButtonToggleProps = Omit<UButtonToggleRootProps, "fullWidth"> & {
  /** Icon render function */
  icon: (className: string) => ReactNode;
};
export const IconButtonToggle = (props: IconButtonToggleProps) => {
  return (
    <IconButtonToggleLayout
      renderRoot={(children, className) => (
        <UButtonToggleRoot {...props} className={className}>
          {children}
        </UButtonToggleRoot>
      )}
      styleProps={{ className: props.className, buttonToggleProps: props }}
      iconSlot={<UButtonToggleIcon>{props.icon}</UButtonToggleIcon>}
    />
  );
};

export type LoadingButtonToggleProps = Omit<UButtonToggleRootProps, "isDisabled"> & {
  /** Text content */
  children: ReactNode;
};
export const LoadingButtonToggle = (props: LoadingButtonToggleProps) => {
  return (
    <LoadingButtonToggleLayout
      renderRoot={(children, className) => (
        <UButtonToggleRoot {...props} isDisabled className={className}>
          {children}
        </UButtonToggleRoot>
      )}
      styleProps={{ className: props.className, buttonToggleProps: props }}
      loaderSlot={<UButtonToggleLoader />}
      labelSlot={<UButtonToggleLabel>{props.children}</UButtonToggleLabel>}
    />
  );
};
