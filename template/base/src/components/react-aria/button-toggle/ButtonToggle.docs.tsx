import { Atom } from "phosphor-react";
import { VariantsGrid } from "./../../../_utils";
import {
  ButtonToggle,
  ButtonToggleWithDot,
  ButtonToggleWithDotProps,
  ButtonToggleWithLeftIcon,
  ButtonToggleWithRightIcon,
  IconButtonToggle,
  LoadingButtonToggle,
} from "./ButtonToggle.atoms";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsColumn, VariantsRow } from "../../../docs/docs.components";
import { Code } from "../../no-headless/typography/Typography.atoms";

const BasicExample = () => {
  return (
    <ShowcaseFrame>
      <ButtonToggle>Button</ButtonToggle>
    </ShowcaseFrame>
  );
};

const GroupExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <div
          style={{
            display: "flex",
          }}
        >
          <ButtonToggle attachment="start">Start</ButtonToggle>
          <ButtonToggle attachment="center">Center</ButtonToggle>
          <ButtonToggle attachment="end">End</ButtonToggle>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <IconButtonToggle attachment="start" icon={(iconClass) => <Atom className={iconClass} />} />
          <IconButtonToggle attachment="center" icon={(iconClass) => <Atom className={iconClass} />} />
          <IconButtonToggle attachment="end" icon={(iconClass) => <Atom className={iconClass} />} />
        </div>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const SizesExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <ButtonToggle size="sm">Small</ButtonToggle>
        <ButtonToggle size="md">Medium</ButtonToggle>
        <ButtonToggle size="lg">Large</ButtonToggle>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const FullWidthExample = () => {
  return (
    <ShowcaseFrame>
      <ButtonToggle fullWidth>Full Width</ButtonToggle>
    </ShowcaseFrame>
  );
};

const DisabledExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <VariantsRow>
          <ButtonToggle isDisabled>Disabled</ButtonToggle>
          <IconButtonToggle isDisabled icon={(iconClass) => <Atom className={iconClass} />} />
          <ButtonToggleWithDot isDisabled>Button</ButtonToggleWithDot>
          <ButtonToggleWithLeftIcon isDisabled icon={(iconClass) => <Atom className={iconClass} />}>
            Button
          </ButtonToggleWithLeftIcon>
          <ButtonToggleWithRightIcon isDisabled icon={(iconClass) => <Atom className={iconClass} />}>
            Button
          </ButtonToggleWithRightIcon>
        </VariantsRow>

        <VariantsRow>
          <ButtonToggle isDisabled isSelected>
            Disabled
          </ButtonToggle>
          <IconButtonToggle isDisabled isSelected icon={(iconClass) => <Atom className={iconClass} />} />
          <ButtonToggleWithDot isDisabled isSelected>
            Button
          </ButtonToggleWithDot>
          <ButtonToggleWithLeftIcon isDisabled isSelected icon={(iconClass) => <Atom className={iconClass} />}>
            Button
          </ButtonToggleWithLeftIcon>
          <ButtonToggleWithRightIcon isDisabled isSelected icon={(iconClass) => <Atom className={iconClass} />}>
            Button
          </ButtonToggleWithRightIcon>
        </VariantsRow>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const IconButtonToggleExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <IconButtonToggle icon={(iconClass) => <Atom className={iconClass} />} />
        <IconButtonToggle isSelected icon={(iconClass) => <Atom className={iconClass} />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const ButtonToggleWithDotExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<ButtonToggleWithDotProps>
        isHorizontal
        renderVariant={(props) => {
          return <ButtonToggleWithDot {...props}>Button</ButtonToggleWithDot>;
        }}
        variantPropsMap={[
          [{ dotColor: "base" }, { dotColor: "primary" }, { dotColor: "green" }, { dotColor: "red" }],
          [{}, { isSelected: true }],
        ]}
      />
    </ShowcaseFrame>
  );
};

const ButtonToggleWithLeftIconExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <ButtonToggleWithLeftIcon icon={(className) => <Atom className={className} />}>Button</ButtonToggleWithLeftIcon>
        <ButtonToggleWithLeftIcon isSelected icon={(className) => <Atom className={className} />}>
          Button
        </ButtonToggleWithLeftIcon>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const ButtonToggleWithRightIconExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <ButtonToggleWithRightIcon icon={(className) => <Atom className={className} />}>
          Button
        </ButtonToggleWithRightIcon>
        <ButtonToggleWithRightIcon isSelected icon={(className) => <Atom className={className} />}>
          Button
        </ButtonToggleWithRightIcon>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const LoadingButtonToggleExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <LoadingButtonToggle>Button</LoadingButtonToggle>
        <LoadingButtonToggle isSelected>Button</LoadingButtonToggle>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const ButtonToggleDocs = () => {
  return (
    <Page title="ButtonToggle" subtitle="Toggle buttons are used to toggle between two states.">
      <Section title="Showcase">
        <Example
          title="Default"
          description={
            <>
              Buttons are toggled by clicking or pressing the <Code>space</Code> or <Code>enter</Code> key.
            </>
          }
        >
          <BasicExample />
        </Example>
        <Example title="Group" description="Buttons can be grouped using the attachment property.">
          <GroupExample />
        </Example>
        <Example title="Sizes" description="All buttons have 3 sizes: small, medium, and large.">
          <SizesExample />
        </Example>
        <Example title="Full Width" description="Fullwidth buttons will fill the width of their container.">
          <FullWidthExample />
        </Example>
        <Example title="Disabled" description="Disabled buttons are not interactive and cannot be clicked.">
          <DisabledExample />
        </Example>
      </Section>

      <Section title="Atoms">
        <Example
          title="Icon"
          description={
            <>
              Use the <Code>IconButtonToggle</Code> atom to create a togglable icon button.
            </>
          }
        >
          <IconButtonToggleExample />
        </Example>
        <Example
          title="With Dot"
          description={
            <>
              Use the <Code>ButtonToggleWithDot</Code> atom to create a button with a multicolored dot.
            </>
          }
        >
          <ButtonToggleWithDotExample />
        </Example>
        <Example
          title="With Left Icon"
          description={
            <>
              Use the <Code>ButtonToggleWithLeftIcon</Code> atom to create a button with an icon on the left.
            </>
          }
        >
          <ButtonToggleWithLeftIconExample />
        </Example>
        <Example
          title="With Right Icon"
          description={
            <>
              Use the <Code>ButtonToggleWithRightIcon</Code> atom to create a button with an icon on the right.
            </>
          }
        >
          <ButtonToggleWithRightIconExample />
        </Example>
        <Example
          title="Loading"
          description={
            <>
              Used to indicate that an action is being performed. Use the <Code>LoadingButtonToggle</Code> atom to
              create a loading button.
            </>
          }
        >
          <LoadingButtonToggleExample />
        </Example>
      </Section>
    </Page>
  );
};

const buttonToggleRoute = "/button-toggle";
export const buttonToggleRouteObj: DocsRoute<typeof buttonToggleRoute> = {
  path: buttonToggleRoute,
  group: "react-aria",
  label: "ButtonToggle",
  component: ButtonToggleDocs,
};
