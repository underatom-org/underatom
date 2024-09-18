import { ComponentPropsWithoutRef, ReactNode } from "react";
import { mergeProps, useFocusRing } from "react-aria";
import {
  checkboxAsteriskClass,
  checkboxButtonClass,
  checkboxButtonIndicatorClass,
  checkboxClass,
  checkboxDescriptionClass,
  checkboxLabelClass,
  CheckboxStyleProps,
} from "../../../styles/checkbox";
import { getGenericContext } from "../../../_utils";
import { Check, Minus } from "../../../assets/Icons";
import { Checkbox, CheckboxProps, CheckboxRenderProps } from "react-aria-components";

/*
  ====================================
  Checkbox
  ====================================
*/

export const { Provider: CheckboxInternalProvider, useComponentContext: useCheckboxInternalProvider } =
  getGenericContext<UCheckboxRootProps & { renderProps: CheckboxRenderProps }>("CheckboxInternalProvider");

export type UCheckboxRootProps = CheckboxProps &
  CheckboxStyleProps & {
    children?: ReactNode;
    className?: string;
  };

export const UCheckboxRoot = (props: UCheckboxRootProps) => {
  return (
    <Checkbox {...props} className={checkboxClass({ className: props.className, checkboxProps: props })}>
      {(renderProps) => (
        <CheckboxInternalProvider value={{ ...props, renderProps }}>{props.children}</CheckboxInternalProvider>
      )}
    </Checkbox>
  );
};

export type UCheckboxDescriptionProps = {
  children: ReactNode;
  className?: string;
};
export const UCheckboxDescription = ({ children, className }: UCheckboxDescriptionProps) => {
  const checkboxProps = useCheckboxInternalProvider();
  return <span className={checkboxDescriptionClass({ className, checkboxProps })}>{children}</span>;
};

export type UCheckboxAsterisk = {
  className?: string;
};
export const UCheckboxAsterisk = ({ className }: UCheckboxAsterisk) => {
  const checkboxProps = useCheckboxInternalProvider();
  return <span className={checkboxAsteriskClass({ className, checkboxProps })}>*</span>;
};

export type UCheckboxLabelProps = {
  children: ReactNode;
  className?: string;
};
export const UCheckboxLabel = ({ children, className }: UCheckboxLabelProps) => {
  const checkboxProps = useCheckboxInternalProvider();
  return <span className={checkboxLabelClass({ checkboxProps, className })}>{children}</span>;
};

/*
  ====================================
  CheckboxButton
  ====================================
*/

export type UCheckboxButtonProps = ComponentPropsWithoutRef<"div">;
export const UCheckboxButtonRoot = (props: UCheckboxButtonProps) => {
  const { focusProps, isFocusVisible } = useFocusRing();
  const checkboxProps = useCheckboxInternalProvider();

  return (
    <div
      {...mergeProps(props, focusProps)}
      className={checkboxButtonClass({ className: props.className, checkboxProps })}
      data-ring={isFocusVisible}
      aria-hidden="true"
    />
  );
};
export type UCheckboxButtonIndicatorProps = {
  className?: string;
};
export const UCheckboxButtonIndicator = ({ className }: UCheckboxButtonIndicatorProps) => {
  const { renderProps, ...checkboxProps } = useCheckboxInternalProvider();
  const { isIndeterminate, isSelected } = renderProps;

  if (isIndeterminate) {
    return (
      <Minus
        className={checkboxButtonIndicatorClass({
          className,
          checkboxProps,
        })}
      />
    );
  }
  if (isSelected) {
    return (
      <Check
        className={checkboxButtonIndicatorClass({
          className,
          checkboxProps,
        })}
      />
    );
  }

  return null;
};
