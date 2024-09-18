import * as RadixAccordion from "@radix-ui/react-accordion";
import {
  accordionClass,
  accordionItemClass,
  accordionItemHeaderBadgeClass,
  accordionItemHeaderBadgeIconClass,
  accordionItemHeaderBadgeLabelClass,
  AccordionItemHeaderBadgeStyleProps,
  accordionItemHeaderCaretClass,
  accordionItemHeaderClass,
  accordionItemHeaderFillClass,
  accordionItemHeaderIconClass,
  accordionItemHeaderLabelClass,
  accordionItemHeaderPercentageClass,
  accordionItemHeaderRateClass,
  accordionItemHeaderRateItemClass,
  accordionItemHeaderRateItemIconClass,
  AccordionItemStyleProps,
  AccordionStyleProps,
} from "../../../styles/accordion";
import * as Progress from "@radix-ui/react-progress";
import React, { ReactNode } from "react";
import { CaretDown } from "../../../assets/Icons";
import { mergeProps, useFocusRing } from "react-aria";
import { RatingGroup } from "@ark-ui/react";
import { IconRosette } from "@tabler/icons-react";
import { getGenericContext } from "../../../_utils";

/*
  ====================================
  Accordion
  ====================================
*/

export const { Provider: AccordionInternalProvider, useComponentContext: useAccordionInternalProvider } =
  getGenericContext<UAccordionRootProps>("AccordionInternalProvider");

export type UAccordionRootProps = (RadixAccordion.AccordionSingleProps | RadixAccordion.AccordionMultipleProps) &
  AccordionStyleProps;
export const UAccordionRoot = (props: UAccordionRootProps) => {
  return (
    <RadixAccordion.Root {...props} className={accordionClass({ className: props.className, accordionProps: props })}>
      <AccordionInternalProvider value={props}>{props.children}</AccordionInternalProvider>
    </RadixAccordion.Root>
  );
};

/*
  ====================================
  AccordionItem
  ====================================
*/

export const { Provider: AccordionItemInternalProvider, useComponentContext: useAccordionItemInternalProvider } =
  getGenericContext<UAccordionItemRootProps>("AccordionItemInternalProvider");

export type UAccordionItemRootProps = RadixAccordion.AccordionItemProps & AccordionItemStyleProps;
export const UAccordionItemRoot = (props: UAccordionItemRootProps) => {
  const accordionProps = useAccordionInternalProvider();
  return (
    <RadixAccordion.Item
      {...props}
      className={accordionItemClass({ className: props.className, accordionItemProps: props, accordionProps })}
    >
      <AccordionItemInternalProvider value={props}>{props.children}</AccordionItemInternalProvider>
    </RadixAccordion.Item>
  );
};

export type UAccordionItemContentProps = RadixAccordion.AccordionContentProps & {
  /** The collapsible content for an item. */
  children: RadixAccordion.AccordionContentProps["children"];
};
export const UAccordionItemContent = (props: UAccordionItemContentProps) => {
  return <RadixAccordion.Content {...props} style={{ padding: "4px 12px 12px 12px" }} />;
};

/*
  ====================================
  AccordionItemHeader
  ====================================
*/
export type UAccordionItemHeaderRootProps = RadixAccordion.AccordionTriggerProps & {
  /** `AccordionTrigger` content */
  children: RadixAccordion.AccordionTriggerProps["children"];
};
export const UAccordionItemHeaderRoot = React.forwardRef<HTMLButtonElement, UAccordionItemHeaderRootProps>(
  (props, forwardedRef) => {
    const accordionProps = useAccordionInternalProvider();
    const accordionItemProps = useAccordionItemInternalProvider();
    const { focusProps, isFocusVisible } = useFocusRing();

    return (
      <RadixAccordion.Header>
        <RadixAccordion.Trigger
          {...mergeProps(props, focusProps)}
          data-ring={isFocusVisible}
          className={accordionItemHeaderClass({ className: props.className, accordionItemProps, accordionProps })}
          ref={forwardedRef}
        >
          {props.children}
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
    );
  },
);

export type UAccordionItemHeaderVotingRootProps = RadixAccordion.AccordionTriggerProps & {
  /** `AccordionTrigger` content */
  children: RadixAccordion.AccordionTriggerProps["children"];
  progressProps: Progress.ProgressProps;
};
export const UAccordionItemHeaderVotingRoot = React.forwardRef<HTMLButtonElement, UAccordionItemHeaderVotingRootProps>(
  ({ progressProps, ...props }, forwardedRef) => {
    const accordionProps = useAccordionInternalProvider();
    const accordionItemProps = useAccordionItemInternalProvider();
    const { focusProps, isFocusVisible } = useFocusRing();

    return (
      <RadixAccordion.Header>
        <Progress.Root {...progressProps} asChild>
          <RadixAccordion.Trigger
            {...mergeProps(props, focusProps)}
            data-ring={isFocusVisible}
            className={accordionItemHeaderClass({ className: props.className, accordionItemProps, accordionProps })}
            ref={forwardedRef}
            style={{ position: "relative", overflow: "hidden" }}
          >
            {props.children}
          </RadixAccordion.Trigger>
        </Progress.Root>
      </RadixAccordion.Header>
    );
  },
);

export type UAccordionItemHeaderPercentageProps = {
  children: ReactNode;
  className?: string;
};
export const UAccordionItemHeaderPercentage = (props: UAccordionItemHeaderPercentageProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <span
      {...props}
      className={accordionItemHeaderPercentageClass({ className: props.className, accordionItemProps, accordionProps })}
    />
  );
};

export type UAccordionItemHeaderFillProps = Progress.ProgressIndicatorProps & {
  value: number;
};
export const UAccordionItemHeaderFill = (props: UAccordionItemHeaderFillProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <Progress.Indicator
      {...props}
      className={accordionItemHeaderFillClass({ className: props.className, accordionItemProps, accordionProps })}
      style={{ position: "absolute", width: "auto", left: 0, right: `calc(100% - ${props.value}%)` }}
    />
  );
};

export type UAccordionItemHeaderIconProps = {
  /** Text content. */
  children: (className: string) => React.ReactNode;
  className?: string;
};
export const UAccordionItemHeaderIcon = ({ children, className }: UAccordionItemHeaderIconProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return <>{children(accordionItemHeaderIconClass({ className, accordionItemProps, accordionProps }))}</>;
};

export type UAccordionItemHeaderLabelProps = {
  /** Text content. */
  children: ReactNode;
  className?: string;
};
export const UAccordionItemHeaderLabel = ({ children, className }: UAccordionItemHeaderLabelProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <span className={accordionItemHeaderLabelClass({ className, accordionItemProps, accordionProps })}>{children}</span>
  );
};

export type UAccordionItemHeaderCaretProps = { className?: string };
export const UAccordionItemHeaderCaret = (props: UAccordionItemHeaderCaretProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <CaretDown
      className={accordionItemHeaderCaretClass({ className: props.className, accordionItemProps, accordionProps })}
    />
  );
};

/*
  ====================================
  AccordionItemHeaderRate
  ====================================
*/

export type UAccordionItemHeaderRateRootProps = RatingGroup.RootProps;
export const UAccordionItemHeaderRateRoot = ({ children, ...props }: UAccordionItemHeaderRateRootProps) => {
  const { disabled: parentDisabled } = useAccordionItemInternalProvider();
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();

  return (
    <RatingGroup.Root
      {...props}
      onClick={(e) => {
        e.stopPropagation();
        props.onClick?.(e);
      }}
      disabled={props.disabled || parentDisabled}
    >
      <RatingGroup.Control
        className={accordionItemHeaderRateClass({ className: props.className, accordionItemProps, accordionProps })}
      >
        {children}
      </RatingGroup.Control>
    </RatingGroup.Root>
  );
};

/*
  ====================================
  AccordionItemHeaderBadge
  ====================================
*/

export const {
  Provider: AccordionItemHeaderBadgeInternalProvider,
  useComponentContext: useAccordionItemHeaderBadgeInternalProvider,
} = getGenericContext<UAccordionItemHeaderBadgeRootProps>("AccordionItemHeaderBadgeInternalProvider");

export type UAccordionItemHeaderBadgeRootProps = AccordionItemHeaderBadgeStyleProps & {
  children: ReactNode;
  className?: string;
};
export const UAccordionItemHeaderBadgeRoot = (props: UAccordionItemHeaderBadgeRootProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <div
      className={accordionItemHeaderBadgeClass({
        className: props.className,
        accordionItemHeaderBadgeProps: props,
        accordionItemProps,
        accordionProps,
      })}
    >
      <AccordionItemHeaderBadgeInternalProvider value={props}>
        {props.children}
      </AccordionItemHeaderBadgeInternalProvider>
    </div>
  );
};

export type UAccordionItemHeaderBadgeLabelProps = {
  /** Text content. */
  children: ReactNode;
  className?: string;
};
export const UAccordionItemHeaderBadgeLabel = (props: UAccordionItemHeaderBadgeLabelProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  const accordionItemHeaderBadgeProps = useAccordionItemHeaderBadgeInternalProvider();
  return (
    <div
      className={accordionItemHeaderBadgeLabelClass({
        className: props.className,
        accordionItemHeaderBadgeProps,
        accordionItemProps,
        accordionProps,
      })}
    >
      {props.children}
    </div>
  );
};

export type UAccordionItemHeaderBadgeIconProps = {
  /** Text content. */
  children: (className: string) => React.ReactNode;
  className?: string;
};
export const UAccordionItemHeaderBadgeIcon = ({ children, className }: UAccordionItemHeaderBadgeIconProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  const accordionItemHeaderBadgeProps = useAccordionItemHeaderBadgeInternalProvider();
  return (
    <>
      {children(
        accordionItemHeaderBadgeIconClass({
          className,
          accordionItemHeaderBadgeProps,
          accordionItemProps,
          accordionProps,
        }),
      )}
    </>
  );
};

/*
  ====================================
  AccordionItemHeaderRateItem
  ====================================
*/

export type UAccordionItemHeaderRateItemRootProps = RatingGroup.ItemProps;
export const UAccordionItemHeaderRateItemRoot = (props: UAccordionItemHeaderRateItemRootProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <RatingGroup.Item
      {...mergeProps(props, focusProps)}
      data-ring={isFocusVisible}
      className={accordionItemHeaderRateItemClass({ className: props.className, accordionItemProps, accordionProps })}
    />
  );
};

export type UAccordionItemHeaderRateItemIconProps = { className?: string };
export const UAccordionItemHeaderRateItemIcon = (props: UAccordionItemHeaderRateItemIconProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <RatingGroup.ItemContext>
      {({ highlighted }) =>
        highlighted ? (
          <IconRosette
            fill="currentColor"
            className={accordionItemHeaderRateItemIconClass({
              className: props.className,
              accordionItemProps,
              accordionProps,
            })}
          />
        ) : (
          <IconRosette
            className={accordionItemHeaderRateItemIconClass({
              className: props.className,
              accordionItemProps,
              accordionProps,
            })}
          />
        )
      }
    </RatingGroup.ItemContext>
  );
};
