import { AvatarImageProps } from "@radix-ui/react-avatar";
import {
  UAvatarToggleCheckIcon,
  UAvatarToggleCheckRoot,
  UAvatarToggleCheckRootProps,
  UAvatarToggleContentFallback,
  UAvatarToggleContentIcon,
  UAvatarToggleContentImage,
  UAvatarToggleContentLabel,
  UAvatarToggleContentRoot,
  UAvatarToggleContentRootProps,
  UAvatarToggleRoot,
  UAvatarToggleRootProps,
  useAvatarToggleInternalProvider,
} from "./AvatarToggle.underatoms";
import {
  AvatarToggleCheckLayout,
  AvatarToggleContentLayout,
  AvatarToggleContentWithIconLayout,
  AvatarToggleLayout,
} from "../../../styles/avatar-toggle";
import { ReactNode } from "react";

/*
  ====================================
  AvatarToggle
  ====================================
*/

export type AvatarToggleProps = Omit<UAvatarToggleRootProps, "children"> & {
  children: ReactNode;
};
export const AvatarToggle = ({ children, ...props }: AvatarToggleProps) => {
  return (
    <AvatarToggleLayout
      renderRoot={(children, className) => (
        <UAvatarToggleRoot {...props} className={className}>
          {children}
        </UAvatarToggleRoot>
      )}
      styleProps={{ className: props.className, avatarToggleProps: props }}
      contentSlot={children}
      checkSlot={<AvatarToggleCheck />}
    />
  );
};

/*
  ====================================
  AvatarToggleContent
  ====================================
*/

export type AvatarToggleContentProps = Omit<UAvatarToggleContentRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const AvatarToggleContent = ({ imageProps, fallbackText, ...props }: AvatarToggleContentProps) => {
  const avatarToggleProps = useAvatarToggleInternalProvider();
  return (
    <AvatarToggleContentLayout
      renderRoot={(children, className) => (
        <UAvatarToggleContentRoot {...props} className={className}>
          {children}
        </UAvatarToggleContentRoot>
      )}
      styleProps={{ className: props.className, avatarToggleProps }}
      imageSlot={imageProps && <UAvatarToggleContentImage {...imageProps} />}
      labelSlot={
        fallbackText && (
          <UAvatarToggleContentFallback>
            <UAvatarToggleContentLabel>{fallbackText}</UAvatarToggleContentLabel>
          </UAvatarToggleContentFallback>
        )
      }
    />
  );
};

export type AvatarToggleContentWithIconProps = Omit<UAvatarToggleContentRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (className: string) => ReactNode;
};
export const AvatarToggleContentWithIcon = ({
  imageProps,
  fallbackIcon,
  ...props
}: AvatarToggleContentWithIconProps) => {
  const avatarToggleProps = useAvatarToggleInternalProvider();
  return (
    <AvatarToggleContentWithIconLayout
      renderRoot={(children, className) => (
        <UAvatarToggleContentRoot {...props} className={className}>
          {children}
        </UAvatarToggleContentRoot>
      )}
      styleProps={{ className: props.className, avatarToggleProps }}
      imageSlot={imageProps && <UAvatarToggleContentImage {...imageProps} />}
      iconSlot={
        fallbackIcon && (
          <UAvatarToggleContentFallback>
            <UAvatarToggleContentIcon>{fallbackIcon}</UAvatarToggleContentIcon>
          </UAvatarToggleContentFallback>
        )
      }
    />
  );
};

/*
  ====================================
  AvatarToggleCheck
  ====================================
*/

export type AvatarToggleCheckProps = Omit<UAvatarToggleCheckRootProps, "children">;
export const AvatarToggleCheck = (props: AvatarToggleCheckProps) => {
  const avatarToggleProps = useAvatarToggleInternalProvider();
  return (
    <AvatarToggleCheckLayout
      renderRoot={(children, className) => (
        <UAvatarToggleCheckRoot {...props} className={className}>
          {children}
        </UAvatarToggleCheckRoot>
      )}
      styleProps={{ className: props.className, avatarToggleProps }}
      iconSlot={<UAvatarToggleCheckIcon />}
    />
  );
};
