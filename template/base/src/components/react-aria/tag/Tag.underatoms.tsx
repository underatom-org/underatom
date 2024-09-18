import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useRef } from "react";
import type { AriaButtonProps } from "react-aria";
import { mergeProps, useButton, useFocusRing } from "react-aria";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { X } from "../../../assets/Icons";
import {
  TagDotStyleProps,
  TagStyleProps,
  tagAvatarClass,
  tagAvatarIconClass,
  tagAvatarImageClass,
  tagAvatarLabelClass,
  tagClass,
  tagDismissClass,
  tagDismissIconClass,
  tagDotClass,
  tagIconClass,
  tagLabelClass,
} from "../../../styles/tag";
import { getGenericContext } from "../../../_utils";

/*
  ====================================
  Tag
  ====================================
*/

export const { Provider: TagInternalProvider, useComponentContext: useTagInternalProvider } =
  getGenericContext<UTagRootProps>("UTagRootProps");

export type UTagRootProps = TagStyleProps &
  ComponentPropsWithoutRef<"div"> & {
    className?: string;
  };
export const UTagRoot = (props: UTagRootProps) => {
  return (
    <div {...props} className={tagClass({ className: props.className, tagProps: props })}>
      <TagInternalProvider value={props}>{props.children}</TagInternalProvider>
    </div>
  );
};

export type UTagLabelProps = {
  /** Label content */
  children: ReactNode;
  className?: string;
};
export const UTagLabel = ({ children, className }: UTagLabelProps) => {
  const tagProps = useTagInternalProvider();
  return <span className={tagLabelClass({ className, tagProps })}>{children}</span>;
};

export type UTagIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const UTagIcon = ({ children, className }: UTagIconProps) => {
  const tagProps = useTagInternalProvider();
  return <>{children(tagIconClass({ className, tagProps }))}</>;
};

export type UTagDotProps = TagDotStyleProps & {
  className?: string;
};
export const UTagDot = ({ className, ...props }: UTagDotProps) => {
  const tagProps = useTagInternalProvider();
  return <span className={tagDotClass({ className, tagProps, tagDotProps: props })} />;
};

/*
  ====================================
  TagDismiss
  ====================================
*/

export type UTagDismissRootProps = AriaButtonProps<"button"> & {
  innerRef?: React.RefObject<HTMLButtonElement>;
  className?: string;
};
export const UTagDismissRoot = ({ className, ...props }: UTagDismissRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  const { buttonProps, isPressed } = useButton(props, refs);
  const { isFocusVisible, focusProps } = useFocusRing();
  const tagProps = useTagInternalProvider();

  return (
    <button
      ref={innerRef}
      data-active={isPressed}
      data-ring={isFocusVisible}
      className={tagDismissClass({ className, tagProps })}
      {...mergeProps(buttonProps, focusProps)}
    >
      {props.children}
    </button>
  );
};

export const UTagDismissIcon = () => {
  const tagProps = useTagInternalProvider();
  return <X className={tagDismissIconClass({ tagProps })} />;
};

/*
  ====================================
  TagAvatar
  ====================================
*/

export type UTagAvatarRootProps = RadixAvatar.AvatarProps & {
  /** Avatar content */
  children: RadixAvatar.AvatarProps["children"];
};

export const UTagAvatarRoot = (props: UTagAvatarRootProps) => {
  const tagProps = useTagInternalProvider();
  return (
    <RadixAvatar.Root {...props} className={tagAvatarClass({ className: props.className, tagProps })}>
      {props.children}
    </RadixAvatar.Root>
  );
};

export type UTagAvatarFallbackProps = RadixAvatar.AvatarFallbackProps;
export const UTagAvatarFallback = (props: UTagAvatarFallbackProps) => {
  return <RadixAvatar.Fallback style={{ display: "flex" }} {...props} />;
};

export type UTagAvatarLabelProps = {
  /** Text content */
  children: ReactNode;
};
export const UTagAvatarLabel = ({ children }: UTagAvatarLabelProps) => {
  const tagProps = useTagInternalProvider();
  return <span className={tagAvatarLabelClass({ tagProps })}>{children}</span>;
};

export type UTagAvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UTagAvatarIcon = ({ children }: UTagAvatarIconProps) => {
  const tagProps = useTagInternalProvider();
  return <>{children(tagAvatarIconClass({ tagProps }))}</>;
};

export type UTagAvatarImageProps = RadixAvatar.AvatarImageProps;
export const UTagAvatarImage = (props: UTagAvatarImageProps) => {
  const tagProps = useTagInternalProvider();
  return <RadixAvatar.Image className={tagAvatarImageClass({ tagProps })} {...props} />;
};
