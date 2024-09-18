import { ReactNode } from "react";
import { CaretDown } from "../../../assets/Icons";
import * as Accordion from "@radix-ui/react-accordion";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Link, LinkProps } from "@tanstack/react-router";
import React from "react";
import { mergeProps, useFocusRing } from "react-aria";
import {
  SideNavStyleProps,
  sideNavClass,
  sideNavGroupClass,
  sideNavGroupHeaderCaretClass,
  sideNavGroupHeaderClass,
  sideNavGroupHeaderLabelClass,
  sideNavGroupItemBoxBadgeClass,
  sideNavGroupItemBoxBadgeIconClass,
  sideNavGroupItemBoxBadgeTextClass,
  sideNavGroupItemBoxClass,
  sideNavGroupItemBoxIconClass,
  sideNavGroupItemBoxLabelClass,
  sideNavGroupItemClass,
} from "../../../styles/side-nav";
import { getGenericContext } from "../../../_utils";

/*
  ====================================
  SideNav
  ====================================
*/

export const { Provider: SideNavInternalProvider, useComponentContext: useSideNavInternalProvider } =
  getGenericContext<USideNavRootProps>("SideNavInternalProvider");

export type USideNavRootProps = SideNavStyleProps &
  Omit<ToggleGroup.ToggleGroupSingleProps, "type"> & {
    children: ReactNode;
    accordionProps: Accordion.AccordionSingleProps | Accordion.AccordionMultipleProps;
  };
export const USideNavRoot = (props: USideNavRootProps) => {
  return (
    <SideNavInternalProvider value={props}>
      <ToggleGroup.Root className="ToggleGroup" {...props} type="single">
        <Accordion.Root
          {...props.accordionProps}
          className={sideNavClass({ className: props.className, sideNavProps: props })}
        >
          {props.children}
        </Accordion.Root>
      </ToggleGroup.Root>
    </SideNavInternalProvider>
  );
};

/*
  ====================================
  SideNavGroup
  ====================================
*/

export type USideNavGroupRootProps = Accordion.AccordionItemProps;
export const USideNavGroupRoot = (props: USideNavGroupRootProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return <Accordion.Item {...props} className={sideNavGroupClass({ className: props.className, sideNavProps })} />;
};

export type USideNavGroupContentProps = Accordion.AccordionContentProps;
export const USideNavGroupContent = (props: USideNavGroupContentProps) => {
  return <Accordion.AccordionContent {...props} />;
};

/*
  ====================================
  SideNavGroupHeader
  ====================================
*/

export type USideNavGroupHeaderRootProps = Accordion.AccordionTriggerProps & {
  /** `AccordionTrigger` content */
  children: Accordion.AccordionTriggerProps["children"];
};
export const USideNavGroupHeaderRoot = React.forwardRef<HTMLButtonElement, USideNavGroupHeaderRootProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const sideNavProps = useSideNavInternalProvider();
    const { focusProps, isFocusVisible } = useFocusRing();
    return (
      <Accordion.Header>
        <Accordion.Trigger
          {...mergeProps(props, focusProps)}
          data-ring={isFocusVisible}
          ref={forwardedRef}
          className={sideNavGroupHeaderClass({ className, sideNavProps })}
        >
          {children}
        </Accordion.Trigger>
      </Accordion.Header>
    );
  },
);

/*
  ====================================
  SideNavGroupItem
  ====================================
*/

export type USideNavGroupItemRootProps = Omit<ToggleGroup.ToggleGroupItemProps, "asChild">;
export const USideNavGroupItemRoot = (props: USideNavGroupItemRootProps) => {
  const sideNavProps = useSideNavInternalProvider();
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <ToggleGroup.Item
      {...mergeProps(props, focusProps)}
      data-ring={isFocusVisible}
      className={sideNavGroupItemClass({ className: props.className, sideNavProps })}
    >
      {props.children}
    </ToggleGroup.Item>
  );
};

export type USideNavGroupItemLinkRootProps = Omit<ToggleGroup.ToggleGroupItemProps, "asChild"> & {
  linkProps?: LinkProps;
};
export const USideNavGroupItemLinkRoot = (props: USideNavGroupItemLinkRootProps) => {
  const sideNavProps = useSideNavInternalProvider();
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <ToggleGroup.Item
      asChild
      {...mergeProps(props, focusProps)}
      data-ring={isFocusVisible}
      className={sideNavGroupItemClass({ className: props.className, sideNavProps })}
    >
      <Link {...props.linkProps}>{props.children}</Link>
    </ToggleGroup.Item>
  );
};

/*
  ====================================
  SideNavGroupItemBox
  ====================================
*/

export type USideNavGroupItemBoxRootProps = React.ComponentPropsWithoutRef<"div">;
export const USideNavGroupItemBoxRoot = ({ children, className }: USideNavGroupItemBoxRootProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return <div className={sideNavGroupItemBoxClass({ className, sideNavProps })}>{children}</div>;
};

export type USideNavGroupItemBoxLabelProps = {
  children: React.ReactNode;
  className?: string;
};
export const USideNavGroupItemBoxLabel = ({ className, ...props }: USideNavGroupItemBoxLabelProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return <span {...props} className={sideNavGroupItemBoxLabelClass({ className, sideNavProps })} />;
};

export type USideNavGroupItemBoxIconProps = {
  children: (className: string) => ReactNode;
  className?: string;
};
export const USideNavGroupItemBoxIcon = ({ children, className }: USideNavGroupItemBoxIconProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return <>{children(sideNavGroupItemBoxIconClass({ className, sideNavProps }))}</>;
};

export const USideNavGroupHeaderCaret = () => {
  const sideNavProps = useSideNavInternalProvider();
  return <CaretDown className={sideNavGroupHeaderCaretClass({ sideNavProps })} />;
};

export type USideNavGroupHeaderLabelProps = React.ComponentPropsWithoutRef<"span">;
export const USideNavGroupHeaderLabel = (props: USideNavGroupHeaderLabelProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return <span {...props} className={sideNavGroupHeaderLabelClass({ sideNavProps })} />;
};

/*
  ====================================
  SideNavGroupItemBoxBadge
  ====================================
*/

export type USideNavGroupItemBoxBadgeRootProps = React.ComponentPropsWithoutRef<"div">;
export const USideNavGroupItemBoxBadgeRoot = ({
  className,
  children,
  ...props
}: USideNavGroupItemBoxBadgeRootProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return (
    <div {...props} className={sideNavGroupItemBoxBadgeClass({ className, sideNavProps })}>
      {children}
    </div>
  );
};

export type USideNavGroupItemBoxBadgeTextProps = React.ComponentPropsWithoutRef<"span">;
export const USideNavGroupItemBoxBadgeText = (props: USideNavGroupItemBoxBadgeTextProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return <span {...props} className={sideNavGroupItemBoxBadgeTextClass({ sideNavProps })} />;
};

export type USideNavGroupItemBoxBadgeIconProps = {
  children: (className: string) => ReactNode;
};
export const USideNavGroupItemBoxBadgeIcon = ({ children }: USideNavGroupItemBoxBadgeIconProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return <>{children(sideNavGroupItemBoxBadgeIconClass({ sideNavProps }))}</>;
};
