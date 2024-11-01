import { Example, Page, Section, ShowcaseFrame } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { H1, H2, H3, Body, Subheader, Label, Code } from "./Typography.atoms";

const heading1Code = `
<H1>The Evolution of Communication</H1>
`;

const Heading1Example = () => {
  return (
    <ShowcaseFrame code={heading1Code}>
      <H1>The Evolution of Communication</H1>
    </ShowcaseFrame>
  );
};

const subheaderCode = `
<Subheader>The Digital Age</Subheader>
`;

const SubheaderExample = () => {
  return (
    <ShowcaseFrame code={subheaderCode}>
      <Subheader>The Digital Age</Subheader>
    </ShowcaseFrame>
  );
};

const heading2Code = `
<H2>Rise of Social Media</H2>
`;

const Heading2Example = () => {
  return (
    <ShowcaseFrame code={heading2Code}>
      <H2>Rise of Social Media</H2>
    </ShowcaseFrame>
  );
};

const heading3Code = `
<H3>People stopped writing letters</H3>
`;

const Heading3Example = () => {
  return (
    <ShowcaseFrame code={heading3Code}>
      <H3>People stopped writing letters</H3>
    </ShowcaseFrame>
  );
};

const bodyCode = `
<Body>
Tech experts, recognizing the loss of personal touch in digital communication, advocated for a revival of letter writing.
</Body>
`;

const BodyTextExample = () => {
  return (
    <ShowcaseFrame code={bodyCode}>
      <Body>
        Tech experts, recognizing the loss of personal touch in digital communication, advocated for a revival of letter
        writing.
      </Body>
    </ShowcaseFrame>
  );
};

const labelCode = `
<Label>Name</Label>
<Body color="secondary">John Doe</Body>
`;

const LabelTextExample = () => {
  return (
    <ShowcaseFrame code={labelCode}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Label>Name</Label>
        <Body color="secondary">John Doe</Body>
      </div>
    </ShowcaseFrame>
  );
};

const codeCode = `
<Code>const x = 1;</Code>
`;

const CodeExample = () => {
  return (
    <ShowcaseFrame code={codeCode}>
      <Code>const x = 1;</Code>
    </ShowcaseFrame>
  );
};

const baseColorCode = `
<H1>The Evolution of Communication</H1>
<H2>The Digital Age</H2>
<H3>Rise of Social Media</H3>
<Body>Tech experts, recognizing the loss of personal touch in digital communication, advocated for a revival of letter writing.</Body>
<Label>Name</Label>
<Code>const x = 1;</Code>
`;

const BaseColorExample = () => {
  return (
    <ShowcaseFrame code={baseColorCode}>
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

const secondaryColorCode = `
<H1 color="secondary">The Evolution of Communication</H1>
<H2 color="secondary">The Digital Age</H2>
<H3 color="secondary">Rise of Social Media</H3>
<Body color="secondary">Tech experts, recognizing the loss of personal touch in digital communication, advocated for a revival of letter writing.</Body>
<Label color="secondary">Name</Label>
<Code color="secondary">const x = 1;</Code>
`;

const SecondaryColorExample = () => {
  return (
    <ShowcaseFrame code={secondaryColorCode}>
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
      usageCode={baseColorCode}
      defaultExample={<BaseColorExample />}
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
