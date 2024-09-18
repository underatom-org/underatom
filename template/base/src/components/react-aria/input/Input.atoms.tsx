import { AvatarImageProps } from "@radix-ui/react-avatar";
import {
  InputBoxClearLayout,
  InputBoxLayout,
  InputBoxTagAvatarLayout,
  InputBoxTagDismissLayout,
  InputBoxTagLayout,
  InputBoxTagWithAvatarLayout,
  InputBoxTagWithDotLayout,
  InputBoxTagWithIconLayout,
  InputBoxWithSegmentsLayout,
  InputBoxWithTagsLayout,
  InputLayout,
} from "../../../styles/input";
import {
  UInputAsterisk,
  UInputBoxClearIcon,
  UInputBoxClearRoot,
  UInputBoxClearRootProps,
  UInputBoxLeadingIcon,
  UInputBoxRoot,
  UInputBoxRootProps,
  UInputBoxTagAvatarFallback,
  UInputBoxTagAvatarIcon,
  UInputBoxTagAvatarImage,
  UInputBoxTagAvatarLabel,
  UInputBoxTagAvatarRoot,
  UInputBoxTagAvatarRootProps,
  UInputBoxTagDismissIcon,
  UInputBoxTagDismissRoot,
  UInputBoxTagDismissRootProps,
  UInputBoxTagDot,
  UInputBoxTagIcon,
  UInputBoxTagLabel,
  UInputBoxTagRoot,
  UInputBoxTagRootProps,
  UInputBoxText,
  UInputBoxTrailingIcon,
  UInputDescription,
  UInputLabel,
  UInputRoot,
  UInputRootProps,
  useInputRootParentProps,
} from "./Input.underatoms";
import React from "react";

/*
  ====================================
  Input
  ====================================
*/

export type InputProps = UInputRootProps & {
  label?: string;
  description?: string;
  boxSlot: React.ReactNode;
};

export const Input = ({ label, description, boxSlot, ...props }: InputProps) => (
  <InputLayout
    renderRoot={(children, className) => (
      <UInputRoot {...props} className={className}>
        {children}
      </UInputRoot>
    )}
    styleProps={{ className: props.className, inputProps: props }}
    labelSlot={<UInputLabel>{label}</UInputLabel>}
    descriptionSlot={<UInputDescription>{description}</UInputDescription>}
    asteriskSlot={<UInputAsterisk />}
    boxSlot={boxSlot}
  />
);

/*
  ====================================
  InputBox
  ====================================
*/

export type InputBoxProps = UInputBoxRootProps & {
  trailingIcon?: (className: string) => React.ReactNode;
  leadingIcon?: (className: string) => React.ReactNode;
  onClear?: () => void;
};
export const InputBox = ({ trailingIcon, leadingIcon, onClear, ...props }: InputBoxProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <InputBoxLayout
      renderRoot={(children, className) => (
        <UInputBoxRoot {...props} className={className}>
          {children}
        </UInputBoxRoot>
      )}
      styleProps={{ className: props.className, inputProps }}
      textSlot={<UInputBoxText />}
      trailingIconSlot={trailingIcon && <UInputBoxTrailingIcon>{trailingIcon}</UInputBoxTrailingIcon>}
      leadingIconSlot={leadingIcon && <UInputBoxLeadingIcon>{leadingIcon}</UInputBoxLeadingIcon>}
      clearSlot={onClear && <InputBoxClear onPress={onClear} />}
    />
  );
};

export type InputBoxWithSegmentsProps = UInputBoxRootProps & {
  trailingIcon?: (className: string) => React.ReactNode;
  segmentSlots: React.ReactNode[];
  onClear?: () => void;
};
export const InputBoxWithSegments = ({ trailingIcon, segmentSlots, onClear, ...props }: InputBoxWithSegmentsProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <InputBoxWithSegmentsLayout
      renderRoot={(children, className) => (
        <UInputBoxRoot {...props} className={className}>
          {children}
        </UInputBoxRoot>
      )}
      styleProps={{ className: props.className, inputProps }}
      trailingIconSlot={trailingIcon && <UInputBoxTrailingIcon>{trailingIcon}</UInputBoxTrailingIcon>}
      segmentSlots={segmentSlots}
      clearSlot={onClear && <InputBoxClear onPress={onClear} />}
    />
  );
};

export type InputBoxWithTagsProps = UInputBoxRootProps & {
  trailingIcon?: (className: string) => React.ReactNode;
  tagSlots?: React.ReactNode[];
  onClear?: () => void;
};
export const InputBoxWithTags = ({ trailingIcon, tagSlots, onClear, ...props }: InputBoxWithTagsProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <InputBoxWithTagsLayout
      renderRoot={(children, className) => (
        <UInputBoxRoot {...props} className={className}>
          {children}
        </UInputBoxRoot>
      )}
      styleProps={{ className: props.className, inputProps }}
      textSlot={<UInputBoxText />}
      trailingIconSlot={trailingIcon && <UInputBoxTrailingIcon>{trailingIcon}</UInputBoxTrailingIcon>}
      tagSlots={tagSlots}
      clearSlot={onClear && <InputBoxClear onPress={onClear} />}
    />
  );
};

/*
  ====================================
  InputBoxSegment
  ====================================
*/

// not implemented

/*
  ====================================
  InputBoxClear
  ====================================
*/

export type InputBoxClearProps = UInputBoxClearRootProps;

export const InputBoxClear = (props: InputBoxClearProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <InputBoxClearLayout
      renderRoot={(children, className) => (
        <UInputBoxClearRoot {...props} className={className}>
          {children}
        </UInputBoxClearRoot>
      )}
      styleProps={{ className: props.className, inputProps }}
      iconSlot={<UInputBoxClearIcon />}
    />
  );
};

/*
  ====================================
  InputBoxTag
  ====================================
*/

export type InputBoxTagProps = UInputBoxTagRootProps & {
  label?: string;
  onDismiss?: () => void;
};
export const InputBoxTag = ({ label, onDismiss, ...props }: InputBoxTagProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <InputBoxTagLayout
      renderRoot={(children, className) => (
        <UInputBoxTagRoot {...props} className={className}>
          {children}
        </UInputBoxTagRoot>
      )}
      styleProps={{ className: props.className, inputProps }}
      labelSlot={label && <UInputBoxTagLabel>{label}</UInputBoxTagLabel>}
      dismissSlot={onDismiss && <InputBoxTagDismiss onPress={onDismiss} />}
    />
  );
};

export type InputBoxTagWithIconProps = UInputBoxTagRootProps & {
  label?: string;
  icon?: (className: string) => React.ReactNode;
  onDismiss?: () => void;
};
export const InputBoxTagWithIcon = ({ label, icon, onDismiss, ...props }: InputBoxTagWithIconProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <InputBoxTagWithIconLayout
      renderRoot={(children, className) => (
        <UInputBoxTagRoot {...props} className={className}>
          {children}
        </UInputBoxTagRoot>
      )}
      styleProps={{ className: props.className, inputProps }}
      labelSlot={label && <UInputBoxTagLabel>{label}</UInputBoxTagLabel>}
      iconSlot={icon && <UInputBoxTagIcon>{icon}</UInputBoxTagIcon>}
      dismissSlot={onDismiss && <InputBoxTagDismiss onPress={onDismiss} />}
    />
  );
};

export type InputBoxTagWithDotProps = UInputBoxTagRootProps & {
  label?: string;
  onDismiss?: () => void;
};
export const InputBoxTagWithDot = ({ label, onDismiss, ...props }: InputBoxTagWithDotProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <InputBoxTagWithDotLayout
      renderRoot={(children, className) => (
        <UInputBoxTagRoot {...props} className={className}>
          {children}
        </UInputBoxTagRoot>
      )}
      styleProps={{ className: props.className, inputProps }}
      labelSlot={label && <UInputBoxTagLabel>{label}</UInputBoxTagLabel>}
      dotSlot={<UInputBoxTagDot />}
      dismissSlot={onDismiss && <InputBoxTagDismiss onPress={onDismiss} />}
    />
  );
};

export type InputBoxTagWithAvatarProps = UInputBoxTagRootProps & {
  label?: string;
  avatarSlot: React.ReactNode;
  onDismiss?: () => void;
};
export const InputBoxTagWithAvatar = ({ label, avatarSlot, onDismiss, ...props }: InputBoxTagWithAvatarProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <InputBoxTagWithAvatarLayout
      renderRoot={(children, className) => (
        <UInputBoxTagRoot {...props} className={className}>
          {children}
        </UInputBoxTagRoot>
      )}
      styleProps={{ className: props.className, inputProps }}
      labelSlot={label && <UInputBoxTagLabel>{label}</UInputBoxTagLabel>}
      avatarSlot={avatarSlot}
      dismissSlot={onDismiss && <InputBoxTagDismiss onPress={onDismiss} />}
    />
  );
};

/*
  ====================================
  InputBoxTagDismiss
  ====================================
*/

export type InputBoxTagDismissProps = UInputBoxTagDismissRootProps;

export const InputBoxTagDismiss = (props: InputBoxTagDismissProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <InputBoxTagDismissLayout
      renderRoot={(children, className) => (
        <UInputBoxTagDismissRoot {...props} className={className}>
          {children}
        </UInputBoxTagDismissRoot>
      )}
      styleProps={{ className: props.className, inputProps }}
      iconSlot={<UInputBoxTagDismissIcon />}
    />
  );
};

/*
  ====================================
  InputBoxTagAvatar
  ====================================
*/

export type InputBoxAvatarProps = Omit<UInputBoxTagAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};

export const InputBoxAvatar = ({ imageProps, fallbackText, ...props }: InputBoxAvatarProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <InputBoxTagAvatarLayout
      renderRoot={(children, className) => (
        <UInputBoxTagAvatarRoot {...props} className={className}>
          {children}
        </UInputBoxTagAvatarRoot>
      )}
      styleProps={{ className: props.className, inputProps }}
      imageSlot={imageProps && <UInputBoxTagAvatarImage {...imageProps} />}
      labelSlot={
        fallbackText && (
          <UInputBoxTagAvatarFallback>
            <UInputBoxTagAvatarLabel>{fallbackText}</UInputBoxTagAvatarLabel>
          </UInputBoxTagAvatarFallback>
        )
      }
    />
  );
};

export type InputBoxAvatarWithIconProps = Omit<UInputBoxTagAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (className: string) => React.ReactNode;
};

export const InputBoxAvatarWithIconProps = ({ imageProps, fallbackIcon, ...props }: InputBoxAvatarWithIconProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <InputBoxTagAvatarLayout
      renderRoot={(children, className) => (
        <UInputBoxTagAvatarRoot {...props} className={className}>
          {children}
        </UInputBoxTagAvatarRoot>
      )}
      styleProps={{ className: props.className, inputProps }}
      imageSlot={imageProps && <UInputBoxTagAvatarImage {...imageProps} />}
      labelSlot={
        fallbackIcon && (
          <UInputBoxTagAvatarFallback>
            <UInputBoxTagAvatarIcon>{fallbackIcon}</UInputBoxTagAvatarIcon>
          </UInputBoxTagAvatarFallback>
        )
      }
    />
  );
};
