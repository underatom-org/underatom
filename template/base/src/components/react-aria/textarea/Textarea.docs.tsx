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

const TextareaShowcaseFrame = ({ children, code }: { children: React.ReactNode; code?: string }) => {
  return (
    <ShowcaseFrame paddingX={140} code={code}>
      {children}
    </ShowcaseFrame>
  );
};

const DefaultTextarea = (props: Partial<TextareaProps>) => {
  return (
    <Textarea {...props} label="Leave a review" textareaProps={{ placeholder: "Write a review...", rows: 4 }}>
      <TextareaBox />
    </Textarea>
  );
};

const defaultCode = `
<Textarea label="Leave a review" textareaProps={{ placeholder: "Write a review...", rows: 4 }}>
  <TextareaBox />
</Textarea>
`;

const Default = () => {
  return (
    <TextareaShowcaseFrame code={defaultCode}>
      <DefaultTextarea />
    </TextareaShowcaseFrame>
  );
};

const requiredCode = `
<Textarea
  isRequired
  label="Leave a review"
  textareaProps={{ placeholder: "Write a review...", rows: 4 }}
>
  <TextareaBox />
</Textarea>
`;

const Required = () => {
  return (
    <TextareaShowcaseFrame code={requiredCode}>
      <DefaultTextarea isRequired />
    </TextareaShowcaseFrame>
  );
};

const withDescriptionCode = `
<Textarea
  description="Your review will help us improve our products."
  label="Leave a review"
  textareaProps={{ placeholder: "Write a review...", rows: 4 }}
>
  <TextareaBox />
</Textarea>
`;

const WithDescription = () => {
  return (
    <TextareaShowcaseFrame code={withDescriptionCode}>
      <DefaultTextarea description="Your review will help us improve our products." />
    </TextareaShowcaseFrame>
  );
};

const invalidCode = `
<Textarea
  isInvalid
  description="Your review is too mean."
  label="Leave a review"
  textareaProps={{ placeholder: "Write a review...", rows: 4 }}
>
  <TextareaBox />
</Textarea>
`;

const Invalid = () => {
  return (
    <TextareaShowcaseFrame code={invalidCode}>
      <DefaultTextarea isInvalid description="Your review is too mean." />
    </TextareaShowcaseFrame>
  );
};

const disabledCode = `
<Textarea
  isDisabled
  isRequired
  description="Your review is very important to us."
  label="Leave a review"
  textareaProps={{ placeholder: "Write a review...", rows: 4 }}
>
  <TextareaBox />
</Textarea>
`;

const Disabled = () => {
  return (
    <TextareaShowcaseFrame code={disabledCode}>
      <DefaultTextarea isDisabled isRequired description="Your review is very important to us." />
    </TextareaShowcaseFrame>
  );
};

const TextareaWithTagsHelper = (props: Partial<TextareaProps>) => {
  return (
    <Textarea {...props} label="Recipients" textareaProps={{ placeholder: "Write an email...", rows: 4 }}>
      <TextareaBoxWithTags
        tagSlots={
          <>
            <TextareaBoxTag label="Tag" />
            <TextareaBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />
            <TextareaBoxTagWithDot label="Tag" />
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
            />
          </>
        }
      />
    </Textarea>
  );
};

const withTagsCode = `
<Textarea label="Recipients" textareaProps={{ placeholder: "Write an email...", rows: 4 }}>
  <TextareaBoxWithTags
    tagSlots={
      <>
        <TextareaBoxTag label="Tag" />
        <TextareaBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />
        <TextareaBoxTagWithDot label="Tag" />
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
        />
      </>
    }
  />
</Textarea>
`;

const WithTags = () => {
  return (
    <TextareaShowcaseFrame code={withTagsCode}>
      <TextareaWithTagsHelper />
    </TextareaShowcaseFrame>
  );
};

const withTagsInvalidCode = `
<Textarea
  isInvalid
  label="Recipients"
  textareaProps={{ placeholder: "Write an email...", rows: 4 }}
>
  <TextareaBoxWithTags
    tagSlots={
      <>
        <TextareaBoxTag label="Tag" />
        <TextareaBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />
        <TextareaBoxTagWithDot label="Tag" />
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
        />
      </>
    }
  />
</Textarea>
`;

const WithTagsInvalid = () => {
  return (
    <TextareaShowcaseFrame code={withTagsInvalidCode}>
      <TextareaWithTagsHelper isInvalid />
    </TextareaShowcaseFrame>
  );
};

const withTagsDisabledCode = `
<Textarea
  isDisabled
  label="Recipients"
  textareaProps={{ placeholder: "Write an email...", rows: 4 }}
>
  <TextareaBoxWithTags
    tagSlots={
      <>
        <TextareaBoxTag label="Tag" />
        <TextareaBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />
        <TextareaBoxTagWithDot label="Tag" />
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
        />
      </>
    }
  />
</Textarea>
`;

const WithTagsDisabled = () => {
  return (
    <TextareaShowcaseFrame code={withTagsDisabledCode}>
      <TextareaWithTagsHelper isDisabled />
    </TextareaShowcaseFrame>
  );
};

const withTagsSizesCode = `
<Textarea
  size="sm"
  label="Recipients"
  textareaProps={{ placeholder: "Write an email...", rows: 4 }}
>
  <TextareaBoxWithTags
    tagSlots={
      <>
        <TextareaBoxTag label="Tag" />
        <TextareaBoxTagWithIcon icon={(className) => <Atom className={className} />} label="Tag" />
        <TextareaBoxTagWithDot label="Tag" />
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
        />
      </>
    }
  />
</Textarea>
`;

const WithTagsSizes = () => {
  return (
    <TextareaShowcaseFrame code={withTagsSizesCode}>
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
