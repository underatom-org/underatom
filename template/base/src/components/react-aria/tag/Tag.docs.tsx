import { Atom } from "phosphor-react";
import { Tag, TagAvatar, TagAvatarWithIcon, TagWithAvatar, TagWithDot, TagWithIcon } from "./Tag.atoms";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsRow } from "../../../docs/docs.components";
import { avatar1Src } from "../../../assets/images/Images";

const Default = () => {
  return (
    <ShowcaseFrame>
      <Tag>Tag</Tag>
    </ShowcaseFrame>
  );
};

const Dismissible = () => {
  return (
    <ShowcaseFrame>
      <Tag onDismiss={() => console.log("dismissed")}>Tag</Tag>
    </ShowcaseFrame>
  );
};

const Sizes = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <Tag size="sm">Tag</Tag>
        <Tag size="md">Tag</Tag>
        <Tag size="lg">Tag</Tag>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithDot = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <TagWithDot dotColor="primary">Tag</TagWithDot>
        <TagWithDot dotColor="base">Tag</TagWithDot>
        <TagWithDot dotColor="green">Tag</TagWithDot>
        <TagWithDot dotColor="red">Tag</TagWithDot>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithIcon = () => {
  return (
    <ShowcaseFrame>
      <TagWithIcon icon={(className) => <Atom className={className} />}>Tag</TagWithIcon>
    </ShowcaseFrame>
  );
};

const WithAvatar = () => {
  return (
    <ShowcaseFrame>
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
    <Page title="Tag" subtitle="Tag component">
      <Example title="Default">
        <Default />
      </Example>
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
