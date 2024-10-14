import {
  CheckboxGroupCheckboxButtonLayout,
  CheckboxGroupCheckboxLayout,
  CheckboxGroupLayout,
} from "../../../styles/checkbox-group";
import {
  UCheckboxGroupAsterisk,
  UCheckboxGroupCheckboxButtonIndicator,
  UCheckboxGroupCheckboxButtonRoot,
  UCheckboxGroupCheckboxButtonRootProps,
  UCheckboxGroupCheckboxDescription,
  UCheckboxGroupCheckboxLabel,
  UCheckboxGroupCheckboxRoot,
  UCheckboxGroupCheckboxRootProps,
  UCheckboxGroupDescription,
  UCheckboxGroupLabel,
  UCheckboxGroupRoot,
  UCheckboxGroupRootProps,
  useCheckboxGroupInternalProvider,
} from "./CheckboxGroup.underatoms";

/*
  ====================================
  CheckboxGroup
  ====================================
*/

export type CheckboxGroupProps = Omit<UCheckboxGroupRootProps, "children"> & {
  label: string;
  description: string;
  className?: string;
  checkboxGroupCheckboxSlots: React.ReactNode[];
};

export const CheckboxGroup = ({ label, description, checkboxGroupCheckboxSlots, ...props }: CheckboxGroupProps) => {
  return (
    <CheckboxGroupLayout
      renderRoot={(children, className) => (
        <UCheckboxGroupRoot {...props} className={className}>
          {children}
        </UCheckboxGroupRoot>
      )}
      styleProps={{ className: props.className, checkboxGroupProps: props }}
      labelSlot={<UCheckboxGroupLabel>{label}</UCheckboxGroupLabel>}
      asteriskSlot={<UCheckboxGroupAsterisk />}
      descriptionSlot={<UCheckboxGroupDescription>{description}</UCheckboxGroupDescription>}
      checkboxSlots={checkboxGroupCheckboxSlots}
    />
  );
};

/*
  ====================================
  CheckboxGroupCheckbox
  ====================================
*/

export type CheckboxGroupCheckboxProps = UCheckboxGroupCheckboxRootProps & {
  /** Text content */
  label?: string;
  description?: string;
};

export const CheckboxGroupCheckbox = ({ label, description, ...props }: CheckboxGroupCheckboxProps) => {
  const checkboxGroupProps = useCheckboxGroupInternalProvider();
  return (
    <CheckboxGroupCheckboxLayout
      renderRoot={(children, className) => (
        <UCheckboxGroupCheckboxRoot {...props} className={className}>
          {children}
        </UCheckboxGroupCheckboxRoot>
      )}
      styleProps={{ className: props.className, checkboxGroupProps }}
      buttonSlot={<CheckboxGroupCheckboxButton />}
      labelSlot={<UCheckboxGroupCheckboxLabel>{label}</UCheckboxGroupCheckboxLabel>}
      descriptionSlot={<UCheckboxGroupCheckboxDescription>{description}</UCheckboxGroupCheckboxDescription>}
    />
  );
};

/*
  ====================================
  CheckboxGroupCheckboxButton
  ====================================
*/

export type CheckboxGroupCheckboxButtonProps = Omit<UCheckboxGroupCheckboxButtonRootProps, "children">;

export const CheckboxGroupCheckboxButton = (props: CheckboxGroupCheckboxButtonProps) => {
  const checkboxGroupProps = useCheckboxGroupInternalProvider();
  return (
    <CheckboxGroupCheckboxButtonLayout
      renderRoot={(children, className) => {
        return (
          <UCheckboxGroupCheckboxButtonRoot {...props} className={className}>
            {children}
          </UCheckboxGroupCheckboxButtonRoot>
        );
      }}
      styleProps={{ className: props.className, checkboxGroupProps }}
      indicatorSlot={<UCheckboxGroupCheckboxButtonIndicator />}
    />
  );
};
