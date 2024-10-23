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
    <TabsWithContentHelper {...props} value={value} onValueChange={setValue}>
      <ItemSlotsWithDismissHelper
        onDismiss={(v) => {
          if (v === value) {
            setValue("");
          }
        }}
      />
    </TabsWithContentHelper>
  );
};

/*
  ====================================
  variant=fill
  ====================================
*/

const fillDefaultCode = `
<Tabs
  variant="fill"
  defaultValue="1"
  contentSlots={
    <>
      <TabsContent value="1">Home</TabsContent>
      <TabsContent value="2">Profile</TabsContent>
      <TabsContent value="3">Settings</TabsContent>
    </>
  }
>
  <TabsItem value="1" label="Home" />
  <TabsItem value="2" label="Profile" />
  <TabsItem value="3" label="Settings" />
</Tabs>
`;

export const FillDefaultExample = () => {
  return (
    <ShowcaseFrame>
      <TabsWithContentHelper>
        <ItemSlotsHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

const fillSizesCode = `
<Tabs
  variant="fill"
  size="md"
  defaultValue="1"
  contentSlots={
    <>
      <TabsContent value="1">Home</TabsContent>
      <TabsContent value="2">Profile</TabsContent>
      <TabsContent value="3">Settings</TabsContent>
    </>
  }
>
  <TabsItem value="1" label="Home" />
  <TabsItem value="2" label="Profile" />
  <TabsItem value="3" label="Settings" />
</Tabs>
`;

export const FillSizesExample = () => {
  return (
    <ShowcaseFrame code={fillSizesCode}>
      <VariantsColumn>
        <TabsWithContentHelper size="md" variant="fill">
          <ItemSlotsHelper />
        </TabsWithContentHelper>
        <TabsWithContentHelper size="lg" variant="fill">
          <ItemSlotsHelper />
        </TabsWithContentHelper>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const fillDisabledCode = `
<Tabs
  variant="fill"
  disabled
  defaultValue="1"
  contentSlots={
    <>
      <TabsContent value="1">Home</TabsContent>
      <TabsContent value="2">Profile</TabsContent>
      <TabsContent value="3">Settings</TabsContent>
    </>
  }
>
  <TabsItem value="1" label="Home" />
  <TabsItem value="2" label="Profile" />
  <TabsItem value="3" label="Settings" />
</Tabs>
`;

export const FillDisabledExample = () => {
  return (
    <ShowcaseFrame code={fillDisabledCode}>
      <VariantsColumn>
        <TabsWithContentHelper disabled variant="fill">
          <ItemSlotsHelper />
        </TabsWithContentHelper>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const fillWithBadgeCode = `
<Tabs
  variant="fill"
  defaultValue="1"
  contentSlots={
    <>
      <TabsContent value="1">Home</TabsContent>
      <TabsContent value="2">Profile</TabsContent>
      <TabsContent value="3">Settings</TabsContent>
    </>
  }
>
  <TabsItem value="1" label="Home" badgeSlot={<TabsItemBadge label="New" color="primary" />} />
  <TabsItem value="2" label="Profile" badgeSlot={<TabsItemBadge label="Updated" color="green" />} />
  <TabsItem value="3" label="Settings" badgeSlot={<TabsItemBadge label="Action needed" color="red" />} />
</Tabs>
`;

export const FillWithBadgeExample = () => {
  return (
    <ShowcaseFrame code={fillWithBadgeCode}>
      <TabsWithContentHelper variant="fill">
        <ItemSlotsWithBadgeHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

const fillWithNotificationCode = `
<Tabs
  variant="fill"
  defaultValue="1"
  contentSlots={
    <>
      <TabsContent value="1">Home</TabsContent>
      <TabsContent value="2">Profile</TabsContent>
      <TabsContent value="3">Settings</TabsContent>
    </>
  }
>
  <TabsItem value="1" label="Home" />
  <TabsItem value="2" label="Profile" notificationSlot={<TabsItemNotification label="+9" />} />
  <TabsItem value="3" label="Settings" />
</Tabs>
`;

export const FillWithNotificationExample = () => {
  return (
    <ShowcaseFrame code={fillWithNotificationCode}>
      <TabsWithContentHelper variant="fill">
        <ItemSlotsWithNotificationHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

const fillWithIndicatorCode = `
<Tabs
  variant="fill"
  defaultValue="1"
  contentSlots={
    <>
      <TabsContent value="1">Home</TabsContent>
      <TabsContent value="2">Profile</TabsContent>
      <TabsContent value="3">Settings</TabsContent>
    </>
  }
>
  <TabsItem value="1" label="Home" />
  <TabsItem value="2" label="Profile" indicatorColor="primary" />
  <TabsItem value="3" label="Settings" indicatorColor="red" />
</Tabs>
`;

export const FillWithIndicatorExample = () => {
  return (
    <ShowcaseFrame code={fillWithIndicatorCode}>
      <TabsWithContentHelper variant="fill">
        <ItemSlotsWithIndicatorHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

const fillWithDismissCode = `
const FillWithDismissExample = (props: Partial<TabsProps>) => {
  const [value, setValue] = useState<string>("1");
  const [dismissed, setDismissed] = useState<string[]>([]);
  const handleDismiss = (value: string) => {
    setDismissed((prev) => [...prev, value]);
    onDismiss(value);
  };

  return (
    <Tabs
      variant="fill"
      defaultValue="1"
      contentSlots={
        <>
          <TabsContent value="1">Home</TabsContent>
          <TabsContent value="2">Profile</TabsContent>
          <TabsContent value="3">Settings</TabsContent>
        </>
      }
    >
      {!dismissed.includes("1") && <TabsItem value="1" label="Home" onDismiss={() => handleDismiss("1")} />}
      {!dismissed.includes("2") && <TabsItem value="2" label="Profile" onDismiss={() => handleDismiss("2")} />}
      {!dismissed.includes("3") && (
        <TabsItem disabled value="3" label="Settings" onDismiss={() => handleDismiss("3")} />
      )}
    </Tabs>
  );
};
`;

export const FillWithDismissExample = () => {
  return (
    <ShowcaseFrame code={fillWithDismissCode}>
      <TabsWithDismissHelper variant="fill" />
    </ShowcaseFrame>
  );
};

const fillFullWidthCode = `
<Tabs
  variant="fill"
  fullWidth
  defaultValue="1"
  contentSlots={
    <>
      <TabsContent value="1">Home</TabsContent>
      <TabsContent value="2">Profile</TabsContent>
      <TabsContent value="3">Settings</TabsContent>
    </>
  }
>
  <TabsItemWithIcon value="1" label="Home" icon={(className) => <IconHome className={className} />} />
  <TabsItemWithIcon value="2" label="Profile" icon={(className) => <IconUserCircle className={className} />} />
  <TabsItemWithIcon
    disabled
    value="3"
    label="Settings"
    icon={(className) => <IconSettings className={className} />}
  />
</Tabs>
`;

export const FillFullWidthExample = () => {
  return (
    <ShowcaseFrame code={fillFullWidthCode}>
      <TabsWithContentHelper fullWidth variant="fill">
        <ItemSlotsWithIconHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

const fillWithIconCode = `
<Tabs
  variant="fill"
  defaultValue="1"
  contentSlots={
    <>
      <TabsContent value="1">Home</TabsContent>
      <TabsContent value="2">Profile</TabsContent>
      <TabsContent value="3">Settings</TabsContent>
    </>
  }
>
  <TabsItemWithIcon value="1" label="Home" icon={(className) => <IconHome className={className} />} />
  <TabsItemWithIcon value="2" label="Profile" icon={(className) => <IconUserCircle className={className} />} />
  <TabsItemWithIcon
    disabled
    value="3"
    label="Settings"
    icon={(className) => <IconSettings className={className} />}
  />
</Tabs>
`;

export const FillWithIconExample = () => {
  return (
    <ShowcaseFrame code={fillWithIconCode}>
      <TabsWithContentHelper variant="fill">
        <ItemSlotsWithIconHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

const fillWithLoadingCode = `
<Tabs
  variant="fill"
  defaultValue="1"
  contentSlots={
    <>
      <TabsContent value="1">Home</TabsContent>
      <TabsContent value="2">Profile</TabsContent>
      <TabsContent value="3">Settings</TabsContent>
    </>
  }
>
  <LoadingTabsItem value="1" label="Home" />
  <LoadingTabsItem value="2" label="Profile" />
  <LoadingTabsItem disabled value="3" label="Settings" />
</Tabs>
`;

export const FillWithLoadingExample = () => {
  return (
    <ShowcaseFrame code={fillWithLoadingCode}>
      <TabsWithContentHelper variant="fill">
        <ItemSlotsLoadingHelper />
      </TabsWithContentHelper>
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
    <ShowcaseFrame code={fillDefaultCode.replace("fill", "underline")}>
      <TabsWithContentHelper variant="underline">
        <ItemSlotsHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

export const UnderlineSizesExample = () => {
  return (
    <ShowcaseFrame code={fillSizesCode.replace("fill", "underline")}>
      <VariantsColumn>
        <TabsWithContentHelper size="md" variant="underline">
          <ItemSlotsHelper />
        </TabsWithContentHelper>
        <TabsWithContentHelper size="lg" variant="underline">
          <ItemSlotsHelper />
        </TabsWithContentHelper>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const UnderlineDisabledExample = () => {
  return (
    <ShowcaseFrame code={fillDisabledCode.replace("fill", "underline")}>
      <VariantsColumn>
        <TabsWithContentHelper disabled variant="underline">
          <ItemSlotsHelper />
        </TabsWithContentHelper>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const UnderlineWithBadgeExample = () => {
  return (
    <ShowcaseFrame code={fillWithBadgeCode.replace("fill", "underline")}>
      <TabsWithContentHelper variant="underline">
        <ItemSlotsWithBadgeHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

export const UnderlineWithNotificationExample = () => {
  return (
    <ShowcaseFrame code={fillWithNotificationCode.replace("fill", "underline")}>
      <TabsWithContentHelper variant="underline">
        <ItemSlotsWithNotificationHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};
export const UnderlineWithIndicatorExample = () => {
  return (
    <ShowcaseFrame code={fillWithIndicatorCode.replace("fill", "underline")}>
      <TabsWithContentHelper variant="underline">
        <ItemSlotsWithIndicatorHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

export const UnderlineWithDismissExample = () => {
  return (
    <ShowcaseFrame code={fillWithDismissCode.replace("fill", "underline")}>
      <TabsWithDismissHelper variant="underline" />
    </ShowcaseFrame>
  );
};

export const UnderlineFullWidthExample = () => {
  return (
    <ShowcaseFrame code={fillFullWidthCode.replace("fill", "underline")}>
      <TabsWithContentHelper fullWidth variant="underline">
        <ItemSlotsWithIconHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

export const UnderlineWithIconExample = () => {
  return (
    <ShowcaseFrame code={fillWithIconCode.replace("fill", "underline")}>
      <TabsWithContentHelper variant="underline">
        <ItemSlotsWithIconHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

export const UnderlineWithLoadingExample = () => {
  return (
    <ShowcaseFrame code={fillWithLoadingCode.replace("fill", "underline")}>
      <TabsWithContentHelper variant="underline">
        <ItemSlotsLoadingHelper />
      </TabsWithContentHelper>
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
    <ShowcaseFrame code={fillDefaultCode.replace("fill", "handle")}>
      <TabsWithContentHelper variant="handle">
        <ItemSlotsHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

export const HandleSizesExample = () => {
  return (
    <ShowcaseFrame code={fillSizesCode.replace("fill", "handle")}>
      <VariantsColumn>
        <TabsWithContentHelper size="md" variant="handle">
          <ItemSlotsHelper />
        </TabsWithContentHelper>
        <TabsWithContentHelper size="lg" variant="handle">
          <ItemSlotsHelper />
        </TabsWithContentHelper>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const HandleDisabledExample = () => {
  return (
    <ShowcaseFrame code={fillDisabledCode.replace("fill", "handle")}>
      <VariantsColumn>
        <TabsWithContentHelper disabled variant="handle">
          <ItemSlotsHelper />
        </TabsWithContentHelper>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const HandleWithBadgeExample = () => {
  return (
    <ShowcaseFrame code={fillWithBadgeCode.replace("fill", "handle")}>
      <TabsWithContentHelper variant="handle">
        <ItemSlotsWithBadgeHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

export const HandleWithNotificationExample = () => {
  return (
    <ShowcaseFrame code={fillWithNotificationCode.replace("fill", "handle")}>
      <TabsWithContentHelper variant="handle">
        <ItemSlotsWithNotificationHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};
export const HandleWithIndicatorExample = () => {
  return (
    <ShowcaseFrame code={fillWithIndicatorCode.replace("fill", "handle")}>
      <TabsWithContentHelper variant="handle">
        <ItemSlotsWithIndicatorHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

export const HandleWithDismissExample = () => {
  return (
    <ShowcaseFrame code={fillWithDismissCode.replace("fill", "handle")}>
      <TabsWithDismissHelper variant="handle" />
    </ShowcaseFrame>
  );
};

export const HandleFullWidthExample = () => {
  return (
    <ShowcaseFrame code={fillFullWidthCode.replace("fill", "handle")}>
      <TabsWithContentHelper fullWidth variant="handle">
        <ItemSlotsWithIconHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

export const HandleWithIconExample = () => {
  return (
    <ShowcaseFrame code={fillWithIconCode.replace("fill", "handle")}>
      <TabsWithContentHelper variant="handle">
        <ItemSlotsWithIconHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

export const HandleWithLoadingExample = () => {
  return (
    <ShowcaseFrame code={fillWithLoadingCode.replace("fill", "handle")}>
      <TabsWithContentHelper variant="handle">
        <ItemSlotsLoadingHelper />
      </TabsWithContentHelper>
    </ShowcaseFrame>
  );
};

const TabsDocs = () => {
  return (
    <Page
      title="Tabs"
      subtitle="Tabs"
      command="npx underatom@latest add tabs"
      usageCode={fillDefaultCode}
      defaultExample={<FillDefaultExample />}
    >
      <Section title="Fill Variant">
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
