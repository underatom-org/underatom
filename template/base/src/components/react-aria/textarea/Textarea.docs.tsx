import { Atom } from "../../../assets/Icons";
import { avatar1Src } from "../../../assets/images/Images";
import { Example, Page, Section, ShowcaseFrame, VariantsColumn } from "../../../docs/docs.components";
import { DocsRoute } from "../../../docs/docs.types";
import {
  Textarea,
  TextareaBox,
  TextareaBoxAvatar,
  TextareaBoxTag,
  TextareaBoxTagWithAvatar,
  TextareaBoxTagWithDot,
  TextareaBoxTagWithIcon,
  TextareaBoxWithTags,
  TextareaProps,
} from "./Textarea.atoms";

const TextareaShowcaseFrame = ({ children }: { children: React.ReactNode }) => {
  return <ShowcaseFrame paddingX={140}>{children}</ShowcaseFrame>;
};

const DefaultTextarea = (props: Partial<TextareaProps>) => {
  return (
    <Textarea
      {...props}
      label="Leave a review"
      textareaProps={{ placeholder: "Write a review...", rows: 4 }}
      boxSlot={<TextareaBox />}
    />
  );
};

const Default = () => {
  return (
    <TextareaShowcaseFrame>
      <DefaultTextarea />
    </TextareaShowcaseFrame>
  );
};

const Required = () => {
  return (
    <TextareaShowcaseFrame>
      <DefaultTextarea isRequired />
    </TextareaShowcaseFrame>
  );
};

const WithDescription = () => {
  return (
    <TextareaShowcaseFrame>
      <DefaultTextarea description="Your review will help us improve our products." />
    </TextareaShowcaseFrame>
  );
};

const Invalid = () => {
  return (
    <TextareaShowcaseFrame>
      <DefaultTextarea isInvalid description="Your review is too mean." />
    </TextareaShowcaseFrame>
  );
};

const Disabled = () => {
  return (
    <TextareaShowcaseFrame>
      <DefaultTextarea isDisabled isRequired description="Your review is very important to us." />
    </TextareaShowcaseFrame>
  );
};

const TextareaWithTagsHelper = (props: Partial<TextareaProps>) => {
  return (
    <Textarea
      {...props}
      label="Recipients"
      textareaProps={{ placeholder: "Write an email...", rows: 4 }}
      boxSlot={
        <TextareaBoxWithTags
          tagSlots={[
            <TextareaBoxTag label="Tag" />,
            <TextareaBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />,
            <TextareaBoxTagWithDot label="Tag" />,
            <TextareaBoxTagWithAvatar
              label="Tag"
              avatarSlot={
                <TextareaBoxAvatar
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
    <TextareaShowcaseFrame>
      <TextareaWithTagsHelper />
    </TextareaShowcaseFrame>
  );
};

const WithTagsInvalid = () => {
  return (
    <TextareaShowcaseFrame>
      <TextareaWithTagsHelper isInvalid />
    </TextareaShowcaseFrame>
  );
};

const WithTagsDisabled = () => {
  return (
    <TextareaShowcaseFrame>
      <TextareaWithTagsHelper isDisabled />
    </TextareaShowcaseFrame>
  );
};

const WithTagsSizes = () => {
  return (
    <TextareaShowcaseFrame>
      <VariantsColumn>
        <TextareaWithTagsHelper size="sm" />
        <TextareaWithTagsHelper size="md" />
        <TextareaWithTagsHelper size="lg" />
      </VariantsColumn>
    </TextareaShowcaseFrame>
  );
};

const TextareaDocs = () => {
  return (
    <Page title="Textarea" subtitle="" command="npx underatom@latest add textarea">
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

const textareaRoute = "/textarea";
export const textareaRouteObj: DocsRoute<typeof textareaRoute> = {
  path: textareaRoute,
  group: "react-aria",
  label: "Textarea",
  component: TextareaDocs,
};
