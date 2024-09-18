import { AvatarImageProps } from "@radix-ui/react-avatar";
import {
  UCommandEmptyImage,
  UCommandEmptyImageProps,
  UCommandEmptyRoot,
  UCommandEmptyRootProps,
  UCommandEmptyText,
  UCommandFooterButtonIcon,
  UCommandFooterButtonRoot,
  UCommandFooterButtonRootProps,
  UCommandFooterElementKBDIcon,
  UCommandFooterElementKBDRoot,
  UCommandFooterElementKBDRootProps,
  UCommandFooterElementRoot,
  UCommandFooterElementRootProps,
  UCommandFooterElementText,
  UCommandFooterRoot,
  UCommandFooterRootProps,
  UCommandGroupItemBoxAvatarFallback,
  UCommandGroupItemBoxAvatarIcon,
  UCommandGroupItemBoxAvatarImage,
  UCommandGroupItemBoxAvatarLabel,
  UCommandGroupItemBoxAvatarRoot,
  UCommandGroupItemBoxAvatarRootProps,
  UCommandGroupItemBoxBadgeIcon,
  UCommandGroupItemBoxBadgeLabel,
  UCommandGroupItemBoxBadgeRoot,
  UCommandGroupItemBoxBadgeRootProps,
  UCommandGroupItemBoxButtonIcon,
  UCommandGroupItemBoxButtonRoot,
  UCommandGroupItemBoxButtonRootProps,
  UCommandGroupItemBoxIcon,
  UCommandGroupItemBoxLabel,
  UCommandGroupItemBoxRoot,
  UCommandGroupItemBoxRootProps,
  UCommandGroupItemCheckIcon,
  UCommandGroupItemKBDIcon,
  UCommandGroupItemKBDLabel,
  UCommandGroupItemKBDRoot,
  UCommandGroupItemKBDRootProps,
  UCommandGroupItemRoot,
  UCommandGroupItemRootProps,
  UCommandGroupRoot,
  UCommandGroupRootProps,
  UCommandGroupTitle,
  UCommandRoot,
  UCommandRootProps,
  UCommandSearchClearIcon,
  UCommandSearchClearRoot,
  UCommandSearchClearRootProps,
  UCommandSearchIcon,
  UCommandSearchRoot,
  UCommandSearchRootProps,
  UCommandSearchText,
  URadixCommandGroupItemBoxSwitchHandle,
  URadixCommandGroupItemBoxSwitchRoot,
  URadixCommandGroupItemBoxSwitchRootProps,
  useCommandGroupInternalProvider,
  useCommandGroupItemInternalProvider,
  useCommandInternalProvider,
} from "./Command.underatoms";
import {
  CommandEmptyLayout,
  CommandFooterButtonLayout,
  CommandFooterElementIconKBDLayout,
  CommandFooterElementKBDLayout,
  CommandFooterElementKBDWithIconLayout,
  CommandFooterElementLayout,
  CommandFooterLayout,
  CommandGroupItemBoxAvatarLayout,
  CommandGroupItemBoxBadgeLayout,
  CommandGroupItemBoxBadgeWithIconLayout,
  CommandGroupItemBoxButtonLayout,
  CommandGroupItemBoxLayout,
  CommandGroupItemBoxSwitchLayout,
  CommandGroupItemBoxWithAvatarLayout,
  CommandGroupItemKBDLayout,
  CommandGroupItemKBDWithIconLayout,
  CommandGroupItemLayout,
  CommandGroupLayout,
  CommandLayout,
  CommandSearchClearLayout,
  CommandSearchLayout,
} from "../../../styles/command";
import { ReactNode } from "react";

/*
  ====================================
  Command
  ====================================
*/
export type CommandProps = UCommandRootProps & {
  searchSlot: ReactNode;
  groupSlots: ReactNode;
  footerSlot: ReactNode;
  emptySlot: ReactNode;
};
export const Command = ({ searchSlot, groupSlots, footerSlot, emptySlot, ...props }: CommandProps) => (
  <CommandLayout
    renderRoot={(children, className) => (
      <UCommandRoot {...props} className={className}>
        {children}
      </UCommandRoot>
    )}
    styleProps={{ className: props.className, commandProps: props }}
    searchSlot={searchSlot}
    groupSlots={groupSlots}
    footerSlot={footerSlot}
    emptySlot={emptySlot}
  />
);

/*
  ====================================
  CommandSearch
  ====================================
*/

export type CommandSearchProps = Omit<UCommandSearchRootProps, "children"> & {
  icon?: (className: string) => React.ReactNode;
  onClear?: () => void;
};
export const CommandSearch = ({ icon, onClear, ...props }: CommandSearchProps) => {
  const commandProps = useCommandInternalProvider();
  return (
    <CommandSearchLayout
      renderRoot={(children, className) => (
        <UCommandSearchRoot {...props} className={className}>
          {children}
        </UCommandSearchRoot>
      )}
      styleProps={{ className: props.className, commandProps }}
      iconSlot={icon && <UCommandSearchIcon>{icon}</UCommandSearchIcon>}
      textSlot={<UCommandSearchText />}
      clearSlot={onClear && <CommandSearchClear onPress={onClear} />}
    />
  );
};

/*
  ====================================
  CommandSearchClear
  ====================================
*/

export type CommandSearchClearProps = Omit<UCommandSearchClearRootProps, "children">;
export const CommandSearchClear = (props: CommandSearchClearProps) => {
  const commandProps = useCommandInternalProvider();
  return (
    <CommandSearchClearLayout
      renderRoot={(children, className) => (
        <UCommandSearchClearRoot {...props} className={className}>
          {children}
        </UCommandSearchClearRoot>
      )}
      styleProps={{ className: props.className, commandProps }}
      iconSlot={<UCommandSearchClearIcon />}
    />
  );
};

/*
  ====================================
  CommandFooter
  ====================================
*/

export type CommandFooterProps = Omit<UCommandFooterRootProps, "children"> & {
  elementSlots: ReactNode;
  buttonSlot?: ReactNode;
};
export const CommandFooter = ({ elementSlots, buttonSlot, ...props }: CommandFooterProps) => {
  const commandProps = useCommandInternalProvider();
  return (
    <CommandFooterLayout
      renderRoot={(children, className) => (
        <UCommandFooterRoot {...props} className={className}>
          {children}
        </UCommandFooterRoot>
      )}
      styleProps={{ className: props.className, commandProps }}
      elementSlots={elementSlots}
      buttonSlot={buttonSlot}
    />
  );
};

/*
  ====================================
  CommandFooterButton
  ====================================
*/

export type CommandFooterButtonProps = Omit<UCommandFooterButtonRootProps, "children"> & {
  icon: (className: string) => ReactNode;
};
export const CommandFooterButton = ({ icon, ...props }: CommandFooterButtonProps) => {
  const commandProps = useCommandInternalProvider();
  return (
    <CommandFooterButtonLayout
      renderRoot={(children, className) => (
        <UCommandFooterButtonRoot {...props} className={className}>
          {children}
        </UCommandFooterButtonRoot>
      )}
      styleProps={{ className: props.className, commandProps }}
      iconSlot={<UCommandFooterButtonIcon>{icon}</UCommandFooterButtonIcon>}
    />
  );
};

/*
  ====================================
  CommandFooterElement
  ====================================
*/

export type CommandFooterElementProps = Omit<UCommandFooterElementRootProps, "children"> & {
  leftLabel?: string;
  rightLabel?: string;
  kbdSlot1?: ReactNode;
  kbdSlot2?: ReactNode;
  kbdSlot3?: ReactNode;
  kbdSlot4?: ReactNode;
};
export const CommandFooterElement = ({
  leftLabel,
  rightLabel,
  kbdSlot1,
  kbdSlot2,
  kbdSlot3,
  kbdSlot4,
  ...props
}: CommandFooterElementProps) => {
  const commandProps = useCommandInternalProvider();
  return (
    <CommandFooterElementLayout
      renderRoot={(children, className) => (
        <UCommandFooterElementRoot {...props} className={className}>
          {children}
        </UCommandFooterElementRoot>
      )}
      styleProps={{ className: props.className, commandProps }}
      textSlot1={leftLabel && <UCommandFooterElementText>{leftLabel}</UCommandFooterElementText>}
      textSlot2={rightLabel && <UCommandFooterElementText>{rightLabel}</UCommandFooterElementText>}
      kBDSlot1={kbdSlot1}
      kBDSlot2={kbdSlot2}
      kBDSlot3={kbdSlot3}
      kBDSlot4={kbdSlot4}
    />
  );
};

/*
  ====================================
  CommandFooterElementKBD
  ====================================
*/

export type CommandFooterElementKBDProps = Omit<UCommandFooterElementKBDRootProps, "children"> & {
  label?: string;
};
export const CommandFooterElementKBD = ({ label, ...props }: CommandFooterElementKBDProps) => {
  const commandProps = useCommandInternalProvider();
  return (
    <CommandFooterElementKBDLayout
      renderRoot={(children, className) => (
        <UCommandFooterElementKBDRoot {...props} className={className}>
          {children}
        </UCommandFooterElementKBDRoot>
      )}
      styleProps={{ className: props.className, commandProps }}
      labelSlot={label && <UCommandFooterElementText>{label}</UCommandFooterElementText>}
    />
  );
};

export type CommandFooterElementIconKBDProps = Omit<UCommandFooterElementKBDRootProps, "children"> & {
  icon?: (className: string) => ReactNode;
};
export const CommandFooterElementIconKBD = ({ icon, ...props }: CommandFooterElementIconKBDProps) => {
  const commandProps = useCommandInternalProvider();
  return (
    <CommandFooterElementIconKBDLayout
      renderRoot={(children, className) => (
        <UCommandFooterElementKBDRoot {...props} className={className}>
          {children}
        </UCommandFooterElementKBDRoot>
      )}
      styleProps={{ className: props.className, commandProps }}
      iconSlot={icon && <UCommandFooterElementKBDIcon>{icon}</UCommandFooterElementKBDIcon>}
    />
  );
};

export type CommandFooterElementKBDWithIconProps = Omit<UCommandFooterElementKBDRootProps, "children"> & {
  icon?: (className: string) => ReactNode;
  label?: string;
};
export const CommandFooterElementKBDWithIcon = ({ icon, label, ...props }: CommandFooterElementKBDWithIconProps) => {
  const commandProps = useCommandInternalProvider();
  return (
    <CommandFooterElementKBDWithIconLayout
      renderRoot={(children, className) => (
        <UCommandFooterElementKBDRoot {...props} className={className}>
          {children}
        </UCommandFooterElementKBDRoot>
      )}
      styleProps={{ className: props.className, commandProps }}
      iconSlot={icon && <UCommandFooterElementKBDIcon>{icon}</UCommandFooterElementKBDIcon>}
      labelSlot={label && <UCommandFooterElementText>{label}</UCommandFooterElementText>}
    />
  );
};

/*
  ====================================
  CommandEmpty
  ====================================
*/

export type CommandEmptyProps = Omit<UCommandEmptyRootProps, "children"> & {
  text: string;
  image: UCommandEmptyImageProps;
};
export const CommandEmpty = ({ text, image, ...props }: CommandEmptyProps) => {
  const commandProps = useCommandInternalProvider();
  return (
    <CommandEmptyLayout
      renderRoot={(children, className) => (
        <UCommandEmptyRoot {...props} className={className}>
          {children}
        </UCommandEmptyRoot>
      )}
      styleProps={{ className: props.className, commandProps }}
      textSlot={<UCommandEmptyText>{text}</UCommandEmptyText>}
      imageSlot={<UCommandEmptyImage {...image} />}
    />
  );
};

/*
  ====================================
  CommandGroup
  ====================================
*/

export type CommandGroupProps = Omit<UCommandGroupRootProps, "children"> & {
  title?: string;
  itemSlots: ReactNode[];
};

export const CommandGroup = ({ title, itemSlots, ...props }: CommandGroupProps) => {
  const commandProps = useCommandInternalProvider();
  return (
    <CommandGroupLayout
      renderRoot={(children, className) => (
        <UCommandGroupRoot {...props} className={className}>
          {children}
        </UCommandGroupRoot>
      )}
      styleProps={{ className: props.className, commandProps, commandGroupProps: props }}
      titleSlot={title && <UCommandGroupTitle>{title}</UCommandGroupTitle>}
      itemSlots={itemSlots}
    />
  );
};

/*
  ====================================
  CommandGroupItem
  ====================================
*/

export type CommandGroupItemProps = Omit<UCommandGroupItemRootProps, "children"> & {
  boxSlot: ReactNode;
  kbdSlot?: ReactNode;
};
export const CommandGroupItem = ({ boxSlot, kbdSlot, ...props }: CommandGroupItemProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  return (
    <CommandGroupItemLayout
      renderRoot={(children, className) => (
        <UCommandGroupItemRoot {...props} className={className}>
          {children}
        </UCommandGroupItemRoot>
      )}
      styleProps={{ className: props.className, commandProps, commandGroupProps, commandGroupItemProps: props }}
      boxSlot={boxSlot}
      kBDSlot={kbdSlot}
      checkIconSlot={<UCommandGroupItemCheckIcon />}
    />
  );
};

/*
  ====================================
  CommandGroupItemKBD
  ====================================
*/

export type CommandGroupItemKBDProps = Omit<UCommandGroupItemKBDRootProps, "children"> & {
  label: string;
};
export const CommandGroupItemKBD = ({ label, ...props }: CommandGroupItemKBDProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <CommandGroupItemKBDLayout
      renderRoot={(children, className) => (
        <UCommandGroupItemKBDRoot {...props} className={className}>
          {children}
        </UCommandGroupItemKBDRoot>
      )}
      styleProps={{ className: props.className, commandProps, commandGroupProps, commandGroupItemProps }}
      labelSlot={<UCommandGroupItemKBDLabel>{label}</UCommandGroupItemKBDLabel>}
    />
  );
};

export type CommandGroupItemKBDWithIconProps = Omit<UCommandGroupItemKBDRootProps, "children"> & {
  icon?: (className: string) => React.ReactNode;
  label?: string;
};
export const CommandGroupItemKBDWithIcon = ({ icon, label, ...props }: CommandGroupItemKBDWithIconProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <CommandGroupItemKBDWithIconLayout
      renderRoot={(children, className) => (
        <UCommandGroupItemKBDRoot {...props} className={className}>
          {children}
        </UCommandGroupItemKBDRoot>
      )}
      styleProps={{ className: props.className, commandProps, commandGroupProps, commandGroupItemProps }}
      iconSlot={icon && <UCommandGroupItemKBDIcon>{icon}</UCommandGroupItemKBDIcon>}
      labelSlot={label && <UCommandGroupItemKBDLabel>{label}</UCommandGroupItemKBDLabel>}
    />
  );
};

/*
  ====================================
  CommandGroupItemBox
  ====================================
*/

export type CommandGroupItemBoxProps = Omit<UCommandGroupItemBoxRootProps, "children"> & {
  icon?: (className: string) => React.ReactNode;
  label: string;
  badgeSlot?: ReactNode;
  switchSlot?: ReactNode;
  buttonSlot1?: ReactNode;
  buttonSlot2?: ReactNode;
  buttonSlot3?: ReactNode;
};
export const CommandGroupItemBox = ({
  icon,
  label,
  badgeSlot,
  switchSlot,
  buttonSlot1,
  buttonSlot2,
  buttonSlot3,
  ...props
}: CommandGroupItemBoxProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <CommandGroupItemBoxLayout
      renderRoot={(children, className) => (
        <UCommandGroupItemBoxRoot {...props} className={className}>
          {children}
        </UCommandGroupItemBoxRoot>
      )}
      styleProps={{ className: props.className, commandProps, commandGroupProps, commandGroupItemProps }}
      iconSlot={icon && <UCommandGroupItemBoxIcon>{icon}</UCommandGroupItemBoxIcon>}
      labelSlot={<UCommandGroupItemBoxLabel>{label}</UCommandGroupItemBoxLabel>}
      badgeSlot={badgeSlot}
      switchSlot={switchSlot}
      buttonSlot1={buttonSlot1}
      buttonSlot2={buttonSlot2}
      buttonSlot3={buttonSlot3}
    />
  );
};

export type CommandGroupItemBoxWithAvatarProps = Omit<UCommandGroupItemBoxRootProps, "children"> & {
  label: string;
  avatarSlot?: ReactNode;
  badgeSlot?: ReactNode;
  switchSlot?: ReactNode;
  buttonSlot1?: ReactNode;
  buttonSlot2?: ReactNode;
  buttonSlot3?: ReactNode;
};
export const CommandGroupItemBoxWithAvatar = ({
  label,
  avatarSlot,
  badgeSlot,
  switchSlot,
  buttonSlot1,
  buttonSlot2,
  buttonSlot3,
  ...props
}: CommandGroupItemBoxWithAvatarProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <CommandGroupItemBoxWithAvatarLayout
      renderRoot={(children, className) => (
        <UCommandGroupItemBoxRoot {...props} className={className}>
          {children}
        </UCommandGroupItemBoxRoot>
      )}
      styleProps={{ className: props.className, commandProps, commandGroupProps, commandGroupItemProps }}
      avatarSlot={avatarSlot}
      labelSlot={<UCommandGroupItemBoxLabel>{label}</UCommandGroupItemBoxLabel>}
      badgeSlot={badgeSlot}
      switchSlot={switchSlot}
      buttonSlot1={buttonSlot1}
      buttonSlot2={buttonSlot2}
      buttonSlot3={buttonSlot3}
    />
  );
};

/*
====================================
CommandGroupItemBoxAvatar
====================================
*/
export type CommandGroupItemBoxAvatarProps = Omit<UCommandGroupItemBoxAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};

export const CommandGroupItemBoxAvatar = ({ imageProps, fallbackText, ...props }: CommandGroupItemBoxAvatarProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <CommandGroupItemBoxAvatarLayout
      renderRoot={(children, className) => (
        <UCommandGroupItemBoxAvatarRoot {...props} className={className}>
          {children}
        </UCommandGroupItemBoxAvatarRoot>
      )}
      styleProps={{ className: props.className, commandProps, commandGroupProps, commandGroupItemProps }}
      imageSlot={imageProps && <UCommandGroupItemBoxAvatarImage {...imageProps} />}
      labelSlot={
        fallbackText && (
          <UCommandGroupItemBoxAvatarFallback>
            <UCommandGroupItemBoxAvatarLabel>{fallbackText}</UCommandGroupItemBoxAvatarLabel>{" "}
          </UCommandGroupItemBoxAvatarFallback>
        )
      }
    />
  );
};

export type CommandGroupItemBoxAvatarWithIconProps = Omit<UCommandGroupItemBoxAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (className: string) => React.ReactNode;
};
export const CommandGroupItemBoxAvatarWithIcon = ({
  imageProps,
  fallbackIcon,
  ...props
}: CommandGroupItemBoxAvatarWithIconProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <CommandGroupItemBoxAvatarLayout
      renderRoot={(children, className) => (
        <UCommandGroupItemBoxAvatarRoot {...props} className={className}>
          {children}
        </UCommandGroupItemBoxAvatarRoot>
      )}
      styleProps={{ className: props.className, commandProps, commandGroupProps, commandGroupItemProps }}
      imageSlot={imageProps && <UCommandGroupItemBoxAvatarImage {...imageProps} />}
      labelSlot={
        fallbackIcon && (
          <UCommandGroupItemBoxAvatarFallback>
            <UCommandGroupItemBoxAvatarIcon>{fallbackIcon}</UCommandGroupItemBoxAvatarIcon>
          </UCommandGroupItemBoxAvatarFallback>
        )
      }
    />
  );
};

/*
  ====================================
  CommandGroupItemBoxSwitch
  ====================================
*/

export type CommandGroupItemBoxSwitchProps = Omit<URadixCommandGroupItemBoxSwitchRootProps, "children">;
export const CommandGroupItemBoxSwitch = (props: CommandGroupItemBoxSwitchProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <CommandGroupItemBoxSwitchLayout
      renderRoot={(children, className) => (
        <URadixCommandGroupItemBoxSwitchRoot {...props} className={className}>
          {children}
        </URadixCommandGroupItemBoxSwitchRoot>
      )}
      styleProps={{ className: props.className, commandProps, commandGroupProps, commandGroupItemProps }}
      handleSlot={<URadixCommandGroupItemBoxSwitchHandle />}
    />
  );
};

/*
  ====================================
  CommandGroupItemBoxButton
  ====================================
*/

export type CommandGroupItemBoxButtonProps = Omit<UCommandGroupItemBoxButtonRootProps, "children"> & {
  icon: (className: string) => React.ReactNode;
};
export const CommandGroupItemBoxButton = ({ icon, ...props }: CommandGroupItemBoxButtonProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <CommandGroupItemBoxButtonLayout
      renderRoot={(children, className) => (
        <UCommandGroupItemBoxButtonRoot {...props} className={className}>
          {children}
        </UCommandGroupItemBoxButtonRoot>
      )}
      styleProps={{ className: props.className, commandProps, commandGroupProps, commandGroupItemProps }}
      iconSlot={<UCommandGroupItemBoxButtonIcon>{icon}</UCommandGroupItemBoxButtonIcon>}
    />
  );
};

/*
  ====================================
  CommandGroupItemBoxBadge
  ====================================
*/
export type CommandGroupItemBoxBadgeProps = Omit<UCommandGroupItemBoxBadgeRootProps, "children"> & {
  label: string;
};

export const CommandGroupItemBoxBadge = ({ label, ...props }: CommandGroupItemBoxBadgeProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <CommandGroupItemBoxBadgeLayout
      renderRoot={(children, className) => (
        <UCommandGroupItemBoxBadgeRoot {...props} className={className}>
          {children}
        </UCommandGroupItemBoxBadgeRoot>
      )}
      styleProps={{
        className: props.className,
        commandProps,
        commandGroupProps,
        commandGroupItemProps,
        commandGroupItemBoxBadgeProps: props,
      }}
      labelSlot={<UCommandGroupItemBoxBadgeLabel>{label}</UCommandGroupItemBoxBadgeLabel>}
    />
  );
};

export type CommandGroupItemBoxBadgeWithIconProps = Omit<UCommandGroupItemBoxBadgeRootProps, "children"> & {
  icon?: (className: string) => React.ReactNode;
  label?: string;
};

export const CommandGroupItemBoxBadgeWithIcon = ({ icon, label, ...props }: CommandGroupItemBoxBadgeWithIconProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <CommandGroupItemBoxBadgeWithIconLayout
      renderRoot={(children, className) => (
        <UCommandGroupItemBoxBadgeRoot {...props} className={className}>
          {children}
        </UCommandGroupItemBoxBadgeRoot>
      )}
      styleProps={{
        className: props.className,
        commandProps,
        commandGroupProps,
        commandGroupItemProps,
        commandGroupItemBoxBadgeProps: props,
      }}
      iconSlot={icon && <UCommandGroupItemBoxBadgeIcon>{icon}</UCommandGroupItemBoxBadgeIcon>}
      labelSlot={label && <UCommandGroupItemBoxBadgeLabel>{label}</UCommandGroupItemBoxBadgeLabel>}
    />
  );
};
