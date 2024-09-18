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

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <AvatarGroup
        avatarSlots={[
          <AvatarGroupAvatar
            imageProps={{
              src: avatar1Src,
              alt: "Avatar 1",
            }}
          />,
          <AvatarGroupAvatar
            imageProps={{
              src: avatar2Src,
              alt: "Avatar 2",
            }}
          />,
          <AvatarGroupAvatar
            imageProps={{
              src: avatar3Src,
              alt: "Avatar 3",
            }}
          />,
        ]}
      />
    </ShowcaseFrame>
  );
};

const AvatarsWithTextExample = () => {
  return (
    <ShowcaseFrame>
      <AvatarGroup
        avatarSlots={[
          <AvatarGroupAvatar fallbackText="AV" />,
          <AvatarGroupAvatar fallbackText="SI" />,
          <AvatarGroupAvatar fallbackText="JK" />,
        ]}
      />
    </ShowcaseFrame>
  );
};

const AvatarsWithIconExample = () => {
  return (
    <ShowcaseFrame>
      <AvatarGroup
        avatarSlots={[
          <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />,
          <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />,
          <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />,
        ]}
      />
    </ShowcaseFrame>
  );
};

const AvatarsCombinedExample = () => {
  return (
    <ShowcaseFrame>
      <AvatarGroup
        avatarSlots={[
          <AvatarGroupAvatar
            imageProps={{
              src: avatar1Src,
              alt: "Avatar",
            }}
          />,
          <AvatarGroupAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />,
          <AvatarGroupAvatar fallbackText="JK" />,
        ]}
      />
    </ShowcaseFrame>
  );
};

const WithActionExample = () => {
  return (
    <ShowcaseFrame>
      <AvatarGroup
        avatarSlots={[
          <AvatarGroupAvatar
            imageProps={{
              src: avatar1Src,
              alt: "Avatar 1",
            }}
          />,
          <AvatarGroupAvatar
            imageProps={{
              src: avatar2Src,
              alt: "Avatar 2",
            }}
          />,
          <AvatarGroupAvatar
            imageProps={{
              src: avatar3Src,
              alt: "Avatar 3",
            }}
          />,
        ]}
        actionSlot={<AvatarGroupAction icon={(className) => <X className={className} />} />}
      />
    </ShowcaseFrame>
  );
};

const WithInfoExample = () => {
  return (
    <ShowcaseFrame>
      <AvatarGroup
        avatarSlots={[
          <AvatarGroupAvatar imageProps={{ src: avatar1Src, alt: "Avatar 1" }} />,
          <AvatarGroupAvatar imageProps={{ src: avatar2Src, alt: "Avatar 2" }} />,
          <AvatarGroupAvatar imageProps={{ src: avatar3Src, alt: "Avatar 3" }} />,
        ]}
        infoSlot={<AvatarGroupInfo label="+3" />}
      />
    </ShowcaseFrame>
  );
};

const Sizes = () => {
  return (
    <ShowcaseFrame>
      <VariantsColumn>
        <AvatarGroup
          size="sm"
          avatarSlots={[
            <AvatarGroupAvatar
              imageProps={{
                src: avatar1Src,
                alt: "Avatar 1",
              }}
            />,
            <AvatarGroupAvatar
              imageProps={{
                src: avatar2Src,
                alt: "Avatar 2",
              }}
            />,
            <AvatarGroupAvatar
              imageProps={{
                src: avatar3Src,
                alt: "Avatar 3",
              }}
            />,
          ]}
        />
        <AvatarGroup
          size="md"
          avatarSlots={[
            <AvatarGroupAvatar
              imageProps={{
                src: avatar1Src,
                alt: "Avatar 1",
              }}
            />,
            <AvatarGroupAvatar
              imageProps={{
                src: avatar2Src,
                alt: "Avatar 2",
              }}
            />,
            <AvatarGroupAvatar
              imageProps={{
                src: avatar3Src,
                alt: "Avatar 3",
              }}
            />,
          ]}
        />
        <AvatarGroup
          size="lg"
          avatarSlots={[
            <AvatarGroupAvatar
              imageProps={{
                src: avatar1Src,
                alt: "Avatar 1",
              }}
            />,
            <AvatarGroupAvatar
              imageProps={{
                src: avatar2Src,
                alt: "Avatar 2",
              }}
            />,
            <AvatarGroupAvatar
              imageProps={{
                src: avatar3Src,
                alt: "Avatar 3",
              }}
            />,
          ]}
        />
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const AvatarGroupDocs = () => {
  return (
    <Page title="AvatarGroup" subtitle="Subtitle">
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
