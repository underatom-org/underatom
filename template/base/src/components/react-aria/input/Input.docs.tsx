import { Atom } from "../../../assets/Icons";
import { avatar1Src } from "../../../assets/images/Images";
import { Example, Page, Section, ShowcaseFrame, VariantsColumn } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import { useMediaQuery } from "../../../docs/utils";
import { Button } from "../button/Button.atoms";
import {
  Input,
  InputBox,
  InputBoxAvatar,
  InputBoxTag,
  InputBoxTagWithAvatar,
  InputBoxTagWithDot,
  InputBoxTagWithIcon,
  InputBoxWithTags,
  InputProps,
} from "./Input.atoms";

const InputShowcaseFrame = ({ children, code }: { children: React.ReactNode; code?: string }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <ShowcaseFrame paddingX={isMobile ? 30 : 200} code={code}>
      {children}
    </ShowcaseFrame>
  );
};

const defaultCode = `
<Input label="Name" placeholder="Enter your name...">
  <InputBox />
</Input>
`;

const Default = () => {
  return (
    <InputShowcaseFrame>
      <Input label="Name" placeholder="Enter your name...">
        <InputBox />
      </Input>
    </InputShowcaseFrame>
  );
};

const requiredCode = `
<Input label="Name" isRequired placeholder="Enter your name...">
  <InputBox />
</Input>
`;

const Required = () => {
  return (
    <InputShowcaseFrame code={requiredCode}>
      <Input label="Name" isRequired placeholder="Enter your name...">
        <InputBox />
      </Input>
    </InputShowcaseFrame>
  );
};

const withDescriptionCode = `
<Input
  label="Name"
  placeholder="Enter your name..."
  description="Your full name as shown on your ID"
>
  <InputBox />
</Input>
`;

const WithDescription = () => {
  return (
    <InputShowcaseFrame code={withDescriptionCode}>
      <Input label="Name" placeholder="Enter your name..." description="Your full name as shown on your ID">
        <InputBox />
      </Input>
    </InputShowcaseFrame>
  );
};

const invalidCode = `
<Input
  label="Name"
  isInvalid
  isRequired
  placeholder="Enter your name..."
  description="Name is required."
>
  <InputBox />
</Input>
`;

const Invalid = () => {
  return (
    <InputShowcaseFrame code={invalidCode}>
      <Input label="Name" isRequired isInvalid placeholder="Enter your name..." description="Name is required.">
        <InputBox />
      </Input>
    </InputShowcaseFrame>
  );
};

const withClearCode = `
<Input label="Name" placeholder="Enter your name...">
  <InputBox onClear={() => console.log("cleared")} />
</Input>
`;

const WithClear = () => {
  return (
    <InputShowcaseFrame code={withClearCode}>
      <Input label="Name" placeholder="Enter your name...">
        <InputBox onClear={() => console.log("cleared")} />
      </Input>
    </InputShowcaseFrame>
  );
};

const withTrailingIconCode = `
<Input label="Name" placeholder="Enter your name...">
  <InputBox trailingIcon={(className) => <Atom className={className} />} />
</Input>
`;

const WithTrailingIcon = () => {
  return (
    <InputShowcaseFrame code={withTrailingIconCode}>
      <Input label="Name" placeholder="Enter your name...">
        <InputBox trailingIcon={(className) => <Atom className={className} />} />
      </Input>
    </InputShowcaseFrame>
  );
};

const withLeadingIconCode = `
<Input label="Name" placeholder="Enter your name...">
  <InputBox leadingIcon={(className) => <Atom className={className} />} />
</Input>
`;

const WithLeadingIcon = () => {
  return (
    <InputShowcaseFrame code={withLeadingIconCode}>
      <Input label="Name" placeholder="Enter your name...">
        <InputBox leadingIcon={(className) => <Atom className={className} />} />
      </Input>
    </InputShowcaseFrame>
  );
};

const sizesCode = `
<Input size="sm" label="Name" placeholder="Enter your name...">
  <InputBox />
</Input>
`;

const Sizes = () => {
  return (
    <InputShowcaseFrame code={sizesCode}>
      <VariantsColumn>
        <Input label="Name" size="sm" placeholder="Enter your name...">
          <InputBox />
        </Input>
        <Input label="Name" size="md" placeholder="Enter your name...">
          <InputBox />
        </Input>
        <Input label="Name" size="lg" placeholder="Enter your name...">
          <InputBox />
        </Input>
      </VariantsColumn>
    </InputShowcaseFrame>
  );
};

const groupCode = `
<div style={{ display: "flex" }}>
  <Input label="First name" placeholder="Enter your first name..." attachment="start">
    <InputBox />
  </Input>
  <Input label="Last name" placeholder="Enter your last name..." attachment="center">
    <InputBox />
  </Input>
  <Input label="Email" placeholder="Enter your email..." attachment="end">
    <InputBox />
  </Input>
</div>
`;

const Group = () => {
  return (
    <ShowcaseFrame code={groupCode}>
      <div style={{ display: "flex" }}>
        <Input label="First name" placeholder="Enter your first name..." attachment="start">
          <InputBox />
        </Input>
        <Input label="Last name" placeholder="Enter your last name..." attachment="center">
          <InputBox />
        </Input>
        <Input label="Email" placeholder="Enter your email..." attachment="end">
          <InputBox />
        </Input>
      </div>
    </ShowcaseFrame>
  );
};

const invalidGroupCode = `
<div style={{ display: "flex" }}>
  <Input label="First name" placeholder="Enter your first name..." attachment="start">
    <InputBox />
  </Input>
  <Input
    label="Last name"
    isInvalid
    placeholder="Enter your last name..."
    description="Last name is required."
    attachment="center"
  >
    <InputBox />
  </Input>
  <Input label="Email" placeholder="Enter your email..." attachment="end">
    <InputBox />
  </Input>
</div>
`;

const InvalidGroup = () => {
  return (
    <ShowcaseFrame code={invalidGroupCode}>
      <div style={{ display: "flex" }}>
        <Input label="First name" placeholder="Enter your first name..." attachment="start">
          <InputBox />
        </Input>
        <Input
          label="Last name"
          isInvalid
          placeholder="Enter your last name..."
          description="Last name is required."
          attachment="center"
        >
          <InputBox />
        </Input>
        <Input label="Email" placeholder="Enter your email..." attachment="end">
          <InputBox />
        </Input>
      </div>
    </ShowcaseFrame>
  );
};

const withButtonCode = `
<Input label="Email" attachment="start" placeholder="Enter your email...">
  <div style={{ display: "flex" }}>
    <InputBox />
    <Button attachment="end">Subscribe</Button>
  </div>
</Input>
`;

const WithButton = () => {
  return (
    <InputShowcaseFrame code={withButtonCode}>
      <Input label="Email" attachment="start" placeholder="Enter your email...">
        <div style={{ display: "flex" }}>
          <InputBox />
          <Button attachment="end">Subscribe</Button>
        </div>
      </Input>
    </InputShowcaseFrame>
  );
};

const disabledCode = `
<Input
  label="Name"
  isDisabled
  isRequired
  placeholder="Enter your name..."
  description="Your full name as shown on your ID"
>
  <InputBox />
</Input>
`;

const Disabled = () => {
  return (
    <InputShowcaseFrame code={disabledCode}>
      <Input
        label="Name"
        isDisabled
        isRequired
        placeholder="Enter your name..."
        description="Your full name as shown on your ID"
      >
        <InputBox />
      </Input>
    </InputShowcaseFrame>
  );
};

const InputWithTagsHelper = (props: Partial<InputProps>) => {
  return (
    <Input {...props} label="Label" placeholder="Enter email...">
      <InputBoxWithTags
        trailingIcon={(className) => <Atom className={className} />}
        onClear={() => console.log("cleared")}
        tagSlots={
          <>
            <InputBoxTag label="Tag" />
            <InputBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />
            <InputBoxTagWithDot label="Tag" />
            <InputBoxTagWithAvatar
              label="Tag"
              avatarSlot={
                <InputBoxAvatar
                  imageProps={{
                    src: avatar1Src,
                    alt: "Avatar",
                  }}
                  fallbackText="AV"
                />
              }
              onDismiss={() => console.log("dismissed")}
            />
          </>
        }
      />
    </Input>
  );
};

const withTagsCode = `
<Input label="Label" placeholder="Enter email...">
  <InputBoxWithTags
    trailingIcon={(className) => <Atom className={className} />}
    onClear={() => console.log("cleared")}
    tagSlots={
      <>
        <InputBoxTag label="Tag" />
        <InputBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />
        <InputBoxTagWithDot label="Tag" />
        <InputBoxTagWithAvatar
          label="Tag"
          avatarSlot={
            <InputBoxAvatar
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
              fallbackText="AV"
            />
          }
          onDismiss={() => console.log("dismissed")}
        />
      </>
    }
  />
</Input>
`;

const WithTags = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <ShowcaseFrame paddingX={isMobile ? 10 : 80} code={withTagsCode}>
      <InputWithTagsHelper />
    </ShowcaseFrame>
  );
};

const withTagsInvalidCode = `
<Input isInvalid label="Label" placeholder="Enter email...">
  <InputBoxWithTags
    trailingIcon={(className) => <Atom className={className} />}
    onClear={() => console.log("cleared")}
    tagSlots={
      <>
        <InputBoxTag label="Tag" />
        <InputBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />
        <InputBoxTagWithDot label="Tag" />
        <InputBoxTagWithAvatar
          label="Tag"
          avatarSlot={
            <InputBoxAvatar
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
              fallbackText="AV"
            />
          }
          onDismiss={() => console.log("dismissed")}
        />
      </>
    }
  />
</Input>
`;

const WithTagsInvalid = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <ShowcaseFrame paddingX={isMobile ? 10 : 80} code={withTagsInvalidCode}>
      <InputWithTagsHelper isInvalid />
    </ShowcaseFrame>
  );
};

const withTagsDisabledCode = `
<Input isDisabled label="Label" placeholder="Enter email...">
  <InputBoxWithTags
    trailingIcon={(className) => <Atom className={className} />}
    onClear={() => console.log("cleared")}
    tagSlots={
      <>
        <InputBoxTag label="Tag" />
        <InputBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />
        <InputBoxTagWithDot label="Tag" />
        <InputBoxTagWithAvatar
          label="Tag"
          avatarSlot={
            <InputBoxAvatar
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
              fallbackText="AV"
            />
          }
          onDismiss={() => console.log("dismissed")}
        />
      </>
    }
  />
</Input>
`;

const WithTagsDisabled = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <ShowcaseFrame paddingX={isMobile ? 10 : 80} code={withTagsDisabledCode}>
      <InputWithTagsHelper isDisabled />
    </ShowcaseFrame>
  );
};

const withTagsSizesCode = `
<Input size="sm" label="Label" placeholder="Enter email...">
  <InputBoxWithTags
    trailingIcon={(className) => <Atom className={className} />}
    onClear={() => console.log("cleared")}
    tagSlots={
      <>
        <InputBoxTag label="Tag" />
        <InputBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />
        <InputBoxTagWithDot label="Tag" />
        <InputBoxTagWithAvatar
          label="Tag"
          avatarSlot={
            <InputBoxAvatar
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
              fallbackText="AV"
            />
          }
          onDismiss={() => console.log("dismissed")}
        />
      </>
    }
  />
</Input>
`;

const WithTagsSizes = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <ShowcaseFrame
      code={withTagsSizesCode}
      paddingX={isMobile ? 20 : 80}
      style={{ justifyContent: isMobile ? "unset" : "center" }}
    >
      <div>
        <InputWithTagsHelper size="sm" style={{ minWidth: 464 }} />
        <InputWithTagsHelper size="md" style={{ minWidth: 464 }} />
        <InputWithTagsHelper size="lg" style={{ minWidth: 464 }} />
      </div>
    </ShowcaseFrame>
  );
};

const InputDocs = () => {
  return (
    <Page
      title="Input"
      subtitle="Text input field with optional slots to extend functionality."
      command="npx underatom@latest add input"
      usageCode={defaultCode}
      defaultExample={<Default />}
    >
      <Section title="Showcase">
        <Example title="Required">
          <Required />
        </Example>
        <Example title="With description">
          <WithDescription />
        </Example>
        <Example title="Invalid">
          <Invalid />
        </Example>
        <Example title="With clear">
          <WithClear />
        </Example>
        <Example title="With trailing icon">
          <WithTrailingIcon />
        </Example>
        <Example title="With leading icon">
          <WithLeadingIcon />
        </Example>
        <Example title="Sizes">
          <Sizes />
        </Example>
        <Example title="Group">
          <Group />
        </Example>
        <Example title="Invalid group">
          <InvalidGroup />
        </Example>
        <Example title="With button">
          <WithButton />
        </Example>
        <Example title="Disabled">
          <Disabled />
        </Example>
      </Section>

      <Section title="Atoms">
        <Example title="With tags">
          <WithTags />
        </Example>
        <Example title="With tags invalid">
          <WithTagsInvalid />
        </Example>
        <Example title="With tags disabled">
          <WithTagsDisabled />
        </Example>
        <Example title="With tags sizes">
          <WithTagsSizes />
        </Example>
      </Section>
    </Page>
  );
};

const inputRoute = "/input";
export const inputRouteObj: DocsRoute<typeof inputRoute> = {
  path: inputRoute,
  group: "react-aria",
  label: "Input",
  component: InputDocs,
};
