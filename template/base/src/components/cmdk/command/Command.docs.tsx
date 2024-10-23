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

const Footer = () => {
  return (
    <CommandFooter>
      <CommandFooterElement leftLabel="Press" kbdSlot1={<CommandFooterElementKBD label="/" />} rightLabel="to search" />
      <CommandFooterElement
        kbdSlot1={<CommandFooterElementKBD label="SHIFT" />}
        kbdSlot2={<CommandFooterElementKBD label="G" />}
        rightLabel="to group items"
      />
    </CommandFooter>
  );
};

const defaultCode = `
const DefaultExample = () => {
  const [selected, setSelected] = useState<string[] | undefined>();
  const handleSelect = (value: string) => {
    setSelected((oldValue = []) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <Command
      emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
      searchSlot={
        <CommandSearch
          icon={(className) => <IconSearch className={className} />}
          onClear={() => console.log("clear")}
        />
      }
      footerSlot={<Footer />}
    >
      <CommandGroup title="User" togglable={false}>
        <CommandGroupItem
          value="messages"
          kbdSlot={
            <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="M" />
          }
        >
          <CommandGroupItemBox
            icon={(className) => <IconMail className={className} />}
            label="Messages"
            badgeSlot={<CommandGroupItemBoxBadge label="9+" />}
          />
        </CommandGroupItem>
        <CommandGroupItem
          value="profile"
          kbdSlot={
            <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="P" />
          }
        >
          <CommandGroupItemBox icon={(className) => <IconUser className={className} />} label="Profile" />
        </CommandGroupItem>
        <CommandGroupItem
          value="settings"
          kbdSlot={
            <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="S" />
          }
        >
          <CommandGroupItemBox icon={(className) => <IconSettings className={className} />} label="Settings" />
        </CommandGroupItem>
      </CommandGroup>
      <CommandGroup togglable={false} title="Developer">
        <CommandGroupItem value="integrations">
          <CommandGroupItemBox
            icon={(className) => <IconPlug className={className} />}
            label="Integrations"
            badgeSlot={<CommandGroupItemBoxBadge color="green" label="New" />}
          />
        </CommandGroupItem>
        <CommandGroupItem value="api keys">
          <CommandGroupItemBox icon={(className) => <IconKey className={className} />} label="API keys" />
        </CommandGroupItem>
        <CommandGroupItem value="analytics">
          <CommandGroupItemBox
            icon={(className) => <IconDeviceAnalytics className={className} />}
            label="Analytics"
          />
        </CommandGroupItem>
      </CommandGroup>
      <CommandGroup togglable={false} title="Appearance">
        <CommandGroupItem
          value="dark mode"
          onSelect={(value) => handleSelect(value)}
          isSelected={selected?.includes("dark mode")}
        >
          <CommandGroupItemBox
            icon={(className) => <IconMoon className={className} />}
            label="Dark mode"
            switchSlot={<CommandGroupItemBoxSwitch />}
          />
        </CommandGroupItem>
        <CommandGroupItem value="choose theme">
          <CommandGroupItemBox icon={(className) => <IconPalette className={className} />} label="Choose theme" />
        </CommandGroupItem>
      </CommandGroup>
      <CommandGroup togglable={false}>
        <CommandGroupItem variant="destructive" value="Log out">
          <CommandGroupItemBox icon={(className) => <IconLogout className={className} />} label="Log out" />
        </CommandGroupItem>
      </CommandGroup>
    </Command>
  );
};

const Footer = () => {
  return (
    <CommandFooter>
      <CommandFooterElement leftLabel="Press" kbdSlot1={<CommandFooterElementKBD label="/" />} rightLabel="to search" />
      <CommandFooterElement
        kbdSlot1={<CommandFooterElementKBD label="SHIFT" />}
        kbdSlot2={<CommandFooterElementKBD label="G" />}
        rightLabel="to group items"
      />
    </CommandFooter>
  );
};
`;

const DefaultExample = () => {
  const [selected, setSelected] = useState<string[] | undefined>();
  const handleSelect = (value: string) => {
    setSelected((oldValue = []) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <ShowcaseFrame code={defaultCode}>
      <Command
        emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
        searchSlot={
          <CommandSearch
            icon={(className) => <IconSearch className={className} />}
            onClear={() => console.log("clear")}
          />
        }
        footerSlot={<Footer />}
      >
        <CommandGroup title="User" togglable={false}>
          <CommandGroupItem
            value="messages"
            kbdSlot={
              <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="M" />
            }
          >
            <CommandGroupItemBox
              icon={(className) => <IconMail className={className} />}
              label="Messages"
              badgeSlot={<CommandGroupItemBoxBadge label="9+" />}
            />
          </CommandGroupItem>
          <CommandGroupItem
            value="profile"
            kbdSlot={
              <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="P" />
            }
          >
            <CommandGroupItemBox icon={(className) => <IconUser className={className} />} label="Profile" />
          </CommandGroupItem>
          <CommandGroupItem
            value="settings"
            kbdSlot={
              <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="S" />
            }
          >
            <CommandGroupItemBox icon={(className) => <IconSettings className={className} />} label="Settings" />
          </CommandGroupItem>
        </CommandGroup>
        <CommandGroup togglable={false} title="Developer">
          <CommandGroupItem value="integrations">
            <CommandGroupItemBox
              icon={(className) => <IconPlug className={className} />}
              label="Integrations"
              badgeSlot={<CommandGroupItemBoxBadge color="green" label="New" />}
            />
          </CommandGroupItem>
          <CommandGroupItem value="api keys">
            <CommandGroupItemBox icon={(className) => <IconKey className={className} />} label="API keys" />
          </CommandGroupItem>
          <CommandGroupItem value="analytics">
            <CommandGroupItemBox
              icon={(className) => <IconDeviceAnalytics className={className} />}
              label="Analytics"
            />
          </CommandGroupItem>
        </CommandGroup>
        <CommandGroup togglable={false} title="Appearance">
          <CommandGroupItem
            value="dark mode"
            onSelect={(value) => handleSelect(value)}
            isSelected={selected?.includes("dark mode")}
          >
            <CommandGroupItemBox
              icon={(className) => <IconMoon className={className} />}
              label="Dark mode"
              switchSlot={<CommandGroupItemBoxSwitch />}
            />
          </CommandGroupItem>
          <CommandGroupItem value="choose theme">
            <CommandGroupItemBox icon={(className) => <IconPalette className={className} />} label="Choose theme" />
          </CommandGroupItem>
        </CommandGroup>
        <CommandGroup togglable={false}>
          <CommandGroupItem variant="destructive" value="Log out">
            <CommandGroupItemBox icon={(className) => <IconLogout className={className} />} label="Log out" />
          </CommandGroupItem>
        </CommandGroup>
      </Command>
    </ShowcaseFrame>
  );
};

const toggleItemsCode = `
const ToggleItemsExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <Command
      emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
      searchSlot={
        <CommandSearch
          icon={(className) => <IconSearch className={className} />}
          onClear={() => console.log("clear")}
        />
      }
      footerSlot={<Footer />}
    >
      <CommandGroup togglable={true} title="People">
        <CommandGroupItem
          value="James Brown"
          onSelect={handleSelect}
          isSelected={selected?.includes("James Brown".toLowerCase())}
        >
          <CommandGroupItemBoxWithAvatar
            avatarSlot={
              <CommandGroupItemBoxAvatar imageProps={{ src: avatar1Src, alt: "Avatar 1" }} fallbackText="J" />
            }
            label="James Brown"
            badgeSlot={<CommandGroupItemBoxBadge label="Online" color="green" />}
          />
        </CommandGroupItem>
        <CommandGroupItem
          value="Laura Smith"
          onSelect={handleSelect}
          isSelected={selected?.includes("Laura Smith".toLowerCase())}
          disabled
        >
          <CommandGroupItemBoxWithAvatar
            avatarSlot={
              <CommandGroupItemBoxAvatar imageProps={{ src: avatar2Src, alt: "Avatar 2" }} fallbackText="L" />
            }
            label="Laura Smith"
            badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
          />
        </CommandGroupItem>
        <CommandGroupItem
          value="David Clark"
          onSelect={handleSelect}
          isSelected={selected?.includes("David Clark".toLowerCase())}
        >
          <CommandGroupItemBoxWithAvatar
            avatarSlot={<CommandGroupItemBoxAvatar fallbackText="D" />}
            label="David Clark"
            badgeSlot={<CommandGroupItemBoxBadge color="red" label="Busy" />}
          />
        </CommandGroupItem>
        <CommandGroupItem
          value="Maria Jones"
          onSelect={handleSelect}
          isSelected={selected?.includes("Maria Jones".toLowerCase())}
        >
          <CommandGroupItemBoxWithAvatar
            avatarSlot={<CommandGroupItemBoxAvatar fallbackText="M" />}
            label="Maria Jones"
            badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
          />
        </CommandGroupItem>
      </CommandGroup>
    </Command>
  );
};

const Footer = () => {
  return (
    <CommandFooter>
      <CommandFooterElement leftLabel="Press" kbdSlot1={<CommandFooterElementKBD label="/" />} rightLabel="to search" />
      <CommandFooterElement
        kbdSlot1={<CommandFooterElementKBD label="SHIFT" />}
        kbdSlot2={<CommandFooterElementKBD label="G" />}
        rightLabel="to group items"
      />
    </CommandFooter>
  );
};
`;

const ToggleItemsExample = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelected((oldValue) =>
      oldValue.includes(value) ? oldValue.filter((item) => item !== value) : [...oldValue, value],
    );
  };

  return (
    <ShowcaseFrame code={toggleItemsCode}>
      <Command
        emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
        searchSlot={
          <CommandSearch
            icon={(className) => <IconSearch className={className} />}
            onClear={() => console.log("clear")}
          />
        }
        footerSlot={<Footer />}
      >
        <CommandGroup togglable={true} title="People">
          <CommandGroupItem
            value="James Brown"
            onSelect={handleSelect}
            isSelected={selected?.includes("James Brown".toLowerCase())}
          >
            <CommandGroupItemBoxWithAvatar
              avatarSlot={
                <CommandGroupItemBoxAvatar imageProps={{ src: avatar1Src, alt: "Avatar 1" }} fallbackText="J" />
              }
              label="James Brown"
              badgeSlot={<CommandGroupItemBoxBadge label="Online" color="green" />}
            />
          </CommandGroupItem>
          <CommandGroupItem
            value="Laura Smith"
            onSelect={handleSelect}
            isSelected={selected?.includes("Laura Smith".toLowerCase())}
            disabled
          >
            <CommandGroupItemBoxWithAvatar
              avatarSlot={
                <CommandGroupItemBoxAvatar imageProps={{ src: avatar2Src, alt: "Avatar 2" }} fallbackText="L" />
              }
              label="Laura Smith"
              badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
            />
          </CommandGroupItem>
          <CommandGroupItem
            value="David Clark"
            onSelect={handleSelect}
            isSelected={selected?.includes("David Clark".toLowerCase())}
          >
            <CommandGroupItemBoxWithAvatar
              avatarSlot={<CommandGroupItemBoxAvatar fallbackText="D" />}
              label="David Clark"
              badgeSlot={<CommandGroupItemBoxBadge color="red" label="Busy" />}
            />
          </CommandGroupItem>
          <CommandGroupItem
            value="Maria Jones"
            onSelect={handleSelect}
            isSelected={selected?.includes("Maria Jones".toLowerCase())}
          >
            <CommandGroupItemBoxWithAvatar
              avatarSlot={<CommandGroupItemBoxAvatar fallbackText="M" />}
              label="Maria Jones"
              badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
            />
          </CommandGroupItem>
        </CommandGroup>
      </Command>
    </ShowcaseFrame>
  );
};

const withButtonsCode = `
const WithButtonsExample = () => {
  return (
    <Command
      emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
      searchSlot={
        <CommandSearch
          icon={(className) => <IconSearch className={className} />}
          onClear={() => console.log("clear")}
        />
      }
      footerSlot={<Footer />}
    >
      <CommandGroup title="People">
        <CommandGroupItem value="James Brown">
          <CommandGroupItemBoxWithAvatar
            buttonSlot1={<CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />}
            buttonSlot2={<CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />}
            buttonSlot3={<CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />}
            avatarSlot={
              <CommandGroupItemBoxAvatar imageProps={{ src: avatar1Src, alt: "Avatar 1" }} fallbackText="J" />
            }
            label="James Brown"
            badgeSlot={<CommandGroupItemBoxBadge label="Online" color="green" />}
          />
        </CommandGroupItem>
        <CommandGroupItem value="Laura Smith" disabled>
          <CommandGroupItemBoxWithAvatar
            buttonSlot1={<CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />}
            buttonSlot2={<CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />}
            buttonSlot3={<CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />}
            avatarSlot={
              <CommandGroupItemBoxAvatar imageProps={{ src: avatar2Src, alt: "Avatar 2" }} fallbackText="L" />
            }
            label="Laura Smith"
            badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
          />
        </CommandGroupItem>
        <CommandGroupItem value="David Clark">
          <CommandGroupItemBoxWithAvatar
            buttonSlot1={<CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />}
            buttonSlot2={<CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />}
            buttonSlot3={<CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />}
            avatarSlot={<CommandGroupItemBoxAvatar fallbackText="D" />}
            label="David Clark"
            badgeSlot={<CommandGroupItemBoxBadge color="red" label="Busy" />}
          />
        </CommandGroupItem>
        <CommandGroupItem value="Maria Jones">
          <CommandGroupItemBoxWithAvatar
            buttonSlot1={<CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />}
            buttonSlot2={<CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />}
            buttonSlot3={<CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />}
            avatarSlot={<CommandGroupItemBoxAvatar fallbackText="M" />}
            label="Maria Jones"
            badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
          />
        </CommandGroupItem>
      </CommandGroup>
    </Command>
  );
};

const Footer = () => {
  return (
    <CommandFooter>
      <CommandFooterElement leftLabel="Press" kbdSlot1={<CommandFooterElementKBD label="/" />} rightLabel="to search" />
      <CommandFooterElement
        kbdSlot1={<CommandFooterElementKBD label="SHIFT" />}
        kbdSlot2={<CommandFooterElementKBD label="G" />}
        rightLabel="to group items"
      />
    </CommandFooter>
  );
};
`;

const WithButtonsExample = () => {
  return (
    <ShowcaseFrame code={withButtonsCode}>
      <Command
        emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
        searchSlot={
          <CommandSearch
            icon={(className) => <IconSearch className={className} />}
            onClear={() => console.log("clear")}
          />
        }
        footerSlot={<Footer />}
      >
        <CommandGroup title="People">
          <CommandGroupItem value="James Brown">
            <CommandGroupItemBoxWithAvatar
              buttonSlot1={<CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />}
              buttonSlot2={<CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />}
              buttonSlot3={<CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />}
              avatarSlot={
                <CommandGroupItemBoxAvatar imageProps={{ src: avatar1Src, alt: "Avatar 1" }} fallbackText="J" />
              }
              label="James Brown"
              badgeSlot={<CommandGroupItemBoxBadge label="Online" color="green" />}
            />
          </CommandGroupItem>
          <CommandGroupItem value="Laura Smith" disabled>
            <CommandGroupItemBoxWithAvatar
              buttonSlot1={<CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />}
              buttonSlot2={<CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />}
              buttonSlot3={<CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />}
              avatarSlot={
                <CommandGroupItemBoxAvatar imageProps={{ src: avatar2Src, alt: "Avatar 2" }} fallbackText="L" />
              }
              label="Laura Smith"
              badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
            />
          </CommandGroupItem>
          <CommandGroupItem value="David Clark">
            <CommandGroupItemBoxWithAvatar
              buttonSlot1={<CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />}
              buttonSlot2={<CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />}
              buttonSlot3={<CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />}
              avatarSlot={<CommandGroupItemBoxAvatar fallbackText="D" />}
              label="David Clark"
              badgeSlot={<CommandGroupItemBoxBadge color="red" label="Busy" />}
            />
          </CommandGroupItem>
          <CommandGroupItem value="Maria Jones">
            <CommandGroupItemBoxWithAvatar
              buttonSlot1={<CommandGroupItemBoxButton icon={(className) => <IconVideo className={className} />} />}
              buttonSlot2={<CommandGroupItemBoxButton icon={(className) => <IconMessage className={className} />} />}
              buttonSlot3={<CommandGroupItemBoxButton icon={(className) => <IconPhone className={className} />} />}
              avatarSlot={<CommandGroupItemBoxAvatar fallbackText="M" />}
              label="Maria Jones"
              badgeSlot={<CommandGroupItemBoxBadge label="Away" />}
            />
          </CommandGroupItem>
        </CommandGroup>
      </Command>
    </ShowcaseFrame>
  );
};

const itemsWithIconsCode = `
export const ItemsWithIconsExample = () => {
  return (
    <Command
      emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
      searchSlot={
        <CommandSearch
          icon={(className) => <IconSearch className={className} />}
          onClear={() => console.log("clear")}
        />
      }
      footerSlot={<Footer />}
    >
      <CommandGroup togglable={false}>
        <CommandGroupItem
          value="Hide"
          kbdSlot={
            <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="H" />
          }
        >
          <CommandGroupItemBox icon={(className) => <IconEyeOff className={className} />} label="Hide" />
        </CommandGroupItem>
        <CommandGroupItem
          value="duplicate"
          kbdSlot={
            <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="D" />
          }
        >
          <CommandGroupItemBox icon={(className) => <IconCopy className={className} />} label="Duplicate" />
        </CommandGroupItem>
        <CommandGroupItem
          value="add before"
          kbdSlot={
            <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="E" />
          }
        >
          <CommandGroupItemBox icon={(className) => <IconArrowUp className={className} />} label="Add before" />
        </CommandGroupItem>
        <CommandGroupItem
          value="add After"
          kbdSlot={
            <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="I" />
          }
        >
          <CommandGroupItemBox icon={(className) => <IconArrowDown className={className} />} label="Add after" />
        </CommandGroupItem>
        <CommandGroupItem value="Edit HTML" disabled>
          <CommandGroupItemBox icon={(className) => <IconTerminal2 className={className} />} label="Edit HTML" />
        </CommandGroupItem>
        <CommandGroupItem value="Add to library" disabled>
          <CommandGroupItemBox
            icon={(className) => <IconCirclePlus className={className} />}
            label="Add to library"
          />
        </CommandGroupItem>
        <CommandGroupItem value="Toggle grid view" disabled>
          <CommandGroupItemBox
            icon={(className) => <IconGrid3x3 className={className} />}
            label="Toggle grid view"
            switchSlot={<CommandGroupItemBoxSwitch />}
          />
        </CommandGroupItem>
      </CommandGroup>
    </Command>
  );
};

const Footer = () => {
  return (
    <CommandFooter>
      <CommandFooterElement leftLabel="Press" kbdSlot1={<CommandFooterElementKBD label="/" />} rightLabel="to search" />
      <CommandFooterElement
        kbdSlot1={<CommandFooterElementKBD label="SHIFT" />}
        kbdSlot2={<CommandFooterElementKBD label="G" />}
        rightLabel="to group items"
      />
    </CommandFooter>
  );
};
`;

export const ItemsWithIconsExample = () => {
  return (
    <ShowcaseFrame code={itemsWithIconsCode}>
      <Command
        emptySlot={<CommandEmpty text="Empty" image={{ src: EmptyIllustration }} />}
        searchSlot={
          <CommandSearch
            icon={(className) => <IconSearch className={className} />}
            onClear={() => console.log("clear")}
          />
        }
        footerSlot={<Footer />}
      >
        <CommandGroup togglable={false}>
          <CommandGroupItem
            value="Hide"
            kbdSlot={
              <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="H" />
            }
          >
            <CommandGroupItemBox icon={(className) => <IconEyeOff className={className} />} label="Hide" />
          </CommandGroupItem>
          <CommandGroupItem
            value="duplicate"
            kbdSlot={
              <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="D" />
            }
          >
            <CommandGroupItemBox icon={(className) => <IconCopy className={className} />} label="Duplicate" />
          </CommandGroupItem>
          <CommandGroupItem
            value="add before"
            kbdSlot={
              <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="E" />
            }
          >
            <CommandGroupItemBox icon={(className) => <IconArrowUp className={className} />} label="Add before" />
          </CommandGroupItem>
          <CommandGroupItem
            value="add After"
            kbdSlot={
              <CommandGroupItemKBDWithIcon icon={(className) => <IconCommand className={className} />} label="I" />
            }
          >
            <CommandGroupItemBox icon={(className) => <IconArrowDown className={className} />} label="Add after" />
          </CommandGroupItem>
          <CommandGroupItem value="Edit HTML" disabled>
            <CommandGroupItemBox icon={(className) => <IconTerminal2 className={className} />} label="Edit HTML" />
          </CommandGroupItem>
          <CommandGroupItem value="Add to library" disabled>
            <CommandGroupItemBox
              icon={(className) => <IconCirclePlus className={className} />}
              label="Add to library"
            />
          </CommandGroupItem>
          <CommandGroupItem value="Toggle grid view" disabled>
            <CommandGroupItemBox
              icon={(className) => <IconGrid3x3 className={className} />}
              label="Toggle grid view"
              switchSlot={<CommandGroupItemBoxSwitch />}
            />
          </CommandGroupItem>
        </CommandGroup>
      </Command>
    </ShowcaseFrame>
  );
};

const CommandDocs = () => {
  return (
    <>
      <Page
        title="Command"
        subtitle="Composable command menu with search, groups, destructive actions, and more."
        command="npx underatom@latest add command"
      >
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
