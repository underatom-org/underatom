import type { RenderRoot } from "../../../base/src/_utils";
import type { PaperType } from "~/base/src/styles/paper";
import { paperDefaults } from "~/base/src/styles/paper";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const paperClass = ({ className, paperProps }: PaperType) => {
  const rootClass = tv({
    base: "group/paper border-solid border-base-200 border-1 bg-base-50 rounded-md",
    variants: { elevation: { sm: "shadow-sm", md: "shadow-md", lg: "shadow-lg" } },

    defaultVariants: { elevation: paperDefaults.elevation },
  });
  return rootClass({
    class: className,
    elevation: paperProps?.elevation,
  });
};

export const PaperLayout = ({
  renderRoot,
  styleProps: { className },
}: {
  renderRoot: RenderRoot;
  styleProps: PaperType;
}) => renderRoot(<></>, `h-full w-full flex flex-row gap-5 p-5 ${className}`);
