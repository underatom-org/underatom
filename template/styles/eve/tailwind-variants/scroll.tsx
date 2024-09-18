import type { RenderRoot } from "../../../base/src/_utils";
import type { ScrollType } from "~/base/src/styles/scroll";

export const scrollClass = ({ className }: ScrollType) => {
  return `group/scroll rounded-[50px] ${className}`;
};

export const scrollHandleClass = ({ className }: ScrollType) => {
  return `w-1 h-[142px] bg-base-200 rounded-[50px] ${className}`;
};

export const ScrollLayout = ({
  renderRoot,
  styleProps: { className },
  handleSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ScrollType;
  handleSlot: React.ReactNode;
}) => renderRoot(<>{handleSlot}</>, `h-full w-[6px] flex flex-row justify-center gap-5 py-[1px] ${className}`);
