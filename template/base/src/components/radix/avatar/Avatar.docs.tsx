import {
  Avatar,
  AvatarAction,
  AvatarBadge,
  AvatarContent,
  AvatarContentWithIcon,
  AvatarIndicator,
  AvatarIndicatorWithIcon,
  AvatarNotification,
  AvatarProps,
  AvatarStatus,
} from "./Avatar.atoms";
import { Atom } from "../../../assets/Icons";
import { DocsRoute } from "../../../docs/docs.types";
import {
  Example,
  Page,
  Section,
  ShowcaseFrame,
  VariantsColumn,
  VariantsGrid,
  VariantsRow,
} from "../../../docs/docs.components";
import { Code } from "../../no-headless/typography/Typography.atoms";
import { avatar1Src, avatar2Src, avatar3Src } from "../../../assets/images/Images";

export const ImageAvatarHelper = (props: Omit<AvatarProps, "children">) => {
  return (
    <Avatar {...props}>
      <AvatarContent
        imageProps={{
          src: avatar1Src,
          alt: "Avatar 1",
        }}
      />
    </Avatar>
  );
};

export const TextAvatarHelper = (props: Omit<AvatarProps, "children">) => {
  return (
    <Avatar {...props}>
      <AvatarContent fallbackText="A" />
    </Avatar>
  );
};

export const IconAvatarHelper = (props: Omit<AvatarProps, "children">) => {
  return (
    <Avatar {...props}>
      <AvatarContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />
    </Avatar>
  );
};

const defaultCode = `
<Avatar>
  <AvatarContent imageProps={{ src: "", alt: "" }} />
</Avatar>
`;

const DefaultExample = () => {
  return (
    <ShowcaseFrame code={defaultCode}>
      <ImageAvatarHelper />
    </ShowcaseFrame>
  );
};

const variantsCode = `
<Avatar>
  <AvatarContent fallbackText="A" />
</Avatar>

<Avatar>
  <AvatarContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />
</Avatar>
`;

const VariantsExample = () => {
  return (
    <ShowcaseFrame code={variantsCode}>
      <VariantsRow>
        <TextAvatarHelper />
        <IconAvatarHelper />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const sizesCode = `
<Avatar size="sm">
  <AvatarContent imageProps={{ src: "", alt: "" }} />
</Avatar>
`;

const SizesExample = () => {
  return (
    <ShowcaseFrame code={sizesCode}>
      <VariantsGrid<AvatarProps>
        renderVariant={(props) => (
          <div style={{ display: "flex" }}>
            <Avatar {...props} />
          </div>
        )}
        variantPropsMap={[
          [{ size: "sm" }, { size: "md" }, { size: "lg" }, { size: "xl" }],
          [
            {
              children: (
                <AvatarContent
                  imageProps={{
                    src: avatar2Src,
                    alt: "Avatar 2",
                  }}
                  fallbackText="AV"
                />
              ),
            },
            {
              children: <AvatarContent fallbackText="S" />,
            },
            {
              children: <AvatarContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />,
            },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const withActionCode = `
<Avatar
  actionSlot={<AvatarAction icon={(className) => <AtomIcon className={className} />} />}
>
  <AvatarContent imageProps={{ src: "", alt: "" }} />
</Avatar>
`;

const WithActionExample = () => {
  return (
    <ShowcaseFrame code={withActionCode}>
      <VariantsRow>
        <ImageAvatarHelper actionSlot={<AvatarAction icon={(className) => <Atom className={className} />} />} />
        <TextAvatarHelper actionSlot={<AvatarAction icon={(className) => <Atom className={className} />} />} />
        <IconAvatarHelper actionSlot={<AvatarAction icon={(className) => <Atom className={className} />} />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const withIndicatorCode = `
<Avatar
  indicatorSlot={<AvatarIndicator imageProps={{ src: "", alt: "" }} />}
>
  <AvatarContent imageProps={{ src: "", alt: "" }} />
</Avatar>

<Avatar
  indicatorSlot={<AvatarIndicatorWithIcon icon={(className) => <AtomIcon className={className} />} />}
>
  <AvatarContent imageProps={{ src: "", alt: "" }} />
</Avatar>
`;

const WithIndicatorExample = () => {
  return (
    <ShowcaseFrame code={withIndicatorCode}>
      <VariantsColumn>
        <VariantsRow>
          <ImageAvatarHelper
            indicatorSlot={
              <AvatarIndicator
                imageProps={{
                  src: avatar3Src,
                  alt: "Avatar 3",
                }}
              />
            }
          />
          <ImageAvatarHelper
            indicatorSlot={<AvatarIndicatorWithIcon icon={(className) => <Atom className={className} />} />}
          />
        </VariantsRow>
        <VariantsRow>
          <IconAvatarHelper
            indicatorSlot={
              <AvatarIndicator
                imageProps={{
                  src: avatar3Src,
                  alt: "Avatar 3",
                }}
              />
            }
          />
          <TextAvatarHelper
            indicatorSlot={<AvatarIndicatorWithIcon icon={(className) => <Atom className={className} />} />}
          />
        </VariantsRow>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const withStatusCode = `
<Avatar
  statusSlot={<AvatarStatus status="online" />}
>
  <AvatarContent imageProps={{ src: "", alt: "" }} />
</Avatar>
`;

const WithStatusExample = () => {
  return (
    <ShowcaseFrame code={withStatusCode}>
      <VariantsRow>
        <ImageAvatarHelper statusSlot={<AvatarStatus status="online" />} />
        <TextAvatarHelper statusSlot={<AvatarStatus status="offline" />} />
        <ImageAvatarHelper statusSlot={<AvatarStatus status="away" />} />
        <IconAvatarHelper statusSlot={<AvatarStatus status="busy" />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const withBadgeCode = `
<Avatar
  badgeSlot={<AvatarBadge label="Live" color="primary" />}
>
  <AvatarContent imageProps={{ src: "", alt: "" }} />
</Avatar>
`;

const WithBadgeExample = () => {
  return (
    <ShowcaseFrame code={withBadgeCode}>
      <VariantsRow>
        <ImageAvatarHelper badgeSlot={<AvatarBadge label="Live" color="primary" />} />
        <TextAvatarHelper badgeSlot={<AvatarBadge label="Live" color="red" />} />
        <ImageAvatarHelper badgeSlot={<AvatarBadge label="Live" color="green" />} />
        <IconAvatarHelper badgeSlot={<AvatarBadge label="Live" color="base" />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const withNotificationCode = `
<Avatar
  notificationSlot={<AvatarNotification counterText="4" color="primary" />}
>
  <AvatarContent imageProps={{ src: "", alt: "" }} />
</Avatar>
`;

const WithNotificationExample = () => {
  return (
    <ShowcaseFrame code={withNotificationCode}>
      <VariantsColumn>
        <VariantsRow>
          <ImageAvatarHelper notificationSlot={<AvatarNotification counterText="4" color="primary" />} />
          <ImageAvatarHelper notificationSlot={<AvatarNotification counterText="4" color="red" />} />
        </VariantsRow>
        <VariantsRow>
          <IconAvatarHelper notificationSlot={<AvatarNotification counterText="4" color="primary" />} />
          <TextAvatarHelper notificationSlot={<AvatarNotification counterText="4" color="red" />} />
        </VariantsRow>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const AvatarDocs = () => {
  return (
    <Page
      title="Avatar"
      subtitle={
        <>
          Composable avatar component based on the Radix <Code>Avatar</Code>.
        </>
      }
      command="npx underatom@latest add avatar"
    >
      <Section title="Showcase">
        <Example title="Default" description="The avatar with the default props.">
          <DefaultExample />
        </Example>
        <Example title="Variants" description="Avatar with only text or icon.">
          <VariantsExample />
        </Example>
        <Example
          title="Sizes"
          description={
            <>
              4 sizes are available: <Code>sm</Code>, <Code>md</Code>, <Code>lg</Code> and <Code>xl</Code>.
            </>
          }
        >
          <SizesExample />
        </Example>
        <Example title="Action" description="Avatar with pressable action.">
          <WithActionExample />
        </Example>
        <Example title="Indicator" description="Avatar with image/icon indicator.">
          <WithIndicatorExample />
        </Example>
        <Example
          title="Status"
          description={
            <>
              Avatar with status indicator. Comes with 4 statuses: <Code>online</Code>, <Code>offline</Code>,{" "}
              <Code>away</Code> and <Code>busy</Code>.
            </>
          }
        >
          <WithStatusExample />
        </Example>
        <Example
          title="Badge"
          description={
            <>
              Avatar with badge. Comes in 4 colors: <Code>primary</Code>, <Code>red</Code>, <Code>green</Code> and{" "}
              <Code>base</Code>.
            </>
          }
        >
          <WithBadgeExample />
        </Example>
        <Example
          title="Notification"
          description={
            <>
              Avatar with notification counter. Comes in 2 colors: <Code>primary</Code> and <Code>red</Code>.
            </>
          }
        >
          <WithNotificationExample />
        </Example>
      </Section>
    </Page>
  );
};

const avatarRoute = "/avatar";
export const avatarRouteObj: DocsRoute<typeof avatarRoute> = {
  path: avatarRoute,
  group: "radix",
  label: "Avatar",
  component: AvatarDocs,
};
