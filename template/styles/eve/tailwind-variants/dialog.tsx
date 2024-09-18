import type { RenderRoot } from "../../../base/src/_utils";
import type { DialogType } from "~/base/src/styles/dialog";

export const dialogClass = ({ className }: DialogType) => {
  return `group/dialog bg-primary-50 rounded-sm ${className}`;
};

export const DialogLayout = ({
  renderRoot,
  styleProps: { className },
}: {
  renderRoot: RenderRoot;
  styleProps: DialogType;
}) => renderRoot(<></>, `h-full w-full flex flex-row gap-5 p-5 ${className}`);
