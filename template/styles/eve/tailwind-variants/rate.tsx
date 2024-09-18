import type { RenderRoot } from "../../../base/src/_utils";
import type { RateItemType, RateType } from "~/base/src/styles/rate";

export const rateItemClass = ({ className }: RateItemType) => {
  return `group/rateItem rounded-[50px] z-1 data-[ring=true]:border-solid data-[ring=true]:border-primary-950 data-[ring=true]:border-1 ${className}`;
};

export const rateItemIconClass = ({ className }: RateItemType) => {
  return `
  w-[22px]
  h-[22px]
  text-base-400
  group-active/rateItem:text-base-400
  group-data-[disabled]/rate:text-base-400
  group-hover/rateItem:text-base-600
  group-data-[ring=true]/rateItem:text-base-600
  group-data-[highlighted]/rateItem:text-warning-500
  group-hover/rateItem:group-data-[disabled]/rate:text-base-400
  group-data-[ring=true]/rateItem:group-data-[disabled]/rate:text-base-400
  group-data-[highlighted]/rateItem:group-data-[disabled]/rate:text-base-400
  group-data-[highlighted]/rateItem:group-active/rateItem:group-data-[disabled]/rate:text-base-400
  group-data-[highlighted]/rateItem:group-hover/rateItem:text-warning-500
  group-data-[highlighted]/rateItem:group-active/rateItem:text-warning-500
  group-data-[highlighted]/rateItem:group-data-[ring=true]/rateItem:text-warning-500
  ${className}
  `;
};

export const RateItemLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: RateItemType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-7 w-7 flex flex-row justify-center items-center ${className}`);

export const rateClass = ({ className }: RateType) => {
  return `group/rate  ${className}`;
};

export const RateLayout = ({
  renderRoot,
  styleProps: { className },
  itemSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: RateType;
  itemSlots: React.ReactNode;
}) => renderRoot(<>{itemSlots}</>, `h-fit w-fit flex flex-row ${className}`);
