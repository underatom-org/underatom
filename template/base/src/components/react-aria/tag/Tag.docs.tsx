import { Atom } from "phosphor-react";
import { Tag, TagAvatar, TagAvatarWithIcon, TagWithAvatar, TagWithDot, TagWithIcon } from "./Tag.atoms";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsRow } from "../../../docs/docs.components";
import { avatar1Src } from "../../../assets/images/Images";

const defaultCode = `
<Tag>Tag</Tag>
`;

const Default = () => {
  return (
    <ShowcaseFrame>
      <Tag>Tag</Tag>
    </ShowcaseFrame>
  );
};

const dismissibleCode = `
<Tag onDismiss={() => console.log("dismissed")}>Tag</Tag>
`;

const Dismissible = () => {
  return (
    <ShowcaseFrame code={dismissibleCode}>
      <Tag onDismiss={() => console.log("dismissed")}>Tag</Tag>
    </ShowcaseFrame>
  );
};

const sizesCode = `
<Tag size="sm">Tag</Tag>
<Tag size="md">Tag</Tag>
<Tag size="lg">Tag</Tag>
`;

const Sizes = () => {
  return (
    <ShowcaseFrame code={sizesCode}>
      <VariantsRow>
        <Tag size="sm">Tag</Tag>
        <Tag size="md">Tag</Tag>
        <Tag size="lg">Tag</Tag>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const withDotCode = `
<TagWithDot dotColor="primary">Tag</TagWithDot>
<TagWithDot dotColor="base">Tag</TagWithDot>
<TagWithDot dotColor="green">Tag</TagWithDot>
<TagWithDot dotColor="red">Tag</TagWithDot>
`;

const WithDot = () => {
  return (
    <ShowcaseFrame code={withDotCode}>
      <VariantsRow>
        <TagWithDot dotColor="primary">Tag</TagWithDot>
        <TagWithDot dotColor="base">Tag</TagWithDot>
        <TagWithDot dotColor="green">Tag</TagWithDot>
        <TagWithDot dotColor="red">Tag</TagWithDot>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const withIconCode = `
<TagWithIcon icon={(className) => <Atom className={className} />}>
  Tag
</TagWithIcon>
`;

const WithIcon = () => {
  return (
    <ShowcaseFrame code={withIconCode}>
      <TagWithIcon icon={(className) => <Atom className={className} />}>Tag</TagWithIcon>
    </ShowcaseFrame>
  );
};

const withAvatarCode = `
<TagWithAvatar avatarSlot={<TagAvatar imageProps={{ src: avatar1Src, alt: "Avatar" }} />}>
  Tag
</TagWithAvatar>

<TagWithAvatar avatarSlot={<TagAvatar fallbackText="C" />}>Tag</TagWithAvatar>

<TagWithAvatar
  avatarSlot={
    <TagAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />
  }
>
  Tag
</TagWithAvatar>
`;

const WithAvatar = () => {
  return (
    <ShowcaseFrame code={withAvatarCode}>
      <VariantsRow>
        <TagWithAvatar avatarSlot={<TagAvatar imageProps={{ src: avatar1Src, alt: "Avatar" }} />}>Tag</TagWithAvatar>
        <TagWithAvatar avatarSlot={<TagAvatar fallbackText="C" />}>Tag</TagWithAvatar>
        <TagWithAvatar avatarSlot={<TagAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />}>
          Tag
        </TagWithAvatar>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const TagDocs = () => {
  return (
    <Page
      title="Tag"
      subtitle="Tag component"
      command="npx underatom@latest add tag"
      usageCode={defaultCode}
      defaultExample={<Default />}
    >
      <Section title="Showcase">
        <Example title="Dismissible">
          <Dismissible />
        </Example>
        <Example title="Sizes">
          <Sizes />
        </Example>
      </Section>
      <Section title="Atoms">
        <Example title="With Dot">
          <WithDot />
        </Example>
        <Example title="With Icon">
          <WithIcon />
        </Example>
        <Example title="With Avatar">
          <WithAvatar />
        </Example>
      </Section>
    </Page>
  );
};

const tagRoute = "/tag";
export const tagRouteObj: DocsRoute<typeof tagRoute> = {
  path: tagRoute,
  group: "react-aria",
  label: "Tag",
  component: TagDocs,
};
