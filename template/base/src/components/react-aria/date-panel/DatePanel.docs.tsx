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
    >
      <DatePanelGridBody>
        {(date) => (
          <DatePanelGridBodyCell date={date}>
            <DatePanelGridBodyCellButton date={date} />
          </DatePanelGridBodyCell>
        )}
      </DatePanelGridBody>
    </DatePanelGrid>
  );
};

const DatePanelIntermediate = (props: Partial<DatePanelProps>) => (
  <DatePanel
    {...props}
    previousButton={<DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />}
    nextButton={<DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />}
  >
    <BaseGrid />
  </DatePanel>
);

const defaultCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<DatePanel previousButton={PreviousButton} nextButton={NextButton}>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</DatePanel>
`;

const Default = () => {
  return (
    <ShowcaseFrame>
      <DatePanelIntermediate />
    </ShowcaseFrame>
  );
};

const invalidCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<DatePanel isInvalid previousButton={PreviousButton} nextButton={NextButton}>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</DatePanel>
`;

const Invalid = () => {
  return (
    <ShowcaseFrame code={invalidCode}>
      <DatePanelIntermediate isInvalid />
    </ShowcaseFrame>
  );
};

const disabledCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<DatePanel isDisabled previousButton={PreviousButton} nextButton={NextButton}>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</DatePanel>
`;

const Disabled = () => {
  return (
    <ShowcaseFrame code={disabledCode}>
      <DatePanelIntermediate isDisabled />
    </ShowcaseFrame>
  );
};

const unavailableDatesCode = `
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

  const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
  const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

  return (
    <DatePanel
      isDateUnavailable={isDateUnavailable}
      previousButton={PreviousButton}
      nextButton={NextButton}
    >
      <DatePanelGrid
        headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
      >
        <DatePanelGridBody>
          {(date) => (
            <DatePanelGridBodyCell date={date}>
              <DatePanelGridBodyCellButton date={date} />
            </DatePanelGridBodyCell>
          )}
        </DatePanelGridBody>
      </DatePanelGrid>
    </DatePanel>
  );
};
`;

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
    <ShowcaseFrame code={unavailableDatesCode}>
      <DatePanelIntermediate isDateUnavailable={isDateUnavailable} />
    </ShowcaseFrame>
  );
};

const defaultValueCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<DatePanel
  defaultValue={parseDate("2020-02-03")}
  previousButton={PreviousButton}
  nextButton={NextButton}
>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</DatePanel>
`;

const DefaultValue = () => {
  return (
    <ShowcaseFrame code={defaultValueCode}>
      <DatePanelIntermediate defaultValue={parseDate("2020-02-03")} />
    </ShowcaseFrame>
  );
};

const readOnlyCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<DatePanel
  isReadOnly
  previousButton={PreviousButton}
  nextButton={NextButton}
>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</DatePanel>
`;

const ReadOnly = () => {
  return (
    <ShowcaseFrame code={readOnlyCode}>
      <DatePanelIntermediate isReadOnly />
    </ShowcaseFrame>
  );
};

const minAndMaxValuesCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<DatePanel
  minValue={today(getLocalTimeZone())}
  maxValue={today(getLocalTimeZone()).add({ days: 7 })}
  previousButton={PreviousButton}
  nextButton={NextButton}
>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</DatePanel>
`;

const MinAndMaxValues = () => {
  return (
    <ShowcaseFrame code={minAndMaxValuesCode}>
      <DatePanelIntermediate
        minValue={today(getLocalTimeZone())}
        maxValue={today(getLocalTimeZone()).add({ days: 7 })}
      />
    </ShowcaseFrame>
  );
};

const multipleMonthsCode = `
const BaseGrid = ({ offset }: { offset?: DateDuration }) => {
  return (
    <DatePanelGrid
      offset={offset}
      headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
    >
      <DatePanelGridBody>
        {(date) => (
          <DatePanelGridBodyCell date={date}>
            <DatePanelGridBodyCellButton date={date} />
          </DatePanelGridBodyCell>
        )}
      </DatePanelGridBody>
    </DatePanelGrid>
  );
};

const MultipleMonths = () => {
  const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
  const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

  return (
    <DatePanelMultipleMonths
      visibleDuration={{ months: 3 }}
      previousButton={PreviousButton}
      nextButton={NextButton}
    >
      <BaseGrid />
      <BaseGrid offset={{ months: 1 }} />
      <BaseGrid offset={{ months: 2 }} />
    </DatePanelMultipleMonths>
  );
};
`;

const MultipleMonths = () => {
  return (
    <ShowcaseFrame code={multipleMonthsCode}>
      <DatePanelMultipleMonths
        visibleDuration={{ months: 3 }}
        previousButton={<DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />}
        nextButton={<DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />}
      >
        <BaseGrid />
        <BaseGrid offset={{ months: 1 }} />
        <BaseGrid offset={{ months: 2 }} />
      </DatePanelMultipleMonths>
    </ShowcaseFrame>
  );
};

const RangeDatePanelIntermediate = (props: Omit<RangeDatePanelProps, "previousButton" | "nextButton" | "children">) => (
  <RangeDatePanel
    {...props}
    previousButton={<DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />}
    nextButton={<DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />}
  >
    <BaseGrid />
  </RangeDatePanel>
);

const defaultRangeCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<RangeDatePanel
  previousButton={PreviousButton}
  nextButton={NextButton}
>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</RangeDatePanel>
`;

const DefaultRange = () => {
  return (
    <ShowcaseFrame code={defaultRangeCode}>
      <RangeDatePanelIntermediate />
    </ShowcaseFrame>
  );
};

const invalidRangeCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<RangeDatePanel
  isInvalid
  previousButton={PreviousButton}
  nextButton={NextButton}
>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</RangeDatePanel>
`;

const InvalidRange = () => {
  return (
    <ShowcaseFrame code={invalidRangeCode}>
      <RangeDatePanelIntermediate isInvalid />
    </ShowcaseFrame>
  );
};

const disabledRangeCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<RangeDatePanel
  isDisabled
  previousButton={PreviousButton}
  nextButton={NextButton}
>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</RangeDatePanel>
`;

const DisabledRange = () => {
  return (
    <ShowcaseFrame code={disabledRangeCode}>
      <RangeDatePanelIntermediate isDisabled />
    </ShowcaseFrame>
  );
};

const rangeUnavailableDatesCode = `
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

  const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
  const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

  return (
    <RangeDatePanel
      isDateUnavailable={isDateUnavailable}
      previousButton={PreviousButton}
      nextButton={NextButton}
    >
      <DatePanelGrid
        headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
      >
        <DatePanelGridBody>
          {(date) => (
            <DatePanelGridBodyCell date={date}>
              <DatePanelGridBodyCellButton date={date} />
            </DatePanelGridBodyCell>
          )}
        </DatePanelGridBody>
      </DatePanelGrid>
    </RangeDatePanel>
  );
};
`;

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
    <ShowcaseFrame code={rangeUnavailableDatesCode}>
      <RangeDatePanelIntermediate isDateUnavailable={isDateUnavailable} />
    </ShowcaseFrame>
  );
};

const rangeDefaultValueCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<RangeDatePanel
  defaultValue={{ start: parseDate("2020-02-03"), end: parseDate("2020-02-05") }}
  previousButton={PreviousButton}
  nextButton={NextButton}
>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</RangeDatePanel>
`;

const RangeDefaultValue = () => {
  return (
    <ShowcaseFrame code={rangeDefaultValueCode}>
      <RangeDatePanelIntermediate defaultValue={{ start: parseDate("2020-02-03"), end: parseDate("2020-02-05") }} />
    </ShowcaseFrame>
  );
};

const rangeReadOnlyCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<RangeDatePanel
  isReadOnly
  previousButton={PreviousButton}
  nextButton={NextButton}
>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</RangeDatePanel>
`;

const RangeReadOnly = () => {
  return (
    <ShowcaseFrame code={rangeReadOnlyCode}>
      <RangeDatePanelIntermediate isReadOnly />
    </ShowcaseFrame>
  );
};

const rangeMinAndMaxValuesCode = `
const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

<RangeDatePanel
  minValue={today(getLocalTimeZone())}
  maxValue={today(getLocalTimeZone()).add({ days: 7 })}
  previousButton={PreviousButton}
  nextButton={NextButton}
>
  <DatePanelGrid
    headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
  >
    <DatePanelGridBody>
      {(date) => (
        <DatePanelGridBodyCell date={date}>
          <DatePanelGridBodyCellButton date={date} />
        </DatePanelGridBodyCell>
      )}
    </DatePanelGridBody>
  </DatePanelGrid>
</RangeDatePanel>
`;

const RangeMinAndMaxValues = () => {
  return (
    <ShowcaseFrame code={rangeMinAndMaxValuesCode}>
      <RangeDatePanelIntermediate
        minValue={today(getLocalTimeZone())}
        maxValue={today(getLocalTimeZone()).add({ days: 7 })}
      />
    </ShowcaseFrame>
  );
};

const rangeMultipleMonthsCode = `
const BaseGrid = ({ offset }: { offset?: DateDuration }) => {
  return (
    <DatePanelGrid
      offset={offset}
      headerSlot={<DatePanelGridHeader>{(day) => <DatePanelGridHeaderCell text={day} />}</DatePanelGridHeader>}
    >
      <DatePanelGridBody>
        {(date) => (
          <DatePanelGridBodyCell date={date}>
            <DatePanelGridBodyCellButton date={date} />
          </DatePanelGridBodyCell>
        )}
      </DatePanelGridBody>
    </DatePanelGrid>
  );
};

const RangeMultipleMonths = () => {
  const PreviousButton = <DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />
  const NextButton = <DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />

  return (
    <ShowcaseFrame>
      <RangeDatePanelMultipleMonths
        visibleDuration={{ months: 3 }}
        previousButton={PreviousButton}
        nextButton={NextButton}
      >
        <BaseGrid />
        <BaseGrid offset={{ months: 1 }} />
        <BaseGrid offset={{ months: 2 }} />
      </RangeDatePanelMultipleMonths>
    </ShowcaseFrame>
  );
};
`;

const RangeMultipleMonths = () => {
  return (
    <ShowcaseFrame code={rangeMultipleMonthsCode}>
      <RangeDatePanelMultipleMonths
        visibleDuration={{ months: 3 }}
        previousButton={<DatePanelButton icon={(className) => <CaretLeft className={className} />} slot="previous" />}
        nextButton={<DatePanelButton icon={(className) => <CaretRight className={className} />} slot="next" />}
      >
        <BaseGrid />
        <BaseGrid offset={{ months: 1 }} />
        <BaseGrid offset={{ months: 2 }} />
      </RangeDatePanelMultipleMonths>
    </ShowcaseFrame>
  );
};

const DatePanelDocs = () => {
  return (
    <Page
      title="DatePanel"
      subtitle=""
      command="npx underatom@latest add date-panel"
      usageCode={defaultCode}
      defaultExample={<Default />}
    >
      <Section title="Showcase">
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
