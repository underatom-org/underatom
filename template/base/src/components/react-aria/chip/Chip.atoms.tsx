import { ReactNode } from "react";
import {
  ChipAvatarLayout,
  ChipAvatarWithIconLayout,
  ChipDismissLayout,
  ChipDotStyleProps,
  ChipLayout,
  ChipWithAvatarLayout,
  ChipWithDotLayout,
  ChipWithIconLayout,
} from "../../../styles/chip";
import {
  UChipAvatarFallback,
  UChipAvatarIcon,
  UChipAvatarImage,
  UChipAvatarLabel,
  UChipAvatarRoot,
  UChipAvatarRootProps,
  UChipDismissIcon,
  UChipDismissRoot,
  UChipDismissRootProps,
  UChipDot,
  UChipIcon,
  UChipLabel,
  UChipRoot,
  UChipRootProps,
  useChipInternalProvider,
} from "./Chip.underatoms";
import { AvatarImageProps } from "@radix-ui/react-avatar";

/*
  ====================================
  Chip
  ====================================
*/

export type ChipProps = UChipRootProps & { onDismiss?: () => void };
export const Chip = ({ children, onDismiss, ...props }: ChipProps) => {
  return (
    <ChipLayout
      renderRoot={(children, className) => (
        <UChipRoot {...props} className={className}>
          {children}
        </UChipRoot>
      )}
      styleProps={{ className: props.className, chipProps: props }}
      labelSlot={<UChipLabel>{children}</UChipLabel>}
      dismissSlot={onDismiss && <ChipDismiss onPress={onDismiss} />}
    />
  );
};

export type ChipWithIconProps = UChipRootProps & {
  icon: (className: string) => ReactNode;
  onDismiss?: () => void;
};
export const ChipWithIcon = ({ icon, children, onDismiss, ...props }: ChipWithIconProps) => {
  return (
    <ChipWithIconLayout
      renderRoot={(children, className) => (
        <UChipRoot {...props} className={className}>
          {children}
        </UChipRoot>
      )}
      styleProps={{ className: props.className, chipProps: props }}
      iconSlot={<UChipIcon>{icon}</UChipIcon>}
      labelSlot={<UChipLabel>{children}</UChipLabel>}
      dismissSlot={onDismiss && <ChipDismiss onPress={onDismiss} />}
    />
  );
};

export type ChipWithAvatarProps = UChipRootProps & {
  avatarSlot: ReactNode;
  onDismiss?: () => void;
};
export const ChipWithAvatar = ({ avatarSlot, children, onDismiss, ...props }: ChipWithAvatarProps) => (
  <ChipWithAvatarLayout
    renderRoot={(children, className) => (
      <UChipRoot {...props} className={className}>
        {children}
      </UChipRoot>
    )}
    styleProps={{ className: props.className, chipProps: props }}
    avatarSlot={avatarSlot}
    labelSlot={<UChipLabel>{children}</UChipLabel>}
    dismissSlot={onDismiss && <ChipDismiss onPress={onDismiss} />}
  />
);

export type ChipWithDotProps = UChipRootProps & {
  dotColor?: ChipDotStyleProps["color"];
  onDismiss?: () => void;
};
export const ChipWithDot = ({ dotColor = "primary", children, onDismiss, ...props }: ChipWithDotProps) => {
  return (
    <ChipWithDotLayout
      renderRoot={(children, className) => (
        <UChipRoot {...props} className={className}>
          {children}
        </UChipRoot>
      )}
      styleProps={{ className: props.className, chipProps: props }}
      dotSlot={<UChipDot color={dotColor} />}
      labelSlot={<UChipLabel>{children}</UChipLabel>}
      dismissSlot={onDismiss && <ChipDismiss onPress={onDismiss} />}
    />
  );
};

/*
  ====================================
  ChipDismiss
  ====================================
*/

export type ChipDismissProps = UChipDismissRootProps;
export const ChipDismiss = (props: ChipDismissProps) => {
  const chipProps = useChipInternalProvider();
  return (
    <ChipDismissLayout
      renderRoot={(children, className) => (
        <UChipDismissRoot {...props} className={className}>
          {children}
        </UChipDismissRoot>
      )}
      styleProps={{ className: props.className, chipProps }}
      iconSlot={<UChipDismissIcon />}
    />
  );
};

/*
  ====================================
  ChipAvatar
  ====================================
*/

export type ChipAvatarProps = Omit<UChipAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const ChipAvatar = ({ fallbackText, imageProps, ...props }: ChipAvatarProps) => {
  const chipProps = useChipInternalProvider();
  return (
    <ChipAvatarLayout
      renderRoot={(children, className) => (
        <UChipAvatarRoot {...props} className={className}>
          {children}
        </UChipAvatarRoot>
      )}
      styleProps={{ className: props.className, chipProps }}
      imageSlot={imageProps && <UChipAvatarImage {...imageProps} />}
      labelSlot={
        fallbackText && (
          <UChipAvatarFallback asChild>
            <UChipAvatarLabel>{fallbackText}</UChipAvatarLabel>
          </UChipAvatarFallback>
        )
      }
    />
  );
};

export type ChipAvatarWithIconProps = Omit<UChipAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (classname: string) => ReactNode;
};
export const ChipAvatarWithIcon = ({ fallbackIcon, imageProps, ...props }: ChipAvatarWithIconProps) => {
  const chipProps = useChipInternalProvider();
  return (
    <ChipAvatarWithIconLayout
      renderRoot={(children, className) => (
        <UChipAvatarRoot {...props} className={className}>
          {children}
        </UChipAvatarRoot>
      )}
      styleProps={{ className: props.className, chipProps }}
      imageSlot={imageProps && <UChipAvatarImage {...imageProps} />}
      iconSlot={
        fallbackIcon && (
          <UChipAvatarFallback asChild>
            <UChipAvatarIcon>{fallbackIcon}</UChipAvatarIcon>
          </UChipAvatarFallback>
        )
      }
    />
  );
};
