import type { RenderRoot } from "../_utils";

/*
  ====================================
  DatePanel
  ====================================
*/

export type DatePanelType = {
  className?: string;
};

export const datePanelClass = (_: DatePanelType) => "";
export const datePanelTitleClass = (_: DatePanelType) => "";

export const DatePanelLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: DatePanelType;
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  gridSlot: React.ReactNode;
  titleSlot: React.ReactNode;
}) => <></>;
export const DatePanelMultipleMonthsLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: DatePanelType;
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  gridSlots: React.ReactNode;
  titleSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  DatePanelGrid
  ====================================
*/

export type DatePanelGridType = {
  className?: string;
};

export const datePanelGridClass = (_: DatePanelGridType) => "";

export const DatePanelGridLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridType;
  headerSlot: React.ReactNode;
  bodySlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  DatePanelButton
  ====================================
*/

export type DatePanelButtonType = {
  className?: string;
};

export const datePanelButtonClass = (_: DatePanelButtonType) => "";
export const datePanelButtonIconClass = (_: DatePanelButtonType) => "";

export const DatePanelButtonLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: DatePanelButtonType;
  iconSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  DatePanelGridBody
  ====================================
*/

export type DatePanelGridBodyType = {
  className?: string;
};

export const datePanelGridBodyClass = (_: DatePanelGridBodyType) => "";

export const DatePanelGridBodyLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridBodyType;
  rowSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  DatePanelGridHeader
  ====================================
*/

export type DatePanelGridHeaderType = {
  className?: string;
};

export const datePanelGridHeaderClass = (_: DatePanelGridHeaderType) => "";

export const DatePanelGridHeaderLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridHeaderType;
  cellSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  DatePanelGridBodyRow
  ====================================
*/

export type DatePanelGridBodyRowType = {
  className?: string;
};

export const datePanelGridBodyRowClass = (_: DatePanelGridBodyRowType) => "";

export const DatePanelGridBodyRowLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridBodyRowType;
  cellSlots: React.ReactNode;
}) => <></>;

/*
  ====================================
  DatePanelGridHeaderCell
  ====================================
*/

export type DatePanelGridHeaderCellType = {
  className?: string;
};

export const datePanelGridHeaderCellClass = (_: DatePanelGridHeaderCellType) => "";
export const datePanelGridHeaderCellTextClass = (_: DatePanelGridHeaderCellType) => "";

export const DatePanelGridHeaderCellLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridHeaderCellType;
  textSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  DatePanelGridBodyRowCell
  ====================================
*/

export type DatePanelGridBodyRowCellType = {
  className?: string;
};

export const datePanelGridBodyRowCellClass = (_: DatePanelGridBodyRowCellType) => "";

export const DatePanelGridBodyRowCellLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridBodyRowCellType;
  buttonSlot: React.ReactNode;
}) => <></>;

/*
  ====================================
  DatePanelGridBodyRowCellButton
  ====================================
*/

export type DatePanelGridBodyRowCellButtonType = {
  className?: string;
};

export const datePanelGridBodyRowCellButtonClass = (_: DatePanelGridBodyRowCellButtonType) => "";
export const datePanelGridBodyRowCellButtonTextClass = (_: DatePanelGridBodyRowCellButtonType) => "";
export const datePanelGridBodyRowCellButtonDotClass = (_: DatePanelGridBodyRowCellButtonType) => "";

export const DatePanelGridBodyRowCellButtonLayout = (_: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridBodyRowCellButtonType;
  textSlot: React.ReactNode;
  dotSlot: React.ReactNode;
}) => <></>;
