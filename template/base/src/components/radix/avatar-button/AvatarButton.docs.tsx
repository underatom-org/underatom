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

export const AvatarButtonWithContent = (props: Omit<AvatarButtonProps, "children">) => {
  return (
    <AvatarButton {...props}>
      <AvatarButtonContent
        imageProps={{
          src: avatar1Src,
          alt: "Avatar",
        }}
      />
    </AvatarButton>
  );
};

const defaultCode = `
<AvatarButton>
  <AvatarButtonContent imageProps={{ src: "", alt: "" }} />
</AvatarButton>
`;

const DefaultExample = () => {
  return (
    <ShowcaseFrame code={defaultCode}>
      <AvatarButtonWithContent />
    </ShowcaseFrame>
  );
};

const variantsCode = `
<AvatarButton>
  <AvatarButtonContent fallbackText="S" />
</AvatarButton>

<AvatarButton>
  <AvatarButtonContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />
</AvatarButton>
`;

const VariantsExample = () => {
  return (
    <ShowcaseFrame code={variantsCode}>
      <VariantsRow>
        <AvatarButton>
          <AvatarButtonContent fallbackText="S" />
        </AvatarButton>
        <AvatarButton>
          <AvatarButtonContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />
        </AvatarButton>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const sizesCode = `
<AvatarButton size="sm">
  <AvatarButtonContent imageProps={{ src: "", alt: "" }} />
</AvatarButton>
`;

const SizesExample = () => {
  return (
    <ShowcaseFrame code={sizesCode}>
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
              children: (
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
              children: <AvatarButtonContent fallbackText="S" />,
            },
            {
              children: <AvatarButtonContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />,
            },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const disabledCode = `
<AvatarButton isDisabled>
  <AvatarButtonContent imageProps={{ src: "", alt: "" }} />
</AvatarButton>
`;

const DisabledExample = () => {
  return (
    <ShowcaseFrame code={disabledCode}>
      <VariantsRow>
        <AvatarButton isDisabled>
          <AvatarButtonContent
            imageProps={{
              src: avatar1Src,
              alt: "Avatar",
            }}
            fallbackText="AV"
          />
        </AvatarButton>
        <AvatarButton isDisabled>
          <AvatarButtonContent fallbackText="S" />
        </AvatarButton>
        <AvatarButton isDisabled>
          <AvatarButtonContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />
        </AvatarButton>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const withIndicatorCode = `
<AvatarButton
  indicatorSlot={<AvatarButtonIndicator imageProps={{ src: "", alt: "" }} />}
>
  <AvatarButtonContent imageProps={{ src: "", alt: "" }} />
</AvatarButton>

<AvatarButton
  indicatorSlot={<AvatarButtonIndicatorWithIcon icon={(className) => <AtomIcon className={className} />} />}
>
  <AvatarButtonContent imageProps={{ src: "", alt: "" }} />
</AvatarButton>
`;

const WithIndicatorExample = () => {
  return (
    <ShowcaseFrame code={withIndicatorCode}>
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

const withStatusCode = `
<AvatarButton
  statusSlot={<AvatarButtonStatus status="online" />}
>
  <AvatarButtonContent imageProps={{ src: "", alt: "" }} />
</AvatarButton>
`;

const WithStatusExample = () => {
  return (
    <ShowcaseFrame code={withStatusCode}>
      <VariantsRow>
        <AvatarButtonWithContent statusSlot={<AvatarButtonStatus status="online" />} />
        <AvatarButtonWithContent statusSlot={<AvatarButtonStatus status="offline" />} />
        <AvatarButtonWithContent statusSlot={<AvatarButtonStatus status="away" />} />
        <AvatarButtonWithContent statusSlot={<AvatarButtonStatus status="busy" />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const withBadgeCode = `
<AvatarButton
  badgeSlot={<AvatarButtonBadge label="Live" color="primary" />}
>
  <AvatarButtonContent imageProps={{ src: "", alt: "" }} />
</AvatarButton>
`;

const WithBadgeExample = () => {
  return (
    <ShowcaseFrame code={withBadgeCode}>
      <VariantsRow>
        <AvatarButtonWithContent badgeSlot={<AvatarButtonBadge label="Live" color="primary" />} />
        <AvatarButtonWithContent badgeSlot={<AvatarButtonBadge label="Live" color="red" />} />
        <AvatarButtonWithContent badgeSlot={<AvatarButtonBadge label="Live" color="green" />} />
        <AvatarButtonWithContent badgeSlot={<AvatarButtonBadge label="Live" color="base" />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const withNotificationCode = `
<AvatarButton
  notificationSlot={<AvatarButtonNotification counterText="4" color="primary" />}
>
  <AvatarButtonContent imageProps={{ src: "", alt: "" }} />
</AvatarButton>
`;

const WithNotificationExample = () => {
  return (
    <ShowcaseFrame code={withNotificationCode}>
      <VariantsRow>
        <AvatarButtonWithContent notificationSlot={<AvatarButtonNotification counterText="4" color="primary" />} />
        <AvatarButtonWithContent notificationSlot={<AvatarButtonNotification counterText="4" color="red" />} />
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
        <Example title="Variants">
          <VariantsExample />
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
