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

export type DatePanelGridBodyCellProps = Omit<UDatePanelGridBodyCellRootProps, "children"> & {
  buttonSlot: React.ReactNode;
};
export const DatePanelGridBodyCell = ({ buttonSlot, ...props }: DatePanelGridBodyCellProps) => (
  <DatePanelGridBodyRowCellLayout
    renderRoot={(children, className) => (
      <UDatePanelGridBodyCellRoot {...props} className={className}>
        {children}
      </UDatePanelGridBodyCellRoot>
    )}
    styleProps={{ className: props.className }}
    buttonSlot={buttonSlot}
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

export type DatePanelGridProps = Omit<UDatePanelGridRootProps, "children"> & {
  headerSlot: React.ReactNode;
  bodySlot: React.ReactNode;
};
export const DatePanelGrid = ({ headerSlot, bodySlot, ...props }: DatePanelGridProps) => (
  <DatePanelGridLayout
    renderRoot={(children) => (
      <UDatePanelGridRoot {...props} className={props.className}>
        <>{children}</>
      </UDatePanelGridRoot>
    )}
    styleProps={{ className: props.className }}
    headerSlot={headerSlot}
    bodySlot={bodySlot}
  />
);

/*
  ====================================
  DatePanel
  ====================================
*/

export type DatePanelProps = Omit<UDatePanelRootProps, "children"> & {
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  gridSlot: React.ReactNode;
};
export const DatePanel = ({ buttonSlot1, buttonSlot2, gridSlot, ...props }: DatePanelProps) => (
  <DatePanelLayout
    renderRoot={(children, className) => (
      <UDatePanelRoot {...props} className={className}>
        {children}
      </UDatePanelRoot>
    )}
    styleProps={{ className: props.className }}
    titleSlot={<UDatePanelTitle />}
    buttonSlot1={buttonSlot1}
    buttonSlot2={buttonSlot2}
    gridSlot={gridSlot}
  />
);

/*
  ====================================
  DatePanelMultipleMonths
  ====================================
*/

export type DatePanelMultipleMonthsProps = Omit<UDatePanelRootProps, "children"> & {
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  gridsSlot: React.ReactNode;
};
export const DatePanelMultipleMonths = ({
  buttonSlot1,
  buttonSlot2,
  gridsSlot,
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
    buttonSlot1={buttonSlot1}
    buttonSlot2={buttonSlot2}
    gridSlots={gridsSlot}
  />
);

/*
  ====================================
  RangeDatePanel
  ====================================
*/

export type RangeDatePanelProps = Omit<URangeDatePanelRootProps, "children"> & {
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  gridSlot: React.ReactNode;
};
export const RangeDatePanel = ({ buttonSlot1, buttonSlot2, gridSlot, ...props }: RangeDatePanelProps) => (
  <DatePanelLayout
    renderRoot={(children, className) => (
      <URangeDatePanelRoot {...props} className={className}>
        {children}
      </URangeDatePanelRoot>
    )}
    styleProps={{ className: props.className }}
    titleSlot={<UDatePanelTitle />}
    buttonSlot1={buttonSlot1}
    buttonSlot2={buttonSlot2}
    gridSlot={gridSlot}
  />
);

/*
  ====================================
  RangeDatePanelMultipleMonths
  ====================================
*/

export type RangeDatePanelMultipleMonthsProps = Omit<URangeDatePanelRootProps, "children"> & {
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  gridsSlot: React.ReactNode;
};
export const RangeDatePanelMultipleMonths = ({
  buttonSlot1,
  buttonSlot2,
  gridsSlot,
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
    buttonSlot1={buttonSlot1}
    buttonSlot2={buttonSlot2}
    gridSlots={gridsSlot}
  />
);
