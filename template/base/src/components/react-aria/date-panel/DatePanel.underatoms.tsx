import {
  Button,
  Calendar,
  CalendarCell,
  Heading,
  HeadingProps,
  CalendarGridProps,
  CalendarGrid,
  CalendarCellProps,
  CalendarGridBodyProps,
  CalendarGridBody,
  ButtonProps,
  CalendarGridHeaderProps,
  CalendarGridHeader,
  CalendarHeaderCellProps,
  CalendarHeaderCell,
  RangeCalendar,
} from "react-aria-components";
import { getGenericContext } from "../../../_utils";
import {
  datePanelButtonClass,
  datePanelButtonIconClass,
  datePanelClass,
  datePanelGridBodyClass,
  datePanelGridBodyRowCellButtonClass,
  datePanelGridBodyRowCellButtonDotClass,
  datePanelGridBodyRowCellButtonTextClass,
  datePanelGridBodyRowCellClass,
  datePanelGridClass,
  datePanelGridHeaderCellClass,
  datePanelGridHeaderCellTextClass,
  datePanelGridHeaderClass,
  datePanelTitleClass,
} from "../../../styles/date-panel";

/*
    ====================================
    DatePanel
    ====================================
*/

export const { Provider: DatePanelRootInternalProvider, useComponentContext: useDatePanelRootParentProps } =
  getGenericContext<UDatePanelRootProps | URangeDatePanelRootProps>("DatePanelRootInternalProvider");

export type UDatePanelRootProps = React.ComponentPropsWithoutRef<typeof Calendar> & {
  className?: string;
  children: React.ReactNode;
};
export const UDatePanelRoot = (props: UDatePanelRootProps) => {
  return (
    <Calendar {...props} className={datePanelClass({ className: props.className })}>
      <DatePanelRootInternalProvider value={props}>{props.children}</DatePanelRootInternalProvider>
    </Calendar>
  );
};

export type URangeDatePanelRootProps = React.ComponentPropsWithoutRef<typeof RangeCalendar> & {
  className?: string;
  children: React.ReactNode;
};
export const URangeDatePanelRoot = (props: URangeDatePanelRootProps) => {
  return (
    <RangeCalendar {...props} className={datePanelClass({ className: props.className })}>
      <DatePanelRootInternalProvider value={props}>{props.children}</DatePanelRootInternalProvider>
    </RangeCalendar>
  );
};

export type UDatePanelTitleProps = HeadingProps;
export const UDatePanelTitle = (props: UDatePanelTitleProps) => {
  return <Heading {...props} className={datePanelTitleClass({ className: props.className })} />;
};

/*
    ====================================
    DatePanelButton
    ====================================
*/

export type UDatePanelButtonRootProps = ButtonProps & {
  className?: string;
};
export const UDatePanelButtonRoot = (props: UDatePanelButtonRootProps) => {
  const { isDisabled: parentDisabled } = useDatePanelRootParentProps();
  return (
    <Button
      {...props}
      className={datePanelButtonClass({ className: props.className })}
      isDisabled={props.isDisabled || parentDisabled}
    />
  );
};

export type UDatePanelButtonIconProps = {
  children: (className: string) => React.ReactNode;
};
export const UDatePanelButtonIcon = ({ children }: UDatePanelButtonIconProps) => {
  return <>{children(datePanelButtonIconClass({}))}</>;
};

export type UDatePanelButtonTextProps = {
  children: React.ReactNode;
};

/*
    ====================================
    DatePanelGrid
    ====================================
*/

export type UDatePanelGridRootProps = Omit<CalendarGridProps, "children"> & {
  children: React.ReactElement;
};
export const UDatePanelGridRoot = (props: UDatePanelGridRootProps) => {
  return (
    <CalendarGrid
      style={{ width: "100%", minWidth: "240px" }}
      {...props}
      className={datePanelGridClass({ className: props.className })}
    />
  );
};

/*
    ====================================
    DatePanelGridHeader
    ====================================
*/

export type UDatePanelHeaderRootProps = CalendarGridHeaderProps;
export const UDatePanelHeaderRoot = (props: UDatePanelHeaderRootProps) => {
  return <CalendarGridHeader {...props} className={datePanelGridHeaderClass({ className: props.className })} />;
};

/*
    ====================================
    DatePanelGridHeaderCell
    ====================================
*/

export type UDatePanelGridHeaderCellRootProps = CalendarHeaderCellProps & {
  className?: string;
  children: React.ReactNode;
};
export const UDatePanelGridHeaderCellRoot = (props: UDatePanelGridHeaderCellRootProps) => {
  return <CalendarHeaderCell {...props} className={datePanelGridHeaderCellClass({ className: props.className })} />;
};

export type UDatePanelGridHeaderCellTextProps = {
  children: React.ReactNode;
};
export const UDatePanelGridHeaderCellText = (props: UDatePanelGridHeaderCellTextProps) => {
  return <span className={datePanelGridHeaderCellTextClass({})}>{props.children}</span>;
};

/*
    ====================================
    DatePanelGridBody
    ====================================
*/

export type UDatePanelGridBodyRootProps = CalendarGridBodyProps;
export const UDatePanelGridBodyRoot = (props: UDatePanelGridBodyRootProps) => {
  return <CalendarGridBody {...props} className={datePanelGridBodyClass({ className: props.className })} />;
};

/*
    ====================================
    DatePanelGridBodyRowCell
    ====================================
*/

export type UDatePanelGridBodyCellRootProps = CalendarCellProps & {
  className?: string;
  children: React.ReactNode;
};
export const UDatePanelGridBodyCellRoot = (props: UDatePanelGridBodyCellRootProps) => {
  return <CalendarCell {...props} className={datePanelGridBodyRowCellClass({ className: props.className })} />;
};

/*
    ====================================
    DatePanelGridBodyRowCellButton
    ====================================
*/

export type UDatePanelGridBodyCellButtonRootProps = {
  className?: string;
  children: React.ReactNode;
};
export const UDatePanelGridBodyCellButtonRoot = (props: UDatePanelGridBodyCellButtonRootProps) => {
  return <div {...props} className={datePanelGridBodyRowCellButtonClass({ className: props.className })} />;
};

export type UDatePanelGridBodyCellButtonTextProps = {
  children: React.ReactNode;
};
export const UDatePanelGridBodyCellButtonText = (props: UDatePanelGridBodyCellButtonTextProps) => {
  return <span className={datePanelGridBodyRowCellButtonTextClass({})}>{props.children}</span>;
};

export const UDatePanelGridBodyCellButtonDot = () => {
  return <span className={datePanelGridBodyRowCellButtonDotClass({})} />;
};
