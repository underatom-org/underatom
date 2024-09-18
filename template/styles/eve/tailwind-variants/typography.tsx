import type { RenderRoot } from "../../../base/src/_utils";
import type { TypographyType } from "~/base/src/styles/typography";
import { typographyDefaults } from "~/base/src/styles/typography";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const typographyClass = ({ className, typographyProps }: TypographyType) => {
  const rootClass = tv({
    base: "group/typography ",
    variants: {
      type: {
        h1: "",
        h2: "",
        h3: "",
        subheader: "",
        body: "",
        label: "",
        code: "border-solid border-base-200 border-1 bg-base-50 rounded-md",
      },
    },

    defaultVariants: { type: typographyDefaults.type },
  });
  return rootClass({
    class: className,
    type: typographyProps?.type,
  });
};

export const typographyTextClass = ({ className, typographyProps }: TypographyType) => {
  const textClass = tv({
    base: "",
    variants: {
      type: {
        h1: "text-3xl font-display font-medium",
        h2: "text-2xl font-display font-medium",
        h3: "text-xl font-text font-medium",
        subheader: "text-lg font-text font-normal",
        body: "text-md font-text font-normal",
        label: "text-sm font-text font-medium",
        code: "text-[16px] font-['DMMono'] leading-[24px] font-normal",
      },
      color: { base: "text-base-900", secondary: "text-base-700" },
    },

    defaultVariants: { type: typographyDefaults.type, color: typographyDefaults.color },
  });
  return textClass({
    class: className,

    type: typographyProps?.type,
    color: typographyProps?.color,
  });
};

export const TypographyLayout = ({
  renderRoot,
  styleProps: { className, typographyProps },
  textSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TypographyType;
  textSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{textSlot}</>,
    tv({
      base: "h-fit w-fit flex flex-row justify-center items-center",
      variants: { type: { h1: "", h2: "", h3: "", subheader: "", body: "", label: "", code: "py-[1px] px-[6px]" } },

      defaultVariants: { type: typographyDefaults.type },
    })({
      class: className,
      type: typographyProps?.type,
    }),
  );
