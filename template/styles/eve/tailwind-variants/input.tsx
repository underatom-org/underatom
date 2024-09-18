import type { RenderRoot } from "../../../base/src/_utils";
import type {
  InputBoxTagAvatarType,
  InputBoxTagDismissType,
  InputBoxTagType,
  InputBoxSegmentType,
  InputBoxClearType,
  InputBoxType,
  InputType,
} from "~/base/src/styles/input";
import { inputDefaults } from "~/base/src/styles/input";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const inputBoxTagAvatarClass = ({ className }: InputBoxTagAvatarType) => {
  return `group/inputBoxTagAvatar bg-base-200 rounded-xs ${className}`;
};

export const inputBoxTagAvatarImageClass = ({ className, inputProps }: InputBoxTagAvatarType) => {
  const imageClass = tv({
    base: "rounded-xs group-data-[disabled]/input:opacity-[0.6]",
    variants: { size: { sm: "w-5 h-5", md: "w-6 h-6", lg: "w-7 h-7" } },

    defaultVariants: { size: inputDefaults.size },
  });
  return imageClass({
    class: className,

    size: inputProps?.size,
  });
};

export const inputBoxTagAvatarLabelClass = ({ className }: InputBoxTagAvatarType) => {
  return `text-base-600 text-xs font-text font-medium ${className}`;
};

export const inputBoxTagAvatarIconClass = ({ className, inputProps }: InputBoxTagAvatarType) => {
  const iconClass = tv({
    base: "text-base-600",
    variants: { size: { sm: "w-3 h-3", md: "w-[14px] h-[14px]", lg: "w-5 h-5" } },

    defaultVariants: { size: inputDefaults.size },
  });
  return iconClass({
    class: className,

    size: inputProps?.size,
  });
};

export const InputBoxTagAvatarLayout = ({
  renderRoot,
  styleProps: { className, inputProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagAvatarType;
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

      defaultVariants: { size: inputDefaults.size },
    })({
      class: className,
      size: inputProps?.size,
    }),
  );
export const InputBoxTagAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className, inputProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagAvatarType;
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

      defaultVariants: { size: inputDefaults.size },
    })({
      class: className,
      size: inputProps?.size,
    }),
  );

export const inputBoxTagDismissClass = ({ className }: InputBoxTagDismissType) => {
  return `
  group/inputBoxTagDismiss
  rounded-xs
  hover:bg-base-100
  data-[focus-visible]:bg-base-100
  group-data-[disabled]/input:data-[pressed]:[background:unset]
  group-data-[disabled]/input:hover:[background:unset]
  group-data-[disabled]/input:data-[focus-visible]:[background:unset]
  group-data-[disabled]/input:data-[disabled]:[background:unset]
  data-[pressed]:[background:unset]
  data-[disabled]:[background:unset]
  data-[focus-visible]:shadow-focus-ring
  group-data-[disabled]/input:data-[focus-visible]:shadow-none
  ${className}
  `;
};

export const inputBoxTagDismissIconClass = ({ className }: InputBoxTagDismissType) => {
  return `
  w-[14px]
  h-[14px]
  text-base-600
  group-data-[focus-visible]/inputBoxTagDismiss:text-base-600
  group-data-[pressed]/inputBoxTagDismiss:text-base-900
  group-data-[disabled]/input:text-base-400
  group-data-[disabled]/inputBoxTagDismiss:text-base-400
  group-data-[disabled]/input:group-data-[pressed]/inputBoxTagDismiss:text-base-400
  group-data-[disabled]/input:group-data-[focus-visible]/inputBoxTagDismiss:text-base-400
  ${className}
  `;
};

export const InputBoxTagDismissLayout = ({
  renderRoot,
  styleProps: { className, inputProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagDismissType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-6 w-6", lg: "h-6 w-6" } },

      defaultVariants: { size: inputDefaults.size },
    })({
      class: className,
      size: inputProps?.size,
    }),
  );

export const inputBoxTagClass = ({ className }: InputBoxTagType) => {
  return `group/inputBoxTag border-solid border-base-200 border-1 bg-base-50 rounded-sm group-data-[disabled]/input:bg-base-100 ${className}`;
};

export const inputBoxTagLabelClass = ({ className }: InputBoxTagType) => {
  return `text-base-950 text-sm font-text font-medium group-data-[disabled]/input:text-base-400 ${className}`;
};

export const inputBoxTagIconClass = ({ className }: InputBoxTagType) => {
  return `w-[14px] h-[14px] text-base-600 group-data-[disabled]/input:text-base-400 ${className}`;
};

export const inputBoxTagDotClass = ({ className }: InputBoxTagType) => {
  return `w-[6px] h-[6px] bg-primary-950 rounded-[50px] group-data-[disabled]/input:bg-base-400 ${className}`;
};

export const InputBoxTagLayout = ({
  renderRoot,
  styleProps: { className, inputProps },
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row justify-center items-center gap-1">{labelSlot}</div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: { size: { sm: "h-7 gap-[10px] px-[6px]", md: "h-8 gap-[10px] px-2", lg: "h-9 gap-3 px-[10px]" } },

      defaultVariants: { size: inputDefaults.size },
    })({
      class: className,
      size: inputProps?.size,
    }),
  );
export const InputBoxTagWithIconLayout = ({
  renderRoot,
  styleProps: { className, inputProps },
  iconSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row justify-center items-center gap-1">
        {iconSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-[10px]",
      variants: { size: { sm: "h-7 pl-1 pr-[6px]", md: "h-8 pl-[6px] pr-2", lg: "h-9 pl-2 pr-[10px]" } },

      defaultVariants: { size: inputDefaults.size },
    })({
      class: className,
      size: inputProps?.size,
    }),
  );
export const InputBoxTagWithDotLayout = ({
  renderRoot,
  styleProps: { className, inputProps },
  dotSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center",
          variants: { size: { sm: "gap-1", md: "gap-[6px]", lg: "gap-[6px]" } },

          defaultVariants: { size: inputDefaults.size },
        })({ size: inputProps?.size })}
      >
        {dotSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-[10px]",
      variants: { size: { sm: "h-7 pl-2 pr-[6px]", md: "h-8 px-2", lg: "h-9 pl-2 pr-[10px]" } },

      defaultVariants: { size: inputDefaults.size },
    })({
      class: className,
      size: inputProps?.size,
    }),
  );
export const InputBoxTagWithAvatarLayout = ({
  renderRoot,
  styleProps: { className, inputProps },
  avatarSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxTagType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row justify-center items-center gap-1">
        {avatarSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-[10px]",
      variants: { size: { sm: "h-7 pl-1 pr-[6px]", md: "h-8 pl-1 pr-2", lg: "h-9 pl-1 pr-[10px]" } },

      defaultVariants: { size: inputDefaults.size },
    })({
      class: className,
      size: inputProps?.size,
    }),
  );

export const inputBoxSegmentClass = ({ className }: InputBoxSegmentType) => {
  return `group/inputBoxSegment rounded-xs transition-all hover:bg-base-100 active:bg-base-100 data-[focus-visible]:bg-primary-950 ${className}`;
};

export const inputBoxSegmentLabelClass = ({ className }: InputBoxSegmentType) => {
  return `
  text-base-950
  group-placeholder/inputBoxSegment:text-sm
  text-sm
  group-placeholder/inputBoxSegment:font-text
  font-text
  group-placeholder/inputBoxSegment:font-medium
  font-medium
  group-placeholder/inputBoxSegment:text-base-600
  group-data-[disabled]/input:group-placeholder/inputBoxSegment:text-base-400
  group-active/inputBoxSegment:text-primary-500
  group-data-[focus-visible]/inputBoxSegment:text-white
  group-active/inputBoxSegment:group-placeholder/inputBoxSegment:text-base-600
  group-data-[focus-visible]/inputBoxSegment:group-placeholder/inputBoxSegment:text-base-600
  group-active/inputBoxSegment:group-placeholder/inputBoxSegment:text-primary-500
  group-data-[focus-visible]/inputBoxSegment:group-placeholder/inputBoxSegment:text-white
  ${className}
  `;
};

export const InputBoxSegmentLayout = ({
  renderRoot,
  styleProps: { className, inputProps },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxSegmentType;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{labelSlot}</>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: { size: { sm: "h-7 px-[6px]", md: "h-8 px-2", lg: "h-9 px-3" } },

      defaultVariants: { size: inputDefaults.size },
    })({
      class: className,
      size: inputProps?.size,
    }),
  );

export const inputBoxClearClass = ({ className }: InputBoxClearType) => {
  return `group/inputBoxClear bg-base-100 data-[pressed]:bg-base-100 data-[disabled]:bg-base-100 rounded-[50px] hover:bg-base-200 data-[focus-visible]:bg-base-200 data-[focus-visible]:shadow-focus-ring ${className}`;
};

export const inputBoxClearIconClass = ({ className }: InputBoxClearType) => {
  return `
  w-[14px]
  h-[14px]
  text-base-600
  group-data-[pressed]/inputBoxClear:text-base-600
  group-data-[focus-visible]/inputBoxClear:text-base-600
  group-data-[disabled]/input:text-base-400
  group-data-[disabled]/inputBoxClear:text-base-400
  group-hover/inputBoxClear:text-base-950
  group-data-[disabled]/input:group-hover/inputBoxClear:text-base-400
  group-data-[disabled]/input:group-data-[pressed]/inputBoxClear:text-base-400
  group-data-[disabled]/input:group-data-[focus-visible]/inputBoxClear:text-base-400
  ${className}
  `;
};

export const InputBoxClearLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxClearType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-6 w-6 flex flex-row justify-center items-center gap-5 ${className}`);

export const inputBoxClass = ({ className, inputProps }: InputBoxType) => {
  const rootClass = tv({
    base: `
group/inputBox
  border-solid
  border-base-200
  group-data-[disabled]/input:border-base-200
  border-1
  bg-base-50
  shadow-sm
  transition-all
  group-data-[disabled]/input:bg-base-100
  group-data-[disabled]/input:shadow-none
  group-data-[invalid]/input:border-danger-400
  hover:border-base-300
  group-data-[invalid]/input:hover:border-danger-600
  active:border-base-950
  data-[ring=true]:border-base-950
  group-data-[invalid]/input:active:border-danger-500
  group-data-[invalid]/input:data-[ring=true]:border-danger-500
  group-data-[disabled]/input:hover:border-base-200
  group-data-[disabled]/input:active:border-base-200
  group-data-[disabled]/input:data-[ring=true]:border-base-200
  group-data-[invalid]/input:group-data-[disabled]/input:border-base-200
  cursor-text
  disabled:cursor-default
  disabled:pointer-events-none
`,
    variants: {
      attachment: {
        none: "rounded-md",
        start: "rounded-l-md rounded-r-[0px]",
        center: "",
        end: "rounded-l-[0px] rounded-r-md",
      },
    },

    defaultVariants: { attachment: inputDefaults.attachment },
  });
  return rootClass({
    class: className,
    attachment: inputProps?.attachment,
  });
};

export const inputBoxLeadingIconClass = ({ className }: InputBoxType) => {
  return `w-5 h-5 text-base-600 group-data-[disabled]/input:text-base-400 ${className}`;
};

export const inputBoxTextClass = ({ className }: InputBoxType) => {
  return `placeholder:text-base-800 text-sm font-text font-normal text-base-950 group-data-[disabled]/input:text-base-400 group-data-[disabled]/input:placeholder:text-base-400 ${className}`;
};

export const inputBoxTrailingIconClass = ({ className }: InputBoxType) => {
  return `w-5 h-5 text-base-600 group-data-[disabled]/input:text-base-400 group-data-[invalid]/input:text-danger-500 group-data-[invalid]/input:group-data-[disabled]/input:text-base-400 ${className}`;
};

export const InputBoxLayout = ({
  renderRoot,
  styleProps: { className, inputProps },
  leadingIconSlot,
  textSlot,
  clearSlot,
  trailingIconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxType;
  leadingIconSlot: React.ReactNode;
  textSlot: React.ReactNode;
  clearSlot: React.ReactNode;
  trailingIconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-full flex flex-row items-center",
          variants: { size: { sm: "gap-1", md: "gap-1", lg: "gap-[6px]" } },

          defaultVariants: { size: inputDefaults.size },
        })({ size: inputProps?.size })}
      >
        {leadingIconSlot}
        <div
          className={tv({
            base: "h-fit w-fit flex flex-row",
            variants: { size: { sm: "pl-[2px]", md: "pl-[2px]", lg: "pl-1" } },

            defaultVariants: { size: inputDefaults.size },
          })({ size: inputProps?.size })}
        >
          {textSlot}
        </div>
      </div>
      <div className="h-fit w-fit flex flex-row items-center gap-1">
        {clearSlot}
        {trailingIconSlot}
      </div>
    </>,
    tv({
      base: "w-full flex flex-row items-center gap-2",
      variants: { size: { sm: "h-9 px-2", md: "h-11 px-2", lg: "h-[48px] pl-3 pr-5" } },

      defaultVariants: { size: inputDefaults.size },
    })({
      class: className,
      size: inputProps?.size,
    }),
  );
export const InputBoxWithSegmentsLayout = ({
  renderRoot,
  styleProps: { className, inputProps },
  segmentSlots,
  clearSlot,
  trailingIconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxType;
  segmentSlots: React.ReactNode;
  clearSlot: React.ReactNode;
  trailingIconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-center gap-[6px]">{segmentSlots}</div>
      <div className="h-fit w-fit flex flex-row items-center gap-1">
        {clearSlot}
        {trailingIconSlot}
      </div>
    </>,
    tv({
      base: "w-full flex flex-row items-center",
      variants: {
        size: {
          sm: "h-9 gap-1 pl-1 pr-[6px]",
          md: "h-11 gap-2 pl-[6px] pr-[10px]",
          lg: "h-[48px] gap-[6px] pl-2 pr-[14px]",
        },
      },

      defaultVariants: { size: inputDefaults.size },
    })({
      class: className,
      size: inputProps?.size,
    }),
  );
export const InputBoxWithTagsLayout = ({
  renderRoot,
  styleProps: { className, inputProps },
  tagSlots,
  textSlot,
  clearSlot,
  trailingIconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputBoxType;
  tagSlots: React.ReactNode;
  textSlot: React.ReactNode;
  clearSlot: React.ReactNode;
  trailingIconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {tagSlots}

      <div
        className={tv({
          base: "h-fit w-full flex flex-row",
          variants: { size: { sm: "pl-1", md: "pl-[6px]", lg: "pl-2" } },

          defaultVariants: { size: inputDefaults.size },
        })({ size: inputProps?.size })}
      >
        {textSlot}
      </div>
      <div className="h-fit w-fit flex flex-row items-center gap-1">
        {clearSlot}
        {trailingIconSlot}
      </div>
    </>,
    tv({
      base: "w-full flex flex-row items-center",
      variants: {
        size: {
          sm: "h-9 gap-[2px] pl-1 pr-[6px]",
          md: "h-11 gap-1 pl-[6px] pr-[10px]",
          lg: "h-[48px] gap-[6px] pl-2 pr-[14px]",
        },
      },

      defaultVariants: { size: inputDefaults.size },
    })({
      class: className,
      size: inputProps?.size,
    }),
  );

export const inputClass = ({ className }: InputType) => {
  return `group/input  ${className}`;
};

export const inputLabelClass = ({ className }: InputType) => {
  return `text-base-900 text-sm font-text font-medium group-data-[disabled]/input:text-base-400 ${className}`;
};

export const inputAsteriskClass = ({ className }: InputType) => {
  return `
  group-data-[required]/input:[display:unset]
  group-data-[required]/input:text-danger-500
  group-data-[required]/input:text-[14px]
  group-data-[required]/input:font-['Inter']
  group-data-[required]/input:leading-[16.94318199157715px]
  group-data-[required]/input:font-normal
  group-data-[required]/input:group-data-[disabled]/input:text-base-400
  hidden
  ${className}
  `;
};

export const inputDescriptionClass = ({ className }: InputType) => {
  return `text-base-700 text-sm font-text font-normal group-data-[disabled]/input:text-base-400 group-data-[invalid]/input:text-danger-500 group-data-[invalid]/input:group-data-[disabled]/input:text-base-400 ${className}`;
};

export const InputLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
  asteriskSlot,
  boxSlot,
  descriptionSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: InputType;
  labelSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  boxSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row items-baseline gap-1">
        {labelSlot}
        {asteriskSlot}
      </div>
      {boxSlot}
      {descriptionSlot}
    </>,
    `h-fit w-full flex flex-col gap-1 ${className}`,
  );
