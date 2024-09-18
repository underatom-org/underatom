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

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel
            style={{ minWidth: 400 }}
            groupSlots={[
              <SelectPanelGroup
                title="Programming languages"
                itemSlots={[
                  <SelectPanelGroupItem value="javascript" boxSlot={<SelectPanelGroupItemBox label="Javascript" />} />,
                  <SelectPanelGroupItem value="python" boxSlot={<SelectPanelGroupItemBox label="Python" />} />,
                  <SelectPanelGroupItem value="c#" boxSlot={<SelectPanelGroupItemBox label="C#" />} />,
                  <SelectPanelGroupItem disabled value="swift" boxSlot={<SelectPanelGroupItemBox label="Swift" />} />,
                ]}
              />,
            ]}
          />
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const MultipleGroupsExample = () => {
  return (
    <ShowcaseFrame>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel
            style={{ minWidth: 400 }}
            groupSlots={[
              <SelectPanelGroup
                title="Fruits"
                itemSlots={[
                  <SelectPanelGroupItem
                    value="Cherry"
                    boxSlot={
                      <SelectPanelGroupItemBox
                        badgeSlot={<SelectPanelGroupItemBoxBadge label="New" color="green" />}
                        iconBoxSlot={
                          <SelectPanelGroupItemBoxIconBox icon={(className) => <IconCherry className={className} />} />
                        }
                        label="Cherry"
                      />
                    }
                  />,
                  <SelectPanelGroupItem
                    value="Apple"
                    boxSlot={
                      <SelectPanelGroupItemBox
                        iconBoxSlot={
                          <SelectPanelGroupItemBoxIconBox icon={(className) => <IconApple className={className} />} />
                        }
                        label="Apple"
                      />
                    }
                  />,
                  <SelectPanelGroupItem
                    value="Lemon"
                    boxSlot={
                      <SelectPanelGroupItemBox
                        iconBoxSlot={
                          <SelectPanelGroupItemBoxIconBox icon={(className) => <IconLemon className={className} />} />
                        }
                        label="Lemon"
                      />
                    }
                  />,
                ]}
              />,
              <SelectPanelGroup
                title="Vegetables"
                itemSlots={[
                  <SelectPanelGroupItem
                    value="Carrot"
                    boxSlot={
                      <SelectPanelGroupItemBox
                        iconBoxSlot={
                          <SelectPanelGroupItemBoxIconBox icon={(className) => <IconCarrot className={className} />} />
                        }
                        label="Carrot"
                      />
                    }
                  />,
                  <SelectPanelGroupItem
                    value="Mushroom"
                    boxSlot={
                      <SelectPanelGroupItemBox
                        badgeSlot={<SelectPanelGroupItemBoxBadge label="10% off" />}
                        iconBoxSlot={
                          <SelectPanelGroupItemBoxIconBox
                            icon={(className) => <IconMushroom className={className} />}
                          />
                        }
                        label="Mushroom"
                      />
                    }
                  />,
                ]}
              />,
            ]}
          />
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const StatusExample = () => {
  return (
    <ShowcaseFrame>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel
            style={{ minWidth: 400 }}
            groupSlots={[
              <SelectPanelGroup
                title="Status"
                itemSlots={[
                  <SelectPanelGroupItem
                    value="pending"
                    boxSlot={<SelectPanelGroupItemBoxWithDot dotColor="red" label="Pending" />}
                  />,
                  <SelectPanelGroupItem
                    value="in progress"
                    boxSlot={<SelectPanelGroupItemBoxWithDot dotColor="primary" label="In progress" />}
                  />,
                  <SelectPanelGroupItem
                    value="Complete"
                    boxSlot={<SelectPanelGroupItemBoxWithDot dotColor="green" label="Complete" />}
                  />,
                ]}
              />,
            ]}
          />
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const AvatarSingleLineExample = () => {
  return (
    <ShowcaseFrame>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel
            style={{ minWidth: 400 }}
            groupSlots={[
              <SelectPanelGroup
                title="People"
                itemSlots={[
                  <SelectPanelGroupItem
                    value="Joey Parsons"
                    boxSlot={
                      <SelectPanelGroupItemBoxWithAvatar
                        label="Joey Parsons"
                        avatarSlot={<SelectPanelGroupItemBoxAvatar imageProps={{ src: avatar1Src }} />}
                      />
                    }
                  />,
                  <SelectPanelGroupItem
                    value="Tyler Norman"
                    boxSlot={
                      <SelectPanelGroupItemBoxWithAvatar
                        label="Tyler Norman"
                        avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="T" />}
                      />
                    }
                  />,
                  <SelectPanelGroupItem
                    value="Sophia Norris"
                    boxSlot={
                      <SelectPanelGroupItemBoxWithAvatar
                        label="Sophia Norris"
                        avatarSlot={
                          <SelectPanelGroupItemBoxAvatarWithIcon
                            fallbackIcon={(className) => <IconUser className={className} />}
                          />
                        }
                      />
                    }
                  />,
                  <SelectPanelGroupItem
                    value="Peter Nelson"
                    disabled
                    boxSlot={
                      <SelectPanelGroupItemBoxWithAvatar
                        label="Peter Nelson"
                        avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="P" />}
                      />
                    }
                  />,
                ]}
              />,
            ]}
          />
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const AvatarMultilineExample = () => {
  return (
    <ShowcaseFrame>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel
            style={{ minWidth: 400 }}
            groupSlots={[
              <SelectPanelGroup
                title="People"
                itemSlots={[
                  <SelectPanelGroupItem
                    value="Joey Parsons"
                    boxSlot={
                      <SelectPanelGroupItemBoxWithAvatarAndDescription
                        label="Joey Parsons"
                        description="Senior Engineer"
                        badgeSlot={<SelectPanelGroupItemBoxBadge label="Active" color="green" />}
                        avatarSlot={<SelectPanelGroupItemBoxAvatar imageProps={{ src: avatar1Src }} multiline />}
                      />
                    }
                  />,
                  <SelectPanelGroupItem
                    value="Tyler Norman"
                    boxSlot={
                      <SelectPanelGroupItemBoxWithAvatarAndDescription
                        label="Tyler Norman"
                        description="Staff Designer"
                        avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="T" multiline />}
                      />
                    }
                  />,
                  <SelectPanelGroupItem
                    value="Sophia Norris"
                    boxSlot={
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
                    }
                  />,
                  <SelectPanelGroupItem
                    value="Peter Nelson"
                    disabled
                    boxSlot={
                      <SelectPanelGroupItemBoxWithAvatarAndDescription
                        label="Peter Nelson"
                        description="Tech Lead"
                        avatarSlot={<SelectPanelGroupItemBoxAvatar fallbackText="P" multiline />}
                      />
                    }
                  />,
                ]}
              />,
            ]}
          />
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const IconMultilineExample = () => {
  return (
    <ShowcaseFrame>
      <Select.Root>
        <Select.Trigger style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select.Value placeholder="Select an option" />
          <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
          <SelectPanel
            style={{ minWidth: 400 }}
            groupSlots={[
              <SelectPanelGroup
                title="Social media"
                itemSlots={[
                  <SelectPanelGroupItem
                    value="Facebook"
                    boxSlot={
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
                    }
                  />,
                  <SelectPanelGroupItem
                    value="Youtube"
                    boxSlot={
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
                    }
                  />,
                  <SelectPanelGroupItem
                    value="LinkedIn"
                    boxSlot={
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
                    }
                  />,
                ]}
              />,
            ]}
          />
        </Select.Portal>
      </Select.Root>
    </ShowcaseFrame>
  );
};

const SelectPanelDocs = () => {
  return (
    <Page title="SelectPanel" subtitle="SelectPanel">
      <Section title="Showcase">
        <Example title="Default">
          <DefaultExample />
        </Example>
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
