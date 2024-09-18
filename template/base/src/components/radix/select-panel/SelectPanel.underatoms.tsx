import * as Select from "@radix-ui/react-select";
import { Check } from "../../../assets/Icons";
import { CSSProperties, ReactNode, forwardRef } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { getGenericContext } from "../../../_utils";
import {
  SelectPanelGroupItemBoxAvatarStyleProps,
  SelectPanelGroupItemBoxBadgeStyleProps,
  SelectPanelGroupItemBoxDotStyleProps,
  SelectPanelGroupItemBoxIconBoxStyleProps,
  SelectPanelStyleProps,
  selectPanelClass,
  selectPanelGroupClass,
  selectPanelGroupItemBoxAvatarClass,
  selectPanelGroupItemBoxAvatarIconClass,
  selectPanelGroupItemBoxAvatarImageClass,
  selectPanelGroupItemBoxAvatarLabelClass,
  selectPanelGroupItemBoxBadgeClass,
  selectPanelGroupItemBoxBadgeIconClass,
  selectPanelGroupItemBoxBadgeLabelClass,
  selectPanelGroupItemBoxClass,
  selectPanelGroupItemBoxDescriptionClass,
  selectPanelGroupItemBoxDotClass,
  selectPanelGroupItemBoxIconBoxClass,
  selectPanelGroupItemBoxIconBoxIconClass,
  selectPanelGroupItemBoxLabelClass,
  selectPanelGroupItemBoxSupportingClass,
  selectPanelGroupItemCheckIconClass,
  selectPanelGroupItemClass,
  selectPanelGroupTitleClass,
} from "../../../styles/select-panel";

/*
  ====================================
  SelectPanel
  ====================================
*/

export const { Provider: SelectPanelInternalProvider, useComponentContext: useSelectPanelInternalProvider } =
  getGenericContext<USelectPanelRootProps>("SelectPanelInternalProvider");

export type USelectPanelRootProps = SelectPanelStyleProps & Select.SelectContentProps;
export const USelectPanelRoot = forwardRef<HTMLDivElement, USelectPanelRootProps>(
  ({ position = "popper", ...props }, forwardedRef) => {
    const fullProps = {
      ...props,
      position,
    };
    return (
      <Select.Portal>
        <Select.Content
          ref={forwardedRef}
          sideOffset={position === "popper" ? 8 : undefined}
          {...fullProps}
          className={selectPanelClass({ className: props.className, selectPanelProps: props })}
        >
          <SelectPanelInternalProvider value={fullProps}>{props.children}</SelectPanelInternalProvider>
        </Select.Content>
      </Select.Portal>
    );
  },
);

export type USelectPanelViewportProps = Select.SelectViewportProps;
export const USelectPanelViewport = forwardRef<HTMLDivElement, USelectPanelViewportProps>((props, forwardedRef) => {
  const { position } = useSelectPanelInternalProvider();
  const style: CSSProperties = {};
  if (position === "popper") {
    style.width = "100%";
    style.minWidth = "var(--radix-select-trigger-width)";
    style.maxHeight = "var(--radix-select-content-available-height)";
  }

  return <Select.Viewport style={style} ref={forwardedRef} {...props} />;
});

/*
  ====================================
  SelectPanelSearch
  ====================================
*/

// export type USelectPanelSearchRootProps = TextFieldProps & {
//   className?: string;
// };
// export const USelectPanelSearchRoot = (props: USelectPanelSearchRootProps) => {
//   const { rootClass } = useSelectPanelSearchClasses();
//   return <TextField {...props} className={rootClass(props.className)} />;
// };

// export type USelectPanelSearchTextProps = InputProps;
// export const USelectPanelSearchText = (props: USelectPanelSearchTextProps) => {
//   const { textClass } = useSelectPanelSearchClasses();
//   return <Input {...props} style={{ background: "none", outline: "none" }} className={textClass()} />;
// };

// export type USelectPanelSearchIconProps = {
//   children: (className: string) => ReactNode;
// };
// export const USelectPanelSearchIcon = ({ children }: USelectPanelSearchIconProps) => {
//   const { iconClass } = useSelectPanelSearchClasses();
//   return <>{children(iconClass())}</>;
// };

/*
  ====================================
  SelectPanelGroup
  ====================================
*/

export type USelectPanelGroupRootProps = Select.SelectGroupProps;
export const USelectPanelGroupRoot = forwardRef<HTMLDivElement, USelectPanelGroupRootProps>((props, forwardedRef) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <Select.Group
      ref={forwardedRef}
      {...props}
      className={selectPanelGroupClass({ className: props.className, selectPanelProps })}
    />
  );
});

export type USelectPanelGroupTitle = Select.SelectLabelProps;
export const USelectPanelGroupTitle = (props: USelectPanelGroupTitle) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <Select.Label {...props} className={selectPanelGroupTitleClass({ className: props.className, selectPanelProps })} />
  );
};

/*
  ====================================
  SelectPanelGroupItem
  ====================================
*/

export const { Provider: SelectPanelGroupItemProvider, useComponentContext: useSelectPanelGroupItemProvider } =
  getGenericContext<USelectPanelGroupItemRootProps>("SelectPanelGroupItem");

export type USelectPanelGroupItemRootProps = Select.SelectItemProps;
export const USelectPanelGroupItemRoot = forwardRef<HTMLDivElement, USelectPanelGroupItemRootProps>((props, ref) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <Select.Item
      ref={ref}
      {...props}
      className={selectPanelGroupItemClass({ className: props.className, selectPanelProps })}
    >
      <SelectPanelGroupItemProvider value={props}>{props.children}</SelectPanelGroupItemProvider>
    </Select.Item>
  );
});

export const USelectPanelGroupItemCheckIcon = () => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <Select.ItemIndicator>
      <Check className={selectPanelGroupItemCheckIconClass({ selectPanelProps })} />
    </Select.ItemIndicator>
  );
};

/*
  ====================================
  SelectPanelGroupItemBox
  ====================================
*/

export type USelectPanelGroupItemBoxRootProps = React.ComponentPropsWithoutRef<"div">;
export const USelectPanelGroupItemBoxRoot = (props: USelectPanelGroupItemBoxRootProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return <div {...props} className={selectPanelGroupItemBoxClass({ className: props.className, selectPanelProps })} />;
};

export type USelectPanelGroupItemBoxLabel = Select.SelectItemTextProps;
export const USelectPanelGroupItemBoxLabel = (props: USelectPanelGroupItemBoxLabel) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <span className={selectPanelGroupItemBoxLabelClass({ className: props.className, selectPanelProps })}>
      <Select.SelectItemText {...props} />
    </span>
  );
};
export type USelectPanelGroupItemBoxDot = SelectPanelGroupItemBoxDotStyleProps & React.ComponentPropsWithoutRef<"span">;
export const USelectPanelGroupItemBoxDot = (props: USelectPanelGroupItemBoxDot) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <span
      {...props}
      className={selectPanelGroupItemBoxDotClass({
        className: props.className,
        selectPanelProps,
        selectPanelGroupItemBoxDotProps: props,
      })}
    />
  );
};

export type USelectPanelGroupItemBoxSupportingProps = React.ComponentPropsWithoutRef<"span">;
export const USelectPanelGroupItemBoxSupporting = (props: USelectPanelGroupItemBoxSupportingProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <span
      {...props}
      className={selectPanelGroupItemBoxSupportingClass({
        className: props.className,
        selectPanelProps,
      })}
    />
  );
};

export type USelectPanelGroupItemBoxDescriptionProps = React.ComponentPropsWithoutRef<"span">;
export const USelectPanelGroupItemBoxDescription = (props: USelectPanelGroupItemBoxDescriptionProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <span
      {...props}
      className={selectPanelGroupItemBoxDescriptionClass({
        className: props.className,
        selectPanelProps,
      })}
    />
  );
};

/*
  ====================================
  SelectPanelGroupItemBoxIconBox
  ====================================
*/

export const {
  Provider: SelectPanelGroupItemBoxIconBoxProvider,
  useComponentContext: useSelectPanelGroupItemBoxIconBoxProvider,
} = getGenericContext<USelectPanelGroupItemBoxIconBoxRootProps>("SelectPanelGroupItemBoxIconBox");

export type USelectPanelGroupItemBoxIconBoxRootProps = SelectPanelGroupItemBoxIconBoxStyleProps &
  React.ComponentPropsWithoutRef<"div">;
export const USelectPanelGroupItemBoxIconBoxRoot = (props: USelectPanelGroupItemBoxIconBoxRootProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <div
      {...props}
      className={selectPanelGroupItemBoxIconBoxClass({
        className: props.className,
        selectPanelProps,
        selectPanelGroupItemBoxIconBoxProps: props,
      })}
    >
      <SelectPanelGroupItemBoxIconBoxProvider value={props}>{props.children}</SelectPanelGroupItemBoxIconBoxProvider>
    </div>
  );
};

export type USelectPanelGroupItemBoxIconBoxIconProps = {
  children: (className: string) => ReactNode;
};
export const USelectPanelGroupItemBoxIconBoxIcon = ({ children }: USelectPanelGroupItemBoxIconBoxIconProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  const selectPanelGroupItemBoxIconBoxProps = useSelectPanelGroupItemBoxIconBoxProvider();
  return (
    <>{children(selectPanelGroupItemBoxIconBoxIconClass({ selectPanelProps, selectPanelGroupItemBoxIconBoxProps }))}</>
  );
};

/*
  ====================================
  SelectPanelGroupItemBoxAvatar
  ====================================
*/

export const {
  Provider: SelectPanelGroupItemBoxAvatarProvider,
  useComponentContext: useSelectPanelGroupItemBoxAvatarProvider,
} = getGenericContext<USelectPanelGroupItemBoxAvatarRootProps>("SelectPanelGroupItemBoxAvatar");

export type USelectPanelGroupItemBoxAvatarRootProps = SelectPanelGroupItemBoxAvatarStyleProps &
  Avatar.AvatarProps & {
    /** Avatar content */
    children: Avatar.AvatarProps["children"];
    className?: string;
  };

export const USelectPanelGroupItemBoxAvatarRoot = ({
  className,
  ...props
}: USelectPanelGroupItemBoxAvatarRootProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <Avatar.Root
      {...props}
      className={selectPanelGroupItemBoxAvatarClass({
        className,
        selectPanelProps,
        selectPanelGroupItemBoxAvatarProps: props,
      })}
    >
      <SelectPanelGroupItemBoxAvatarProvider value={props}>{props.children}</SelectPanelGroupItemBoxAvatarProvider>
    </Avatar.Root>
  );
};

export type USelectPanelGroupItemBoxAvatarFallbackProps = Avatar.AvatarFallbackProps;
export const USelectPanelGroupItemBoxAvatarFallback = (props: USelectPanelGroupItemBoxAvatarFallbackProps) => {
  return <Avatar.Fallback {...props} style={{ display: "flex" }} />;
};

export type USelectPanelGroupItemBoxAvatarLabelProps = {
  children: ReactNode;
};
export const USelectPanelGroupItemBoxAvatarLabel = ({ children }: USelectPanelGroupItemBoxAvatarLabelProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  const selectPanelGroupItemBoxAvatarProps = useSelectPanelGroupItemBoxAvatarProvider();
  return (
    <span className={selectPanelGroupItemBoxAvatarLabelClass({ selectPanelProps, selectPanelGroupItemBoxAvatarProps })}>
      {children}
    </span>
  );
};

export type USelectPanelGroupItemBoxAvatarIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const USelectPanelGroupItemBoxAvatarIcon = ({ children }: USelectPanelGroupItemBoxAvatarIconProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  const selectPanelGroupItemBoxAvatarProps = useSelectPanelGroupItemBoxAvatarProvider();
  return (
    <>{children(selectPanelGroupItemBoxAvatarIconClass({ selectPanelProps, selectPanelGroupItemBoxAvatarProps }))}</>
  );
};

export type USelectPanelGroupItemBoxAvatarImageProps = Avatar.AvatarImageProps;
export const USelectPanelGroupItemBoxAvatarImage = (props: USelectPanelGroupItemBoxAvatarImageProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <Avatar.Image
      {...props}
      className={selectPanelGroupItemBoxAvatarImageClass({
        selectPanelProps,
      })}
    />
  );
};

/*
  ====================================
  SelectPanelGroupItemBoxBadge
  ====================================
*/

export const {
  Provider: SelectPanelGroupItemBoxBadgeProvider,
  useComponentContext: useSelectPanelGroupItemBoxBadgeProvider,
} = getGenericContext<USelectPanelGroupItemBoxBadgeRootProps>("SelectPanelGroupItemBoxBadge");

export type USelectPanelGroupItemBoxBadgeRootProps = SelectPanelGroupItemBoxBadgeStyleProps &
  React.ComponentPropsWithoutRef<"div">;
export const USelectPanelGroupItemBoxBadgeRoot = (props: USelectPanelGroupItemBoxBadgeRootProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <div
      {...props}
      className={selectPanelGroupItemBoxBadgeClass({
        className: props.className,
        selectPanelProps,
        selectPanelGroupItemBoxBadgeProps: props,
      })}
    >
      <SelectPanelGroupItemBoxBadgeProvider value={props}>{props.children}</SelectPanelGroupItemBoxBadgeProvider>
    </div>
  );
};

export type USelectPanelGroupItemBoxBadgeLabelProps = {
  children: ReactNode;
  className?: string;
};
export const USelectPanelGroupItemBoxBadgeLabel = ({
  children,
  className,
}: USelectPanelGroupItemBoxBadgeLabelProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  const selectPanelGroupItemBoxBadgeProps = useSelectPanelGroupItemBoxBadgeProvider();
  return (
    <span
      className={selectPanelGroupItemBoxBadgeLabelClass({
        className,
        selectPanelProps,
        selectPanelGroupItemBoxBadgeProps,
      })}
    >
      {children}
    </span>
  );
};

export type USelectPanelGroupItemBoxBadgeIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const USelectPanelGroupItemBoxBadgeIcon = ({ children, className }: USelectPanelGroupItemBoxBadgeIconProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  const selectPanelGroupItemBoxBadgeProps = useSelectPanelGroupItemBoxBadgeProvider();
  return (
    <>
      {children(
        selectPanelGroupItemBoxBadgeIconClass({ className, selectPanelProps, selectPanelGroupItemBoxBadgeProps }),
      )}
    </>
  );
};

/*
  ====================================
  SelectPanelGroupItemCheckbox
  ====================================
*/

// export type USelectPanelGroupItemCheckboxRootProps = Checkbox.CheckboxProps;
// export const USelectPanelGroupItemCheckboxRoot = (props: USelectPanelGroupItemCheckboxRootProps) => {
//   const { rootClass } = useSelectPanelGroupItemCheckboxClasses();
//   const { disabled: parentDisabled } = useSelectPanelGroupItemProvider();
//   const disabled = props.disabled || parentDisabled;
//   return (
//     <Checkbox.Root {...props} className={rootClass(props.className)} disabled={disabled}>
//       <SelectPanelGroupItemCheckboxProvider value={props}>{props.children}</SelectPanelGroupItemCheckboxProvider>
//     </Checkbox.Root>
//   );
// };

// export type USelectPanelGroupItemCheckboxIndicatorProps = Checkbox.CheckboxIndicatorProps;
// export const USelectPanelGroupItemCheckboxIndicator = (props: USelectPanelGroupItemCheckboxIndicatorProps) => {
//   return <Checkbox.Indicator {...props} />;
// };

// export const USelectPanelGroupItemCheckboxIcon = () => {
//   const { iconClass } = useSelectPanelGroupItemCheckboxClasses();
//   const { checked } = useSelectPanelGroupItemCheckboxRootProps();
//   return (
//     <>
//       {checked === "indeterminate" ? (
//         <Minus className={iconClass()} style={{ width: "100%", height: "100%" }} />
//       ) : (
//         <Check className={iconClass()} style={{ width: "100%", height: "100%" }} />
//       )}
//     </>
//   );
// };

// export const {
//   Provider: SelectPanelGroupItemCheckboxProvider,
//   useComponentContext: useSelectPanelGroupItemCheckboxRootProps,
// } = getGenericContext<Checkbox.CheckboxProps>("SelectPanelGroupItemCheckboxProvider");
