import {
  AvatarGroup,
  AvatarGroupAction,
  AvatarGroupInfo,
  AvatarGroupAvatar,
  AvatarGroupAvatarWithIcon,
} from "./AvatarGroup.atoms";
import { Atom, X } from "../../../assets/Icons";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsColumn } from "../../../docs/docs.components";
import { avatar1Src, avatar2Src, avatar3Src } from "../../../assets/images/Images";

const defaultCode = `
<AvatarGroup>
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
</AvatarGroup>
`;

const DefaultExample = () => {
  return (
    <ShowcaseFrame code={defaultCode}>
      <AvatarGroup>
        <AvatarGroupAvatar
          imageProps={{
            src: avatar1Src,
            alt: "Avatar 1",
          }}
        />
        <AvatarGroupAvatar
          imageProps={{
            src: avatar2Src,
            alt: "Avatar 2",
          }}
        />
        <AvatarGroupAvatar
          imageProps={{
            src: avatar3Src,
            alt: "Avatar 3",
          }}
        />
      </AvatarGroup>
    </ShowcaseFrame>
  );
};

const avatarsWithTextCode = `
<AvatarGroup>
  <AvatarGroupAvatar fallbackText="AV" />
  <AvatarGroupAvatar fallbackText="SI" />
  <AvatarGroupAvatar fallbackText="JK" />
</AvatarGroup>
`;

const AvatarsWithTextExample = () => {
  return (
    <ShowcaseFrame code={avatarsWithTextCode}>
      <AvatarGroup>
        <AvatarGroupAvatar fallbackText="AV" />
        <AvatarGroupAvatar fallbackText="SI" />
        <AvatarGroupAvatar fallbackText="JK" />
      </AvatarGroup>
    </ShowcaseFrame>
  );
};

const avatarsWithIconCode = `
<AvatarGroup>
  <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <AtomIcon className={className} />} />
  <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <AtomIcon className={className} />} />
  <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <AtomIcon className={className} />} />
</AvatarGroup>
`;

const AvatarsWithIconExample = () => {
  return (
    <ShowcaseFrame code={avatarsWithIconCode}>
      <AvatarGroup>
        <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />
        <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />
        <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />
      </AvatarGroup>
    </ShowcaseFrame>
  );
};

const avatarsCombinedCode = `
<AvatarGroup>
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
  <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <AtomIcon className={className} />} />
  <AvatarGroupAvatar fallbackText="JK" />
</AvatarGroup>
`;

const AvatarsCombinedExample = () => {
  return (
    <ShowcaseFrame code={avatarsCombinedCode}>
      <AvatarGroup>
        <AvatarGroupAvatar
          imageProps={{
            src: avatar1Src,
            alt: "Avatar",
          }}
        />
        <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />
        <AvatarGroupAvatar fallbackText="JK" />
      </AvatarGroup>
    </ShowcaseFrame>
  );
};

const withActionCode = `
<AvatarGroup
  actionSlot={<AvatarGroupAction icon={(className) => <X className={className} />} />}
>
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
</AvatarGroup>
`;

const WithActionExample = () => {
  return (
    <ShowcaseFrame code={withActionCode}>
      <AvatarGroup actionSlot={<AvatarGroupAction icon={(className) => <X className={className} />} />}>
        <AvatarGroupAvatar
          imageProps={{
            src: avatar1Src,
            alt: "Avatar 1",
          }}
        />
        <AvatarGroupAvatar
          imageProps={{
            src: avatar2Src,
            alt: "Avatar 2",
          }}
        />
        <AvatarGroupAvatar
          imageProps={{
            src: avatar3Src,
            alt: "Avatar 3",
          }}
        />
      </AvatarGroup>
    </ShowcaseFrame>
  );
};

const withInfoCode = `
<AvatarGroup infoSlot={<AvatarGroupInfo label="+3" />}>
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
</AvatarGroup>
`;

const WithInfoExample = () => {
  return (
    <ShowcaseFrame code={withInfoCode}>
      <AvatarGroup infoSlot={<AvatarGroupInfo label="+3" />}>
        <AvatarGroupAvatar imageProps={{ src: avatar1Src, alt: "Avatar 1" }} />
        <AvatarGroupAvatar imageProps={{ src: avatar2Src, alt: "Avatar 2" }} />
        <AvatarGroupAvatar imageProps={{ src: avatar3Src, alt: "Avatar 3" }} />
      </AvatarGroup>
    </ShowcaseFrame>
  );
};

const sizesCode = `
<AvatarGroup size="sm">
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
  <AvatarGroupAvatar imageProps={{ src: "", alt: "" }} />
</AvatarGroup>
`;

const Sizes = () => {
  return (
    <ShowcaseFrame code={sizesCode}>
      <VariantsColumn>
        <AvatarGroup size="sm">
          <AvatarGroupAvatar
            imageProps={{
              src: avatar1Src,
              alt: "Avatar 1",
            }}
          />
          <AvatarGroupAvatar
            imageProps={{
              src: avatar2Src,
              alt: "Avatar 2",
            }}
          />
          <AvatarGroupAvatar
            imageProps={{
              src: avatar3Src,
              alt: "Avatar 3",
            }}
          />
        </AvatarGroup>
        <AvatarGroup size="md">
          <AvatarGroupAvatar
            imageProps={{
              src: avatar1Src,
              alt: "Avatar 1",
            }}
          />
          <AvatarGroupAvatar
            imageProps={{
              src: avatar2Src,
              alt: "Avatar 2",
            }}
          />
          <AvatarGroupAvatar
            imageProps={{
              src: avatar3Src,
              alt: "Avatar 3",
            }}
          />
        </AvatarGroup>
        <AvatarGroup size="lg">
          <AvatarGroupAvatar
            imageProps={{
              src: avatar1Src,
              alt: "Avatar 1",
            }}
          />
          <AvatarGroupAvatar
            imageProps={{
              src: avatar2Src,
              alt: "Avatar 2",
            }}
          />
          <AvatarGroupAvatar
            imageProps={{
              src: avatar3Src,
              alt: "Avatar 3",
            }}
          />
        </AvatarGroup>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const AvatarGroupDocs = () => {
  return (
    <Page title="AvatarGroup" subtitle="Subtitle" command="npx underatom@latest add avatar-group">
      <Section title="Showcase">
        <Example title="Default">
          <DefaultExample />
        </Example>
        <Example title="Sizes">
          <Sizes />
        </Example>
        <Example title="Avatars with Text">
          <AvatarsWithTextExample />
        </Example>
        <Example title="Avatars with Icon">
          <AvatarsWithIconExample />
        </Example>
        <Example title="Multiple avatars">
          <AvatarsCombinedExample />
        </Example>
      </Section>
      <Section title="Atoms">
        <Example title="With Info">
          <WithInfoExample />
        </Example>
        <Example title="With Action">
          <WithActionExample />
        </Example>
      </Section>
    </Page>
  );
};

const avatarGroupRoute = "/avatar-group";
export const avatarGroupRouteObj: DocsRoute<typeof avatarGroupRoute> = {
  path: avatarGroupRoute,
  group: "radix",
  label: "AvatarGroup",
  component: AvatarGroupDocs,
};
