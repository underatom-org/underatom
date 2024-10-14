import { Example, Page, Section, ShowcaseFrame } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { H1, H2, H3, Body, Subheader, Label, Code } from "./Typography.atoms";

const Heading1Example = () => {
  return (
    <ShowcaseFrame>
      <H1>The Evolution of Communication</H1>
    </ShowcaseFrame>
  );
};

const SubheaderExample = () => {
  return (
    <ShowcaseFrame>
      <Subheader>The Digital Age</Subheader>
    </ShowcaseFrame>
  );
};

const Heading2Example = () => {
  return (
    <ShowcaseFrame>
      <H2>Rise of Social Media</H2>
    </ShowcaseFrame>
  );
};

const Heading3Example = () => {
  return (
    <ShowcaseFrame>
      <H3>People stopped writing letters</H3>
    </ShowcaseFrame>
  );
};

const BodyTextExample = () => {
  return (
    <ShowcaseFrame>
      <Body>
        Tech experts, recognizing the loss of personal touch in digital communication, advocated for a revival of letter
        writing.
      </Body>
    </ShowcaseFrame>
  );
};

const LabelTextExample = () => {
  return (
    <ShowcaseFrame>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Label>Name</Label>
        <Body color="secondary">John Doe</Body>
      </div>
    </ShowcaseFrame>
  );
};

const CodeExample = () => {
  return (
    <ShowcaseFrame>
      <Code>const x = 1;</Code>
    </ShowcaseFrame>
  );
};

const BaseColorExample = () => {
  return (
    <ShowcaseFrame>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <H1>The Evolution of Communication</H1>
        <H2>The Digital Age</H2>
        <H3>Rise of Social Media</H3>
        <Body>
          Tech experts, recognizing the loss of personal touch in digital communication, advocated for a revival of
          letter writing.
        </Body>
        <Label>Name</Label>
        <Code>const x = 1;</Code>
      </div>
    </ShowcaseFrame>
  );
};

const SecondaryColorExample = () => {
  return (
    <ShowcaseFrame>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <H1 color="secondary">The Evolution of Communication</H1>
        <H2 color="secondary">The Digital Age</H2>
        <H3 color="secondary">Rise of Social Media</H3>
        <Body>
          Tech experts, recognizing the loss of personal touch in digital communication, advocated for a revival of
          letter writing.
        </Body>
        <Label color="secondary">Name</Label>
        <Code color="secondary">const x = 1;</Code>
      </div>
    </ShowcaseFrame>
  );
};

const TextDocs = () => {
  return (
    <Page
      title="Typography"
      subtitle="Generic text components split into multiple atoms."
      command="npx underatom@latest add typography"
    >
      <Section title="Showcase">
        <Example title="H1">
          <Heading1Example />
        </Example>
        <Example title="Subheader">
          <SubheaderExample />
        </Example>
        <Example title="H2">
          <Heading2Example />
        </Example>
        <Example title="H3">
          <Heading3Example />
        </Example>
        <Example title="Body">
          <BodyTextExample />
        </Example>
        <Example title="Label">
          <LabelTextExample />
        </Example>
        <Example title="Code">
          <CodeExample />
        </Example>
      </Section>
      <Section title="Colors">
        <Example title="Base" description="The base color of the text.">
          <BaseColorExample />
        </Example>
        <Example title="Secondary" description="The secondary color of the text.">
          <SecondaryColorExample />
        </Example>
      </Section>
    </Page>
  );
};

const textRoute = "/text";
export const textRouteObj: DocsRoute<typeof textRoute> = {
  path: textRoute,
  group: "no-headless",
  label: "Text",
  component: TextDocs,
};
