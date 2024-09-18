import type { RenderRoot } from "../_utils";

/*
  ====================================
  Skeleton
  ====================================
*/

export type SkeletonStyleProps = {
  shape?: "circle" | "rectangle";
};

export type SkeletonType = {
  className?: string;
  skeletonProps?: SkeletonStyleProps;
};

export const skeletonDefaults: Required<SkeletonStyleProps> = {
  shape: "rectangle",
};

export const skeletonClass = (_: SkeletonType) => "";

export const SkeletonLayout = (_: { renderRoot: RenderRoot; styleProps: SkeletonType }) => <></>;
