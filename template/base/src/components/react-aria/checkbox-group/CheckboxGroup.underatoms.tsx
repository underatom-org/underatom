import { CheckboxGroup, Checkbox, Label, CheckboxProps, CheckboxRenderProps, LabelProps } from "react-aria-components";
import {
  checkboxGroupAsteriskClass,
  checkboxGroupCheckboxButtonClass,
  checkboxGroupCheckboxButtonIndicatorClass,
  checkboxGroupCheckboxClass,
  checkboxGroupCheckboxDescriptionClass,
  checkboxGroupCheckboxLabelClass,
  checkboxGroupClass,
  checkboxGroupDescriptionClass,
  checkboxGroupLabelClass,
  CheckboxGroupStyleProps,
} from "../../../styles/checkbox-group";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { CheckboxGroupProps } from "react-stately";
import { getGenericContext } from "../../../_utils";
import { Check, Minus } from "../../../assets/Icons";

/*
  ====================================
  CheckboxGroup
  ====================================
*/

export const { Provider: CheckboxGroupInternalProvider, useComponentContext: useCheckboxGroupInternalProvider } =
  getGenericContext<UCheckboxGroupRootProps>("CheckboxGroupInternalProvider");

export type UCheckboxGroupRootProps = CheckboxGroupProps &
  CheckboxGroupStyleProps & {
    children: ReactNode;
    className?: string;
  };

export const UCheckboxGroupRoot = (props: UCheckboxGroupRootProps) => {
  return (
    <CheckboxGroup {...props} className={checkboxGroupClass({ className: props.className, checkboxGroupProps: props })}>
      <CheckboxGroupInternalProvider value={props}>{props.children}</CheckboxGroupInternalProvider>
    </CheckboxGroup>
  );
};

export type UCheckboxGroupLabel = LabelProps;
export const UCheckboxGroupLabel = (props: UCheckboxGroupLabel) => {
  const checkboxGroupProps = useCheckboxGroupInternalProvider();
  return <Label {...props} className={checkboxGroupLabelClass({ className: props.className, checkboxGroupProps })} />;
};

export type UCheckboxGroupAsteriskProps = {
  className?: string;
};
export const UCheckboxGroupAsterisk = (props: UCheckboxGroupAsteriskProps) => {
  const checkboxGroupProps = useCheckboxGroupInternalProvider();
  return <span className={checkboxGroupAsteriskClass({ className: props.className, checkboxGroupProps })}>*</span>;
};

export type UCheckboxGroupDescriptionProps = {
  /** Text content */
  children: ReactNode;
  className?: string;
};
export const UCheckboxGroupDescription = (props: UCheckboxGroupDescriptionProps) => {
  const checkboxGroupProps = useCheckboxGroupInternalProvider();
  return (
    <span {...props} className={checkboxGroupDescriptionClass({ className: props.className, checkboxGroupProps })} />
  );
};

/*
  ====================================
  CheckboxGroupCheckbox
  ====================================
*/

export const {
  Provider: CheckboxGroupCheckboxInternalProvider,
  useComponentContext: useCheckboxGroupCheckboxInternalProvider,
} = getGenericContext<CheckboxRenderProps>("CheckboxGroupCheckboxProps");

export type UCheckboxGroupCheckboxRootProps = Omit<CheckboxProps, "isInvalid"> & {
  className?: string;
};
export const UCheckboxGroupCheckboxRoot = (props: UCheckboxGroupCheckboxRootProps) => {
  const checkboxGroupProps = useCheckboxGroupInternalProvider();
  return (
    <Checkbox {...props} className={checkboxGroupCheckboxClass({ className: props.className, checkboxGroupProps })}>
      {(renderProps) => (
        <CheckboxGroupCheckboxInternalProvider value={renderProps}>
          <>{props.children}</>
        </CheckboxGroupCheckboxInternalProvider>
      )}
    </Checkbox>
  );
};

export type UCheckboxGroupCheckboxLabelProps = {
  /** Text content */
  children: ReactNode;
  className?: string;
};
export const UCheckboxGroupCheckboxLabel = (props: UCheckboxGroupCheckboxLabelProps) => {
  const checkboxGroupProps = useCheckboxGroupInternalProvider();
  return (
    <span {...props} className={checkboxGroupCheckboxLabelClass({ className: props.className, checkboxGroupProps })} />
  );
};

export type UCheckboxGroupCheckboxDescriptionProps = {
  /** Text content */
  children: ReactNode;
  className?: string;
};
export const UCheckboxGroupCheckboxDescription = (props: UCheckboxGroupCheckboxDescriptionProps) => {
  const checkboxGroupProps = useCheckboxGroupInternalProvider();
  return (
    <span
      {...props}
      className={checkboxGroupCheckboxDescriptionClass({ className: props.className, checkboxGroupProps })}
    />
  );
};

/*
  ====================================
  CheckboxGroupCheckboxButton
  ====================================
*/

export type UCheckboxGroupCheckboxButtonRootProps = ComponentPropsWithoutRef<"div">;
export const UCheckboxGroupCheckboxButtonRoot = ({ children, ...props }: UCheckboxGroupCheckboxButtonRootProps) => {
  const checkboxGroupProps = useCheckboxGroupInternalProvider();
  return (
    <div
      {...props}
      className={checkboxGroupCheckboxButtonClass({
        className: props.className,
        checkboxGroupProps,
      })}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};

export type UCheckboxGroupCheckboxButtonIndicatorProps = {
  className?: string;
};
export const UCheckboxGroupCheckboxButtonIndicator = (props: UCheckboxGroupCheckboxButtonIndicatorProps) => {
  const { isIndeterminate, isSelected } = useCheckboxGroupCheckboxInternalProvider();
  const checkboxGroupProps = useCheckboxGroupInternalProvider();

  if (isIndeterminate) {
    return (
      <Minus
        className={checkboxGroupCheckboxButtonIndicatorClass({
          className: props.className,
          checkboxGroupProps,
        })}
      />
    );
  }
  if (isSelected) {
    return (
      <Check
        className={checkboxGroupCheckboxButtonIndicatorClass({
          className: props.className,
          checkboxGroupProps,
        })}
      />
    );
  }
  return null;
};
