import * as RadixSelect from "@radix-ui/react-select";
import * as Avatar from "@radix-ui/react-avatar";
import {
  SelectTriggerStyleProps,
  selectTriggerClass,
  selectTriggerLabelClass,
  selectTriggerDescriptionClass,
  selectTriggerBoxClass,
  selectTriggerAsteriskClass,
  selectTriggerBoxIconClass,
  selectTriggerBoxTextClass,
  selectTriggerBoxCaretClass,
  selectTriggerBoxTagLabelClass,
  selectTriggerBoxTagClass,
  selectTriggerBoxTagIconClass,
  selectTriggerBoxAvatarClass,
  selectTriggerBoxAvatarLabelClass,
  selectTriggerBoxAvatarIconClass,
  selectTriggerBoxAvatarImageClass,
  selectTriggerBoxTagAvatarClass,
  selectTriggerBoxTagAvatarLabelClass,
  selectTriggerBoxTagAvatarIconClass,
  selectTriggerBoxTagAvatarImageClass,
  selectTriggerBoxTagDismissClass,
  selectTriggerBoxTagDismissIconClass,
} from "../../../styles/select-trigger";
import { forwardRef, ReactNode, useId } from "react";
import { Button, ButtonProps } from "react-aria-components";
import { getGenericContext } from "../../../_utils";
import { mergeProps, useFocusRing } from "react-aria";
import { CaretDown, X } from "../../../assets/Icons";

/*
  ====================================
  SelectTrigger
  ====================================
*/

export const { Provider: SelectTriggerInternalProvider, useComponentContext: useSelectTriggerInternalProvider } =
  getGenericContext<USelectTriggerRootProps>("SelectTriggerInternalProvider");

export type USelectTriggerRootProps = React.ComponentPropsWithoutRef<"div"> &
  SelectTriggerStyleProps & {
    invalid?: boolean;
    required?: boolean;
    disabled?: boolean;
  };
export const USelectTriggerRoot = (props: USelectTriggerRootProps) => {
  const generatedId = useId();

  return (
    <div
      {...props}
      className={selectTriggerClass({ className: props.className, selectTriggerProps: props })}
      data-invalid={!!props.invalid}
      data-required={!!props.required}
      data-disabled={!!props.disabled}
    >
      <SelectTriggerInternalProvider value={{ ...props, id: generatedId }}>
        {props.children}
      </SelectTriggerInternalProvider>
    </div>
  );
};

export type USelectTriggerLabelProps = React.ComponentPropsWithoutRef<"label">;
export const USelectTriggerLabel = (props: USelectTriggerLabelProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  const { id } = useSelectTriggerInternalProvider();
  return (
    <label
      {...props}
      htmlFor={id}
      className={selectTriggerLabelClass({ className: props.className, selectTriggerProps })}
    />
  );
};

export type USelectTriggerDescriptionProps = React.ComponentPropsWithoutRef<"span">;
export const USelectTriggerDescription = (props: USelectTriggerDescriptionProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <span {...props} className={selectTriggerDescriptionClass({ className: props.className, selectTriggerProps })} />
  );
};

export type USelectTriggerAsteriskProps = React.ComponentPropsWithoutRef<"span">;
export const USelectTriggerAsterisk = (props: USelectTriggerAsteriskProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <span {...props} className={selectTriggerAsteriskClass({ className: props.className, selectTriggerProps })}>
      *
    </span>
  );
};

/*
  ====================================
  SelectTriggerBox
  ====================================
*/

export type USelectTriggerBoxRootProps = Omit<RadixSelect.SelectTriggerProps, "disabled">;
export const USelectTriggerBoxRoot = forwardRef<HTMLButtonElement, USelectTriggerBoxRootProps>(
  (props, forwardedRef) => {
    const selectTriggerProps = useSelectTriggerInternalProvider();
    const { isFocusVisible, focusProps } = useFocusRing();

    return (
      <RadixSelect.SelectTrigger
        ref={forwardedRef}
        {...mergeProps(props, focusProps)}
        className={selectTriggerBoxClass({ className: props.className, selectTriggerProps })}
        data-ring={isFocusVisible}
        disabled={selectTriggerProps.disabled}
      >
        {props.children}
      </RadixSelect.SelectTrigger>
    );
  },
);

export type USelectTriggerBoxIconProps = {
  children: (className: string) => React.ReactNode;
  className?: string;
};
export const USelectTriggerBoxIcon = ({ children, className }: USelectTriggerBoxIconProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return <>{children(selectTriggerBoxIconClass({ className, selectTriggerProps }))}</>;
};

export type USelectTriggerBoxTextProps = RadixSelect.SelectValueProps;
export const USelectTriggerBoxText = forwardRef<HTMLSpanElement, USelectTriggerBoxTextProps>((props, forwardedRef) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <span className={selectTriggerBoxTextClass({ className: props.className, selectTriggerProps })}>
      <RadixSelect.SelectValue ref={forwardedRef} {...props} />
    </span>
  );
});

export type USelectTriggerBoxCaretProps = RadixSelect.SelectIconProps;
export const USelectTriggerBoxCaret = (props: USelectTriggerBoxCaretProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <RadixSelect.SelectIcon {...props}>
      <CaretDown className={selectTriggerBoxCaretClass({ className: props.className, selectTriggerProps })} />
    </RadixSelect.SelectIcon>
  );
};

/*
  ====================================
  SelectTriggerBoxTag
  ====================================
*/

export type USelectTriggerBoxTagRootProps = React.ComponentPropsWithoutRef<"div">;
export const USelectTriggerBoxTagRoot = (props: USelectTriggerBoxTagRootProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return <div {...props} className={selectTriggerBoxTagClass({ className: props.className, selectTriggerProps })} />;
};

export type USelectTriggerBoxTagLabelProps = RadixSelect.SelectValueProps;
export const USelectTriggerBoxTagLabel = forwardRef<HTMLSpanElement, USelectTriggerBoxTagLabelProps>(
  (props, forwardedRef) => {
    const selectTriggerProps = useSelectTriggerInternalProvider();
    return (
      <span className={selectTriggerBoxTagLabelClass({ className: props.className, selectTriggerProps })}>
        <RadixSelect.SelectValue ref={forwardedRef} {...props} />
      </span>
    );
  },
);

export type USelectTriggerBoxTagIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const USelectTriggerBoxTagIcon = ({ children, className }: USelectTriggerBoxTagIconProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return <>{children(selectTriggerBoxTagIconClass({ className, selectTriggerProps }))}</>;
};

/*
  ====================================
  SelectTriggerBoxAvatar
  ====================================
*/

export type USelectTriggerBoxAvatarRootProps = Avatar.AvatarProps & {
  /** Avatar content */
  children: Avatar.AvatarProps["children"];
};

export const USelectTriggerBoxAvatarRoot = (props: USelectTriggerBoxAvatarRootProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <Avatar.Root {...props} className={selectTriggerBoxAvatarClass({ className: props.className, selectTriggerProps })}>
      {props.children}
    </Avatar.Root>
  );
};

export type USelectTriggerBoxAvatarFallbackProps = Avatar.AvatarFallbackProps;
export const USelectTriggerBoxAvatarFallback = (props: USelectTriggerBoxAvatarFallbackProps) => {
  return <Avatar.Fallback {...props} />;
};

export type USelectTriggerBoxAvatarLabelProps = {
  /** Text content */
  children: ReactNode;
  className?: string;
};
export const USelectTriggerBoxAvatarLabel = ({ children, className }: USelectTriggerBoxAvatarLabelProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return <span className={selectTriggerBoxAvatarLabelClass({ className, selectTriggerProps })}>{children}</span>;
};

export type USelectTriggerBoxAvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const USelectTriggerBoxAvatarIcon = ({ children, className }: USelectTriggerBoxAvatarIconProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return <>{children(selectTriggerBoxAvatarIconClass({ className, selectTriggerProps }))}</>;
};

export type USelectTriggerBoxAvatarImageProps = Avatar.AvatarImageProps;
export const USelectTriggerBoxAvatarImage = (props: USelectTriggerBoxAvatarImageProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <Avatar.Image
      className={selectTriggerBoxAvatarImageClass({ className: props.className, selectTriggerProps })}
      {...props}
    />
  );
};

/*
  ====================================
  SelectTriggerBoxTagAvatar
  ====================================
*/

export type USelectTriggerBoxTagAvatarRootProps = Avatar.AvatarProps & {
  /** Avatar content */
  children: Avatar.AvatarProps["children"];
  className?: string;
};

export const USelectTriggerBoxTagAvatarRoot = (props: USelectTriggerBoxTagAvatarRootProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <Avatar.Root
      {...props}
      className={selectTriggerBoxTagAvatarClass({ className: props.className, selectTriggerProps })}
    >
      {props.children}
    </Avatar.Root>
  );
};

export type USelectTriggerBoxTagAvatarFallbackProps = Avatar.AvatarFallbackProps;
export const USelectTriggerBoxTagAvatarFallback = (props: USelectTriggerBoxTagAvatarFallbackProps) => {
  return <Avatar.Fallback {...props} />;
};

export type USelectTriggerBoxTagAvatarLabelProps = {
  /** Text content */
  children: ReactNode;
  className?: string;
};
export const USelectTriggerBoxTagAvatarLabel = ({ children, className }: USelectTriggerBoxTagAvatarLabelProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return <span className={selectTriggerBoxTagAvatarLabelClass({ className, selectTriggerProps })}>{children}</span>;
};

export type USelectTriggerBoxTagAvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
  className?: string;
};
export const USelectTriggerBoxTagAvatarIcon = ({ children, className }: USelectTriggerBoxTagAvatarIconProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return <>{children(selectTriggerBoxTagAvatarIconClass({ className, selectTriggerProps }))}</>;
};

export type USelectTriggerBoxTagAvatarImageProps = Avatar.AvatarImageProps;
export const USelectTriggerBoxTagAvatarImage = (props: USelectTriggerBoxTagAvatarImageProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return (
    <Avatar.Image
      className={selectTriggerBoxTagAvatarImageClass({ className: props.className, selectTriggerProps })}
      {...props}
    />
  );
};

/*
  ====================================
  SelectTriggerBoxTagDismiss
  ====================================
*/

export type USelectTriggerBoxTagDismissRootProps = ButtonProps & {
  className?: string;
};
export const USelectTriggerBoxTagDismissRoot = (props: USelectTriggerBoxTagDismissRootProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  const { disabled: parentDisabled } = useSelectTriggerInternalProvider();
  const propsWithDisabled = { ...props, isDisabled: !!props.isDisabled || !!parentDisabled };

  return (
    <Button
      {...propsWithDisabled}
      className={selectTriggerBoxTagDismissClass({ className: props.className, selectTriggerProps })}
    />
  );
};
export type USelectTriggerBoxTagDismissIconProps = {
  className?: string;
};
export const USelectTriggerBoxTagDismissIcon = (props: USelectTriggerBoxTagDismissIconProps) => {
  const selectTriggerProps = useSelectTriggerInternalProvider();
  return <X className={selectTriggerBoxTagDismissIconClass({ className: props.className, selectTriggerProps })} />;
};
