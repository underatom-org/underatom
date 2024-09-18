import type { RenderRoot } from "../_utils";

/*
  ====================================
  Tabs
  ====================================
*/

export type TabsStyleProps = {
  size?: "md" | "lg";
  variant?: "fill" | "underline" | "handle";
  fullWidth?: true | false;
};

export type TabsType = {
  className?: string;
  tabsProps?: TabsStyleProps;
};

export const tabsDefaults: Required<TabsStyleProps> = {
  size: "md",
  variant: "fill",
  fullWidth: false,
};

export const tabsClass = (_: TabsType) => "";

export const TabsLayout = (_: { renderRoot: RenderRoot; styleProps: TabsType; itemSlots: React.ReactNode }) => <></>;

/*
  ====================================
  TabsItem
  ====================================
*/

export type TabsItemStyleProps = {
  attachment?: "start" | "center" | "end";
};

export type TabsItemIndicatorStyleProps = {
  color?: "primary" | "red";
};

export type TabsItemType = {
  className?: string;
  tabsItemProps?: TabsItemStyleProps;
  tabsProps?: TabsStyleProps;
};

export type TabsItemIndicatorType = {
  className?: string;
  tabsItemProps?: TabsItemStyleProps;
  tabsProps?: TabsStyleProps;
  tabsItemIndicatorProps?: TabsItemIndicatorStyleProps;
};

export const tabsItemDefaults: Required<TabsItemStyleProps> = {
  attachment: "center",
};

export const tabsItemIndicatorDefaults: Required<TabsItemIndicatorStyleProps> = {
  color: "primary",
};

export const tabsItemClass = (_: TabsItemType) => "";
export const tabsItemLabelClass = (_: TabsItemType) => "";
export const tabsItemIndicatorClass = (_: TabsItemIndicatorType) => "";
export const tabsItemIconClass = (_: TabsItemType) => "";
export const tabsItemLoaderClass = (_: TabsItemType) => "";

export const TabsItemLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TabsItemType;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  notificationSlot: React.ReactNode;
  indicatorSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const TabsItemWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TabsItemType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  notificationSlot: React.ReactNode;
  indicatorSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const LoadingTabsItemLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TabsItemType;
  loaderSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  notificationSlot: React.ReactNode;
  indicatorSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) => <></>;
export const IconTabsItemLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TabsItemType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  TabsItemBadge
  ====================================
*/

export type TabsItemBadgeStyleProps = {
  color?: "primary" | "base" | "red" | "green";
};

export type TabsItemBadgeType = {
  className?: string;
  tabsItemBadgeProps?: TabsItemBadgeStyleProps;
  tabsProps?: TabsStyleProps;
  tabsItemProps?: TabsItemStyleProps;
};

export const tabsItemBadgeDefaults: Required<TabsItemBadgeStyleProps> = {
  color: "primary",
};

export const tabsItemBadgeClass = (_: TabsItemBadgeType) => "";
export const tabsItemBadgeLabelClass = (_: TabsItemBadgeType) => "";
export const tabsItemBadgeIconClass = (_: TabsItemBadgeType) => "";

export const TabsItemBadgeLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TabsItemBadgeType;
  labelSlot: React.ReactNode;
}) => <></>;
export const TabsItemBadgeWithIconLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TabsItemBadgeType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  TabsItemDismiss
  ====================================
*/

export type TabsItemDismissType = {
  className?: string;
  tabsProps?: TabsStyleProps;
  tabsItemProps?: TabsItemStyleProps;
};

export const tabsItemDismissClass = (_: TabsItemDismissType) => "";
export const tabsItemDismissIconClass = (_: TabsItemDismissType) => "";

export const TabsItemDismissLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TabsItemDismissType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  TabsItemNotification
  ====================================
*/

export type TabsItemNotificationStyleProps = {
  color?: "primary" | "red";
};

export type TabsItemNotificationType = {
  className?: string;
  tabsItemNotificationProps?: TabsItemNotificationStyleProps;
  tabsProps?: TabsStyleProps;
  tabsItemProps?: TabsItemStyleProps;
};

export const tabsItemNotificationDefaults: Required<TabsItemNotificationStyleProps> = {
  color: "primary",
};

export const tabsItemNotificationClass = (_: TabsItemNotificationType) => "";
export const tabsItemNotificationLabelClass = (_: TabsItemNotificationType) => "";

export const TabsItemNotificationLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: TabsItemNotificationType;
  labelSlot: React.ReactNode;
}) => <></>;
