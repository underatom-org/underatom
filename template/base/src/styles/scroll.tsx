import type { RenderRoot } from "../_utils";

/*
  ====================================
  Scroll
  ====================================
*/

export type ScrollType = {
  className?: string;
};

export const scrollClass = (_: ScrollType) => "";
export const scrollHandleClass = (_: ScrollType) => "";

export const ScrollLayout = (_: { renderRoot: RenderRoot; styleProps: ScrollType; handleSlot: React.ReactNode }) => (
  <></>
);
