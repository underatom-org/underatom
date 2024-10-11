import type { RenderRoot } from "../../../base/src/_utils";
import type {
  TextareaBoxTagAvatarType,
  TextareaBoxTagDismissType,
  TextareaBoxTagType,
  TextareaBoxType,
  TextareaType,
} from "~/base/src/styles/textarea";
import { textareaDefaults } from "~/base/src/styles/textarea";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const textareaBoxTagAvatarClass = ({ className }: TextareaBoxTagAvatarType) => {
  return `group/textareaBoxTagAvatar bg-base-200 rounded-xs ${className}`;
};

export const textareaBoxTagAvatarImageClass = ({ className, textareaProps }: TextareaBoxTagAvatarType) => {
  const imageClass = tv({
    base: "rounded-xs group-data-[disabled]/textarea:opacity-[0.6]",
    variants: { size: { sm: "w-5 h-5", md: "w-6 h-6", lg: "w-6 h-6" } },

    defaultVariants: { size: textareaDefaults.size },
  });
  return imageClass({
    class: className,

    size: textareaProps?.size,
  });
};

export const textareaBoxTagAvatarLabelClass = ({ className }: TextareaBoxTagAvatarType) => {
  return `text-base-600 text-xs font-text font-medium ${className}`;
};

export const textareaBoxTagAvatarIconClass = ({ className, textareaProps }: TextareaBoxTagAvatarType) => {
  const iconClass = tv({
    base: "text-base-600",
    variants: { size: { sm: "w-3 h-3", md: "w-[14px] h-[14px]", lg: "w-[14px] h-[14px]" } },

    defaultVariants: { size: textareaDefaults.size },
  });
  return iconClass({
    class: className,

    size: textareaProps?.size,
  });
};

export const TextareaBoxTagAvatarLayout = ({
  renderRoot,
  styleProps: { className, textareaProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagAvatarType;
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
      variants: { size: { sm: "h-5 w-5", md: "h-6 w-6", lg: "h-6 w-6" } },

      defaultVariants: { size: textareaDefaults.size },
    })({
      class: className,
      size: textareaProps?.size,
    }),
  );
export const TextareaBoxTagAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className, textareaProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagAvatarType;
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
      variants: { size: { sm: "h-5 w-5", md: "h-6 w-6", lg: "h-6 w-6" } },

      defaultVariants: { size: textareaDefaults.size },
    })({
      class: className,
      size: textareaProps?.size,
    }),
  );

export const textareaBoxTagDismissClass = ({ className }: TextareaBoxTagDismissType) => {
  return `
  group/textareaBoxTagDismiss
  rounded-xs
  opacity-[0.6]
  data-[pressed]:opacity-[0.6]
  data-[disabled]:opacity-[0.6]
  group-data-[disabled]/textarea:opacity-[0.6]
  hover:bg-base-100
  data-[focus-visible]:bg-base-100
  hover:[opacity:unset]
  data-[focus-visible]:[opacity:unset]
  data-[pressed]:[background:unset]
  data-[disabled]:[background:unset]
  group-data-[disabled]/textarea:hover:[background:unset]
  group-data-[disabled]/textarea:data-[focus-visible]:[background:unset]
  data-[focus-visible]:shadow-focus-ring
  group-data-[disabled]/textarea:pointer-events-none
  data-[disabled]:pointer-events-none
  group-data-[disabled]/textarea:data-[focus-visible]:shadow-none
  group-data-[disabled]/textarea:hover:opacity-[0.6]
  group-data-[disabled]/textarea:data-[focus-visible]:opacity-[0.6]
  ${className}
  `;
};

export const textareaBoxTagDismissIconClass = ({ className }: TextareaBoxTagDismissType) => {
  return `
  w-[14px]
  h-[14px]
  text-base-600
  group-data-[focus-visible]/textareaBoxTagDismiss:text-base-600
  group-data-[pressed]/textareaBoxTagDismiss:text-base-950
  group-data-[disabled]/textarea:text-base-400
  group-data-[disabled]/textareaBoxTagDismiss:text-base-400
  group-data-[disabled]/textarea:group-data-[pressed]/textareaBoxTagDismiss:text-base-400
  group-data-[disabled]/textarea:group-data-[focus-visible]/textareaBoxTagDismiss:text-base-400
  ${className}
  `;
};

export const TextareaBoxTagDismissLayout = ({
  renderRoot,
  styleProps: { className, textareaProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagDismissType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-6 w-6", lg: "h-6 w-6" } },

      defaultVariants: { size: textareaDefaults.size },
    })({
      class: className,
      size: textareaProps?.size,
    }),
  );

export const textareaBoxTagClass = ({ className }: TextareaBoxTagType) => {
  return `group/textareaBoxTag border-solid border-base-200 border-1 bg-base-50 rounded-sm group-data-[disabled]/textarea:bg-base-100 ${className}`;
};

export const textareaBoxTagLabelClass = ({ className }: TextareaBoxTagType) => {
  return `text-base-950 text-sm font-text font-medium group-data-[disabled]/textarea:text-base-400 ${className}`;
};

export const textareaBoxTagIconClass = ({ className }: TextareaBoxTagType) => {
  return `w-[14px] h-[14px] text-base-950 group-data-[disabled]/textarea:text-base-400 ${className}`;
};

export const textareaBoxTagDotClass = ({ className }: TextareaBoxTagType) => {
  return `w-[6px] h-[6px] bg-primary-950 rounded-[50px] group-data-[disabled]/textarea:bg-base-400 ${className}`;
};

export const TextareaBoxTagLayout = ({
  renderRoot,
  styleProps: { className, textareaProps },
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {labelSlot}
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-[10px]",
      variants: { size: { sm: "h-7 px-[6px]", md: "h-8 px-2", lg: "h-8 px-2" } },

      defaultVariants: { size: textareaDefaults.size },
    })({
      class: className,
      size: textareaProps?.size,
    }),
  );
export const TextareaBoxTagWithIconLayout = ({
  renderRoot,
  styleProps: { className, textareaProps },
  iconSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagType;
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

          defaultVariants: { size: textareaDefaults.size },
        })({ size: textareaProps?.size })}
      >
        {iconSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-[10px]",
      variants: { size: { sm: "h-7 pl-1 pr-[6px]", md: "h-8 pl-[6px] pr-2", lg: "h-8 pl-[6px] pr-2" } },

      defaultVariants: { size: textareaDefaults.size },
    })({
      class: className,
      size: textareaProps?.size,
    }),
  );
export const TextareaBoxTagWithDotLayout = ({
  renderRoot,
  styleProps: { className, textareaProps },
  dotSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagType;
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

          defaultVariants: { size: textareaDefaults.size },
        })({ size: textareaProps?.size })}
      >
        {dotSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-[10px]",
      variants: { size: { sm: "h-7 pl-2 pr-[6px]", md: "h-8 px-2", lg: "h-8 px-2" } },

      defaultVariants: { size: textareaDefaults.size },
    })({
      class: className,
      size: textareaProps?.size,
    }),
  );
export const TextareaBoxTagWithAvatarLayout = ({
  renderRoot,
  styleProps: { className, textareaProps },
  avatarSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxTagType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center",
          variants: { size: { sm: "gap-1", md: "gap-[6px]", lg: "" } },

          defaultVariants: { size: textareaDefaults.size },
        })({ size: textareaProps?.size })}
      >
        {avatarSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-[10px]",
      variants: { size: { sm: "h-7 pl-1 pr-[6px]", md: "h-8 pl-1 pr-2", lg: "" } },

      defaultVariants: { size: textareaDefaults.size },
    })({
      class: className,
      size: textareaProps?.size,
    }),
  );

export const textareaBoxClass = ({ className }: TextareaBoxType) => {
  return `
  group/textareaBox
  border-solid
  border-base-200
  group-data-[disabled]/textarea:border-base-200
  border-1
  bg-base-50
  shadow-sm
  rounded-md
  cursor-text
  transition-all
  group-data-[invalid]/textarea:border-danger-400
  hover:border-base-300
  group-data-[invalid]/textarea:hover:border-danger-600
  active:border-base-950
  data-[ring=true]:border-base-950
  group-data-[invalid]/textarea:active:border-danger-500
  group-data-[invalid]/textarea:data-[ring=true]:border-danger-500
  group-data-[disabled]/textarea:bg-base-100
  group-data-[disabled]/textarea:shadow-none
  group-data-[disabled]/textarea:pointer-events-none
  group-data-[disabled]/textarea:hover:border-base-200
  group-data-[disabled]/textarea:active:border-base-200
  group-data-[disabled]/textarea:data-[ring=true]:border-base-200
  group-data-[invalid]/textarea:group-data-[disabled]/textarea:border-base-200
  ${className}
  `;
};

export const textareaBoxTextClass = ({ className }: TextareaBoxType) => {
  return `placeholder:text-base-800 text-sm font-text font-normal group-data-[disabled]/textarea:text-base-400 text-base-950 group-data-[disabled]/textarea:placeholder:text-base-400 ${className}`;
};

export const TextareaBoxLayout = ({
  renderRoot,
  styleProps: { className, textareaProps },
  textSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxType;
  textSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row gap-[6px]">{textSlot}</div>
    </>,
    tv({
      base: "h-full w-full flex flex-row gap-2",
      variants: { size: { sm: "pt-1 px-2", md: "pt-[6px] px-2", lg: "pt-2 pl-3 pr-5" } },

      defaultVariants: { size: textareaDefaults.size },
    })({
      class: className,
      size: textareaProps?.size,
    }),
  );
export const TextareaBoxWithTagsLayout = ({
  renderRoot,
  styleProps: { className, textareaProps },
  tagSlots,
  textSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TextareaBoxType;
  tagSlots: React.ReactNode;
  textSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-full flex flex-row gap-[6px]">
        <div className="h-fit w-full flex flex-col gap-[6px]">
          <div className="h-fit w-full flex flex-row gap-[6px] flex-wrap">{tagSlots}</div>
          {textSlot}
        </div>
      </div>
    </>,
    tv({
      base: "h-full w-full flex flex-row gap-2",
      variants: { size: { sm: "pt-2 px-2", md: "pt-2 px-2", lg: "pt-3 px-3" } },

      defaultVariants: { size: textareaDefaults.size },
    })({
      class: className,
      size: textareaProps?.size,
    }),
  );

export const textareaClass = ({ className }: TextareaType) => {
  return `group/textarea  ${className}`;
};

export const textareaLabelClass = ({ className }: TextareaType) => {
  return `text-base-900 text-sm font-text font-medium group-data-[disabled]/textarea:text-base-400 ${className}`;
};

export const textareaAsteriskClass = ({ className }: TextareaType) => {
  return `
  group-data-[required]/textarea:[display:unset]
  group-data-[required]/textarea:text-danger-500
  group-data-[required]/textarea:text-[14px]
  group-data-[required]/textarea:font-['Inter']
  group-data-[required]/textarea:leading-[16.94318199157715px]
  group-data-[required]/textarea:font-normal
  group-data-[required]/textarea:group-data-[disabled]/textarea:text-base-400
  hidden
  ${className}
  `;
};

export const textareaDescriptionClass = ({ className }: TextareaType) => {
  return `text-base-700 text-sm font-text font-normal group-data-[invalid]/textarea:text-danger-500 group-data-[disabled]/textarea:text-base-400 group-data-[invalid]/textarea:group-data-[disabled]/textarea:text-base-400 ${className}`;
};

export const TextareaLayout = ({
  renderRoot,
  styleProps: { className },
  labelSlot,
  asteriskSlot,
  boxSlot,
  descriptionSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TextareaType;
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
    `h-full w-full flex flex-col gap-[2px] ${className}`,
  );
