import { useState } from "react";
import { Example, Page, Section, ShowcaseFrame, VariantsColumn } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { Button } from "../button/Button.atoms";
import { CheckboxGroup, CheckboxGroupCheckbox } from "./CheckboxGroup.atoms";

const defaultCode = `
<CheckboxGroup label="Checkbox Group" description="Checkbox Group">
  <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />
  <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />
  <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />
</CheckboxGroup>
`;

export const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <CheckboxGroup label="Checkbox Group" description="Checkbox Group">
        <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />
        <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />
        <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />
      </CheckboxGroup>
    </ShowcaseFrame>
  );
};

const indeterminateCode = `
export const IndeterminateExample = () => {
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  return (
    <>
      <Button onPress={() => setIsIndeterminate((prev) => !prev)}>Toggle indeterminate</Button>

      <CheckboxGroup label="Checkbox Group" description="Checkbox Group">
        <CheckboxGroupCheckbox
          key="1"
          label="Checkbox 1"
          description="Description"
          value="1"
          isIndeterminate={isIndeterminate}
        />
        <CheckboxGroupCheckbox
          key="2"
          label="Checkbox 2"
          description="Description"
          value="2"
          isIndeterminate={isIndeterminate}
        />
        <CheckboxGroupCheckbox
          key="3"
          label="Checkbox 3"
          description="Description"
          value="3"
          isIndeterminate={isIndeterminate}
        />
      </CheckboxGroup>
    </>
  );
};
`;

export const IndeterminateExample = () => {
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  return (
    <ShowcaseFrame code={indeterminateCode}>
      <VariantsColumn>
        <Button onPress={() => setIsIndeterminate((prev) => !prev)}>Toggle indeterminate</Button>
        <CheckboxGroup label="Checkbox Group" description="Checkbox Group">
          <CheckboxGroupCheckbox
            key="1"
            label="Checkbox 1"
            description="Description"
            value="1"
            isIndeterminate={isIndeterminate}
          />
          <CheckboxGroupCheckbox
            key="2"
            label="Checkbox 2"
            description="Description"
            value="2"
            isIndeterminate={isIndeterminate}
          />
          <CheckboxGroupCheckbox
            key="3"
            label="Checkbox 3"
            description="Description"
            value="3"
            isIndeterminate={isIndeterminate}
          />
        </CheckboxGroup>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

// export const SizesExample = () => {
//   return (
//     <ShowcaseFrame>
//       <VariantsRow>
//         <CheckboxGroup
//           size="sm"
//           label="Checkbox Group"
//           description="Checkbox Group"
//           checkboxGroupCheckboxSlots={[
//             <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />,
//             <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />,
//             <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />,
//           ]}
//         />
//         <CheckboxGroup
//           size="md"
//           label="Checkbox Group"
//           description="Checkbox Group"
//           checkboxGroupCheckboxSlots={[
//             <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />,
//             <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />,
//             <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />,
//           ]}
//         />
//         <CheckboxGroup
//           size="lg"
//           label="Checkbox Group"
//           description="Checkbox Group"
//           checkboxGroupCheckboxSlots={[
//             <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />,
//             <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />,
//             <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />,
//           ]}
//         />
//       </VariantsRow>
//     </ShowcaseFrame>
//   );
// };

const groupDisabledCode = `
<CheckboxGroup isDisabled label="Checkbox Group" description="Checkbox Group">
  <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />
  <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />
  <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />
</CheckboxGroup>
`;

export const GroupDisabledExample = () => {
  return (
    <ShowcaseFrame code={groupDisabledCode}>
      <CheckboxGroup isDisabled label="Checkbox Group" description="Checkbox Group">
        <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />
        <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />
        <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />
      </CheckboxGroup>
    </ShowcaseFrame>
  );
};

const disabledCode = `
<CheckboxGroup label="Checkbox Group" description="Checkbox Group">
  <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />
  <CheckboxGroupCheckbox isDisabled key="2" label="Checkbox 2" description="Description" value="2" />
  <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />
</CheckboxGroup>
`;

export const DisabledExample = () => {
  return (
    <ShowcaseFrame code={disabledCode}>
      <CheckboxGroup label="Checkbox Group" description="Checkbox Group">
        <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />
        <CheckboxGroupCheckbox isDisabled key="2" label="Checkbox 2" description="Description" value="2" />
        <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />
      </CheckboxGroup>
    </ShowcaseFrame>
  );
};

const invalidGroupCode = `
<CheckboxGroup isInvalid label="Checkbox Group" description="Checkbox Group">
  <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />
  <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />
  <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />
</CheckboxGroup>
`;

export const InvalidGroupExample = () => {
  return (
    <ShowcaseFrame code={invalidGroupCode}>
      <CheckboxGroup isInvalid label="Checkbox Group" description="Checkbox Group">
        <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />
        <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />
        <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />
      </CheckboxGroup>
    </ShowcaseFrame>
  );
};

const requiredCode = `
<CheckboxGroup isRequired label="Checkbox Group" description="Checkbox Group">
  <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />
  <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />
  <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />
</CheckboxGroup>
`;

export const RequiredExample = () => {
  return (
    <ShowcaseFrame code={requiredCode}>
      <CheckboxGroup isRequired label="Checkbox Group" description="Checkbox Group">
        <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />
        <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />
        <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />
      </CheckboxGroup>
    </ShowcaseFrame>
  );
};

const CheckboxGroupDocs = () => {
  return (
    <Page
      title="CheckboxGroup"
      subtitle=""
      command="npx underatom@latest add checkbox-group"
      usageCode={defaultCode}
      defaultExample={<DefaultExample />}
    >
      <Section title="Showcase">
        <Example title="Indeterminate">
          <IndeterminateExample />
        </Example>
        {/* <Example title="Sizes">
          <SizesExample />
        </Example> */}
        <Example title="Disabled Group">
          <GroupDisabledExample />
        </Example>
        <Example title="Disabled">
          <DisabledExample />
        </Example>
        <Example title="Invalid Group">
          <InvalidGroupExample />
        </Example>
        <Example title="Required">
          <RequiredExample />
        </Example>
      </Section>
    </Page>
  );
};

const checkboxGroupRoute = "/checkbox-group";
export const checkboxGroupRouteObj: DocsRoute<typeof checkboxGroupRoute> = {
  path: checkboxGroupRoute,
  group: "react-aria",
  label: "CheckboxGroup",
  component: CheckboxGroupDocs,
};
