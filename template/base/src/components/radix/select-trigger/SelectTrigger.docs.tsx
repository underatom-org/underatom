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
          <SelectPanel>
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
    </div>
  );
};

const SelectTriggerWithTagsHelper = (props: SelectTriggerProps) => {
  const [selection, setSelection] = useState<string>(props.disabled ? "javascript" : "");
  const selected = selection !== "";

  return (
    <SelectTriggerHelper {...props} rootProps={{ value: selection, onValueChange: setSelection }}>
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
    </SelectTriggerHelper>
  );
};

export const DefaultExample = () => (
  <ShowcaseFrame>
    <SelectTriggerHelper>
      <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
    </SelectTriggerHelper>
  </ShowcaseFrame>
);

export const InvalidExample = () => (
  <ShowcaseFrame>
    <SelectTriggerHelper description="Please select a valid programming language" invalid>
      <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
    </SelectTriggerHelper>
  </ShowcaseFrame>
);

export const RequiredExample = () => (
  <ShowcaseFrame>
    <SelectTriggerHelper required>
      <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
    </SelectTriggerHelper>
  </ShowcaseFrame>
);

export const DisabledExample = () => (
  <ShowcaseFrame>
    <SelectTriggerHelper disabled>
      <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
    </SelectTriggerHelper>
  </ShowcaseFrame>
);

export const AttachmentExample = () => (
  <ShowcaseFrame>
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <SelectTriggerHelper helperStyle={{ width: 200 }} attachment="start" description="Select a property type">
        <SelectTriggerBox textProps={{ placeholder: "Property type" }} />
      </SelectTriggerHelper>
      <SelectTriggerHelper helperStyle={{ width: 200 }} attachment="end" description="Select a location">
        <SelectTriggerBox textProps={{ placeholder: "Location" }} />
      </SelectTriggerHelper>
    </div>
  </ShowcaseFrame>
);

export const WithAvatarExample = () => (
  <ShowcaseFrame>
    <VariantsColumn>
      <SelectTriggerHelper>
        <SelectTriggerBoxWithAvatar textProps={{ placeholder: "Select a programming language..." }}>
          <SelectTriggerBoxAvatar imageProps={{ src: avatar1Src }} />
        </SelectTriggerBoxWithAvatar>
      </SelectTriggerHelper>
      <SelectTriggerHelper invalid>
        <SelectTriggerBoxWithAvatar textProps={{ placeholder: "Select a programming language..." }}>
          <SelectTriggerBoxAvatar imageProps={{ src: avatar1Src }} />
        </SelectTriggerBoxWithAvatar>
      </SelectTriggerHelper>
      <SelectTriggerHelper disabled>
        <SelectTriggerBoxWithAvatar textProps={{ placeholder: "Select a programming language..." }}>
          <SelectTriggerBoxAvatar imageProps={{ src: avatar1Src }} />
        </SelectTriggerBoxWithAvatar>
      </SelectTriggerHelper>
    </VariantsColumn>
  </ShowcaseFrame>
);

export const WithIconExample = () => (
  <ShowcaseFrame>
    <VariantsColumn>
      <SelectTriggerHelper>
        <SelectTriggerBox
          textProps={{ placeholder: "Select a programming language..." }}
          icon={(className) => <Atom className={className} />}
        />
      </SelectTriggerHelper>
      <SelectTriggerHelper invalid>
        <SelectTriggerBox
          textProps={{ placeholder: "Select a programming language..." }}
          icon={(className) => <Atom className={className} />}
        />
      </SelectTriggerHelper>
      <SelectTriggerHelper disabled>
        <SelectTriggerBox
          textProps={{ placeholder: "Select a programming language..." }}
          icon={(className) => <Atom className={className} />}
        />
      </SelectTriggerHelper>
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
