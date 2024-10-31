import { DocsRoute } from "../../../docs/docs.types";
import { Slider } from "./Slider.atoms";
import { Example, Page, ShowcaseFrame, VariantsColumn } from "../../../docs/docs.components";

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <Slider />
    </ShowcaseFrame>
  );
};

const WithLabelExample = () => {
  return (
    <ShowcaseFrame>
      <Slider label="Label" />
    </ShowcaseFrame>
  );
};

const WithDescriptionExample = () => {
  return (
    <ShowcaseFrame>
      <Slider label="Label" description="Description" />
    </ShowcaseFrame>
  );
};

const ColorsExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <Slider label="Primary Slider" description="Description" color="primary" />
        <Slider label="Base Slider" description="Description" color="base" />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const DisabledExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <Slider label="Label" description="Description" color="primary" isDisabled />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const StepExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <Slider label="Label" description="Description" color="primary" step={5} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const RangeExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <Slider label="Label" description="Description" color="primary" defaultValue={[20, 30]} />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};
const SliderDocs = () => {
  return (
    <Page title="Slider" subtitle="Slider">
      <Example title="Default">
        <DefaultExample />
      </Example>
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
