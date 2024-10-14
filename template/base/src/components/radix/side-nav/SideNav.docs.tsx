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

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <SideNav
        accordionProps={{ defaultValue: ["1", "2", "3"], type: "multiple" }}
        groupSlots={[
          <SideNavGroup
            value="1"
            headerSlot={<SideNavGroupHeader label="Dashboard" hasCaret />}
            itemSlots={[
              <SideNavGroupItem value="1" boxSlot={<SideNavGroupItemBox label="Overview" />} />,
              <SideNavGroupItem
                value="2"
                boxSlot={<SideNavGroupItemBox label="Reports" badgeSlot={<SideNavGroupItemBoxBadge text="New" />} />}
              />,
              <SideNavGroupItem value="3" boxSlot={<SideNavGroupItemBox label="Analytics" />} />,
              <SideNavGroupItem value="4" boxSlot={<SideNavGroupItemBox label="Export" />} />,
            ]}
          />,
          <SideNavGroup
            value="2"
            headerSlot={<SideNavGroupHeader label="User Management" hasCaret />}
            itemSlots={[
              <SideNavGroupItem value="5" boxSlot={<SideNavGroupItemBox label="Users" />} />,
              <SideNavGroupItem value="6" boxSlot={<SideNavGroupItemBox label="Roles" />} />,
              <SideNavGroupItem value="7" boxSlot={<SideNavGroupItemBox label="Permissions" />} />,
              <SideNavGroupItem value="8" boxSlot={<SideNavGroupItemBox label="Audit Logs" />} />,
            ]}
          />,
          <SideNavGroup
            value="3"
            headerSlot={<SideNavGroupHeader label="Settings" hasCaret />}
            itemSlots={[
              <SideNavGroupItem value="9" boxSlot={<SideNavGroupItemBox label="Profile" />} />,
              <SideNavGroupItem value="10" boxSlot={<SideNavGroupItemBox label="Security" />} />,
              <SideNavGroupItem
                value="11"
                boxSlot={
                  <SideNavGroupItemBox label="Notifications" badgeSlot={<SideNavGroupItemBoxBadge text="9+" />} />
                }
              />,
              <SideNavGroupItem value="12" boxSlot={<SideNavGroupItemBox label="Integrations" />} />,
            ]}
          />,
        ]}
      />
    </ShowcaseFrame>
  );
};

const SideNavDocs = () => {
  return (
    <>
      <Page title="SideNav" subtitle="SideNav" command="npx underatom@latest add side-nav">
        <Section title="Showcase">
          <Example title="Default">
            <DefaultExample />
          </Example>
        </Section>
      </Page>
    </>
  );
};

const sideNavRoute = "/side-nav";
export const sideNavRouteObj: DocsRoute<typeof sideNavRoute> = {
  path: sideNavRoute,
  group: "radix",
  label: "SideNav",
  component: SideNavDocs,
};
