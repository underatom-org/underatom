import {
  Command,
  CommandSearch,
  CommandGroup,
  CommandGroupItem,
  CommandGroupItemBox,
  CommandGroupItemBoxSwitch,
  CommandFooter,
  CommandGroupItemKBDWithIcon,
  CommandEmpty,
  CommandGroupItemBoxWithAvatar,
  CommandGroupItemBoxAvatar,
  CommandGroupItemBoxButton,
  CommandGroupItemBoxBadge,
  CommandFooterElement,
  CommandFooterElementKBD,
} from "./Command.atoms";
import {
  IconMail,
  IconUser,
  IconSettings,
  IconPlug,
  IconKey,
  IconDeviceAnalytics,
  IconMoon,
  IconCommand,
  IconSearch,
  IconPalette,
  IconMessage,
  IconVideo,
  IconPhone,
  IconLogout,
  IconEyeOff,
  IconCopy,
  IconArrowUp,
  IconArrowDown,
  IconTerminal2,
  IconCirclePlus,
  IconGrid3x3,
} from "../../../assets/Icons";
import { useState } from "react";
import { EmptyIllustration } from "../../../assets/illustrations/Illustrations";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, ShowcaseFrame } from "../../../docs/docs.components";
import { avatar1Src, avatar2Src } from "../../../assets/images/Images";
import { useMediaQuery } from "../../../docs/utils";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <CommandFooter
      elementSlots={
        <>
          {!isMobile && (
            <CommandFooterElement
              leftLabel="Press"
              kbdSlot1={<CommandFooterElementKBD label="/" />}
              rightLabel="to search"
            />
          )}

          <CommandFooterElement
            kbdSlot1={<CommandFooterElementKBD label="SHIFT" />}
            kbdSlot2={<CommandFooterElementKBD label="G" />}
            rightLabel="to group items"
          />
        </>
      }
    />
  );
};

const DefaultExample = () => {
  const [selected, setSelected] = useState<string[] | undefined>();
  const handleSelect = (value: string) => {
    setSelected((oldValue = []) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <ShowcaseFrame>
      <Command
        emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
        searchSlot={
          <CommandSearch
            icon={(className) => <IconSearch className={className} />}
            onClear={() => console.log("clear")}
          />
        }
        groupSlots={[
          <CommandGroup
            title="User"
            togglable={false}
            itemSlots={[
              <CommandGroupItem
                value="messages"
                kbdSlot={
                  <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="M" />
                }
                boxSlot={
                  <CommandGroupItemBox
                    icon={(className) => <IconMail className={className} />}
                    label="Messages"
                    badgeSlot={<CommandGroupItemBoxBadge label="9+" />}
                  />
                }
              />,
              <CommandGroupItem
                value="profile"
                kbdSlot={
                  <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="P" />
                }
                boxSlot={
                  <CommandGroupItemBox icon={(className) => <IconUser className={className} />} label="Profile" />
                }
              />,
              <CommandGroupItem
                value="settings"
                kbdSlot={
                  <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="S" />
                }
                boxSlot={
                  <CommandGroupItemBox icon={(className) => <IconSettings className={className} />} label="Settings" />
                }
              />,
            ]}
          />,
          <CommandGroup
            togglable={false}
            title="Developer"
            itemSlots={[
              <CommandGroupItem
                value="integrations"
                boxSlot={
                  <CommandGroupItemBox
                    icon={(className) => <IconPlug className={className} />}
                    label="Integrations"
                    badgeSlot={<CommandGroupItemBoxBadge color="green" label="New" />}
                  />
                }
              />,
              <CommandGroupItem
                value="api keys"
                boxSlot={
                  <CommandGroupItemBox icon={(className) => <IconKey className={className} />} label="API keys" />
                }
              />,
              <CommandGroupItem
                value="analytics"
                boxSlot={
                  <CommandGroupItemBox
                    icon={(className) => <IconDeviceAnalytics className={className} />}
                    label="Analytics"
                  />
                }
              />,
            ]}
          />,
          <CommandGroup
            togglable={false}
            title="Appearance"
            itemSlots={[
              <CommandGroupItem
                value="dark mode"
                onSelect={(value) => handleSelect(value)}
                isSelected={selected?.includes("dark mode")}
                boxSlot={
                  <CommandGroupItemBox
                    icon={(className) => <IconMoon className={className} />}
                    label="Dark mode"
                    switchSlot={<CommandGroupItemBoxSwitch />}
                  />
                }
              />,
              <CommandGroupItem
                value="choose theme"
                boxSlot={
                  <CommandGroupItemBox
                    icon={(className) => <IconPalette className={className} />}
                    label="Choose theme"
                  />
                }
              />,
            ]}
          />,
          <CommandGroup
            togglable={false}
            itemSlots={[
              <CommandGroupItem
                variant="destructive"
                value="Log out"
                boxSlot={
                  <CommandGroupItemBox icon={(className) => <IconLogout className={className} />} label="Log out" />
                }
              />,
            ]}
          />,
        ]}
        footerSlot={<Footer />}
      />
    </ShowcaseFrame>
  );
};

const ToggleItemsExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <ShowcaseFrame>
      <Command
        emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
        searchSlot={
          <CommandSearch
            icon={(className) => <IconSearch className={className} />}
            onClear={() => console.log("clear")}
          />
        }
        groupSlots={[
          <CommandGroup
            togglable={true}
            title="People"
            itemSlots={[
              <CommandGroupItem
                value="James Brown"
                onSelect={handleSelect}
                isSelected={selected?.includes("James Brown".toLowerCase())}
                boxSlot={
                  <CommandGroupItemBoxWithAvatar
                    avatarSlot={
                      <CommandGroupItemBoxAvatar imageProps={{ src: avatar1Src, alt: "Avatar 1" }} fallbackText="J" />
                    }
                    label="James Brown"
                    badgeSlot={<CommandGroupItemBoxBadge label="Online" color="green" />}
                  />
                }
              />,
              <CommandGroupItem
                value="Laura Smith"
                onSelect={handleSelect}
                isSelected={selected?.includes("Laura Smith".toLowerCase())}
                disabled
                boxSlot={
                  <CommandGroupItemBoxWithAvatar
                    avatarSlot={
                      <CommandGroupItemBoxAvatar imageProps={{ src: avatar2Src, alt: "Avatar 2" }} fallbackText="L" />
                    }
                    label="Laura Smith"
                    badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
                  />
                }
              />,
              <CommandGroupItem
                value="David Clark"
                onSelect={handleSelect}
                isSelected={selected?.includes("David Clark".toLowerCase())}
                boxSlot={
                  <CommandGroupItemBoxWithAvatar
                    avatarSlot={<CommandGroupItemBoxAvatar fallbackText="D" />}
                    label="David Clark"
                    badgeSlot={<CommandGroupItemBoxBadge color="red" label="Busy" />}
                  />
                }
              />,
              <CommandGroupItem
                value="Maria Jones"
                onSelect={handleSelect}
                isSelected={selected?.includes("Maria Jones".toLowerCase())}
                boxSlot={
                  <CommandGroupItemBoxWithAvatar
                    avatarSlot={<CommandGroupItemBoxAvatar fallbackText="M" />}
                    label="Maria Jones"
                    badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
                  />
                }
              />,
            ]}
          />,
        ]}
        footerSlot={<Footer />}
      />
    </ShowcaseFrame>
  );
};

const WithButtonsExample = () => {
  return (
    <ShowcaseFrame>
      <Command
        emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
        searchSlot={
          <CommandSearch
            icon={(className) => <IconSearch className={className} />}
            onClear={() => console.log("clear")}
          />
        }
        groupSlots={[
          <CommandGroup
            title="People"
            itemSlots={[
              <CommandGroupItem
                value="James Brown"
                boxSlot={
                  <CommandGroupItemBoxWithAvatar
                    buttonSlot1={
                      <CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />
                    }
                    buttonSlot2={
                      <CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />
                    }
                    buttonSlot3={
                      <CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />
                    }
                    avatarSlot={
                      <CommandGroupItemBoxAvatar imageProps={{ src: avatar1Src, alt: "Avatar 1" }} fallbackText="J" />
                    }
                    label="James Brown"
                    badgeSlot={<CommandGroupItemBoxBadge label="Online" color="green" />}
                  />
                }
              />,
              <CommandGroupItem
                value="Laura Smith"
                disabled
                boxSlot={
                  <CommandGroupItemBoxWithAvatar
                    buttonSlot1={
                      <CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />
                    }
                    buttonSlot2={
                      <CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />
                    }
                    buttonSlot3={
                      <CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />
                    }
                    avatarSlot={
                      <CommandGroupItemBoxAvatar imageProps={{ src: avatar2Src, alt: "Avatar 2" }} fallbackText="L" />
                    }
                    label="Laura Smith"
                    badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
                  />
                }
              />,
              <CommandGroupItem
                value="David Clark"
                boxSlot={
                  <CommandGroupItemBoxWithAvatar
                    buttonSlot1={
                      <CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />
                    }
                    buttonSlot2={
                      <CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />
                    }
                    buttonSlot3={
                      <CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />
                    }
                    avatarSlot={<CommandGroupItemBoxAvatar fallbackText="D" />}
                    label="David Clark"
                    badgeSlot={<CommandGroupItemBoxBadge color="red" label="Busy" />}
                  />
                }
              />,
              <CommandGroupItem
                value="Maria Jones"
                boxSlot={
                  <CommandGroupItemBoxWithAvatar
                    buttonSlot1={
                      <CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />
                    }
                    buttonSlot2={
                      <CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />
                    }
                    buttonSlot3={
                      <CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />
                    }
                    avatarSlot={<CommandGroupItemBoxAvatar fallbackText="M" />}
                    label="Maria Jones"
                    badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
                  />
                }
              />,
            ]}
          />,
        ]}
        footerSlot={<Footer />}
      />
    </ShowcaseFrame>
  );
};

export const ItemsWithIconsExample = () => {
  return (
    <ShowcaseFrame>
      <Command
        emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
        searchSlot={
          <CommandSearch
            icon={(className) => <IconSearch className={className} />}
            onClear={() => console.log("clear")}
          />
        }
        groupSlots={[
          <CommandGroup
            togglable={false}
            itemSlots={[
              <CommandGroupItem
                value="Hide"
                kbdSlot={
                  <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="H" />
                }
                boxSlot={
                  <CommandGroupItemBox icon={(className) => <IconEyeOff className={className} />} label="Hide" />
                }
              />,
              <CommandGroupItem
                value="duplicate"
                kbdSlot={
                  <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="D" />
                }
                boxSlot={
                  <CommandGroupItemBox icon={(className) => <IconCopy className={className} />} label="Duplicate" />
                }
              />,
              <CommandGroupItem
                value="add before"
                kbdSlot={
                  <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="E" />
                }
                boxSlot={
                  <CommandGroupItemBox icon={(className) => <IconArrowUp className={className} />} label="Add before" />
                }
              />,
              <CommandGroupItem
                value="add After"
                kbdSlot={
                  <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="I" />
                }
                boxSlot={
                  <CommandGroupItemBox
                    icon={(className) => <IconArrowDown className={className} />}
                    label="Add after"
                  />
                }
              />,
              <CommandGroupItem
                value="Edit HTML"
                disabled
                boxSlot={
                  <CommandGroupItemBox
                    icon={(className) => <IconTerminal2 className={className} />}
                    label="Edit HTML"
                  />
                }
              />,
              <CommandGroupItem
                value="Add to library"
                disabled
                boxSlot={
                  <CommandGroupItemBox
                    icon={(className) => <IconCirclePlus className={className} />}
                    label="Add to library"
                  />
                }
              />,
              <CommandGroupItem
                value="Toggle grid view"
                disabled
                boxSlot={
                  <CommandGroupItemBox
                    icon={(className) => <IconGrid3x3 className={className} />}
                    label="Toggle grid view"
                    switchSlot={<CommandGroupItemBoxSwitch />}
                  />
                }
              />,
            ]}
          />,
        ]}
        footerSlot={<Footer />}
      />
    </ShowcaseFrame>
  );
};

const CommandDocs = () => {
  return (
    <>
      <Page title="Command" subtitle="Composable command menu with search, groups, destructive actions, and more.">
        {/* <Section title="Showcase"> */}
        <Example title="Showcase" description="A complex example of what can be done with the Command component.">
          <DefaultExample />
        </Example>
        <Example title="Togglabe Items" description="Items that can be toggled on and off.">
          <ToggleItemsExample />
        </Example>
        <Example title="Items with Buttons" description="Items with focusable buttons for actions.">
          <WithButtonsExample />
        </Example>
        <Example title="Default group" description="A default group without label.">
          <ItemsWithIconsExample />
        </Example>
        {/* </Section> */}
      </Page>
    </>
  );
};

const commandRoute = "/command";
export const commandRouteObj: DocsRoute<typeof commandRoute> = {
  path: commandRoute,
  group: "cmdk",
  label: "Command",
  component: CommandDocs,
};
