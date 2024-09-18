import type { RenderRoot } from "../_utils";

/*
  ====================================
  ModalOverlay
  ====================================
*/

export type ModalOverlayStyleProps = {
  variant?: "default";
};

export type ModalOverlayType = {
  className?: string;
  modalOverlayProps?: ModalOverlayStyleProps;
};

export const modalOverlayDefaults: Required<ModalOverlayStyleProps> = {
  variant: "default",
};

export const modalOverlayClass = (_: ModalOverlayType) => "";

export const ModalOverlayLayout = (_: { renderRoot: RenderRoot; styleProps: ModalOverlayType }) => <></>;
