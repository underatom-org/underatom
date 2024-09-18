import type { RenderRoot } from "../../../base/src/_utils";
import type { CheckboxButtonType, CheckboxType } from "~/base/src/styles/checkbox";

export const checkboxButtonClass = ({ className }: CheckboxButtonType) => {
  return `
  group/checkboxButton
  border-solid
  border-base-950
  border-1
  bg-base-50
  group-active/checkbox:bg-base-50
  group-data-[disabled=true]/checkbox:bg-base-50
  rounded-xs
  transition-all
  group-data-[invalid=true]/checkbox:border-danger-500
  group-data-[invalid=true]/checkbox:bg-danger-50
  group-data-[invalid=true]/checkbox:group-active/checkbox:bg-danger-50
  group-data-[selected=true]/checkbox:bg-primary-950
  group-data-[state=indeterminate]/checkbox:bg-primary-950
  group-active/checkbox:group-data-[selected=true]/checkbox:bg-primary-950
  group-active/checkbox:group-data-[state=indeterminate]/checkbox:bg-primary-950
  group-data-[invalid=true]/checkbox:group-data-[selected=true]/checkbox:bg-danger-500
  group-data-[invalid=true]/checkbox:group-data-[state=indeterminate]/checkbox:bg-danger-500
  group-data-[invalid=true]/checkbox:group-active/checkbox:group-data-[selected=true]/checkbox:bg-danger-500
  group-data-[invalid=true]/checkbox:group-active/checkbox:group-data-[state=indeterminate]/checkbox:bg-danger-500
  group-hover/checkbox:bg-base-100
  group-data-[ring=true]/checkbox:bg-base-100
  group-data-[invalid=true]/checkbox:group-hover/checkbox:bg-danger-100
  group-data-[invalid=true]/checkbox:group-data-[ring=true]/checkbox:bg-danger-100
  group-hover/checkbox:group-data-[selected=true]/checkbox:bg-primary-800
  group-hover/checkbox:group-data-[state=indeterminate]/checkbox:bg-primary-800
  group-data-[ring=true]/checkbox:group-data-[selected=true]/checkbox:bg-primary-800
  group-data-[ring=true]/checkbox:group-data-[state=indeterminate]/checkbox:bg-primary-800
  group-data-[invalid=true]/checkbox:group-hover/checkbox:group-data-[selected=true]/checkbox:bg-danger-700
  group-data-[invalid=true]/checkbox:group-hover/checkbox:group-data-[state=indeterminate]/checkbox:bg-danger-700
  group-data-[invalid=true]/checkbox:group-data-[ring=true]/checkbox:group-data-[selected=true]/checkbox:bg-danger-700
  group-data-[invalid=true]/checkbox:group-data-[ring=true]/checkbox:group-data-[state=indeterminate]/checkbox:bg-danger-700
  group-data-[ring=true]/checkbox:shadow-focus-ring
  group-data-[disabled=true]/checkbox:border-base-200
  group-data-[disabled=true]/checkbox:group-data-[selected=true]/checkbox:bg-base-200
  group-data-[disabled=true]/checkbox:group-data-[state=indeterminate]/checkbox:bg-base-200
  group-data-[invalid=true]/checkbox:group-data-[disabled=true]/checkbox:border-base-200
  group-data-[invalid=true]/checkbox:group-data-[disabled=true]/checkbox:bg-base-50
  group-data-[invalid=true]/checkbox:group-data-[disabled=true]/checkbox:group-data-[selected=true]/checkbox:bg-base-200
  group-data-[invalid=true]/checkbox:group-data-[disabled=true]/checkbox:group-data-[state=indeterminate]/checkbox:bg-base-200
  ${className}
  `;
};

export const checkboxButtonIndicatorClass = ({ className }: CheckboxButtonType) => {
  return `
  w-[14px]
  group-data-[selected=true]/checkbox:w-[14px]
  group-data-[state=indeterminate]/checkbox:w-[14px]
  h-[14px]
  group-data-[selected=true]/checkbox:h-[14px]
  group-data-[state=indeterminate]/checkbox:h-[14px]
  group-data-[selected=true]/checkbox:text-white
  group-data-[state=indeterminate]/checkbox:text-white
  group-data-[disabled=true]/checkbox:group-data-[selected=true]/checkbox:text-base-400
  group-data-[disabled=true]/checkbox:group-data-[state=indeterminate]/checkbox:text-base-400
  ${className}
  `;
};

export const CheckboxButtonLayout = ({
  renderRoot,
  styleProps: { className },
  indicatorSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CheckboxButtonType;
  indicatorSlot: React.ReactNode;
}) => renderRoot(<>{indicatorSlot}</>, `h-[14px] w-[14px] flex flex-row justify-center items-center ${className}`);

export const checkboxClass = ({ className }: CheckboxType) => {
  return `group/checkbox  ${className}`;
};

export const checkboxLabelClass = ({ className }: CheckboxType) => {
  return `text-base-950 text-sm font-text font-medium group-data-[disabled=true]/checkbox:text-base-400 ${className}`;
};

export const checkboxAsteriskClass = ({ className }: CheckboxType) => {
  return `
  hidden
  group-data-[disabled=true]/checkbox:text-base-400
  group-data-[disabled=true]/checkbox:text-sm
  group-data-[required=true]/checkbox:text-sm
  group-data-[disabled=true]/checkbox:font-text
  group-data-[required=true]/checkbox:font-text
  group-data-[disabled=true]/checkbox:font-medium
  group-data-[required=true]/checkbox:font-medium
  group-data-[disabled=true]/checkbox:[display:unset]
  group-data-[required=true]/checkbox:[display:unset]
  group-data-[required=true]/checkbox:text-danger-500
  group-data-[required=true]/checkbox:group-data-[disabled=true]/checkbox:text-base-400
  ${className}
  `;
};

export const checkboxDescriptionClass = ({ className }: CheckboxType) => {
  return `text-base-700 text-sm font-text font-medium group-data-[invalid=true]/checkbox:text-danger-500 group-data-[disabled=true]/checkbox:text-base-400 group-data-[invalid=true]/checkbox:group-data-[disabled=true]/checkbox:text-base-400 ${className}`;
};

export const CheckboxLayout = ({
  renderRoot,
  styleProps: { className },
  buttonSlot,
  labelSlot,
  asteriskSlot,
  descriptionSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CheckboxType;
  buttonSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row gap-[2px]">
        <div className="h-fit w-fit flex flex-row items-center gap-[10px]">
          {buttonSlot}
          {labelSlot}
        </div>
        {asteriskSlot}
      </div>
      <div className="h-fit w-full flex flex-col gap-[10px] pl-7">{descriptionSlot}</div>
    </>,
    `h-fit w-fit flex flex-col [&>*:not(:first-child)]:[margin-top:-4px] ${className}`,
  );
