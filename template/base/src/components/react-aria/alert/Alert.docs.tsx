import { VariantsGrid } from "../../../_utils";
import {
  Alert,
  AlertAction,
  AlertActionWithIcon,
  AlertDismiss,
  AlertProps,
  AlertStatus,
  AlertWithStatus,
  AlertWithStatusProps,
} from "./Alert.atoms";
import { Atom } from "../../../assets/Icons";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame } from "../../../docs/docs.components";

const Default = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<AlertProps>
        renderVariant={(props) => {
          return (
            <Alert
              {...props}
              icon={(className) => <Atom className={className} />}
              title="Title"
              subtitle="Subtitle"
              description="Our servers will undergo maintenance on [date] from [start time] to [end time] (UTC)"
              dismissSlot={<AlertDismiss />}
              primaryActionSlot={
                <AlertActionWithIcon icon={(className) => <Atom className={className} />}>Action</AlertActionWithIcon>
              }
              secondaryActionSlot={<AlertAction variant="base">Cancel</AlertAction>}
            />
          );
        }}
        variantPropsMap={[
          [
            { status: "primary" },
            { status: "base" },
            { status: "danger" },
            { status: "warning" },
            { status: "success" },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const WithStatus = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<AlertWithStatusProps>
        renderVariant={(props) => {
          return (
            <AlertWithStatus
              {...props}
              icon={(className) => <Atom className={className} />}
              title="Title"
              subtitle="Subtitle"
              description="Our servers will undergo maintenance on [date] from [start time] to [end time] (UTC)"
              statusSlot={<AlertStatus icon={(className) => <Atom className={className} />} />}
              primaryActionSlot={
                <AlertActionWithIcon icon={(className) => <Atom className={className} />}>Action</AlertActionWithIcon>
              }
              secondaryActionSlot={<AlertAction variant="base">Cancel</AlertAction>}
            />
          );
        }}
        variantPropsMap={[
          [
            { status: "primary" },
            { status: "base" },
            { status: "danger" },
            { status: "warning" },
            { status: "success" },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const AlertDocs = () => {
  return (
    <Page title="Alert" subtitle="">
      <Section title="Showcase">
        <Example title="Variants">
          <Default />
        </Example>
      </Section>
      <Section title="Atoms">
        <Example title="With Status">
          <WithStatus />
        </Example>
      </Section>
    </Page>
  );
};

const alertRoute = "/alert";
export const alertRouteObj: DocsRoute<typeof alertRoute> = {
  path: alertRoute,
  group: "react-aria",
  label: "Alert",
  component: AlertDocs,
};
