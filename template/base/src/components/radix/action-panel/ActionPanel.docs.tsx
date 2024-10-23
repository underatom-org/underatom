import {
  ActionPanel,
  ActionPanelGroup,
  ActionPanelGroupCheckboxItem,
  ActionPanelGroupItem,
  ActionPanelGroupItemBox,
  ActionPanelGroupItemBoxAvatar,
  ActionPanelGroupItemBoxAvatarWithIcon,
  ActionPanelGroupItemBoxBadge,
  ActionPanelGroupItemBoxIconBox,
  ActionPanelGroupItemBoxSwitch,
  ActionPanelGroupItemBoxWithAvatar,
  ActionPanelGroupItemBoxWithAvatarAndDescription,
  ActionPanelGroupItemBoxWithDescription,
  ActionPanelGroupItemKBDWithIcon,
  ActionPanelGroupItemWithKBD,
} from "./ActionPanel.atoms";
import {
  IconCommand,
  IconDeviceAnalytics,
  IconEdit,
  IconKey,
  IconLogout,
  IconMail,
  IconMoon,
  IconPalette,
  IconPlug,
  IconPlus,
  IconReplace,
  IconSettings,
  IconTrash,
  IconUser,
} from "../../../assets/Icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { DocsRoute } from "../../../docs/docs.types";
import { Page, ShowcaseFrame, Section, Example } from "../../../docs/docs.components";
import { Code } from "../../no-headless/typography/Typography.atoms";
import { avatar1Src } from "../../../assets/images/Images";

const defaultCode = `
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const DefaultExample = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>Menu</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <ActionPanel>
          <ActionPanelGroup title="User">
            <ActionPanelGroupItemWithKBD
              KBDSlot={
                <ActionPanelGroupItemKBDWithIcon
                  icon={(className) => <IconCommand className={className} />}
                  label="M"
                />
              }
            >
              <ActionPanelGroupItemBox
                label="Messages"
                icon={(className) => <IconMail className={className} />}
                badgeSlot={<ActionPanelGroupItemBoxBadge label="9+" />}
              />
            </ActionPanelGroupItemWithKBD>
            <ActionPanelGroupItemWithKBD
              KBDSlot={
                <ActionPanelGroupItemKBDWithIcon
                  icon={(className) => <IconCommand className={className} />}
                  label="P"
                />
              }
            >
              <ActionPanelGroupItemBox 
                label="Profile" 
                icon={(className) => <IconUser className={className} />} 
              />
            </ActionPanelGroupItemWithKBD>
            <ActionPanelGroupItemWithKBD
              KBDSlot={
                <ActionPanelGroupItemKBDWithIcon
                  icon={(className) => <IconCommand className={className} />}
                  label="S"
                />
              }
            >
              <ActionPanelGroupItemBox
                label="Settings"
                icon={(className) => <IconSettings className={className} />}
              />
            </ActionPanelGroupItemWithKBD>
          </ActionPanelGroup>
          <ActionPanelGroup title="Developer">
            <ActionPanelGroupItem>
              <ActionPanelGroupItemBox
                label="Integrations"
                icon={(className) => <IconPlug className={className} />}
                badgeSlot={<ActionPanelGroupItemBoxBadge color="green" label="New" />}
              />
            </ActionPanelGroupItem>
            <ActionPanelGroupItem>
              <ActionPanelGroupItemBox label="API keys" icon={(className) => <IconKey className={className} />} />
            </ActionPanelGroupItem>
            <ActionPanelGroupItem disabled>
              <ActionPanelGroupItemBox
                label="Analytics"
                icon={(className) => <IconDeviceAnalytics className={className} />}
                badgeSlot={<ActionPanelGroupItemBoxBadge label="Coming soon" />}
              />
            </ActionPanelGroupItem>
          </ActionPanelGroup>
          <ActionPanelGroup title="Appearance">
            <ActionPanelGroupCheckboxItem checked={darkMode} onCheckedChange={() => setDarkMode((prev) => !prev)}>
              <ActionPanelGroupItemBox
                label="Dark mode"
                icon={(className) => <IconMoon className={className} />}
                switchSlot={<ActionPanelGroupItemBoxSwitch />}
              />
            </ActionPanelGroupCheckboxItem>
            <ActionPanelGroupItem>
              <ActionPanelGroupItemBox
                label="Choose theme"
                icon={(className) => <IconPalette className={className} />}
              />
            </ActionPanelGroupItem>
          </ActionPanelGroup>
          <ActionPanelGroup>
            <ActionPanelGroupItem variant="destructive">
              <ActionPanelGroupItemBox label="Log out" icon={(className) => <IconLogout className={className} />} />
            </ActionPanelGroupItem>
          </ActionPanelGroup>
        </ActionPanel>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
`;

const DefaultExample = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ShowcaseFrame>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>Menu</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <ActionPanel>
            <ActionPanelGroup title="User">
              <ActionPanelGroupItemWithKBD
                KBDSlot={
                  <ActionPanelGroupItemKBDWithIcon
                    icon={(className) => <IconCommand className={className} />}
                    label="M"
                  />
                }
              >
                <ActionPanelGroupItemBox
                  label="Messages"
                  icon={(className) => <IconMail className={className} />}
                  badgeSlot={<ActionPanelGroupItemBoxBadge label="9+" />}
                />
              </ActionPanelGroupItemWithKBD>
              <ActionPanelGroupItemWithKBD
                KBDSlot={
                  <ActionPanelGroupItemKBDWithIcon
                    icon={(className) => <IconCommand className={className} />}
                    label="P"
                  />
                }
              >
                <ActionPanelGroupItemBox label="Profile" icon={(className) => <IconUser className={className} />} />
              </ActionPanelGroupItemWithKBD>
              <ActionPanelGroupItemWithKBD
                KBDSlot={
                  <ActionPanelGroupItemKBDWithIcon
                    icon={(className) => <IconCommand className={className} />}
                    label="S"
                  />
                }
              >
                <ActionPanelGroupItemBox
                  label="Settings"
                  icon={(className) => <IconSettings className={className} />}
                />
              </ActionPanelGroupItemWithKBD>
            </ActionPanelGroup>
            <ActionPanelGroup title="Developer">
              <ActionPanelGroupItem>
                <ActionPanelGroupItemBox
                  label="Integrations"
                  icon={(className) => <IconPlug className={className} />}
                  badgeSlot={<ActionPanelGroupItemBoxBadge color="green" label="New" />}
                />
              </ActionPanelGroupItem>
              <ActionPanelGroupItem>
                <ActionPanelGroupItemBox label="API keys" icon={(className) => <IconKey className={className} />} />
              </ActionPanelGroupItem>
              <ActionPanelGroupItem disabled>
                <ActionPanelGroupItemBox
                  label="Analytics"
                  icon={(className) => <IconDeviceAnalytics className={className} />}
                  badgeSlot={<ActionPanelGroupItemBoxBadge label="Coming soon" />}
                />
              </ActionPanelGroupItem>
            </ActionPanelGroup>
            <ActionPanelGroup title="Appearance">
              <ActionPanelGroupCheckboxItem checked={darkMode} onCheckedChange={() => setDarkMode((prev) => !prev)}>
                <ActionPanelGroupItemBox
                  label="Dark mode"
                  icon={(className) => <IconMoon className={className} />}
                  switchSlot={<ActionPanelGroupItemBoxSwitch />}
                />
              </ActionPanelGroupCheckboxItem>
              <ActionPanelGroupItem>
                <ActionPanelGroupItemBox
                  label="Choose theme"
                  icon={(className) => <IconPalette className={className} />}
                />
              </ActionPanelGroupItem>
            </ActionPanelGroup>
            <ActionPanelGroup>
              <ActionPanelGroupItem variant="destructive">
                <ActionPanelGroupItemBox label="Log out" icon={(className) => <IconLogout className={className} />} />
              </ActionPanelGroupItem>
            </ActionPanelGroup>
          </ActionPanel>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ShowcaseFrame>
  );
};

const togglableCode = `
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const TogglableExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>Menu</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <ActionPanel>
          <ActionPanelGroup togglable title="Settings">
            <ActionPanelGroupCheckboxItem
              checked={selected.includes("notifications")}
              onCheckedChange={() => handleSelect("notifications")}
            >
              <ActionPanelGroupItemBox
                label="Turn on notifications"
                icon={(className) => <IconMail className={className} />}
              />
            </ActionPanelGroupCheckboxItem>
            <ActionPanelGroupCheckboxItem
              checked={selected.includes("visible")}
              onCheckedChange={() => handleSelect("visible")}
            >
              <ActionPanelGroupItemBox
                label="Enable visibility"
                icon={(className) => <IconUser className={className} />}
              />
            </ActionPanelGroupCheckboxItem>
            <ActionPanelGroupCheckboxItem
              checked={selected.includes("analytics")}
              onCheckedChange={() => handleSelect("analytics")}
            >
              <ActionPanelGroupItemBox
                label="Enable analytics"
                icon={(className) => <IconDeviceAnalytics className={className} />}
              />
            </ActionPanelGroupCheckboxItem>
          </ActionPanelGroup>
        </ActionPanel>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
`;

const TogglableExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <ShowcaseFrame code={togglableCode}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>Menu</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <ActionPanel>
            <ActionPanelGroup togglable title="Settings">
              <ActionPanelGroupCheckboxItem
                checked={selected.includes("notifications")}
                onCheckedChange={() => handleSelect("notifications")}
              >
                <ActionPanelGroupItemBox
                  label="Turn on notifications"
                  icon={(className) => <IconMail className={className} />}
                />
              </ActionPanelGroupCheckboxItem>
              <ActionPanelGroupCheckboxItem
                checked={selected.includes("visible")}
                onCheckedChange={() => handleSelect("visible")}
              >
                <ActionPanelGroupItemBox
                  label="Enable visibility"
                  icon={(className) => <IconUser className={className} />}
                />
              </ActionPanelGroupCheckboxItem>
              <ActionPanelGroupCheckboxItem
                checked={selected.includes("analytics")}
                onCheckedChange={() => handleSelect("analytics")}
              >
                <ActionPanelGroupItemBox
                  label="Enable analytics"
                  icon={(className) => <IconDeviceAnalytics className={className} />}
                />
              </ActionPanelGroupCheckboxItem>
            </ActionPanelGroup>
          </ActionPanel>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ShowcaseFrame>
  );
};

const togglableAvatarsCode = `
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const TogglableAvatarsExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>Menu</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <ActionPanel>
          <ActionPanelGroup title="User" togglable>
            <ActionPanelGroupCheckboxItem
              checked={selected.includes("james brown")}
              onCheckedChange={() => handleSelect("james brown")}
            >
              <ActionPanelGroupItemBoxWithAvatar
                label="James Brown"
                avatarSlot={<ActionPanelGroupItemBoxAvatar fallbackText="AV" imageProps={{ src: avatar1Src }} />}
                badgeSlot={<ActionPanelGroupItemBoxBadge color="green" label="Active" />}
              />
            </ActionPanelGroupCheckboxItem>
            <ActionPanelGroupCheckboxItem
              checked={selected.includes("laura smith")}
              onCheckedChange={() => handleSelect("laura smith")}
              disabled
            >
              <ActionPanelGroupItemBoxWithAvatar
                label="Laura Smith"
                avatarSlot={<ActionPanelGroupItemBoxAvatar fallbackText="L" />}
                badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
              />
            </ActionPanelGroupCheckboxItem>
            <ActionPanelGroupCheckboxItem
              checked={selected.includes("david clark")}
              onCheckedChange={() => handleSelect("david clark")}
            >
              <ActionPanelGroupItemBoxWithAvatar
                label="David Clark"
                avatarSlot={
                  <ActionPanelGroupItemBoxAvatarWithIcon
                    fallbackIcon={(iconClass) => <IconUser className={iconClass} />}
                  />
                }
                badgeSlot={<ActionPanelGroupItemBoxBadge color="red" label="Busy" />}
              />
            </ActionPanelGroupCheckboxItem>
            <ActionPanelGroupCheckboxItem
              checked={selected.includes("maria jones")}
              onCheckedChange={() => handleSelect("maria jones")}
            >
              <ActionPanelGroupItemBoxWithAvatar
                label="Maria Jones"
                avatarSlot={<ActionPanelGroupItemBoxAvatar fallbackText="M" />}
                badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
              />
            </ActionPanelGroupCheckboxItem>
          </ActionPanelGroup>
        </ActionPanel>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
`;

const TogglableAvatarsExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <ShowcaseFrame code={togglableAvatarsCode}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>Menu</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <ActionPanel>
            <ActionPanelGroup title="User" togglable>
              <ActionPanelGroupCheckboxItem
                checked={selected.includes("james brown")}
                onCheckedChange={() => handleSelect("james brown")}
              >
                <ActionPanelGroupItemBoxWithAvatar
                  label="James Brown"
                  avatarSlot={<ActionPanelGroupItemBoxAvatar fallbackText="AV" imageProps={{ src: avatar1Src }} />}
                  badgeSlot={<ActionPanelGroupItemBoxBadge color="green" label="Active" />}
                />
              </ActionPanelGroupCheckboxItem>
              <ActionPanelGroupCheckboxItem
                checked={selected.includes("laura smith")}
                onCheckedChange={() => handleSelect("laura smith")}
                disabled
              >
                <ActionPanelGroupItemBoxWithAvatar
                  label="Laura Smith"
                  avatarSlot={<ActionPanelGroupItemBoxAvatar fallbackText="L" />}
                  badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
                />
              </ActionPanelGroupCheckboxItem>
              <ActionPanelGroupCheckboxItem
                checked={selected.includes("david clark")}
                onCheckedChange={() => handleSelect("david clark")}
              >
                <ActionPanelGroupItemBoxWithAvatar
                  label="David Clark"
                  avatarSlot={
                    <ActionPanelGroupItemBoxAvatarWithIcon
                      fallbackIcon={(iconClass) => <IconUser className={iconClass} />}
                    />
                  }
                  badgeSlot={<ActionPanelGroupItemBoxBadge color="red" label="Busy" />}
                />
              </ActionPanelGroupCheckboxItem>
              <ActionPanelGroupCheckboxItem
                checked={selected.includes("maria jones")}
                onCheckedChange={() => handleSelect("maria jones")}
              >
                <ActionPanelGroupItemBoxWithAvatar
                  label="Maria Jones"
                  avatarSlot={<ActionPanelGroupItemBoxAvatar fallbackText="M" />}
                  badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
                />
              </ActionPanelGroupCheckboxItem>
            </ActionPanelGroup>
          </ActionPanel>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ShowcaseFrame>
  );
};

const withAvatarsMultilineCode = `
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const WithAvatarsMultilineExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>Menu</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <ActionPanel>
          <ActionPanelGroup title="User" togglable>
            <ActionPanelGroupCheckboxItem
              checked={selected.includes("james brown")}
              onCheckedChange={() => handleSelect("james brown")}
            >
              <ActionPanelGroupItemBoxWithAvatarAndDescription
                label="James Brown"
                description="james@brown.com"
                supportingText="12:34 PM"
                avatarSlot={
                  <ActionPanelGroupItemBoxAvatar multiline fallbackText="AV" imageProps={{ src: avatar1Src }} />
                }
                badgeSlot={<ActionPanelGroupItemBoxBadge color="green" label="Active" />}
              />
            </ActionPanelGroupCheckboxItem>
            <ActionPanelGroupCheckboxItem
              checked={selected.includes("laura smith")}
              onCheckedChange={() => handleSelect("laura smith")}
              disabled
            >
              <ActionPanelGroupItemBoxWithAvatarAndDescription
                label="Laura Smith"
                description="laura@smith.com"
                supportingText="5:12 PM"
                avatarSlot={<ActionPanelGroupItemBoxAvatar multiline fallbackText="L" />}
                badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
              />
            </ActionPanelGroupCheckboxItem>
            <ActionPanelGroupCheckboxItem
              checked={selected.includes("david clark")}
              onCheckedChange={() => handleSelect("david clark")}
            >
              <ActionPanelGroupItemBoxWithAvatarAndDescription
                label="David Clark"
                description="david@clark.com"
                supportingText="2:02 AM"
                avatarSlot={
                  <ActionPanelGroupItemBoxAvatarWithIcon
                    multiline
                    fallbackIcon={(iconClass) => <IconUser className={iconClass} />}
                  />
                }
                badgeSlot={<ActionPanelGroupItemBoxBadge color="red" label="Busy" />}
              />
            </ActionPanelGroupCheckboxItem>
            <ActionPanelGroupCheckboxItem
              checked={selected.includes("maria jones")}
              onCheckedChange={() => handleSelect("maria jones")}
            >
              <ActionPanelGroupItemBoxWithAvatarAndDescription
                label="Maria Jones"
                description="maria@jones.com"
                supportingText="0:36 AM"
                avatarSlot={<ActionPanelGroupItemBoxAvatar multiline fallbackText="M" />}
                badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
              />
            </ActionPanelGroupCheckboxItem>
          </ActionPanelGroup>
        </ActionPanel>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
`;

const WithAvatarsMultilineExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <ShowcaseFrame code={withAvatarsMultilineCode}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>Menu</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <ActionPanel>
            <ActionPanelGroup title="User" togglable>
              <ActionPanelGroupCheckboxItem
                checked={selected.includes("james brown")}
                onCheckedChange={() => handleSelect("james brown")}
              >
                <ActionPanelGroupItemBoxWithAvatarAndDescription
                  label="James Brown"
                  description="james@brown.com"
                  supportingText="12:34 PM"
                  avatarSlot={
                    <ActionPanelGroupItemBoxAvatar multiline fallbackText="AV" imageProps={{ src: avatar1Src }} />
                  }
                  badgeSlot={<ActionPanelGroupItemBoxBadge color="green" label="Active" />}
                />
              </ActionPanelGroupCheckboxItem>
              <ActionPanelGroupCheckboxItem
                checked={selected.includes("laura smith")}
                onCheckedChange={() => handleSelect("laura smith")}
                disabled
              >
                <ActionPanelGroupItemBoxWithAvatarAndDescription
                  label="Laura Smith"
                  description="laura@smith.com"
                  supportingText="5:12 PM"
                  avatarSlot={<ActionPanelGroupItemBoxAvatar multiline fallbackText="L" />}
                  badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
                />
              </ActionPanelGroupCheckboxItem>
              <ActionPanelGroupCheckboxItem
                checked={selected.includes("david clark")}
                onCheckedChange={() => handleSelect("david clark")}
              >
                <ActionPanelGroupItemBoxWithAvatarAndDescription
                  label="David Clark"
                  description="david@clark.com"
                  supportingText="2:02 AM"
                  avatarSlot={
                    <ActionPanelGroupItemBoxAvatarWithIcon
                      multiline
                      fallbackIcon={(iconClass) => <IconUser className={iconClass} />}
                    />
                  }
                  badgeSlot={<ActionPanelGroupItemBoxBadge color="red" label="Busy" />}
                />
              </ActionPanelGroupCheckboxItem>
              <ActionPanelGroupCheckboxItem
                checked={selected.includes("maria jones")}
                onCheckedChange={() => handleSelect("maria jones")}
              >
                <ActionPanelGroupItemBoxWithAvatarAndDescription
                  label="Maria Jones"
                  description="maria@jones.com"
                  supportingText="0:36 AM"
                  avatarSlot={<ActionPanelGroupItemBoxAvatar multiline fallbackText="M" />}
                  badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
                />
              </ActionPanelGroupCheckboxItem>
            </ActionPanelGroup>
          </ActionPanel>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ShowcaseFrame>
  );
};

const withIconsMultilineCode = `
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const WithIconsMultiline = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>Menu</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <ActionPanel>
          <ActionPanelGroup>
            <ActionPanelGroupItem>
              <ActionPanelGroupItemBoxWithDescription
                label="Add Entry"
                description="Add a new entry"
                iconBoxSlot={
                  <ActionPanelGroupItemBoxIconBox icon={(iconClass) => <IconPlus className={iconClass} />} />
                }
              />
            </ActionPanelGroupItem>
            <ActionPanelGroupItem disabled>
              <ActionPanelGroupItemBoxWithDescription
                label="Edit Entry"
                description="Edit an existing entry"
                iconBoxSlot={
                  <ActionPanelGroupItemBoxIconBox icon={(iconClass) => <IconEdit className={iconClass} />} />
                }
              />
            </ActionPanelGroupItem>
            <ActionPanelGroupItem>
              <ActionPanelGroupItemBoxWithDescription
                label="Replace Entry"
                description="Replace an existing entry"
                iconBoxSlot={
                  <ActionPanelGroupItemBoxIconBox icon={(iconClass) => <IconReplace className={iconClass} />} />
                }
              />
            </ActionPanelGroupItem>
            <ActionPanelGroupItem variant="destructive">
              <ActionPanelGroupItemBoxWithDescription
                label="Delete Entry"
                description="Delete an existing entry"
                iconBoxSlot={
                  <ActionPanelGroupItemBoxIconBox icon={(iconClass) => <IconTrash className={iconClass} />} />
                }
              />
            </ActionPanelGroupItem>
          </ActionPanelGroup>
        </ActionPanel>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
`;

const WithIconsMultiline = () => {
  return (
    <ShowcaseFrame code={withIconsMultilineCode}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>Menu</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <ActionPanel>
            <ActionPanelGroup>
              <ActionPanelGroupItem>
                <ActionPanelGroupItemBoxWithDescription
                  label="Add Entry"
                  description="Add a new entry"
                  iconBoxSlot={
                    <ActionPanelGroupItemBoxIconBox icon={(iconClass) => <IconPlus className={iconClass} />} />
                  }
                />
              </ActionPanelGroupItem>
              <ActionPanelGroupItem disabled>
                <ActionPanelGroupItemBoxWithDescription
                  label="Edit Entry"
                  description="Edit an existing entry"
                  iconBoxSlot={
                    <ActionPanelGroupItemBoxIconBox icon={(iconClass) => <IconEdit className={iconClass} />} />
                  }
                />
              </ActionPanelGroupItem>
              <ActionPanelGroupItem>
                <ActionPanelGroupItemBoxWithDescription
                  label="Replace Entry"
                  description="Replace an existing entry"
                  iconBoxSlot={
                    <ActionPanelGroupItemBoxIconBox icon={(iconClass) => <IconReplace className={iconClass} />} />
                  }
                />
              </ActionPanelGroupItem>
              <ActionPanelGroupItem variant="destructive">
                <ActionPanelGroupItemBoxWithDescription
                  label="Delete Entry"
                  description="Delete an existing entry"
                  iconBoxSlot={
                    <ActionPanelGroupItemBoxIconBox icon={(iconClass) => <IconTrash className={iconClass} />} />
                  }
                />
              </ActionPanelGroupItem>
            </ActionPanelGroup>
          </ActionPanel>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ShowcaseFrame>
  );
};

const ActionPanelDocs = () => {
  return (
    <Page
      title="ActionPanel"
      subtitle={
        <>
          Action panels are used to display a list of actions. To be used in combination with the Radix{" "}
          <Code>DropdownMenu</Code> component.
        </>
      }
      command="npx underatom@latest add action-panel"
      usageCode={defaultCode}
      defaultExample={<DefaultExample />}
    >
      <Section title="Showcase">
        <Example
          title="Togglable items"
          description={
            <>
              Using the <Code>ActionPanelGroupCheckboxItem</Code> atom allows togglable items. Also the group needs to
              have the <Code>togglable</Code> prop set to <Code>true</Code>.
            </>
          }
        >
          <TogglableExample />
        </Example>
        <Example
          title="Togglable avatar items"
          description={
            <>
              The <Code>ActionPanelGroupItemBoxWithAvatar</Code> atom can be used as a <Code>boxSlot</Code> for the
              <Code>ActionPanelGroupCheckboxItem</Code>.
            </>
          }
        >
          <TogglableAvatarsExample />
        </Example>
        <Example
          title="Multiline avatar items"
          description={
            <>
              The <Code>ActionPanelGroupItemBoxWithAvatarAndDescription</Code> atom can be used as a{" "}
              <Code>boxSlot</Code> to achieve a multiline avatar item.
            </>
          }
        >
          <WithAvatarsMultilineExample />
        </Example>
        <Example
          title="Multiline icon items"
          description={
            <>
              The <Code>ActionPanelGroupItemBoxWithDescription</Code> atom can be used as a <Code>boxSlot</Code> to
              achieve a multiline icon item.
            </>
          }
        >
          <WithIconsMultiline />
        </Example>
      </Section>
    </Page>
  );
};

const actionPanelRoute = "/action-panel";
export const actionPanelRouteObj: DocsRoute<typeof actionPanelRoute> = {
  path: actionPanelRoute,
  group: "radix",
  label: "ActionPanel",
  component: ActionPanelDocs,
};
