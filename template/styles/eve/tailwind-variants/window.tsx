import type { RenderRoot } from "../../../base/src/_utils";
import type { WindowType } from "~/base/src/styles/window";
import { windowDefaults } from "~/base/src/styles/window";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const windowClass = ({ className, windowProps }: WindowType) => {
  const rootClass = tv({
    base: "group/window border-solid border-1 rounded-[16px]",
    variants: { variant: { default: "border-base-300 bg-background-50", code: "border-base-600 bg-base-950" } },

    defaultVariants: { variant: windowDefaults.variant },
  });
  return rootClass({
    class: className,
    variant: windowProps?.variant,
  });
};

export const WindowLayout = ({
  renderRoot,
  styleProps: { className },
}: {
  renderRoot: RenderRoot;
  styleProps: WindowType;
}) => renderRoot(<></>, `h-fit w-fit flex flex-row gap-5 p-5 ${className}`);
