import { VariantsGrid } from "../../../_utils";
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
import { Atom, IconPencil } from "../../../assets/Icons";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsColumn, VariantsRow } from "../../../docs/docs.components";
import { Code } from "../../no-headless/typography/Typography.atoms";
import { avatar1Src, avatar2Src, avatar3Src } from "../../../assets/images/Images";

export const ImageAvatarHelper = (props: Omit<AvatarProps, "contentSlot">) => {
  return (
    <Avatar
      {...props}
      contentSlot={
        <AvatarContent
          imageProps={{
            src: avatar1Src,
            alt: "Avatar 1",
          }}
        />
      }
    />
  );
};

export const TextAvatarHelper = (props: Omit<AvatarProps, "contentSlot">) => {
  return <Avatar {...props} contentSlot={<AvatarContent fallbackText="A" />} />;
};

export const IconAvatarHelper = (props: Omit<AvatarProps, "contentSlot">) => {
  return (
    <Avatar
      {...props}
      contentSlot={<AvatarContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />}
    />
  );
};

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <ImageAvatarHelper />
    </ShowcaseFrame>
  );
};

const SizesExample = () => {
  return (
    <ShowcaseFrame>
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
              contentSlot: (
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
              contentSlot: <AvatarContent fallbackText="S" />,
            },
            {
              contentSlot: <AvatarContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />,
            },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const WithActionExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <ImageAvatarHelper actionSlot={<AvatarAction icon={(className) => <IconPencil className={className} />} />} />
        <TextAvatarHelper actionSlot={<AvatarAction icon={(className) => <IconPencil className={className} />} />} />
        <IconAvatarHelper actionSlot={<AvatarAction icon={(className) => <IconPencil className={className} />} />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithIndicatorExample = () => {
  return (
    <ShowcaseFrame>
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

const WithStatusExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <ImageAvatarHelper statusSlot={<AvatarStatus status="online" />} />
        <TextAvatarHelper statusSlot={<AvatarStatus status="offline" />} />
        <ImageAvatarHelper statusSlot={<AvatarStatus status="away" />} />
        <IconAvatarHelper statusSlot={<AvatarStatus status="busy" />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithBadgeExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <ImageAvatarHelper badgeSlot={<AvatarBadge label="Live" color="primary" />} />
        <TextAvatarHelper badgeSlot={<AvatarBadge label="Live" color="red" />} />
        <ImageAvatarHelper badgeSlot={<AvatarBadge label="Live" color="green" />} />
        <IconAvatarHelper badgeSlot={<AvatarBadge label="Live" color="base" />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithNotificationExample = () => {
  return (
    <ShowcaseFrame>
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
    >
      <Section title="Showcase">
        <Example title="Default" description="The avatar with the default props.">
          <DefaultExample />
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
