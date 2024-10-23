import { Example, Page, Section, ShowcaseFrame, VariantsColumn } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { Checkbox } from "./Checkbox.atoms";
import { useState } from "react";
import { Button } from "../../react-aria/button/Button.atoms";

const defaultCode = `
<Checkbox size="md" label="Checkbox" />
`;

const DefaultExample = () => {
  return (
    <ShowcaseFrame code={defaultCode}>
      <Checkbox label="Checkbox" />
    </ShowcaseFrame>
  );
};

const withDescriptionCode = `
<Checkbox label="Checkbox" description="This is a description" />
`;

const WithDescriptionExample = () => {
  return (
    <ShowcaseFrame code={withDescriptionCode}>
      <Checkbox label="Checkbox" description="This is a description" />
    </ShowcaseFrame>
  );
};

const indeterminateCode = `
const IndeterminateExample = () => {
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  return (
    <>
      <Button onPress={() => setIsIndeterminate((prev) => !prev)}>Toggle indeterminate</Button>
      <Checkbox label="Checkbox" description="Checkbox description" isIndeterminate={isIndeterminate} />
    </>
  );
};
`;

const IndeterminateExample = () => {
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  return (
    <ShowcaseFrame code={indeterminateCode}>
      <VariantsColumn>
        <Button onPress={() => setIsIndeterminate((prev) => !prev)}>Toggle indeterminate</Button>
        <Checkbox label="Checkbox" description="Checkbox description" isIndeterminate={isIndeterminate} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

// const SizesExample = () => {
//   return (
//     <ShowcaseFrame>
//       <VariantsRow>
//         <Checkbox size="sm" label="Checkbox" description="Checkbox description" />
//         <Checkbox size="md" label="Checkbox" description="Checkbox description" />
//         <Checkbox size="lg" label="Checkbox" description="Checkbox description" />
//       </VariantsRow>
//     </ShowcaseFrame>
//   );
// };

const disabledCode = `
<Checkbox label="Checkbox" description="Checkbox description" isDisabled />
`;

const DisabledExample = () => {
  return (
    <ShowcaseFrame code={disabledCode}>
      <Checkbox label="Checkbox" description="Checkbox description" isDisabled />
    </ShowcaseFrame>
  );
};

const invalidCode = `
<Checkbox label="Checkbox" description="Checkbox description" isInvalid />
`;

const InvalidExample = () => {
  return (
    <ShowcaseFrame code={invalidCode}>
      <Checkbox label="Checkbox" description="Checkbox description" isInvalid />
    </ShowcaseFrame>
  );
};

const requiredCode = `
<Checkbox label="Checkbox" description="Checkbox description" isRequired />
`;

const RequiredExample = () => {
  return (
    <ShowcaseFrame code={requiredCode}>
      <Checkbox label="Checkbox" description="Checkbox description" isRequired />
    </ShowcaseFrame>
  );
};

const Docs = () => {
  return (
    <Page title="Checkbox" subtitle="" command="npx underatom@latest add checkbox">
      <Section title="Showcase">
        <Example title="Default">
          <DefaultExample />
        </Example>
        <Example title="With Description">
          <WithDescriptionExample />
        </Example>
        <Example title="Indeterminate">
          <IndeterminateExample />
        </Example>
        {/* <Example title="Sizes">
          <SizesExample />
        </Example> */}
        <Example title="Disabled">
          <DisabledExample />
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

const checkboxRoute = "/checkbox";
export const checkboxRouteObj: DocsRoute<typeof checkboxRoute> = {
  path: checkboxRoute,
  group: "react-aria",
  label: "Checkbox",
  component: Docs,
};
