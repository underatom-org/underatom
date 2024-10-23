import {
  AvatarToggle,
  AvatarToggleContent,
  AvatarToggleContentWithIcon,
  AvatarToggleProps,
} from "./AvatarToggle.atoms";
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
import { avatar1Src } from "../../../assets/images/Images";

export const AvatarToggleWithContent = (props: Omit<AvatarToggleProps, "children">) => {
  return (
    <AvatarToggle {...props}>
      <AvatarToggleContent
        imageProps={{
          src: avatar1Src,
          alt: "Avatar",
        }}
      />
    </AvatarToggle>
  );
};

const defaultCode = `
<AvatarToggle>
  <AvatarToggleContent imageProps={{ src: "", alt: "" }} />
</AvatarToggle>
`;

const DefaultExample = () => {
  return (
    <ShowcaseFrame>
      <AvatarToggleWithContent />
    </ShowcaseFrame>
  );
};

const selectedCode = `
<AvatarToggle isSelected>
  <AvatarToggleContent imageProps={{ src: "", alt: "" }} />
</AvatarToggle>
`;

const SelectedExample = () => {
  return (
    <ShowcaseFrame code={selectedCode}>
      <AvatarToggleWithContent isSelected />
    </ShowcaseFrame>
  );
};

const sizesCode = `
<AvatarToggle size="sm">
  <AvatarToggleContent imageProps={{ src: "", alt: "" }} />
</AvatarToggle>
`;

const SizesExample = () => {
  return (
    <ShowcaseFrame code={sizesCode}>
      <VariantsGrid<AvatarToggleProps>
        renderVariant={(props) => (
          <div style={{ display: "flex" }}>
            <AvatarToggle {...props} />
          </div>
        )}
        variantPropsMap={[
          [{ size: "sm" }, { size: "md" }, { size: "lg" }, { size: "xl" }],
          [
            {
              children: (
                <AvatarToggleContent
                  imageProps={{
                    src: avatar1Src,
                    alt: "Avatar",
                  }}
                  fallbackText="AV"
                />
              ),
            },
            {
              children: <AvatarToggleContent fallbackText="S" />,
            },
            {
              children: <AvatarToggleContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />,
            },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const disabledCode = `
<AvatarToggle isDisabled>
  <AvatarToggleContent imageProps={{ src: "", alt: "" }} />
</AvatarToggle>
`;

const DisabledExample = () => {
  return (
    <ShowcaseFrame code={disabledCode}>
      <VariantsColumn>
        <VariantsRow>
          <AvatarToggle isDisabled>
            <AvatarToggleContent
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
              fallbackText="AV"
            />
          </AvatarToggle>
          <AvatarToggle isDisabled>
            <AvatarToggleContent fallbackText="S" />
          </AvatarToggle>
          <AvatarToggle isDisabled>
            <AvatarToggleContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />
          </AvatarToggle>
        </VariantsRow>
        <VariantsRow>
          <AvatarToggle isDisabled isSelected>
            <AvatarToggleContent
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
              fallbackText="AV"
            />
          </AvatarToggle>
          <AvatarToggle isDisabled isSelected>
            <AvatarToggleContent fallbackText="S" />
          </AvatarToggle>
          <AvatarToggle isDisabled isSelected>
            <AvatarToggleContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />
          </AvatarToggle>
        </VariantsRow>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const withIconCode = `
<AvatarToggle>
  <AvatarToggleContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />
</AvatarToggle>
`;

const WithIconExample = () => {
  return (
    <ShowcaseFrame code={withIconCode}>
      <VariantsRow>
        <AvatarToggle>
          <AvatarToggleContent
            imageProps={{
              src: avatar1Src,
              alt: "Avatar",
            }}
            fallbackText="AV"
          />
        </AvatarToggle>
        <AvatarToggle>
          <AvatarToggleContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />
        </AvatarToggle>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const withTextCode = `
<AvatarToggle>
  <AvatarToggleContent fallbackText="AV" />
</AvatarToggle>
`;

const WithTextExample = () => {
  return (
    <ShowcaseFrame code={withTextCode}>
      <VariantsRow>
        <AvatarToggle>
          <AvatarToggleContent
            imageProps={{
              src: avatar1Src,
              alt: "Avatar",
            }}
            fallbackText="AV"
          />
        </AvatarToggle>
        <AvatarToggle>
          <AvatarToggleContent fallbackText="AV" />
        </AvatarToggle>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const AvatarToggleDocs = () => (
  <Page
    title="AvatarToggle"
    subtitle="A toggleable avatar component."
    command="npx underatom@latest add avatar-toggle"
    usageCode={defaultCode}
    defaultExample={<DefaultExample />}
  >
    <Section title="Showcase">
      <Example title="Selected">
        <SelectedExample />
      </Example>
      <Example title="Sizes">
        <SizesExample />
      </Example>
      <Example title="Disabled">
        <DisabledExample />
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
);

const avatarToggleRoute = "/avatar-toggle";
export const avatarToggleRouteObj: DocsRoute<typeof avatarToggleRoute> = {
  path: avatarToggleRoute,
  group: "radix",
  label: "AvatarToggle",
  component: AvatarToggleDocs,
};
