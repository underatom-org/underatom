import { CheckboxButtonLayout, CheckboxLayout } from "../../../styles/checkbox";
import {
  UCheckboxAsterisk,
  UCheckboxDescription,
  UCheckboxButtonIndicator,
  UCheckboxButtonProps,
  UCheckboxButtonRoot,
  UCheckboxLabel,
  UCheckboxRoot,
  UCheckboxRootProps,
  useCheckboxInternalProvider,
} from "./Checkbox.underatoms";

/*
  ====================================
  Checkbox
  ====================================
*/

export type CheckboxProps = Omit<
  UCheckboxRootProps & {
    label?: string;
    description?: string;
  },
  "children"
>;
export const Checkbox = ({ label, description, className, ...props }: CheckboxProps) => {
  return (
    <CheckboxLayout
      renderRoot={(children, className) => (
        <UCheckboxRoot {...props} className={className}>
          {children}
        </UCheckboxRoot>
      )}
      styleProps={{ className, checkboxProps: props }}
      descriptionSlot={description && <UCheckboxDescription>{description}</UCheckboxDescription>}
      asteriskSlot={props.isRequired && <UCheckboxAsterisk />}
      labelSlot={label && <UCheckboxLabel>{label}</UCheckboxLabel>}
      buttonSlot={<CheckboxButton />}
    />
  );
};

/*
  ====================================
  CheckboxButton
  ====================================
*/

export type CheckboxButtonProps = Omit<UCheckboxButtonProps, "asChild" | "children">;
export const CheckboxButton = (props: CheckboxButtonProps) => {
  const checkboxProps = useCheckboxInternalProvider();
  return (
    <CheckboxButtonLayout
      renderRoot={(children, className) => (
        <UCheckboxButtonRoot {...props} className={className}>
          {children}
        </UCheckboxButtonRoot>
      )}
      styleProps={{ className: props.className, checkboxProps }}
      indicatorSlot={<UCheckboxButtonIndicator />}
    />
  );
};
