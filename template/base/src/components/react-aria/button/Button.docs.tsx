import { Atom } from "phosphor-react";
import { VariantsGrid } from "../../../_utils";
import {
  AnchorButton,
  AnchorButtonProps,
  Button,
  ButtonProps,
  ButtonWithDot,
  ButtonWithDotProps,
  ButtonWithLeftIcon,
  ButtonWithLeftIconProps,
  ButtonWithRightIcon,
  ButtonWithRightIconProps,
  IconButton,
  IconButtonProps,
  LoadingButton,
  LoadingButtonProps,
} from "./Button.atoms";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsRow } from "../../../docs/docs.components";
import { Code } from "../../no-headless/typography/Typography.atoms";

const VariantsExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<ButtonProps>
        isHorizontal
        renderVariant={(props) => {
          return <Button {...props}>Button</Button>;
        }}
        variantPropsMap={[
          [
            { variant: "primary" },
            { variant: "base" },
            { variant: "danger" },
            { variant: "ghost" },
            { variant: "link" },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const GroupsExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <VariantsGrid<ButtonProps>
          renderVariant={(props) => (
            <div
              style={{
                display: "flex",
              }}
            >
              <Button {...props} attachment="start">
                Start
              </Button>
              <Button {...props} attachment="center">
                Center
              </Button>
              <Button {...props} attachment="end">
                End
              </Button>
            </div>
          )}
          variantPropsMap={[[{ variant: "primary" }, { variant: "base" }, { variant: "danger" }, { variant: "ghost" }]]}
        />
        <VariantsGrid<IconButtonProps>
          renderVariant={(props) => (
            <div
              style={{
                display: "flex",
              }}
            >
              <IconButton {...props} icon={(className) => <Atom className={className} />} attachment="start" />
              <IconButton {...props} icon={(className) => <Atom className={className} />} attachment="center" />
              <IconButton {...props} icon={(className) => <Atom className={className} />} attachment="end" />
            </div>
          )}
          variantPropsMap={[[{ variant: "primary" }, { variant: "base" }, { variant: "danger" }, { variant: "ghost" }]]}
        />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const SizesExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<ButtonProps>
        renderVariant={(props) => {
          return <Button {...props}>Button</Button>;
        }}
        variantPropsMap={[
          [
            { variant: "primary" },
            { variant: "base" },
            { variant: "danger" },
            { variant: "ghost" },
            { variant: "link" },
          ],
          [{ size: "sm" }, { size: "md" }, { size: "lg" }],
        ]}
      />
    </ShowcaseFrame>
  );
};

const FullwidthExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<ButtonProps>
        renderVariant={(props) => {
          return (
            <div
              style={{
                width: props.fullWidth ? 300 : "fit-content",
                display: "flex",
              }}
            >
              <Button {...props}>Button</Button>
            </div>
          );
        }}
        variantPropsMap={[
          [
            { variant: "primary" },
            { variant: "base" },
            { variant: "danger" },
            { variant: "ghost" },
            { variant: "link" },
          ],
          [{}, { fullWidth: true }],
        ]}
      />
    </ShowcaseFrame>
  );
};

const DisabledExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <VariantsGrid<ButtonProps>
          renderVariant={(props) => {
            return (
              <Button {...props} isDisabled>
                Button
              </Button>
            );
          }}
          variantPropsMap={[
            [
              { variant: "primary" },
              { variant: "base" },
              { variant: "danger" },
              { variant: "ghost" },
              { variant: "link" },
            ],
          ]}
        />
        <VariantsGrid<IconButtonProps>
          renderVariant={(props) => {
            return <IconButton {...props} isDisabled icon={(className) => <Atom className={className} />} />;
          }}
          variantPropsMap={[[{ variant: "primary" }, { variant: "base" }, { variant: "danger" }, { variant: "ghost" }]]}
        />
        <VariantsGrid<ButtonWithDotProps>
          renderVariant={(props) => {
            return (
              <ButtonWithDot {...props} isDisabled>
                Button
              </ButtonWithDot>
            );
          }}
          variantPropsMap={[[{ variant: "primary" }, { variant: "base" }, { variant: "danger" }, { variant: "ghost" }]]}
        />
        <VariantsGrid<ButtonWithLeftIconProps>
          renderVariant={(props) => {
            return (
              <ButtonWithLeftIcon {...props} isDisabled icon={(className) => <Atom className={className} />}>
                Button
              </ButtonWithLeftIcon>
            );
          }}
          variantPropsMap={[
            [
              { variant: "primary" },
              { variant: "base" },
              { variant: "danger" },
              { variant: "ghost" },
              { variant: "link" },
            ],
          ]}
        />
        <VariantsGrid<ButtonWithRightIconProps>
          renderVariant={(props) => {
            return (
              <ButtonWithRightIcon {...props} isDisabled icon={(className) => <Atom className={className} />}>
                Button
              </ButtonWithRightIcon>
            );
          }}
          variantPropsMap={[
            [
              { variant: "primary" },
              { variant: "base" },
              { variant: "danger" },
              { variant: "ghost" },
              { variant: "link" },
            ],
          ]}
        />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const IconButtonExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<IconButtonProps>
        isHorizontal
        renderVariant={(props) => {
          return <IconButton {...props} icon={(className) => <Atom className={className} />} />;
        }}
        variantPropsMap={[[{ variant: "primary" }, { variant: "base" }, { variant: "danger" }, { variant: "ghost" }]]}
      />
    </ShowcaseFrame>
  );
};

const AnchorButtonExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<AnchorButtonProps>
        isHorizontal
        renderVariant={(props) => {
          return <AnchorButton {...props}>Button</AnchorButton>;
        }}
        variantPropsMap={[
          [
            { variant: "primary" },
            { variant: "base" },
            { variant: "danger" },
            { variant: "ghost" },
            { variant: "link" },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const ButtonWithDotExample = () => {
  return (
    <ShowcaseFrame paddingX={20}>
      <VariantsGrid<ButtonWithDotProps>
        renderVariant={(props) => {
          return <ButtonWithDot {...props}>Button</ButtonWithDot>;
        }}
        variantPropsMap={[
          [{ dotColor: "base" }, { dotColor: "primary" }, { dotColor: "green" }, { dotColor: "red" }],
          [{ variant: "primary" }, { variant: "base" }, { variant: "danger" }, { variant: "ghost" }],
        ]}
      />
    </ShowcaseFrame>
  );
};

const ButtonWithLeftIconExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<ButtonWithLeftIconProps>
        isHorizontal
        renderVariant={(props) => {
          return (
            <ButtonWithLeftIcon {...props} icon={(className) => <Atom className={className} />}>
              Button
            </ButtonWithLeftIcon>
          );
        }}
        variantPropsMap={[
          [
            { variant: "primary" },
            { variant: "base" },
            { variant: "danger" },
            { variant: "ghost" },
            { variant: "link" },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const ButtonWithRightIconExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<ButtonWithRightIconProps>
        isHorizontal
        renderVariant={(props) => {
          return (
            <ButtonWithRightIcon {...props} icon={(className) => <Atom className={className} />}>
              Button
            </ButtonWithRightIcon>
          );
        }}
        variantPropsMap={[
          [
            { variant: "primary" },
            { variant: "base" },
            { variant: "danger" },
            { variant: "ghost" },
            { variant: "link" },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const LoadingButtonExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<LoadingButtonProps>
        isHorizontal
        renderVariant={(props) => {
          return <LoadingButton {...props}>Button</LoadingButton>;
        }}
        variantPropsMap={[
          [
            { variant: "primary" },
            { variant: "base" },
            { variant: "danger" },
            { variant: "ghost" },
            { variant: "link" },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const ButtonDocs = () => {
  return (
    <Page
      title="Button"
      subtitle="Buttons are used to trigger actions. They can be used to submit a form, navigate to a new page, or perform a certain action."
    >
      <Section title="Showcase">
        <Example
          title="Variants"
          description={
            <>
              Buttons come in 5 different variants: <Code>primary</Code>, <Code>base</Code>, <Code>danger</Code>,{" "}
              <Code>ghost</Code>, and <Code>link</Code>.
            </>
          }
        >
          <VariantsExample />
        </Example>
        <Example title="Groups" description="Buttons can be grouped using the attachment property.">
          <GroupsExample />
        </Example>
        <Example title="Sizes" description="All buttons have 3 sizes: small, medium, and large.">
          <SizesExample />
        </Example>
        <Example title="Full Width" description="Fullwidth buttons will fill the width of their container.">
          <FullwidthExample />
        </Example>
        <Example title="Disabled" description="Disabled buttons are not interactive and cannot be clicked.">
          <DisabledExample />
        </Example>
      </Section>
      <Section title="Atoms">
        <Example
          title="Icon Button"
          description={
            <>
              Use the <Code>IconButton</Code> atom to create an icon button.
            </>
          }
        >
          <IconButtonExample />
        </Example>
        <Example
          title="Anchor Button"
          description={
            <>
              Anchor buttons are used to navigate to a new page. Use the <Code>AnchorButton</Code> atom to create an
              anchor button.
            </>
          }
        >
          <AnchorButtonExample />
        </Example>
        <Example
          title="With Dot"
          description={
            <>
              Use the <Code>ButtonWithDot</Code> atom to create a button with a multicolored dot.
            </>
          }
        >
          <ButtonWithDotExample />
        </Example>
        <Example
          title="With Left Icon"
          description={
            <>
              Use the <Code>ButtonWithLeftIcon</Code> atom to create a button with an icon on the left.
            </>
          }
        >
          <ButtonWithLeftIconExample />
        </Example>
        <Example
          title="With Right Icon"
          description={
            <>
              Use the <Code>ButtonWithRightIcon</Code> atom to create a button with an icon on the right.
            </>
          }
        >
          <ButtonWithRightIconExample />
        </Example>
        <Example
          title="Loading Button"
          description={
            <>
              Used to indicate that an action is being performed. Use the <Code>LoadingButton</Code> atom to create a
              loading button.
            </>
          }
        >
          <LoadingButtonExample />
        </Example>
      </Section>
    </Page>
  );
};

const buttonRoute = "/button";
export const buttonRouteObj: DocsRoute<typeof buttonRoute> = {
  path: buttonRoute,
  group: "react-aria",
  label: "Button",
  component: ButtonDocs,
};
