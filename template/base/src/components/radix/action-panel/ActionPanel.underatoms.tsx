import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Switch from "@radix-ui/react-switch";
import * as Avatar from "@radix-ui/react-avatar";
import { CaretDown, Check } from "../../../assets/Icons";
import { ReactNode } from "react";
import { mergeProps, useFocusRing } from "react-aria";
import { getGenericContext } from "../../../_utils";
import {
  ActionPanelGroupItemBoxAvatarStyleProps,
  ActionPanelGroupItemBoxBadgeStyleProps,
  ActionPanelGroupItemStyleProps,
  ActionPanelGroupStyleProps,
  ActionPanelStyleProps,
  actionPanelClass,
  actionPanelGroupClass,
  actionPanelGroupItemBoxAvatarClass,
  actionPanelGroupItemBoxAvatarIconClass,
  actionPanelGroupItemBoxAvatarImageClass,
  actionPanelGroupItemBoxAvatarLabelClass,
  actionPanelGroupItemBoxBadgeClass,
  actionPanelGroupItemBoxBadgeIconClass,
  actionPanelGroupItemBoxBadgeLabelClass,
  actionPanelGroupItemBoxClass,
  actionPanelGroupItemBoxDescriptionClass,
  actionPanelGroupItemBoxIconBoxClass,
  actionPanelGroupItemBoxIconBoxIconClass,
  actionPanelGroupItemBoxIconClass,
  actionPanelGroupItemBoxLabelClass,
  actionPanelGroupItemBoxSupportingClass,
  actionPanelGroupItemBoxSwitchClass,
  actionPanelGroupItemBoxSwitchHandleClass,
  actionPanelGroupItemCaretClass,
  actionPanelGroupItemCheckIconClass,
  actionPanelGroupItemClass,
  actionPanelGroupItemKBDClass,
  actionPanelGroupItemKBDIconClass,
  actionPanelGroupItemKBDLabelClass,
  actionPanelGroupTitleClass,
} from "../../../styles/action-panel";

/*
  ====================================
  ActionPanel
  ====================================
*/

export const { Provider: ActionPanelInternalProvider, useComponentContext: useActionPanelInternalProvider } =
  getGenericContext<UActionPanelRootProps>("ActionPanelInternalProvider");

export type UActionPanelRootProps = ActionPanelStyleProps & DropdownMenu.DropdownMenuContentProps;
export const UActionPanelRoot = (props: UActionPanelRootProps) => {
  return (
    <DropdownMenu.Content
      {...props}
      className={actionPanelClass({ className: props.className, actionPanelProps: props })}
    >
      <ActionPanelInternalProvider value={props}>{props.children}</ActionPanelInternalProvider>
    </DropdownMenu.Content>
  );
};

export type UActionPanelDividerProps = DropdownMenu.DropdownMenuSeparatorProps;
export const UActionPanelDivider = (props: UActionPanelDividerProps) => {
  return <DropdownMenu.Separator {...props} />;
};

/*
  ====================================
  ActionPanelGroup
  ====================================
*/

export const { Provider: ActionPanelGroupInternalProvider, useComponentContext: useActionPanelGroupInternalProvider } =
  getGenericContext<UActionPanelGroupRootProps>("ActionPanelGroupInternalProvider");

export type UActionPanelGroupRootProps = ActionPanelGroupStyleProps & DropdownMenu.DropdownMenuGroupProps;
export const UActionPanelGroupRoot = (props: UActionPanelGroupRootProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  return (
    <DropdownMenu.Group
      {...props}
      className={actionPanelGroupClass({ className: props.className, actionPanelProps, actionPanelGroupProps: props })}
    >
      <ActionPanelGroupInternalProvider value={props}>{props.children}</ActionPanelGroupInternalProvider>
    </DropdownMenu.Group>
  );
};

export type UActionPanelGroupTitleProps = DropdownMenu.DropdownMenuLabelProps;
export const UActionPanelGroupTitle = (props: UActionPanelGroupTitleProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  return (
    <DropdownMenu.Label
      {...props}
      className={actionPanelGroupTitleClass({ className: props.className, actionPanelProps, actionPanelGroupProps })}
    />
  );
};

/*
====================================
ActionPanelGroupItem
====================================
*/

export const {
  Provider: ActionPanelGroupItemInternalProvider,
  useComponentContext: useActionPanelGroupItemInternalProvider,
} = getGenericContext<UActionPanelGroupItemRootProps>("ActionPanelGroupItemInternalProvider");

export type UActionPanelGroupItemRootProps = ActionPanelGroupItemStyleProps & DropdownMenu.DropdownMenuItemProps;
export const UActionPanelGroupItemRoot = (props: UActionPanelGroupItemRootProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  return (
    <DropdownMenu.Item
      {...props}
      className={actionPanelGroupItemClass({
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps: props,
      })}
    >
      <ActionPanelGroupItemInternalProvider value={props}>{props.children}</ActionPanelGroupItemInternalProvider>
    </DropdownMenu.Item>
  );
};

export type UActionPanelGroupCheckboxItemRootProps = ActionPanelGroupItemStyleProps &
  DropdownMenu.DropdownMenuCheckboxItemProps;
export const UActionPanelGroupCheckboxItemRoot = (props: UActionPanelGroupCheckboxItemRootProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  return (
    <DropdownMenu.CheckboxItem
      {...props}
      className={actionPanelGroupItemClass({
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps: props,
      })}
    >
      <ActionPanelGroupItemInternalProvider value={props}>{props.children}</ActionPanelGroupItemInternalProvider>
    </DropdownMenu.CheckboxItem>
  );
};

export const UActionPanelGroupItemCaret = () => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <CaretDown
      className={actionPanelGroupItemCaretClass({ actionPanelProps, actionPanelGroupProps, actionPanelGroupItemProps })}
    />
  );
};

export const UActionPanelGroupItemCheck = () => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <DropdownMenu.ItemIndicator style={{ display: "flex" }}>
      <Check
        className={actionPanelGroupItemCheckIconClass({
          actionPanelProps,
          actionPanelGroupProps,
          actionPanelGroupItemProps,
        })}
      />
    </DropdownMenu.ItemIndicator>
  );
};

/*
  ====================================
  ActionPanelGroupItemKBD
  ====================================
*/

export type UActionPanelGroupItemKBDRootProps = {
  children: ReactNode;
  className?: string;
};
export const UActionPanelGroupItemKBDRoot = (props: UActionPanelGroupItemKBDRootProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <div
      className={actionPanelGroupItemKBDClass({
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
    >
      {props.children}
    </div>
  );
};

export type UActionPanelGroupItemKBDLabelProps = {
  children: ReactNode;
};
export const UActionPanelGroupItemKBDLabel = ({ children }: UActionPanelGroupItemKBDLabelProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <span
      className={actionPanelGroupItemKBDLabelClass({
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
    >
      {children}
    </span>
  );
};

export type UActionPanelGroupItemKBDIconProps = {
  children: (className: string) => ReactNode;
};
export const UActionPanelGroupItemKBDIcon = ({ children }: UActionPanelGroupItemKBDIconProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <>
      {children(
        actionPanelGroupItemKBDIconClass({ actionPanelProps, actionPanelGroupProps, actionPanelGroupItemProps }),
      )}
    </>
  );
};

/*
  ====================================
  ActionPanelGroupItemBox
  ====================================
*/

export type UActionPanelGroupItemBoxRootProps = {
  children: ReactNode;
  className?: string;
};
export const UActionPanelGroupItemBoxRoot = (props: UActionPanelGroupItemBoxRootProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <div
      {...props}
      className={actionPanelGroupItemBoxClass({
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
    />
  );
};

export type UActionPanelGroupItemBoxIconProps = {
  children: (className: string) => ReactNode;
};
export const UActionPanelGroupItemBoxIcon = ({ children }: UActionPanelGroupItemBoxIconProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <>
      {children(
        actionPanelGroupItemBoxIconClass({ actionPanelProps, actionPanelGroupProps, actionPanelGroupItemProps }),
      )}
    </>
  );
};

export type UActionPanelGroupItemBoxLabelProps = {
  children: ReactNode;
};
export const UActionPanelGroupItemBoxLabel = ({ children }: UActionPanelGroupItemBoxLabelProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <span
      className={actionPanelGroupItemBoxLabelClass({
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
    >
      {children}
    </span>
  );
};

export type UActionPanelGroupItemBoxDescriptionProps = {
  children: ReactNode;
};
export const UActionPanelGroupItemBoxDescription = ({ children }: UActionPanelGroupItemBoxDescriptionProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <span
      className={actionPanelGroupItemBoxDescriptionClass({
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
    >
      {children}
    </span>
  );
};

export type UActionPanelGroupItemBoxSupportingProps = {
  children: ReactNode;
};
export const UActionPanelGroupItemBoxSupporting = ({ children }: UActionPanelGroupItemBoxSupportingProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <span
      className={actionPanelGroupItemBoxSupportingClass({
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
    >
      {children}
    </span>
  );
};

/*
  ====================================
  ActionPanelGroupItemBoxIconBox
  ====================================
*/

export type UActionPanelGroupItemBoxIconBoxRootProps = {
  children: ReactNode;
  className?: string;
};

export const UActionPanelGroupItemBoxIconBoxRoot = (props: UActionPanelGroupItemBoxIconBoxRootProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <div
      {...props}
      className={actionPanelGroupItemBoxIconBoxClass({
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
    />
  );
};

export type UActionPanelGroupItemBoxIconBoxIconProps = {
  children: (className: string) => ReactNode;
};
export const UActionPanelGroupItemBoxIconBoxIcon = ({ children }: UActionPanelGroupItemBoxIconBoxIconProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <>
      {children(
        actionPanelGroupItemBoxIconBoxIconClass({ actionPanelProps, actionPanelGroupProps, actionPanelGroupItemProps }),
      )}
    </>
  );
};

/*
  ====================================
  ActionPanelGroupItemBoxSwitch
  ====================================
*/

export type UActionPanelGroupItemBoxSwitchRootProps = Switch.SwitchProps;
export const UActionPanelGroupItemBoxSwitchRoot = (props: UActionPanelGroupItemBoxSwitchRootProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  const { disabled: parentDisabled } = useActionPanelGroupItemInternalProvider();
  const fullProps = { ...props, disabled: props.disabled || parentDisabled };
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <Switch.Root
      {...mergeProps(fullProps, focusProps)}
      className={actionPanelGroupItemBoxSwitchClass({
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
      data-ring={isFocusVisible}
    />
  );
};

export type UActionPanelGroupItemBoxSwitchHandle = Switch.SwitchThumbProps;
export const UActionPanelGroupItemBoxSwitchHandle = (props: UActionPanelGroupItemBoxSwitchHandle) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <Switch.Thumb
      {...props}
      className={actionPanelGroupItemBoxSwitchHandleClass({
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
    />
  );
};

/*
  ====================================
  ActionPanelGroupItemBoxAvatar
  ====================================
*/

export type UActionPanelGroupItemBoxAvatarRootProps = ActionPanelGroupItemBoxAvatarStyleProps &
  Avatar.AvatarProps & {
    /** Avatar content */
    children: Avatar.AvatarProps["children"];
    className?: string;
  };
export const UActionPanelGroupItemBoxAvatarRoot = ({
  className,
  ...props
}: UActionPanelGroupItemBoxAvatarRootProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <Avatar.Root
      {...props}
      className={actionPanelGroupItemBoxAvatarClass({
        className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
    >
      {props.children}
    </Avatar.Root>
  );
};

export type UActionPanelGroupItemBoxAvatarFallbackProps = Avatar.AvatarFallbackProps;
export const UActionPanelGroupItemBoxAvatarFallback = (props: UActionPanelGroupItemBoxAvatarFallbackProps) => {
  return <Avatar.Fallback style={{ display: "flex" }} {...props} />;
};

export type UActionPanelGroupItemBoxAvatarLabelProps = {
  children: ReactNode;
};
export const UActionPanelGroupItemBoxAvatarLabel = ({ children }: UActionPanelGroupItemBoxAvatarLabelProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <span
      className={actionPanelGroupItemBoxAvatarLabelClass({
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
    >
      {children}
    </span>
  );
};

export type UActionPanelGroupItemBoxAvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UActionPanelGroupItemBoxAvatarIcon = ({ children }: UActionPanelGroupItemBoxAvatarIconProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <>
      {children(
        actionPanelGroupItemBoxAvatarIconClass({ actionPanelProps, actionPanelGroupProps, actionPanelGroupItemProps }),
      )}
    </>
  );
};

export type UActionPanelGroupItemBoxAvatarImageProps = Avatar.AvatarImageProps;
export const UActionPanelGroupItemBoxAvatarImage = (props: UActionPanelGroupItemBoxAvatarImageProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <Avatar.Image
      {...props}
      className={actionPanelGroupItemBoxAvatarImageClass({
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
      })}
    />
  );
};

/*
  ====================================
  ActionPanelGroupItemBoxBadge
  ====================================
*/

export const {
  Provider: ActionPanelGroupItemBoxBadgeInternalProvider,
  useComponentContext: useActionPanelGroupItemBoxBadgeInternalProvider,
} = getGenericContext<UActionPanelGroupItemBoxBadgeRootProps>("ActionPanelGroupItemBoxBadgeInternalProvider");

export type UActionPanelGroupItemBoxBadgeRootProps = ActionPanelGroupItemBoxBadgeStyleProps & {
  children: ReactNode;
  className?: string;
};
export const UActionPanelGroupItemBoxBadgeRoot = (props: UActionPanelGroupItemBoxBadgeRootProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  return (
    <div
      className={actionPanelGroupItemBoxBadgeClass({
        className: props.className,
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
        actionPanelGroupItemBoxBadgeProps: props,
      })}
    >
      <ActionPanelGroupItemBoxBadgeInternalProvider value={props}>
        {props.children}
      </ActionPanelGroupItemBoxBadgeInternalProvider>
    </div>
  );
};

export type UActionPanelGroupItemBoxBadgeLabelProps = {
  children: ReactNode;
};
export const UActionPanelGroupItemBoxBadgeLabel = ({ children }: UActionPanelGroupItemBoxBadgeLabelProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  const actionPanelGroupItemBoxBadgeProps = useActionPanelGroupItemBoxBadgeInternalProvider();
  return (
    <span
      className={actionPanelGroupItemBoxBadgeLabelClass({
        actionPanelProps,
        actionPanelGroupProps,
        actionPanelGroupItemProps,
        actionPanelGroupItemBoxBadgeProps,
      })}
    >
      {children}
    </span>
  );
};

export type UActionPanelGroupItemBoxBadgeIconProps = {
  children: (className: string) => ReactNode;
};
export const UActionPanelGroupItemBoxBadgeIcon = ({ children }: UActionPanelGroupItemBoxBadgeIconProps) => {
  const actionPanelProps = useActionPanelInternalProvider();
  const actionPanelGroupProps = useActionPanelGroupInternalProvider();
  const actionPanelGroupItemProps = useActionPanelGroupItemInternalProvider();
  const actionPanelGroupItemBoxBadgeProps = useActionPanelGroupItemBoxBadgeInternalProvider();
  return (
    <>
      {children(
        actionPanelGroupItemBoxBadgeIconClass({
          actionPanelProps,
          actionPanelGroupProps,
          actionPanelGroupItemProps,
          actionPanelGroupItemBoxBadgeProps,
        }),
      )}
    </>
  );
};
