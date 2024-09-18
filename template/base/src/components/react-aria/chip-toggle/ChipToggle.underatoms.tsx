import type { ReactNode } from "react";
import { useRef } from "react";
import type { AriaButtonProps, AriaToggleButtonProps } from "react-aria";
import { mergeProps, useButton, useFocusRing, useToggleButton } from "react-aria";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { X } from "../../../assets/Icons";
import { useToggleState } from "react-stately";
import { getGenericContext } from "../../../_utils";
import {
  ChipToggleDotStyleProps,
  ChipToggleStyleProps,
  chipToggleAvatarClass,
  chipToggleAvatarIconClass,
  chipToggleAvatarImageClass,
  chipToggleAvatarLabelClass,
  chipToggleClass,
  chipToggleDismissClass,
  chipToggleDismissIconClass,
  chipToggleDotClass,
  chipToggleIconClass,
  chipToggleLabelClass,
} from "../../../styles/chip-toggle";

/*
  ====================================
  ChipToggle
  ====================================
*/

export const { Provider: ChipToggleInternalProvider, useComponentContext: useChipToggleRootProps } =
  getGenericContext<UChipToggleRootProps>("UChipToggleRootProps");

export type UChipToggleRootProps = ChipToggleStyleProps &
  AriaToggleButtonProps<"button"> & {
    innerRef?: React.RefObject<HTMLButtonElement>;
    className?: string;
  };
export const UChipToggleRoot = (props: UChipToggleRootProps) => {
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
      data-toggled={state.isSelected}
      className={chipToggleClass({ className: props.className, chipToggleProps: props })}
      {...mergeProps(buttonProps, focusProps)}
    >
      <ChipToggleInternalProvider value={props}>{props.children}</ChipToggleInternalProvider>
    </button>
  );
};

export type UChipToggleLabelProps = {
  /** Label content */
  children: ReactNode;
  className?: string;
};
export const UChipToggleLabel = ({ children, className }: UChipToggleLabelProps) => {
  const chipToggleProps = useChipToggleRootProps();
  return <span className={chipToggleLabelClass({ className, chipToggleProps })}>{children}</span>;
};

export type UChipToggleIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const UChipToggleIcon = ({ children, className }: UChipToggleIconProps) => {
  const chipToggleProps = useChipToggleRootProps();
  return <>{children(chipToggleIconClass({ className, chipToggleProps }))}</>;
};

export type UChipToggleDotProps = ChipToggleDotStyleProps & {
  className?: string;
};
export const UChipToggleDot = ({ className }: UChipToggleDotProps) => {
  const chipToggleProps = useChipToggleRootProps();
  return <span className={chipToggleDotClass({ className, chipToggleProps })} />;
};

/*
  ====================================
  ChipToggleDismiss
  ====================================
*/

export type UChipToggleDismissRootProps = AriaButtonProps<"button"> & {
  innerRef?: React.RefObject<HTMLButtonElement>;
  className?: string;
};
export const UChipToggleDismissRoot = ({ className, ...props }: UChipToggleDismissRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { isDisabled: isDisabledParent } = useChipToggleRootProps();
  const { buttonProps, isPressed } = useButton({ ...props, isDisabled: isDisabledParent || props.isDisabled }, refs);
  const { isFocusVisible, focusProps } = useFocusRing();
  const chipToggleProps = useChipToggleRootProps();

  return (
    <button
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      className={chipToggleDismissClass({ className, chipToggleProps })}
      {...mergeProps(buttonProps, focusProps)}
    >
      {props.children}
    </button>
  );
};

export const UChipToggleDismissIcon = () => {
  const chipToggleProps = useChipToggleRootProps();
  return <X className={chipToggleDismissIconClass({ chipToggleProps })} />;
};

/*
  ====================================
  ChipToggleAvatar
  ====================================
*/

export type UChipToggleAvatarRootProps = RadixAvatar.AvatarProps & {
  /** Avatar content */
  children: RadixAvatar.AvatarProps["children"];
};

export const UChipToggleAvatarRoot = (props: UChipToggleAvatarRootProps) => {
  const chipToggleProps = useChipToggleRootProps();
  return (
    <RadixAvatar.Root {...props} className={chipToggleAvatarClass({ className: props.className, chipToggleProps })}>
      {props.children}
    </RadixAvatar.Root>
  );
};

export type UChipToggleAvatarFallbackProps = RadixAvatar.AvatarFallbackProps;
export const UChipToggleAvatarFallback = (props: UChipToggleAvatarFallbackProps) => {
  return <RadixAvatar.Fallback {...props} />;
};

export type UChipToggleAvatarLabelProps = {
  /** Text content */
  children: ReactNode;
};
export const UChipToggleAvatarLabel = ({ children }: UChipToggleAvatarLabelProps) => {
  const chipToggleProps = useChipToggleRootProps();
  return <span className={chipToggleAvatarLabelClass({ chipToggleProps })}>{children}</span>;
};

export type UChipToggleAvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UChipToggleAvatarIcon = ({ children }: UChipToggleAvatarIconProps) => {
  const chipToggleProps = useChipToggleRootProps();
  return <>{children(chipToggleAvatarIconClass({ chipToggleProps }))}</>;
};

export type UChipToggleAvatarImageProps = RadixAvatar.AvatarImageProps;
export const UChipToggleAvatarImage = (props: UChipToggleAvatarImageProps) => {
  const chipToggleProps = useChipToggleRootProps();
  return <RadixAvatar.Image className={chipToggleAvatarImageClass({ chipToggleProps })} {...props} />;
};
