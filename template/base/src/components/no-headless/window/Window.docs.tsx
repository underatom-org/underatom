import { Page, ShowcaseFrame } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { Body } from "../typography/Typography.atoms";

const defaultCode = `
<Window>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 300 }}>
    <Body> You can put anything you want in here</Body>
  </div>
</Window>
`;

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 300,
        }}
      >
        <Body> You can put anything you want in here</Body>
      </div>
    </ShowcaseFrame>
  );
};

const WindowDocs = () => {
  return (
    <Page
      title="Window"
      subtitle="A window is a container that can be used to display content."
      command="npx underatom@latest add window"
      usageCode={defaultCode}
      defaultExample={<DefaultExample />}
    />
  );
};

const windowRoute = "/window";
export const windowRouteObj: DocsRoute<typeof windowRoute> = {
  path: windowRoute,
  group: "no-headless",
  label: "Window",
  component: WindowDocs,
};
