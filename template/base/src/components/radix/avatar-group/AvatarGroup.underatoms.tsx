import { ReactNode, useRef } from "react";
import { AriaButtonProps, mergeProps, useButton, useFocusRing } from "react-aria";
import * as Avatar from "@radix-ui/react-avatar";
import { getGenericContext } from "../../../_utils";
import {
  AvatarGroupStyleProps,
  avatarGroupActionClass,
  avatarGroupActionIconClass,
  avatarGroupAvatarClass,
  avatarGroupAvatarIconClass,
  avatarGroupAvatarImageClass,
  avatarGroupAvatarLabelClass,
  avatarGroupClass,
  avatarGroupInfoClass,
  avatarGroupInfoLabelClass,
} from "../../../styles/avatar-group";

/*
  ====================================
  AvatarGroup
  ====================================
*/

export const { Provider: AvatarGroupInternalProvider, useComponentContext: useAvatarGroupInternalProvider } =
  getGenericContext<UAvatarGroupRootProps>("AvatarGroupInternalProvider");

export type UAvatarGroupRootProps = AvatarGroupStyleProps & {
  children: ReactNode;
  className?: string;
};

export const UAvatarGroupRoot = (props: UAvatarGroupRootProps) => {
  return (
    <div className={avatarGroupClass({ className: props.className, avatarGroupProps: props })}>
      <AvatarGroupInternalProvider value={props}>{props.children}</AvatarGroupInternalProvider>
    </div>
  );
};

/*
  ====================================
  AvatarGroupAction
  ====================================
*/

export type UAvatarGroupActionRootProps = AriaButtonProps<"button"> & {
  innerRef?: React.RefObject<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};
export const UAvatarGroupActionRoot = ({ className, ...props }: UAvatarGroupActionRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, refs);
  const avatarGroupProps = useAvatarGroupInternalProvider();
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      data-disabled={props.disabled}
      className={avatarGroupActionClass({
        className,
        avatarGroupProps,
      })}
      {...mergeProps(buttonProps, focusProps)}
    >
      {props.children}
    </button>
  );
};

export type UAvatarGroupActionIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const UAvatarGroupActionIcon = ({ children, className }: UAvatarGroupActionIconProps) => {
  const avatarGroupProps = useAvatarGroupInternalProvider();
  return <>{children(avatarGroupActionIconClass({ className, avatarGroupProps }))}</>;
};

/*
====================================
AvatarGroupAvatar
====================================
*/

export type UAvatarGroupAvatarRootProps = Avatar.AvatarProps & {
  /** Avatar content */
  children: Avatar.AvatarProps["children"];
  className?: string;
};

export const UAvatarGroupAvatarRoot = ({ className, ...props }: UAvatarGroupAvatarRootProps) => {
  const avatarGroupProps = useAvatarGroupInternalProvider();
  return (
    <Avatar.Root {...props} className={avatarGroupAvatarClass({ className, avatarGroupProps })}>
      {props.children}
    </Avatar.Root>
  );
};

export type UAvatarGroupAvatarFallbackProps = Avatar.AvatarFallbackProps;
export const UAvatarGroupAvatarFallback = (props: UAvatarGroupAvatarFallbackProps) => {
  return <Avatar.Fallback {...props} />;
};

export type UAvatarGroupAvatarLabelProps = {
  children: ReactNode;
};
export const UAvatarGroupAvatarLabel = ({ children }: UAvatarGroupAvatarLabelProps) => {
  const avatarGroupProps = useAvatarGroupInternalProvider();
  return <span className={avatarGroupAvatarLabelClass({ avatarGroupProps })}>{children}</span>;
};

export type UAvatarGroupAvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UAvatarGroupAvatarIcon = ({ children }: UAvatarGroupAvatarIconProps) => {
  const avatarGroupProps = useAvatarGroupInternalProvider();
  return <>{children(avatarGroupAvatarIconClass({ avatarGroupProps }))}</>;
};

export type UAvatarGroupAvatarImageProps = Avatar.AvatarImageProps;
export const UAvatarGroupAvatarImage = (props: UAvatarGroupAvatarImageProps) => {
  const avatarGroupProps = useAvatarGroupInternalProvider();
  return (
    <Avatar.Image
      className={avatarGroupAvatarImageClass({ className: props.className, avatarGroupProps })}
      {...props}
    />
  );
};

/*
  ====================================
  AvatarGroupInfo
  ====================================
*/

export type UAvatarGroupInfoRootProps = {
  children: ReactNode;
  className?: string;
};
export const UAvatarGroupInfoRoot = ({ children, className }: UAvatarGroupInfoRootProps) => {
  const avatarGroupProps = useAvatarGroupInternalProvider();
  return <div className={avatarGroupInfoClass({ className, avatarGroupProps })}>{children}</div>;
};

export type UAvatarGroupInfoLabelProps = {
  children: ReactNode;
};
export const UAvatarGroupInfoLabel = ({ children }: UAvatarGroupInfoLabelProps) => {
  const avatarGroupProps = useAvatarGroupInternalProvider();
  return <span className={avatarGroupInfoLabelClass({ avatarGroupProps })}>{children}</span>;
};
