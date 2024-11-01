import { ReactNode } from "react";
import {
  SideNavGroupHeaderLayout,
  SideNavGroupItemBoxBadgeLayout,
  SideNavGroupItemBoxBadgeWithIconLayout,
  SideNavGroupItemBoxLayout,
  SideNavGroupItemLayout,
  SideNavGroupLayout,
  SideNavLayout,
} from "../../../styles/side-nav";
import {
  USideNavGroupHeaderCaret,
  USideNavGroupHeaderLabel,
  USideNavGroupHeaderRootProps,
  USideNavGroupItemBoxBadgeIcon,
  USideNavGroupItemBoxBadgeRoot,
  USideNavGroupItemBoxBadgeRootProps,
  USideNavGroupItemBoxBadgeText,
  USideNavGroupItemBoxIcon,
  USideNavGroupItemBoxLabel,
  USideNavGroupItemBoxRoot,
  USideNavGroupItemBoxRootProps,
  USideNavGroupItemRoot,
  USideNavGroupItemRootProps,
  USideNavGroupRoot,
  USideNavGroupRootProps,
  USideNavRoot,
  USideNavRootProps,
  USideNavGroupContent,
  USideNavGroupHeaderRoot,
  USideNavGroupItemLinkRoot,
  USideNavGroupItemLinkRootProps,
  useSideNavInternalProvider,
} from "./SideNav.underatoms";

import * as Accordion from "@radix-ui/react-accordion";

/*
  ====================================
  SideNav
  ====================================
*/

export type SideNavProps = USideNavRootProps & {
  accordionProps: Accordion.AccordionSingleProps | Accordion.AccordionMultipleProps;
};
export const SideNav = ({ children, ...props }: SideNavProps) => {
  return (
    <SideNavLayout
      renderRoot={(children, className) => {
        return (
          <USideNavRoot {...props} className={className}>
            {children}
          </USideNavRoot>
        );
      }}
      styleProps={{ className: props.className, sideNavProps: props }}
      groupSlots={children}
    />
  );
};

/*
  ====================================
  SideNavGroupItemBoxBadge
  ====================================
*/

export type SideNavGroupItemBoxBadgeProps = USideNavGroupItemBoxBadgeRootProps & {
  text?: string;
};
export const SideNavGroupItemBoxBadge = ({ text, ...props }: SideNavGroupItemBoxBadgeProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return (
    <SideNavGroupItemBoxBadgeLayout
      renderRoot={(children, className) => (
        <USideNavGroupItemBoxBadgeRoot {...props} className={className}>
          {children}
        </USideNavGroupItemBoxBadgeRoot>
      )}
      styleProps={{ className: props.className, sideNavProps }}
      textSlot={text && <USideNavGroupItemBoxBadgeText>{text}</USideNavGroupItemBoxBadgeText>}
    />
  );
};

export type SideNavGroupItemBoxBadgeWithIconProps = USideNavGroupItemBoxBadgeRootProps & {
  icon?: (className: string) => React.ReactNode;
  text?: string;
};
export const SideNavGroupItemBoxBadgeWithIcon = ({
  icon,
  text,
  color = "base",
  ...props
}: SideNavGroupItemBoxBadgeWithIconProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return (
    <SideNavGroupItemBoxBadgeWithIconLayout
      renderRoot={(children, className) => (
        <USideNavGroupItemBoxBadgeRoot {...props} className={className}>
          {children}
        </USideNavGroupItemBoxBadgeRoot>
      )}
      styleProps={{ className: props.className, sideNavProps }}
      iconSlot={icon && <USideNavGroupItemBoxBadgeIcon>{icon}</USideNavGroupItemBoxBadgeIcon>}
      textSlot={text && <USideNavGroupItemBoxBadgeText>{text}</USideNavGroupItemBoxBadgeText>}
    />
  );
};

/*
  ====================================
  SideNavGroupItemBox
  ====================================
*/

export type SideNavGroupItemBoxProps = USideNavGroupItemBoxRootProps & {
  icon?: (className: string) => React.ReactNode;
  label: string;
  badgeSlot?: ReactNode;
};
export const SideNavGroupItemBox = ({ icon, label, badgeSlot, ...props }: SideNavGroupItemBoxProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return (
    <SideNavGroupItemBoxLayout
      renderRoot={(children, className) => (
        <USideNavGroupItemBoxRoot {...props} className={className}>
          {children}
        </USideNavGroupItemBoxRoot>
      )}
      styleProps={{ className: props.className, sideNavProps }}
      iconSlot={icon && <USideNavGroupItemBoxIcon>{icon}</USideNavGroupItemBoxIcon>}
      labelSlot={<USideNavGroupItemBoxLabel>{label}</USideNavGroupItemBoxLabel>}
      badgeSlot={badgeSlot}
    />
  );
};

/*
  ====================================
  SideNavGroupHeader
  ====================================
*/

export type SideNavGroupHeaderProps = Omit<USideNavGroupHeaderRootProps, "children"> & {
  hasCaret?: boolean;
  label: string;
};
export const SideNavGroupHeader = ({ hasCaret, label, ...props }: SideNavGroupHeaderProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return (
    <SideNavGroupHeaderLayout
      renderRoot={(children, className) => (
        <USideNavGroupHeaderRoot {...props} className={className}>
          {children}
        </USideNavGroupHeaderRoot>
      )}
      styleProps={{ className: props.className, sideNavProps }}
      caretSlot={hasCaret && <USideNavGroupHeaderCaret />}
      labelSlot={label && <USideNavGroupHeaderLabel>{label}</USideNavGroupHeaderLabel>}
    />
  );
};

/*
  ====================================
  SideNavGroupItem
  ====================================
*/

export type SideNavGroupItemProps = USideNavGroupItemRootProps;
export const SideNavGroupItem = ({ children, ...props }: SideNavGroupItemProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return (
    <SideNavGroupItemLayout
      renderRoot={(children, className) => (
        <USideNavGroupItemRoot {...props} className={className}>
          {children}
        </USideNavGroupItemRoot>
      )}
      styleProps={{ className: props.className, sideNavProps }}
      boxSlot={children}
    />
  );
};

export type SideNavGroupItemLinkProps = USideNavGroupItemLinkRootProps;
export const SideNavGroupItemLink = ({ children, ...props }: SideNavGroupItemLinkProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return (
    <SideNavGroupItemLayout
      renderRoot={(children, className) => (
        <USideNavGroupItemLinkRoot {...props} className={className}>
          {children}
        </USideNavGroupItemLinkRoot>
      )}
      styleProps={{ className: props.className, sideNavProps }}
      boxSlot={children}
    />
  );
};

/*
  ====================================
  SideNavGroup
  ====================================
*/

export type SideNavGroupProps = USideNavGroupRootProps & {
  headerSlot: ReactNode;
};
export const SideNavGroup = ({ headerSlot, children, ...props }: SideNavGroupProps) => {
  const sideNavProps = useSideNavInternalProvider();
  return (
    <SideNavGroupLayout
      renderRoot={(children, className) => (
        <USideNavGroupRoot {...props} className={className}>
          {children}
        </USideNavGroupRoot>
      )}
      styleProps={{ className: props.className, sideNavProps }}
      headerSlot={headerSlot}
      itemSlots={<USideNavGroupContent>{children}</USideNavGroupContent>}
    />
  );
};
