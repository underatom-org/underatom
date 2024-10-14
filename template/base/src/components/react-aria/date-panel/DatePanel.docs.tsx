import {
  DatePanel,
  DatePanelGrid,
  DatePanelGridHeader,
  DatePanelGridHeaderCell,
  DatePanelGridBody,
  DatePanelGridBodyCell,
  DatePanelProps,
  DatePanelGridBodyCellButton,
  DatePanelButton,
  DatePanelMultipleMonths,
  RangeDatePanel,
  RangeDatePanelMultipleMonths,
  RangeDatePanelProps,
} from "./DatePanel.atoms";
import { CaretRight, CaretLeft } from "./../../../assets/Icons";
import { useLocale, DateValue } from "react-aria";
import { today, getLocalTimeZone, isWeekend, parseDate, DateDuration } from "@internationalized/date";
import { DocsRoute } from "../../../docs/docs.types";
import { Example, Page, Section, ShowcaseFrame } from "../../../docs/docs.components";

const BaseGrid = ({ offset }: { offset?: DateDuration }) => {
  return (
    <DatePanelGrid
      offset={offset}
      headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
      bodySlot={
        <DatePanelGridBody>
          {(date) => <DatePanelGridBodyCell date={date} buttonSlot={<DatePanelGridBodyCellButton date={date} />} />}
        </DatePanelGridBody>
      }
    />
  );
};

const DatePanelIntermediate = (props: Partial<DatePanelProps>) => (
  <DatePanel
    {...props}
    buttonSlot1={<DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />}
    buttonSlot2={<DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />}
    gridSlot={<BaseGrid />}
  />
);

const Default = () => {
  return (
    <ShowcaseFrame>
      <DatePanelIntermediate />
    </ShowcaseFrame>
  );
};

const Invalid = () => {
  return (
    <ShowcaseFrame>
      <DatePanelIntermediate isInvalid />
    </ShowcaseFrame>
  );
};

const Disabled = () => {
  return (
    <ShowcaseFrame>
      <DatePanelIntermediate isDisabled />
    </ShowcaseFrame>
  );
};

const UnavailableDates = () => {
  let now = today(getLocalTimeZone());
  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  let { locale } = useLocale();
  let isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ||
    disabledRanges.some((interval) => date.compare(interval[0]!) >= 0 && date.compare(interval[1]!) <= 0);

  return (
    <ShowcaseFrame>
      <DatePanelIntermediate isDateUnavailable={isDateUnavailable} />
    </ShowcaseFrame>
  );
};

const DefaultValue = () => {
  return (
    <ShowcaseFrame>
      <DatePanelIntermediate defaultValue={parseDate("2020-02-03")} />
    </ShowcaseFrame>
  );
};

const ReadOnly = () => {
  return (
    <ShowcaseFrame>
      <DatePanelIntermediate isReadOnly />
    </ShowcaseFrame>
  );
};

const MinAndMaxValues = () => {
  return (
    <ShowcaseFrame>
      <DatePanelIntermediate
        minValue={today(getLocalTimeZone())}
        maxValue={today(getLocalTimeZone()).add({ days: 7 })}
      />
    </ShowcaseFrame>
  );
};

const MultipleMonths = () => {
  return (
    <ShowcaseFrame>
      <DatePanelMultipleMonths
        visibleDuration={{ months: 3 }}
        buttonSlot1={<DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />}
        buttonSlot2={<DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />}
        gridsSlot={
          <>
            <BaseGrid />
            <BaseGrid offset={{ months: 1 }} />
            <BaseGrid offset={{ months: 2 }} />
          </>
        }
      />
    </ShowcaseFrame>
  );
};

const RangeBaseGrid = ({ offset }: { offset?: DateDuration }) => {
  return (
    <DatePanelGrid
      offset={offset}
      headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
      bodySlot={
        <DatePanelGridBody>
          {(date) => <DatePanelGridBodyCell date={date} buttonSlot={<DatePanelGridBodyCellButton date={date} />} />}
        </DatePanelGridBody>
      }
    />
  );
};

const RangeDatePanelIntermediate = (props: Omit<RangeDatePanelProps, "buttonSlot1" | "buttonSlot2" | "gridSlot">) => (
  <RangeDatePanel
    {...props}
    buttonSlot1={<DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />}
    buttonSlot2={<DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />}
    gridSlot={<RangeBaseGrid />}
  />
);

const DefaultRange = () => {
  return (
    <ShowcaseFrame>
      <RangeDatePanelIntermediate />
    </ShowcaseFrame>
  );
};

const InvalidRange = () => {
  return (
    <ShowcaseFrame>
      <RangeDatePanelIntermediate isInvalid />
    </ShowcaseFrame>
  );
};

const DisabledRange = () => {
  return (
    <ShowcaseFrame>
      <RangeDatePanelIntermediate isDisabled />
    </ShowcaseFrame>
  );
};

const RangeUnavailableDates = () => {
  let now = today(getLocalTimeZone());
  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  let { locale } = useLocale();
  let isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ||
    disabledRanges.some((interval) => date.compare(interval[0]!) >= 0 && date.compare(interval[1]!) <= 0);

  return (
    <ShowcaseFrame>
      <RangeDatePanelIntermediate isDateUnavailable={isDateUnavailable} />
    </ShowcaseFrame>
  );
};

const RangeDefaultValue = () => {
  return (
    <ShowcaseFrame>
      <RangeDatePanelIntermediate defaultValue={{ start: parseDate("2020-02-03"), end: parseDate("2020-02-05") }} />
    </ShowcaseFrame>
  );
};

const RangeReadOnly = () => {
  return (
    <ShowcaseFrame>
      <RangeDatePanelIntermediate isReadOnly />
    </ShowcaseFrame>
  );
};

const RangeMinAndMaxValues = () => {
  return (
    <ShowcaseFrame>
      <RangeDatePanelIntermediate
        minValue={today(getLocalTimeZone())}
        maxValue={today(getLocalTimeZone()).add({ days: 7 })}
      />
    </ShowcaseFrame>
  );
};

const RangeMultipleMonths = () => {
  return (
    <ShowcaseFrame>
      <RangeDatePanelMultipleMonths
        visibleDuration={{ months: 3 }}
        buttonSlot1={<DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />}
        buttonSlot2={<DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />}
        gridsSlot={
          <>
            <RangeBaseGrid />
            <RangeBaseGrid offset={{ months: 1 }} />
            <RangeBaseGrid offset={{ months: 2 }} />
          </>
        }
      />
    </ShowcaseFrame>
  );
};

const DatePanelDocs = () => {
  return (
    <Page title="DatePanel" subtitle="" command="npx underatom@latest add date-panel">
      <Section title="Showcase">
        <Example title="Default">
          <Default />
        </Example>
        <Example title="Invalid">
          <Invalid />
        </Example>
        <Example title="Disabled">
          <Disabled />
        </Example>
        <Example title="Unavailable Dates">
          <UnavailableDates />
        </Example>
        <Example title="Default Value">
          <DefaultValue />
        </Example>
        <Example title="Read Only">
          <ReadOnly />
        </Example>
        <Example title="Min and Max Values">
          <MinAndMaxValues />
        </Example>
        <Example title="Multiple Months">
          <MultipleMonths />
        </Example>
      </Section>

      <Section title="RangeDatePanel">
        <Example title="Default">
          <DefaultRange />
        </Example>
        <Example title="Invalid">
          <InvalidRange />
        </Example>
        <Example title="Disabled">
          <DisabledRange />
        </Example>
        <Example title="Unavailable Dates">
          <RangeUnavailableDates />
        </Example>
        <Example title="Default Value">
          <RangeDefaultValue />
        </Example>
        <Example title="Read Only">
          <RangeReadOnly />
        </Example>
        <Example title="Min and Max Values">
          <RangeMinAndMaxValues />
        </Example>
        <Example title="Multiple Months">
          <RangeMultipleMonths />
        </Example>
      </Section>
    </Page>
  );
};

const datePanelRoute = "/date-panel";
export const datePanelRouteObj: DocsRoute<typeof datePanelRoute> = {
  path: datePanelRoute,
  group: "react-aria",
  label: "DatePanel",
  component: DatePanelDocs,
};
