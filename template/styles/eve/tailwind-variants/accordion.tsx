import type { RenderRoot } from "../../../base/src/_utils";
import type {
  AccordionItemHeaderRateItemType,
  AccordionItemHeaderBadgeType,
  AccordionItemHeaderRateType,
  AccordionItemHeaderType,
  AccordionItemType,
  AccordionType,
} from "~/base/src/styles/accordion";
import { accordionDefaults, accordionItemHeaderBadgeDefaults } from "~/base/src/styles/accordion";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const accordionItemHeaderRateItemClass = ({ className, accordionProps }: AccordionItemHeaderRateItemType) => {
  const rootClass = tv({
    base: "group/accordionItemHeaderRateItem rounded-[50px] transition-all",
    variants: {
      variant: {
        attached: "data-[ring=true]:border-solid data-[ring=true]:border-primary-950 data-[ring=true]:border-1",
        separated: `
data-[highlighted]:data-[ring=true]:rounded-[50px]
  data-[ring=true]:rounded-[50px]
  data-[highlighted]:data-[ring=true]:transition-all
  data-[ring=true]:transition-all
  data-[highlighted]:data-[ring=true]:border-solid
  data-[ring=true]:border-solid
  data-[highlighted]:data-[ring=true]:border-primary-950
  data-[ring=true]:border-primary-950
  data-[highlighted]:data-[ring=true]:border-1
  data-[ring=true]:border-1
  group-data-[state=open]/accordionItem:data-[highlighted]:data-[ring=true]:border-primary-50
  group-data-[state=open]/accordionItem:data-[ring=true]:border-primary-50
`,
      },
    },

    defaultVariants: { variant: accordionDefaults.variant },
  });
  return rootClass({
    class: className,
    variant: accordionProps?.variant,
  });
};

export const accordionItemHeaderRateItemIconClass = ({
  className,
  accordionProps,
}: AccordionItemHeaderRateItemType) => {
  const iconClass = tv({
    base: "w-[22px] h-[22px] group-data-[highlighted]/accordionItemHeaderRateItem:text-warning-500",
    variants: {
      variant: {
        separated: `
text-base-300
  group-data-[disabled]/accordionItemHeaderRate:text-base-300
  group-data-[disabled]/accordionItem:group-data-[highlighted]/accordionItemHeaderRateItem:text-base-300
  group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItemHeaderRate:text-base-400
  group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:text-base-400
  group-data-[state=open]/accordionItem:text-base-600
  group-data-[state=open]/accordionItem:group-data-[highlighted]/accordionItemHeaderRateItem:text-warning-500
  group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:group-data-[highlighted]/accordionItemHeaderRateItem:text-base-400
  group-data-[highlighted]/accordionItemHeaderRateItem:group-data-[disabled]/accordionItemHeaderRate:text-base-300
`,
        attached: `
group-data-[disabled]/accordionItemHeaderRate:text-base-300
  text-base-300
  group-data-[disabled]/accordionItem:group-data-[highlighted]/accordionItemHeaderRateItem:text-base-300
  group-data-[highlighted]/accordionItemHeaderRateItem:group-data-[disabled]/accordionItemHeaderRate:text-base-300
`,
      },
    },

    defaultVariants: { variant: accordionDefaults.variant },
  });
  return iconClass({
    class: className,

    variant: accordionProps?.variant,
  });
};

export const AccordionItemHeaderRateItemLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderRateItemType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-7 w-7 flex flex-row justify-center items-center ${className}`);

export const accordionItemHeaderBadgeClass = ({
  className,
  accordionProps,
  accordionItemHeaderBadgeProps,
}: AccordionItemHeaderBadgeType) => {
  const rootClass = tv({
    base: "group/accordionItemHeaderBadge rounded-[999px] z-10 group-data-[disabled]/accordionItem:bg-base-400",
    variants: {
      variant: { attached: "", separated: "" },
      itemHeaderBadgeColor: { base: "", primary: "", red: "bg-danger-500", green: "bg-success-600" },
    },
    compoundVariants: [
      { variant: ["attached"], itemHeaderBadgeColor: ["base"], class: "bg-base-950" },
      {
        variant: ["separated"],
        itemHeaderBadgeColor: ["base"],
        class:
          "bg-base-950 transition-all group-data-[state=open]/accordionItem:bg-base-50 group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:bg-base-400",
      },
      { variant: ["attached"], itemHeaderBadgeColor: ["primary"], class: "bg-primary-950" },
      {
        variant: ["separated"],
        itemHeaderBadgeColor: ["primary"],
        class:
          "bg-primary-950 transition-all group-data-[state=open]/accordionItem:bg-base-50 group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:bg-base-400",
      },
    ],
    defaultVariants: {
      variant: accordionDefaults.variant,
      itemHeaderBadgeColor: accordionItemHeaderBadgeDefaults.color,
    },
  });
  return rootClass({
    class: className,
    variant: accordionProps?.variant,
    itemHeaderBadgeColor: accordionItemHeaderBadgeProps?.color,
  });
};

export const accordionItemHeaderBadgeLabelClass = ({
  className,
  accordionProps,
  accordionItemHeaderBadgeProps,
}: AccordionItemHeaderBadgeType) => {
  const labelClass = tv({
    base: "text-xs font-text font-normal group-data-[disabled]/accordionItem:text-base-200",
    variants: {
      variant: { attached: "text-base-50", separated: "" },
      itemHeaderBadgeColor: { primary: "", base: "", green: "text-base-50", red: "text-base-50" },
    },
    compoundVariants: [
      {
        variant: ["separated"],
        itemHeaderBadgeColor: ["primary", "base"],
        class:
          "group-data-[state=open]/accordionItem:text-base-950 text-base-50 group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:text-base-200",
      },
    ],
    defaultVariants: {
      variant: accordionDefaults.variant,
      itemHeaderBadgeColor: accordionItemHeaderBadgeDefaults.color,
    },
  });
  return labelClass({
    class: className,

    variant: accordionProps?.variant,
    itemHeaderBadgeColor: accordionItemHeaderBadgeProps?.color,
  });
};

export const accordionItemHeaderBadgeIconClass = ({
  className,
  accordionProps,
  accordionItemHeaderBadgeProps,
}: AccordionItemHeaderBadgeType) => {
  const iconClass = tv({
    base: "w-3 h-3 group-data-[disabled]/accordionItem:text-base-200",
    variants: {
      variant: { attached: "text-base-50", separated: "" },
      itemHeaderBadgeColor: { primary: "", base: "", green: "text-base-50", red: "text-base-50" },
    },
    compoundVariants: [
      {
        variant: ["separated"],
        itemHeaderBadgeColor: ["primary", "base"],
        class:
          "group-data-[state=open]/accordionItem:text-base-950 text-base-50 group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:text-base-200",
      },
    ],
    defaultVariants: {
      variant: accordionDefaults.variant,
      itemHeaderBadgeColor: accordionItemHeaderBadgeDefaults.color,
    },
  });
  return iconClass({
    class: className,

    variant: accordionProps?.variant,
    itemHeaderBadgeColor: accordionItemHeaderBadgeProps?.color,
  });
};

export const AccordionItemHeaderBadgeLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderBadgeType;
  labelSlot: React.ReactNode;
}) => renderRoot(<>{labelSlot}</>, `h-6 w-fit flex flex-row justify-center items-center px-2 ${className}`);
export const AccordionItemHeaderBadgeWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderBadgeType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {iconSlot}
      {labelSlot}
    </>,
    `h-6 w-fit flex flex-row justify-center items-center gap-1 pl-1 pr-2 ${className}`,
  );

export const accordionItemHeaderRateClass = ({ className }: AccordionItemHeaderRateType) => {
  return `group/accordionItemHeaderRate z-10 ${className}`;
};

export const AccordionItemHeaderRateLayout = ({
  renderRoot,
  styleProps: { className },
  itemSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderRateType;
  itemSlots: React.ReactNode;
}) => renderRoot(<>{itemSlots}</>, `h-fit w-fit flex flex-row ${className}`);

export const accordionItemHeaderClass = ({ className, accordionProps }: AccordionItemHeaderType) => {
  const rootClass = tv({
    base: "group/accordionItemHeader transition-all group-data-[disabled]/accordionItem:pointer-events-none data-[ring=true]:shadow-focus-ring",
    variants: {
      variant: {
        attached: `
active:[background:unset]
  group-data-[disabled]/accordionItem:hover:[background:unset]
  group-data-[disabled]/accordionItem:data-[ring=true]:[background:unset]
  group-data-[disabled]/accordionItem:data-[ring=true]:shadow-none
  hover:bg-base-100
  data-[ring=true]:bg-base-100
`,
        separated: `
hover:bg-base-100
  data-[ring=true]:bg-base-100
  shadow-sm
  group-data-[disabled]/accordionItem:shadow-sm
  rounded-tl-[9px]
  rounded-bl-[10px]
  rounded-tr-[9px]
  rounded-br-[10px]
  group-data-[disabled]/accordionItem:rounded-tl-[9px]
  group-data-[disabled]/accordionItem:rounded-bl-[10px]
  group-data-[disabled]/accordionItem:rounded-tr-[9px]
  group-data-[disabled]/accordionItem:rounded-br-[10px]
  group-data-[state=open]/accordionItem:hover:bg-primary-800
  group-data-[state=open]/accordionItem:data-[ring=true]:bg-primary-800
  group-data-[state=open]/accordionItem:rounded-tl-[9px]
  group-data-[state=open]/accordionItem:rounded-bl-[0px]
  group-data-[state=open]/accordionItem:rounded-tr-[9px]
  group-data-[state=open]/accordionItem:rounded-br-[0px]
  group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:rounded-tl-[9px]
  group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:rounded-bl-[0px]
  group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:rounded-tr-[9px]
  group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:rounded-br-[0px]
  bg-base-50
  active:bg-base-50
  group-data-[disabled]/accordionItem:[background:unset]
  group-data-[state=open]/accordionItem:bg-primary-950
  group-data-[state=open]/accordionItem:active:bg-primary-950
  group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:bg-base-400
  data-[ring=true]:rounded-[9px]
  group-data-[disabled]/accordionItem:active:[background:unset]
  group-data-[disabled]/accordionItem:hover:[background:unset]
  group-data-[disabled]/accordionItem:data-[ring=true]:[background:unset]
  group-data-[disabled]/accordionItem:data-[ring=true]:shadow-sm
  group-data-[disabled]/accordionItem:data-[ring=true]:rounded-tl-[9px]
  group-data-[disabled]/accordionItem:data-[ring=true]:rounded-bl-[10px]
  group-data-[disabled]/accordionItem:data-[ring=true]:rounded-tr-[9px]
  group-data-[disabled]/accordionItem:data-[ring=true]:rounded-br-[10px]
  group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:active:bg-base-400
  group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:hover:bg-base-400
  group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:data-[ring=true]:bg-base-400
  group-data-[state=open]/accordionItem:data-[ring=true]:rounded-[9px]
`,
      },
    },

    defaultVariants: { variant: accordionDefaults.variant },
  });
  return rootClass({
    class: className,
    variant: accordionProps?.variant,
  });
};

export const accordionItemHeaderIconClass = ({ className, accordionProps }: AccordionItemHeaderType) => {
  const iconClass = tv({
    base: "w-5 h-5 z-10 group-data-[disabled]/accordionItem:text-base-400",
    variants: {
      variant: {
        separated:
          "text-base-600 group-data-[state=open]/accordionItem:text-base-50 group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:text-base-400",
        attached: "text-base-600",
      },
    },

    defaultVariants: { variant: accordionDefaults.variant },
  });
  return iconClass({
    class: className,

    variant: accordionProps?.variant,
  });
};

export const accordionItemHeaderLabelClass = ({ className, accordionProps }: AccordionItemHeaderType) => {
  const labelClass = tv({
    base: "text-sm font-text font-medium z-10 group-data-[disabled]/accordionItem:text-base-400",
    variants: {
      variant: {
        separated:
          "text-base-950 group-data-[state=open]/accordionItem:text-base-50 group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:text-base-400",
        attached: "text-base-950",
      },
    },

    defaultVariants: { variant: accordionDefaults.variant },
  });
  return labelClass({
    class: className,

    variant: accordionProps?.variant,
  });
};

export const accordionItemHeaderCaretClass = ({ className, accordionProps }: AccordionItemHeaderType) => {
  const caretClass = tv({
    base: "w-5 h-5 z-10 group-data-[disabled]/accordionItem:text-base-400",
    variants: {
      variant: {
        separated:
          "text-base-600 group-data-[state=open]/accordionItem:text-base-700 group-data-[state=open]/accordionItem:group-data-[disabled]/accordionItem:text-base-400",
        attached: "text-base-600",
      },
    },

    defaultVariants: { variant: accordionDefaults.variant },
  });
  return caretClass({
    class: className,

    variant: accordionProps?.variant,
  });
};

export const accordionItemHeaderPercentageClass = ({ className }: AccordionItemHeaderType) => {
  return `text-base-500 text-xs font-text font-medium z-10 group-data-[disabled]/accordionItem:text-base-400 ${className}`;
};

export const accordionItemHeaderFillClass = ({ className, accordionProps }: AccordionItemHeaderType) => {
  const fillClass = tv({
    base: "w-[64px] h-[42px]",
    variants: {
      variant: {
        separated: `
group-data-[state=open]/accordionItem:bg-primary-900
  group-data-[state=open]/accordionItem:group-active/accordionItemHeader:bg-primary-900
  transition-all
  group-data-[state=open]/accordionItem:group-hover/accordionItemHeader:bg-primary-700
  group-data-[state=open]/accordionItem:group-data-[ring=true]/accordionItemHeader:bg-primary-700
  bg-base-100
  group-active/accordionItemHeader:bg-base-100
  group-hover/accordionItemHeader:bg-base-200
  group-data-[ring=true]/accordionItemHeader:bg-base-200
`,
        attached: "bg-base-200",
      },
    },

    defaultVariants: { variant: accordionDefaults.variant },
  });
  return fillClass({
    class: className,

    variant: accordionProps?.variant,
  });
};

export const AccordionItemHeaderLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
  labelSlot,
  badgeSlot,
  caretSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-[6px]">
        <div className="h-fit w-fit flex flex-row items-center gap-1">
          {iconSlot}
          {labelSlot}
        </div>
        {badgeSlot}
      </div>
      {caretSlot}
    </>,
    `h-[42px] w-full flex flex-row items-center gap-5 px-3 ${className}`,
  );
export const AccordionItemHeaderVotingLayout = ({
  renderRoot,
  styleProps: { className },
  percentageSlot,
  labelSlot,
  badgeSlot,
  rateSlot,
  caretSlot,
  fillSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemHeaderType;
  percentageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  badgeSlot: React.ReactNode;
  rateSlot: React.ReactNode;
  caretSlot: React.ReactNode;
  fillSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-3">
        <div className="h-fit w-9 flex flex-row items-center gap-[10px]">{percentageSlot}</div>
        <div className="h-fit w-full flex flex-row items-center gap-[6px]">
          {labelSlot}
          {badgeSlot}
        </div>
      </div>
      {rateSlot}
      {caretSlot}
      {fillSlot}
    </>,
    `h-[42px] w-full flex flex-row items-center gap-5 px-3 ${className}`,
  );

export const accordionItemClass = ({ className, accordionProps }: AccordionItemType) => {
  const rootClass = tv({
    base: "group/accordionItem border-solid transition-all",
    variants: {
      variant: {
        attached: "border-primary-200 border-t-0 border-b-1 border-x-0",
        separated:
          "border-base-200 border-1 bg-background-100 shadow-sm rounded-[10px] data-[state=open]:border-primary-950 data-[state=open]:data-[disabled]:border-base-400",
      },
    },

    defaultVariants: { variant: accordionDefaults.variant },
  });
  return rootClass({
    class: className,
    variant: accordionProps?.variant,
  });
};

export const AccordionItemLayout = ({
  renderRoot,
  styleProps: { className },
  headerSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AccordionItemType;
  headerSlot: React.ReactNode;
}) => renderRoot(<>{headerSlot}</>, `h-fit w-full flex flex-col data-[expanded]:h-full ${className}`);

export const accordionClass = ({ className }: AccordionType) => {
  return `group/accordion  ${className}`;
};

export const AccordionLayout = ({
  renderRoot,
  styleProps: { className, accordionProps },
  itemSlots,
}: {
  renderRoot: RenderRoot;
  styleProps: AccordionType;
  itemSlots: React.ReactNode;
}) =>
  renderRoot(
    <>{itemSlots}</>,
    tv({
      base: "h-fit w-full flex flex-col",
      variants: { variant: { attached: "", separated: "gap-[6px]" } },

      defaultVariants: { variant: accordionDefaults.variant },
    })({
      class: className,
      variant: accordionProps?.variant,
    }),
  );
