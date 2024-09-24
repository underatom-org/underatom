import { ReactNode, useId } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import { getGenericContext } from "../../../_utils";
import { mergeProps, useFocusRing } from "react-aria";
import {
  switchAsteriskClass,
  switchClass,
  switchDescriptionClass,
  switchLabelClass,
  SwitchStyleProps,
  switchToggleClass,
  switchToggleHandleClass,
  switchToggleHandleIconClass,
  SwitchToggleStyleProps,
} from "../../../styles/switch";

/*
  ====================================
  Switch
  ====================================
*/

export const { Provider: SwitchInternalProvider, useComponentContext: useSwitchInternalProvider } =
  getGenericContext<USwitchRootProps>("Switch");

export type USwitchRootProps = RadixSwitch.SwitchProps & SwitchStyleProps & { id?: string; invalid?: boolean };
export const USwitchRoot = (props: USwitchRootProps) => {
  const id = useId();
  return (
    <div
      className={switchClass({ className: props.className, switchProps: props })}
      data-invalid={!!props.invalid}
      data-required={!!props.required}
      data-disabled={!!props.disabled}
    >
      <SwitchInternalProvider value={{ ...props, id }}>{props.children}</SwitchInternalProvider>
    </div>
  );
};

export type USwitchLabelProps = {
  children: ReactNode;
  className?: string;
};
export const USwitchLabel = (props: USwitchLabelProps) => {
  const switchProps = useSwitchInternalProvider();
  return (
    <label htmlFor={switchProps.id} className={switchLabelClass({ className: props.className, switchProps })}>
      {props.children}
    </label>
  );
};

export type USwitchDescriptionProps = {
  children: ReactNode;
  className?: string;
};
export const USwitchDescription = (props: USwitchDescriptionProps) => {
  const switchProps = useSwitchInternalProvider();
  return <span className={switchDescriptionClass({ className: props.className, switchProps })}>{props.children}</span>;
};

export type USwitchAsteriskProps = {
  className?: string;
};
export const USwitchAsterisk = (props: USwitchAsteriskProps) => {
  const switchProps = useSwitchInternalProvider();
  return <span className={switchAsteriskClass({ className: props.className, switchProps })}>*</span>;
};

/*
  ====================================
  SwitchToggle
  ====================================
*/

export const { Provider: SwitchToggleInternalProvider, useComponentContext: useSwitchToggleInternalProvider } =
  getGenericContext<USwitchToggleRootProps>("Switch");

export type USwitchToggleRootProps = { children?: ReactNode; className?: string } & SwitchToggleStyleProps;
export const USwitchToggleRoot = (props: USwitchToggleRootProps) => {
  const { isFocusVisible, focusProps } = useFocusRing();
  const switchProps = useSwitchInternalProvider();
  return (
    <RadixSwitch.Root
      {...mergeProps(switchProps, focusProps)}
      className={switchToggleClass({ className: props.className, switchProps, switchToggleProps: props })}
      data-ring={isFocusVisible}
    >
      <SwitchToggleInternalProvider value={props}>{props.children}</SwitchToggleInternalProvider>
    </RadixSwitch.Root>
  );
};

/*
  ====================================
  SwitchToggleHandle
  ====================================
*/

export type USwitchToggleHandleRootProps = RadixSwitch.SwitchThumbProps & {
  /** Thumb content */
  children?: ReactNode;
};
export const USwitchToggleHandleRoot = (props: USwitchToggleHandleRootProps) => {
  const switchProps = useSwitchInternalProvider();
  const switchToggleProps = useSwitchToggleInternalProvider();
  return (
    <RadixSwitch.Thumb
      {...props}
      className={switchToggleHandleClass({ className: props.className, switchProps, switchToggleProps })}
    />
  );
};

export type USwitchToggleHandleIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const USwitchToggleHandleIcon = ({ children, className }: USwitchToggleHandleIconProps) => {
  const switchProps = useSwitchInternalProvider();
  const switchToggleProps = useSwitchToggleInternalProvider();
  return <>{children(switchToggleHandleIconClass({ className, switchProps, switchToggleProps }))}</>;
};
