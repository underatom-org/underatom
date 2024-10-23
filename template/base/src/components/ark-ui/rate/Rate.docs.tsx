import { Page, ShowcaseFrame } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { Rate } from "./Rate.atoms";

const defaultCode = `
<Rate />
`;

export const Default = () => (
  <ShowcaseFrame>
    <Rate />
  </ShowcaseFrame>
);

const RateDocs = () => {
  return (
    <Page
      title="Rate"
      subtitle="Rate"
      command="npx underatom@latest add rate"
      usageCode={defaultCode}
      defaultExample={<Default />}
    />
  );
};

const rateRoute = "/rate";
export const rateRouteObj: DocsRoute<typeof rateRoute> = {
  path: rateRoute,
  group: "ark-ui",
  label: "Rate",
  component: RateDocs,
};
