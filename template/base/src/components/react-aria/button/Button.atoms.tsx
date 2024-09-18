import type { ReactNode } from "react";
import type { ButtonDotStyleProps, ButtonStyleProps } from "../../../styles/button";
import {
  ButtonLayout,
  ButtonWithDotLayout,
  IconButtonLayout,
  ButtonWithLeftIconLayout,
  ButtonWithRightIconLayout,
  LoadingButtonLayout,
} from "../../../styles/button";
import type { UButtonAnchorRootProps, UButtonRootProps } from "../../react-aria/button/Button.underatoms";
import {
  UButtonRoot,
  UButtonLabel,
  UButtonAnchorRoot,
  UButtonDot,
  UButtonIcon,
  UButtonLoader,
} from "../../react-aria/button/Button.underatoms";

export type ButtonProps = UButtonRootProps &
  Partial<ButtonStyleProps> & {
    /** Text content */
    children: ReactNode;
  };
export const Button = (props: ButtonProps) => {
  return (
    <ButtonLayout
      renderRoot={(children, className) => (
        <UButtonRoot {...props} className={className}>
          {children}
        </UButtonRoot>
      )}
      styleProps={{ buttonProps: props, className: props.className }}
      labelSlot={<UButtonLabel>{props.children}</UButtonLabel>}
    />
  );
};

export type ButtonWithLeftIconProps = UButtonRootProps &
  Partial<ButtonStyleProps> & {
    /** Text content */
    children: ReactNode;
    /** Icon render function */
    icon: (className: string) => ReactNode;
  };
export const ButtonWithLeftIcon = (props: ButtonWithLeftIconProps) => {
  return (
    <ButtonWithLeftIconLayout
      renderRoot={(children, className) => (
        <UButtonRoot {...props} className={className}>
          {children}
        </UButtonRoot>
      )}
      styleProps={{ buttonProps: props, className: props.className }}
      labelSlot={<UButtonLabel>{props.children}</UButtonLabel>}
      iconSlot={<UButtonIcon>{props.icon}</UButtonIcon>}
    />
  );
};

export type ButtonWithRightIconProps = UButtonRootProps &
  Partial<ButtonStyleProps> & {
    /** Text content */
    children: ReactNode;
    /** Icon render function */
    icon: (className: string) => ReactNode;
  };
export const ButtonWithRightIcon = (props: ButtonWithRightIconProps) => {
  return (
    <ButtonWithRightIconLayout
      renderRoot={(children, className) => (
        <UButtonRoot {...props} className={className}>
          {children}
        </UButtonRoot>
      )}
      styleProps={{ buttonProps: props, className: props.className }}
      labelSlot={<UButtonLabel>{props.children}</UButtonLabel>}
      iconSlot={<UButtonIcon>{props.icon}</UButtonIcon>}
    />
  );
};

export type IconButtonProps = UButtonRootProps &
  Omit<Partial<ButtonStyleProps>, "fullWidth"> & {
    variant?: Exclude<ButtonStyleProps["variant"], "link">;
    /** Icon render function */
    icon: (className: string) => ReactNode;
  };
export const IconButton = (props: IconButtonProps) => {
  return (
    <IconButtonLayout
      renderRoot={(children, className) => (
        <UButtonRoot {...props} className={className}>
          {children}
        </UButtonRoot>
      )}
      styleProps={{ buttonProps: { ...props, fullWidth: false }, className: props.className }}
      iconSlot={<UButtonIcon>{props.icon}</UButtonIcon>}
    />
  );
};

export type ButtonWithDotProps = UButtonRootProps &
  Partial<ButtonStyleProps> & {
    variant?: Exclude<ButtonStyleProps["variant"], "link">;
    /** Text content */
    children: ReactNode;
    dotColor?: ButtonDotStyleProps["color"];
  };
export const ButtonWithDot = (props: ButtonWithDotProps) => {
  return (
    <ButtonWithDotLayout
      renderRoot={(children, className) => (
        <UButtonRoot {...props} className={className}>
          {children}
        </UButtonRoot>
      )}
      styleProps={{ buttonProps: props, className: props.className }}
      dotSlot={<UButtonDot color={props.dotColor} />}
      labelSlot={<UButtonLabel>{props.children}</UButtonLabel>}
    />
  );
};

export type LoadingButtonProps = Omit<UButtonRootProps, "isDisabled"> &
  Partial<ButtonStyleProps> & {
    /** Text content */
    children: ReactNode;
  };
export const LoadingButton = (props: LoadingButtonProps) => {
  return (
    <LoadingButtonLayout
      renderRoot={(children, className) => (
        <UButtonRoot {...props} isDisabled className={className}>
          {children}
        </UButtonRoot>
      )}
      styleProps={{ buttonProps: props, className: props.className }}
      loaderSlot={<UButtonLoader />}
      labelSlot={<UButtonLabel>{props.children}</UButtonLabel>}
    />
  );
};

export type AnchorButtonProps = UButtonAnchorRootProps &
  Partial<ButtonStyleProps> & {
    /** Text content */
    children: ReactNode;
  };
export const AnchorButton = (props: AnchorButtonProps) => {
  return (
    <ButtonLayout
      renderRoot={(children, className) => (
        <UButtonAnchorRoot {...props} className={className}>
          {children}
        </UButtonAnchorRoot>
      )}
      styleProps={{ buttonProps: props, className: props.className }}
      labelSlot={<UButtonLabel>{props.children}</UButtonLabel>}
    />
  );
};

export type IconAnchorButtonProps = UButtonAnchorRootProps &
  Omit<Partial<ButtonStyleProps>, "fullWidth"> & {
    variant?: Exclude<ButtonStyleProps["variant"], "link">;
    /** Icon render function */
    icon: (className: string) => ReactNode;
  };
export const IconAnchorButton = (props: IconAnchorButtonProps) => {
  return (
    <IconButtonLayout
      renderRoot={(children, className) => (
        <UButtonAnchorRoot {...props} className={className}>
          {children}
        </UButtonAnchorRoot>
      )}
      styleProps={{ buttonProps: { ...props, fullWidth: false }, className: props.className }}
      iconSlot={<UButtonIcon>{props.icon}</UButtonIcon>}
    />
  );
};
