import { VariantsGrid } from "../../../_utils";
import { Example, Page, Section, ShowcaseFrame } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { RadioGroup, RadioGroupProps, RadioGroupRadio } from "./RadioGroup.atoms";

export const Default = () => {
  return (
    <VariantsGrid<RadioGroupProps>
      renderVariant={(props) => {
        return (
          <div
            style={{
              width: 300,
            }}
          >
            <RadioGroup
              {...props}
              label="Label"
              description="Description"
              radioGroupRadioSlots={[
                <RadioGroupRadio key="1" label="Option 1" value="1" invalid />,
                <RadioGroupRadio key="2" label="Option 2" value="2" />,
              ]}
            />
          </div>
        );
      }}
      variantPropsMap={[[{ size: "sm" }, { size: "md" }, { size: "lg" }]]}
    />
  );
};

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <RadioGroup
        label="Label"
        description="Description"
        radioGroupRadioSlots={[
          <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />,
          <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />,
        ]}
      />
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

export const DisabledGroupExample = () => {
  return (
    <ShowcaseFrame>
      <RadioGroup
        disabled
        label="Label"
        description="Description"
        radioGroupRadioSlots={[
          <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />,
          <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />,
        ]}
      />
    </ShowcaseFrame>
  );
};

export const DisabledExample = () => {
  return (
    <ShowcaseFrame>
      <RadioGroup
        label="Label"
        description="Description"
        radioGroupRadioSlots={[
          <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />,
          <RadioGroupRadio disabled key="2" label="Option 2" value="2" description="This is a description" />,
        ]}
      />
    </ShowcaseFrame>
  );
};

export const InvalidGroupExample = () => {
  return (
    <ShowcaseFrame>
      <RadioGroup
        invalid
        label="Label"
        description="Description"
        radioGroupRadioSlots={[
          <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />,
          <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />,
        ]}
      />
    </ShowcaseFrame>
  );
};

export const InvalidExample = () => {
  return (
    <ShowcaseFrame>
      <RadioGroup
        label="Label"
        description="Description"
        radioGroupRadioSlots={[
          <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />,
          <RadioGroupRadio invalid key="2" label="Option 2" value="2" description="This is a description" />,
        ]}
      />
    </ShowcaseFrame>
  );
};

export const RequiredExample = () => {
  return (
    <ShowcaseFrame>
      <RadioGroup
        required
        label="Label"
        description="Description"
        radioGroupRadioSlots={[
          <RadioGroupRadio key="1" label="Option 1" value="1" description="This is a description" />,
          <RadioGroupRadio key="2" label="Option 2" value="2" description="This is a description" />,
        ]}
      />
    </ShowcaseFrame>
  );
};
const RadioGroupDocs = () => {
  return (
    <Page title="RadioGroup" subtitle="RadioGroup">
      <Section title="Showcase">
        <Example title="Default">
          <DefaultExample />
        </Example>
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
