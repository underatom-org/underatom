import type { RenderRoot } from "../../../base/src/_utils";
import type { WindowType } from "~/base/src/styles/window";

export const windowClass = ({ className }: WindowType) => {
  return `group/window border-solid border-base-300 border-1 bg-background-50 rounded-[16px] ${className}`;
};

export const WindowLayout = ({
  renderRoot,
  styleProps: { className },
}: {
  renderRoot: RenderRoot;
  styleProps: WindowType;
}) => renderRoot(<></>, `h-fit w-fit flex flex-row gap-5 p-5 ${className}`);
