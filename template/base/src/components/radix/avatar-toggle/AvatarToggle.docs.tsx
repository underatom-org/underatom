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

export const AvatarToggleWithContent = (props: Omit<AvatarToggleProps, "contentSlot">) => {
  return (
    <AvatarToggle
      {...props}
      contentSlot={
        <AvatarToggleContent
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
      <AvatarToggleWithContent />
    </ShowcaseFrame>
  );
};

const SelectedExample = () => {
  return (
    <ShowcaseFrame>
      <AvatarToggleWithContent isSelected />
    </ShowcaseFrame>
  );
};

const SizesExample = () => {
  return (
    <ShowcaseFrame>
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
              contentSlot: (
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
              contentSlot: <AvatarToggleContent fallbackText="S" />,
            },
            {
              contentSlot: <AvatarToggleContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />,
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
      <VariantsColumn>
        <VariantsRow>
          <AvatarToggle
            contentSlot={
              <AvatarToggleContent
                imageProps={{
                  src: avatar1Src,
                  alt: "Avatar",
                }}
                fallbackText="AV"
              />
            }
            isDisabled
          />
          <AvatarToggle contentSlot={<AvatarToggleContent fallbackText="S" />} isDisabled />
          <AvatarToggle
            contentSlot={<AvatarToggleContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />}
            isDisabled
          />
        </VariantsRow>
        <VariantsRow>
          <AvatarToggle
            contentSlot={
              <AvatarToggleContent
                imageProps={{
                  src: avatar1Src,
                  alt: "Avatar",
                }}
                fallbackText="AV"
              />
            }
            isDisabled
            isSelected
          />
          <AvatarToggle contentSlot={<AvatarToggleContent fallbackText="S" />} isDisabled isSelected />
          <AvatarToggle
            contentSlot={<AvatarToggleContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />}
            isDisabled
            isSelected
          />
        </VariantsRow>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const WithIconExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <AvatarToggle
          contentSlot={
            <AvatarToggleContent
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
              fallbackText="AV"
            />
          }
        />
        <AvatarToggle
          contentSlot={<AvatarToggleContentWithIcon fallbackIcon={(className) => <Atom className={className} />} />}
        />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const WithTextExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <AvatarToggle
          contentSlot={
            <AvatarToggleContent
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
              fallbackText="AV"
            />
          }
        />
        <AvatarToggle contentSlot={<AvatarToggleContent fallbackText="AV" />} />
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const AvatarToggleDocs = () => (
  <>
    <Page title="AvatarToggle" subtitle="Subtitle" command="npx underatom@latest add avatar-toggle">
      <Section title="Showcase">
        <Example title="Default">
          <DefaultExample />
        </Example>
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
  </>
);

const avatarToggleRoute = "/avatar-toggle";
export const avatarToggleRouteObj: DocsRoute<typeof avatarToggleRoute> = {
  path: avatarToggleRoute,
  group: "radix",
  label: "AvatarToggle",
  component: AvatarToggleDocs,
};
