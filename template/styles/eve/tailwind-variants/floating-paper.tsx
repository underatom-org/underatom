import type { RenderRoot } from "../../../base/src/_utils";
import type { FloatingPaperType } from "~/base/src/styles/floating-paper";
import { floatingPaperDefaults } from "~/base/src/styles/floating-paper";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const floatingPaperClass = ({ className, floatingPaperProps }: FloatingPaperType) => {
  const rootClass = tv({
    base: "group/floatingPaper border-solid border-1 bg-base-50 rounded-md data-[invalid=true]:border-danger-600 data-[invalid=true]:bg-primary-50",
    variants: {
      elevation: { sm: "shadow-sm", md: "shadow-md", lg: "shadow-lg" },
      variant: { default: "border-base-50", outline: "border-base-950" },
    },

    defaultVariants: { elevation: floatingPaperDefaults.elevation, variant: floatingPaperDefaults.variant },
  });
  return rootClass({
    class: className,
    elevation: floatingPaperProps?.elevation,
    variant: floatingPaperProps?.variant,
  });
};

export const FloatingPaperLayout = ({
  renderRoot,
  styleProps: { className },
}: {
  renderRoot: RenderRoot;
  styleProps: FloatingPaperType;
}) => renderRoot(<></>, `h-full w-full flex flex-row gap-5 p-5 ${className}`);
