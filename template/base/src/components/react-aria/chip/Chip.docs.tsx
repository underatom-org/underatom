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

const ClickableExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <Chip onPress={() => console.log("click")}>Chip</Chip>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const SizesExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<ChipProps>
        isHorizontal
        renderVariant={(props) => <Chip {...props}>Chip</Chip>}
        variantPropsMap={[[{ size: "sm" }, { size: "md" }, { size: "lg" }]]}
      />
    </ShowcaseFrame>
  );
};

const DismissibleExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsRow>
        <Chip>Chip</Chip>
        <Chip onDismiss={() => console.log("dismiss")}>Chip</Chip>
      </VariantsRow>
    </ShowcaseFrame>
  );
};

const DisabledExample = () => {
  return (
    <ShowcaseFrame>
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

const WithAvatarExample = () => {
  return (
    <ShowcaseFrame>
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

const WithDotExample = () => {
  return (
    <ShowcaseFrame>
      <VariantsGrid<ChipWithDotProps>
        isHorizontal
        renderVariant={(props) => <ChipWithDot {...props}>Chip</ChipWithDot>}
        variantPropsMap={[[{ dotColor: "primary" }, { dotColor: "base" }, { dotColor: "green" }, { dotColor: "red" }]]}
      />
    </ShowcaseFrame>
  );
};

const WithIconExample = () => {
  return (
    <ShowcaseFrame>
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
