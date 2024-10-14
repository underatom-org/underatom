import { Example, Page, Section, ShowcaseFrame, VariantsColumn } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { Checkbox } from "./Checkbox.atoms";
import { useState } from "react";
import { Button } from "../../react-aria/button/Button.atoms";

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <Checkbox size="md" label="Checkbox" />
    </ShowcaseFrame>
  );
};

const WithDescriptionExample = () => {
  return (
    <ShowcaseFrame>
      <Checkbox size="md" label="Checkbox" description="This is a description" />
    </ShowcaseFrame>
  );
};

const IndeterminateExample = () => {
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <Button onPress={() => setIsIndeterminate((prev) => !prev)}>Toggle indeterminate</Button>
        <Checkbox size="md" label="Checkbox" description="Checkbox description" isIndeterminate={isIndeterminate} />
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

const DisabledExample = () => {
  return (
    <ShowcaseFrame>
      <Checkbox size="md" label="Checkbox" description="Checkbox description" isDisabled />
    </ShowcaseFrame>
  );
};

const InvalidExample = () => {
  return (
    <ShowcaseFrame>
      <Checkbox size="md" label="Checkbox" description="Checkbox description" isInvalid />
    </ShowcaseFrame>
  );
};

const RequiredExample = () => {
  return (
    <ShowcaseFrame>
      <Checkbox size="md" label="Checkbox" description="Checkbox description" isRequired />
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
