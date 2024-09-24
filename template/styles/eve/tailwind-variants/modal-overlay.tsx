import type { RenderRoot } from "../../../base/src/_utils";
import type { ModalOverlayType } from "~/base/src/styles/modal-overlay";

export const modalOverlayClass = ({ className }: ModalOverlayType) => {
  return `group/modalOverlay [background:#18181b4d] ${className}`;
};

export const ModalOverlayLayout = ({
  renderRoot,
  styleProps: { className },
}: {
  renderRoot: RenderRoot;
  styleProps: ModalOverlayType;
}) => renderRoot(<></>, `h-full w-full flex flex-row gap-5 p-5 ${className}`);
