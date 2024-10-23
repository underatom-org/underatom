import { Atom } from "phosphor-react";
import {
  Chip,
  ChipAvatar,
  ChipAvatarWithIcon,
  ChipProps,
  ChipWithAvatar,
  ChipWithAvatarProps,
  ChipWithDot,
  ChipWithDotProps,
  ChipWithIcon,
} from "./Chip.atoms";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame, VariantsGrid, VariantsRow } from "../../../docs/docs.components";
import { avatar1Src } from "../../../assets/images/Images";

const clickableCode = `
<Chip onPress={() => console.log("click")}>Chip</Chip>
`;

const ClickableExample = () => {
  return (
    <ShowcaseFrame code={clickableCode}>
      <Chip onPress={() => console.log("click")}>Chip</Chip>
    </ShowcaseFrame>
  );
};

const sizesCode = `
<Chip size="sm">Small</Chip>
<Chip size="md">Medium</Chip>
<Chip size="lg">Large</Chip>
`;

const SizesExample = () => {
  return (
    <ShowcaseFrame code={sizesCode}>
      <VariantsGrid<ChipProps>
        isHorizontal
        renderVariant={(props) => <Chip {...props}>Chip</Chip>}
        variantPropsMap={[[{ size: "sm" }, { size: "md" }, { size: "lg" }]]}
      />
    </ShowcaseFrame>
  );
};

const dismissibleCode = `
<Chip onDismiss={() => console.log("handle dismiss")}>Chip</Chip>
`;

const DismissibleExample = () => {
  return (
    <ShowcaseFrame code={dismissibleCode}>
      <VariantsRow>
        <Chip>Chip</Chip>
        <Chip onDismiss={() => console.log("dismiss")}>Chip</Chip>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const disabledCode = `
<Chip isDisabled>Chip</Chip>
`;

const DisabledExample = () => {
  return (
    <ShowcaseFrame code={disabledCode}>
      <VariantsRow>
        <Chip isDisabled>Chip</Chip>
        <ChipWithAvatar
          isDisabled
          avatarSlot={
            <ChipAvatar
              imageProps={{
                src: avatar1Src,
                alt: "Avatar",
              }}
            />
          }
        >
          Chip
        </ChipWithAvatar>
        <ChipWithAvatar isDisabled avatarSlot={<ChipAvatar fallbackText="S" />}>
          Chip
        </ChipWithAvatar>
        <ChipWithAvatar
          isDisabled
          avatarSlot={<ChipAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />}
        >
          Chip
        </ChipWithAvatar>
        <ChipWithDot isDisabled>Chip</ChipWithDot>
        <ChipWithIcon isDisabled icon={(className) => <Atom className={className} />}>
          Chip
        </ChipWithIcon>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const withAvatarCode = `
<ChipWithAvatar avatarSlot={<ChipAvatar imageProps={{ src: "", alt: "" }} />}>
  Chip
</ChipWithAvatar>

<ChipWithAvatar avatarSlot={<ChipAvatar fallbackText="S" />}>
  Chip
</ChipWithAvatar>

<ChipWithAvatar
  avatarSlot={
    <ChipAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />
  }
>
  Chip
</ChipWithAvatar>
`;

const WithAvatarExample = () => {
  return (
    <ShowcaseFrame code={withAvatarCode}>
      <VariantsGrid<ChipWithAvatarProps>
        isHorizontal
        renderVariant={(props) => <ChipWithAvatar {...props}>Chip</ChipWithAvatar>}
        variantPropsMap={[
          [
            {
              avatarSlot: (
                <ChipAvatar
                  imageProps={{
                    src: avatar1Src,
                    alt: "Avatar",
                  }}
                />
              ),
            },
            {
              avatarSlot: <ChipAvatar fallbackText="S" />,
            },
            {
              avatarSlot: <ChipAvatarWithIcon fallbackIcon={(className) => <Atom className={className} />} />,
            },
          ],
        ]}
      />
    </ShowcaseFrame>
  );
};

const withDotCode = `
<ChipWithDot dotColor="primary">Chip</ChipWithDot>
<ChipWithDot dotColor="base">Chip</ChipWithDot>
<ChipWithDot dotColor="green">Chip</ChipWithDot>
<ChipWithDot dotColor="red">Chip</ChipWithDot>
`;

const WithDotExample = () => {
  return (
    <ShowcaseFrame code={withDotCode}>
      <VariantsGrid<ChipWithDotProps>
        isHorizontal
        renderVariant={(props) => <ChipWithDot {...props}>Chip</ChipWithDot>}
        variantPropsMap={[[{ dotColor: "primary" }, { dotColor: "base" }, { dotColor: "green" }, { dotColor: "red" }]]}
      />
    </ShowcaseFrame>
  );
};

const withIconCode = `
<ChipWithIcon icon={(className) => <Atom className={className} />}>
  Chip
</ChipWithIcon>
`;

const WithIconExample = () => {
  return (
    <ShowcaseFrame code={withIconCode}>
      <ChipWithIcon icon={(className) => <Atom className={className} />}>Chip</ChipWithIcon>
    </ShowcaseFrame>
  );
};

const ChipDocs = () => {
  return (
    <Page title="Chip" subtitle="" command="npx underatom@latest add chip">
      <Section title="Showcase">
        <Example title="Clickable">
          <ClickableExample />
        </Example>
        <Example title="Sizes">
          <SizesExample />
        </Example>
        <Example title="Dismissible">
          <DismissibleExample />
        </Example>
        <Example title="Disabled">
          <DisabledExample />
        </Example>
      </Section>

      <Section title="Atoms">
        <Example title="With Avatar">
          <WithAvatarExample />
        </Example>
        <Example title="With Dot">
          <WithDotExample />
        </Example>
        <Example title="With Icon">
          <WithIconExample />
        </Example>
      </Section>
    </Page>
  );
};

const chipRoute = "/chip";
export const chipRouteObj: DocsRoute<typeof chipRoute> = {
  path: chipRoute,
  group: "react-aria",
  label: "Chip",
  component: ChipDocs,
};
