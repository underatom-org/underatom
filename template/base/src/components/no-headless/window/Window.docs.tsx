import { Example, Page, Section } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { Body } from "../typography/Typography.atoms";
import { Window } from "./Window.atoms";

const DefaultExample = () => {
  return (
    <div>
      <Window>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 500,
          }}
        >
          <Body> You can put anything you want in here</Body>
        </div>
      </Window>
    </div>
  );
};

const WindowDocs = () => {
  return (
    <Page
      title="Window"
      subtitle="A window is a container that can be used to display content."
      command="npx underatom@latest add window"
    >
      <Section title="Showcase">
        <Example title="">
          <DefaultExample />
        </Example>
      </Section>
    </Page>
  );
};

const windowRoute = "/window";
export const windowRouteObj: DocsRoute<typeof windowRoute> = {
  path: windowRoute,
  group: "no-headless",
  label: "Window",
  component: WindowDocs,
};
