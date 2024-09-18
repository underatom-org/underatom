import * as RadioGroup from "@radix-ui/react-radio-group";
import { ReactNode, useId } from "react";
import { mergeProps, useFocusRing } from "react-aria";
import {
  RadioGroupStyleProps,
  radioGroupClass,
  radioGroupLabelClass,
  radioGroupDescriptionClass,
  radioGroupAsteriskClass,
  radioGroupRadioLabelClass,
  radioGroupRadioDescriptionClass,
  radioGroupRadioClass,
  radioGroupRadioButtonClass,
  radioGroupRadioButtonIndicatorClass,
} from "../../../styles/radio-group";
import { getGenericContext } from "../../../_utils";

/*
  ====================================
  RadioGroup
  ====================================
*/

export const { Provider: RadioGroupInternalProvider, useComponentContext: useRadioGroupInternalProvider } =
  getGenericContext<URadioGroupRootProps>("RadioGroupInternalProvider");

export type URadioGroupRootProps = RadioGroup.RadioGroupProps &
  RadioGroupStyleProps & {
    className?: string;
    invalid?: boolean;
    required?: boolean;
  };
export const URadioGroupRoot = (props: URadioGroupRootProps) => {
  return (
    <RadioGroup.Root
      {...props}
      data-required={!!props.required}
      data-invalid={!!props.invalid}
      className={radioGroupClass({ className: props.className, radioGroupProps: props })}
    >
      <RadioGroupInternalProvider value={props}>{props.children}</RadioGroupInternalProvider>
    </RadioGroup.Root>
  );
};

export type URadioGroupLabelProps = {
  /** Text content for label */
  children: ReactNode;
  className?: string;
};
export const URadioGroupLabel = (props: URadioGroupLabelProps) => {
  const radioGroupProps = useRadioGroupInternalProvider();
  return <label {...props} className={radioGroupLabelClass({ className: props.className, radioGroupProps })} />;
};

export type URadioGroupDescriptionProps = {
  /** Text content for description */
  children: ReactNode;
  className?: string;
};
export const URadioGroupDescription = (props: URadioGroupDescriptionProps) => {
  const radioGroupProps = useRadioGroupInternalProvider();
  return <span {...props} className={radioGroupDescriptionClass({ className: props.className, radioGroupProps })} />;
};

export type URadioGroupAsteriskProps = {
  className?: string;
};
export const URadioGroupAsterisk = (props: URadioGroupAsteriskProps) => {
  const radioGroupProps = useRadioGroupInternalProvider();
  return <span className={radioGroupAsteriskClass({ className: props.className, radioGroupProps })}>*</span>;
};

/*
  ====================================
  RadioGroupRadio
  ====================================
*/

const { Provider: RadioGroupRadioInternalProvider, useComponentContext: useRadioGroupRadioInternalContext } =
  getGenericContext<URadioGroupRadioRootProps & { id: string }>("RadioGroupRadioInternalContext");

export type URadioGroupRadioRootProps = RadioGroup.RadioGroupItemProps & {
  invalid?: boolean;
};
export const URadioGroupRadioRoot = ({
  disabled: radioDisabled,
  invalid: radioInvalid,
  ...props
}: URadioGroupRadioRootProps) => {
  const { disabled: parentDisabled, invalid: parentInvalid, ...radioGroupProps } = useRadioGroupInternalProvider();
  const disabled = radioDisabled || parentDisabled;
  const invalid = radioInvalid || parentInvalid;
  const fullProps = { disabled, invalid, ...props };
  const generatedId = useId();
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <RadioGroup.Item
      {...mergeProps(fullProps, focusProps)}
      className={radioGroupRadioClass({ className: props.className, radioGroupProps })}
      data-invalid={!!invalid}
      data-ring={isFocusVisible}
    >
      <RadioGroupRadioInternalProvider value={{ id: generatedId, ...fullProps }}>
        {props.children}
      </RadioGroupRadioInternalProvider>
    </RadioGroup.Item>
  );
};

export type URadioGroupRadioDescriptionProps = {
  /** Text content for description */
  children: ReactNode;
  className?: string;
};
export const URadioGroupRadioDescription = (props: URadioGroupRadioDescriptionProps) => {
  const radioGroupProps = useRadioGroupInternalProvider();
  return (
    <span {...props} className={radioGroupRadioDescriptionClass({ className: props.className, radioGroupProps })} />
  );
};

export type URadioGroupRadioLabelProps = {
  /** Text content for label */
  children: ReactNode;
  className?: string;
};
export const URadioGroupRadioLabel = (props: URadioGroupRadioLabelProps) => {
  const radioGroupProps = useRadioGroupInternalProvider();
  const { id } = useRadioGroupRadioInternalContext();
  return (
    <label
      {...props}
      htmlFor={id}
      className={radioGroupRadioLabelClass({ className: props.className, radioGroupProps })}
    />
  );
};

/*
  ====================================
  RadioGroupRadioButton
  ====================================
*/

export type URadioGroupRadioButtonRootProps = {
  children: ReactNode;
  className?: string;
};
export const URadioGroupRadioButtonRoot = (props: URadioGroupRadioButtonRootProps) => {
  const { disabled } = useRadioGroupRadioInternalContext();
  const radioGroupProps = useRadioGroupInternalProvider();
  const fullProps = { disabled, ...props };

  return <div {...fullProps} className={radioGroupRadioButtonClass({ className: props.className, radioGroupProps })} />;
};

export type URadioGroupRadioButtonIndicatorProps = {
  className?: string;
};
export const URadioGroupRadioButtonIndicator = (props: URadioGroupRadioButtonIndicatorProps) => {
  const radioGroupProps = useRadioGroupInternalProvider();
  return (
    <RadioGroup.Indicator
      className={radioGroupRadioButtonIndicatorClass({ className: props.className, radioGroupProps })}
    />
  );
};
