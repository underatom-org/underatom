import type { RenderRoot } from "../../../base/src/_utils";
import type {
  CheckboxGroupCheckboxButtonType,
  CheckboxGroupCheckboxType,
  CheckboxGroupType,
} from "~/base/src/styles/checkbox-group";

export const checkboxGroupCheckboxButtonClass = ({ className }: CheckboxGroupCheckboxButtonType) => {
  return `
  group/checkboxGroupCheckboxButton
  border-solid
  border-primary-950
  border-1
  bg-base-50
  group-data-[pressed=true]/checkboxGroupCheckbox:bg-base-50
  group-data-[disabled=true]/checkboxGroup:bg-base-50
  group-data-[disabled=true]/checkboxGroupCheckbox:bg-base-50
  rounded-xs
  transition-all
  group-data-[disabled=true]/checkboxGroup:border-base-200
  group-data-[disabled=true]/checkboxGroupCheckbox:border-base-200
  group-data-[disabled=true]/checkboxGroup:group-data-[focus-visible=true]/checkboxGroupCheckbox:shadow-none
  group-data-[invalid=true]/checkboxGroupCheckbox:border-danger-500
  group-data-[invalid=true]/checkboxGroup:border-danger-500
  group-data-[invalid=true]/checkboxGroupCheckbox:bg-danger-50
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[pressed=true]/checkboxGroupCheckbox:bg-danger-50
  group-data-[invalid=true]/checkboxGroup:bg-danger-50
  group-data-[invalid=true]/checkboxGroup:group-data-[pressed=true]/checkboxGroupCheckbox:bg-danger-50
  group-hover/checkboxGroupCheckbox:bg-base-100
  group-data-[focus-visible=true]/checkboxGroupCheckbox:bg-base-100
  group-data-[invalid=true]/checkboxGroupCheckbox:group-hover/checkboxGroupCheckbox:bg-danger-100
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[focus-visible=true]/checkboxGroupCheckbox:bg-danger-100
  group-data-[invalid=true]/checkboxGroup:group-hover/checkboxGroupCheckbox:bg-danger-100
  group-data-[invalid=true]/checkboxGroup:group-data-[focus-visible=true]/checkboxGroupCheckbox:bg-danger-100
  group-data-[focus-visible=true]/checkboxGroupCheckbox:shadow-focus-ring
  group-data-[selected=true]/checkboxGroupCheckbox:bg-primary-950
  group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-primary-950
  group-data-[pressed=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-primary-950
  group-data-[pressed=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-primary-950
  group-data-[focus-visible=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-primary-950
  group-data-[focus-visible=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-primary-950
  group-data-[disabled=true]/checkboxGroup:group-data-[selected=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[disabled=true]/checkboxGroup:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[disabled=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[disabled=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-danger-500
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-danger-500
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[pressed=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-danger-500
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[pressed=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-danger-500
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[focus-visible=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-danger-500
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[focus-visible=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-danger-500
  group-data-[invalid=true]/checkboxGroup:group-data-[selected=true]/checkboxGroupCheckbox:bg-danger-500
  group-data-[invalid=true]/checkboxGroup:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-danger-500
  group-data-[invalid=true]/checkboxGroup:group-data-[pressed=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-danger-500
  group-data-[invalid=true]/checkboxGroup:group-data-[pressed=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-danger-500
  group-data-[invalid=true]/checkboxGroup:group-data-[focus-visible=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-danger-500
  group-data-[invalid=true]/checkboxGroup:group-data-[focus-visible=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-danger-500
  group-hover/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-primary-800
  group-hover/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-primary-800
  group-data-[invalid=true]/checkboxGroupCheckbox:group-hover/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-danger-700
  group-data-[invalid=true]/checkboxGroupCheckbox:group-hover/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-danger-700
  group-data-[invalid=true]/checkboxGroup:group-hover/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-danger-700
  group-data-[invalid=true]/checkboxGroup:group-hover/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-danger-700
  group-data-[disabled=true]/checkboxGroup:group-data-[invalid=true]/checkboxGroupCheckbox:border-base-200
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[disabled=true]/checkboxGroupCheckbox:border-base-200
  group-data-[invalid=true]/checkboxGroup:group-data-[disabled=true]/checkboxGroup:border-base-200
  group-data-[invalid=true]/checkboxGroup:group-data-[disabled=true]/checkboxGroupCheckbox:border-base-200
  group-data-[disabled=true]/checkboxGroup:group-data-[invalid=true]/checkboxGroupCheckbox:bg-base-50
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[disabled=true]/checkboxGroupCheckbox:bg-base-50
  group-data-[invalid=true]/checkboxGroup:group-data-[disabled=true]/checkboxGroup:bg-base-50
  group-data-[invalid=true]/checkboxGroup:group-data-[disabled=true]/checkboxGroupCheckbox:bg-base-50
  group-data-[disabled=true]/checkboxGroup:group-hover/checkboxGroupCheckbox:bg-base-50
  group-data-[disabled=true]/checkboxGroup:group-data-[focus-visible=true]/checkboxGroupCheckbox:bg-base-50
  group-data-[disabled=true]/checkboxGroup:group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[disabled=true]/checkboxGroup:group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[disabled=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[disabled=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[invalid=true]/checkboxGroup:group-data-[disabled=true]/checkboxGroup:group-data-[selected=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[invalid=true]/checkboxGroup:group-data-[disabled=true]/checkboxGroup:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[invalid=true]/checkboxGroup:group-data-[disabled=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[invalid=true]/checkboxGroup:group-data-[disabled=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[disabled=true]/checkboxGroup:group-hover/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[disabled=true]/checkboxGroup:group-hover/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[disabled=true]/checkboxGroup:group-data-[pressed=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[disabled=true]/checkboxGroup:group-data-[pressed=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[disabled=true]/checkboxGroup:group-data-[focus-visible=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:bg-base-200
  group-data-[disabled=true]/checkboxGroup:group-data-[focus-visible=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:bg-base-200
  ${className}
  `;
};

export const checkboxGroupCheckboxButtonIndicatorClass = ({ className }: CheckboxGroupCheckboxButtonType) => {
  return `
  w-[14px]
  h-[14px]
  group-data-[selected=true]/checkboxGroupCheckbox:text-white
  group-data-[indeterminate=true]/checkboxGroupCheckbox:text-white
  group-data-[disabled=true]/checkboxGroup:group-data-[selected=true]/checkboxGroupCheckbox:text-base-400
  group-data-[disabled=true]/checkboxGroup:group-data-[indeterminate=true]/checkboxGroupCheckbox:text-base-400
  group-data-[disabled=true]/checkboxGroupCheckbox:group-data-[selected=true]/checkboxGroupCheckbox:text-base-400
  group-data-[disabled=true]/checkboxGroupCheckbox:group-data-[indeterminate=true]/checkboxGroupCheckbox:text-base-400
  ${className}
  `;
};

export const CheckboxGroupCheckboxButtonLayout = ({
  renderRoot,
  styleProps: { className },
  indicatorSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CheckboxGroupCheckboxButtonType;
  indicatorSlot: React.ReactNode;
}) =>
  renderRoot(<>{indicatorSlot}</>, `h-[14px] w-[14px] flex flex-row justify-center items-center gap-5 ${className}`);

export const checkboxGroupCheckboxClass = ({ className }: CheckboxGroupCheckboxType) => {
  return `group/checkboxGroupCheckbox  ${className}`;
};

export const checkboxGroupCheckboxLabelClass = ({ className }: CheckboxGroupCheckboxType) => {
  return `text-base-950 text-sm font-text font-medium group-data-[disabled=true]/checkboxGroupCheckbox:text-base-400 group-data-[disabled=true]/checkboxGroup:text-base-400 ${className}`;
};

export const checkboxGroupCheckboxDescriptionClass = ({ className }: CheckboxGroupCheckboxType) => {
  return `
  text-base-700
  text-sm
  group-data-[disabled=true]/checkboxGroup:text-sm
  font-text
  group-data-[disabled=true]/checkboxGroup:font-text
  font-normal
  group-data-[disabled=true]/checkboxGroup:font-normal
  group-data-[disabled=true]/checkboxGroup:text-base-400
  group-data-[disabled=true]/checkboxGroupCheckbox:text-base-400
  group-data-[invalid=true]/checkboxGroupCheckbox:text-danger-500
  group-data-[invalid=true]/checkboxGroup:text-danger-500
  group-data-[invalid=true]/checkboxGroupCheckbox:group-data-[disabled=true]/checkboxGroupCheckbox:text-danger-500
  group-data-[invalid=true]/checkboxGroup:group-data-[disabled=true]/checkboxGroupCheckbox:text-danger-500
  ${className}
  `;
};

export const CheckboxGroupCheckboxLayout = ({
  renderRoot,
  styleProps: { className },
  buttonSlot,
  labelSlot,
  descriptionSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: CheckboxGroupCheckboxType;
  buttonSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row items-center gap-[10px]">
        {buttonSlot}
        {labelSlot}
      </div>
      <div className="h-fit w-fit flex flex-col pl-7">{descriptionSlot}</div>
    </>,
    `h-fit w-fit flex flex-col [&>*:not(:first-child)]:[margin-top:-4px] ${className}`,
  );

export const checkboxGroupClass = ({ className }: CheckboxGroupType) => {
  return `group/checkboxGroup  ${className}`;
};

export const checkboxGroupLabelClass = ({ className }: CheckboxGroupType) => {
  return `text-base-900 text-sm font-text font-medium group-data-[disabled=true]/checkboxGroup:text-base-400 ${className}`;
};

export const checkboxGroupAsteriskClass = ({ className }: CheckboxGroupType) => {
  return `
  group-data-[required=true]/checkboxGroup:[display:unset]
  group-data-[required=true]/checkboxGroup:text-danger-500
  group-data-[required=true]/checkboxGroup:text-xs
  group-data-[required=true]/checkboxGroup:font-text
  group-data-[required=true]/checkboxGroup:font-medium
  group-data-[required=true]/checkboxGroup:group-data-[disabled=true]/checkboxGroup:text-base-400
  hidden
  ${className}
  `;
};

export const checkboxGroupDescriptionClass = ({ className }: CheckboxGroupType) => {
  return `
  text-base-700
  text-sm
  font-text
  font-normal
  group-data-[invalid=true]/checkboxGroup:text-danger-500
  group-data-[disabled=true]/checkboxGroup:text-base-400
  group-data-[invalid=true]/checkboxGroup:group-data-[disabled=true]/checkboxGroup:text-base-400
  ${className}
  `;
};

export const CheckboxGroupLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
  asteriskSlot,
  descriptionSlot,
  checkboxSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: CheckboxGroupType;
  labelSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  checkboxSlots: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-col">
        <div className="h-fit w-full flex flex-row gap-[2px]">
          {labelSlot}
          {asteriskSlot}
        </div>
        {descriptionSlot}
      </div>
      <div className="h-fit w-full flex flex-col gap-1">{checkboxSlots}</div>
    </>,
    `h-fit w-fit flex flex-col gap-3 ${className}`,
  );
