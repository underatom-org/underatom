import {
  AccordionItemHeaderBadgeLayout,
  AccordionItemHeaderBadgeWithIconLayout,
  AccordionItemHeaderLayout,
  AccordionItemHeaderRateItemLayout,
  AccordionItemHeaderRateLayout,
  AccordionItemHeaderVotingLayout,
  AccordionItemLayout,
  AccordionLayout,
} from "../../../styles/accordion";
import {
  UAccordionItemContent,
  UAccordionItemHeaderBadgeIcon,
  UAccordionItemHeaderBadgeLabel,
  UAccordionItemHeaderBadgeRoot,
  UAccordionItemHeaderBadgeRootProps,
  UAccordionItemHeaderCaret,
  UAccordionItemHeaderFill,
  UAccordionItemHeaderIcon,
  UAccordionItemHeaderLabel,
  UAccordionItemHeaderPercentage,
  UAccordionItemHeaderRateRoot,
  UAccordionItemHeaderRateItemRoot,
  UAccordionItemHeaderRateRootProps,
  UAccordionItemHeaderRateItemRootProps,
  UAccordionItemHeaderRateItemIcon,
  UAccordionItemHeaderRoot,
  UAccordionItemHeaderRootProps,
  UAccordionItemHeaderVotingRoot,
  UAccordionItemHeaderVotingRootProps,
  UAccordionItemRoot,
  UAccordionItemRootProps,
  UAccordionRoot,
  UAccordionRootProps,
  useAccordionInternalProvider,
  useAccordionItemInternalProvider,
} from "./Accordion.underatoms";

/*
  ====================================
  Accordion
  ====================================
*/

export type AccordionProps = UAccordionRootProps & {
  itemSlots: React.ReactNode[];
};

export const Accordion = ({ itemSlots, ...props }: AccordionProps) => {
  return (
    <AccordionLayout
      renderRoot={(children, className) => (
        <UAccordionRoot {...props} className={className}>
          {children}
        </UAccordionRoot>
      )}
      styleProps={{ className: props.className, accordionProps: props }}
      itemSlots={itemSlots}
    />
  );
};

/*
  ====================================
  AccordionItem
  ====================================
*/

export type AccordionItemProps = Omit<UAccordionItemRootProps, "children"> & {
  headerSlot?: React.ReactNode;
  contentSlot?: React.ReactNode;
};
export const AccordionItem = ({ contentSlot, headerSlot, ...props }: AccordionItemProps) => {
  const accordionProps = useAccordionInternalProvider();
  return (
    <AccordionItemLayout
      styleProps={{ className: props.className, accordionItemProps: props, accordionProps }}
      renderRoot={(children, className) => (
        <UAccordionItemRoot {...props} className={className}>
          {children}
          <UAccordionItemContent>{contentSlot}</UAccordionItemContent>
        </UAccordionItemRoot>
      )}
      headerSlot={headerSlot}
    />
  );
};

/*
  ====================================
  AccordionItemHeader
  ====================================
*/

export type AccordionItemHeaderProps = Omit<UAccordionItemHeaderRootProps, "children"> & {
  icon?: (className: string) => React.ReactNode;
  label: string;
  badgeSlot?: React.ReactNode;
};

export const AccordionItemHeader = ({ icon, label, badgeSlot, ...props }: AccordionItemHeaderProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <AccordionItemHeaderLayout
      renderRoot={(children, className) => (
        <UAccordionItemHeaderRoot {...props} className={className}>
          {children}
        </UAccordionItemHeaderRoot>
      )}
      styleProps={{ className: props.className, accordionItemProps, accordionProps }}
      labelSlot={<UAccordionItemHeaderLabel>{label}</UAccordionItemHeaderLabel>}
      iconSlot={icon && <UAccordionItemHeaderIcon>{icon}</UAccordionItemHeaderIcon>}
      caretSlot={<UAccordionItemHeaderCaret />}
      badgeSlot={badgeSlot}
    />
  );
};

export type AccordionItemHeaderVotingProps = Omit<UAccordionItemHeaderVotingRootProps, "children"> & {
  label: string;
  badgeSlot?: React.ReactNode;
  rateSlot?: React.ReactNode;
};

export const AccordionItemHeaderVoting = ({ label, badgeSlot, rateSlot, ...props }: AccordionItemHeaderVotingProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <AccordionItemHeaderVotingLayout
      renderRoot={(children, className) => (
        <UAccordionItemHeaderVotingRoot {...props} className={className + " " + (props.className ?? "")}>
          {children}
        </UAccordionItemHeaderVotingRoot>
      )}
      styleProps={{ className: props.className, accordionItemProps, accordionProps }}
      labelSlot={<UAccordionItemHeaderLabel>{label}</UAccordionItemHeaderLabel>}
      percentageSlot={<UAccordionItemHeaderPercentage>{props.progressProps.value}%</UAccordionItemHeaderPercentage>}
      fillSlot={<UAccordionItemHeaderFill value={props.progressProps.value ?? 0} />}
      caretSlot={<UAccordionItemHeaderCaret />}
      rateSlot={rateSlot}
      badgeSlot={badgeSlot}
    />
  );
};

/*
  ====================================
  AccordionItemHeaderRate
  ====================================
*/

export type AccordionItemHeaderRateProps = UAccordionItemHeaderRateRootProps;
export const AccordionItemHeaderRate = (props: AccordionItemHeaderRateProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <AccordionItemHeaderRateLayout
      renderRoot={(children, className) => (
        <UAccordionItemHeaderRateRoot {...props} className={className}>
          {children}
        </UAccordionItemHeaderRateRoot>
      )}
      styleProps={{ className: props.className, accordionItemProps, accordionProps }}
      itemSlots={Array.from({ length: props.count ?? 3 }, (_, index) => (
        <AccordionItemHeaderRateItem key={index} index={index + 1} />
      ))}
    />
  );
};

/*
  ====================================
  AccordionItemHeaderBadge
  ====================================
*/

export type AccordionItemHeaderBadgeProps = Omit<UAccordionItemHeaderBadgeRootProps, "children"> & {
  label: string;
};

export const AccordionItemHeaderBadge = ({ label, ...props }: AccordionItemHeaderBadgeProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <AccordionItemHeaderBadgeLayout
      renderRoot={(children, className) => (
        <UAccordionItemHeaderBadgeRoot {...props} className={className}>
          {children}
        </UAccordionItemHeaderBadgeRoot>
      )}
      styleProps={{
        className: props.className,
        accordionItemHeaderBadgeProps: props,
        accordionItemProps,
        accordionProps,
      }}
      labelSlot={<UAccordionItemHeaderBadgeLabel>{label}</UAccordionItemHeaderBadgeLabel>}
    />
  );
};

export type AccordionItemHeaderBadgeWithIconProps = Omit<UAccordionItemHeaderBadgeRootProps, "children"> & {
  icon: (className: string) => React.ReactNode;
  label: string;
};

export const AccordionItemHeaderBadgeWithIcon = ({ icon, label, ...props }: AccordionItemHeaderBadgeWithIconProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <AccordionItemHeaderBadgeWithIconLayout
      renderRoot={(children, className) => (
        <UAccordionItemHeaderBadgeRoot {...props} className={className}>
          {children}
        </UAccordionItemHeaderBadgeRoot>
      )}
      styleProps={{
        className: props.className,
        accordionItemHeaderBadgeProps: props,
        accordionItemProps,
        accordionProps,
      }}
      labelSlot={<UAccordionItemHeaderBadgeLabel>{label}</UAccordionItemHeaderBadgeLabel>}
      iconSlot={<UAccordionItemHeaderBadgeIcon>{icon}</UAccordionItemHeaderBadgeIcon>}
    />
  );
};

/*
  ====================================
  AccordionItemHeaderRateItem
  ====================================
*/

export type AccordionItemHeaderRateItemProps = UAccordionItemHeaderRateItemRootProps;
export const AccordionItemHeaderRateItem = (props: AccordionItemHeaderRateItemProps) => {
  const accordionProps = useAccordionInternalProvider();
  const accordionItemProps = useAccordionItemInternalProvider();
  return (
    <AccordionItemHeaderRateItemLayout
      renderRoot={(children, className) => (
        <UAccordionItemHeaderRateItemRoot {...props} className={className}>
          {children}
        </UAccordionItemHeaderRateItemRoot>
      )}
      styleProps={{ className: props.className, accordionItemProps, accordionProps }}
      iconSlot={<UAccordionItemHeaderRateItemIcon />}
    />
  );
};
