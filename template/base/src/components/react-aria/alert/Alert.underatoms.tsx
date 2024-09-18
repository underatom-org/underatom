import { ReactNode, useRef } from "react";
import { AriaButtonProps, mergeProps, useButton, useFocusRing } from "react-aria";
import { X } from "../../../assets/Icons";
import {
  AlertActionStyleProps,
  AlertStyleProps,
  alertActionClass,
  alertActionIconClass,
  alertActionLabelClass,
  alertClass,
  alertDescriptionClass,
  alertDismissClass,
  alertDismissIconClass,
  alertIconClass,
  alertStatusClass,
  alertStatusIconClass,
  alertSubtitleClass,
  alertTitleClass,
} from "../../../styles/alert";
import { getGenericContext } from "../../../_utils";

/*
  ====================================
  Alert
  ====================================
*/

export const { Provider: AlertInternalProvider, useComponentContext: useAlertInternalProvider } =
  getGenericContext<UAlertRootProps>("AlertInternalProvider");

export type UAlertRootProps = AlertStyleProps & {
  children: ReactNode;
  className?: string;
};
export const UAlertRoot = (props: UAlertRootProps) => {
  return (
    <div className={alertClass({ className: props.className, alertProps: props })}>
      <AlertInternalProvider value={props}>{props.children}</AlertInternalProvider>
    </div>
  );
};

export type UAlertTitleProps = {
  children: ReactNode;
};
export const UAlertTitle = ({ children }: UAlertTitleProps) => {
  const alertProps = useAlertInternalProvider();
  return <span className={alertTitleClass({ alertProps })}>{children}</span>;
};

export type UAlertDescriptionProps = {
  children: ReactNode;
};
export const UAlertDescription = ({ children }: UAlertDescriptionProps) => {
  const alertProps = useAlertInternalProvider();
  return <span className={alertDescriptionClass({ alertProps })}>{children}</span>;
};

export type UAlertSubtitleProps = {
  children: ReactNode;
};
export const UAlertSubtitle = ({ children }: UAlertSubtitleProps) => {
  const alertProps = useAlertInternalProvider();
  return <span className={alertSubtitleClass({ alertProps })}>{children}</span>;
};

export type UAlertIconProps = {
  children: (className: string) => ReactNode;
};
export const UAlertIcon = ({ children }: UAlertIconProps) => {
  const alertProps = useAlertInternalProvider();
  return <>{children(alertIconClass({ alertProps }))}</>;
};

/*
  ====================================
  AlertDismiss
  ====================================
*/
export type UAlertDismissRootProps = AriaButtonProps & {
  innerRef?: React.RefObject<HTMLButtonElement>;
  className?: string;
};
export const UAlertDismissRoot = (props: UAlertDismissRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, innerRef);
  const { isFocusVisible, focusProps } = useFocusRing();
  const alertProps = useAlertInternalProvider();
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={innerRef}
      data-disabled={props.isDisabled}
      data-active={isPressed}
      data-ring={isFocusVisible}
      className={alertDismissClass({ alertProps, className: props.className })}
    >
      {props.children}
    </button>
  );
};

export const UAlertDismissIcon = () => {
  const alertProps = useAlertInternalProvider();
  return <X className={alertDismissIconClass({ alertProps })} />;
};

/*
  ====================================
  AlertAction
  ====================================
*/

export const { Provider: AlertActionInternalProvider, useComponentContext: useAlertActionInternalProvider } =
  getGenericContext<UAlertActionRootProps>("AlertActionInternalProvider");

export type UAlertActionRootProps = AlertActionStyleProps &
  AriaButtonProps & {
    innerRef?: React.RefObject<HTMLButtonElement>;
    className?: string;
  };
export const UAlertActionRoot = (props: UAlertActionRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, innerRef);
  const { isFocusVisible, focusProps } = useFocusRing();
  const alertProps = useAlertInternalProvider();
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={innerRef}
      data-disabled={props.isDisabled}
      data-active={isPressed}
      data-ring={isFocusVisible}
      className={alertActionClass({ className: props.className, alertProps, alertActionProps: props })}
    >
      <AlertActionInternalProvider value={props}>{props.children}</AlertActionInternalProvider>
    </button>
  );
};

export type UAlertActionIconProps = {
  children: (className: string) => ReactNode;
};
export const UAlertActionIcon = ({ children }: UAlertActionIconProps) => {
  const alertProps = useAlertInternalProvider();
  const alertActionProps = useAlertActionInternalProvider();
  return <>{children(alertActionIconClass({ alertProps, alertActionProps }))}</>;
};

export type UAlertActionLabelProps = {
  children: ReactNode;
};
export const UAlertActionLabel = ({ children }: UAlertActionLabelProps) => {
  const alertProps = useAlertInternalProvider();
  const alertActionProps = useAlertActionInternalProvider();
  return <span className={alertActionLabelClass({ alertProps, alertActionProps })}>{children}</span>;
};

/*
  ====================================
  AlertStatus
  ====================================
*/

export type UAlertStatusRootProps = {
  children: ReactNode;
  className?: string;
};
export const UAlertStatusRoot = ({ children, className }: UAlertStatusRootProps) => {
  const alertProps = useAlertInternalProvider();
  return <div className={alertStatusClass({ className, alertProps })}>{children}</div>;
};

export type UAlertStatusIconProps = {
  children: (className: string) => ReactNode;
};
export const UAlertStatusIcon = ({ children }: UAlertStatusIconProps) => {
  const alertProps = useAlertInternalProvider();
  return <>{children(alertStatusIconClass({ alertProps }))}</>;
};
