import { AvatarImageProps } from "@radix-ui/react-avatar";
import {
  AvatarGroupActionLayout,
  AvatarGroupAvatarLayout,
  AvatarGroupAvatarWithIconLayout,
  AvatarGroupInfoLayout,
  AvatarGroupLayout,
} from "../../../styles/avatar-group";
import {
  UAvatarGroupActionIcon,
  UAvatarGroupActionRoot,
  UAvatarGroupActionRootProps,
  UAvatarGroupAvatarFallback,
  UAvatarGroupAvatarIcon,
  UAvatarGroupAvatarImage,
  UAvatarGroupAvatarLabel,
  UAvatarGroupAvatarRoot,
  UAvatarGroupAvatarRootProps,
  UAvatarGroupInfoLabel,
  UAvatarGroupInfoRoot,
  UAvatarGroupInfoRootProps,
  UAvatarGroupRoot,
  UAvatarGroupRootProps,
  useAvatarGroupInternalProvider,
} from "./AvatarGroup.underatoms";
import { ReactNode } from "react";

/*
  ====================================
  AvatarGroup
  ====================================
*/

export type AvatarGroupProps = UAvatarGroupRootProps & {
  className?: string;
  actionSlot?: React.ReactNode;
  infoSlot?: React.ReactNode;
};

export const AvatarGroup = ({ actionSlot, children, infoSlot, ...props }: AvatarGroupProps) => {
  return (
    <AvatarGroupLayout
      renderRoot={(children, className) => (
        <UAvatarGroupRoot {...props} className={className}>
          {children}
        </UAvatarGroupRoot>
      )}
      styleProps={{ className: props.className, avatarGroupProps: props }}
      actionSlot={actionSlot}
      avatarSlots={children}
      infoSlot={infoSlot}
    />
  );
};

/*
  ====================================
  AvatarGroupAction
  ====================================
*/

export type AvatarGroupActionProps = Omit<UAvatarGroupActionRootProps, "children"> & {
  icon: (className: string) => React.ReactNode;
};
export const AvatarGroupAction = ({ icon, ...props }: AvatarGroupActionProps) => {
  const avatarGroupProps = useAvatarGroupInternalProvider();
  return (
    <AvatarGroupActionLayout
      renderRoot={(children, className) => {
        return (
          <UAvatarGroupActionRoot {...props} className={className}>
            {children}
          </UAvatarGroupActionRoot>
        );
      }}
      styleProps={{ className: props.className, avatarGroupProps }}
      iconSlot={<UAvatarGroupActionIcon>{icon}</UAvatarGroupActionIcon>}
    />
  );
};

/*
  ====================================
  AvatarGroupAvatar
  ====================================
*/

export type AvatarGroupAvatarProps = Omit<UAvatarGroupAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const AvatarGroupAvatar = ({ imageProps, fallbackText, ...props }: AvatarGroupAvatarProps) => {
  const avatarGroupProps = useAvatarGroupInternalProvider();
  return (
    <AvatarGroupAvatarLayout
      renderRoot={(children, className) => {
        return (
          <UAvatarGroupAvatarRoot {...props} className={className}>
            {children}
          </UAvatarGroupAvatarRoot>
        );
      }}
      styleProps={{ className: props.className, avatarGroupProps }}
      imageSlot={imageProps && <UAvatarGroupAvatarImage {...imageProps} />}
      labelSlot={
        <UAvatarGroupAvatarFallback>
          <UAvatarGroupAvatarLabel>{fallbackText}</UAvatarGroupAvatarLabel>
        </UAvatarGroupAvatarFallback>
      }
    />
  );
};

export type AvatarGroupAvatarWithIconProps = Omit<UAvatarGroupAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (className: string) => ReactNode;
};
export const AvatarGroupAvatarWithIcon = ({ imageProps, fallbackIcon, ...props }: AvatarGroupAvatarWithIconProps) => {
  const avatarGroupProps = useAvatarGroupInternalProvider();
  return (
    <AvatarGroupAvatarWithIconLayout
      renderRoot={(children, className) => {
        return (
          <UAvatarGroupAvatarRoot {...props} className={className}>
            {children}
          </UAvatarGroupAvatarRoot>
        );
      }}
      styleProps={{ className: props.className, avatarGroupProps }}
      imageSlot={imageProps && <UAvatarGroupAvatarImage {...imageProps} />}
      iconSlot={
        fallbackIcon && (
          <UAvatarGroupAvatarFallback>
            <UAvatarGroupAvatarIcon>{fallbackIcon}</UAvatarGroupAvatarIcon>
          </UAvatarGroupAvatarFallback>
        )
      }
    />
  );
};

/*
  ====================================
  AvatarGroupInfo
  ====================================
*/

export type AvatarGroupInfoProps = Omit<UAvatarGroupInfoRootProps, "children"> & {
  label: string;
};
export const AvatarGroupInfo = ({ label, ...props }: AvatarGroupInfoProps) => {
  const avatarGroupProps = useAvatarGroupInternalProvider();
  return (
    <AvatarGroupInfoLayout
      renderRoot={(children, className) => (
        <UAvatarGroupInfoRoot {...props} className={className}>
          {children}
        </UAvatarGroupInfoRoot>
      )}
      styleProps={{ className: props.className, avatarGroupProps }}
      labelSlot={<UAvatarGroupInfoLabel>{label}</UAvatarGroupInfoLabel>}
    />
  );
};
