import type { RenderRoot } from "../../../base/src/_utils";
import type { SkeletonType } from "~/base/src/styles/skeleton";
import { skeletonDefaults } from "~/base/src/styles/skeleton";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const skeletonClass = ({ className, skeletonProps }: SkeletonType) => {
  const rootClass = tv({
    base: "group/skeleton bg-base-200",
    variants: { shape: { rectangle: "rounded-md", circle: "rounded-[50px]" } },

    defaultVariants: { shape: skeletonDefaults.shape },
  });
  return rootClass({
    class: className,
    shape: skeletonProps?.shape,
  });
};

export const SkeletonLayout = ({
  renderRoot,
  styleProps: { className },
}: {
  renderRoot: RenderRoot;
  styleProps: SkeletonType;
}) => renderRoot(<></>, `h-full w-full flex flex-row gap-5 p-5 ${className}`);
