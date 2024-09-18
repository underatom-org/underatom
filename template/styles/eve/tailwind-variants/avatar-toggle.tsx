import type { RenderRoot } from "../../../base/src/_utils";
import type { AvatarToggleContentType, AvatarToggleCheckType, AvatarToggleType } from "~/base/src/styles/avatar-toggle";
import { avatarToggleDefaults } from "~/base/src/styles/avatar-toggle";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const avatarToggleContentClass = ({ className }: AvatarToggleContentType) => {
  return `
  group/avatarToggleContent
  bg-base-100
  group-data-[pressed]/avatarToggle:bg-base-100
  group-data-[disabled]/avatarToggle:bg-base-100
  rounded-[50px]
  transition-all
  group-data-[selected]/avatarToggle:shadow-[0px_0px_0px_2px_#8ee101]
  group-hover/avatarToggle:bg-base-200
  group-data-[focus-visible]/avatarToggle:bg-base-200
  group-data-[focus-visible]/avatarToggle:shadow-focus-ring
  group-data-[disabled]/avatarToggle:group-data-[selected]/avatarToggle:shadow-[0px_0px_0px_2px_#d4d4d8]
  group-data-[focus-visible]/avatarToggle:group-data-[selected]/avatarToggle:shadow-focus-ring
  ${className}
  `;
};

export const avatarToggleContentImageClass = ({ className, avatarToggleProps }: AvatarToggleContentType) => {
  const imageClass = tv({
    base: "rounded-[50px] transition-all group-data-[pressed]/avatarToggle:[opacity:unset] group-hover/avatarToggle:opacity-[0.8] group-data-[focus-visible]/avatarToggle:opacity-[0.8] group-data-[disabled]/avatarToggle:opacity-[0.6]",
    variants: { size: { sm: "w-10 h-10", md: "w-13 h-13", lg: "w-[64px] h-[64px]", xl: "w-[92px] h-[92px]" } },

    defaultVariants: { size: avatarToggleDefaults.size },
  });
  return imageClass({
    class: className,

    size: avatarToggleProps?.size,
  });
};

export const avatarToggleContentLabelClass = ({ className, avatarToggleProps }: AvatarToggleContentType) => {
  const labelClass = tv({
    base: "text-base-600 font-medium group-data-[disabled]/avatarToggle:text-base-400",
    variants: {
      size: {
        sm: "text-sm font-text",
        md: "text-lg font-text",
        lg: "text-xl font-display",
        xl: "text-3xl font-display",
      },
    },

    defaultVariants: { size: avatarToggleDefaults.size },
  });
  return labelClass({
    class: className,

    size: avatarToggleProps?.size,
  });
};

export const avatarToggleContentIconClass = ({ className, avatarToggleProps }: AvatarToggleContentType) => {
  const iconClass = tv({
    base: "text-base-600 group-data-[disabled]/avatarToggle:text-base-400",
    variants: { size: { sm: "w-5 h-5", md: "w-7 h-7", lg: "w-9 h-9", xl: "w-13 h-13" } },

    defaultVariants: { size: avatarToggleDefaults.size },
  });
  return iconClass({
    class: className,

    size: avatarToggleProps?.size,
  });
};

export const AvatarToggleContentLayout = ({
  renderRoot,
  styleProps: { className, avatarToggleProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarToggleContentType;
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
      variants: { size: { sm: "h-10 w-10", md: "h-13 w-13", lg: "h-[64px] w-[64px]", xl: "h-[92px] w-[92px]" } },

      defaultVariants: { size: avatarToggleDefaults.size },
    })({
      class: className,
      size: avatarToggleProps?.size,
    }),
  );
export const AvatarToggleContentWithIconLayout = ({
  renderRoot,
  styleProps: { className, avatarToggleProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarToggleContentType;
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
      variants: { size: { sm: "h-10 w-10", md: "h-13 w-13", lg: "h-[64px] w-[64px]", xl: "h-[92px] w-[92px]" } },

      defaultVariants: { size: avatarToggleDefaults.size },
    })({
      class: className,
      size: avatarToggleProps?.size,
    }),
  );

export const avatarToggleCheckClass = ({ className, avatarToggleProps }: AvatarToggleCheckType) => {
  const rootClass = tv({
    base: "group/avatarToggleCheck group-data-[selected]/avatarToggle:bg-success-500 rounded-[50px] group-data-[selected]/avatarToggle:[opacity:unset] group-data-[disabled]/avatarToggle:group-data-[selected]/avatarToggle:bg-base-50 opacity-[0]",
    variants: {
      size: {
        sm: "group-data-[selected]/avatarToggle:shadow-cut-in-elevated-sm",
        md: "group-data-[selected]/avatarToggle:shadow-cut-in-elevated-sm",
        lg: "group-data-[selected]/avatarToggle:shadow-cut-in-elevated-lg",
        xl: "group-data-[selected]/avatarToggle:shadow-cut-in-elevated-lg",
      },
    },

    defaultVariants: { size: avatarToggleDefaults.size },
  });
  return rootClass({
    class: className,
    size: avatarToggleProps?.size,
  });
};

export const avatarToggleCheckIconClass = ({ className, avatarToggleProps }: AvatarToggleCheckType) => {
  const iconClass = tv({
    base: "text-success-900 group-data-[disabled]/avatarToggle:text-primary-400",
    variants: { size: { sm: "w-[14px] h-[14px]", md: "w-[14px] h-[14px]", lg: "w-5 h-5", xl: "w-6 h-6" } },

    defaultVariants: { size: avatarToggleDefaults.size },
  });
  return iconClass({
    class: className,

    size: avatarToggleProps?.size,
  });
};

export const AvatarToggleCheckLayout = ({
  renderRoot,
  styleProps: { className, avatarToggleProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarToggleCheckType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-7 w-7", xl: "h-9 w-9" } },

      defaultVariants: { size: avatarToggleDefaults.size },
    })({
      class: className,
      size: avatarToggleProps?.size,
    }),
  );

export const avatarToggleClass = ({ className }: AvatarToggleType) => {
  return `group/avatarToggle data-[disabled]:pointer-events-none ${className}`;
};

export const AvatarToggleLayout = ({
  renderRoot,
  styleProps: { className },
  contentSlot,
  checkSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarToggleType;
  contentSlot: React.ReactNode;
  checkSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {contentSlot}
      <div className="h-fit w-fit flex flex-row bottom-[14.6%] right-[14.6%] absolute translate-x-[50%] translate-y-[50%]">
        {checkSlot}
      </div>
    </>,
    `h-fit w-fit flex flex-row relative ${className}`,
  );
