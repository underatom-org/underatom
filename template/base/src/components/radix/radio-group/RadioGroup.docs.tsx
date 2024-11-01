import { Example, Page, Section, ShowcaseFrame } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { RadioGroup, RadioGroupRadio } from "./RadioGroup.atoms";

const defaultCode = `
<RadioGroup label="Label" description="Description">
  <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
  <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />
</RadioGroup>
`;

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <RadioGroup label="Label" description="Description">
        <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
        <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />
      </RadioGroup>
    </ShowcaseFrame>
  );
};

// const SizesExample = () => {
//   return (
//     <ShowcaseFrame>
//       <VariantsRow>
//         <RadioGroup
//           size="sm"
//           label="Label"
//           description="Description"
//           radioGroupRadioSlots={[
//             <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />,
//             <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />,
//           ]}
//         />
//         <RadioGroup
//           size="md"
//           label="Label"
//           description="Description"
//           radioGroupRadioSlots={[
//             <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />,
//             <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />,
//           ]}
//         />
//         <RadioGroup
//           size="lg"
//           label="Label"
//           description="Description"
//           radioGroupRadioSlots={[
//             <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />,
//             <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />,
//           ]}
//         />
//       </VariantsRow>
//     </ShowcaseFrame>
//   );
// };

const disabledGroupCode = `
<RadioGroup disabled label="Label" description="Description">
  <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
  <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />
</RadioGroup>
`;

export const DisabledGroupExample = () => {
  return (
    <ShowcaseFrame code={disabledGroupCode}>
      <RadioGroup disabled label="Label" description="Description">
        <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
        <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />
      </RadioGroup>
    </ShowcaseFrame>
  );
};

const disabledCode = `
<RadioGroup label="Label" description="Description">
  <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
  <RadioGroupRadio disabled key="2" label="Option 2" value="2" description="This is a description" />
</RadioGroup>
`;

export const DisabledExample = () => {
  return (
    <ShowcaseFrame code={disabledCode}>
      <RadioGroup label="Label" description="Description">
        <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
        <RadioGroupRadio disabled key="2" label="Option 2" value="2" description="This is a description" />
      </RadioGroup>
    </ShowcaseFrame>
  );
};

const invalidGroupCode = `
<RadioGroup invalid label="Label" description="Description">
  <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
  <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />
</RadioGroup>
`;

export const InvalidGroupExample = () => {
  return (
    <ShowcaseFrame code={invalidGroupCode}>
      <RadioGroup invalid label="Label" description="Description">
        <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
        <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />
      </RadioGroup>
    </ShowcaseFrame>
  );
};

const invalidCode = `
<RadioGroup label="Label" description="Description">
  <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
  <RadioGroupRadio invalid key="2" label="Option 2" value="2" description="This is a description" />
</RadioGroup>
`;

export const InvalidExample = () => {
  return (
    <ShowcaseFrame code={invalidCode}>
      <RadioGroup label="Label" description="Description">
        <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
        <RadioGroupRadio invalid key="2" label="Option 2" value="2" description="This is a description" />
      </RadioGroup>
    </ShowcaseFrame>
  );
};

const requiredCode = `
<RadioGroup required label="Label" description="Description">
  <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
  <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />
</RadioGroup>
`;

export const RequiredExample = () => {
  return (
    <ShowcaseFrame code={requiredCode}>
      <RadioGroup required label="Label" description="Description">
        <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />
        <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />
      </RadioGroup>
    </ShowcaseFrame>
  );
};

const RadioGroupDocs = () => {
  return (
    <Page
      title="RadioGroup"
      subtitle="A component for displaying a group of radio buttons."
      command="npx underatom@latest add radio-group"
      usageCode={defaultCode}
      defaultExample={<DefaultExample />}
    >
      <Section title="Showcase">
        {/* <Example title="Sizes">
          <SizesExample />
        </Example> */}
        <Example title="Disabled Group">
          <DisabledGroupExample />
        </Example>
        <Example title="Disabled">
          <DisabledExample />
        </Example>
        <Example title="Invalid Group">
          <InvalidGroupExample />
        </Example>
        <Example title="Invalid">
          <InvalidExample />
        </Example>
        <Example title="Required">
          <RequiredExample />
        </Example>
      </Section>
    </Page>
  );
};

const radioGroupRoute = "/radio-group";
export const radioGroupRouteObj: DocsRoute<typeof radioGroupRoute> = {
  path: radioGroupRoute,
  group: "radix",
  label: "RadioGroup",
  component: RadioGroupDocs,
};
