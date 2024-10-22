import { AvatarImageProps } from "@radix-ui/react-avatar";
import {
  ActionPanelGroupItemBoxAvatarLayout,
  ActionPanelGroupItemBoxAvatarWithIconLayout,
  ActionPanelGroupItemBoxBadgeLayout,
  ActionPanelGroupItemBoxBadgeWithIconLayout,
  ActionPanelGroupItemBoxIconBoxLayout,
  ActionPanelGroupItemBoxLayout,
  ActionPanelGroupItemBoxSwitchLayout,
  ActionPanelGroupItemBoxWithAvatarAndDescriptionLayout,
  ActionPanelGroupItemBoxWithAvatarLayout,
  ActionPanelGroupItemBoxWithDescriptionLayout,
  ActionPanelGroupItemKBDLayout,
  ActionPanelGroupItemKBDWithIconLayout,
  ActionPanelGroupItemLayout,
  ActionPanelGroupItemWithCaretLayout,
  ActionPanelGroupItemWithKBDLayout,
  ActionPanelGroupLayout,
  ActionPanelLayout,
} from "../../../styles/action-panel";
import {
  UActionPanelGroupItemBoxBadgeIcon,
  UActionPanelGroupItemBoxBadgeLabel,
  UActionPanelGroupItemBoxBadgeRoot,
  UActionPanelGroupItemBoxBadgeRootProps,
  UActionPanelGroupItemBoxAvatarIcon,
  UActionPanelGroupItemBoxAvatarImage,
  UActionPanelGroupItemBoxAvatarLabel,
  UActionPanelGroupItemBoxAvatarRoot,
  UActionPanelGroupItemBoxAvatarRootProps,
  UActionPanelGroupItemBoxDescription,
  UActionPanelGroupItemBoxIcon,
  UActionPanelGroupItemBoxIconBoxIcon,
  UActionPanelGroupItemBoxIconBoxRoot,
  UActionPanelGroupItemBoxIconBoxRootProps,
  UActionPanelGroupItemKBDIcon,
  UActionPanelGroupItemKBDLabel,
  UActionPanelGroupItemKBDRoot,
  UActionPanelGroupItemKBDRootProps,
  UActionPanelGroupItemBoxLabel,
  UActionPanelGroupItemBoxRoot,
  UActionPanelGroupItemBoxRootProps,
  UActionPanelGroupItemBoxSupporting,
  UActionPanelGroupItemBoxSwitchHandle,
  UActionPanelGroupItemBoxSwitchRoot,
  UActionPanelGroupItemBoxSwitchRootProps,
  UActionPanelGroupItemCaret,
  UActionPanelGroupItemCheck,
  UActionPanelGroupItemRoot,
  UActionPanelGroupItemRootProps,
  UActionPanelGroupRoot,
  UActionPanelGroupRootProps,
  UActionPanelGroupTitle,
  UActionPanelRoot,
  UActionPanelRootProps,
  UActionPanelGroupCheckboxItemRootProps,
  UActionPanelGroupCheckboxItemRoot,
  UActionPanelGroupItemBoxAvatarFallback,
  useActionPanelInternalProvider,
  useActionPanelGroupInternalProvider,
  useActionPanelGroupItemInternalProvider,
} from "./ActionPanel.underatoms";

/*
  ====================================
  ActionPanel
  ====================================
*/

export type ActionPanelProps = UActionPanelRootProps;

export const ActionPanel = ({ children, ...props }: ActionPanelProps) => {
  return (
    <ActionPanelLayout
      renderRoot={(children, className) => (
        <UActionPanelRoot {...props} className={className}>
          {children}
        </UActionPanelRoot>
      )}
      styleProps={{ className: props.className, actionPanelProps: props }}
      groupSlots={children}
    />
  );
};

/*
  ====================================
  ActionPanelGroup
  ====================================
*/

export type ActionPanelGroupProps = UActionPanelGroupRootProps & {
  title?: string;
};
export const ActionPanelGroup = ({ title, children, ...props }: ActionPanelGroupProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  return (
    <ActionPanelGroupLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupRoot {...props} className={className}>
          {children}
        </UActionPanelGroupRoot>
      )}
      styleProps={{ className: props.className, actionPanelProps, actionPanelGroupProps: props }}
      titleSlot={title && <UActionPanelGroupTitle>{title}</UActionPanelGroupTitle>}
      itemSlots={children}
    />
  );
};

/*
  ====================================
  ActionPanelGroupItem
  ====================================
*/

export type ActionPanelGroupItemProps = UActionPanelGroupItemRootProps;
export const ActionPanelGroupItem = ({ children, ...props }: ActionPanelGroupItemProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  return (
    <ActionPanelGroupItemLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps: props,
      }}
      checkIconSlot={null}
      boxSlot={children}
    />
  );
};

export type ActionPanelGroupCheckboxItemProps = UActionPanelGroupCheckboxItemRootProps;
export const ActionPanelGroupCheckboxItem = ({ children, ...props }: ActionPanelGroupCheckboxItemProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  return (
    <ActionPanelGroupItemLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupCheckboxItemRoot {...props} className={className}>
          {children}
        </UActionPanelGroupCheckboxItemRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps: props,
      }}
      checkIconSlot={<UActionPanelGroupItemCheck />}
      boxSlot={children}
    />
  );
};

export type ActionPanelGroupItemWithCaretProps = UActionPanelGroupItemRootProps;
export const ActionPanelGroupItemWithCaret = ({ children, ...props }: ActionPanelGroupItemWithCaretProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  return (
    <ActionPanelGroupItemWithCaretLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps: props,
      }}
      checkIconSlot={<UActionPanelGroupItemCheck />}
      caretSlot={<UActionPanelGroupItemCaret />}
      boxSlot={children}
    />
  );
};

export type ActionPanelGroupItemWithKBDProps = UActionPanelGroupItemRootProps & {
  KBDSlot?: React.ReactNode;
};
export const ActionPanelGroupItemWithKBD = ({ children, KBDSlot, ...props }: ActionPanelGroupItemWithKBDProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  return (
    <ActionPanelGroupItemWithKBDLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps: props,
      }}
      checkIconSlot={<UActionPanelGroupItemCheck />}
      kBDSlot={KBDSlot}
      boxSlot={children}
    />
  );
};

/*
  ====================================
  ActionPanelGroupItemKBD
  ====================================
*/

export type ActionPanelGroupItemKBDProps = Omit<UActionPanelGroupItemKBDRootProps, "children"> & {
  label: string;
};
export const ActionPanelGroupItemKBD = ({ label, ...props }: ActionPanelGroupItemKBDProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemKBDLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemKBDRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemKBDRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      }}
      labelSlot={<UActionPanelGroupItemKBDLabel>{label}</UActionPanelGroupItemKBDLabel>}
    />
  );
};

export type ActionPanelGroupItemKBDWithIconProps = Omit<UActionPanelGroupItemKBDRootProps, "children"> & {
  icon?: (className: string) => React.ReactNode;
  label?: string;
};
export const ActionPanelGroupItemKBDWithIcon = ({ icon, label, ...props }: ActionPanelGroupItemKBDWithIconProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemKBDWithIconLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemKBDRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemKBDRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      }}
      iconSlot={icon && <UActionPanelGroupItemKBDIcon>{icon}</UActionPanelGroupItemKBDIcon>}
      labelSlot={label && <UActionPanelGroupItemKBDLabel>{label}</UActionPanelGroupItemKBDLabel>}
    />
  );
};

/*
  ====================================
  ActionPanelGroupItemBox
  ====================================
*/

export type ActionPanelGroupItemBoxProps = Omit<UActionPanelGroupItemBoxRootProps, "children"> & {
  icon?: (className: string) => React.ReactNode;
  label?: string;
  badgeSlot?: React.ReactNode;
  switchSlot?: React.ReactNode;
};
export const ActionPanelGroupItemBox = ({
  icon,
  label,
  badgeSlot,
  switchSlot,
  ...props
}: ActionPanelGroupItemBoxProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemBoxLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemBoxRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemBoxRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      }}
      iconSlot={icon && <UActionPanelGroupItemBoxIcon>{icon}</UActionPanelGroupItemBoxIcon>}
      labelSlot={label && <UActionPanelGroupItemBoxLabel>{label}</UActionPanelGroupItemBoxLabel>}
      badgeSlot={badgeSlot}
      switchSlot={switchSlot}
    />
  );
};

export type ActionPanelGroupItemBoxWithAvatarProps = Omit<UActionPanelGroupItemBoxRootProps, "children"> & {
  label?: string;
  badgeSlot?: React.ReactNode;
  switchSlot?: React.ReactNode;
  avatarSlot?: React.ReactNode;
};
export const ActionPanelGroupItemBoxWithAvatar = ({
  avatarSlot,
  label,
  badgeSlot,
  switchSlot,
  ...props
}: ActionPanelGroupItemBoxWithAvatarProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemBoxWithAvatarLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemBoxRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemBoxRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      }}
      labelSlot={label && <UActionPanelGroupItemBoxLabel>{label}</UActionPanelGroupItemBoxLabel>}
      avatarSlot={avatarSlot}
      badgeSlot={badgeSlot}
      switchSlot={switchSlot}
    />
  );
};

export type ActionPanelGroupItemBoxWithDescriptionProps = Omit<UActionPanelGroupItemBoxRootProps, "children"> & {
  label?: string;
  description?: string;
  supportingText?: string;
  badgeSlot?: React.ReactNode;
  switchSlot?: React.ReactNode;
  iconBoxSlot?: React.ReactNode;
};
export const ActionPanelGroupItemBoxWithDescription = ({
  label,
  description,
  supportingText,
  badgeSlot,
  switchSlot,
  iconBoxSlot,
  ...props
}: ActionPanelGroupItemBoxWithDescriptionProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemBoxWithDescriptionLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemBoxRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemBoxRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      }}
      labelSlot={<UActionPanelGroupItemBoxLabel>{label}</UActionPanelGroupItemBoxLabel>}
      descriptionSlot={
        description && <UActionPanelGroupItemBoxDescription>{description}</UActionPanelGroupItemBoxDescription>
      }
      supportingSlot={
        supportingText && <UActionPanelGroupItemBoxSupporting>{supportingText}</UActionPanelGroupItemBoxSupporting>
      }
      badgeSlot={badgeSlot}
      switchSlot={switchSlot}
      iconBoxSlot={iconBoxSlot}
    />
  );
};

export type ActionPanelGroupItemBoxWithAvatarAndDescriptionProps = Omit<
  UActionPanelGroupItemBoxRootProps,
  "children"
> & {
  label?: string;
  description?: string;
  supportingText?: string;
  badgeSlot?: React.ReactNode;
  switchSlot?: React.ReactNode;
  avatarSlot?: React.ReactNode;
};
export const ActionPanelGroupItemBoxWithAvatarAndDescription = ({
  label,
  description,
  supportingText,
  badgeSlot,
  switchSlot,
  avatarSlot,
  ...props
}: ActionPanelGroupItemBoxWithAvatarAndDescriptionProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemBoxWithAvatarAndDescriptionLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemBoxRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemBoxRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      }}
      labelSlot={<UActionPanelGroupItemBoxLabel>{label}</UActionPanelGroupItemBoxLabel>}
      descriptionSlot={
        description && <UActionPanelGroupItemBoxDescription>{description}</UActionPanelGroupItemBoxDescription>
      }
      supportingSlot={
        supportingText && <UActionPanelGroupItemBoxSupporting>{supportingText}</UActionPanelGroupItemBoxSupporting>
      }
      avatarSlot={avatarSlot}
      badgeSlot={badgeSlot}
      switchSlot={switchSlot}
    />
  );
};

/*
  ====================================
  ActionPanelGroupItemBoxIconBox
  ====================================
*/

export type ActionPanelGroupItemBoxIconBoxProps = Omit<UActionPanelGroupItemBoxIconBoxRootProps, "children"> & {
  icon: (className: string) => React.ReactNode;
};
export const ActionPanelGroupItemBoxIconBox = ({ icon, ...props }: ActionPanelGroupItemBoxIconBoxProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemBoxIconBoxLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemBoxIconBoxRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemBoxIconBoxRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      }}
      iconSlot={<UActionPanelGroupItemBoxIconBoxIcon>{icon}</UActionPanelGroupItemBoxIconBoxIcon>}
    />
  );
};

/*
  ====================================
  ActionPanelGroupItemBoxSwitch
  ====================================
*/

export type ActionPanelGroupItemBoxSwitchProps = UActionPanelGroupItemBoxSwitchRootProps;
export const ActionPanelGroupItemBoxSwitch = (props: ActionPanelGroupItemBoxSwitchProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemBoxSwitchLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemBoxSwitchRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemBoxSwitchRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      }}
      handleSlot={<UActionPanelGroupItemBoxSwitchHandle />}
    />
  );
};

/*
  ====================================
  ActionPanelGroupItemBoxAvatar
  ====================================
*/

export type ActionPanelGroupItemBoxAvatarProps = Omit<UActionPanelGroupItemBoxAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const ActionPanelGroupItemBoxAvatar = ({
  imageProps,
  fallbackText,
  ...props
}: ActionPanelGroupItemBoxAvatarProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemBoxAvatarLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemBoxAvatarRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemBoxAvatarRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
        actionPanelGroupItemBoxAvatarProps: props,
      }}
      imageSlot={imageProps && <UActionPanelGroupItemBoxAvatarImage {...imageProps} />}
      labelSlot={
        fallbackText && (
          <UActionPanelGroupItemBoxAvatarFallback>
            <UActionPanelGroupItemBoxAvatarLabel>{fallbackText}</UActionPanelGroupItemBoxAvatarLabel>
          </UActionPanelGroupItemBoxAvatarFallback>
        )
      }
    />
  );
};

export type ActionPanelGroupItemBoxAvatarWithIconProps = Omit<UActionPanelGroupItemBoxAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (className: string) => React.ReactNode;
};
export const ActionPanelGroupItemBoxAvatarWithIcon = ({
  imageProps,
  fallbackIcon,
  ...props
}: ActionPanelGroupItemBoxAvatarWithIconProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemBoxAvatarWithIconLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemBoxAvatarRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemBoxAvatarRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
        actionPanelGroupItemBoxAvatarProps: props,
      }}
      imageSlot={imageProps && <UActionPanelGroupItemBoxAvatarImage {...imageProps} />}
      iconSlot={
        fallbackIcon && (
          <UActionPanelGroupItemBoxAvatarFallback>
            <UActionPanelGroupItemBoxAvatarIcon>{fallbackIcon}</UActionPanelGroupItemBoxAvatarIcon>
          </UActionPanelGroupItemBoxAvatarFallback>
        )
      }
    />
  );
};

/*
  ====================================
  ActionPanelGroupItemBoxBadge
  ====================================
*/

export type ActionPanelGroupItemBoxBadgeProps = Omit<UActionPanelGroupItemBoxBadgeRootProps, "children"> & {
  label: string;
};
export const ActionPanelGroupItemBoxBadge = ({ label, ...props }: ActionPanelGroupItemBoxBadgeProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemBoxBadgeLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemBoxBadgeRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemBoxBadgeRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
        actionPanelGroupItemBoxBadgeProps: props,
      }}
      labelSlot={<UActionPanelGroupItemBoxBadgeLabel>{label}</UActionPanelGroupItemBoxBadgeLabel>}
    />
  );
};

export type ActionPanelGroupItemBoxBadgeWithIconProps = Omit<UActionPanelGroupItemBoxBadgeRootProps, "children"> & {
  icon?: (className: string) => React.ReactNode;
  label?: string;
};
export const ActionPanelGroupItemBoxBadgeWithIcon = ({
  icon,
  label,
  ...props
}: ActionPanelGroupItemBoxBadgeWithIconProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <ActionPanelGroupItemBoxBadgeWithIconLayout
      renderRoot={(children, className) => (
        <UActionPanelGroupItemBoxBadgeRoot {...props} className={className}>
          {children}
        </UActionPanelGroupItemBoxBadgeRoot>
      )}
      styleProps={{
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
        actionPanelGroupItemBoxBadgeProps: props,
      }}
      iconSlot={icon && <UActionPanelGroupItemBoxBadgeIcon>{icon}</UActionPanelGroupItemBoxBadgeIcon>}
      labelSlot={label && <UActionPanelGroupItemBoxBadgeLabel>{label}</UActionPanelGroupItemBoxBadgeLabel>}
    />
  );
};
