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

const DefaultExample = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ShowcaseFrame>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>Menu</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <ActionPanel
            groupSlots={
              <>
                <ActionPanelGroup
                  title="User"
                  itemSlots={
                    <>
                      <ActionPanelGroupItemWithKBD
                        KBDSlot={
                          <ActionPanelGroupItemKBDWithIcon
                            icon={(className) => <IconCommand className={className} />}
                            label="M"
                          />
                        }
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="Messages"
                            icon={(className) => <IconMail className={className} />}
                            badgeSlot={<ActionPanelGroupItemBoxBadge label="9+" />}
                          />
                        }
                      />
                      <ActionPanelGroupItemWithKBD
                        KBDSlot={
                          <ActionPanelGroupItemKBDWithIcon
                            icon={(className) => <IconCommand className={className} />}
                            label="P"
                          />
                        }
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="Profile"
                            icon={(className) => <IconUser className={className} />}
                          />
                        }
                      />
                      <ActionPanelGroupItemWithKBD
                        KBDSlot={
                          <ActionPanelGroupItemKBDWithIcon
                            icon={(className) => <IconCommand className={className} />}
                            label="S"
                          />
                        }
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="Settings"
                            icon={(className) => <IconSettings className={className} />}
                          />
                        }
                      />
                    </>
                  }
                />
                <ActionPanelGroup
                  title="Developer"
                  itemSlots={
                    <>
                      <ActionPanelGroupItem
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="Integrations"
                            icon={(className) => <IconPlug className={className} />}
                            badgeSlot={<ActionPanelGroupItemBoxBadge color="green" label="New" />}
                          />
                        }
                      />
                      <ActionPanelGroupItem
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="API keys"
                            icon={(className) => <IconKey className={className} />}
                          />
                        }
                      />
                      <ActionPanelGroupItem
                        disabled
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="Analytics"
                            icon={(className) => <IconDeviceAnalytics className={className} />}
                            badgeSlot={<ActionPanelGroupItemBoxBadge label="Coming soon" />}
                          />
                        }
                      />
                    </>
                  }
                />
                <ActionPanelGroup
                  title="Appearance"
                  itemSlots={
                    <>
                      <ActionPanelGroupCheckboxItem
                        checked={darkMode}
                        onCheckedChange={() => setDarkMode((prev) => !prev)}
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="Dark mode"
                            icon={(className) => <IconMoon className={className} />}
                            switchSlot={<ActionPanelGroupItemBoxSwitch />}
                          />
                        }
                      />
                      <ActionPanelGroupItem
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="Choose theme"
                            icon={(className) => <IconPalette className={className} />}
                          />
                        }
                      />
                    </>
                  }
                />
                <ActionPanelGroup
                  itemSlots={
                    <>
                      <ActionPanelGroupItem
                        variant="destructive"
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="Log out"
                            icon={(className) => <IconLogout className={className} />}
                          />
                        }
                      />
                    </>
                  }
                />
              </>
            }
          />
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ShowcaseFrame>
  );
};

const TogglableExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <ShowcaseFrame>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>Menu</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <ActionPanel
            groupSlots={
              <>
                <ActionPanelGroup
                  togglable
                  title="Settings"
                  itemSlots={
                    <>
                      <ActionPanelGroupCheckboxItem
                        checked={selected.includes("notifications")}
                        onCheckedChange={() => handleSelect("notifications")}
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="Turn on notifications"
                            icon={(className) => <IconMail className={className} />}
                          />
                        }
                      />
                      <ActionPanelGroupCheckboxItem
                        checked={selected.includes("visible")}
                        onCheckedChange={() => handleSelect("visible")}
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="Enable visibility"
                            icon={(className) => <IconUser className={className} />}
                          />
                        }
                      />
                      <ActionPanelGroupCheckboxItem
                        checked={selected.includes("analytics")}
                        onCheckedChange={() => handleSelect("analytics")}
                        boxSlot={
                          <ActionPanelGroupItemBox
                            label="Enable analytics"
                            icon={(className) => <IconDeviceAnalytics className={className} />}
                          />
                        }
                      />
                    </>
                  }
                />
              </>
            }
          />
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ShowcaseFrame>
  );
};

const TogglableAvatarsExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <ShowcaseFrame>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>Menu</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <ActionPanel
            groupSlots={
              <>
                <ActionPanelGroup
                  title="User"
                  togglable
                  itemSlots={
                    <>
                      <ActionPanelGroupCheckboxItem
                        checked={selected.includes("james brown")}
                        onCheckedChange={() => handleSelect("james brown")}
                        boxSlot={
                          <ActionPanelGroupItemBoxWithAvatar
                            label="James Brown"
                            avatarSlot={
                              <ActionPanelGroupItemBoxAvatar fallbackText="AV" imageProps={{ src: avatar1Src }} />
                            }
                            badgeSlot={<ActionPanelGroupItemBoxBadge color="green" label="Active" />}
                          />
                        }
                      />
                      <ActionPanelGroupCheckboxItem
                        checked={selected.includes("laura smith")}
                        onCheckedChange={() => handleSelect("laura smith")}
                        disabled
                        boxSlot={
                          <ActionPanelGroupItemBoxWithAvatar
                            label="Laura Smith"
                            avatarSlot={<ActionPanelGroupItemBoxAvatar fallbackText="L" />}
                            badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
                          />
                        }
                      />
                      <ActionPanelGroupCheckboxItem
                        checked={selected.includes("david clark")}
                        onCheckedChange={() => handleSelect("david clark")}
                        boxSlot={
                          <ActionPanelGroupItemBoxWithAvatar
                            label="David Clark"
                            avatarSlot={
                              <ActionPanelGroupItemBoxAvatarWithIcon
                                fallbackIcon={(iconClass) => <IconUser className={iconClass} />}
                              />
                            }
                            badgeSlot={<ActionPanelGroupItemBoxBadge color="red" label="Busy" />}
                          />
                        }
                      />
                      <ActionPanelGroupCheckboxItem
                        checked={selected.includes("maria jones")}
                        onCheckedChange={() => handleSelect("maria jones")}
                        boxSlot={
                          <ActionPanelGroupItemBoxWithAvatar
                            label="Maria Jones"
                            avatarSlot={<ActionPanelGroupItemBoxAvatar fallbackText="M" />}
                            badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
                          />
                        }
                      />
                    </>
                  }
                />
              </>
            }
          />
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ShowcaseFrame>
  );
};

const WithAvatarsMultilineExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <ShowcaseFrame>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>Menu</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <ActionPanel
            groupSlots={
              <>
                <ActionPanelGroup
                  title="User"
                  togglable
                  itemSlots={
                    <>
                      <ActionPanelGroupCheckboxItem
                        checked={selected.includes("james brown")}
                        onCheckedChange={() => handleSelect("james brown")}
                        boxSlot={
                          <ActionPanelGroupItemBoxWithAvatarAndDescription
                            label="James Brown"
                            description="james@brown.com"
                            supportingText="12:34 PM"
                            avatarSlot={
                              <ActionPanelGroupItemBoxAvatar
                                multiline
                                fallbackText="AV"
                                imageProps={{ src: avatar1Src }}
                              />
                            }
                            badgeSlot={<ActionPanelGroupItemBoxBadge color="green" label="Active" />}
                          />
                        }
                      />
                      <ActionPanelGroupCheckboxItem
                        checked={selected.includes("laura smith")}
                        onCheckedChange={() => handleSelect("laura smith")}
                        disabled
                        boxSlot={
                          <ActionPanelGroupItemBoxWithAvatarAndDescription
                            label="Laura Smith"
                            description="laura@smith.com"
                            supportingText="5:12 PM"
                            avatarSlot={<ActionPanelGroupItemBoxAvatar multiline fallbackText="L" />}
                            badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
                          />
                        }
                      />
                      <ActionPanelGroupCheckboxItem
                        checked={selected.includes("david clark")}
                        onCheckedChange={() => handleSelect("david clark")}
                        boxSlot={
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
                        }
                      />
                      <ActionPanelGroupCheckboxItem
                        checked={selected.includes("maria jones")}
                        onCheckedChange={() => handleSelect("maria jones")}
                        boxSlot={
                          <ActionPanelGroupItemBoxWithAvatarAndDescription
                            label="Maria Jones"
                            description="maria@jones.com"
                            supportingText="0:36 AM"
                            avatarSlot={<ActionPanelGroupItemBoxAvatar multiline fallbackText="M" />}
                            badgeSlot={<ActionPanelGroupItemBoxBadge label="Away" />}
                          />
                        }
                      />
                    </>
                  }
                />
              </>
            }
          />
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ShowcaseFrame>
  );
};

const WithIconsMultiline = () => {
  return (
    <ShowcaseFrame>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>Menu</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <ActionPanel
            groupSlots={
              <>
                <ActionPanelGroup
                  itemSlots={
                    <>
                      <ActionPanelGroupItem
                        boxSlot={
                          <ActionPanelGroupItemBoxWithDescription
                            label="Add Entry"
                            description="Add a new entry"
                            iconBoxSlot={
                              <ActionPanelGroupItemBoxIconBox
                                icon={(iconClass) => <IconPlus className={iconClass} />}
                              />
                            }
                          />
                        }
                      />
                      <ActionPanelGroupItem
                        disabled
                        boxSlot={
                          <ActionPanelGroupItemBoxWithDescription
                            label="Edit Entry"
                            description="Edit an existing entry"
                            iconBoxSlot={
                              <ActionPanelGroupItemBoxIconBox
                                icon={(iconClass) => <IconEdit className={iconClass} />}
                              />
                            }
                          />
                        }
                      />
                      <ActionPanelGroupItem
                        boxSlot={
                          <ActionPanelGroupItemBoxWithDescription
                            label="Replace Entry"
                            description="Replace an existing entry"
                            iconBoxSlot={
                              <ActionPanelGroupItemBoxIconBox
                                icon={(iconClass) => <IconReplace className={iconClass} />}
                              />
                            }
                          />
                        }
                      />
                      <ActionPanelGroupItem
                        variant="destructive"
                        boxSlot={
                          <ActionPanelGroupItemBoxWithDescription
                            label="Delete Entry"
                            description="Delete an existing entry"
                            iconBoxSlot={
                              <ActionPanelGroupItemBoxIconBox
                                icon={(iconClass) => <IconTrash className={iconClass} />}
                              />
                            }
                          />
                        }
                      />
                    </>
                  }
                />
              </>
            }
          />
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ShowcaseFrame>
  );
};

const ActionPanelDocs = () => {
  return (
    <>
      <Page
        title="ActionPanel"
        subtitle={
          <>
            Action panels are used to display a list of actions. To be used in combination with the Radix{" "}
            <Code>DropdownMenu</Code> component.
          </>
        }
      >
        <Section title="Showcase">
          <Example title="" description="Complex example with multiple groups and items.">
            <DefaultExample />
          </Example>
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
    </>
  );
};

const actionPanelRoute = "/action-panel";
export const actionPanelRouteObj: DocsRoute<typeof actionPanelRoute> = {
  path: actionPanelRoute,
  group: "radix",
  label: "ActionPanel",
  component: ActionPanelDocs,
};
