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
import { Code } from "../../no-headless/typography/Typography.atoms";

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

const defaultCode = `
import * as Select from "@radix-ui/react-select";

<Select.Root {...props.rootProps}>
  <SelectTrigger
    label="Language"
    description="Select a programming language from the list of most popular languages"
  >
    <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
  </SelectTrigger>
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
`;

export const DefaultExample = () => (
  <ShowcaseFrame>
    <SelectTriggerHelper>
      <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
    </SelectTriggerHelper>
  </ShowcaseFrame>
);

const invalidCode = `
import * as Select from "@radix-ui/react-select";

<Select.Root {...props.rootProps}>
  <SelectTrigger
    label="Language"
    description="Please select a valid programming language"
    invalid
  >
    <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
  </SelectTrigger>
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
`;

export const InvalidExample = () => (
  <ShowcaseFrame code={invalidCode}>
    <SelectTriggerHelper description="Please select a valid programming language" invalid>
      <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
    </SelectTriggerHelper>
  </ShowcaseFrame>
);

const requiredCode = `
import * as Select from "@radix-ui/react-select";

<Select.Root {...props.rootProps}>
  <SelectTrigger
    label="Language"
    description="Select a programming language from the list of most popular languages"
    required
  >
    <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
  </SelectTrigger>
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
`;

export const RequiredExample = () => (
  <ShowcaseFrame code={requiredCode}>
    <SelectTriggerHelper required>
      <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
    </SelectTriggerHelper>
  </ShowcaseFrame>
);

const disabledCode = `
import * as Select from "@radix-ui/react-select";

<Select.Root {...props.rootProps}>
  <SelectTrigger
    label="Language"
    description="Select a programming language from the list of most popular languages"
    disabled
  >
    <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
  </SelectTrigger>
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
`;

export const DisabledExample = () => (
  <ShowcaseFrame code={disabledCode}>
    <SelectTriggerHelper disabled>
      <SelectTriggerBox textProps={{ placeholder: "Select a programming language..." }} />
    </SelectTriggerHelper>
  </ShowcaseFrame>
);

const attachmentCode = `
import * as Select from "@radix-ui/react-select";

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

export const AttachmentExample = () => (
  <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
    <SelectTriggerHelper helperStyle={{ width: 200 }} attachment="start" description="Select a property type">
      <SelectTriggerBox textProps={{ placeholder: "Property type" }} />
    </SelectTriggerHelper>
    <SelectTriggerHelper helperStyle={{ width: 200 }} attachment="end" description="Select a location">
      <SelectTriggerBox textProps={{ placeholder: "Location" }} />
    </SelectTriggerHelper>
  </div>
);
`;

export const AttachmentExample = () => (
  <ShowcaseFrame code={attachmentCode} paddingX={30}>
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

const withAvatarCode = `
import * as Select from "@radix-ui/react-select";

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

export const WithAvatarExample = () => (
  <>
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
  </>
);
`;

export const WithAvatarExample = () => (
  <ShowcaseFrame code={withAvatarCode}>
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

const withIconCode = `
import * as Select from "@radix-ui/react-select";

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

export const WithIconExample = () => (
  <>
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
  </>
);
`;

export const WithIconExample = () => (
  <ShowcaseFrame code={withIconCode}>
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

const withTagsCode = `
import * as Select from "@radix-ui/react-select";

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

export const WithTagsExample = () => {
  return (
    <>
      <SelectTriggerWithTagsHelper />
      <SelectTriggerWithTagsHelper invalid />
      <SelectTriggerWithTagsHelper disabled />
    </>
  );
};
`;

export const WithTagsExample = () => {
  return (
    <ShowcaseFrame code={withTagsCode}>
      <VariantsColumn>
        <SelectTriggerWithTagsHelper />
        <SelectTriggerWithTagsHelper invalid />
        <SelectTriggerWithTagsHelper disabled />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

export const Docs = () => (
  <Page
    title="SelectTrigger"
    subtitle={
      <>
        A component for displaying a select trigger. To be used with the radix <Code>Select</Code> component.
      </>
    }
    command="npx underatom@latest add select-trigger"
    usageCode={defaultCode}
    defaultExample={<DefaultExample />}
  >
    <Section title="Showcase">
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
