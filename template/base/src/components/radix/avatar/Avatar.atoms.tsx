import { ReactNode } from "react";
import {
  AvatarActionLayout,
  AvatarBadgeLayout,
  AvatarContentLayout,
  AvatarIndicatorLayout,
  AvatarIndicatorWithIconLayout,
  AvatarLayout,
  AvatarNotificationLayout,
  AvatarStatusLayout,
} from "../../../styles/avatar";
import {
  UAvatarActionIcon,
  UAvatarActionRoot,
  UAvatarActionRootProps,
  UAvatarBadgeLabel,
  UAvatarBadgeRoot,
  UAvatarBadgeRootProps,
  UAvatarContentFallback,
  UAvatarContentIcon,
  UAvatarContentImage,
  UAvatarContentLabel,
  UAvatarContentRoot,
  UAvatarContentRootProps,
  UAvatarIndicatorFallback,
  UAvatarIndicatorIcon,
  UAvatarIndicatorImage,
  UAvatarIndicatorRoot,
  UAvatarIndicatorRootProps,
  UAvatarNotificationCounter,
  UAvatarNotificationRoot,
  UAvatarNotificationRootProps,
  UAvatarRoot,
  UAvatarRootProps,
  UAvatarStatusIcon,
  UAvatarStatusRoot,
  UAvatarStatusRootProps,
  useAvatarInternalProvider,
} from "./Avatar.underatoms";
import { AvatarImageProps } from "@radix-ui/react-avatar";

/*
  ====================================
  Avatar
  ====================================
*/

export type AvatarProps = Omit<UAvatarRootProps, "children"> & {
  contentSlot: React.ReactNode;
  actionSlot?: React.ReactNode;
  notificationSlot?: React.ReactNode;
  badgeSlot?: React.ReactNode;
  indicatorSlot?: React.ReactNode;
  statusSlot?: React.ReactNode;
};
export const Avatar = ({
  contentSlot,
  actionSlot,
  notificationSlot,
  badgeSlot,
  indicatorSlot,
  statusSlot,
  ...props
}: AvatarProps) => {
  return (
    <AvatarLayout
      renderRoot={(children, className) => {
        return (
          <UAvatarRoot {...props} className={className}>
            {children}
          </UAvatarRoot>
        );
      }}
      styleProps={{ className: props.className, avatarProps: props }}
      contentSlot={contentSlot}
      actionSlot={actionSlot}
      notificationSlot={notificationSlot}
      badgeSlot={badgeSlot}
      indicatorSlot={indicatorSlot}
      statusSlot={statusSlot}
    />
  );
};

/*
  ====================================
  AvatarNotification
  ====================================
*/

export type AvatarNotificationProps = Omit<UAvatarNotificationRootProps, "children"> & {
  counterText: string;
};
export const AvatarNotification = ({ counterText, ...props }: AvatarNotificationProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <AvatarNotificationLayout
      renderRoot={(children, className) => (
        <UAvatarNotificationRoot {...props} className={className}>
          {children}
        </UAvatarNotificationRoot>
      )}
      styleProps={{ className: props.className, avatarProps, avatarNotificationProps: props }}
      counterSlot={<UAvatarNotificationCounter>{counterText}</UAvatarNotificationCounter>}
    />
  );
};

/*
  ====================================
  AvatarIndicator
  ====================================
*/

export type AvatarIndicatorProps = Omit<UAvatarIndicatorRootProps, "children"> & {
  imageProps: AvatarImageProps;
};
export const AvatarIndicator = ({ imageProps, ...props }: AvatarIndicatorProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <AvatarIndicatorLayout
      renderRoot={(children, className) => (
        <UAvatarIndicatorRoot {...props} className={className}>
          {children}
        </UAvatarIndicatorRoot>
      )}
      styleProps={{ className: props.className, avatarProps }}
      imageSlot={<UAvatarIndicatorImage {...imageProps} />}
    />
  );
};

export type AvatarIndicatorWithIconProps = Omit<UAvatarIndicatorRootProps, "children"> & {
  icon: (className: string) => ReactNode;
};
export const AvatarIndicatorWithIcon = ({ icon, ...props }: AvatarIndicatorWithIconProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <AvatarIndicatorWithIconLayout
      renderRoot={(children, className) => (
        <UAvatarIndicatorRoot {...props} className={className}>
          {children}
        </UAvatarIndicatorRoot>
      )}
      styleProps={{ className: props.className, avatarProps }}
      iconSlot={
        <UAvatarIndicatorFallback>
          <UAvatarIndicatorIcon>{icon}</UAvatarIndicatorIcon>
        </UAvatarIndicatorFallback>
      }
    />
  );
};

/*
  ====================================
  AvatarContent
  ====================================
*/

export type AvatarContentProps = Omit<UAvatarContentRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const AvatarContent = ({ imageProps, fallbackText, ...props }: AvatarContentProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <AvatarContentLayout
      renderRoot={(children, className) => {
        return (
          <UAvatarContentRoot {...props} className={className}>
            {children}
          </UAvatarContentRoot>
        );
      }}
      styleProps={{ className: props.className, avatarProps }}
      imageSlot={imageProps && <UAvatarContentImage {...imageProps} />}
      labelSlot={
        fallbackText && (
          <UAvatarContentFallback>
            <UAvatarContentLabel>{fallbackText}</UAvatarContentLabel>
          </UAvatarContentFallback>
        )
      }
    />
  );
};

export type AvatarContentWithIconProps = Omit<UAvatarContentRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (className: string) => ReactNode;
};
export const AvatarContentWithIcon = ({ imageProps, fallbackIcon, ...props }: AvatarContentWithIconProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <AvatarContentLayout
      renderRoot={(children, className) => {
        return (
          <UAvatarContentRoot {...props} className={className}>
            {children}
          </UAvatarContentRoot>
        );
      }}
      styleProps={{ className: props.className, avatarProps }}
      imageSlot={imageProps && <UAvatarContentImage {...imageProps} />}
      labelSlot={
        fallbackIcon && (
          <UAvatarContentFallback>
            <UAvatarContentIcon>{fallbackIcon}</UAvatarContentIcon>
          </UAvatarContentFallback>
        )
      }
    />
  );
};

/*
  ====================================
  AvatarAction
  ====================================
*/

export type AvatarActionProps = Omit<UAvatarActionRootProps, "children"> & {
  icon: (className: string) => ReactNode;
  className?: string;
};

export const AvatarAction = ({ icon, ...props }: AvatarActionProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <AvatarActionLayout
      renderRoot={(children, className) => (
        <UAvatarActionRoot {...props} className={className}>
          {children}
        </UAvatarActionRoot>
      )}
      styleProps={{ className: props.className, avatarProps }}
      iconSlot={<UAvatarActionIcon>{icon}</UAvatarActionIcon>}
    />
  );
};

/*
  ====================================
  AvatarStatus
  ====================================
*/

export type AvatarStatusProps = Omit<UAvatarStatusRootProps, "children"> & {
  icon?: (className: string) => ReactNode;
  className?: string;
};

export const AvatarStatus = ({ icon, ...props }: AvatarStatusProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <AvatarStatusLayout
      renderRoot={(children, className) => (
        <UAvatarStatusRoot {...props} className={className}>
          {children}
        </UAvatarStatusRoot>
      )}
      styleProps={{ className: props.className, avatarProps, avatarStatusProps: props }}
      iconSlot={icon && <UAvatarStatusIcon>{icon}</UAvatarStatusIcon>}
    />
  );
};

/*
  ====================================
  AvatarBadge
  ====================================
*/

export type AvatarBadgeProps = Omit<UAvatarBadgeRootProps, "children"> & {
  label: string;
  className?: string;
};
export const AvatarBadge = ({ label, ...props }: AvatarBadgeProps) => {
  const avatarProps = useAvatarInternalProvider();
  return (
    <AvatarBadgeLayout
      renderRoot={(children, className) => (
        <UAvatarBadgeRoot {...props} className={className}>
          {children}
        </UAvatarBadgeRoot>
      )}
      styleProps={{ className: props.className, avatarProps, avatarBadgeProps: props }}
      labelSlot={<UAvatarBadgeLabel>{label}</UAvatarBadgeLabel>}
    />
  );
};
