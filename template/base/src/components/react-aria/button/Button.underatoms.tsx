import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useRef } from "react";
import type { AriaButtonProps } from "react-aria";
import { mergeProps, useButton, useFocusRing } from "react-aria";
import { CaretDown, Loader } from "../../../assets/Icons";
import { getGenericContext } from "../../../_utils";
import {
  ButtonDotStyleProps,
  ButtonStyleProps,
  buttonCaretClass,
  buttonClass,
  buttonDotClass,
  buttonIconClass,
  buttonLabelClass,
  buttonLoaderClass,
} from "../../../styles/button";

export type UButtonRootProps = ButtonStyleProps &
  AriaButtonProps<"button"> & {
    innerRef?: React.RefObject<HTMLButtonElement>;
    className?: string;
  };

export const { Provider: ButtonStylePropsProvider, useComponentContext: useButtonStyleProps } =
  getGenericContext<ButtonStyleProps>("ButtonStyleProps");

export const UButtonRoot = ({ className, ...props }: UButtonRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, refs);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      className={buttonClass({ buttonProps: props, className })}
      {...mergeProps(buttonProps, focusProps)}
    >
      <ButtonStylePropsProvider value={props}>{props.children}</ButtonStylePropsProvider>
    </button>
  );
};

export type UButtonAnchorRootProps = ButtonStyleProps &
  ComponentPropsWithoutRef<"a"> & {
    innerRef?: React.RefObject<HTMLAnchorElement>;
  };
export const UButtonAnchorRoot = ({ className, ...props }: UButtonAnchorRootProps) => {
  const refs = useRef<HTMLAnchorElement>(null);
  const { innerRef = refs } = props;
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <a
      ref={innerRef}
      data-ring={isFocusVisible}
      className={buttonClass({ buttonProps: props, className })}
      {...mergeProps(props, focusProps)}
    >
      <ButtonStylePropsProvider value={props}>{props.children}</ButtonStylePropsProvider>
    </a>
  );
};

export type UButtonLabelProps = {
  /** Label content */
  children: ReactNode;
  className?: string;
};
export const UButtonLabel = ({ children, className }: UButtonLabelProps) => {
  const buttonProps = useButtonStyleProps();
  return <span className={buttonLabelClass({ buttonProps, className })}>{children}</span>;
};

export type UButtonIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const UButtonIcon = ({ children, className }: UButtonIconProps) => {
  const buttonProps = useButtonStyleProps();
  return <>{children(buttonIconClass({ buttonProps, className }))}</>;
};

export type UButtonDotProps = ButtonDotStyleProps & {
  className?: string;
};
export const UButtonDot = ({ className, ...props }: UButtonDotProps) => {
  const buttonProps = useButtonStyleProps();
  return <span className={buttonDotClass({ buttonProps, buttonDotProps: props, className })} />;
};

export type UButtonLoader = {
  className?: string;
};
export const UButtonLoader = ({ className }: UButtonLoader) => {
  const buttonProps = useButtonStyleProps();
  return <Loader className={buttonLoaderClass({ buttonProps, className })} />;
};

export type UButtonCaret = {
  className?: string;
};
export const UButtonCaret = ({ className }: UButtonCaret) => {
  const buttonProps = useButtonStyleProps();
  return <CaretDown className={buttonCaretClass({ buttonProps, className })} />;
};
