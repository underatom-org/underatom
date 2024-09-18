import type { ReactNode } from "react";
import { useRef } from "react";
import type { AriaToggleButtonProps } from "react-aria";
import { mergeProps, useToggleButton, useFocusRing } from "react-aria";
import { useToggleState } from "react-stately";
import { Loader } from "../../../assets/Icons";
import { getGenericContext } from "../../../_utils";
import {
  ButtonToggleStyleProps,
  buttonToggleClass,
  buttonToggleDotClass,
  buttonToggleIconClass,
  buttonToggleLabelClass,
  buttonToggleLoaderClass,
} from "../../../styles/button-toggle";
import { ButtonDotStyleProps } from "../../../styles/button";

export const { Provider: ButtonToggleInternalProvider, useComponentContext: useButtonToggleInternalProvider } =
  getGenericContext<UButtonToggleRootProps>("ButtonToggleInternalProvider");

export type UButtonToggleRootProps = ButtonToggleStyleProps &
  AriaToggleButtonProps<"button"> & {
    innerRef?: React.RefObject<HTMLButtonElement>;
    className?: string;
  };
export const UButtonToggleRoot = (props: UButtonToggleRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  let state = useToggleState(props);
  const { buttonProps, isPressed } = useToggleButton(props, state, refs);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      data-toggled={!!state.isSelected}
      data-disabled={props.isDisabled}
      {...mergeProps(buttonProps, focusProps)}
      className={buttonToggleClass({ className: props.className, buttonToggleProps: props })}
    >
      <ButtonToggleInternalProvider value={props}>{props.children}</ButtonToggleInternalProvider>
    </button>
  );
};

export type UButtonToggleLabelProps = {
  /** Label content */
  children: ReactNode;
  className?: string;
};
export const UButtonToggleLabel = ({ children, className }: UButtonToggleLabelProps) => {
  const buttonToggleProps = useButtonToggleInternalProvider();
  return <span className={buttonToggleLabelClass({ className, buttonToggleProps })}>{children}</span>;
};

export type UButtonToggleIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const UButtonToggleIcon = ({ children, className }: UButtonToggleIconProps) => {
  const buttonToggleProps = useButtonToggleInternalProvider();
  return <>{children(buttonToggleIconClass({ className, buttonToggleProps }))}</>;
};

export type UButtonToggleDotProps = ButtonDotStyleProps & {
  className?: string;
};
export const UButtonToggleDot = ({ className, ...props }: UButtonToggleDotProps) => {
  const buttonToggleProps = useButtonToggleInternalProvider();
  return <span className={buttonToggleDotClass({ className, buttonToggleProps, buttonToggleDotProps: props })} />;
};

export type UButtonToggleLoader = {
  className?: string;
};
export const UButtonToggleLoader = ({ className }: UButtonToggleLoader) => {
  const buttonToggleProps = useButtonToggleInternalProvider();
  return <Loader className={buttonToggleLoaderClass({ className, buttonToggleProps })} />;
};
