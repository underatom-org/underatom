import {
  SelectTrigger,
  SelectTriggerBox,
  SelectTriggerBoxAvatar,
  SelectTriggerBoxTagWithIcon,
  SelectTriggerBoxWithAvatar,
  SelectTriggerBoxWithTags,
  SelectTriggerProps,
} from "./SelectTrigger.atoms";
import * as Select from "@radix-ui/react-select";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsColumn } from "../../../docs/docs.components";
import { Atom } from "../../../assets/Icons";
import {
  SelectPanel,
  SelectPanelGroup,
  SelectPanelGroupItem,
  SelectPanelGroupItemBox,
} from "../select-panel/SelectPanel.atoms";
import { useState } from "react";
import { avatar1Src } from "../../../assets/images/Images";

const SelectTriggerHelper = (
  props: SelectTriggerProps & {
    rootProps?: Select.SelectProps;
    helperStyle?: React.CSSProperties;
  },
) => {
  return (
    <div style={{ width: 400, ...props.helperStyle }}>
      <Select.Root {...props.rootProps}>
        <SelectTrigger
          label="Language"
          description="Select a programming language from the list of most popular languages"
          {...props}
        />
        <Select.Portal>
          <SelectPanel
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
    </div>
  );
};

const SelectTriggerWithTagsHelper = (props: SelectTriggerProps) => {
  const [selection, setSelection] = useState<string>(props.disabled ? "javascript" : "");
  const selected = selection !== "";

  return (
    <SelectTriggerHelper
      {...props}
      rootProps={{ value: selection, onValueChange: setSelection }}
      boxSlot={
        <SelectTriggerBoxWithTags
          textProps={{ children: "Select a programming language...", hidden: selected }}
          tagSlots={
            selected && (
              <SelectTriggerBoxTagWithIcon
                icon={(className) => <Atom className={className} />}
                onDismiss={() => setSelection("")}
              />
            )
          }
        />
      }
    />
  );
};

export const DefaultExample = () => (
  <ShowcaseFrame>
    <SelectTriggerHelper
      boxSlot={<SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />}
    />
  </ShowcaseFrame>
);

export const InvalidExample = () => (
  <ShowcaseFrame>
    <SelectTriggerHelper
      description="Please select a valid programming language"
      invalid
      boxSlot={<SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />}
    />
  </ShowcaseFrame>
);

export const RequiredExample = () => (
  <ShowcaseFrame>
    <SelectTriggerHelper
      required
      boxSlot={<SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />}
    />
  </ShowcaseFrame>
);

export const DisabledExample = () => (
  <ShowcaseFrame>
    <SelectTriggerHelper
      disabled
      boxSlot={<SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />}
    />
  </ShowcaseFrame>
);

export const AttachmentExample = () => (
  <ShowcaseFrame>
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <SelectTriggerHelper
        helperStyle={{ width: 200 }}
        attachment="start"
        description="Select a property type"
        boxSlot={<SelectTriggerBox textProps={{ placeholder: "Property type" }} />}
      />
      <SelectTriggerHelper
        helperStyle={{ width: 200 }}
        attachment="end"
        description="Select a location"
        boxSlot={<SelectTriggerBox textProps={{ placeholder: "Location" }} />}
      />
    </div>
  </ShowcaseFrame>
);

export const WithAvatarExample = () => (
  <ShowcaseFrame>
    <VariantsColumn>
      <SelectTriggerHelper
        boxSlot={
          <SelectTriggerBoxWithAvatar
            textProps={{ placeholder: "Select a programming language..." }}
            avatarSlot={<SelectTriggerBoxAvatar imageProps={{ src: avatar1Src }} />}
          />
        }
      />
      <SelectTriggerHelper
        invalid
        boxSlot={
          <SelectTriggerBoxWithAvatar
            textProps={{ placeholder: "Select a programming language..." }}
            avatarSlot={<SelectTriggerBoxAvatar imageProps={{ src: avatar1Src }} />}
          />
        }
      />
      <SelectTriggerHelper
        disabled
        boxSlot={
          <SelectTriggerBoxWithAvatar
            textProps={{ placeholder: "Select a programming language..." }}
            avatarSlot={<SelectTriggerBoxAvatar imageProps={{ src: avatar1Src }} />}
          />
        }
      />
    </VariantsColumn>
  </ShowcaseFrame>
);

export const WithIconExample = () => (
  <ShowcaseFrame>
    <VariantsColumn>
      <SelectTriggerHelper
        boxSlot={
          <SelectTriggerBox
            textProps={{ placeholder: "Select a programming language..." }}
            icon={(className) => <Atom className={className} />}
          />
        }
      />
      <SelectTriggerHelper
        invalid
        boxSlot={
          <SelectTriggerBox
            textProps={{ placeholder: "Select a programming language..." }}
            icon={(className) => <Atom className={className} />}
          />
        }
      />
      <SelectTriggerHelper
        disabled
        boxSlot={
          <SelectTriggerBox
            textProps={{ placeholder: "Select a programming language..." }}
            icon={(className) => <Atom className={className} />}
          />
        }
      />
    </VariantsColumn>
  </ShowcaseFrame>
);

export const WithTagsExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <SelectTriggerWithTagsHelper />
        <SelectTriggerWithTagsHelper invalid />
        <SelectTriggerWithTagsHelper disabled />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const Docs = () => (
  <Page title="SelectTrigger" subtitle="Subtitle" command="npx underatom@latest add select-trigger">
    <Section title="Showcase">
      <Example title="Default">
        <DefaultExample />
      </Example>
      <Example title="Invalid">
        <InvalidExample />
      </Example>
      <Example title="Required">
        <RequiredExample />
      </Example>
      <Example title="Disabled">
        <DisabledExample />
      </Example>
      <Example title="Attachment">
        <AttachmentExample />
      </Example>
    </Section>
    <Section title="Atoms">
      <Example title="With Avatar">
        <WithAvatarExample />
      </Example>
      <Example title="With Icon">
        <WithIconExample />
      </Example>
      <Example title="With Tag">
        <WithTagsExample />
      </Example>
    </Section>
  </Page>
);
const selectTriggerRoute = "/select-trigger";
export const selectTriggerRouteObj: DocsRoute<typeof selectTriggerRoute> = {
  path: selectTriggerRoute,
  group: "radix",
  label: "SelectTrigger",
  component: Docs,
};
