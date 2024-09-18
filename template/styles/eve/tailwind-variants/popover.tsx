import type { RenderRoot } from "../../../base/src/_utils";
import type { PopoverType } from "~/base/src/styles/popover";

export const popoverClass = ({ className }: PopoverType) => {
  return `group/popover border-solid border-base-300 border-1 bg-base-50 shadow-sm rounded-sm ${className}`;
};

export const PopoverLayout = ({
  renderRoot,
  styleProps: { className },
}: {
  renderRoot: RenderRoot;
  styleProps: PopoverType;
}) => renderRoot(<></>, `h-fit w-fit flex flex-row gap-5 p-5 ${className}`);
