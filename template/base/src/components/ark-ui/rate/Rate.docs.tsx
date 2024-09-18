import { Example, Page, Section, ShowcaseFrame } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { Rate } from "./Rate.atoms";

export const Default = () => (
  <ShowcaseFrame>
    <Rate />
  </ShowcaseFrame>
);

const RateDocs = () => {
  return (
    <Page title="Rate" subtitle="Rate">
      <Section title="Showcase">
        <Example title="Default">
          <Default />
        </Example>
      </Section>
    </Page>
  );
};

const rateRoute = "/rate";
export const rateRouteObj: DocsRoute<typeof rateRoute> = {
  path: rateRoute,
  group: "ark-ui",
  label: "Rate",
  component: RateDocs,
};
