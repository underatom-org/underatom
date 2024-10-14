import {
  TextField,
  Label,
  Input,
  TextFieldProps,
  Text,
  TextProps,
  InputProps,
  Button,
  ButtonProps,
} from "react-aria-components";
import { ReactNode, useRef, useState } from "react";

import * as RadixAvatar from "@radix-ui/react-avatar";
import { getGenericContext } from "../../../_utils";
import { X } from "../../../assets/Icons";
import { mergeProps } from "react-aria";
import {
  InputStyleProps,
  inputAsteriskClass,
  inputBoxClass,
  inputBoxClearClass,
  inputBoxClearIconClass,
  inputBoxLeadingIconClass,
  inputBoxTagAvatarClass,
  inputBoxTagAvatarIconClass,
  inputBoxTagAvatarImageClass,
  inputBoxTagAvatarLabelClass,
  inputBoxTagClass,
  inputBoxTagDismissClass,
  inputBoxTagDismissIconClass,
  inputBoxTagDotClass,
  inputBoxTagIconClass,
  inputBoxTagLabelClass,
  inputBoxTextClass,
  inputBoxTrailingIconClass,
  inputClass,
  inputDescriptionClass,
  inputLabelClass,
} from "../../../styles/input";

/*
    ====================================
    Input
    ====================================
*/

export const { Provider: InputInternalProvider, useComponentContext: useInputRootParentProps } = getGenericContext<
  UInputRootProps & {
    inputRef: React.RefObject<HTMLInputElement>;
    isFocused: boolean;
  }
>("UInputRootProps");

export type UInputRootProps = InputStyleProps &
  TextFieldProps & {
    className?: string;
    children?: ReactNode;
    placeholder?: string;
  };
export const UInputRoot = (props: UInputRootProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextField
      {...mergeProps(props, {
        onFocusChange: (isFocused: boolean) => setIsFocused(isFocused),
      })}
      className={inputClass({ className: props.className, inputProps: props })}
    >
      <InputInternalProvider value={{ ...props, inputRef, isFocused }}>{props.children}</InputInternalProvider>
    </TextField>
  );
};

export type UInputLabel = React.ComponentPropsWithoutRef<typeof Label>;
export const UInputLabel = (props: UInputLabel) => {
  const inputProps = useInputRootParentProps();
  return <Label {...props} className={inputLabelClass({ className: props.className, inputProps })} />;
};

export type UInputDescriptionProps = TextProps;
export const UInputDescription = (props: UInputDescriptionProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <Text {...props} className={inputDescriptionClass({ className: props.className, inputProps })} slot="description" />
  );
};

export const UInputAsterisk = () => {
  const inputProps = useInputRootParentProps();
  return <span className={inputAsteriskClass({ inputProps })}> *</span>;
};

/*
    ====================================
    InputBox
    ====================================
*/

export type UInputBoxRootProps = React.ComponentPropsWithoutRef<"div">;
export const UInputBoxRoot = (props: UInputBoxRootProps) => {
  const inputProps = useInputRootParentProps();
  const { inputRef, isFocused, isDisabled } = useInputRootParentProps();
  return (
    <div
      {...mergeProps(props, {
        onClick: () => inputRef.current?.focus(),
      })}
      data-disabled={isDisabled}
      data-ring={isFocused}
      className={inputBoxClass({ className: props.className, inputProps })}
    />
  );
};

export type UInputBoxTextProps = Omit<InputProps, "placeholder">;
export const UInputBoxText = (props: UInputBoxTextProps) => {
  const inputProps = useInputRootParentProps();
  const { inputRef, placeholder } = useInputRootParentProps();
  return (
    <Input
      ref={inputRef}
      placeholder={placeholder}
      style={{ outline: "none", background: "transparent", width: "100%", height: "100%" }}
      {...props}
      className={inputBoxTextClass({ inputProps })}
    />
  );
};

export type UInputBoxLeadingIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const UInputBoxLeadingIcon = ({ children, className }: UInputBoxLeadingIconProps) => {
  const inputProps = useInputRootParentProps();
  return <>{children(inputBoxLeadingIconClass({ className, inputProps }))}</>;
};

export type UInputBoxTrailingIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const UInputBoxTrailingIcon = ({ children, className }: UInputBoxTrailingIconProps) => {
  const inputProps = useInputRootParentProps();
  return <>{children(inputBoxTrailingIconClass({ className, inputProps }))}</>;
};

/*
    ====================================
    InputBoxClear
    ====================================
*/

export type UInputBoxClearRootProps = ButtonProps & {
  className?: string;
};
export const UInputBoxClearRoot = ({ children, className, ...props }: UInputBoxClearRootProps) => {
  const inputProps = useInputRootParentProps();
  const { isDisabled: parentDisabled } = useInputRootParentProps();
  return (
    <Button
      {...props}
      isDisabled={parentDisabled || props.isDisabled}
      className={inputBoxClearClass({ className, inputProps })}
    >
      {children}
    </Button>
  );
};

export const UInputBoxClearIcon = () => {
  const inputProps = useInputRootParentProps();
  return <X className={inputBoxClearIconClass({ inputProps })} />;
};

/*
    ====================================
    InputBoxTag
    ====================================
*/

export type UInputBoxTagRootProps = React.ComponentPropsWithoutRef<"div">;
export const UInputBoxTagRoot = (props: UInputBoxTagRootProps) => {
  const inputProps = useInputRootParentProps();
  return <div {...props} className={inputBoxTagClass({ className: props.className, inputProps })} />;
};

export type UInputBoxTagLabelProps = React.ComponentPropsWithoutRef<"span">;
export const UInputBoxTagLabel = ({ children, ...props }: UInputBoxTagLabelProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <span {...props} className={inputBoxTagLabelClass({ className: props.className, inputProps })}>
      {children}
    </span>
  );
};

export type UInputBoxTagIconProps = {
  children: (className: string) => ReactNode;
};
export const UInputBoxTagIcon = ({ children }: UInputBoxTagIconProps) => {
  const inputProps = useInputRootParentProps();
  return <>{children(inputBoxTagIconClass({ inputProps }))}</>;
};

export type UInputBoxTagDotProps = React.ComponentPropsWithoutRef<"span">;
export const UInputBoxTagDot = (props: UInputBoxTagDotProps) => {
  const inputProps = useInputRootParentProps();
  return <span {...props} className={inputBoxTagDotClass({ inputProps })} />;
};

/*
    ====================================
    InputBoxTagDismiss
    ====================================
*/

export type UInputBoxTagDismissRootProps = ButtonProps & {
  className?: string;
};
export const UInputBoxTagDismissRoot = ({ children, className, ...props }: UInputBoxTagDismissRootProps) => {
  const inputProps = useInputRootParentProps();
  const { isDisabled: parentDisabled } = useInputRootParentProps();

  return (
    <Button
      {...props}
      isDisabled={parentDisabled || props.isDisabled}
      className={inputBoxTagDismissClass({ className, inputProps })}
    >
      {children}
    </Button>
  );
};

export const UInputBoxTagDismissIcon = () => {
  const inputProps = useInputRootParentProps();
  return <X className={inputBoxTagDismissIconClass({ inputProps })} />;
};

/*
    ====================================
    InputBoxTagAvatar
    ====================================
*/

export type UInputBoxTagAvatarRootProps = RadixAvatar.AvatarProps & {
  /** Avatar content */
  children: RadixAvatar.AvatarProps["children"];
};

export const UInputBoxTagAvatarRoot = (props: UInputBoxTagAvatarRootProps) => {
  const inputProps = useInputRootParentProps();
  return (
    <RadixAvatar.Root {...props} className={inputBoxTagAvatarClass({ className: props.className, inputProps })}>
      {props.children}
    </RadixAvatar.Root>
  );
};

export type UInputBoxTagAvatarFallbackProps = RadixAvatar.AvatarFallbackProps;
export const UInputBoxTagAvatarFallback = (props: UInputBoxTagAvatarFallbackProps) => {
  return <RadixAvatar.Fallback style={{ display: "flex" }} {...props} />;
};

export type UInputBoxTagAvatarLabelProps = {
  /** Text content */
  children: ReactNode;
};
export const UInputBoxTagAvatarLabel = ({ children }: UInputBoxTagAvatarLabelProps) => {
  const inputProps = useInputRootParentProps();
  return <span className={inputBoxTagAvatarLabelClass({ inputProps })}>{children}</span>;
};

export type UInputBoxTagAvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UInputBoxTagAvatarIcon = ({ children }: UInputBoxTagAvatarIconProps) => {
  const inputProps = useInputRootParentProps();
  return <>{children(inputBoxTagAvatarIconClass({ inputProps }))}</>;
};

export type UInputBoxTagAvatarImageProps = RadixAvatar.AvatarImageProps;
export const UInputBoxTagAvatarImage = (props: UInputBoxTagAvatarImageProps) => {
  const inputProps = useInputRootParentProps();
  return <RadixAvatar.Image className={inputBoxTagAvatarImageClass({ inputProps })} {...props} />;
};

/*
    ====================================
    InputBoxSegment
    ====================================
*/

// not implemented
