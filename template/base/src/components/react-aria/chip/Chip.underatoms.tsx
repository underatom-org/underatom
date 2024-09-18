import type { ReactNode } from "react";
import { useRef } from "react";
import type { AriaButtonProps } from "react-aria";
import { mergeProps, useButton, useFocusRing } from "react-aria";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { X } from "../../../assets/Icons";
import { getGenericContext } from "../../../_utils";
import {
  ChipDotStyleProps,
  ChipStyleProps,
  chipAvatarClass,
  chipAvatarIconClass,
  chipAvatarImageClass,
  chipAvatarLabelClass,
  chipClass,
  chipDismissClass,
  chipDismissIconClass,
  chipDotClass,
  chipIconClass,
  chipLabelClass,
} from "../../../styles/chip";

/*
  ====================================
  Chip
  ====================================
*/

export const { Provider: ChipInternalProvider, useComponentContext: useChipInternalProvider } =
  getGenericContext<UChipRootProps>("UChipRootProps");

export type UChipRootProps = ChipStyleProps &
  AriaButtonProps<"button"> & {
    innerRef?: React.RefObject<HTMLButtonElement>;
    className?: string;
  };
export const UChipRoot = ({ className, ...props }: UChipRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, refs);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      className={chipClass({ className, chipProps: props })}
      {...mergeProps(buttonProps, focusProps)}
    >
      <ChipInternalProvider value={props}>{props.children}</ChipInternalProvider>
    </button>
  );
};

export type UChipLabelProps = {
  /** Label content */
  children: ReactNode;
  className?: string;
};
export const UChipLabel = ({ children, className }: UChipLabelProps) => {
  const chipProps = useChipInternalProvider();
  return <span className={chipLabelClass({ className, chipProps })}>{children}</span>;
};

export type UChipIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const UChipIcon = ({ children, className }: UChipIconProps) => {
  const chipProps = useChipInternalProvider();
  return <>{children(chipIconClass({ className, chipProps }))}</>;
};

export type UChipDotProps = ChipDotStyleProps & {
  className?: string;
};
export const UChipDot = ({ className, ...props }: UChipDotProps) => {
  const chipProps = useChipInternalProvider();
  return <span className={chipDotClass({ className, chipProps, chipDotProps: props })} />;
};

/*
  ====================================
  ChipDismiss
  ====================================
*/

export type UChipDismissRootProps = AriaButtonProps<"button"> & {
  innerRef?: React.RefObject<HTMLButtonElement>;
  className?: string;
};
export const UChipDismissRoot = ({ className, ...props }: UChipDismissRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { isDisabled: isDisabledParent } = useChipInternalProvider();
  const { buttonProps, isPressed } = useButton({ ...props, isDisabled: isDisabledParent || props.isDisabled }, refs);
  const { isFocusVisible, focusProps } = useFocusRing();
  const chipProps = useChipInternalProvider();

  return (
    <button
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      className={chipDismissClass({ className, chipProps })}
      {...mergeProps(buttonProps, focusProps)}
    >
      {props.children}
    </button>
  );
};

export const UChipDismissIcon = () => {
  const chipProps = useChipInternalProvider();
  return <X className={chipDismissIconClass({ chipProps })} />;
};

/*
  ====================================
  ChipAvatar
  ====================================
*/

export type UChipAvatarRootProps = RadixAvatar.AvatarProps & {
  /** Avatar content */
  children: RadixAvatar.AvatarProps["children"];
};

export const UChipAvatarRoot = (props: UChipAvatarRootProps) => {
  const chipProps = useChipInternalProvider();
  return (
    <RadixAvatar.Root {...props} className={chipAvatarClass({ className: props.className, chipProps })}>
      {props.children}
    </RadixAvatar.Root>
  );
};

export type UChipAvatarFallbackProps = RadixAvatar.AvatarFallbackProps;
export const UChipAvatarFallback = (props: UChipAvatarFallbackProps) => {
  return <RadixAvatar.Fallback {...props} />;
};

export type UChipAvatarLabelProps = {
  /** Text content */
  children: ReactNode;
};
export const UChipAvatarLabel = ({ children }: UChipAvatarLabelProps) => {
  const chipProps = useChipInternalProvider();
  return <span className={chipAvatarLabelClass({ chipProps })}>{children}</span>;
};

export type UChipAvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UChipAvatarIcon = ({ children }: UChipAvatarIconProps) => {
  const chipProps = useChipInternalProvider();
  return <>{children(chipAvatarIconClass({ chipProps }))}</>;
};

export type UChipAvatarImageProps = RadixAvatar.AvatarImageProps;
export const UChipAvatarImage = (props: UChipAvatarImageProps) => {
  const chipProps = useChipInternalProvider();
  return <RadixAvatar.Image className={chipAvatarImageClass({ className: props.className, chipProps })} {...props} />;
};
