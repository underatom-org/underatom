import { AvatarImageProps } from "@radix-ui/react-avatar";
import { ChipToggleDismissLayout, ChipToggleDotStyleProps } from "../../../styles/chip-toggle";
import {
  UChipToggleAvatarFallback,
  UChipToggleAvatarIcon,
  UChipToggleAvatarImage,
  UChipToggleAvatarLabel,
  UChipToggleAvatarRoot,
  UChipToggleAvatarRootProps,
  UChipToggleDismissIcon,
  UChipToggleDismissRoot,
  UChipToggleDismissRootProps,
  UChipToggleDot,
  UChipToggleIcon,
  UChipToggleLabel,
  UChipToggleRoot,
  UChipToggleRootProps,
  useChipToggleRootProps,
} from "./ChipToggle.underatoms";
import {
  ChipToggleAvatarLayout,
  ChipToggleAvatarWithIconLayout,
  ChipToggleLayout,
  ChipToggleWithAvatarLayout,
  ChipToggleWithDotLayout,
  ChipToggleWithIconLayout,
} from "../../../styles/chip-toggle";
import { ReactNode } from "react";

/*
  ====================================
  ChipToggle
  ====================================
*/

export type ChipToggleProps = UChipToggleRootProps & {
  onDismiss?: () => void;
};
export const ChipToggle = ({ children, onDismiss, ...props }: ChipToggleProps) => {
  return (
    <ChipToggleLayout
      renderRoot={(children, className) => (
        <UChipToggleRoot {...props} className={className}>
          {children}
        </UChipToggleRoot>
      )}
      styleProps={{ className: props.className, chipToggleProps: props }}
      labelSlot={<UChipToggleLabel>{children}</UChipToggleLabel>}
      dismissSlot={onDismiss && <ChipToggleDismiss onPress={onDismiss} />}
    />
  );
};

export type ChipToggleWithIconProps = UChipToggleRootProps & {
  icon: (className: string) => ReactNode;
  onDismiss?: () => void;
};
export const ChipToggleWithIcon = ({ icon, children, onDismiss, ...props }: ChipToggleWithIconProps) => {
  return (
    <ChipToggleWithIconLayout
      renderRoot={(children, className) => (
        <UChipToggleRoot {...props} className={className}>
          {children}
        </UChipToggleRoot>
      )}
      styleProps={{ className: props.className, chipToggleProps: props }}
      iconSlot={<UChipToggleIcon>{icon}</UChipToggleIcon>}
      labelSlot={<UChipToggleLabel>{children}</UChipToggleLabel>}
      dismissSlot={onDismiss && <ChipToggleDismiss onPress={onDismiss} />}
    />
  );
};

export type ChipToggleWithDotProps = UChipToggleRootProps & {
  dotColor?: ChipToggleDotStyleProps["color"];
  onDismiss?: () => void;
};

export const ChipToggleWithDot = ({ dotColor = "base", onDismiss, children, ...props }: ChipToggleWithDotProps) => {
  return (
    <ChipToggleWithDotLayout
      renderRoot={(children, className) => (
        <UChipToggleRoot {...props} className={className}>
          {children}
        </UChipToggleRoot>
      )}
      styleProps={{ className: props.className, chipToggleProps: props }}
      dotSlot={<UChipToggleDot color={dotColor} />}
      labelSlot={<UChipToggleLabel>{children}</UChipToggleLabel>}
      dismissSlot={onDismiss && <ChipToggleDismiss onPress={onDismiss} />}
    />
  );
};

export type ChipToggleWithAvatarProps = UChipToggleRootProps & {
  avatarSlot?: ReactNode;
  onDismiss?: () => void;
};

export const ChipToggleWithAvatar = ({ avatarSlot, children, onDismiss, ...props }: ChipToggleWithAvatarProps) => {
  return (
    <ChipToggleWithAvatarLayout
      renderRoot={(children, className) => (
        <UChipToggleRoot {...props} className={className}>
          {children}
        </UChipToggleRoot>
      )}
      styleProps={{ className: props.className, chipToggleProps: props }}
      avatarSlot={avatarSlot}
      labelSlot={<UChipToggleLabel>{children}</UChipToggleLabel>}
      dismissSlot={onDismiss && <ChipToggleDismiss onPress={onDismiss} />}
    />
  );
};

/*
  ====================================
  ChipToggleDismiss
  ====================================
*/

export type ChipToggleDismissProps = UChipToggleDismissRootProps;
export const ChipToggleDismiss = (props: ChipToggleDismissProps) => {
  const chipToggleProps = useChipToggleRootProps();
  return (
    <ChipToggleDismissLayout
      renderRoot={(children, className) => (
        <UChipToggleDismissRoot {...props} className={className}>
          {children}
        </UChipToggleDismissRoot>
      )}
      styleProps={{ className: props.className, chipToggleProps }}
      iconSlot={<UChipToggleDismissIcon />}
    />
  );
};

/*
  ====================================
  ChipToggleAvatar
  ====================================
*/

export type ChipToggleAvatarProps = Omit<UChipToggleAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const ChipToggleAvatar = ({ imageProps, fallbackText, ...props }: ChipToggleAvatarProps) => {
  const chipToggleProps = useChipToggleRootProps();
  return (
    <ChipToggleAvatarLayout
      renderRoot={(children, className) => (
        <UChipToggleAvatarRoot {...props} className={className}>
          {children}
        </UChipToggleAvatarRoot>
      )}
      styleProps={{ className: props.className, chipToggleProps }}
      imageSlot={imageProps && <UChipToggleAvatarImage {...imageProps} />}
      labelSlot={fallbackText && <UChipToggleAvatarLabel>{fallbackText}</UChipToggleAvatarLabel>}
    />
  );
};

export type ChipToggleAvatarWithIconProps = Omit<UChipToggleAvatarRootProps, "children"> & {
  fallbackIcon?: (classname: string) => ReactNode;
  imageProps?: AvatarImageProps;
};
export const ChipToggleAvatarWithIcon = ({ fallbackIcon, imageProps, ...props }: ChipToggleAvatarWithIconProps) => {
  const chipToggleProps = useChipToggleRootProps();
  return (
    <ChipToggleAvatarWithIconLayout
      renderRoot={(children, className) => (
        <UChipToggleAvatarRoot {...props} className={className}>
          {children}
        </UChipToggleAvatarRoot>
      )}
      styleProps={{ className: props.className, chipToggleProps }}
      imageSlot={imageProps && <UChipToggleAvatarImage {...imageProps} />}
      iconSlot={
        fallbackIcon && (
          <UChipToggleAvatarFallback>
            <UChipToggleAvatarIcon>{fallbackIcon}</UChipToggleAvatarIcon>
          </UChipToggleAvatarFallback>
        )
      }
    />
  );
};
