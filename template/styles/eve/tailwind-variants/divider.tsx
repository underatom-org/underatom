import type { RenderRoot } from "../../../base/src/_utils";
import type { DividerType } from "~/base/src/styles/divider";

export const dividerClass = ({ className }: DividerType) => {
  return `group/divider border-solid border-primary-200 border-t-0 border-b-1 border-x-0 ${className}`;
};

export const DividerLayout = ({
  renderRoot,
  styleProps: { className },
}: {
  renderRoot: RenderRoot;
  styleProps: DividerType;
}) => renderRoot(<></>, `h-[1px] w-fit flex flex-row gap-5 p-5 ${className}`);
