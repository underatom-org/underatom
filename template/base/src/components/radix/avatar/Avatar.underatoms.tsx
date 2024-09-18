import { ReactNode, useRef } from "react";
import { AriaButtonProps, mergeProps, useButton, useFocusRing } from "react-aria";
import * as Avatar from "@radix-ui/react-avatar";
import {
  AvatarBadgeStyleProps,
  AvatarNotificationStyleProps,
  AvatarStatusStyleProps,
  AvatarStyleProps,
  avatarActionClass,
  avatarActionIconClass,
  avatarBadgeClass,
  avatarBadgeLabelClass,
  avatarClass,
  avatarContentClass,
  avatarContentIconClass,
  avatarContentImageClass,
  avatarContentLabelClass,
  avatarIndicatorClass,
  avatarIndicatorIconClass,
  avatarIndicatorImageClass,
  avatarNotificationClass,
  avatarNotificationCounterClass,
  avatarStatusClass,
  avatarStatusIconClass,
} from "../../../styles/avatar";
import { getGenericContext } from "../../../_utils";

/*
  ====================================
  Avatar
  ====================================
*/

export const { Provider: AvatarInternalProvider, useComponentContext: useAvatarInternalProvider } =
  getGenericContext<UAvatarRootProps>("AvatarInternalProvider");

export type UAvatarRootProps = AvatarStyleProps & {
  /** Avatar content */
  children: ReactNode;
  className?: string;
};
export const UAvatarRoot = (props: UAvatarRootProps) => {
  return (
    <div className={avatarClass({ className: props.className, avatarProps: props })}>
      <AvatarInternalProvider value={props}>{props.children}</AvatarInternalProvider>
    </div>
  );
};

/*
  ====================================
  AvatarNotification
  ====================================
*/

export const {
  Provider: AvatarNotificationInternalProvider,
  useComponentContext: useAvatarNotificationInternalProvider,
} = getGenericContext<UAvatarNotificationRootProps>("AvatarNotificationInternalProvider");

export type UAvatarNotificationRootProps = AvatarNotificationStyleProps & {
  children: ReactNode;
  className?: string;
};
export const UAvatarNotificationRoot = (props: UAvatarNotificationRootProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <div
      className={avatarNotificationClass({ className: props.className, avatarProps, avatarNotificationProps: props })}
    >
      <AvatarNotificationInternalProvider value={props}>{props.children}</AvatarNotificationInternalProvider>
    </div>
  );
};

export type UAvatarNotificationCounterProps = {
  children: ReactNode;
};
export const UAvatarNotificationCounter = ({ children }: UAvatarNotificationCounterProps) => {
  const avatarProps = useAvatarInternalProvider();
  const avatarNotificationProps = useAvatarNotificationInternalProvider();
  return <span className={avatarNotificationCounterClass({ avatarProps, avatarNotificationProps })}>{children}</span>;
};

/*
  ====================================
  AvatarIndicator
  ====================================
*/

export type UAvatarIndicatorRootProps = React.ComponentPropsWithoutRef<"div">;
export const UAvatarIndicatorRoot = (props: UAvatarIndicatorRootProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <Avatar.Root {...props} className={avatarIndicatorClass({ className: props.className, avatarProps })}>
      {props.children}
    </Avatar.Root>
  );
};

export type UAvatarIndicatorFallbackProps = Avatar.AvatarFallbackProps;
export const UAvatarIndicatorFallback = (props: UAvatarIndicatorFallbackProps) => {
  return <Avatar.Fallback {...props} />;
};

export type UAvatarIndicatorIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UAvatarIndicatorIcon = ({ children }: UAvatarIndicatorIconProps) => {
  const avatarProps = useAvatarInternalProvider();
  return <>{children(avatarIndicatorIconClass({ avatarProps }))}</>;
};

export type UAvatarIndicatorImageProps = Avatar.AvatarImageProps;
export const UAvatarIndicatorImage = (props: UAvatarIndicatorImageProps) => {
  const avatarProps = useAvatarInternalProvider();
  return <Avatar.Image className={avatarIndicatorImageClass({ avatarProps })} {...props} />;
};

/*
  ====================================
  AvatarContent
  ====================================
*/

export type UAvatarContentRootProps = Avatar.AvatarProps & {
  /** Avatar content */
  children: Avatar.AvatarProps["children"];
  className?: string;
};

export const UAvatarContentRoot = ({ className, ...props }: UAvatarContentRootProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <Avatar.Root {...props} className={avatarContentClass({ className, avatarProps })}>
      {props.children}
    </Avatar.Root>
  );
};

export type UAvatarContentFallbackProps = Avatar.AvatarFallbackProps;
export const UAvatarContentFallback = (props: UAvatarContentFallbackProps) => {
  return <Avatar.Fallback {...props} />;
};

export type UAvatarContentLabelProps = {
  children: ReactNode;
};
export const UAvatarContentLabel = ({ children }: UAvatarContentLabelProps) => {
  const avatarProps = useAvatarInternalProvider();
  return <span className={avatarContentLabelClass({ avatarProps })}>{children}</span>;
};

export type UAvatarContentIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UAvatarContentIcon = ({ children }: UAvatarContentIconProps) => {
  const avatarProps = useAvatarInternalProvider();
  return <>{children(avatarContentIconClass({ avatarProps }))}</>;
};

export type UAvatarContentImageProps = Avatar.AvatarImageProps;
export const UAvatarContentImage = (props: UAvatarContentImageProps) => {
  const avatarProps = useAvatarInternalProvider();
  return <Avatar.Image className={avatarContentImageClass({ avatarProps })} {...props} />;
};

/*
  ====================================
  AvatarAction
  ====================================
*/

export type UAvatarActionRootProps = AriaButtonProps<"button"> & {
  innerRef?: React.RefObject<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};
export const UAvatarActionRoot = ({ className, ...props }: UAvatarActionRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, refs);
  const avatarProps = useAvatarInternalProvider();
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      data-disabled={props.disabled}
      className={avatarActionClass({ className, avatarProps })}
      {...mergeProps(buttonProps, focusProps)}
    >
      {props.children}
    </button>
  );
};

export type UAvatarActionIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const UAvatarActionIcon = ({ children, className }: UAvatarActionIconProps) => {
  const avatarProps = useAvatarInternalProvider();
  return <>{children(avatarActionIconClass({ avatarProps, className }))}</>;
};

/*
  ====================================
  AvatarStatus
  ====================================
*/

export const { Provider: AvatarStatusInternalProvider, useComponentContext: useAvatarStatusInternalProvider } =
  getGenericContext<UAvatarStatusRootProps>("AvatarStatusInternalProvider");

export type UAvatarStatusRootProps = AvatarStatusStyleProps & {
  children: ReactNode;
  className?: string;
};
export const UAvatarStatusRoot = (props: UAvatarStatusRootProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <div className={avatarStatusClass({ className: props.className, avatarProps, avatarStatusProps: props })}>
      <AvatarStatusInternalProvider value={props}>{props.children}</AvatarStatusInternalProvider>
    </div>
  );
};

export type UAvatarStatusIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const UAvatarStatusIcon = ({ children, className }: UAvatarStatusIconProps) => {
  const avatarProps = useAvatarInternalProvider();
  const avatarStatusProps = useAvatarStatusInternalProvider();
  return <>{children(avatarStatusIconClass({ avatarProps, avatarStatusProps, className }))}</>;
};

/*
  ====================================
  AvatarBadge
  ====================================
*/

export const { Provider: AvatarBadgeInternalProvider, useComponentContext: useAvatarBadgeInternalProvider } =
  getGenericContext<UAvatarBadgeRootProps>("AvatarBadgeInternalProvider");

export type UAvatarBadgeRootProps = AvatarBadgeStyleProps & {
  children: ReactNode;
  className?: string;
};
export const UAvatarBadgeRoot = (props: UAvatarBadgeRootProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <div className={avatarBadgeClass({ className: props.className, avatarProps, avatarBadgeProps: props })}>
      <AvatarBadgeInternalProvider value={props}>{props.children}</AvatarBadgeInternalProvider>
    </div>
  );
};

export type UAvatarBadgeLabelProps = {
  children: ReactNode;
};
export const UAvatarBadgeLabel = ({ children }: UAvatarBadgeLabelProps) => {
  const avatarProps = useAvatarInternalProvider();
  const avatarBadgeProps = useAvatarBadgeInternalProvider();
  return <span className={avatarBadgeLabelClass({ avatarProps, avatarBadgeProps })}>{children}</span>;
};
