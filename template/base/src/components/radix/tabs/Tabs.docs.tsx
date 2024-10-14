import {
  LoadingTabsItem,
  TabsItem,
  TabsItemBadge,
  TabsItemNotification,
  TabsItemWithIcon,
  Tabs,
  TabsProps,
  TabsContent,
} from "./Tabs.atoms";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsColumn } from "../../../docs/docs.components";
import { IconHome, IconSettings, IconUserCircle } from "@tabler/icons-react";
import { useState } from "react";

/*
  ====================================
  Helpers
  ====================================
*/

const TabsWithContentHelper = (props: TabsProps) => {
  return (
    <Tabs
      {...props}
      defaultValue="1"
      contentSlots={
        <>
          <TabsContent value="1">Home</TabsContent>
          <TabsContent value="2">Profile</TabsContent>
          <TabsContent value="3">Settings</TabsContent>
          <TabsContent value="4">Notifications</TabsContent>
          <TabsContent value="5">Mails</TabsContent>
        </>
      }
    />
  );
};

const ItemSlotsHelper = () => {
  return (
    <>
      <TabsItem value="1" label="Home" />
      <TabsItem value="2" label="Profile" />
      <TabsItem value="3" label="Settings" />
    </>
  );
};

const ItemSlotsWithBadgeHelper = () => {
  return (
    <>
      <TabsItem value="1" label="Home" badgeSlot={<TabsItemBadge label="New" color="primary" />} />
      <TabsItem value="2" label="Profile" badgeSlot={<TabsItemBadge label="Updated" color="green" />} />
      <TabsItem value="3" label="Settings" badgeSlot={<TabsItemBadge label="Action needed" color="red" />} />
      <TabsItem value="4" label="Notifications" disabled badgeSlot={<TabsItemBadge label="Unread" color="base" />} />
    </>
  );
};

const ItemSlotsWithNotificationHelper = () => {
  return (
    <>
      <TabsItem value="1" label="Home" />
      <TabsItem value="2" label="Profile" notificationSlot={<TabsItemNotification label="+9" />} />
      <TabsItem value="3" label="Settings" />
      <TabsItem value="4" label="Notifications" notificationSlot={<TabsItemNotification label="+2" color="red" />} />
      <TabsItem value="5" label="Mails" disabled notificationSlot={<TabsItemNotification label="+4" />} />
    </>
  );
};

const ItemSlotsWithIndicatorHelper = () => {
  return (
    <>
      <TabsItem value="1" label="Home" />
      <TabsItem value="2" label="Profile" indicatorColor="primary" />
      <TabsItem value="3" label="Settings" indicatorColor="red" />
      <TabsItem disabled value="4" label="Alerts" indicatorColor="red" />
    </>
  );
};

const ItemSlotsWithDismissHelper = ({ onDismiss }: { onDismiss: (value: string) => void }) => {
  const [dismissed, setDismissed] = useState<string[]>([]);
  const handleDismiss = (value: string) => {
    setDismissed((prev) => [...prev, value]);
    onDismiss(value);
  };

  return (
    <>
      {!dismissed.includes("1") && <TabsItem value="1" label="Home" onDismiss={() => handleDismiss("1")} />}
      {!dismissed.includes("2") && <TabsItem value="2" label="Profile" onDismiss={() => handleDismiss("2")} />}
      {!dismissed.includes("3") && (
        <TabsItem disabled value="3" label="Settings" onDismiss={() => handleDismiss("3")} />
      )}
    </>
  );
};

const ItemSlotsWithIconHelper = () => {
  return (
    <>
      <TabsItemWithIcon value="1" label="Home" icon={(className) => <IconHome className={className} />} />
      <TabsItemWithIcon value="2" label="Profile" icon={(className) => <IconUserCircle className={className} />} />
      <TabsItemWithIcon
        disabled
        value="3"
        label="Settings"
        icon={(className) => <IconSettings className={className} />}
      />
    </>
  );
};

const ItemSlotsLoadingHelper = () => {
  return (
    <>
      <LoadingTabsItem value="1" label="Home" />
      <LoadingTabsItem value="2" label="Profile" />
      <LoadingTabsItem disabled value="3" label="Settings" />
    </>
  );
};

const TabsWithDismissHelper = (props: Partial<TabsProps>) => {
  const [value, setValue] = useState<string>("1");

  return (
    <TabsWithContentHelper
      {...props}
      value={value}
      onValueChange={setValue}
      itemSlots={
        <ItemSlotsWithDismissHelper
          onDismiss={(v) => {
            if (v === value) {
              setValue("");
            }
          }}
        />
      }
    />
  );
};

/*
  ====================================
  variant=fill
  ====================================
*/

export const FillDefaultExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper itemSlots={<ItemSlotsHelper />} />
    </ShowcaseFrame>
  );
};

export const FillSizesExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <TabsWithContentHelper size="md" variant="fill" itemSlots={<ItemSlotsHelper />} />
        <TabsWithContentHelper size="lg" variant="fill" itemSlots={<ItemSlotsHelper />} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const FillDisabledExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <TabsWithContentHelper disabled variant="fill" itemSlots={<ItemSlotsHelper />} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const FillWithBadgeExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="fill" itemSlots={<ItemSlotsWithBadgeHelper />} />
    </ShowcaseFrame>
  );
};

export const FillWithNotificationExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="fill" itemSlots={<ItemSlotsWithNotificationHelper />} />
    </ShowcaseFrame>
  );
};
export const FillWithIndicatorExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="fill" itemSlots={<ItemSlotsWithIndicatorHelper />} />
    </ShowcaseFrame>
  );
};

export const FillWithDismissExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithDismissHelper variant="fill" />
    </ShowcaseFrame>
  );
};

export const FillFullWidthExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper fullWidth variant="fill" itemSlots={<ItemSlotsWithIconHelper />} />
    </ShowcaseFrame>
  );
};

export const FillWithIconExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="fill" itemSlots={<ItemSlotsWithIconHelper />} />
    </ShowcaseFrame>
  );
};

export const FillWithLoadingExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="fill" itemSlots={<ItemSlotsLoadingHelper />} />
    </ShowcaseFrame>
  );
};

/*
  ====================================
  variant=underline
  ====================================
*/

export const UnderlineDefaultExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="underline" itemSlots={<ItemSlotsHelper />} />
    </ShowcaseFrame>
  );
};

export const UnderlineSizesExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <TabsWithContentHelper size="md" variant="underline" itemSlots={<ItemSlotsHelper />} />
        <TabsWithContentHelper size="lg" variant="underline" itemSlots={<ItemSlotsHelper />} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const UnderlineDisabledExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <TabsWithContentHelper disabled variant="underline" itemSlots={<ItemSlotsHelper />} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const UnderlineWithBadgeExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="underline" itemSlots={<ItemSlotsWithBadgeHelper />} />
    </ShowcaseFrame>
  );
};

export const UnderlineWithNotificationExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="underline" itemSlots={<ItemSlotsWithNotificationHelper />} />
    </ShowcaseFrame>
  );
};
export const UnderlineWithIndicatorExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="underline" itemSlots={<ItemSlotsWithIndicatorHelper />} />
    </ShowcaseFrame>
  );
};

export const UnderlineWithDismissExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithDismissHelper variant="underline" />
    </ShowcaseFrame>
  );
};

export const UnderlineFullWidthExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper fullWidth variant="underline" itemSlots={<ItemSlotsWithIconHelper />} />
    </ShowcaseFrame>
  );
};

export const UnderlineWithIconExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="underline" itemSlots={<ItemSlotsWithIconHelper />} />
    </ShowcaseFrame>
  );
};

export const UnderlineWithLoadingExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="underline" itemSlots={<ItemSlotsLoadingHelper />} />
    </ShowcaseFrame>
  );
};

/*
  ====================================
  variant=handle
  ====================================
*/

export const HandleDefaultExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="handle" itemSlots={<ItemSlotsHelper />} />
    </ShowcaseFrame>
  );
};

export const HandleSizesExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <TabsWithContentHelper size="md" variant="handle" itemSlots={<ItemSlotsHelper />} />
        <TabsWithContentHelper size="lg" variant="handle" itemSlots={<ItemSlotsHelper />} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const HandleDisabledExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <TabsWithContentHelper disabled variant="handle" itemSlots={<ItemSlotsHelper />} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const HandleWithBadgeExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="handle" itemSlots={<ItemSlotsWithBadgeHelper />} />
    </ShowcaseFrame>
  );
};

export const HandleWithNotificationExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="handle" itemSlots={<ItemSlotsWithNotificationHelper />} />
    </ShowcaseFrame>
  );
};
export const HandleWithIndicatorExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="handle" itemSlots={<ItemSlotsWithIndicatorHelper />} />
    </ShowcaseFrame>
  );
};

export const HandleWithDismissExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithDismissHelper variant="handle" />
    </ShowcaseFrame>
  );
};

export const HandleFullWidthExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper fullWidth variant="handle" itemSlots={<ItemSlotsWithIconHelper />} />
    </ShowcaseFrame>
  );
};

export const HandleWithIconExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="handle" itemSlots={<ItemSlotsWithIconHelper />} />
    </ShowcaseFrame>
  );
};

export const HandleWithLoadingExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper variant="handle" itemSlots={<ItemSlotsLoadingHelper />} />
    </ShowcaseFrame>
  );
};

const TabsDocs = () => {
  return (
    <Page title="Tabs" subtitle="Tabs" command="npx underatom@latest add tabs">
      <Section title="Fill Variant">
        <Example title="Default">
          <FillDefaultExample />
        </Example>
        <Example title="Sizes">
          <FillSizesExample />
        </Example>
        <Example title="Disabled">
          <FillDisabledExample />
        </Example>
        <Example title="With Badge">
          <FillWithBadgeExample />
        </Example>
        <Example title="With Notification">
          <FillWithNotificationExample />
        </Example>
        <Example title="With Indicator">
          <FillWithIndicatorExample />
        </Example>
        <Example title="With Dismiss">
          <FillWithDismissExample />
        </Example>
        <Example title="FullWidth">
          <FillFullWidthExample />
        </Example>
        <Example title="With Icon">
          <FillWithIconExample />
        </Example>
        <Example title="With Loading">
          <FillWithLoadingExample />
        </Example>
      </Section>
      <Section title="Underline Variant">
        <Example title="Default">
          <UnderlineDefaultExample />
        </Example>
        <Example title="Sizes">
          <UnderlineSizesExample />
        </Example>
        <Example title="Disabled">
          <UnderlineDisabledExample />
        </Example>
        <Example title="With Badge">
          <UnderlineWithBadgeExample />
        </Example>
        <Example title="With Notification">
          <UnderlineWithNotificationExample />
        </Example>
        <Example title="With Indicator">
          <UnderlineWithIndicatorExample />
        </Example>
        <Example title="With Dismiss">
          <UnderlineWithDismissExample />
        </Example>
        <Example title="FullWidth">
          <UnderlineFullWidthExample />
        </Example>
        <Example title="With Icon">
          <UnderlineWithIconExample />
        </Example>
        <Example title="With Loading">
          <UnderlineWithLoadingExample />
        </Example>
      </Section>
      <Section title="Handle Variant">
        <Example title="Default">
          <HandleDefaultExample />
        </Example>
        <Example title="Sizes">
          <HandleSizesExample />
        </Example>
        <Example title="Disabled">
          <HandleDisabledExample />
        </Example>
        <Example title="With Badge">
          <HandleWithBadgeExample />
        </Example>
        <Example title="With Notification">
          <HandleWithNotificationExample />
        </Example>
        <Example title="With Indicator">
          <HandleWithIndicatorExample />
        </Example>
        <Example title="With Dismiss">
          <HandleWithDismissExample />
        </Example>
        <Example title="FullWidth">
          <HandleFullWidthExample />
        </Example>
        <Example title="With Icon">
          <HandleWithIconExample />
        </Example>
        <Example title="With Loading">
          <HandleWithLoadingExample />
        </Example>
      </Section>
    </Page>
  );
};

const tabsRoute = "/tabs";
export const tabsRouteObj: DocsRoute<typeof tabsRoute> = {
  path: tabsRoute,
  group: "radix",
  label: "Tabs",
  component: TabsDocs,
};
