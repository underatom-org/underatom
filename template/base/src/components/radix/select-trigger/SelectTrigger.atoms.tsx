import { AvatarImageProps } from "@radix-ui/react-avatar";
import {
  SelectTriggerBoxAvatarLayout,
  SelectTriggerBoxAvatarWithIconLayout,
  SelectTriggerBoxLayout,
  SelectTriggerBoxTagAvatarLayout,
  SelectTriggerBoxTagAvatarWithIconLayout,
  SelectTriggerBoxTagDismissLayout,
  SelectTriggerBoxTagLayout,
  SelectTriggerBoxTagWithAvatarLayout,
  SelectTriggerBoxTagWithIconLayout,
  SelectTriggerBoxWithAvatarLayout,
  SelectTriggerBoxWithTagsLayout,
  SelectTriggerLayout,
} from "../../../styles/select-trigger";
import {
  USelectTriggerAsterisk,
  USelectTriggerBoxAvatarIcon,
  USelectTriggerBoxAvatarImage,
  USelectTriggerBoxAvatarLabel,
  USelectTriggerBoxAvatarRoot,
  USelectTriggerBoxAvatarRootProps,
  USelectTriggerBoxCaret,
  USelectTriggerBoxIcon,
  USelectTriggerBoxRoot,
  USelectTriggerBoxRootProps,
  USelectTriggerBoxTagAvatarIcon,
  USelectTriggerBoxTagAvatarImage,
  USelectTriggerBoxTagAvatarLabel,
  USelectTriggerBoxTagAvatarRoot,
  USelectTriggerBoxTagAvatarRootProps,
  USelectTriggerBoxTagDismissIcon,
  USelectTriggerBoxTagDismissRoot,
  USelectTriggerBoxTagDismissRootProps,
  USelectTriggerBoxTagIcon,
  USelectTriggerBoxTagLabel,
  USelectTriggerBoxTagLabelProps,
  USelectTriggerBoxTagRoot,
  USelectTriggerBoxTagRootProps,
  USelectTriggerBoxText,
  USelectTriggerBoxTextProps,
  USelectTriggerDescription,
  USelectTriggerLabel,
  USelectTriggerRoot,
  USelectTriggerRootProps,
  useSelectTriggerInternalProvider,
} from "./SelectTrigger.underatoms";
import { forwardRef, ReactNode } from "react";

/*
  ====================================
  SelectTrigger
  ====================================
*/
export type SelectTriggerProps = Omit<USelectTriggerRootProps, "children"> & {
  label?: string;
  description?: string;
  boxSlot?: ReactNode;
};
export const SelectTrigger = ({ label, description, boxSlot, ...props }: SelectTriggerProps) => (
  <SelectTriggerLayout
    renderRoot={(children, className) => (
      <USelectTriggerRoot {...props} className={className}>
        {children}
      </USelectTriggerRoot>
    )}
    styleProps={{ className: props.className, selectTriggerProps: props }}
    labelSlot={label && <USelectTriggerLabel>{label}</USelectTriggerLabel>}
    descriptionSlot={description && <USelectTriggerDescription>{description}</USelectTriggerDescription>}
    asteriskSlot={props.required && <USelectTriggerAsterisk />}
    boxSlot={<>{boxSlot}</>}
  />
);

/*
  ====================================
  SelectTriggerBox
  ====================================
*/
export type SelectTriggerBoxProps = USelectTriggerBoxRootProps & {
  icon?: (className: string) => ReactNode;
  textProps?: USelectTriggerBoxTextProps;
};

export const SelectTriggerBox = forwardRef<HTMLButtonElement, SelectTriggerBoxProps>(
  ({ icon, textProps, ...props }, forwardedRef) => {
    const selectTriggerProps = useSelectTriggerInternalProvider();
    return (
      <SelectTriggerBoxLayout
        renderRoot={(children, className) => (
          <USelectTriggerBoxRoot ref={forwardedRef} {...props} className={className}>
            {children}
          </USelectTriggerBoxRoot>
        )}
        styleProps={{ className: props.className, selectTriggerProps }}
        iconSlot={icon && <USelectTriggerBoxIcon>{icon}</USelectTriggerBoxIcon>}
        textSlot={<USelectTriggerBoxText {...textProps} />}
        caretSlot={<USelectTriggerBoxCaret />}
      />
    );
  },
);

export type SelectTriggerBoxWithAvatar = USelectTriggerBoxRootProps & {
  avatarSlot?: ReactNode;
  textProps?: USelectTriggerBoxTextProps;
};
export const SelectTriggerBoxWithAvatar = ({ avatarSlot, textProps, ...props }: SelectTriggerBoxWithAvatar) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <SelectTriggerBoxWithAvatarLayout
      renderRoot={(children, className) => (
        <USelectTriggerBoxRoot {...props} className={className}>
          {children}
        </USelectTriggerBoxRoot>
      )}
      styleProps={{ className: props.className, selectTriggerProps }}
      avatarSlot={avatarSlot}
      textSlot={<USelectTriggerBoxText {...textProps} />}
      caretSlot={<USelectTriggerBoxCaret />}
    />
  );
};
export type SelectTriggerBoxWithTags = USelectTriggerBoxRootProps & {
  tagSlots: ReactNode;
  textProps?: USelectTriggerBoxTextProps;
};
export const SelectTriggerBoxWithTags = ({ tagSlots, textProps, ...props }: SelectTriggerBoxWithTags) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <SelectTriggerBoxWithTagsLayout
      renderRoot={(children, className) => (
        <USelectTriggerBoxRoot {...props} className={className}>
          {children}
        </USelectTriggerBoxRoot>
      )}
      styleProps={{ className: props.className, selectTriggerProps }}
      tagSlots={tagSlots}
      caretSlot={<USelectTriggerBoxCaret />}
      textSlot={textProps?.hidden ? undefined : <USelectTriggerBoxText {...textProps} />}
    />
  );
};

/*
  ====================================
  SelectTriggerBoxAvatar
  ====================================
*/

export type SelectTriggerBoxAvatarProps = Omit<USelectTriggerBoxAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const SelectTriggerBoxAvatar = ({ imageProps, fallbackText, ...props }: SelectTriggerBoxAvatarProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <SelectTriggerBoxAvatarLayout
      renderRoot={(children, className) => (
        <USelectTriggerBoxAvatarRoot {...props} className={className}>
          {children}
        </USelectTriggerBoxAvatarRoot>
      )}
      styleProps={{ className: props.className, selectTriggerProps }}
      imageSlot={<USelectTriggerBoxAvatarImage {...imageProps} />}
      labelSlot={fallbackText && <USelectTriggerBoxAvatarLabel>{fallbackText}</USelectTriggerBoxAvatarLabel>}
    />
  );
};

export type SelectTriggerBoxAvatarWithIcon = Omit<USelectTriggerBoxAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (className: string) => ReactNode;
};
export const SelectTriggerBoxAvatarWithIcon = ({
  imageProps,
  fallbackIcon,
  ...props
}: SelectTriggerBoxAvatarWithIcon) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <SelectTriggerBoxAvatarWithIconLayout
      renderRoot={(children, className) => (
        <USelectTriggerBoxAvatarRoot {...props} className={className}>
          {children}
        </USelectTriggerBoxAvatarRoot>
      )}
      styleProps={{ className: props.className, selectTriggerProps }}
      iconSlot={fallbackIcon && <USelectTriggerBoxAvatarIcon>{fallbackIcon}</USelectTriggerBoxAvatarIcon>}
      imageSlot={<USelectTriggerBoxAvatarImage {...imageProps} />}
    />
  );
};

/*
  ====================================
  SelectTriggerBoxTag
  ====================================
*/

export type SelectTriggerBoxTagProps = USelectTriggerBoxTagRootProps & {
  labelProps?: USelectTriggerBoxTagLabelProps;
  onDismiss?: () => void;
};
export const SelectTriggerBoxTag = ({ labelProps, onDismiss, ...props }: SelectTriggerBoxTagProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <SelectTriggerBoxTagLayout
      renderRoot={(children, className) => (
        <USelectTriggerBoxTagRoot {...props} className={className}>
          {children}
        </USelectTriggerBoxTagRoot>
      )}
      styleProps={{ className: props.className, selectTriggerProps }}
      labelSlot={<USelectTriggerBoxTagLabel {...labelProps} />}
      dismissSlot={onDismiss && <SelectTriggerBoxTagDismiss onPress={onDismiss} />}
    />
  );
};

export type SelectTriggerBoxTagWithIconProps = USelectTriggerBoxTagRootProps & {
  icon?: (className: string) => ReactNode;
  labelProps?: USelectTriggerBoxTagLabelProps;
  onDismiss?: () => void;
};
export const SelectTriggerBoxTagWithIcon = ({
  icon,
  labelProps,
  onDismiss,
  ...props
}: SelectTriggerBoxTagWithIconProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <SelectTriggerBoxTagWithIconLayout
      renderRoot={(children, className) => (
        <USelectTriggerBoxTagRoot {...props} className={className}>
          {children}
        </USelectTriggerBoxTagRoot>
      )}
      styleProps={{ className: props.className, selectTriggerProps }}
      iconSlot={icon && <USelectTriggerBoxTagIcon>{icon}</USelectTriggerBoxTagIcon>}
      labelSlot={<USelectTriggerBoxTagLabel {...labelProps} />}
      dismissSlot={onDismiss && <SelectTriggerBoxTagDismiss onPress={onDismiss} />}
    />
  );
};

export type SelectTriggerBoxTagWithAvatarProps = USelectTriggerBoxTagRootProps & {
  labelProps?: USelectTriggerBoxTagLabelProps;
  onDismiss?: () => void;
  avatarSlot?: ReactNode;
};
export const SelectTriggerBoxTagWithAvatar = ({
  avatarSlot,
  labelProps,
  onDismiss,
  ...props
}: SelectTriggerBoxTagWithAvatarProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <SelectTriggerBoxTagWithAvatarLayout
      renderRoot={(children, className) => (
        <USelectTriggerBoxTagRoot {...props} className={className}>
          {children}
        </USelectTriggerBoxTagRoot>
      )}
      styleProps={{ className: props.className, selectTriggerProps }}
      labelSlot={<USelectTriggerBoxTagLabel {...labelProps} />}
      dismissSlot={onDismiss && <SelectTriggerBoxTagDismiss onPress={onDismiss} />}
      avatarSlot={avatarSlot}
    />
  );
};

/*
  ====================================
  SelectTriggerBoxTagDismiss
  ====================================
*/

export type SelectTriggerBoxTagDismissProps = USelectTriggerBoxTagDismissRootProps;
export const SelectTriggerBoxTagDismiss = (props: SelectTriggerBoxTagDismissProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <SelectTriggerBoxTagDismissLayout
      renderRoot={(children, className) => (
        <USelectTriggerBoxTagDismissRoot {...props} className={className}>
          {children}
        </USelectTriggerBoxTagDismissRoot>
      )}
      styleProps={{ className: props.className, selectTriggerProps }}
      iconSlot={<USelectTriggerBoxTagDismissIcon />}
    />
  );
};

/*
  ====================================
  SelectTriggerBoxTagAvatar
  ====================================
*/

export type SelectTriggerBoxTagAvatar = Omit<USelectTriggerBoxTagAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const SelectTriggerBoxTagAvatar = ({ imageProps, fallbackText, ...props }: SelectTriggerBoxTagAvatar) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <SelectTriggerBoxTagAvatarLayout
      renderRoot={(children, className) => (
        <USelectTriggerBoxTagAvatarRoot {...props} className={className}>
          {children}
        </USelectTriggerBoxTagAvatarRoot>
      )}
      styleProps={{ className: props.className, selectTriggerProps }}
      imageSlot={imageProps && <USelectTriggerBoxTagAvatarImage {...imageProps} />}
      labelSlot={fallbackText && <USelectTriggerBoxTagAvatarLabel>{fallbackText}</USelectTriggerBoxTagAvatarLabel>}
    />
  );
};
export type SelectTriggerBoxTagAvatarWithIcon = Omit<USelectTriggerBoxTagAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon: (className: string) => ReactNode;
};
export const SelectTriggerBoxTagAvatarWithIcon = ({
  imageProps,
  fallbackIcon,
  ...props
}: SelectTriggerBoxTagAvatarWithIcon) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <SelectTriggerBoxTagAvatarWithIconLayout
      renderRoot={(children, className) => (
        <USelectTriggerBoxTagAvatarRoot {...props} className={className}>
          {children}
        </USelectTriggerBoxTagAvatarRoot>
      )}
      styleProps={{ className: props.className, selectTriggerProps }}
      imageSlot={imageProps && <USelectTriggerBoxTagAvatarImage {...imageProps} />}
      iconSlot={fallbackIcon && <USelectTriggerBoxTagAvatarIcon>{fallbackIcon}</USelectTriggerBoxTagAvatarIcon>}
    />
  );
};
