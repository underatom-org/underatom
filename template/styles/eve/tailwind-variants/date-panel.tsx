import type { RenderRoot } from "../../../base/src/_utils";
import type {
  DatePanelGridBodyRowCellButtonType,
  DatePanelGridBodyRowCellType,
  DatePanelGridHeaderCellType,
  DatePanelGridBodyRowType,
  DatePanelGridHeaderType,
  DatePanelGridBodyType,
  DatePanelButtonType,
  DatePanelGridType,
  DatePanelType,
} from "~/base/src/styles/date-panel";

export const datePanelGridBodyRowCellButtonClass = ({ className }: DatePanelGridBodyRowCellButtonType) => {
  return `
  group/datePanelGridBodyRowCellButton
  rounded-sm
  transition-all
  group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  group-data-[selected]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:[background:unset]
  group-hover/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:[background:unset]
  group-data-[pressed]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:[background:unset]
  group-data-[focus-visible]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:[background:unset]
  group-data-[selected]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  group-hover/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  group-data-[pressed]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  group-data-[focus-visible]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  group-hover/datePanelGridBodyRowCell:bg-base-100
  group-data-[pressed]/datePanelGridBodyRowCell:bg-base-100
  group-data-[focus-visible]/datePanelGridBodyRowCell:bg-base-100
  group-data-[invalid]/datePanel:group-hover/datePanelGridBodyRowCell:bg-danger-100
  group-data-[invalid]/datePanel:group-data-[pressed]/datePanelGridBodyRowCell:bg-danger-100
  group-data-[invalid]/datePanel:group-data-[focus-visible]/datePanelGridBodyRowCell:bg-danger-100
  group-data-[focus-visible]/datePanelGridBodyRowCell:shadow-focus-ring
  group-data-[focus-visible]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:shadow-none
  group-data-[focus-visible]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:shadow-none
  group-data-[selected]/datePanelGridBodyRowCell:bg-primary-950
  group-data-[focus-visible]/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:bg-primary-950
  group-hover/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:bg-primary-800
  group-data-[pressed]/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:bg-primary-800
  group-data-[invalid]/datePanel:group-data-[selected]/datePanelGridBodyRowCell:bg-danger-500
  group-data-[invalid]/datePanel:group-data-[focus-visible]/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:bg-danger-500
  group-data-[invalid]/datePanel:group-hover/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:bg-danger-700
  group-data-[invalid]/datePanel:group-data-[pressed]/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:bg-danger-700
  group-data-[disabled]/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:[background:unset]
  group-data-[invalid]/datePanel:group-data-[selected]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:[background:unset]
  group-data-[invalid]/datePanel:group-hover/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:[background:unset]
  group-data-[invalid]/datePanel:group-data-[pressed]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:[background:unset]
  group-data-[invalid]/datePanel:group-data-[focus-visible]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:[background:unset]
  group-hover/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:[background:unset]
  group-data-[pressed]/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:[background:unset]
  group-data-[focus-visible]/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:[background:unset]
  group-data-[invalid]/datePanel:group-data-[selected]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  group-data-[invalid]/datePanel:group-hover/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  group-data-[invalid]/datePanel:group-data-[pressed]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  group-data-[invalid]/datePanel:group-data-[focus-visible]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  group-hover/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  group-data-[pressed]/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  group-data-[focus-visible]/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[background:unset]
  ${className}
  `;
};

export const datePanelGridBodyRowCellButtonTextClass = ({ className }: DatePanelGridBodyRowCellButtonType) => {
  return `
  text-base-950
  text-sm
  group-data-[outside-month]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:text-sm
  group-data-[disabled]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:text-sm
  font-text
  group-data-[outside-month]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:font-text
  group-data-[disabled]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:font-text
  font-medium
  group-data-[invalid]/datePanel:text-danger-500
  group-data-[outside-month]/datePanelGridBodyRowCell:text-base-400
  group-data-[disabled]/datePanelGridBodyRowCell:text-base-400
  group-data-[outside-month]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[text-decoration-line:unset]
  group-data-[disabled]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:[text-decoration-line:unset]
  group-data-[disabled]/datePanelGridBodyRowCell:text-base-600
  group-data-[disabled]/datePanelGridBodyRowCell:text-[14px]
  group-data-[disabled]/datePanelGridBodyRowCell:font-['GeistVariable']
  group-data-[disabled]/datePanelGridBodyRowCell:leading-[24px]
  group-data-[disabled]/datePanelGridBodyRowCell:line-through
  group-data-[selected]/datePanelGridBodyRowCell:text-white
  group-data-[outside-month]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:text-base-400
  group-data-[selected]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:text-base-400
  group-data-[disabled]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:text-base-400
  group-data-[disabled]/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:text-base-400
  group-data-[invalid]/datePanel:group-data-[outside-month]/datePanelGridBodyRowCell:text-base-400
  group-data-[invalid]/datePanel:group-data-[disabled]/datePanelGridBodyRowCell:text-base-400
  group-data-[outside-month]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:text-base-600
  group-data-[selected]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:text-base-600
  group-data-[invalid]/datePanel:group-data-[disabled]/datePanelGridBodyRowCell:text-base-600
  group-data-[invalid]/datePanel:group-data-[selected]/datePanelGridBodyRowCell:text-white
  ${className}
  `;
};

export const datePanelGridBodyRowCellButtonDotClass = ({ className }: DatePanelGridBodyRowCellButtonType) => {
  return `
  w-[7px]
  h-1
  [background:#000000]
  rounded-[50px]
  transition-all
  group-data-[invalid]/datePanel:bg-danger-500
  group-data-[outside-month]/datePanelGridBodyRowCell:bg-base-400
  group-data-[disabled]/datePanelGridBodyRowCell:bg-base-400
  group-data-[disabled]/datePanelGridBodyRowCell:bg-base-800
  group-data-[selected]/datePanelGridBodyRowCell:[background:#ffffff]
  group-data-[invalid]/datePanel:group-data-[disabled]/datePanelGridBodyRowCell:bg-danger-500
  group-data-[outside-month]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:bg-base-400
  group-data-[selected]/datePanelGridBodyRowCell:group-data-[outside-month]/datePanelGridBodyRowCell:bg-base-400
  group-data-[disabled]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:bg-base-400
  group-data-[disabled]/datePanelGridBodyRowCell:group-data-[selected]/datePanelGridBodyRowCell:bg-base-400
  group-data-[invalid]/datePanel:group-data-[outside-month]/datePanelGridBodyRowCell:bg-base-400
  group-data-[invalid]/datePanel:group-data-[disabled]/datePanelGridBodyRowCell:bg-base-400
  group-data-[outside-month]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:bg-base-800
  group-data-[selected]/datePanelGridBodyRowCell:group-data-[disabled]/datePanelGridBodyRowCell:bg-base-800
  group-data-[invalid]/datePanel:group-data-[disabled]/datePanelGridBodyRowCell:bg-base-800
  group-data-[invalid]/datePanel:group-data-[selected]/datePanelGridBodyRowCell:[background:#ffffff]
  ${className}
  `;
};

export const DatePanelGridBodyRowCellButtonLayout = ({
  renderRoot,
  styleProps: { className },
  textSlot,
  dotSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridBodyRowCellButtonType;
  textSlot: React.ReactNode;
  dotSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {textSlot}
      {dotSlot}
    </>,
    `h-9 w-full flex flex-col justify-center items-center [&>*:not(:first-child)]:[margin-top:-4px] ${className}`,
  );

export const datePanelGridBodyRowCellClass = ({ className }: DatePanelGridBodyRowCellType) => {
  return `group/datePanelGridBodyRowCell group-data-[disabled]/datePanel:pointer-events-none data-[disabled]:pointer-events-none data-[outside-month]:pointer-events-none data-[disabled]:pointer-events-none ${className}`;
};

export const DatePanelGridBodyRowCellLayout = ({
  renderRoot,
  styleProps: { className },
  buttonSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridBodyRowCellType;
  buttonSlot: React.ReactNode;
}) => renderRoot(<>{buttonSlot}</>, `h-9 w-full flex flex-row justify-center items-center gap-5 ${className}`);

export const datePanelGridHeaderCellClass = ({ className }: DatePanelGridHeaderCellType) => {
  return `group/datePanelGridHeaderCell  ${className}`;
};

export const datePanelGridHeaderCellTextClass = ({ className }: DatePanelGridHeaderCellType) => {
  return `text-primary-400 text-sm font-text font-medium ${className}`;
};

export const DatePanelGridHeaderCellLayout = ({
  renderRoot,
  styleProps: { className },
  textSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridHeaderCellType;
  textSlot: React.ReactNode;
}) => renderRoot(<>{textSlot}</>, `h-9 w-full flex flex-row justify-center items-center gap-5 ${className}`);

export const datePanelGridBodyRowClass = ({ className }: DatePanelGridBodyRowType) => {
  return `group/datePanelGridBodyRow  ${className}`;
};

export const DatePanelGridBodyRowLayout = ({
  renderRoot,
  styleProps: { className },
  cellSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridBodyRowType;
  cellSlots: React.ReactNode;
}) => renderRoot(<>{cellSlots}</>, `h-fit w-full flex flex-row justify-center items-center ${className}`);

export const datePanelGridHeaderClass = ({ className }: DatePanelGridHeaderType) => {
  return `group/datePanelGridHeader  ${className}`;
};

export const DatePanelGridHeaderLayout = ({
  renderRoot,
  styleProps: { className },
  cellSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridHeaderType;
  cellSlots: React.ReactNode;
}) => renderRoot(<>{cellSlots}</>, `h-fit w-full flex flex-row justify-center items-center ${className}`);

export const datePanelGridBodyClass = ({ className }: DatePanelGridBodyType) => {
  return `group/datePanelGridBody  ${className}`;
};

export const DatePanelGridBodyLayout = ({
  renderRoot,
  styleProps: { className },
  rowSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridBodyType;
  rowSlots: React.ReactNode;
}) => renderRoot(<>{rowSlots}</>, `h-fit w-full flex flex-col gap-2 ${className}`);

export const datePanelButtonClass = ({ className }: DatePanelButtonType) => {
  return `group/datePanelButton border-solid border-primary-200 border-1 bg-base-50 rounded-sm transition-all data-[focus-visible]:shadow-focus-ring ${className}`;
};

export const datePanelButtonIconClass = ({ className }: DatePanelButtonType) => {
  return `w-5 h-5 text-primary-600 ${className}`;
};

export const DatePanelButtonLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: DatePanelButtonType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-8 w-8 flex flex-row justify-center items-center ${className}`);

export const datePanelGridClass = ({ className }: DatePanelGridType) => {
  return `group/datePanelGrid  ${className}`;
};

export const DatePanelGridLayout = ({
  renderRoot,
  styleProps: { className },
  headerSlot,
  bodySlot,
}: {
  renderRoot: RenderRoot;
  styleProps: DatePanelGridType;
  headerSlot: React.ReactNode;
  bodySlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {headerSlot}
      {bodySlot}
    </>,
    `h-fit w-[240px] flex flex-col gap-1 ${className}`,
  );

export const datePanelClass = ({ className }: DatePanelType) => {
  return `group/datePanel border-solid border-primary-200 border-1 bg-primary-50 shadow-lg rounded-md ${className}`;
};

export const datePanelTitleClass = ({ className }: DatePanelType) => {
  return `text-primary-600 text-sm font-text font-medium text-nowrap ${className}`;
};

export const DatePanelLayout = ({
  renderRoot,
  styleProps: { className },
  buttonSlot1,
  titleSlot,
  buttonSlot2,
  gridSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: DatePanelType;
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  titleSlot: React.ReactNode;
  gridSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-col gap-[6px]">
        <div className="h-fit w-full flex flex-row justify-between items-center gap-[6px]">
          {buttonSlot1}
          {titleSlot}
          {buttonSlot2}
        </div>
        {gridSlot}
      </div>
    </>,
    `h-fit w-fit flex flex-col gap-2 p-5 ${className}`,
  );
export const DatePanelMultipleMonthsLayout = ({
  renderRoot,
  styleProps: { className },
  buttonSlot1,
  titleSlot,
  buttonSlot2,
  gridSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: DatePanelType;
  buttonSlot1: React.ReactNode;
  buttonSlot2: React.ReactNode;
  titleSlot: React.ReactNode;
  gridSlots: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-col gap-[6px]">
        <div className="h-fit w-full flex flex-row justify-between items-center gap-[6px]">
          {buttonSlot1}
          {titleSlot}
          {buttonSlot2}
        </div>
        <div className="h-fit w-full flex flex-row gap-7 overflow-auto">{gridSlots}</div>
      </div>
    </>,
    `h-fit w-full flex flex-col gap-2 p-5 ${className}`,
  );
