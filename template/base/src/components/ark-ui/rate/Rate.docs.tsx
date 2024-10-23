import { Example, Page, Section, ShowcaseFrame } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { Rate } from "./Rate.atoms";

const defaultCode = `
<Rate />
`;

export const Default = () => (
  <ShowcaseFrame code={defaultCode}>
    <Rate />
  </ShowcaseFrame>
);

const RateDocs = () => {
  return (
    <Page title="Rate" subtitle="Rate" command="npx underatom@latest add rate">
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
