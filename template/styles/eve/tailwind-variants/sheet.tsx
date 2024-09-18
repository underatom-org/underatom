import type { RenderRoot } from "../../../base/src/_utils";
import type { SheetType } from "~/base/src/styles/sheet";

export const sheetClass = ({ className }: SheetType) => {
  return `group/sheet bg-primary-50 shadow-lg ${className}`;
};

export const SheetLayout = ({
  renderRoot,
  styleProps: { className },
}: {
  renderRoot: RenderRoot;
  styleProps: SheetType;
}) => renderRoot(<></>, `h-full w-full flex flex-row gap-5 p-5 ${className}`);
