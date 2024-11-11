import { RadioGroupLayout, RadioGroupRadioButtonLayout, RadioGroupRadioLayout } from "../../../styles/radio-group";
import {
  URadioGroupAsterisk,
  URadioGroupDescription,
  URadioGroupLabel,
  URadioGroupRadioButtonIndicator,
  URadioGroupRadioButtonRoot,
  URadioGroupRadioButtonRootProps,
  URadioGroupRadioDescription,
  URadioGroupRadioLabel,
  URadioGroupRadioRoot,
  URadioGroupRadioRootProps,
  URadioGroupRoot,
  URadioGroupRootProps,
  useRadioGroupInternalProvider,
} from "./RadioGroup.underatoms";

/*
  ====================================
  RadioGroup
  ====================================
*/

export type RadioGroupProps = URadioGroupRootProps & {
  label: string;
  description: string;
};
export const RadioGroup = ({ children, label, description, ...props }: RadioGroupProps) => {
  return (
    <RadioGroupLayout
      renderRoot={(children, className) => (
        <URadioGroupRoot {...props} className={className}>
          {children}
        </URadioGroupRoot>
      )}
      styleProps={{ className: props.className, radioGroupProps: props }}
      labelSlot={<URadioGroupLabel>{label}</URadioGroupLabel>}
      descriptionSlot={<URadioGroupDescription>{description}</URadioGroupDescription>}
      asteriskSlot={<URadioGroupAsterisk />}
      radioSlots={children}
    />
  );
};

/*
  ====================================
  RadioGroupRadio
  ====================================
*/

export type RadioGroupRadioProps = Omit<URadioGroupRadioRootProps, "children"> & {
  label?: string;
  description?: string;
};
export const RadioGroupRadio = ({ label, description, ...props }: RadioGroupRadioProps) => {
  const radioGroupProps = useRadioGroupInternalProvider();
  return (
    <RadioGroupRadioLayout
      renderRoot={(children, className) => (
        <URadioGroupRadioRoot {...props} className={className}>
          {children}
        </URadioGroupRadioRoot>
      )}
      styleProps={{ className: props.className, radioGroupProps }}
      buttonSlot={<RadioGroupRadioButton />}
      labelSlot={<URadioGroupRadioLabel>{label}</URadioGroupRadioLabel>}
      descriptionSlot={<URadioGroupRadioDescription>{description}</URadioGroupRadioDescription>}
    />
  );
};

/*
  ====================================
  RadioGroupRadioButton
  ====================================
*/

export type RadioGroupRadioButtonProps = Omit<URadioGroupRadioButtonRootProps, "children">;
export const RadioGroupRadioButton = (props: RadioGroupRadioButtonProps) => {
  const radioGroupProps = useRadioGroupInternalProvider();
  return (
    <RadioGroupRadioButtonLayout
      renderRoot={(children, className) => (
        <URadioGroupRadioButtonRoot {...props} className={className + props}>
          {children}
        </URadioGroupRadioButtonRoot>
      )}
      styleProps={{ className: props.className, radioGroupProps }}
      indicatorSlot={<URadioGroupRadioButtonIndicator />}
    />
  );
};
