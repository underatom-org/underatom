import { ReactNode, useRef } from "react";
import { AriaButtonProps, mergeProps, useButton, useFocusRing } from "react-aria";
import * as Avatar from "@radix-ui/react-avatar";
import {
  AvatarButtonBadgeStyleProps,
  AvatarButtonNotificationStyleProps,
  AvatarButtonStatusStyleProps,
  AvatarButtonStyleProps,
  avatarButtonBadgeClass,
  avatarButtonBadgeLabelClass,
  avatarButtonClass,
  avatarButtonContentClass,
  avatarButtonContentIconClass,
  avatarButtonContentImageClass,
  avatarButtonContentLabelClass,
  avatarButtonIndicatorClass,
  avatarButtonIndicatorIconClass,
  avatarButtonIndicatorImageClass,
  avatarButtonNotificationClass,
  avatarButtonNotificationCounterClass,
  avatarButtonStatusClass,
  avatarButtonStatusIconClass,
} from "../../../styles/avatar-button";
import { getGenericContext } from "../../../_utils";

/*
  ====================================
  AvatarButton
  ====================================
*/

export const { Provider: AvatarButtonInternalProvider, useComponentContext: useAvatarButtonInternalProvider } =
  getGenericContext<UAvatarButtonRootProps>("AvatarButtonInternalProvider");

export type UAvatarButtonRootProps = AvatarButtonStyleProps &
  AriaButtonProps<"button"> & {
    innerRef?: React.RefObject<HTMLButtonElement>;
    className?: string;
  };

export const UAvatarButtonRoot = (props: UAvatarButtonRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, refs);
  const { isFocusVisible, focusProps } = useFocusRing();
  return (
    <Avatar.Root asChild>
      <button
        ref={innerRef}
        data-active={isPressed}
        data-ring={isFocusVisible}
        className={avatarButtonClass({ className: props.className, avatarButtonProps: props })}
        {...mergeProps(buttonProps, focusProps)}
      >
        <AvatarButtonInternalProvider value={props}>{props.children}</AvatarButtonInternalProvider>
      </button>
    </Avatar.Root>
  );
};

/*
  ====================================
  AvatarButtonNotification
  ====================================
*/

export const {
  Provider: AvatarButtonNotificationInternalProvider,
  useComponentContext: useAvatarButtonNotificationInternalProvider,
} = getGenericContext<UAvatarButtonNotificationRootProps>("AvatarButtonNotificationInternalProvider");

export type UAvatarButtonNotificationRootProps = AvatarButtonNotificationStyleProps & {
  children: ReactNode;
  className?: string;
};
export const UAvatarButtonNotificationRoot = (props: UAvatarButtonNotificationRootProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <div
      className={avatarButtonNotificationClass({
        className: props.className,
        avatarButtonProps,
        avatarButtonNotificationProps: props,
      })}
    >
      <AvatarButtonNotificationInternalProvider value={props}>
        {props.children}
      </AvatarButtonNotificationInternalProvider>
    </div>
  );
};

export type UAvatarButtonNotificationCounterProps = {
  children: ReactNode;
};
export const UAvatarButtonNotificationCounter = ({ children }: UAvatarButtonNotificationCounterProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  const avatarButtonNotificationProps = useAvatarButtonNotificationInternalProvider();
  return (
    <span className={avatarButtonNotificationCounterClass({ avatarButtonProps, avatarButtonNotificationProps })}>
      {children}
    </span>
  );
};

/*
  ====================================
  AvatarButtonIndicator
  ====================================
*/

export type UAvatarButtonIndicatorRootProps = Avatar.AvatarProps & {
  /** Avatar content */
  children: Avatar.AvatarProps["children"];
};

export const UAvatarButtonIndicatorRoot = (props: UAvatarButtonIndicatorRootProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <Avatar.Root {...props} className={avatarButtonIndicatorClass({ className: props.className, avatarButtonProps })}>
      {props.children}
    </Avatar.Root>
  );
};

export type UAvatarButtonIndicatorFallbackProps = Avatar.AvatarFallbackProps;
export const UAvatarButtonIndicatorFallback = (props: UAvatarButtonIndicatorFallbackProps) => {
  return <Avatar.Fallback {...props} />;
};

export type UAvatarButtonIndicatorIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UAvatarButtonIndicatorIcon = ({ children }: UAvatarButtonIndicatorIconProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return <>{children(avatarButtonIndicatorIconClass({ avatarButtonProps }))}</>;
};

export type UAvatarButtonIndicatorImageProps = Avatar.AvatarImageProps;
export const UAvatarButtonIndicatorImage = (props: UAvatarButtonIndicatorImageProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return <Avatar.Image className={avatarButtonIndicatorImageClass({ avatarButtonProps })} {...props} />;
};

/*
  ====================================
  AvatarButtonContent
  ====================================
*/

export type UAvatarButtonContentRootProps = {
  /** Avatar content */
  children: ReactNode;
  className?: string;
};
export const UAvatarButtonContentRoot = (props: UAvatarButtonContentRootProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <div className={avatarButtonContentClass({ className: props.className, avatarButtonProps })}>{props.children}</div>
  );
};

export type UAvatarButtonContentFallbackProps = Avatar.AvatarFallbackProps;
export const UAvatarButtonContentFallback = (props: UAvatarButtonContentFallbackProps) => {
  return <Avatar.Fallback {...props} />;
};

export type UAvatarButtonContentLabelProps = {
  children: ReactNode;
};
export const UAvatarButtonContentLabel = ({ children }: UAvatarButtonContentLabelProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return <span className={avatarButtonContentLabelClass({ avatarButtonProps })}>{children}</span>;
};

export type UAvatarButtonContentIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UAvatarButtonContentIcon = ({ children }: UAvatarButtonContentIconProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return <>{children(avatarButtonContentIconClass({ avatarButtonProps }))}</>;
};

export type UAvatarButtonContentImageProps = Avatar.AvatarImageProps;
export const UAvatarButtonContentImage = (props: UAvatarButtonContentImageProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <Avatar.Image
      className={avatarButtonContentImageClass({ className: props.className, avatarButtonProps })}
      {...props}
    />
  );
};

/*
  ====================================
  AvatarButtonStatus
  ====================================
*/

export const {
  Provider: AvatarButtonStatusInternalProvider,
  useComponentContext: useAvatarButtonStatusInternalProvider,
} = getGenericContext<UAvatarButtonStatusRootProps>("AvatarButtonStatusInternalProvider");

export type UAvatarButtonStatusRootProps = AvatarButtonStatusStyleProps & {
  children: ReactNode;
  className?: string;
};
export const UAvatarButtonStatusRoot = (props: UAvatarButtonStatusRootProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <div
      className={avatarButtonStatusClass({
        className: props.className,
        avatarButtonProps,
        avatarButtonStatusProps: props,
      })}
    >
      <AvatarButtonStatusInternalProvider value={props}>{props.children}</AvatarButtonStatusInternalProvider>
    </div>
  );
};

export type UAvatarButtonStatusIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const UAvatarButtonStatusIcon = ({ children, className }: UAvatarButtonStatusIconProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  const avatarButtonStatusProps = useAvatarButtonStatusInternalProvider();
  return <>{children(avatarButtonStatusIconClass({ avatarButtonProps, avatarButtonStatusProps, className }))}</>;
};

/*
  ====================================
  AvatarButtonBadge
  ====================================
*/

export const {
  Provider: AvatarButtonBadgeInternalProvider,
  useComponentContext: useAvatarButtonBadgeInternalProvider,
} = getGenericContext<UAvatarButtonBadgeRootProps>("AvatarButtonBadgeInternalProvider");

export type UAvatarButtonBadgeRootProps = AvatarButtonBadgeStyleProps & {
  children: ReactNode;
  className?: string;
};
export const UAvatarButtonBadgeRoot = (props: UAvatarButtonBadgeRootProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <div
      className={avatarButtonBadgeClass({
        className: props.className,
        avatarButtonProps,
        avatarButtonBadgeProps: props,
      })}
    >
      <AvatarButtonBadgeInternalProvider value={props}>{props.children}</AvatarButtonBadgeInternalProvider>
    </div>
  );
};

export type UAvatarButtonBadgeLabelProps = {
  children: ReactNode;
};
export const UAvatarButtonBadgeLabel = ({ children }: UAvatarButtonBadgeLabelProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  const avatarButtonBadgeProps = useAvatarButtonBadgeInternalProvider();
  return <span className={avatarButtonBadgeLabelClass({ avatarButtonProps, avatarButtonBadgeProps })}>{children}</span>;
};
