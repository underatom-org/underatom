import { AvatarImageProps } from "@radix-ui/react-avatar";
import {
  TextareaBoxLayout,
  TextareaBoxTagAvatarLayout,
  TextareaBoxTagAvatarWithIconLayout,
  TextareaBoxTagDismissLayout,
  TextareaBoxTagLayout,
  TextareaBoxTagWithAvatarLayout,
  TextareaBoxTagWithDotLayout,
  TextareaBoxTagWithIconLayout,
  TextareaBoxWithTagsLayout,
  TextareaLayout,
} from "../../../styles/textarea";
import {
  UTextareaAsterisk,
  UTextareaBoxRoot,
  UTextareaBoxRootProps,
  UTextareaBoxTagAvatarFallback,
  UTextareaBoxTagAvatarIcon,
  UTextareaBoxTagAvatarImage,
  UTextareaBoxTagAvatarLabel,
  UTextareaBoxTagAvatarRoot,
  UTextareaBoxTagAvatarRootProps,
  UTextareaBoxTagDismissIcon,
  UTextareaBoxTagDismissRoot,
  UTextareaBoxTagDismissRootProps,
  UTextareaBoxTagDot,
  UTextareaBoxTagIcon,
  UTextareaBoxTagLabel,
  UTextareaBoxTagRoot,
  UTextareaBoxTagRootProps,
  UTextareaBoxText,
  UTextareaDescription,
  UTextareaLabel,
  UTextareaRoot,
  UTextareaRootProps,
  useTextareaRootParentProps,
} from "./Textarea.underatoms";
import React from "react";

/*
  ====================================
  Textarea
  ====================================
*/

export type TextareaProps = UTextareaRootProps & {
  label?: string;
  description?: string;
  boxSlot: React.ReactNode;
};

export const Textarea = ({ label, description, boxSlot, ...props }: TextareaProps) => (
  <TextareaLayout
    renderRoot={(children, className) => (
      <UTextareaRoot {...props} className={className}>
        {children}
      </UTextareaRoot>
    )}
    styleProps={{ className: props.className, textareaProps: props }}
    labelSlot={<UTextareaLabel>{label}</UTextareaLabel>}
    descriptionSlot={<UTextareaDescription>{description}</UTextareaDescription>}
    asteriskSlot={<UTextareaAsterisk />}
    boxSlot={boxSlot}
  />
);

/*
  ====================================
  TextareaBox
  ====================================
*/

export type TextareaBoxProps = UTextareaBoxRootProps;
export const TextareaBox = (props: TextareaBoxProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <TextareaBoxLayout
      renderRoot={(children, className) => (
        <UTextareaBoxRoot {...props} className={className}>
          {children}
        </UTextareaBoxRoot>
      )}
      styleProps={{ className: props.className, textareaProps }}
      textSlot={<UTextareaBoxText />}
    />
  );
};

export type TextareaBoxWithTagsProps = UTextareaBoxRootProps & {
  tagSlots?: React.ReactNode[];
};
export const TextareaBoxWithTags = ({ tagSlots, ...props }: TextareaBoxWithTagsProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <TextareaBoxWithTagsLayout
      renderRoot={(children, className) => (
        <UTextareaBoxRoot {...props} className={className}>
          {children}
        </UTextareaBoxRoot>
      )}
      styleProps={{ className: props.className, textareaProps }}
      textSlot={<UTextareaBoxText />}
      tagSlots={tagSlots}
    />
  );
};

/*
  ====================================
  TextareaBoxTag
  ====================================
*/

export type TextareaBoxTagProps = UTextareaBoxTagRootProps & {
  label?: string;
  onDismiss?: () => void;
};
export const TextareaBoxTag = ({ label, onDismiss, ...props }: TextareaBoxTagProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <TextareaBoxTagLayout
      renderRoot={(children, className) => (
        <UTextareaBoxTagRoot {...props} className={className}>
          {children}
        </UTextareaBoxTagRoot>
      )}
      styleProps={{ className: props.className, textareaProps }}
      labelSlot={label && <UTextareaBoxTagLabel>{label}</UTextareaBoxTagLabel>}
      dismissSlot={onDismiss && <TextareaBoxTagDismiss onPress={onDismiss} />}
    />
  );
};

export type TextareaBoxTagWithIconProps = UTextareaBoxTagRootProps & {
  label?: string;
  icon?: (className: string) => React.ReactNode;
  onDismiss?: () => void;
};
export const TextareaBoxTagWithIcon = ({ label, icon, onDismiss, ...props }: TextareaBoxTagWithIconProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <TextareaBoxTagWithIconLayout
      renderRoot={(children, className) => (
        <UTextareaBoxTagRoot {...props} className={className}>
          {children}
        </UTextareaBoxTagRoot>
      )}
      styleProps={{ className: props.className, textareaProps }}
      labelSlot={label && <UTextareaBoxTagLabel>{label}</UTextareaBoxTagLabel>}
      iconSlot={icon && <UTextareaBoxTagIcon>{icon}</UTextareaBoxTagIcon>}
      dismissSlot={onDismiss && <TextareaBoxTagDismiss onPress={onDismiss} />}
    />
  );
};

export type TextareaBoxTagWithDotProps = UTextareaBoxTagRootProps & {
  label?: string;
  onDismiss?: () => void;
};
export const TextareaBoxTagWithDot = ({ label, onDismiss, ...props }: TextareaBoxTagWithDotProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <TextareaBoxTagWithDotLayout
      renderRoot={(children, className) => (
        <UTextareaBoxTagRoot {...props} className={className}>
          {children}
        </UTextareaBoxTagRoot>
      )}
      styleProps={{ className: props.className, textareaProps }}
      labelSlot={label && <UTextareaBoxTagLabel>{label}</UTextareaBoxTagLabel>}
      dotSlot={<UTextareaBoxTagDot />}
      dismissSlot={onDismiss && <TextareaBoxTagDismiss onPress={onDismiss} />}
    />
  );
};

export type TextareaBoxTagWithAvatarProps = UTextareaBoxTagRootProps & {
  label?: string;
  avatarSlot: React.ReactNode;
  onDismiss?: () => void;
};
export const TextareaBoxTagWithAvatar = ({ label, avatarSlot, onDismiss, ...props }: TextareaBoxTagWithAvatarProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <TextareaBoxTagWithAvatarLayout
      renderRoot={(children, className) => (
        <UTextareaBoxTagRoot {...props} className={className}>
          {children}
        </UTextareaBoxTagRoot>
      )}
      styleProps={{ className: props.className, textareaProps }}
      labelSlot={label && <UTextareaBoxTagLabel>{label}</UTextareaBoxTagLabel>}
      avatarSlot={avatarSlot}
      dismissSlot={onDismiss && <TextareaBoxTagDismiss onPress={onDismiss} />}
    />
  );
};

/*
  ====================================
  TextareaBoxTagDismiss
  ====================================
*/

export type TextareaBoxTagDismissProps = UTextareaBoxTagDismissRootProps;
export const TextareaBoxTagDismiss = (props: TextareaBoxTagDismissProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <TextareaBoxTagDismissLayout
      renderRoot={(children, className) => (
        <UTextareaBoxTagDismissRoot {...props} className={className}>
          {children}
        </UTextareaBoxTagDismissRoot>
      )}
      styleProps={{ className: props.className, textareaProps }}
      iconSlot={<UTextareaBoxTagDismissIcon />}
    />
  );
};

/*
  ====================================
  TextareaBoxTagAvatar
  ====================================
*/

export type TextareaBoxAvatarProps = Omit<UTextareaBoxTagAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const TextareaBoxAvatar = ({ imageProps, fallbackText, ...props }: TextareaBoxAvatarProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <TextareaBoxTagAvatarLayout
      renderRoot={(children, className) => (
        <UTextareaBoxTagAvatarRoot {...props} className={className}>
          {children}
        </UTextareaBoxTagAvatarRoot>
      )}
      styleProps={{ className: props.className, textareaProps }}
      imageSlot={imageProps && <UTextareaBoxTagAvatarImage {...imageProps} />}
      labelSlot={
        <UTextareaBoxTagAvatarFallback>
          <UTextareaBoxTagAvatarLabel>{fallbackText}</UTextareaBoxTagAvatarLabel>
        </UTextareaBoxTagAvatarFallback>
      }
    />
  );
};

export type TextareaBoxAvatarWithIconProps = Omit<UTextareaBoxTagAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (className: string) => React.ReactNode;
};
export const TextareaBoxAvatarWithIconProps = ({
  imageProps,
  fallbackIcon,
  ...props
}: TextareaBoxAvatarWithIconProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <TextareaBoxTagAvatarWithIconLayout
      renderRoot={(children, className) => (
        <UTextareaBoxTagAvatarRoot {...props} className={className}>
          {children}
        </UTextareaBoxTagAvatarRoot>
      )}
      styleProps={{ className: props.className, textareaProps }}
      iconSlot={
        fallbackIcon && (
          <UTextareaBoxTagAvatarFallback>
            <UTextareaBoxTagAvatarIcon>{fallbackIcon}</UTextareaBoxTagAvatarIcon>
          </UTextareaBoxTagAvatarFallback>
        )
      }
      imageSlot={imageProps && <UTextareaBoxTagAvatarImage {...imageProps} />}
    />
  );
};
