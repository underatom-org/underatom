import { Command, CommandInput } from "cmdk";
import React, { ReactNode, useRef, useState } from "react";
import { AriaButtonProps, mergeProps, useButton, useFocusRing } from "react-aria";
import { Check, X } from "../../../assets/Icons";
import * as RadixSwitch from "@radix-ui/react-switch";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { getGenericContext } from "../../../_utils";
import {
  CommandGroupItemBoxBadgeStyleProps,
  CommandGroupItemStyleProps,
  CommandGroupStyleProps,
  CommandStyleProps,
  commandClass,
  commandEmptyClass,
  commandEmptyImageClass,
  commandEmptyTextClass,
  commandFooterButtonClass,
  commandFooterButtonIconClass,
  commandFooterClass,
  commandFooterElementClass,
  commandFooterElementKBDClass,
  commandFooterElementKBDIconClass,
  commandFooterElementKBDLabelClass,
  commandFooterElementTextClass,
  commandGroupClass,
  commandGroupItemBoxAvatarClass,
  commandGroupItemBoxAvatarIconClass,
  commandGroupItemBoxAvatarImageClass,
  commandGroupItemBoxAvatarLabelClass,
  commandGroupItemBoxBadgeClass,
  commandGroupItemBoxBadgeIconClass,
  commandGroupItemBoxBadgeLabelClass,
  commandGroupItemBoxButtonClass,
  commandGroupItemBoxButtonIconClass,
  commandGroupItemBoxClass,
  commandGroupItemBoxIconClass,
  commandGroupItemBoxLabelClass,
  commandGroupItemBoxSwitchClass,
  commandGroupItemBoxSwitchHandleClass,
  commandGroupItemCheckIconClass,
  commandGroupItemClass,
  commandGroupItemKBDClass,
  commandGroupItemKBDIconClass,
  commandGroupItemKBDLabelClass,
  commandGroupTitleClass,
  commandSearchClass,
  commandSearchClearClass,
  commandSearchClearIconClass,
  commandSearchIconClass,
  commandSearchTextClass,
} from "../../../styles/command";

/*
  ====================================
  Command
  ====================================
*/

export const { Provider: CommandInternalProvider, useComponentContext: useCommandInternalProvider } =
  getGenericContext<UCommandRootProps>("CommandInternalProvider");

export type UCommandRootProps = CommandStyleProps & React.ComponentPropsWithoutRef<typeof Command>;
export const UCommandRoot = React.forwardRef<React.ElementRef<typeof Command>, UCommandRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <Command ref={ref} className={commandClass({ className, commandProps: props })} {...props}>
        <CommandInternalProvider value={props}>{props.children}</CommandInternalProvider>
      </Command>
    );
  },
);

export type UCommandListProps = React.ComponentPropsWithoutRef<typeof Command.List>;
export const UCommandList = Command.List;

/*
  ====================================
  CommandSearch
  ====================================
*/

export const { Provider: CommandSearchInternalProvider, useComponentContext: useCommandSearchParentProps } =
  getGenericContext<
    UCommandSearchRootProps & {
      inputRef: React.RefObject<HTMLInputElement>;
      setIsFocused: (arg: boolean) => void;
    }
  >("CommandSearchInternalProvider");

export type UCommandSearchRootProps = React.ComponentPropsWithoutRef<typeof Command.Input>;
export const UCommandSearchRoot = ({ children, className, ...props }: UCommandSearchRootProps) => {
  const commandProps = useCommandInternalProvider();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      {...mergeProps(props, {
        onClick: handleClick,
      })}
      data-ring={isFocused}
      className={commandSearchClass({ className, commandProps })}
    >
      <CommandSearchInternalProvider value={{ ...props, inputRef, setIsFocused }}>
        {children}
      </CommandSearchInternalProvider>
    </div>
  );
};

export type UCommandSearchIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const UCommandSearchIcon = ({ children, className }: UCommandSearchIconProps) => {
  const commandProps = useCommandInternalProvider();
  return <>{children(commandSearchIconClass({ className, commandProps }))}</>;
};

export const UCommandSearchText = () => {
  const commandProps = useCommandInternalProvider();
  const { inputRef, setIsFocused, ...props } = useCommandSearchParentProps();
  return (
    <CommandInput
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      ref={inputRef}
      style={{ width: "100%", border: "none", outline: "none", background: "transparent" }}
      className={commandSearchTextClass({ commandProps })}
      {...props}
    ></CommandInput>
  );
};

/*
  ====================================
  CommandSearchClear
  ====================================
*/

export type UCommandSearchClearRootProps = AriaButtonProps<"button"> & {
  innerRef?: React.RefObject<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};
export const UCommandSearchClearRoot = ({ className, ...props }: UCommandSearchClearRootProps) => {
  const commandProps = useCommandInternalProvider();
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, refs);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      data-disabled={!!props.disabled}
      className={commandSearchClearClass({ className, commandProps })}
      {...mergeProps(buttonProps, focusProps)}
    >
      {props.children}
    </button>
  );
};

export const UCommandSearchClearIcon = () => {
  const commandProps = useCommandInternalProvider();
  return <X className={commandSearchClearIconClass({ commandProps })} />;
};

/*
  ====================================
  CommandFooter
  ====================================
*/

export type UCommandFooterRootProps = {
  children: React.ReactNode;
  className?: string;
};
export const UCommandFooterRoot = ({ children, className }: UCommandFooterRootProps) => {
  const commandProps = useCommandInternalProvider();
  return <div className={commandFooterClass({ className, commandProps })}>{children}</div>;
};

export type UCommandFooterTextProps = {
  children: React.ReactNode;
  className?: string;
};

/*
  ====================================
  CommandFooterButton
  ====================================
*/

export type UCommandFooterButtonRootProps = AriaButtonProps<"button"> & {
  innerRef?: React.RefObject<HTMLButtonElement>;
  className?: string;
};
export const UCommandFooterButtonRoot = ({ className, ...props }: UCommandFooterButtonRootProps) => {
  const commandProps = useCommandInternalProvider();
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, refs);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      className={commandFooterButtonClass({ className, commandProps })}
      {...mergeProps(buttonProps, focusProps)}
    >
      {props.children}
    </button>
  );
};

export type UCommandFooterButtonIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const UCommandFooterButtonIcon = ({ children, className }: UCommandFooterButtonIconProps) => {
  const commandProps = useCommandInternalProvider();
  return <>{children(commandFooterButtonIconClass({ className, commandProps }))}</>;
};

/*
  ====================================
  CommandFooterElement
  ====================================
*/

export type UCommandFooterElementRootProps = {
  children: React.ReactNode;
  className?: string;
};
export const UCommandFooterElementRoot = ({ children, className }: UCommandFooterElementRootProps) => {
  const commandProps = useCommandInternalProvider();
  return <div className={commandFooterElementClass({ className, commandProps })}>{children}</div>;
};

export type UCommandFooterElementTextProps = {
  children: React.ReactNode;
  className?: string;
};
export const UCommandFooterElementText = ({ children, className }: UCommandFooterElementTextProps) => {
  const commandProps = useCommandInternalProvider();
  return <span className={commandFooterElementTextClass({ className, commandProps })}>{children}</span>;
};

/*
  ====================================
  CommandFooterElementKBD
  ====================================
*/

export type UCommandFooterElementKBDRootProps = {
  children: React.ReactNode;
  className?: string;
};
export const UCommandFooterElementKBDRoot = ({ children, className }: UCommandFooterElementKBDRootProps) => {
  const commandProps = useCommandInternalProvider();
  return <div className={commandFooterElementKBDClass({ className, commandProps })}>{children}</div>;
};

export type UCommandFooterElementKBDLabelProps = {
  children: React.ReactNode;
  className?: string;
};
export const UCommandFooterElementKBDLabel = ({ children, className }: UCommandFooterElementKBDLabelProps) => {
  const commandProps = useCommandInternalProvider();
  return <span className={commandFooterElementKBDLabelClass({ className, commandProps })}>{children}</span>;
};

export type UCommandFooterElementKBDIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const UCommandFooterElementKBDIcon = ({ children, className }: UCommandFooterElementKBDIconProps) => {
  const commandProps = useCommandInternalProvider();
  return <>{children(commandFooterElementKBDIconClass({ className, commandProps }))}</>;
};

/*
  ====================================
  CommandEmpty
  ====================================
*/

export type UCommandEmptyRootProps = React.ComponentPropsWithoutRef<typeof Command.Empty>;
export const UCommandEmptyRoot = (props: UCommandEmptyRootProps) => {
  const commandProps = useCommandInternalProvider();
  return <Command.Empty {...props} className={commandEmptyClass({ className: props.className, commandProps })} />;
};

export type UCommandEmptyTextProps = {
  children: React.ReactNode;
  className?: string;
};
export const UCommandEmptyText = ({ children, className }: UCommandEmptyTextProps) => {
  const commandProps = useCommandInternalProvider();
  return <span className={commandEmptyTextClass({ className, commandProps })}>{children}</span>;
};

export type UCommandEmptyImageProps = React.ComponentPropsWithoutRef<"img">;
export const UCommandEmptyImage = ({ className, ...props }: UCommandEmptyImageProps) => {
  const commandProps = useCommandInternalProvider();
  return <img {...props} className={commandEmptyImageClass({ className, commandProps })} />;
};

/*
  ====================================
  CommandGroup
  ====================================
*/

export const { Provider: CommandGroupInternalProvider, useComponentContext: useCommandGroupInternalProvider } =
  getGenericContext<UCommandGroupRootProps>("CommandGroupInternalProvider");

export type UCommandGroupRootProps = CommandGroupStyleProps &
  Omit<React.ComponentPropsWithoutRef<typeof Command.Group>, "heading">;
export const UCommandGroupRoot = (props: UCommandGroupRootProps) => {
  const commandProps = useCommandInternalProvider();
  return (
    <Command.Group
      {...props}
      className={commandGroupClass({ className: props.className, commandGroupProps: props, commandProps })}
    >
      <CommandGroupInternalProvider value={props}>{props.children}</CommandGroupInternalProvider>
    </Command.Group>
  );
};

export type UCommandGroupTitleProps = {
  children: ReactNode;
};
export const UCommandGroupTitle = (props: UCommandGroupTitleProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  return <span className={commandGroupTitleClass({ commandGroupProps, commandProps })}>{props.children}</span>;
};

/*
====================================
CommandGroupItem
====================================
*/

export const { Provider: CommandGroupItemInternalProvider, useComponentContext: useCommandGroupItemInternalProvider } =
  getGenericContext<UCommandGroupItemRootProps>("CommandGroupItemInternalProvider");

export type UCommandGroupItemRootProps = CommandGroupItemStyleProps &
  React.ComponentPropsWithoutRef<typeof Command.Item> & {
    isSelected?: boolean;
  };
export const UCommandGroupItemRoot = ({ className, ...props }: UCommandGroupItemRootProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  return (
    <Command.Item
      {...props}
      className={commandGroupItemClass({ className, commandGroupProps, commandProps, commandGroupItemProps: props })}
      data-toggled={!!props.isSelected}
    >
      <CommandGroupItemInternalProvider value={props}>{props.children}</CommandGroupItemInternalProvider>
    </Command.Item>
  );
};

export const UCommandGroupItemCheckIcon = () => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <Check className={commandGroupItemCheckIconClass({ commandGroupItemProps, commandGroupProps, commandProps })} />
  );
};

/*
  ====================================
  CommandGroupItemKBD
    ====================================
*/

export type UCommandGroupItemKBDRootProps = {
  children: React.ReactNode;
  className?: string;
};
export const UCommandGroupItemKBDRoot = ({ children, className }: UCommandGroupItemKBDRootProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <div className={commandGroupItemKBDClass({ className, commandGroupItemProps, commandGroupProps, commandProps })}>
      {children}
    </div>
  );
};

export type UCommandGroupItemKBDLabelProps = {
  children: React.ReactNode;
  className?: string;
};
export const UCommandGroupItemKBDLabel = ({ children, className }: UCommandGroupItemKBDLabelProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <span
      className={commandGroupItemKBDLabelClass({ className, commandGroupItemProps, commandGroupProps, commandProps })}
    >
      {children}
    </span>
  );
};

export type UCommandGroupItemKBDIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const UCommandGroupItemKBDIcon = ({ children, className }: UCommandGroupItemKBDIconProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <>{children(commandGroupItemKBDIconClass({ className, commandGroupItemProps, commandGroupProps, commandProps }))}</>
  );
};

/*
  ====================================
  CommandGroupItemBox
  ====================================
*/

export type UCommandGroupItemBoxRootProps = {
  children: React.ReactNode;
  className?: string;
};
export const UCommandGroupItemBoxRoot = ({ children, className }: UCommandGroupItemBoxRootProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <div className={commandGroupItemBoxClass({ className, commandGroupItemProps, commandGroupProps, commandProps })}>
      {children}
    </div>
  );
};

export type UCommandGroupItemBoxLabelProps = {
  children: React.ReactNode;
  className?: string;
};
export const UCommandGroupItemBoxLabel = ({ children, className }: UCommandGroupItemBoxLabelProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <span
      className={commandGroupItemBoxLabelClass({ className, commandGroupItemProps, commandGroupProps, commandProps })}
    >
      {children}
    </span>
  );
};

export type UCommandGroupItemBoxIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const UCommandGroupItemBoxIcon = ({ children, className }: UCommandGroupItemBoxIconProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <>{children(commandGroupItemBoxIconClass({ className, commandGroupItemProps, commandGroupProps, commandProps }))}</>
  );
};

export type UCommandGroupItemBoxButtonRootProps = AriaButtonProps<"button"> & {
  innerRef?: React.RefObject<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
};

/*
  ====================================
  CommandGroupItemBoxAvatar
  ====================================
*/

export type UCommandGroupItemBoxAvatarRootProps = RadixAvatar.AvatarProps & {
  /** Avatar content */
  children: RadixAvatar.AvatarProps["children"];
  className?: string;
};
export const UCommandGroupItemBoxAvatarRoot = ({ className, ...props }: UCommandGroupItemBoxAvatarRootProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <RadixAvatar.Root
      {...props}
      className={commandGroupItemBoxAvatarClass({ className, commandGroupItemProps, commandGroupProps, commandProps })}
    />
  );
};

export type UCommandGroupItemBoxAvatarFallbackProps = RadixAvatar.AvatarFallbackProps;
export const UCommandGroupItemBoxAvatarFallback = (props: UCommandGroupItemBoxAvatarFallbackProps) => {
  return <RadixAvatar.Fallback {...props} />;
};

export type UCommandGroupItemBoxAvatarLabelProps = {
  children: ReactNode;
};
export const UCommandGroupItemBoxAvatarLabel = ({ children }: UCommandGroupItemBoxAvatarLabelProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <span className={commandGroupItemBoxAvatarLabelClass({ commandGroupItemProps, commandGroupProps, commandProps })}>
      {children}
    </span>
  );
};

export type UCommandGroupItemBoxAvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UCommandGroupItemBoxAvatarIcon = ({ children }: UCommandGroupItemBoxAvatarIconProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <>{children(commandGroupItemBoxAvatarIconClass({ commandGroupItemProps, commandGroupProps, commandProps }))}</>
  );
};

export type UCommandGroupItemBoxAvatarImageProps = RadixAvatar.AvatarImageProps;
export const UCommandGroupItemBoxAvatarImage = (props: UCommandGroupItemBoxAvatarImageProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <RadixAvatar.Image
      className={commandGroupItemBoxAvatarImageClass({ commandGroupItemProps, commandGroupProps, commandProps })}
      {...props}
    />
  );
};

/*
  ====================================
  CommandGroupItemBoxSwitch
  ====================================
*/

export type URadixCommandGroupItemBoxSwitchRootProps = RadixSwitch.SwitchProps;
export const URadixCommandGroupItemBoxSwitchRoot = (props: URadixCommandGroupItemBoxSwitchRootProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  const { disabled: parentDisabled } = useCommandGroupItemInternalProvider();
  const propsWithDisabled = { ...props, disabled: props.disabled || parentDisabled };

  return (
    <RadixSwitch.Root
      {...propsWithDisabled}
      className={commandGroupItemBoxSwitchClass({
        className: props.className,
        commandGroupItemProps,
        commandGroupProps,
        commandProps,
      })}
    />
  );
};

export type URadixCommandGroupItemBoxSwitchHandle = RadixSwitch.SwitchThumbProps;
export const URadixCommandGroupItemBoxSwitchHandle = (props: URadixCommandGroupItemBoxSwitchHandle) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <RadixSwitch.Thumb
      {...props}
      className={commandGroupItemBoxSwitchHandleClass({ commandGroupItemProps, commandGroupProps, commandProps })}
    />
  );
};

/*
  ====================================
  CommandGroupItemBoxButton
  ====================================
*/

export const UCommandGroupItemBoxButtonRoot = ({ className, ...props }: UCommandGroupItemBoxButtonRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, refs);
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  const { isFocusVisible, focusProps } = useFocusRing();
  const disabled = !!commandGroupItemProps.disabled || !!props.disabled;

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      data-disabled={disabled}
      className={commandGroupItemBoxButtonClass({ className, commandGroupItemProps, commandGroupProps, commandProps })}
    >
      {props.children}
    </button>
  );
};

export type UCommandGroupItemBoxButtonIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const UCommandGroupItemBoxButtonIcon = ({ children, className }: UCommandGroupItemBoxButtonIconProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <>
      {children(
        commandGroupItemBoxButtonIconClass({ className, commandGroupItemProps, commandGroupProps, commandProps }),
      )}
    </>
  );
};

/*
  ====================================
  CommandGroupItemBoxBadge
  ====================================
*/

export const { Provider: CommandGroupItemBoxBadgeProvider, useComponentContext: useCommandGroupItemBoxBadgeProvider } =
  getGenericContext<UCommandGroupItemBoxBadgeRootProps>("CommandGroupItemBoxBadgeProvider");

export type UCommandGroupItemBoxBadgeRootProps = CommandGroupItemBoxBadgeStyleProps & {
  children: React.ReactNode;
  className?: string;
};
export const UCommandGroupItemBoxBadgeRoot = (props: UCommandGroupItemBoxBadgeRootProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  return (
    <div
      className={commandGroupItemBoxBadgeClass({
        className: props.className,
        commandProps,
        commandGroupProps,
        commandGroupItemProps,
        commandGroupItemBoxBadgeProps: props,
      })}
    >
      <CommandGroupItemBoxBadgeProvider value={props}>{props.children}</CommandGroupItemBoxBadgeProvider>
    </div>
  );
};

export type UCommandGroupItemBoxBadgeLabelProps = {
  children: React.ReactNode;
  className?: string;
};
export const UCommandGroupItemBoxBadgeLabel = ({ children, className }: UCommandGroupItemBoxBadgeLabelProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  const commandGroupItemBoxBadgeProps = useCommandGroupItemBoxBadgeProvider();
  return (
    <span
      className={commandGroupItemBoxBadgeLabelClass({
        className,
        commandProps,
        commandGroupProps,
        commandGroupItemProps,
        commandGroupItemBoxBadgeProps,
      })}
    >
      {children}
    </span>
  );
};

export type UCommandGroupItemBoxBadgeIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const UCommandGroupItemBoxBadgeIcon = ({ children, className }: UCommandGroupItemBoxBadgeIconProps) => {
  const commandProps = useCommandInternalProvider();
  const commandGroupProps = useCommandGroupInternalProvider();
  const commandGroupItemProps = useCommandGroupItemInternalProvider();
  const commandGroupItemBoxBadgeProps = useCommandGroupItemBoxBadgeProvider();
  return (
    <>
      {children(
        commandGroupItemBoxBadgeIconClass({
          className,
          commandProps,
          commandGroupProps,
          commandGroupItemProps,
          commandGroupItemBoxBadgeProps,
        }),
      )}
    </>
  );
};
