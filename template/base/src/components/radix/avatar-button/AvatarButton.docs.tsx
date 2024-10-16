import {
  AvatarButton,
  AvatarButtonBadge,
  AvatarButtonContent,
  AvatarButtonContentWithIcon,
  AvatarButtonIndicator,
  AvatarButtonIndicatorWithIcon,
  AvatarButtonNotification,
  AvatarButtonProps,
  AvatarButtonStatus,
} from "./AvatarButton.atoms";
import { Atom } from "../../../assets/Icons";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsGrid, VariantsRow } from "../../../docs/docs.components";
import { avatar1Src } from "../../../assets/images/Images";

export const AvatarButtonWithContent = (props: Omit<AvatarButtonProps, "contentSlot">) => {
  return (
    <AvatarButton
      {...props}
      contentSlot={
        <AvatarButtonContent
          imageProps={{
            src: avatar1Src,
            alt: "Avatar",
          }}
        />
      }
    />
  );
};

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <AvatarButtonWithContent />
    </ShowcaseFrame>
  );
};

const SizesExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<AvatarButtonProps>
        renderVariant={(props) => (
          <div style={{ display: "flex" }}>
            <AvatarButton {...props} />
          </div>
        )}
        variantPropsMap={[
          [{ size: "sm" }, { size: "md" }, { size: "lg" }, { size: "xl" }],
          [
            {
              contentSlot: (
                <AvatarButtonContent
                  imageProps={{
                    src: avatar1Src,
                    alt: "Avatar",
                  }}
                  fallbackText="AV"
                />
              ),
            },
            {
              contentSlot: <AvatarButtonContent fallbackText="S" />,
            },
            {
              contentSlot: <AvatarButtonContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />,
            },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};
const DisabledExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <AvatarButton
          contentSlot={
            <AvatarButtonContent
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
              fallbackText="AV"
            />
          }
          isDisabled
        />
        <AvatarButton contentSlot={<AvatarButtonContent fallbackText="S" />} isDisabled />
        <AvatarButton
          contentSlot={<AvatarButtonContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />}
          isDisabled
        />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithIndicatorExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <AvatarButtonWithContent
          indicatorSlot={
            <AvatarButtonIndicator
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
            />
          }
        />
        <AvatarButtonWithContent
          indicatorSlot={<AvatarButtonIndicatorWithIcon icon={(className) => <Atom className={className} />} />}
        />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithStatusExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <AvatarButtonWithContent statusSlot={<AvatarButtonStatus status="online" />} />
        <AvatarButtonWithContent statusSlot={<AvatarButtonStatus status="offline" />} />
        <AvatarButtonWithContent statusSlot={<AvatarButtonStatus status="away" />} />
        <AvatarButtonWithContent statusSlot={<AvatarButtonStatus status="busy" />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithBadgeExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <AvatarButtonWithContent badgeSlot={<AvatarButtonBadge label="Live" color="primary" />} />
        <AvatarButtonWithContent badgeSlot={<AvatarButtonBadge label="Live" color="red" />} />
        <AvatarButtonWithContent badgeSlot={<AvatarButtonBadge label="Live" color="green" />} />
        <AvatarButtonWithContent badgeSlot={<AvatarButtonBadge label="Live" color="base" />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithNotificationExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <AvatarButtonWithContent notificationSlot={<AvatarButtonNotification counterText="4" color="primary" />} />
        <AvatarButtonWithContent notificationSlot={<AvatarButtonNotification counterText="4" color="red" />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithIconExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <AvatarButton
          contentSlot={
            <AvatarButtonContent
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
              fallbackText="AV"
            />
          }
        />
        <AvatarButton
          contentSlot={<AvatarButtonContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />}
        />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithTextExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <AvatarButton
          contentSlot={
            <AvatarButtonContent
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
              fallbackText="AV"
            />
          }
        />
        <AvatarButton contentSlot={<AvatarButtonContent fallbackText="AV" />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const AvatarButtonDocs = () => (
  <>
    <Page title="AvatarButton" subtitle="Subtitle" command="npx underatom@latest add avatar-button">
      <Section title="Showcase">
        <Example title="Default">
          <DefaultExample />
        </Example>
        <Example title="Sizes">
          <SizesExample />
        </Example>
        <Example title="Disabled">
          <DisabledExample />
        </Example>
        <Example title="Indicator">
          <WithIndicatorExample />
        </Example>
        <Example title="Status">
          <WithStatusExample />
        </Example>
        <Example title="Badge">
          <WithBadgeExample />
        </Example>
        <Example title="Notification">
          <WithNotificationExample />
        </Example>
      </Section>
      <Section title="Atoms">
        <Example title="With Icon">
          <WithIconExample />
        </Example>
        <Example title="With Text">
          <WithTextExample />
        </Example>
      </Section>
    </Page>
  </>
);

const avatarButtonRoute = "/avatar-button";
export const avatarButtonRouteObj: DocsRoute<typeof avatarButtonRoute> = {
  path: avatarButtonRoute,
  group: "radix",
  label: "AvatarButton",
  component: AvatarButtonDocs,
};
