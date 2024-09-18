import {
  LoadingTabsItemLayout,
  TabsItemBadgeLayout,
  TabsItemBadgeWithIconLayout,
  TabsItemDismissLayout,
  TabsItemIndicatorStyleProps,
  TabsItemLayout,
  TabsItemNotificationLayout,
  TabsItemStyleProps,
  TabsItemWithIconLayout,
  TabsLayout,
} from "../../../styles/tabs";
import {
  UTabsRoot,
  UTabsRootProps,
  UTabsItemRoot,
  UTabsItemBadgeIcon,
  UTabsItemBadgeLabel,
  UTabsItemBadgeRoot,
  UTabsItemBadgeRootProps,
  UTabsItemDismissIcon,
  UTabsItemDismissRoot,
  UTabsItemDismissRootProps,
  UTabsItemIcon,
  UTabsItemIndicator,
  UTabsItemLabel,
  UTabsItemLoader,
  UTabsItemNotificationLabel,
  UTabsItemNotificationRoot,
  UTabsItemNotificationRootProps,
  UTabsItemRootProps,
  useTabsInternalProvider,
  useTabsItemInternalProvider,
  UTabsContentProps,
  UTabsContent,
} from "./Tabs.underatoms";

/*
  ====================================
  Tabs
  ====================================
*/

export type TabsProps = UTabsRootProps & {
  itemSlots: React.ReactNode;
};
export const Tabs = ({ itemSlots, ...props }: TabsProps) => {
  return (
    <TabsLayout
      styleProps={{ className: props.className, tabsProps: props }}
      renderRoot={(children, className) => (
        <UTabsRoot {...props} className={className + " " + (props.className ?? "")}>
          {children}
        </UTabsRoot>
      )}
      itemSlots={itemSlots}
    />
  );
};

/*
  ====================================
  TabsContent
  ====================================
*/

export type TabsContentProps = UTabsContentProps;
export const TabsContent = UTabsContent;

/*
  ====================================
  TabsItem
  ====================================
*/

export type TabsItemProps = UTabsItemRootProps & {
  label?: string;
  badgeSlot?: React.ReactNode;
  notificationSlot?: React.ReactNode;
  onDismiss?: () => void;
  indicatorColor?: TabsItemIndicatorStyleProps["color"];
};

export const TabsItem = ({
  label,
  onDismiss,
  badgeSlot,
  notificationSlot,
  indicatorColor,
  ...props
}: TabsItemProps) => {
  const tabsProps = useTabsInternalProvider();
  return (
    <TabsItemLayout
      renderRoot={(children, className) => (
        <UTabsItemRoot {...props} className={className + " " + (props.className ?? "")}>
          {children}
        </UTabsItemRoot>
      )}
      styleProps={{ className: props.className, tabsItemProps: props, tabsProps }}
      labelSlot={label && <UTabsItemLabel>{label} </UTabsItemLabel>}
      dismissSlot={onDismiss && <TabsItemDismiss onPress={onDismiss} />}
      indicatorSlot={indicatorColor && <UTabsItemIndicator color={indicatorColor} />}
      badgeSlot={badgeSlot}
      notificationSlot={notificationSlot}
    />
  );
};

export type TabsItemWithIconProps = UTabsItemRootProps & {
  icon?: (className: string) => React.ReactNode;
  label?: string;
  badgeSlot?: React.ReactNode;
  notificationSlot?: React.ReactNode;
  onDismiss?: () => void;
  indicatorColor?: TabsItemIndicatorStyleProps["color"];
};
export const TabsItemWithIcon = ({
  label,
  icon,
  onDismiss,
  badgeSlot,
  notificationSlot,
  indicatorColor,
  ...props
}: TabsItemWithIconProps) => {
  const tabsProps = useTabsInternalProvider();
  return (
    <TabsItemWithIconLayout
      styleProps={{ className: props.className, tabsItemProps: props, tabsProps }}
      renderRoot={(children, className) => (
        <UTabsItemRoot {...props} className={className + " " + (props.className ?? "")}>
          {children}
        </UTabsItemRoot>
      )}
      labelSlot={label && <UTabsItemLabel>{label} </UTabsItemLabel>}
      iconSlot={icon && <UTabsItemIcon>{icon}</UTabsItemIcon>}
      dismissSlot={onDismiss && <TabsItemDismiss onPress={onDismiss} />}
      indicatorSlot={indicatorColor && <UTabsItemIndicator color={indicatorColor} />}
      badgeSlot={badgeSlot}
      notificationSlot={notificationSlot}
    />
  );
};

export type LoadingTabsItemProps = UTabsItemRootProps &
  Partial<TabsItemStyleProps> & {
    label?: string;
    badgeSlot?: React.ReactNode;
    notificationSlot?: React.ReactNode;
    onDismiss?: () => void;
    indicatorColor?: TabsItemIndicatorStyleProps["color"];
  };
export const LoadingTabsItem = ({
  label,
  onDismiss,
  badgeSlot,
  notificationSlot,
  indicatorColor,
  ...props
}: LoadingTabsItemProps) => {
  const tabsProps = useTabsInternalProvider();
  return (
    <LoadingTabsItemLayout
      styleProps={{ className: props.className, tabsItemProps: props, tabsProps }}
      renderRoot={(children, className) => (
        <UTabsItemRoot {...props} className={className + " " + (props.className ?? "")}>
          {children}
        </UTabsItemRoot>
      )}
      labelSlot={label && <UTabsItemLabel>{label} </UTabsItemLabel>}
      loaderSlot={<UTabsItemLoader />}
      dismissSlot={onDismiss && <TabsItemDismiss onPress={onDismiss} />}
      indicatorSlot={indicatorColor && <UTabsItemIndicator color={indicatorColor} />}
      badgeSlot={badgeSlot}
      notificationSlot={notificationSlot}
    />
  );
};

/*
  ====================================
  TabsItemNotification
  ====================================
*/

export type TabsItemNotificationProps = Omit<UTabsItemNotificationRootProps, "children"> & {
  label: string;
};
export const TabsItemNotification = ({ label, ...props }: TabsItemNotificationProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  return (
    <TabsItemNotificationLayout
      styleProps={{ className: props.className, tabsItemNotificationProps: props, tabsProps, tabsItemProps }}
      renderRoot={(children, className) => (
        <UTabsItemNotificationRoot {...props} className={className + " " + (props.className ?? "")}>
          {children}
        </UTabsItemNotificationRoot>
      )}
      labelSlot={<UTabsItemNotificationLabel>{label}</UTabsItemNotificationLabel>}
    />
  );
};

/*
  ====================================
  TabsItemDismiss
  ====================================
*/

export type TabsItemDismissProps = UTabsItemDismissRootProps;
export const TabsItemDismiss = (props: TabsItemDismissProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  return (
    <TabsItemDismissLayout
      styleProps={{ className: props.className, tabsItemProps, tabsProps }}
      renderRoot={(children, className) => (
        <UTabsItemDismissRoot {...props} className={className + " " + (props.className ?? "")}>
          {children}
        </UTabsItemDismissRoot>
      )}
      iconSlot={<UTabsItemDismissIcon />}
    />
  );
};

/*
  ====================================
  TabsItemBadge
  ====================================
*/

export type TabsItemBadgeProps = Omit<UTabsItemBadgeRootProps, "children"> & {
  label: string;
};

export const TabsItemBadge = ({ label, ...props }: TabsItemBadgeProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  return (
    <TabsItemBadgeLayout
      styleProps={{ className: props.className, tabsItemProps, tabsProps }}
      renderRoot={(children, className) => (
        <UTabsItemBadgeRoot {...props} className={className + " " + (props.className ?? "")}>
          {children}
        </UTabsItemBadgeRoot>
      )}
      labelSlot={<UTabsItemBadgeLabel>{label}</UTabsItemBadgeLabel>}
    />
  );
};

export type TabsItemBadgeWithIconProps = Omit<UTabsItemBadgeRootProps, "children"> & {
  icon?: (className: string) => React.ReactNode;
  label?: string;
};

export const TabsItemBadgeWithIcon = ({ icon, label, ...props }: TabsItemBadgeWithIconProps) => {
  const tabsProps = useTabsInternalProvider();
  const tabsItemProps = useTabsItemInternalProvider();
  return (
    <TabsItemBadgeWithIconLayout
      styleProps={{ className: props.className, tabsItemProps, tabsProps }}
      renderRoot={(children, className) => (
        <UTabsItemBadgeRoot {...props} className={className + " " + (props.className ?? "")}>
          {children}
        </UTabsItemBadgeRoot>
      )}
      iconSlot={icon && <UTabsItemBadgeIcon>{icon}</UTabsItemBadgeIcon>}
      labelSlot={label && <UTabsItemBadgeLabel>{label}</UTabsItemBadgeLabel>}
    />
  );
};
