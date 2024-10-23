import { Atom } from "phosphor-react";
import {
  ChipToggle,
  ChipToggleAvatar,
  ChipToggleAvatarWithIcon,
  ChipToggleWithAvatar,
  ChipToggleWithAvatarProps,
  ChipToggleWithDot,
  ChipToggleWithDotProps,
  ChipToggleWithIcon,
} from "./ChipToggle.atoms";
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

const defaultCode = `
<ChipToggle>Toggle</ChipToggle>
`;

const Default = () => {
  return (
    <ShowcaseFrame code={defaultCode}>
      <ChipToggle>Toggle</ChipToggle>
    </ShowcaseFrame>
  );
};

const sizesCode = `
<ChipToggle size="sm">Toggle</ChipToggle>
<ChipToggle size="md">Toggle</ChipToggle>
<ChipToggle size="lg">Toggle</ChipToggle>
`;

const Sizes = () => {
  return (
    <ShowcaseFrame code={sizesCode}>
      <VariantsRow>
        <ChipToggle size="sm">Toggle</ChipToggle>
        <ChipToggle size="md">Toggle</ChipToggle>
        <ChipToggle size="lg">Toggle</ChipToggle>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const dismissibleCode = `
<ChipToggle onDismiss={() => console.log("dismiss")}>
  Toggle
</ChipToggle>
`;

const Dismissible = () => {
  return (
    <ShowcaseFrame code={dismissibleCode}>
      <VariantsRow>
        <ChipToggle>Toggle</ChipToggle>
        <ChipToggle onDismiss={() => console.log("dismiss")}>Toggle</ChipToggle>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const disabledCode = `
<ChipToggle isDisabled>Toggle</ChipToggle>
`;

const Disabled = () => {
  return (
    <ShowcaseFrame code={disabledCode}>
      <VariantsColumn>
        <VariantsRow>
          <ChipToggle isDisabled>Toggle</ChipToggle>
          <ChipToggleWithAvatar
            isDisabled
            avatarSlot={
              <ChipToggleAvatar
                imageProps={{
                  src: avatar1Src,
                  alt: "Avatar",
                }}
              />
            }
          >
            Toggle
          </ChipToggleWithAvatar>
          <ChipToggleWithAvatar isDisabled avatarSlot={<ChipToggleAvatar fallbackText="S" />}>
            Toggle
          </ChipToggleWithAvatar>
          <ChipToggleWithAvatar
            isDisabled
            avatarSlot={<ChipToggleAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />}
          >
            Toggle
          </ChipToggleWithAvatar>
          <ChipToggleWithDot isDisabled>Toggle</ChipToggleWithDot>
          <ChipToggleWithIcon isDisabled icon={(className) => <Atom className={className} />}>
            Toggle
          </ChipToggleWithIcon>
        </VariantsRow>

        <VariantsRow>
          <ChipToggle isDisabled isSelected>
            Toggle
          </ChipToggle>
          <ChipToggleWithAvatar
            isDisabled
            isSelected
            avatarSlot={
              <ChipToggleAvatar
                imageProps={{
                  src: avatar1Src,
                  alt: "Avatar",
                }}
              />
            }
          >
            Toggle
          </ChipToggleWithAvatar>
          <ChipToggleWithAvatar isDisabled isSelected avatarSlot={<ChipToggleAvatar fallbackText="S" />}>
            Toggle
          </ChipToggleWithAvatar>
          <ChipToggleWithAvatar
            isDisabled
            isSelected
            avatarSlot={<ChipToggleAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />}
          >
            Toggle
          </ChipToggleWithAvatar>
          <ChipToggleWithDot isDisabled isSelected>
            Toggle
          </ChipToggleWithDot>
          <ChipToggleWithIcon isDisabled isSelected icon={(className) => <Atom className={className} />}>
            Toggle
          </ChipToggleWithIcon>
        </VariantsRow>
      </VariantsColumn>
    </ShowcaseFrame>
  );
};

const withAvatarCode = `
<ChipToggleWithAvatar avatarSlot={<ChipToggleAvatar imageProps={{ src: "", alt: "" }} />}>
  Toggle
</ChipToggleWithAvatar>

<ChipToggleWithAvatar avatarSlot={<ChipToggleAvatar fallbackText="S" />}>
  Toggle
</ChipToggleWithAvatar>

<ChipToggleWithAvatar
  avatarSlot={
    <ChipToggleAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />
  }
>
  Toggle
</ChipToggleWithAvatar>
`;

const WithAvatar = () => {
  return (
    <ShowcaseFrame code={withAvatarCode}>
      <VariantsGrid<ChipToggleWithAvatarProps>
        isHorizontal
        renderVariant={(props) => <ChipToggleWithAvatar {...props}>Chip</ChipToggleWithAvatar>}
        variantPropsMap={[
          [
            { avatarSlot: <ChipToggleAvatar imageProps={{ src: avatar1Src, alt: "Avatar" }} /> },
            { avatarSlot: <ChipToggleAvatar fallbackText="S" /> },
            { avatarSlot: <ChipToggleAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} /> },
          ],
          [{ isSelected: false }, { isSelected: true }],
        ]}
      />
    </ShowcaseFrame>
  );
};

const withDotCode = `
<ChipToggleWithDot dotColor="primary">Toggle</ChipToggleWithDot>
<ChipToggleWithDot dotColor="base">Toggle</ChipToggleWithDot>
<ChipToggleWithDot dotColor="green">Toggle</ChipToggleWithDot>
<ChipToggleWithDot dotColor="red">Toggle</ChipToggleWithDot>
`;

const WithDot = () => {
  return (
    <ShowcaseFrame code={withDotCode}>
      <VariantsGrid<ChipToggleWithDotProps>
        isHorizontal
        renderVariant={(props) => <ChipToggleWithDot {...props}>Chip</ChipToggleWithDot>}
        variantPropsMap={[
          [{ dotColor: "base" }, { dotColor: "primary" }, { dotColor: "green" }, { dotColor: "red" }],
          [{ isSelected: false }, { isSelected: true }],
        ]}
      />
    </ShowcaseFrame>
  );
};

const withIconCode = `
<ChipToggleWithIcon icon={(className) => <Atom className={className} />}>
  Toggle
</ChipToggleWithIcon>
`;

const WithIcon = () => {
  return (
    <ShowcaseFrame code={withIconCode}>
      <VariantsRow>
        <ChipToggleWithIcon icon={(className) => <Atom className={className} />}>Chip</ChipToggleWithIcon>
        <ChipToggleWithIcon isSelected icon={(className) => <Atom className={className} />}>
          Chip
        </ChipToggleWithIcon>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const ChipToggleDocs = () => {
  return (
    <Page title="ChipToggle" subtitle="" command="npx underatom@latest add chip-toggle">
      <Example>
        <Default />
      </Example>
      <Section title="Showcase">
        <Example title="Sizes">
          <Sizes />
        </Example>
        <Example title="Dismissible">
          <Dismissible />
        </Example>
        <Example title="Disabled">
          <Disabled />
        </Example>
      </Section>
      <Section title="Atoms">
        <Example title="With Avatar">
          <WithAvatar />
        </Example>
        <Example title="With Dot">
          <WithDot />
        </Example>
        <Example title="With Icon">
          <WithIcon />
        </Example>
      </Section>
    </Page>
  );
};

const chipToggleRoute = "/chip-toggle";
export const chipToggleRouteObj: DocsRoute<typeof chipToggleRoute> = {
  path: chipToggleRoute,
  group: "react-aria",
  label: "ChipToggle",
  component: ChipToggleDocs,
};
