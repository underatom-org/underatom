import { useState } from "react";
import { Example, Page, Section, ShowcaseFrame, VariantsRow } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { Switch } from "./Switch.atoms";
import { Check, X } from "../../../assets/Icons";

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <Switch />
    </ShowcaseFrame>
  );
};

const WithLabelExample = () => {
  return (
    <ShowcaseFrame>
      <Switch label="Switch Label" />
    </ShowcaseFrame>
  );
};

const WithLabelAndDescriptionExample = () => {
  return (
    <ShowcaseFrame>
      <Switch label="Switch Label" description="This is a description" />
    </ShowcaseFrame>
  );
};

// const SizesExample = () => {
//   return (
//     <ShowcaseFrame>
//       <VariantsRow>
//         <Switch label="Switch Label" description="This is a description" size="sm" />
//         <Switch label="Switch Label" description="This is a description" size="md" />
//         <Switch label="Switch Label" description="This is a description" size="lg" />
//       </VariantsRow>
//     </ShowcaseFrame>
//   );
// };

const InvalidExample = () => {
  return (
    <ShowcaseFrame>
      <Switch label="Switch Label" description="This is a description" invalid />
    </ShowcaseFrame>
  );
};

const DisabledExample = () => {
  return (
    <ShowcaseFrame>
      <Switch label="Switch Label" description="This is a description" disabled />
    </ShowcaseFrame>
  );
};

const ColorsExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <Switch label="Switch Label" description="This is a description" color="primary" defaultChecked />
        <Switch label="Switch Label" description="This is a description" color="success" defaultChecked />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const RequiredExample = () => {
  return (
    <ShowcaseFrame>
      <Switch label="Switch Label" description="This is a description" required />
    </ShowcaseFrame>
  );
};

const IconExample = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <Switch
          label="Switch Label"
          description="This is a description"
          checked={checked1}
          onCheckedChange={setChecked1}
          icon={(className) => (checked1 ? <Check className={className} /> : <X className={className} />)}
          color="primary"
        />
        <Switch
          label="Switch Label"
          description="This is a description"
          checked={checked2}
          onCheckedChange={setChecked2}
          icon={(className) => (checked2 ? <Check className={className} /> : <X className={className} />)}
          color="success"
        />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const SwitchDocs = () => {
  return (
    <Page title="Switch " subtitle="Switch" command="npx underatom@latest add switch">
      <Section title="Showcase">
        <Example title="Default">
          <DefaultExample />
        </Example>
        <Example title="With Label">
          <WithLabelExample />
        </Example>
        <Example title="With Label and Description">
          <WithLabelAndDescriptionExample />
        </Example>
        {/* <Example title="Sizes">
          <SizesExample />
        </Example> */}
        <Example title="Required">
          <RequiredExample />
        </Example>
        <Example title="Invalid">
          <InvalidExample />
        </Example>
        <Example title="Disabled">
          <DisabledExample />
        </Example>
        <Example title="Colors">
          <ColorsExample />
        </Example>
        <Example title="Icon">
          <IconExample />
        </Example>
      </Section>
    </Page>
  );
};

const switchRoute = "/switch";
export const switchRouteObj: DocsRoute<typeof switchRoute> = {
  path: switchRoute,
  group: "radix",
  label: "Switch",
  component: SwitchDocs,
};
