import { ReactNode } from "react";
import {
  AvatarButtonBadgeLayout,
  AvatarButtonContentLayout,
  AvatarButtonIndicatorLayout,
  AvatarButtonIndicatorWithIconLayout,
  AvatarButtonLayout,
  AvatarButtonNotificationLayout,
  AvatarButtonStatusLayout,
} from "../../../styles/avatar-button";
import {
  UAvatarButtonBadgeLabel,
  UAvatarButtonBadgeRoot,
  UAvatarButtonBadgeRootProps,
  UAvatarButtonContentFallback,
  UAvatarButtonContentIcon,
  UAvatarButtonContentImage,
  UAvatarButtonContentLabel,
  UAvatarButtonContentRoot,
  UAvatarButtonContentRootProps,
  UAvatarButtonIndicatorFallback,
  UAvatarButtonIndicatorIcon,
  UAvatarButtonIndicatorImage,
  UAvatarButtonIndicatorRoot,
  UAvatarButtonIndicatorRootProps,
  UAvatarButtonNotificationCounter,
  UAvatarButtonNotificationRoot,
  UAvatarButtonNotificationRootProps,
  UAvatarButtonRoot,
  UAvatarButtonRootProps,
  UAvatarButtonStatusIcon,
  UAvatarButtonStatusRoot,
  UAvatarButtonStatusRootProps,
  useAvatarButtonInternalProvider,
} from "./AvatarButton.underatoms";
import { AvatarImageProps } from "@radix-ui/react-avatar";

/*
  ====================================
  AvatarButton
  ====================================
*/

export type AvatarButtonProps = UAvatarButtonRootProps & {
  notificationSlot?: React.ReactNode;
  badgeSlot?: React.ReactNode;
  indicatorSlot?: React.ReactNode;
  statusSlot?: React.ReactNode;
};
export const AvatarButton = ({
  children,
  badgeSlot,
  indicatorSlot,
  notificationSlot,
  statusSlot,
  ...props
}: AvatarButtonProps) => {
  return (
    <AvatarButtonLayout
      renderRoot={(children, className) => {
        return (
          <UAvatarButtonRoot {...props} className={className}>
            {children}
          </UAvatarButtonRoot>
        );
      }}
      styleProps={{ className: props.className, avatarButtonProps: props }}
      contentSlot={children}
      notificationSlot={notificationSlot}
      badgeSlot={badgeSlot}
      indicatorSlot={indicatorSlot}
      statusSlot={statusSlot}
    />
  );
};

/*
  ====================================
  AvatarButtonNotification
  ====================================
*/

export type AvatarButtonNotificationProps = Omit<UAvatarButtonNotificationRootProps, "children"> & {
  counterText: string;
};
export const AvatarButtonNotification = ({ counterText, ...props }: AvatarButtonNotificationProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <AvatarButtonNotificationLayout
      renderRoot={(children, className) => (
        <UAvatarButtonNotificationRoot {...props} className={className}>
          {children}
        </UAvatarButtonNotificationRoot>
      )}
      styleProps={{ className: props.className, avatarButtonProps, avatarButtonNotificationProps: props }}
      counterSlot={<UAvatarButtonNotificationCounter>{counterText}</UAvatarButtonNotificationCounter>}
    />
  );
};

/*
  ====================================
  AvatarButtonIndicator
  ====================================
*/

export type AvatarButtonIndicatorProps = Omit<UAvatarButtonIndicatorRootProps, "children"> & {
  imageProps: AvatarImageProps;
};
export const AvatarButtonIndicator = ({ imageProps, ...props }: AvatarButtonIndicatorProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <AvatarButtonIndicatorLayout
      renderRoot={(children, className) => (
        <UAvatarButtonIndicatorRoot {...props} className={className}>
          {children}
        </UAvatarButtonIndicatorRoot>
      )}
      styleProps={{ className: props.className, avatarButtonProps }}
      imageSlot={<UAvatarButtonIndicatorImage {...imageProps} />}
    />
  );
};

export type AvatarButtonIndicatorWithIconProps = Omit<UAvatarButtonIndicatorRootProps, "children"> & {
  icon: (className: string) => ReactNode;
};
export const AvatarButtonIndicatorWithIcon = ({ icon, ...props }: AvatarButtonIndicatorWithIconProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <AvatarButtonIndicatorWithIconLayout
      renderRoot={(children, className) => (
        <UAvatarButtonIndicatorRoot {...props} className={className}>
          {children}
        </UAvatarButtonIndicatorRoot>
      )}
      styleProps={{ className: props.className, avatarButtonProps }}
      iconSlot={
        <UAvatarButtonIndicatorFallback>
          <UAvatarButtonIndicatorIcon>{icon}</UAvatarButtonIndicatorIcon>
        </UAvatarButtonIndicatorFallback>
      }
    />
  );
};

/*
  ====================================
  AvatarButtonContent
  ====================================
*/

export type AvatarButtonContentProps = Omit<UAvatarButtonContentRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const AvatarButtonContent = ({ imageProps, fallbackText, ...props }: AvatarButtonContentProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <AvatarButtonContentLayout
      renderRoot={(children, className) => {
        return (
          <UAvatarButtonContentRoot {...props} className={className}>
            {children}
          </UAvatarButtonContentRoot>
        );
      }}
      styleProps={{ className: props.className, avatarButtonProps }}
      imageSlot={imageProps && <UAvatarButtonContentImage {...imageProps} />}
      labelSlot={
        fallbackText && (
          <UAvatarButtonContentFallback>
            <UAvatarButtonContentLabel>{fallbackText}</UAvatarButtonContentLabel>
          </UAvatarButtonContentFallback>
        )
      }
    />
  );
};

export type AvatarButtonContentWithIconProps = Omit<UAvatarButtonContentRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (className: string) => ReactNode;
};
export const AvatarButtonContentWithIcon = ({
  imageProps,
  fallbackIcon,
  ...props
}: AvatarButtonContentWithIconProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <AvatarButtonContentLayout
      renderRoot={(children, className) => {
        return (
          <UAvatarButtonContentRoot {...props} className={className}>
            {children}
          </UAvatarButtonContentRoot>
        );
      }}
      styleProps={{ className: props.className, avatarButtonProps }}
      imageSlot={imageProps && <UAvatarButtonContentImage {...imageProps} />}
      labelSlot={
        fallbackIcon && (
          <UAvatarButtonContentFallback>
            <UAvatarButtonContentIcon>{fallbackIcon}</UAvatarButtonContentIcon>
          </UAvatarButtonContentFallback>
        )
      }
    />
  );
};

/*
  ====================================
  AvatarButtonStatus
  ====================================
*/

export type AvatarButtonStatusProps = Omit<UAvatarButtonStatusRootProps, "children"> & {
  icon?: (className: string) => ReactNode;
  className?: string;
};
export const AvatarButtonStatus = ({ icon, ...props }: AvatarButtonStatusProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <AvatarButtonStatusLayout
      renderRoot={(children, className) => (
        <UAvatarButtonStatusRoot {...props} className={className}>
          {children}
        </UAvatarButtonStatusRoot>
      )}
      styleProps={{ className: props.className, avatarButtonProps, avatarButtonStatusProps: props }}
      iconSlot={icon && <UAvatarButtonStatusIcon>{icon}</UAvatarButtonStatusIcon>}
    />
  );
};

/*
  ====================================
  AvatarButtonBadge
  ====================================
*/

export type AvatarButtonBadgeProps = Omit<UAvatarButtonBadgeRootProps, "children"> & {
  label: string;
  className?: string;
};
export const AvatarButtonBadge = ({ label, ...props }: AvatarButtonBadgeProps) => {
  const avatarButtonProps = useAvatarButtonInternalProvider();
  return (
    <AvatarButtonBadgeLayout
      renderRoot={(children, className) => (
        <UAvatarButtonBadgeRoot {...props} className={className}>
          {children}
        </UAvatarButtonBadgeRoot>
      )}
      styleProps={{ className: props.className, avatarButtonProps, avatarButtonBadgeProps: props }}
      labelSlot={<UAvatarButtonBadgeLabel>{label}</UAvatarButtonBadgeLabel>}
    />
  );
};
