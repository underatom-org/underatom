import type { RenderRoot } from "../../../base/src/_utils";
import type { RadioGroupRadioButtonType, RadioGroupRadioType, RadioGroupType } from "~/base/src/styles/radio-group";

export const radioGroupRadioButtonClass = ({ className }: RadioGroupRadioButtonType) => {
  return `
  group/radioGroupRadioButton
  border-solid
  group-data-[disabled]/radioGroupRadio:border-solid
  group-data-[disabled]/radioGroup:border-solid
  border-primary-950
  border-1
  group-data-[disabled]/radioGroupRadio:border-1
  group-data-[disabled]/radioGroup:border-1
  bg-base-50
  group-active/radioGroupRadio:bg-base-50
  rounded-[50px]
  group-data-[disabled]/radioGroupRadio:rounded-[50px]
  group-data-[disabled]/radioGroup:rounded-[50px]
  transition-all
  group-hover/radioGroupRadio:bg-base-100
  group-data-[ring=true]/radioGroupRadio:bg-base-100
  group-data-[ring=true]/radioGroupRadio:shadow-focus-ring
  group-data-[disabled]/radioGroupRadio:border-base-200
  group-data-[disabled]/radioGroup:border-base-200
  group-data-[disabled]/radioGroupRadio:bg-primary-50
  group-data-[disabled]/radioGroup:bg-primary-50
  group-data-[invalid=true]/radioGroupRadio:border-danger-500
  group-data-[invalid=true]/radioGroup:border-danger-500
  group-data-[invalid=true]/radioGroupRadio:bg-danger-50
  group-data-[invalid=true]/radioGroupRadio:group-active/radioGroupRadio:bg-danger-50
  group-data-[invalid=true]/radioGroup:bg-danger-50
  group-data-[invalid=true]/radioGroup:group-active/radioGroupRadio:bg-danger-50
  group-data-[invalid=true]/radioGroupRadio:group-hover/radioGroupRadio:bg-danger-100
  group-data-[invalid=true]/radioGroupRadio:group-data-[ring=true]/radioGroupRadio:bg-danger-100
  group-data-[invalid=true]/radioGroup:group-hover/radioGroupRadio:bg-danger-100
  group-data-[invalid=true]/radioGroup:group-data-[ring=true]/radioGroupRadio:bg-danger-100
  group-data-[state=checked]/radioGroupRadio:[border:unset]
  group-data-[disabled]/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:[border:unset]
  group-data-[disabled]/radioGroup:group-data-[state=checked]/radioGroupRadio:[border:unset]
  group-data-[state=checked]/radioGroupRadio:bg-primary-950
  group-active/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-primary-950
  group-hover/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-primary-800
  group-data-[ring=true]/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-primary-800
  group-data-[disabled]/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-base-200
  group-data-[disabled]/radioGroup:group-data-[state=checked]/radioGroupRadio:bg-base-200
  group-data-[invalid=true]/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-danger-500
  group-data-[invalid=true]/radioGroup:group-data-[state=checked]/radioGroupRadio:bg-danger-500
  group-data-[disabled]/radioGroup:group-data-[ring=true]/radioGroupRadio:shadow-none
  group-data-[invalid=true]/radioGroupRadio:group-active/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-danger-500
  group-data-[invalid=true]/radioGroupRadio:group-hover/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-danger-500
  group-data-[invalid=true]/radioGroupRadio:group-data-[ring=true]/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-danger-500
  group-data-[invalid=true]/radioGroup:group-active/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-danger-500
  group-data-[invalid=true]/radioGroup:group-hover/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-danger-500
  group-data-[invalid=true]/radioGroup:group-data-[ring=true]/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-danger-500
  group-data-[disabled]/radioGroup:group-hover/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-base-200
  group-data-[disabled]/radioGroup:group-active/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-base-200
  group-data-[disabled]/radioGroup:group-data-[ring=true]/radioGroupRadio:group-data-[state=checked]/radioGroupRadio:bg-base-200
  group-data-[disabled]/radioGroup:group-hover/radioGroupRadio:bg-primary-50
  group-data-[disabled]/radioGroup:group-active/radioGroupRadio:bg-primary-50
  group-data-[disabled]/radioGroup:group-data-[ring=true]/radioGroupRadio:bg-primary-50
  ${className}
  `;
};

export const radioGroupRadioButtonIndicatorClass = ({ className }: RadioGroupRadioButtonType) => {
  return `
  hidden
  group-data-[state=checked]/radioGroupRadio:[display:unset]
  group-data-[state=checked]/radioGroupRadio:w-[6px]
  group-data-[state=checked]/radioGroupRadio:h-[6px]
  group-data-[state=checked]/radioGroupRadio:bg-white
  group-data-[state=checked]/radioGroupRadio:rounded-[50px]
  group-data-[state=checked]/radioGroupRadio:transition-all
  ${className}
  `;
};

export const RadioGroupRadioButtonLayout = ({
  renderRoot,
  styleProps: { className },
  indicatorSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: RadioGroupRadioButtonType;
  indicatorSlot: React.ReactNode;
}) => renderRoot(<>{indicatorSlot}</>, `h-[14px] w-[14px] flex flex-row justify-center items-center ${className}`);

export const radioGroupRadioClass = ({ className }: RadioGroupRadioType) => {
  return `group/radioGroupRadio  ${className}`;
};

export const radioGroupRadioLabelClass = ({ className }: RadioGroupRadioType) => {
  return `text-base-950 text-sm font-text font-medium group-data-[disabled]/radioGroup:text-base-400 group-data-[disabled]/radioGroupRadio:text-base-400 ${className}`;
};

export const radioGroupRadioDescriptionClass = ({ className }: RadioGroupRadioType) => {
  return `
  text-base-700
  text-sm
  font-text
  font-normal
  group-data-[invalid=true]/radioGroupRadio:text-danger-500
  group-data-[invalid=true]/radioGroup:text-danger-500
  group-data-[disabled]/radioGroup:text-base-400
  group-data-[disabled]/radioGroupRadio:text-base-400
  group-data-[disabled]/radioGroup:group-data-[invalid=true]/radioGroupRadio:text-base-400
  group-data-[invalid=true]/radioGroupRadio:group-data-[disabled]/radioGroupRadio:text-base-400
  group-data-[invalid=true]/radioGroup:group-data-[disabled]/radioGroup:text-base-400
  group-data-[invalid=true]/radioGroup:group-data-[disabled]/radioGroupRadio:text-base-400
  ${className}
  `;
};

export const RadioGroupRadioLayout = ({
  renderRoot,
  styleProps: { className },
  buttonSlot,
  labelSlot,
  descriptionSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: RadioGroupRadioType;
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

export const radioGroupClass = ({ className }: RadioGroupType) => {
  return `group/radioGroup  ${className}`;
};

export const radioGroupLabelClass = ({ className }: RadioGroupType) => {
  return `text-base-900 text-sm font-text font-medium group-data-[disabled]/radioGroup:text-base-400 ${className}`;
};

export const radioGroupAsteriskClass = ({ className }: RadioGroupType) => {
  return `
  group-data-[required=true]/radioGroup:[display:unset]
  group-data-[required=true]/radioGroup:text-danger-500
  group-data-[required=true]/radioGroup:text-xs
  group-data-[required=true]/radioGroup:font-text
  group-data-[required=true]/radioGroup:font-medium
  group-data-[required=true]/radioGroup:group-data-[disabled]/radioGroup:text-base-400
  hidden
  ${className}
  `;
};

export const radioGroupDescriptionClass = ({ className }: RadioGroupType) => {
  return `text-base-700 text-sm font-text font-normal group-data-[invalid=true]/radioGroup:text-danger-500 group-data-[disabled]/radioGroup:text-base-400 group-data-[invalid=true]/radioGroup:group-data-[disabled]/radioGroup:text-base-400 ${className}`;
};

export const RadioGroupLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
  asteriskSlot,
  descriptionSlot,
  radioSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: RadioGroupType;
  labelSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
  radioSlots: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-col [&>*:not(:first-child)]:[margin-top:-4px]">
        <div className="h-fit w-full flex flex-row gap-[2px]">
          {labelSlot}
          {asteriskSlot}
        </div>
        {descriptionSlot}
      </div>
      <div className="h-fit w-fit flex flex-col gap-1">{radioSlots}</div>
    </>,
    `h-fit w-fit flex flex-col gap-3 ${className}`,
  );
