import { ReactNode, useRef } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { useFocusRing, mergeProps, AriaButtonProps, useButton } from "react-aria";
import {
  tabsClass,
  tabsItemBadgeClass,
  tabsItemBadgeIconClass,
  tabsItemBadgeLabelClass,
  TabsItemBadgeStyleProps,
  tabsItemClass,
  tabsItemDismissClass,
  tabsItemDismissIconClass,
  tabsItemIconClass,
  tabsItemIndicatorClass,
  TabsItemIndicatorStyleProps,
  tabsItemLabelClass,
  tabsItemLoaderClass,
  tabsItemNotificationClass,
  tabsItemNotificationLabelClass,
  TabsItemNotificationStyleProps,
  TabsItemStyleProps,
  TabsStyleProps,
} from "../../../styles/tabs";
import { X, Loader } from "../../../assets/Icons";
import { getGenericContext } from "../../../_utils";

/*
  ====================================
  Tabs
  ====================================
*/

export const { Provider: TabsInternalProvider, useComponentContext: useTabsInternalProvider } =
  getGenericContext<UTabsRootProps>("TabsInternalProvider");

export type UTabsRootProps = Tabs.TabsProps &
  TabsStyleProps & {
    disabled?: boolean;
    contentSlots?: ReactNode;
  };
export const UTabsRoot = ({ className, contentSlots, ...props }: UTabsRootProps) => {
  return (
    <Tabs.Root style={{ width: props.variant === "underline" || props.fullWidth ? "100%" : undefined }} {...props}>
      <Tabs.List data-disabled={props.disabled} className={tabsClass({ className: className, tabsProps: props })}>
        <TabsInternalProvider value={props}>{props.children}</TabsInternalProvider>
      </Tabs.List>
      {contentSlots}
    </Tabs.Root>
  );
};

/*
  ====================================
  TabsContent
  ====================================
*/

export type UTabsContentProps = Tabs.TabsContentProps;
export const UTabsContent = Tabs.Content;

/*
  ====================================
  TabsItem
  ====================================
*/

export const { Provider: TabsItemInternalProvider, useComponentContext: useTabsItemInternalProvider } =
  getGenericContext<UTabsItemRootProps>("TabsItemInternalProvider");

export type UTabsItemRootProps = Omit<Tabs.TabsTriggerProps, "asChild"> & TabsItemStyleProps;
export const UTabsItemRoot = (props: UTabsItemRootProps) => {
  const { focusProps, isFocusVisible } = useFocusRing();
  const tabsProps = useTabsInternalProvider();
  return (
    <Tabs.Trigger
      {...mergeProps(focusProps, { ...props, disabled: !!tabsProps.disabled || !!props.disabled })}
      data-ring={isFocusVisible}
      className={tabsItemClass({ className: props.className, tabsProps, tabsItemProps: props })}
    >
      <TabsItemInternalProvider value={props}>{props.children}</TabsItemInternalProvider>
    </Tabs.Trigger>
  );
};

export type UTabsItemLabelProps = {
  children: ReactNode;
  className?: string;
};
export const UTabsItemLabel = ({ children, className }: UTabsItemLabelProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  return <span className={tabsItemLabelClass({ className, tabsItemProps, tabsProps })}>{children}</span>;
};

export type UTabsItemIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const UTabsItemIcon = ({ children, className }: UTabsItemIconProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  return <span>{children(tabsItemIconClass({ className, tabsItemProps, tabsProps }))}</span>;
};

export type UTabsItemLoaderProps = {
  className?: string;
};
export const UTabsItemLoader = ({ className }: UTabsItemLoaderProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  return <Loader className={tabsItemLoaderClass({ className, tabsItemProps, tabsProps })} />;
};

export type UTabsItemIndicatorProps = TabsItemIndicatorStyleProps & {
  className?: string;
};
export const UTabsItemIndicator = (props: UTabsItemIndicatorProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  return (
    <span
      className={tabsItemIndicatorClass({
        className: props.className,
        tabsItemProps,
        tabsProps,
        tabsItemIndicatorProps: props,
      })}
    ></span>
  );
};

/*
  ====================================
  TabsItemBadge
  ====================================
*/
export const { Provider: TabsItemBadgeInternalProvider, useComponentContext: useTabsItemBadgeInternalProvider } =
  getGenericContext<UTabsItemBadgeRootProps>("TabsItemBadgeInternalProvider");

export type UTabsItemBadgeRootProps = TabsItemBadgeStyleProps & {
  className?: string;
  children?: ReactNode;
};
export const UTabsItemBadgeRoot = (props: UTabsItemBadgeRootProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  return (
    <div
      className={tabsItemBadgeClass({
        className: props.className,
        tabsItemBadgeProps: props,
        tabsProps,
        tabsItemProps,
      })}
    >
      <TabsItemBadgeInternalProvider value={props}>{props.children}</TabsItemBadgeInternalProvider>
    </div>
  );
};

export type UTabsItemBadgeLabelProps = {
  children: ReactNode;
  className?: string;
};
export const UTabsItemBadgeLabel = ({ children, className }: UTabsItemBadgeLabelProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  const tabsItemBadgeProps = useTabsItemBadgeInternalProvider();
  return (
    <span className={tabsItemBadgeLabelClass({ className, tabsItemBadgeProps, tabsItemProps, tabsProps })}>
      {children}
    </span>
  );
};

/*
  ====================================
  TabsItemDismiss
  ====================================
*/

export type UTabsItemDismissRootProps = AriaButtonProps<"button"> & {
  innerRef?: React.RefObject<HTMLButtonElement>;
  className?: string;
};
export const UTabsItemDismissRoot = ({ className, ...props }: UTabsItemDismissRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  const { innerRef = refs } = props;
  const propsWithDisabled = {
    ...props,
    isDisabled: !!props.isDisabled || !!tabsProps.disabled || !!tabsItemProps.disabled,
  };
  const { buttonProps, isPressed } = useButton(propsWithDisabled, refs);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      className={tabsItemDismissClass({ className, tabsItemProps, tabsProps })}
      {...mergeProps(buttonProps, focusProps, {
        onFocus: (event: React.FocusEvent<HTMLButtonElement>) => {
          event.preventDefault();
        },
      })}
    >
      {props.children}
    </button>
  );
};

export type UTabsItemDismissIconProps = {
  className?: string;
};
export const UTabsItemDismissIcon = ({ className }: UTabsItemDismissIconProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  return <X className={tabsItemDismissIconClass({ className, tabsItemProps, tabsProps })} />;
};

export type UTabsItemBadgeIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const UTabsItemBadgeIcon = ({ children, className }: UTabsItemBadgeIconProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  const tabsItemBadgeProps = useTabsItemBadgeInternalProvider();
  return <span>{children(tabsItemBadgeIconClass({ className, tabsItemBadgeProps, tabsItemProps, tabsProps }))}</span>;
};

/*
  ====================================
  TabsItemNotification
  ====================================
*/

export const {
  Provider: TabsItemNotificationInternalProvider,
  useComponentContext: useTabsItemNotificationInternalProvider,
} = getGenericContext<UTabsItemNotificationRootProps>("TabsItemNotificationInternalProvider");

export type UTabsItemNotificationRootProps = TabsItemNotificationStyleProps & {
  className?: string;
  children: ReactNode;
};
export const UTabsItemNotificationRoot = (props: UTabsItemNotificationRootProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  return (
    <div
      className={tabsItemNotificationClass({
        className: props.className,
        tabsItemNotificationProps: props,
        tabsItemProps,
        tabsProps,
      })}
    >
      <TabsItemNotificationInternalProvider value={props}>{props.children}</TabsItemNotificationInternalProvider>
    </div>
  );
};

export type UTabsItemNotificationLabelProps = {
  children: ReactNode;
  className?: string;
};
export const UTabsItemNotificationLabel = ({ children, className }: UTabsItemNotificationLabelProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  const tabsItemNotificationProps = useTabsItemNotificationInternalProvider();
  return (
    <span
      className={tabsItemNotificationLabelClass({ className, tabsProps, tabsItemProps, tabsItemNotificationProps })}
    >
      {children}
    </span>
  );
};
