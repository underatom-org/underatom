import { Atom } from "../../../assets/Icons";
import { avatar1Src } from "../../../assets/images/Images";
import { Example, Page, Section, ShowcaseFrame, VariantsColumn } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
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

const InputShowcaseFrame = ({ children }: { children: React.ReactNode }) => {
  return <ShowcaseFrame paddingX={200}>{children}</ShowcaseFrame>;
};

const Default = () => {
  return (
    <InputShowcaseFrame>
      <Input label="Name" placeholder="Enter your name..." boxSlot={<InputBox />} />
    </InputShowcaseFrame>
  );
};

const Required = () => {
  return (
    <InputShowcaseFrame>
      <Input label="Name" isRequired placeholder="Enter your name..." boxSlot={<InputBox />} />
    </InputShowcaseFrame>
  );
};

const WithDescription = () => {
  return (
    <InputShowcaseFrame>
      <Input
        label="Name"
        placeholder="Enter your name..."
        description="Your full name as shown on your ID"
        boxSlot={<InputBox />}
      />
    </InputShowcaseFrame>
  );
};

const Invalid = () => {
  return (
    <InputShowcaseFrame>
      <Input
        label="Name"
        isRequired
        isInvalid
        placeholder="Enter your name..."
        description="Name is required."
        boxSlot={<InputBox />}
      />
    </InputShowcaseFrame>
  );
};

const WithClear = () => {
  return (
    <InputShowcaseFrame>
      <Input
        label="Name"
        placeholder="Enter your name..."
        boxSlot={<InputBox onClear={() => console.log("cleared")} />}
      />
    </InputShowcaseFrame>
  );
};

const WithTrailingIcon = () => {
  return (
    <InputShowcaseFrame>
      <Input
        label="Name"
        placeholder="Enter your name..."
        boxSlot={<InputBox trailingIcon={(className) => <Atom className={className} />} />}
      />
    </InputShowcaseFrame>
  );
};

const WithLeadingIcon = () => {
  return (
    <InputShowcaseFrame>
      <Input
        label="Name"
        placeholder="Enter your name..."
        boxSlot={<InputBox leadingIcon={(className) => <Atom className={className} />} />}
      />
    </InputShowcaseFrame>
  );
};

const Sizes = () => {
  return (
    <InputShowcaseFrame>
      <VariantsColumn>
        <Input label="Name" size="sm" placeholder="Enter your name..." boxSlot={<InputBox />} />
        <Input label="Name" size="md" placeholder="Enter your name..." boxSlot={<InputBox />} />
        <Input label="Name" size="lg" placeholder="Enter your name..." boxSlot={<InputBox />} />
      </VariantsColumn>
    </InputShowcaseFrame>
  );
};

const Group = () => {
  return (
    <ShowcaseFrame>
      <div style={{ display: "flex" }}>
        <Input label="First name" placeholder="Enter your first name..." attachment="start" boxSlot={<InputBox />} />
        <Input label="Last name" placeholder="Enter your last name..." attachment="center" boxSlot={<InputBox />} />
        <Input label="Email" placeholder="Enter your email..." attachment="end" boxSlot={<InputBox />} />
      </div>
    </ShowcaseFrame>
  );
};

const InvalidGroup = () => {
  return (
    <ShowcaseFrame>
      <div style={{ display: "flex" }}>
        <Input label="First name" placeholder="Enter your first name..." attachment="start" boxSlot={<InputBox />} />
        <Input
          label="Last name"
          isInvalid
          placeholder="Enter your last name..."
          description="Last name is required."
          attachment="center"
          boxSlot={<InputBox />}
        />
        <Input label="Email" placeholder="Enter your email..." attachment="end" boxSlot={<InputBox />} />
      </div>
    </ShowcaseFrame>
  );
};

const WithButton = () => {
  return (
    <InputShowcaseFrame>
      <Input
        label="Email"
        attachment="start"
        placeholder="Enter your email..."
        boxSlot={
          <div style={{ display: "flex" }}>
            <InputBox />
            <Button attachment="end">Subscribe</Button>
          </div>
        }
      />
    </InputShowcaseFrame>
  );
};

const Disabled = () => {
  return (
    <InputShowcaseFrame>
      <Input
        label="Name"
        isDisabled
        isRequired
        placeholder="Enter your name..."
        description="Your full name as shown on your ID"
        boxSlot={<InputBox />}
      />
    </InputShowcaseFrame>
  );
};

const InputWithTagsHelper = (props: Partial<InputProps>) => {
  return (
    <Input
      {...props}
      label="Label"
      placeholder="Enter email..."
      boxSlot={
        <InputBoxWithTags
          trailingIcon={(className) => <Atom className={className} />}
          onClear={() => console.log("cleared")}
          tagSlots={[
            <InputBoxTag label="Tag" />,
            <InputBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />,
            <InputBoxTagWithDot label="Tag" />,
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
            />,
          ]}
        />
      }
    />
  );
};

const WithTags = () => {
  return (
    <ShowcaseFrame paddingX={80}>
      <InputWithTagsHelper />
    </ShowcaseFrame>
  );
};

const WithTagsInvalid = () => {
  return (
    <ShowcaseFrame paddingX={80}>
      <InputWithTagsHelper isInvalid />
    </ShowcaseFrame>
  );
};

const WithTagsDisabled = () => {
  return (
    <ShowcaseFrame paddingX={80}>
      <InputWithTagsHelper isDisabled />
    </ShowcaseFrame>
  );
};

const WithTagsSizes = () => {
  return (
    <ShowcaseFrame paddingX={80}>
      <VariantsColumn>
        <InputWithTagsHelper size="sm" />
        <InputWithTagsHelper size="md" />
        <InputWithTagsHelper size="lg" />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const InputDocs = () => {
  return (
    <Page title="Input" subtitle="">
      <Example title="Default">
        <Default />
      </Example>
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
