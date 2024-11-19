import { DocsRoute } from "../../../docs/docs.types";
import { Slider } from "./Slider.atoms";
import { Example, Page, ShowcaseFrame, VariantsColumn } from "../../../docs/docs.components";

const defaultCode = `
<Slider defaultValue={50} />
`;

const DefaultExample = () => {
  return (
    <ShowcaseFrame code={defaultCode}>
      <Slider defaultValue={50} />
    </ShowcaseFrame>
  );
};

const withLabelCode = `
<Slider label="Label" defaultValue={50} />
`;

const WithLabelExample = () => {
  return (
    <ShowcaseFrame code={withLabelCode}>
      <Slider label="Label" defaultValue={50} />
    </ShowcaseFrame>
  );
};

const withDescriptionCode = `
<Slider label="Label" description="Description" defaultValue={50} />
`;

const WithDescriptionExample = () => {
  return (
    <ShowcaseFrame code={withDescriptionCode}>
      <Slider label="Label" description="Description" defaultValue={50} />
    </ShowcaseFrame>
  );
};

const ColorsCode = `
<Slider label="Primary Slider" description="Description" color="primary" defaultValue={60} />
<Slider label="Base Slider" description="Description" color="base" defaultValue={55} />
`;

const ColorsExample = () => {
  return (
    <ShowcaseFrame code={ColorsCode}>
      <VariantsColumn>
        <Slider label="Primary Slider" description="Description" color="primary" defaultValue={60} />
        <Slider label="Base Slider" description="Description" color="base" defaultValue={55} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const disabledCode = `
<Slider label="Label" description="Description" color="primary" isDisabled defaultValue={50} />
`;

const DisabledExample = () => {
  return (
    <ShowcaseFrame code={disabledCode}>
      <VariantsColumn>
        <Slider label="Label" description="Description" color="primary" isDisabled defaultValue={50} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const stepCode = `
<Slider label="Label" description="Description" color="primary" step={5} defaultValue={50} />
`;

const StepExample = () => {
  return (
    <ShowcaseFrame code={stepCode}>
      <VariantsColumn>
        <Slider label="Label" description="Description" color="primary" step={5} defaultValue={50} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const rangeCode = `
<Slider label="Label" description="Description" color="primary" defaultValue={[20, 30]} />
`;

const RangeExample = () => {
  return (
    <ShowcaseFrame code={rangeCode}>
      <VariantsColumn>
        <Slider label="Label" description="Description" color="primary" defaultValue={[20, 30]} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const invalidCode = `
<Slider invalid defaultValue={50} />
`;

const InvalidExample = () => {
  return (
    <ShowcaseFrame code={invalidCode}>
      <Slider invalid defaultValue={50} />
    </ShowcaseFrame>
  );
};

const SliderDocs = () => {
  return (
    <Page
      title="Slider"
      subtitle="Slider"
      defaultExample={<DefaultExample />}
      usageCode={defaultCode}
      command="npx underatom@latest add slider"
    >
      <Example title="With Label">
        <WithLabelExample />
      </Example>
      <Example title="With Description">
        <WithDescriptionExample />
      </Example>
      <Example title="Colors">
        <ColorsExample />
      </Example>
      <Example title="Disabled">
        <DisabledExample />
      </Example>
      <Example title="Invalid">
        <InvalidExample />
      </Example>
      <Example title="Step">
        <StepExample />
      </Example>
      <Example title="Range">
        <RangeExample />
      </Example>
    </Page>
  );
};
const sliderRoute = "/slider";
export const sliderRouteObj: DocsRoute<typeof sliderRoute> = {
  path: sliderRoute,
  group: "react-aria",
  label: "slider",
  component: SliderDocs,
};
