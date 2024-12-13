import {
  SelectPanel,
  SelectPanelGroup,
  SelectPanelGroupItem,
  SelectPanelGroupItemBox,
  SelectPanelGroupItemBoxAvatar,
  SelectPanelGroupItemBoxAvatarWithIcon,
  SelectPanelGroupItemBoxBadge,
  SelectPanelGroupItemBoxIconBox,
  SelectPanelGroupItemBoxWithAvatar,
  SelectPanelGroupItemBoxWithAvatarAndDescription,
  SelectPanelGroupItemBoxWithDescription,
  SelectPanelGroupItemBoxWithDot,
} from "./SelectPanel.atoms";
import * as Select from "@radix-ui/react-select";
import {
  IconApple,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconCarrot,
  IconCherry,
  IconLemon,
  IconMushroom,
  IconUser,
} from "../../../assets/Icons";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame } from "../../../docs/docs.components";
import { avatar1Src } from "../../../assets/images/Images";
import { Code } from "../../no-headless/typography/Typography.atoms";

const defaultCode = `
import * as Select from "@radix-ui/react-select";

<Select.Root>
  <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <Select.Value placeholder="Select an option" />
    <Select.Icon />
  </Select.Trigger>

  <Select.Portal>
    <SelectPanel style={{ minWidth: 400 }}>
      <SelectPanelGroup title="Programming languages">
        <SelectPanelGroupItem value="javascript">
          <SelectPanelGroupItemBox label="Javascript" />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="python">
          <SelectPanelGroupItemBox label="Python" />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="c#">
          <SelectPanelGroupItemBox label="C#" />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem disabled value="swift">
          <SelectPanelGroupItemBox label="Swift" />
        </SelectPanelGroupItem>
      </SelectPanelGroup>
    </SelectPanel>
  </Select.Portal>
</Select.Root>
`;
import { useMediaQuery } from "../../../docs/utils";

const DefaultExample = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ShowcaseFrame>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel style={{ minWidth: !isMobile ? 400 : 300 }}>
            <SelectPanelGroup title="Programming languages">
              <SelectPanelGroupItem value="javascript">
                <SelectPanelGroupItemBox label="Javascript" />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="python">
                <SelectPanelGroupItemBox label="Python" />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="c#">
                <SelectPanelGroupItemBox label="C#" />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem disabled value="swift">
                <SelectPanelGroupItemBox label="Swift" />
              </SelectPanelGroupItem>
            </SelectPanelGroup>
          </SelectPanel>
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const multipleGroupsCode = `
import * as Select from "@radix-ui/react-select";

<Select.Root>
  <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <Select.Value placeholder="Select an option" />
    <Select.Icon />
  </Select.Trigger>

  <Select.Portal>
    <SelectPanel style={{ minWidth: 400 }}>
      <SelectPanelGroup title="Fruits">
        <SelectPanelGroupItem value="Cherry">
          <SelectPanelGroupItemBox
            badgeSlot={<SelectPanelGroupItemBoxBadge label="New" color="green" />}
            iconBoxSlot={
              <SelectPanelGroupItemBoxIconBox icon={(className) => <IconCherry className={className} />} />
            }
            label="Cherry"
          />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="Apple">
          <SelectPanelGroupItemBox
            iconBoxSlot={
              <SelectPanelGroupItemBoxIconBox icon={(className) => <IconApple className={className} />} />
            }
            label="Apple"
          />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="Lemon">
          <SelectPanelGroupItemBox
            iconBoxSlot={
              <SelectPanelGroupItemBoxIconBox icon={(className) => <IconLemon className={className} />} />
            }
            label="Lemon"
          />
        </SelectPanelGroupItem>
      </SelectPanelGroup>
      <SelectPanelGroup title="Vegetables">
        <SelectPanelGroupItem value="Carrot">
          <SelectPanelGroupItemBox
            iconBoxSlot={
              <SelectPanelGroupItemBoxIconBox icon={(className) => <IconCarrot className={className} />} />
            }
            label="Carrot"
          />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="Mushroom">
          <SelectPanelGroupItemBox
            badgeSlot={<SelectPanelGroupItemBoxBadge label="10% off" />}
            iconBoxSlot={
              <SelectPanelGroupItemBoxIconBox icon={(className) => <IconMushroom className={className} />} />
            }
            label="Mushroom"
          />
        </SelectPanelGroupItem>
      </SelectPanelGroup>
    </SelectPanel>
  </Select.Portal>
</Select.Root>
`;

const MultipleGroupsExample = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ShowcaseFrame code={multipleGroupsCode}>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel style={{ minWidth: !isMobile ? 400 : 300 }}>
            <SelectPanelGroup title="Fruits">
              <SelectPanelGroupItem value="Cherry">
                <SelectPanelGroupItemBox
                  badgeSlot={<SelectPanelGroupItemBoxBadge label="New" color="green" />}
                  iconBoxSlot={
                    <SelectPanelGroupItemBoxIconBox icon={(className) => <IconCherry className={className} />} />
                  }
                  label="Cherry"
                />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="Apple">
                <SelectPanelGroupItemBox
                  iconBoxSlot={
                    <SelectPanelGroupItemBoxIconBox icon={(className) => <IconApple className={className} />} />
                  }
                  label="Apple"
                />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="Lemon">
                <SelectPanelGroupItemBox
                  iconBoxSlot={
                    <SelectPanelGroupItemBoxIconBox icon={(className) => <IconLemon className={className} />} />
                  }
                  label="Lemon"
                />
              </SelectPanelGroupItem>
            </SelectPanelGroup>
            <SelectPanelGroup title="Vegetables">
              <SelectPanelGroupItem value="Carrot">
                <SelectPanelGroupItemBox
                  iconBoxSlot={
                    <SelectPanelGroupItemBoxIconBox icon={(className) => <IconCarrot className={className} />} />
                  }
                  label="Carrot"
                />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="Mushroom">
                <SelectPanelGroupItemBox
                  badgeSlot={<SelectPanelGroupItemBoxBadge label="10% off" />}
                  iconBoxSlot={
                    <SelectPanelGroupItemBoxIconBox icon={(className) => <IconMushroom className={className} />} />
                  }
                  label="Mushroom"
                />
              </SelectPanelGroupItem>
            </SelectPanelGroup>
          </SelectPanel>
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const statusCode = `
import * as Select from "@radix-ui/react-select";

<Select.Root>
  <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <Select.Value placeholder="Select an option" />
    <Select.Icon />
  </Select.Trigger>

  <Select.Portal>
    <SelectPanel style={{ minWidth: 400 }}>
      <SelectPanelGroup title="Status">
        <SelectPanelGroupItem value="pending">
          <SelectPanelGroupItemBoxWithDot dotColor="red" label="Pending" />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="in progress">
          <SelectPanelGroupItemBoxWithDot dotColor="primary" label="In progress" />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="Complete">
          <SelectPanelGroupItemBoxWithDot dotColor="green" label="Complete" />
        </SelectPanelGroupItem>
      </SelectPanelGroup>
    </SelectPanel>
  </Select.Portal>
</Select.Root>
`;

const StatusExample = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ShowcaseFrame code={statusCode}>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel style={{ minWidth: !isMobile ? 400 : "unset", maxWidth: isMobile ? 500 : "unset" }}>
            <SelectPanelGroup title="Status">
              <SelectPanelGroupItem value="pending">
                <SelectPanelGroupItemBoxWithDot dotColor="red" label="Pending" />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="in progress">
                <SelectPanelGroupItemBoxWithDot dotColor="primary" label="In progress" />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="Complete">
                <SelectPanelGroupItemBoxWithDot dotColor="green" label="Complete" />
              </SelectPanelGroupItem>
            </SelectPanelGroup>
          </SelectPanel>
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const avatarSingleLineCode = `
import * as Select from "@radix-ui/react-select";

<Select.Root>
  <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <Select.Value placeholder="Select an option" />
    <Select.Icon />
  </Select.Trigger>

  <Select.Portal>
    <SelectPanel style={{ minWidth: 400 }}>
      <SelectPanelGroup title="People">
        <SelectPanelGroupItem value="Joey Parsons">
          <SelectPanelGroupItemBoxWithAvatar
            label="Joey Parsons"
            avatarSlot={<SelectPanelGroupItemBoxAvatar imageProps={{ src: avatar1Src }} />}
          />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="Tyler Norman">
          <SelectPanelGroupItemBoxWithAvatar
            label="Tyler Norman"
            avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="T" />}
          />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="Sophia Norris">
          <SelectPanelGroupItemBoxWithAvatar
            label="Sophia Norris"
            avatarSlot={
              <SelectPanelGroupItemBoxAvatarWithIcon
                fallbackIcon={(className) => <IconUser className={className} />}
              />
            }
          />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="Peter Nelson" disabled>
          <SelectPanelGroupItemBoxWithAvatar
            label="Peter Nelson"
            avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="P" />}
          />
        </SelectPanelGroupItem>
      </SelectPanelGroup>
    </SelectPanel>
  </Select.Portal>
</Select.Root>
`;

const AvatarSingleLineExample = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ShowcaseFrame code={avatarSingleLineCode}>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel style={{ minWidth: !isMobile ? 400 : "unset", maxWidth: isMobile ? 500 : "unset" }}>
            <SelectPanelGroup title="People">
              <SelectPanelGroupItem value="Joey Parsons">
                <SelectPanelGroupItemBoxWithAvatar
                  label="Joey Parsons"
                  avatarSlot={<SelectPanelGroupItemBoxAvatar imageProps={{ src: avatar1Src }} />}
                />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="Tyler Norman">
                <SelectPanelGroupItemBoxWithAvatar
                  label="Tyler Norman"
                  avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="T" />}
                />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="Sophia Norris">
                <SelectPanelGroupItemBoxWithAvatar
                  label="Sophia Norris"
                  avatarSlot={
                    <SelectPanelGroupItemBoxAvatarWithIcon
                      fallbackIcon={(className) => <IconUser className={className} />}
                    />
                  }
                />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="Peter Nelson" disabled>
                <SelectPanelGroupItemBoxWithAvatar
                  label="Peter Nelson"
                  avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="P" />}
                />
              </SelectPanelGroupItem>
            </SelectPanelGroup>
          </SelectPanel>
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const avatarMultilineCode = `
import * as Select from "@radix-ui/react-select";

<Select.Root>
  <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <Select.Value placeholder="Select an option" />
    <Select.Icon />
  </Select.Trigger>

  <Select.Portal>
    <SelectPanel style={{ minWidth: 400 }}>
      <SelectPanelGroup title="People">
        <SelectPanelGroupItem value="Joey Parsons">
          <SelectPanelGroupItemBoxWithAvatarAndDescription
            label="Joey Parsons"
            description="Senior Engineer"
            badgeSlot={<SelectPanelGroupItemBoxBadge label="Active" color="green" />}
            avatarSlot={<SelectPanelGroupItemBoxAvatar imageProps={{ src: avatar1Src }} multiline />}
          />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="Tyler Norman">
          <SelectPanelGroupItemBoxWithAvatarAndDescription
            label="Tyler Norman"
            description="Staff Designer"
            avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="T" multiline />}
          />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="Sophia Norris">
          <SelectPanelGroupItemBoxWithAvatarAndDescription
            label="Sophia Norris"
            description="Intern"
            badgeSlot={<SelectPanelGroupItemBoxBadge label="Inactive" />}
            avatarSlot={
              <SelectPanelGroupItemBoxAvatarWithIcon
                fallbackIcon={(className) => <IconUser className={className} />}
                multiline
              />
            }
          />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="Peter Nelson" disabled>
          <SelectPanelGroupItemBoxWithAvatarAndDescription
            label="Peter Nelson"
            description="Tech Lead"
            avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="P" multiline />}
          />
        </SelectPanelGroupItem>
      </SelectPanelGroup>
    </SelectPanel>
  </Select.Portal>
</Select.Root>
`;

const AvatarMultilineExample = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ShowcaseFrame code={avatarMultilineCode}>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel style={{ minWidth: !isMobile ? 400 : "unset", maxWidth: isMobile ? 500 : "unset" }}>
            <SelectPanelGroup title="People">
              <SelectPanelGroupItem value="Joey Parsons">
                <SelectPanelGroupItemBoxWithAvatarAndDescription
                  label="Joey Parsons"
                  description="Senior Engineer"
                  badgeSlot={<SelectPanelGroupItemBoxBadge label="Active" color="green" />}
                  avatarSlot={<SelectPanelGroupItemBoxAvatar imageProps={{ src: avatar1Src }} multiline />}
                />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="Tyler Norman">
                <SelectPanelGroupItemBoxWithAvatarAndDescription
                  label="Tyler Norman"
                  description="Staff Designer"
                  avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="T" multiline />}
                />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="Sophia Norris">
                <SelectPanelGroupItemBoxWithAvatarAndDescription
                  label="Sophia Norris"
                  description="Intern"
                  badgeSlot={<SelectPanelGroupItemBoxBadge label="Inactive" />}
                  avatarSlot={
                    <SelectPanelGroupItemBoxAvatarWithIcon
                      fallbackIcon={(className) => <IconUser className={className} />}
                      multiline
                    />
                  }
                />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="Peter Nelson" disabled>
                <SelectPanelGroupItemBoxWithAvatarAndDescription
                  label="Peter Nelson"
                  description="Tech Lead"
                  avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="P" multiline />}
                />
              </SelectPanelGroupItem>
            </SelectPanelGroup>
          </SelectPanel>
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const iconMultilineCode = `
import * as Select from "@radix-ui/react-select";

<Select.Root>
  <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <Select.Value placeholder="Select an option" />
    <Select.Icon />
  </Select.Trigger>

  <Select.Portal>
    <SelectPanel style={{ minWidth: 400 }}>
      <SelectPanelGroup title="Social media">
        <SelectPanelGroupItem value="Facebook">
          <SelectPanelGroupItemBoxWithDescription
            label="Facebook"
            description="Social Media"
            supportingText="Connect with friends"
            iconBoxSlot={
              <SelectPanelGroupItemBoxIconBox
                icon={(className) => <IconBrandFacebook className={className} />}
                multiline
              />
            }
          />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="Youtube">
          <SelectPanelGroupItemBoxWithDescription
            label="Youtube"
            description="Video Sharing"
            supportingText="Share your videos."
            iconBoxSlot={
              <SelectPanelGroupItemBoxIconBox
                icon={(className) => <IconBrandYoutube className={className} />}
                multiline
              />
            }
          />
        </SelectPanelGroupItem>
        <SelectPanelGroupItem value="LinkedIn">
          <SelectPanelGroupItemBoxWithDescription
            label="LinkedIn"
            description="Professional Networking"
            supportingText="Build your career."
            iconBoxSlot={
              <SelectPanelGroupItemBoxIconBox
                icon={(className) => <IconBrandLinkedin className={className} />}
                multiline
              />
            }
          />
        </SelectPanelGroupItem>
      </SelectPanelGroup>
    </SelectPanel>
  </Select.Portal>
</Select.Root>
`;

const IconMultilineExample = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ShowcaseFrame code={iconMultilineCode}>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel style={{ minWidth: !isMobile ? 400 : "unset", maxWidth: isMobile ? 500 : "unset" }}>
            <SelectPanelGroup title="Social media">
              <SelectPanelGroupItem value="Facebook">
                <SelectPanelGroupItemBoxWithDescription
                  label="Facebook"
                  description="Social Media"
                  supportingText="Connect with friends"
                  iconBoxSlot={
                    <SelectPanelGroupItemBoxIconBox
                      icon={(className) => <IconBrandFacebook className={className} />}
                      multiline
                    />
                  }
                />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="Youtube">
                <SelectPanelGroupItemBoxWithDescription
                  label="Youtube"
                  description="Video Sharing"
                  supportingText="Share your videos."
                  iconBoxSlot={
                    <SelectPanelGroupItemBoxIconBox
                      icon={(className) => <IconBrandYoutube className={className} />}
                      multiline
                    />
                  }
                />
              </SelectPanelGroupItem>
              <SelectPanelGroupItem value="LinkedIn">
                <SelectPanelGroupItemBoxWithDescription
                  label="LinkedIn"
                  description="Professional Networking"
                  supportingText="Build your career."
                  iconBoxSlot={
                    <SelectPanelGroupItemBoxIconBox
                      icon={(className) => <IconBrandLinkedin className={className} />}
                      multiline
                    />
                  }
                />
              </SelectPanelGroupItem>
            </SelectPanelGroup>
          </SelectPanel>
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const SelectPanelDocs = () => {
  return (
    <Page
      title="SelectPanel"
      subtitle={
        <>
          Composable select panel component, to be used with the radix <Code>Select</Code> component.
        </>
      }
      command="npx underatom@latest add select-panel"
      usageCode={defaultCode}
      defaultExample={<DefaultExample />}
    >
      <Section title="Showcase">
        <Example title="Multiple Groups">
          <MultipleGroupsExample />
        </Example>
        <Example title="Status">
          <StatusExample />
        </Example>
        <Example title="Avatar Single Line">
          <AvatarSingleLineExample />
        </Example>
        <Example title="Avatar Multiline">
          <AvatarMultilineExample />
        </Example>
        <Example title="Icon Multiline">
          <IconMultilineExample />
        </Example>
      </Section>
    </Page>
  );
};

const selectPanelRoute = "/select-panel";
export const selectPanelRouteObj: DocsRoute<typeof selectPanelRoute> = {
  path: selectPanelRoute,
  group: "radix",
  label: "SelectPanel",
  component: SelectPanelDocs,
};
