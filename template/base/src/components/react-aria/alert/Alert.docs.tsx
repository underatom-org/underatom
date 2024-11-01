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
import { IconCircleCheck, IconCircleX, IconInfoCircle } from "../../../assets/Icons";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsGrid } from "../../../docs/docs.components";
import { ReactNode } from "react";

const defaultCode = `
<Alert
  status="primary"
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
`;

const getIcon = (status: AlertProps["status"]): ((className: string) => ReactNode) => {
  switch (status) {
    case "primary":
      return (className) => <IconInfoCircle className={className} />;
    case "base":
      return (className) => <IconInfoCircle className={className} />;
    case "danger":
      return (className) => <IconCircleX className={className} />;
    case "warning":
      return (className) => <IconInfoCircle className={className} />;
    case "success":
      return (className) => <IconCircleCheck className={className} />;
    default:
      return (className) => <IconInfoCircle className={className} />;
  }
};

const Default = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<AlertProps>
        renderVariant={(props) => (
          <Alert
            {...props}
            icon={getIcon(props.status)}
            title="Title"
            subtitle="Subtitle"
            description="Our servers will undergo maintenance on [date] from [start time] to [end time] (UTC)"
            dismissSlot={<AlertDismiss />}
            primaryActionSlot={<AlertActionWithIcon icon={getIcon(props.status)}>Action</AlertActionWithIcon>}
            secondaryActionSlot={<AlertAction variant="base">Cancel</AlertAction>}
          />
        )}
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

const withStatusCode = `
<AlertWithStatus
  status="primary"
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
`;

const WithStatus = () => {
  return (
    <ShowcaseFrame code={withStatusCode}>
      <VariantsGrid<AlertWithStatusProps>
        renderVariant={(props) => {
          return (
            <AlertWithStatus
              {...props}
              icon={getIcon(props.status)}
              title="Title"
              subtitle="Subtitle"
              description="Our servers will undergo maintenance on [date] from [start time] to [end time] (UTC)"
              statusSlot={<AlertStatus icon={getIcon(props.status)} />}
              primaryActionSlot={<AlertActionWithIcon icon={getIcon(props.status)}>Action</AlertActionWithIcon>}
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
    <Page
      title="Alert"
      subtitle="A component for displaying an alert message."
      command="npx underatom@latest add alert"
      usageCode={defaultCode}
      defaultExample={<Default />}
    >
      <Section title="Showcase">
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
