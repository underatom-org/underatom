import {
  SideNav,
  SideNavGroup,
  SideNavGroupHeader,
  SideNavGroupItem,
  SideNavGroupItemBox,
  SideNavGroupItemBoxBadge,
} from "./SideNav.atoms";
import { DocsRoute } from "../../../docs/docs.types";
import { Page, ShowcaseFrame, Section, Example } from "../../../docs/docs.components";

const defaultCode = `
<SideNav accordionProps={{ defaultValue: ["1", "2", "3"], type: "multiple" }}>
  <SideNavGroup value="1" headerSlot={<SideNavGroupHeader label="Dashboard" hasCaret />}>
    <SideNavGroupItem value="1">
      <SideNavGroupItemBox label="Overview" />
    </SideNavGroupItem>
    <SideNavGroupItem value="2">
      <SideNavGroupItemBox label="Reports" badgeSlot={<SideNavGroupItemBoxBadge text="New" />} />
    </SideNavGroupItem>
    <SideNavGroupItem value="3">
      <SideNavGroupItemBox label="Analytics" />
    </SideNavGroupItem>
    <SideNavGroupItem value="4">
      <SideNavGroupItemBox label="Export" />
    </SideNavGroupItem>
  </SideNavGroup>
  <SideNavGroup value="2" headerSlot={<SideNavGroupHeader label="User Management" hasCaret />}>
    <SideNavGroupItem value="5">
      <SideNavGroupItemBox label="Users" />
    </SideNavGroupItem>
    <SideNavGroupItem value="6">
      <SideNavGroupItemBox label="Roles" />
    </SideNavGroupItem>
    <SideNavGroupItem value="7">
      <SideNavGroupItemBox label="Permissions" />
    </SideNavGroupItem>
    <SideNavGroupItem value="8">
      <SideNavGroupItemBox label="Audit Logs" />
    </SideNavGroupItem>
  </SideNavGroup>
  <SideNavGroup value="3" headerSlot={<SideNavGroupHeader label="Settings" hasCaret />}>
    <SideNavGroupItem value="9">
      <SideNavGroupItemBox label="Profile" />
    </SideNavGroupItem>
    <SideNavGroupItem value="10">
      <SideNavGroupItemBox label="Security" />
    </SideNavGroupItem>
    <SideNavGroupItem value="11">
      <SideNavGroupItemBox label="Notifications" badgeSlot={<SideNavGroupItemBoxBadge text="9+" />} />
    </SideNavGroupItem>
    <SideNavGroupItem value="12">
      <SideNavGroupItemBox label="Integrations" />
    </SideNavGroupItem>
  </SideNavGroup>
</SideNav>
`;

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <SideNav accordionProps={{ defaultValue: ["1", "2", "3"], type: "multiple" }}>
        <SideNavGroup value="1" headerSlot={<SideNavGroupHeader label="Dashboard" hasCaret />}>
          <SideNavGroupItem value="1">
            <SideNavGroupItemBox label="Overview" />
          </SideNavGroupItem>
          <SideNavGroupItem value="2">
            <SideNavGroupItemBox label="Reports" badgeSlot={<SideNavGroupItemBoxBadge text="New" />} />
          </SideNavGroupItem>
          <SideNavGroupItem value="3">
            <SideNavGroupItemBox label="Analytics" />
          </SideNavGroupItem>
          <SideNavGroupItem value="4">
            <SideNavGroupItemBox label="Export" />
          </SideNavGroupItem>
        </SideNavGroup>
        <SideNavGroup value="2" headerSlot={<SideNavGroupHeader label="User Management" hasCaret />}>
          <SideNavGroupItem value="5">
            <SideNavGroupItemBox label="Users" />
          </SideNavGroupItem>
          <SideNavGroupItem value="6">
            <SideNavGroupItemBox label="Roles" />
          </SideNavGroupItem>
          <SideNavGroupItem value="7">
            <SideNavGroupItemBox label="Permissions" />
          </SideNavGroupItem>
          <SideNavGroupItem value="8">
            <SideNavGroupItemBox label="Audit Logs" />
          </SideNavGroupItem>
        </SideNavGroup>
        <SideNavGroup value="3" headerSlot={<SideNavGroupHeader label="Settings" hasCaret />}>
          <SideNavGroupItem value="9">
            <SideNavGroupItemBox label="Profile" />
          </SideNavGroupItem>
          <SideNavGroupItem value="10">
            <SideNavGroupItemBox label="Security" />
          </SideNavGroupItem>
          <SideNavGroupItem value="11">
            <SideNavGroupItemBox label="Notifications" badgeSlot={<SideNavGroupItemBoxBadge text="9+" />} />
          </SideNavGroupItem>
          <SideNavGroupItem value="12">
            <SideNavGroupItemBox label="Integrations" />
          </SideNavGroupItem>
        </SideNavGroup>
      </SideNav>
    </ShowcaseFrame>
  );
};

const SideNavDocs = () => {
  return (
    <Page
      title="SideNav"
      subtitle="Side navigation with collapsible groups."
      command="npx underatom@latest add side-nav"
      usageCode={defaultCode}
      defaultExample={<DefaultExample />}
    />
  );
};

const sideNavRoute = "/side-nav";
export const sideNavRouteObj: DocsRoute<typeof sideNavRoute> = {
  path: sideNavRoute,
  group: "radix",
  label: "SideNav",
  component: SideNavDocs,
};
