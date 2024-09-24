import type { RenderRoot } from "../../../base/src/_utils";
import type {
  SelectTriggerBoxTagAvatarType,
  SelectTriggerBoxTagDismissType,
  SelectTriggerBoxTagType,
  SelectTriggerBoxAvatarType,
  SelectTriggerBoxType,
  SelectTriggerType,
} from "~/base/src/styles/select-trigger";
import { selectTriggerDefaults } from "~/base/src/styles/select-trigger";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const selectTriggerBoxTagAvatarClass = ({ className }: SelectTriggerBoxTagAvatarType) => {
  return `group/selectTriggerBoxTagAvatar bg-base-200 rounded-xs ${className}`;
};

export const selectTriggerBoxTagAvatarImageClass = ({
  className,
  selectTriggerProps,
}: SelectTriggerBoxTagAvatarType) => {
  const imageClass = tv({
    base: "rounded-xs group-data-[disabled=true]/selectTrigger:shadow-[inset_0px_0px_0px_1000px_#d9d9d9b2]",
    variants: { size: { sm: "w-5 h-5", md: "w-6 h-6", lg: "w-7 h-7" } },

    defaultVariants: { size: selectTriggerDefaults.size },
  });
  return imageClass({
    class: className,

    size: selectTriggerProps?.size,
  });
};

export const selectTriggerBoxTagAvatarLabelClass = ({ className }: SelectTriggerBoxTagAvatarType) => {
  return `text-base-600 text-xs font-text font-medium group-data-[disabled=true]/selectTrigger:text-primary-300 ${className}`;
};

export const selectTriggerBoxTagAvatarIconClass = ({
  className,
  selectTriggerProps,
}: SelectTriggerBoxTagAvatarType) => {
  const iconClass = tv({
    base: "text-base-600 group-data-[disabled=true]/selectTrigger:text-primary-300",
    variants: { size: { sm: "w-3 h-3", md: "w-[14px] h-[14px]", lg: "w-5 h-5" } },

    defaultVariants: { size: selectTriggerDefaults.size },
  });
  return iconClass({
    class: className,

    size: selectTriggerProps?.size,
  });
};

export const SelectTriggerBoxTagAvatarLayout = ({
  renderRoot,
  styleProps: { className, selectTriggerProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {imageSlot}
      {labelSlot}
    </>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-6 w-6", lg: "h-7 w-7" } },

      defaultVariants: { size: selectTriggerDefaults.size },
    })({
      class: className,
      size: selectTriggerProps?.size,
    }),
  );
export const SelectTriggerBoxTagAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className, selectTriggerProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {imageSlot}
      {iconSlot}
    </>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-6 w-6", lg: "h-7 w-7" } },

      defaultVariants: { size: selectTriggerDefaults.size },
    })({
      class: className,
      size: selectTriggerProps?.size,
    }),
  );

export const selectTriggerBoxTagDismissClass = ({ className }: SelectTriggerBoxTagDismissType) => {
  return `
  group/selectTriggerBoxTagDismiss
  rounded-xs
  group-data-[disabled=true]/selectTrigger:data-[disabled]:rounded-xs
  hover:bg-primary-100
  data-[focus-visible]:bg-primary-100
  data-[pressed]:[background:unset]
  data-[focus-visible]:shadow-focus-ring
  ${className}
  `;
};

export const selectTriggerBoxTagDismissIconClass = ({ className }: SelectTriggerBoxTagDismissType) => {
  return `
  w-[14px]
  group-data-[disabled=true]/selectTrigger:group-data-[disabled]/selectTriggerBoxTagDismiss:w-[14px]
  h-[14px]
  group-data-[disabled=true]/selectTrigger:group-data-[disabled]/selectTriggerBoxTagDismiss:h-[14px]
  text-base-700
  group-hover/selectTriggerBoxTagDismiss:text-base-800
  group-data-[focus-visible]/selectTriggerBoxTagDismiss:text-base-800
  group-data-[pressed]/selectTriggerBoxTagDismiss:text-base-950
  group-data-[disabled=true]/selectTrigger:group-data-[disabled]/selectTriggerBoxTagDismiss:text-base-400
  ${className}
  `;
};

export const SelectTriggerBoxTagDismissLayout = ({
  renderRoot,
  styleProps: { className, selectTriggerProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagDismissType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-6 w-6", lg: "h-6 w-6" } },

      defaultVariants: { size: selectTriggerDefaults.size },
    })({
      class: className,
      size: selectTriggerProps?.size,
    }),
  );

export const selectTriggerBoxTagClass = ({ className }: SelectTriggerBoxTagType) => {
  return `group/selectTriggerBoxTag border-solid border-primary-200 border-1 bg-white rounded-sm group-data-[disabled=true]/selectTrigger:border-primary-100 ${className}`;
};

export const selectTriggerBoxTagLabelClass = ({ className }: SelectTriggerBoxTagType) => {
  return `text-base-950 text-sm font-text font-medium group-data-[disabled=true]/selectTrigger:text-base-400 ${className}`;
};

export const selectTriggerBoxTagIconClass = ({ className }: SelectTriggerBoxTagType) => {
  return `w-[14px] h-[14px] text-base-700 group-data-[disabled=true]/selectTrigger:text-base-400 ${className}`;
};

export const SelectTriggerBoxTagLayout = ({
  renderRoot,
  styleProps: { className, selectTriggerProps },
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {labelSlot}
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: { size: { sm: "h-7 gap-[10px] px-[6px]", md: "h-8 gap-[10px] px-2", lg: "h-9 gap-3 px-[10px]" } },

      defaultVariants: { size: selectTriggerDefaults.size },
    })({
      class: className,
      size: selectTriggerProps?.size,
    }),
  );
export const SelectTriggerBoxTagWithIconLayout = ({
  renderRoot,
  styleProps: { className, selectTriggerProps },
  iconSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center",
          variants: { size: { sm: "gap-1", md: "gap-[6px]", lg: "gap-[6px]" } },

          defaultVariants: { size: selectTriggerDefaults.size },
        })({ size: selectTriggerProps?.size })}
      >
        {iconSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-[10px]",
      variants: { size: { sm: "h-7 px-[6px]", md: "h-8 px-2", lg: "h-9 px-[10px]" } },

      defaultVariants: { size: selectTriggerDefaults.size },
    })({
      class: className,
      size: selectTriggerProps?.size,
    }),
  );
export const SelectTriggerBoxTagWithAvatarLayout = ({
  renderRoot,
  styleProps: { className, selectTriggerProps },
  avatarSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxTagType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center",
          variants: { size: { sm: "gap-1", md: "gap-[6px]", lg: "gap-[6px]" } },

          defaultVariants: { size: selectTriggerDefaults.size },
        })({ size: selectTriggerProps?.size })}
      >
        {avatarSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-[10px]",
      variants: { size: { sm: "h-7 pl-1 pr-[6px]", md: "h-8 pl-1 pr-2", lg: "h-9 pl-1 pr-[10px]" } },

      defaultVariants: { size: selectTriggerDefaults.size },
    })({
      class: className,
      size: selectTriggerProps?.size,
    }),
  );

export const selectTriggerBoxAvatarClass = ({ className }: SelectTriggerBoxAvatarType) => {
  return `group/selectTriggerBoxAvatar bg-primary-100 rounded-xs ${className}`;
};

export const selectTriggerBoxAvatarImageClass = ({ className }: SelectTriggerBoxAvatarType) => {
  return `w-6 h-6 rounded-xs group-data-[disabled=true]/selectTrigger:opacity-[0.46] ${className}`;
};

export const selectTriggerBoxAvatarLabelClass = ({ className }: SelectTriggerBoxAvatarType) => {
  return `text-base-700 text-xs font-text font-medium group-data-[disabled=true]/selectTrigger:text-primary-300 ${className}`;
};

export const selectTriggerBoxAvatarIconClass = ({ className }: SelectTriggerBoxAvatarType) => {
  return `w-[14px] h-[14px] text-base-700 group-data-[disabled=true]/selectTrigger:text-primary-300 ${className}`;
};

export const SelectTriggerBoxAvatarLayout = ({
  renderRoot,
  styleProps: { className },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxAvatarType;
  imageSlot: React.ReactNode;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {imageSlot}
      {labelSlot}
    </>,
    `h-6 w-6 flex flex-row justify-center items-center ${className}`,
  );
export const SelectTriggerBoxAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxAvatarType;
  imageSlot: React.ReactNode;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {imageSlot}
      {iconSlot}
    </>,
    `h-6 w-6 flex flex-row justify-center items-center ${className}`,
  );

export const selectTriggerBoxClass = ({ className, selectTriggerProps }: SelectTriggerBoxType) => {
  const rootClass = tv({
    base: `
group/selectTriggerBox
  border-solid
  border-base-200
  group-data-[disabled=true]/selectTrigger:border-base-200
  border-1
  bg-base-50
  shadow-sm
  transition-all
  group-data-[disabled=true]/selectTrigger:bg-base-100
  hover:border-base-300
  active:border-base-950
  data-[ring=true]:border-base-950
  data-[state=open]:border-base-950
  group-data-[invalid=true]/selectTrigger:border-danger-400
  group-data-[invalid=true]/selectTrigger:hover:border-danger-600
  group-data-[invalid=true]/selectTrigger:active:border-danger-500
  group-data-[invalid=true]/selectTrigger:data-[ring=true]:border-danger-500
  group-data-[invalid=true]/selectTrigger:data-[state=open]:border-danger-500
  group-data-[disabled=true]/selectTrigger:hover:border-base-200
  group-data-[disabled=true]/selectTrigger:active:border-base-200
  group-data-[disabled=true]/selectTrigger:data-[ring=true]:border-base-200
  group-data-[disabled=true]/selectTrigger:data-[state=open]:border-base-200
  group-data-[disabled=true]/selectTrigger:group-data-[invalid=true]/selectTrigger:border-base-200
`,
    variants: {
      attachment: {
        none: "rounded-md",
        start: "rounded-l-md rounded-r-[0px]",
        center: "",
        end: "rounded-l-[0px] rounded-r-md",
      },
    },

    defaultVariants: { attachment: selectTriggerDefaults.attachment },
  });
  return rootClass({
    class: className,
    attachment: selectTriggerProps?.attachment,
  });
};

export const selectTriggerBoxIconClass = ({ className }: SelectTriggerBoxType) => {
  return `w-5 h-5 text-base-700 group-data-[disabled=true]/selectTrigger:text-base-400 ${className}`;
};

export const selectTriggerBoxTextClass = ({ className }: SelectTriggerBoxType) => {
  return `text-base-950 text-sm font-text font-normal group-data-[disabled=true]/selectTrigger:text-primary-300 ${className}`;
};

export const selectTriggerBoxCaretClass = ({ className }: SelectTriggerBoxType) => {
  return `w-5 h-5 text-base-700 group-data-[disabled=true]/selectTrigger:text-base-400 ${className}`;
};

export const SelectTriggerBoxLayout = ({
  renderRoot,
  styleProps: { className, selectTriggerProps },
  iconSlot,
  textSlot,
  caretSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxType;
  iconSlot: React.ReactNode;
  textSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-2">
        {iconSlot}
        {textSlot}
      </div>
      {caretSlot}
    </>,
    tv({
      base: "w-full flex flex-row items-center",
      variants: { size: { sm: "h-9 gap-1 px-2", md: "h-11 gap-1 px-3", lg: "h-[48px] gap-[6px] pl-3 pr-5" } },

      defaultVariants: { size: selectTriggerDefaults.size },
    })({
      class: className,
      size: selectTriggerProps?.size,
    }),
  );
export const SelectTriggerBoxWithAvatarLayout = ({
  renderRoot,
  styleProps: { className, selectTriggerProps },
  avatarSlot,
  textSlot,
  caretSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxType;
  avatarSlot: React.ReactNode;
  textSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-2">
        {avatarSlot}
        {textSlot}
      </div>
      {caretSlot}
    </>,
    tv({
      base: "w-full flex flex-row items-center",
      variants: {
        size: {
          sm: "h-9 gap-1 pl-[6px] pr-3",
          md: "h-11 gap-1 pl-[10px] pr-3",
          lg: "h-[48px] gap-[6px] pl-[14px] pr-5",
        },
      },

      defaultVariants: { size: selectTriggerDefaults.size },
    })({
      class: className,
      size: selectTriggerProps?.size,
    }),
  );
export const SelectTriggerBoxWithTagsLayout = ({
  renderRoot,
  styleProps: { className, selectTriggerProps },
  tagSlots,
  textSlot,
  caretSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerBoxType;
  tagSlots: React.ReactNode;
  textSlot: React.ReactNode;
  caretSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-1">
        {tagSlots}

        <div
          className={tv({
            base: "h-fit w-fit flex flex-row",
            variants: { size: { sm: "pl-1", md: "pl-[6px]", lg: "pl-2" } },

            defaultVariants: { size: selectTriggerDefaults.size },
          })({ size: selectTriggerProps?.size })}
        >
          {textSlot}
        </div>
      </div>
      {caretSlot}
    </>,
    tv({
      base: "w-full flex flex-row items-center",
      variants: {
        size: { sm: "h-9 gap-1 pl-1 pr-2", md: "h-11 gap-1 pl-[6px] pr-3", lg: "h-[48px] gap-[6px] pl-2 pr-5" },
      },

      defaultVariants: { size: selectTriggerDefaults.size },
    })({
      class: className,
      size: selectTriggerProps?.size,
    }),
  );

export const selectTriggerClass = ({ className }: SelectTriggerType) => {
  return `group/selectTrigger  ${className}`;
};

export const selectTriggerLabelClass = ({ className }: SelectTriggerType) => {
  return `text-primary-800 text-sm font-text font-medium group-data-[disabled=true]/selectTrigger:text-primary-300 ${className}`;
};

export const selectTriggerAsteriskClass = ({ className }: SelectTriggerType) => {
  return `
  group-data-[required=true]/selectTrigger:[display:unset]
  group-data-[required=true]/selectTrigger:text-danger-500
  group-data-[required=true]/selectTrigger:text-[14px]
  group-data-[required=true]/selectTrigger:font-['Inter']
  group-data-[required=true]/selectTrigger:leading-[16.94318199157715px]
  group-data-[required=true]/selectTrigger:font-normal
  group-data-[disabled=true]/selectTrigger:group-data-[required=true]/selectTrigger:text-base-300
  hidden
  ${className}
  `;
};

export const selectTriggerDescriptionClass = ({ className }: SelectTriggerType) => {
  return `
  text-primary-600
  text-sm
  font-text
  font-normal
  group-data-[invalid=true]/selectTrigger:text-danger-500
  group-data-[disabled=true]/selectTrigger:text-primary-300
  group-data-[disabled=true]/selectTrigger:group-data-[invalid=true]/selectTrigger:text-primary-300
  ${className}
  `;
};

export const SelectTriggerLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
  asteriskSlot,
  boxSlot,
  descriptionSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SelectTriggerType;
  labelSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  boxSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row gap-[2px]">
        {labelSlot}
        {asteriskSlot}
      </div>
      {boxSlot}
      {descriptionSlot}
    </>,
    `h-fit w-full flex flex-col gap-[2px] ${className}`,
  );
