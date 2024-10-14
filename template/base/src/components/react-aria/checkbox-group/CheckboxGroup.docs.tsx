import { useState } from "react";
import { Example, Page, Section, ShowcaseFrame, VariantsColumn, VariantsGrid } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { Button } from "../button/Button.atoms";
import { CheckboxGroup, CheckboxGroupCheckbox, CheckboxGroupProps } from "./CheckboxGroup.atoms";

export const Default = () => {
  return (
    <VariantsGrid<CheckboxGroupProps>
      renderVariant={(props) => {
        return (
          <div
            style={{
              width: 300,
            }}
          >
            <CheckboxGroup
              {...props}
              label="Checkbox Group"
              description="Checkbox Group"
              checkboxGroupCheckboxSlots={[
                <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />,
                <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />,
                <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />,
              ]}
            />
          </div>
        );
      }}
      variantPropsMap={[
        [{ size: "sm" }, { size: "md" }, { size: "lg" }],
        [{}, { isDisabled: true }],
        [{}, { isRequired: true }],
        [{}, { isInvalid: true }],
      ]}
    />
  );
};

export const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <CheckboxGroup
        label="Checkbox Group"
        description="Checkbox Group"
        checkboxGroupCheckboxSlots={[
          <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />,
          <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />,
          <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />,
        ]}
      />
    </ShowcaseFrame>
  );
};

export const IndeterminateExample = () => {
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <Button onPress={() => setIsIndeterminate((prev) => !prev)}>Toggle indeterminate</Button>
        <CheckboxGroup
          label="Checkbox Group"
          description="Checkbox Group"
          checkboxGroupCheckboxSlots={[
            <CheckboxGroupCheckbox
              key="1"
              label="Checkbox 1"
              description="Description"
              value="1"
              isIndeterminate={isIndeterminate}
            />,
            <CheckboxGroupCheckbox
              key="2"
              label="Checkbox 2"
              description="Description"
              value="2"
              isIndeterminate={isIndeterminate}
            />,
            <CheckboxGroupCheckbox
              key="3"
              label="Checkbox 3"
              description="Description"
              value="3"
              isIndeterminate={isIndeterminate}
            />,
          ]}
        />
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

export const GroupDisabledExample = () => {
  return (
    <ShowcaseFrame>
      <CheckboxGroup
        isDisabled
        label="Checkbox Group"
        description="Checkbox Group"
        checkboxGroupCheckboxSlots={[
          <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />,
          <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />,
          <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />,
        ]}
      />
    </ShowcaseFrame>
  );
};

export const DisabledExample = () => {
  return (
    <ShowcaseFrame>
      <CheckboxGroup
        label="Checkbox Group"
        description="Checkbox Group"
        checkboxGroupCheckboxSlots={[
          <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />,
          <CheckboxGroupCheckbox isDisabled key="2" label="Checkbox 2" description="Description" value="2" />,
          <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />,
        ]}
      />
    </ShowcaseFrame>
  );
};

export const InvalidGroupExample = () => {
  return (
    <ShowcaseFrame>
      <CheckboxGroup
        isInvalid
        label="Checkbox Group"
        description="Checkbox Group"
        checkboxGroupCheckboxSlots={[
          <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />,
          <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />,
          <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />,
        ]}
      />
    </ShowcaseFrame>
  );
};

export const RequiredExample = () => {
  return (
    <ShowcaseFrame>
      <CheckboxGroup
        isRequired
        label="Checkbox Group"
        description="Checkbox Group"
        checkboxGroupCheckboxSlots={[
          <CheckboxGroupCheckbox key="1" label="Checkbox 1" description="Description" value="1" />,
          <CheckboxGroupCheckbox key="2" label="Checkbox 2" description="Description" value="2" />,
          <CheckboxGroupCheckbox key="3" label="Checkbox 3" description="Description" value="3" />,
        ]}
      />
    </ShowcaseFrame>
  );
};

const CheckboxGroupDocs = () => {
  return (
    <Page title="CheckboxGroup" subtitle="" command="npx underatom@latest add checkbox-group">
      <Section title="Showcase">
        <Example title="Default">
          <DefaultExample />
        </Example>
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
