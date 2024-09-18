import type { ReactNode } from "react";
import {
  TagAvatarLayout,
  TagAvatarWithIconLayout,
  TagDismissLayout,
  TagDotStyleProps,
  TagLayout,
  TagWithAvatarLayout,
  TagWithDotLayout,
  TagWithIconLayout,
} from "../../../styles/tag";
import {
  UTagAvatarFallback,
  UTagAvatarIcon,
  UTagAvatarImage,
  UTagAvatarLabel,
  UTagAvatarRoot,
  UTagAvatarRootProps,
  UTagDismissIcon,
  UTagDismissRoot,
  UTagDismissRootProps,
  UTagDot,
  UTagIcon,
  UTagLabel,
  UTagRoot,
  UTagRootProps,
  useTagInternalProvider,
} from "../../react-aria/tag/Tag.underatoms";
import { AvatarImageProps } from "@radix-ui/react-avatar";

/*
  ====================================
  Tag
  ====================================
*/

export type TagProps = UTagRootProps & { onDismiss?: () => void };
export const Tag = ({ children, onDismiss, ...props }: TagProps) => {
  return (
    <TagLayout
      renderRoot={(children, className) => (
        <UTagRoot {...props} className={className}>
          {children}
        </UTagRoot>
      )}
      styleProps={{ className: props.className, tagProps: props }}
      labelSlot={<UTagLabel>{children}</UTagLabel>}
      dismissSlot={onDismiss && <TagDismiss onPress={onDismiss} />}
    />
  );
};

export type TagWithIconProps = UTagRootProps & {
  icon: (className: string) => ReactNode;
  onDismiss?: () => void;
};
export const TagWithIcon = ({ icon, children, onDismiss, ...props }: TagWithIconProps) => {
  return (
    <TagWithIconLayout
      renderRoot={(children, className) => (
        <UTagRoot {...props} className={className}>
          {children}
        </UTagRoot>
      )}
      styleProps={{ className: props.className, tagProps: props }}
      iconSlot={<UTagIcon>{icon}</UTagIcon>}
      labelSlot={<UTagLabel>{children}</UTagLabel>}
      dismissSlot={onDismiss && <TagDismiss onPress={onDismiss} />}
    />
  );
};

export type TagWithDotProps = UTagRootProps & {
  dotColor?: TagDotStyleProps["color"];
  onDismiss?: () => void;
};

export const TagWithDot = ({ dotColor, children, onDismiss, ...props }: TagWithDotProps) => {
  return (
    <TagWithDotLayout
      renderRoot={(children, className) => (
        <UTagRoot {...props} className={className}>
          {children}
        </UTagRoot>
      )}
      styleProps={{ className: props.className, tagProps: props }}
      dotSlot={<UTagDot color={dotColor} />}
      labelSlot={<UTagLabel>{children}</UTagLabel>}
      dismissSlot={onDismiss && <TagDismiss onPress={onDismiss} />}
    />
  );
};

export type TagWithAvatarProps = UTagRootProps & {
  avatarSlot: ReactNode;
  onDismiss?: () => void;
};

export const TagWithAvatar = ({ avatarSlot, children, onDismiss, ...props }: TagWithAvatarProps) => {
  return (
    <TagWithAvatarLayout
      renderRoot={(children, className) => (
        <UTagRoot {...props} className={className}>
          {children}
        </UTagRoot>
      )}
      styleProps={{ className: props.className, tagProps: props }}
      avatarSlot={avatarSlot}
      labelSlot={<UTagLabel>{children}</UTagLabel>}
      dismissSlot={onDismiss && <TagDismiss onPress={onDismiss} />}
    />
  );
};

/*
  ====================================
  TagAvatar
  ====================================
*/

export type TagAvatarProps = Omit<UTagAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const TagAvatar = ({ imageProps, fallbackText, ...props }: TagAvatarProps) => {
  const tagProps = useTagInternalProvider();
  return (
    <TagAvatarLayout
      renderRoot={(children, className) => (
        <UTagAvatarRoot {...props} className={className}>
          {children}
        </UTagAvatarRoot>
      )}
      styleProps={{ className: props.className, tagProps }}
      imageSlot={imageProps && <UTagAvatarImage {...imageProps} />}
      labelSlot={
        fallbackText && (
          <UTagAvatarFallback>
            <UTagAvatarLabel>{fallbackText}</UTagAvatarLabel>
          </UTagAvatarFallback>
        )
      }
    />
  );
};

export type TagAvatarWithIconProps = Omit<UTagAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (className: string) => ReactNode;
};
export const TagAvatarWithIcon = ({ imageProps, fallbackIcon, ...props }: TagAvatarWithIconProps) => {
  const tagProps = useTagInternalProvider();
  return (
    <TagAvatarWithIconLayout
      renderRoot={(children, className) => (
        <UTagAvatarRoot {...props} className={className}>
          {children}
        </UTagAvatarRoot>
      )}
      styleProps={{ className: props.className, tagProps }}
      imageSlot={imageProps && <UTagAvatarImage {...imageProps} />}
      iconSlot={
        fallbackIcon && (
          <UTagAvatarFallback>
            <UTagAvatarIcon>{fallbackIcon}</UTagAvatarIcon>
          </UTagAvatarFallback>
        )
      }
    />
  );
};

/*
  ====================================
  TagDismiss
  ====================================
*/

export type TagDismissProps = UTagDismissRootProps;
export const TagDismiss = (props: TagDismissProps) => {
  const tagProps = useTagInternalProvider();
  return (
    <TagDismissLayout
      renderRoot={(children, className) => (
        <UTagDismissRoot {...props} className={className}>
          {children}
        </UTagDismissRoot>
      )}
      styleProps={{ className: props.className, tagProps }}
      iconSlot={<UTagDismissIcon />}
    />
  );
};
