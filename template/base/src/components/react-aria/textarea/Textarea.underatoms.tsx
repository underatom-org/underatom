import {
  TextField,
  Label,
  TextArea,
  TextFieldProps,
  Text,
  TextProps,
  TextAreaProps,
  Button,
  ButtonProps,
} from "react-aria-components";
import { _RadioIndicatorProps1 } from "@radix-ui/react-radio-group";
import { ReactNode, useRef, useState } from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { getGenericContext } from "../../../_utils";
import { X } from "../../../assets/Icons";
import { mergeProps } from "react-aria";
import {
  TextareaStyleProps,
  textareaAsteriskClass,
  textareaBoxClass,
  textareaBoxTagAvatarClass,
  textareaBoxTagAvatarIconClass,
  textareaBoxTagAvatarImageClass,
  textareaBoxTagAvatarLabelClass,
  textareaBoxTagClass,
  textareaBoxTagDismissClass,
  textareaBoxTagDismissIconClass,
  textareaBoxTagDotClass,
  textareaBoxTagIconClass,
  textareaBoxTagLabelClass,
  textareaBoxTextClass,
  textareaClass,
  textareaDescriptionClass,
  textareaLabelClass,
} from "../../../styles/textarea";

/*
  ====================================
  Textarea
  ====================================
*/

export const { Provider: TextareaInternalProvider, useComponentContext: useTextareaRootParentProps } =
  getGenericContext<
    UTextareaRootProps & {
      textareaRef: React.RefObject<HTMLTextAreaElement>;
      isFocused: boolean;
    }
  >("UTextareaRootProps");

export type UTextareaRootProps = TextareaStyleProps &
  TextFieldProps & {
    className?: string;
    children?: ReactNode;
    textareaProps?: TextAreaProps;
  };
export const UTextareaRoot = (props: UTextareaRootProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextField
      {...mergeProps(props, {
        onFocusChange: (isFocused: boolean) => setIsFocused(isFocused),
      })}
      className={textareaClass({ className: props.className, textareaProps: props })}
    >
      <TextareaInternalProvider value={{ ...props, textareaRef, isFocused }}>{props.children}</TextareaInternalProvider>
    </TextField>
  );
};

export type UTextareaLabel = React.ComponentPropsWithoutRef<typeof Label>;
export const UTextareaLabel = (props: UTextareaLabel) => {
  const textareaProps = useTextareaRootParentProps();
  return <Label {...props} className={textareaLabelClass({ className: props.className, textareaProps })} />;
};

export type UTextareaDescriptionProps = TextProps;
export const UTextareaDescription = (props: UTextareaDescriptionProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <Text
      {...props}
      className={textareaDescriptionClass({ className: props.className, textareaProps })}
      slot="description"
    />
  );
};

export const UTextareaAsterisk = () => {
  const textareaProps = useTextareaRootParentProps();
  return <span className={textareaAsteriskClass({ textareaProps })}> *</span>;
};

/*
  ====================================
  TextareaBox
  ====================================
*/
export type UTextareaBoxRootProps = React.ComponentPropsWithoutRef<"div">;
export const UTextareaBoxRoot = (props: UTextareaBoxRootProps) => {
  const textareaProps = useTextareaRootParentProps();
  const { textareaRef, isFocused } = useTextareaRootParentProps();

  return (
    <div
      {...mergeProps(props, {
        onClick: () => textareaRef.current?.focus(),
      })}
      data-ring={isFocused}
      className={textareaBoxClass({ className: props.className, textareaProps })}
    />
  );
};

export const UTextareaBoxText = () => {
  const textareaRootProps = useTextareaRootParentProps();
  const { textareaProps, textareaRef } = useTextareaRootParentProps();
  return (
    <TextArea
      ref={textareaRef}
      style={{ outline: "none", background: "transparent", width: "100%", height: "100%", resize: "none" }}
      {...textareaProps}
      className={textareaBoxTextClass({ textareaProps: textareaRootProps })}
    />
  );
};

// export type UTextareaBoxLeadingIconProps = {
//   children: (className: string) => ReactNode;
//   className?: string;
// };
// export const UTextareaBoxLeadingIcon = ({ children, className }: UTextareaBoxLeadingIconProps) => {
//   const { leadingIconClass } = useTextareaBoxClasses();
//   return <>{children(leadingIconClass(className))}</>;
// };

// export type UTextareaBoxTrailingIconProps = {
//   children: (className: string) => ReactNode;
//   className?: string;
// };
// export const UTextareaBoxTrailingIcon = ({ children, className }: UTextareaBoxTrailingIconProps) => {
//   const { trailingIconClass } = useTextareaBoxClasses();
//   return <>{children(trailingIconClass(className))}</>;
// };

/*
  ====================================
  TextareaBoxTag
  ====================================
*/

export type UTextareaBoxTagRootProps = React.ComponentPropsWithoutRef<"div">;
export const UTextareaBoxTagRoot = (props: UTextareaBoxTagRootProps) => {
  const textareaProps = useTextareaRootParentProps();
  return <div {...props} className={textareaBoxTagClass({ className: props.className, textareaProps })} />;
};

export type UTextareaBoxTagLabelProps = React.ComponentPropsWithoutRef<"span">;
export const UTextareaBoxTagLabel = ({ children, ...props }: UTextareaBoxTagLabelProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <span {...props} className={textareaBoxTagLabelClass({ className: props.className, textareaProps })}>
      {children}
    </span>
  );
};

export type UTextareaBoxTagIconProps = {
  children: (className: string) => ReactNode;
};
export const UTextareaBoxTagIcon = ({ children }: UTextareaBoxTagIconProps) => {
  const textareaProps = useTextareaRootParentProps();
  return <>{children(textareaBoxTagIconClass({ textareaProps }))}</>;
};

export type UTextareaBoxTagDotProps = React.ComponentPropsWithoutRef<"span">;
export const UTextareaBoxTagDot = (props: UTextareaBoxTagDotProps) => {
  const textareaProps = useTextareaRootParentProps();
  return <span {...props} className={textareaBoxTagDotClass({ className: props.className, textareaProps })} />;
};

/*
  ====================================
  TextareaBoxTagDismiss
  ====================================
*/

export type UTextareaBoxTagDismissRootProps = ButtonProps & {
  className?: string;
};
export const UTextareaBoxTagDismissRoot = ({ children, className, ...props }: UTextareaBoxTagDismissRootProps) => {
  const textareaProps = useTextareaRootParentProps();
  const { isDisabled: parentDisabled } = useTextareaRootParentProps();
  const fullProps = { ...props, isDisabled: parentDisabled || props.isDisabled };

  return (
    <Button {...fullProps} className={textareaBoxTagDismissClass({ className, textareaProps })}>
      {children}
    </Button>
  );
};

export const UTextareaBoxTagDismissIcon = () => {
  const textareaProps = useTextareaRootParentProps();
  return <X className={textareaBoxTagDismissIconClass({ textareaProps })} />;
};

/*
  ====================================
  TextareaBoxTagAvatar
  ====================================
*/

export type UTextareaBoxTagAvatarRootProps = RadixAvatar.AvatarProps & {
  /** Avatar content */
  children: RadixAvatar.AvatarProps["children"];
};

export const UTextareaBoxTagAvatarRoot = (props: UTextareaBoxTagAvatarRootProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <RadixAvatar.Root {...props} className={textareaBoxTagAvatarClass({ className: props.className, textareaProps })}>
      {props.children}
    </RadixAvatar.Root>
  );
};

export type UTextareaBoxTagAvatarFallbackProps = RadixAvatar.AvatarFallbackProps;
export const UTextareaBoxTagAvatarFallback = (props: UTextareaBoxTagAvatarFallbackProps) => {
  return <RadixAvatar.Fallback {...props} />;
};

export type UTextareaBoxTagAvatarLabelProps = {
  /** Text content */
  children: ReactNode;
};
export const UTextareaBoxTagAvatarLabel = ({ children }: UTextareaBoxTagAvatarLabelProps) => {
  const textareaProps = useTextareaRootParentProps();
  return <span className={textareaBoxTagAvatarLabelClass({ textareaProps })}>{children}</span>;
};

export type UTextareaBoxTagAvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UTextareaBoxTagAvatarIcon = ({ children }: UTextareaBoxTagAvatarIconProps) => {
  const textareaProps = useTextareaRootParentProps();
  return <>{children(textareaBoxTagAvatarIconClass({ textareaProps }))}</>;
};

export type UTextareaBoxTagAvatarImageProps = RadixAvatar.AvatarImageProps;
export const UTextareaBoxTagAvatarImage = (props: UTextareaBoxTagAvatarImageProps) => {
  const textareaProps = useTextareaRootParentProps();
  return (
    <RadixAvatar.Image
      className={textareaBoxTagAvatarImageClass({ className: props.className, textareaProps })}
      {...props}
    />
  );
};
