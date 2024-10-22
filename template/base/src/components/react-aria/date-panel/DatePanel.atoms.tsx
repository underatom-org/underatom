import { ReactNode } from "react";
import {
  DatePanelButtonLayout,
  DatePanelGridBodyRowCellButtonLayout,
  DatePanelGridBodyRowCellLayout,
  DatePanelGridLayout,
  DatePanelLayout,
  DatePanelMultipleMonthsLayout,
} from "../../../styles/date-panel";
import {
  UDatePanelButtonIcon,
  UDatePanelButtonRoot,
  UDatePanelButtonRootProps,
  UDatePanelGridBodyCellButtonDot,
  UDatePanelGridBodyCellButtonRoot,
  UDatePanelGridBodyCellButtonRootProps,
  UDatePanelGridBodyCellButtonText,
  UDatePanelGridBodyCellRoot,
  UDatePanelGridBodyCellRootProps,
  UDatePanelGridBodyRoot,
  UDatePanelGridBodyRootProps,
  UDatePanelGridHeaderCellRoot,
  UDatePanelGridHeaderCellRootProps,
  UDatePanelGridHeaderCellText,
  UDatePanelGridRoot,
  UDatePanelGridRootProps,
  UDatePanelHeaderRoot,
  UDatePanelHeaderRootProps,
  UDatePanelRoot,
  UDatePanelRootProps,
  UDatePanelTitle,
  URangeDatePanelRoot,
  URangeDatePanelRootProps,
} from "./DatePanel.underatoms";

/*
  ====================================
  DatePanelGridBodyRowCellButton
  ====================================
*/

export type DatePanelGridBodyCellButtonProps = Omit<UDatePanelGridBodyCellButtonRootProps, "children"> & {
  hasDot?: boolean;
  date: UDatePanelGridBodyCellRootProps["date"];
};
export const DatePanelGridBodyCellButton = ({ hasDot = false, ...props }: DatePanelGridBodyCellButtonProps) => (
  <DatePanelGridBodyRowCellButtonLayout
    renderRoot={(children, className) => (
      <UDatePanelGridBodyCellButtonRoot {...props} className={className}>
        {children}
      </UDatePanelGridBodyCellButtonRoot>
    )}
    styleProps={{ className: props.className }}
    textSlot={<UDatePanelGridBodyCellButtonText>{props.date.day}</UDatePanelGridBodyCellButtonText>}
    dotSlot={hasDot && <UDatePanelGridBodyCellButtonDot />}
  />
);

/*
  ====================================
  DatePanelGridBodyRowCell
  ====================================
*/

export type DatePanelGridBodyCellProps = UDatePanelGridBodyCellRootProps;
export const DatePanelGridBodyCell = ({ children, ...props }: DatePanelGridBodyCellProps) => (
  <DatePanelGridBodyRowCellLayout
    renderRoot={(children, className) => (
      <UDatePanelGridBodyCellRoot {...props} className={className}>
        {children}
      </UDatePanelGridBodyCellRoot>
    )}
    styleProps={{ className: props.className }}
    buttonSlot={children}
  />
);

/*
  ====================================
  DatePanelGridHeaderCell
  ====================================
*/

export type DatePanelGridHeaderCellProps = Omit<UDatePanelGridHeaderCellRootProps, "children"> & {
  text: string;
};
export const DatePanelGridHeaderCell = ({ text, ...props }: DatePanelGridHeaderCellProps) => {
  return (
    <UDatePanelGridHeaderCellRoot {...props} className={props.className}>
      <UDatePanelGridHeaderCellText>{text}</UDatePanelGridHeaderCellText>
    </UDatePanelGridHeaderCellRoot>
  );
};

/*
  ====================================
  DatePanelGridHeader
  ====================================
*/

export type DatePanelGridHeaderProps = UDatePanelHeaderRootProps;
export const DatePanelGridHeader = (props: DatePanelGridHeaderProps) => <UDatePanelHeaderRoot {...props} />;

/*
  ====================================
  DatePanelGridBody
  ====================================
*/

export type DatePanelGridBodyProps = UDatePanelGridBodyRootProps;
export const DatePanelGridBody = (props: UDatePanelGridBodyRootProps) => <UDatePanelGridBodyRoot {...props} />;

/*
  ====================================
  DatePanelButton
  ====================================
*/

export type DatePanelButtonProps = UDatePanelButtonRootProps & {
  icon?: (className: string) => ReactNode;
};
export const DatePanelButton = ({ icon, ...props }: DatePanelButtonProps) => (
  <DatePanelButtonLayout
    renderRoot={(children, className) => (
      <UDatePanelButtonRoot {...props} className={className}>
        {children}
      </UDatePanelButtonRoot>
    )}
    styleProps={{ className: props.className }}
    iconSlot={icon && <UDatePanelButtonIcon>{icon}</UDatePanelButtonIcon>}
  />
);

/*
  ====================================
  DatePanelGrid
  ====================================
*/

export type DatePanelGridProps = UDatePanelGridRootProps & {
  headerSlot: React.ReactNode;
};
export const DatePanelGrid = ({ headerSlot, children, ...props }: DatePanelGridProps) => (
  <DatePanelGridLayout
    renderRoot={(children) => (
      <UDatePanelGridRoot {...props} className={props.className}>
        <>{children}</>
      </UDatePanelGridRoot>
    )}
    styleProps={{ className: props.className }}
    headerSlot={headerSlot}
    bodySlot={children}
  />
);

/*
  ====================================
  DatePanel
  ====================================
*/

export type DatePanelProps = UDatePanelRootProps & {
  previousButton: React.ReactNode;
  nextButton: React.ReactNode;
};
export const DatePanel = ({ previousButton, nextButton, children, ...props }: DatePanelProps) => (
  <DatePanelLayout
    renderRoot={(children, className) => (
      <UDatePanelRoot {...props} className={className}>
        {children}
      </UDatePanelRoot>
    )}
    styleProps={{ className: props.className }}
    titleSlot={<UDatePanelTitle />}
    buttonSlot1={previousButton}
    buttonSlot2={nextButton}
    gridSlot={children}
  />
);

/*
  ====================================
  DatePanelMultipleMonths
  ====================================
*/

export type DatePanelMultipleMonthsProps = UDatePanelRootProps & {
  previousButton: React.ReactNode;
  nextButton: React.ReactNode;
};
export const DatePanelMultipleMonths = ({
  previousButton,
  nextButton,
  children,
  ...props
}: DatePanelMultipleMonthsProps) => (
  <DatePanelMultipleMonthsLayout
    renderRoot={(children, className) => (
      <UDatePanelRoot {...props} className={className}>
        {children}
      </UDatePanelRoot>
    )}
    styleProps={{ className: props.className }}
    titleSlot={<UDatePanelTitle />}
    buttonSlot1={previousButton}
    buttonSlot2={nextButton}
    gridSlots={children}
  />
);

/*
  ====================================
  RangeDatePanel
  ====================================
*/

export type RangeDatePanelProps = URangeDatePanelRootProps & {
  previousButton: React.ReactNode;
  nextButton: React.ReactNode;
};
export const RangeDatePanel = ({ previousButton, nextButton, children, ...props }: RangeDatePanelProps) => (
  <DatePanelLayout
    renderRoot={(children, className) => (
      <URangeDatePanelRoot {...props} className={className}>
        {children}
      </URangeDatePanelRoot>
    )}
    styleProps={{ className: props.className }}
    titleSlot={<UDatePanelTitle />}
    buttonSlot1={previousButton}
    buttonSlot2={nextButton}
    gridSlot={children}
  />
);

/*
  ====================================
  RangeDatePanelMultipleMonths
  ====================================
*/

export type RangeDatePanelMultipleMonthsProps = URangeDatePanelRootProps & {
  previousButton: React.ReactNode;
  nextButton: React.ReactNode;
};
export const RangeDatePanelMultipleMonths = ({
  previousButton,
  nextButton,
  children,
  ...props
}: RangeDatePanelMultipleMonthsProps) => (
  <DatePanelMultipleMonthsLayout
    renderRoot={(children, className) => (
      <URangeDatePanelRoot {...props} className={className}>
        {children}
      </URangeDatePanelRoot>
    )}
    styleProps={{ className: props.className }}
    titleSlot={<UDatePanelTitle />}
    buttonSlot1={previousButton}
    buttonSlot2={nextButton}
    gridSlots={children}
  />
);
