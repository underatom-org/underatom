import type { RenderRoot } from "../../../base/src/_utils";
import type { TagType, TagDotType, TagAvatarType, TagDismissType } from "~/base/src/styles/tag";
import { tagDotDefaults, tagDefaults } from "~/base/src/styles/tag";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const tagClass = ({ className }: TagType) => {
  return `group/tag border-solid border-primary-200 border-1 bg-base-50 rounded-[16px] ${className}`;
};

export const tagLabelClass = ({ className }: TagType) => {
  return `text-base-950 text-sm font-text font-medium ${className}`;
};

export const tagIconClass = ({ className }: TagType) => {
  return `w-5 h-5 text-base-600 ${className}`;
};

export const tagDotClass = ({ className, tagDotProps }: TagDotType) => {
  const dotClass = tv({
    base: "w-[6px] h-[6px] rounded-xs",
    variants: {
      dotColor: { base: "bg-base-950", primary: "bg-primary-950", green: "bg-success-600", red: "bg-danger-500" },
    },

    defaultVariants: { dotColor: tagDotDefaults.color },
  });
  return dotClass({
    class: className,
    dotColor: tagDotProps?.color,
  });
};

export const TagLayout = ({
  renderRoot,
  styleProps: { className, tagProps },
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TagType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center gap-1",
          variants: { size: { sm: "px-1", md: "pr-1", lg: "pr-[6px]" } },

          defaultVariants: { size: tagDefaults.size },
        })({ size: tagProps?.size })}
      >
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: {
        size: { sm: "h-7 gap-[6px] px-1", md: "h-8 gap-[6px] pl-[10px] pr-[6px]", lg: "h-9 gap-1 pl-3 pr-[6px]" },
      },

      defaultVariants: { size: tagDefaults.size },
    })({
      class: className,
      size: tagProps?.size,
    }),
  );
export const TagWithIconLayout = ({
  renderRoot,
  styleProps: { className, tagProps },
  iconSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TagType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center gap-1",
          variants: { size: { sm: "px-1", md: "pr-1", lg: "pr-[6px]" } },

          defaultVariants: { size: tagDefaults.size },
        })({ size: tagProps?.size })}
      >
        {iconSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: {
        size: { sm: "h-7 gap-1 px-1", md: "h-8 gap-[6px] pl-[10px] pr-[6px]", lg: "h-9 gap-1 pl-3 pr-[6px]" },
      },

      defaultVariants: { size: tagDefaults.size },
    })({
      class: className,
      size: tagProps?.size,
    }),
  );
export const TagWithDotLayout = ({
  renderRoot,
  styleProps: { className, tagProps },
  dotSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TagType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center gap-[6px]",
          variants: { size: { sm: "pl-1 pr-[2px]", md: "pr-1", lg: "pr-1" } },

          defaultVariants: { size: tagDefaults.size },
        })({ size: tagProps?.size })}
      >
        {dotSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-[6px]",
      variants: { size: { sm: "h-7 px-1", md: "h-8 pl-[10px] pr-[6px]", lg: "h-9 pl-[10px] pr-[6px]" } },

      defaultVariants: { size: tagDefaults.size },
    })({
      class: className,
      size: tagProps?.size,
    }),
  );
export const TagWithAvatarLayout = ({
  renderRoot,
  styleProps: { className, tagProps },
  avatarSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TagType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center",
          variants: { size: { sm: "gap-[6px]", md: "gap-[6px]", lg: "gap-2" } },

          defaultVariants: { size: tagDefaults.size },
        })({ size: tagProps?.size })}
      >
        {avatarSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: { size: { sm: "h-7 gap-[6px] px-1", md: "h-8 gap-2 pl-1 pr-[6px]", lg: "h-9 gap-2 pl-1 pr-[6px]" } },

      defaultVariants: { size: tagDefaults.size },
    })({
      class: className,
      size: tagProps?.size,
    }),
  );

export const tagAvatarClass = ({ className }: TagAvatarType) => {
  return `group/tagAvatar bg-base-200 rounded-lg ${className}`;
};

export const tagAvatarImageClass = ({ className, tagProps }: TagAvatarType) => {
  const imageClass = tv({
    base: "rounded-[50px]",
    variants: { size: { sm: "w-5 h-5", md: "w-6 h-6", lg: "w-7 h-7" } },

    defaultVariants: { size: tagDefaults.size },
  });
  return imageClass({
    class: className,

    size: tagProps?.size,
  });
};

export const tagAvatarLabelClass = ({ className }: TagAvatarType) => {
  return `text-primary-600 text-xs font-text font-medium ${className}`;
};

export const tagAvatarIconClass = ({ className, tagProps }: TagAvatarType) => {
  const iconClass = tv({
    base: "text-primary-600",
    variants: { size: { sm: "w-3 h-3", lg: "w-5 h-5", md: "w-[14px] h-[14px]" } },

    defaultVariants: { size: tagDefaults.size },
  });
  return iconClass({
    class: className,

    size: tagProps?.size,
  });
};

export const TagAvatarLayout = ({
  renderRoot,
  styleProps: { className, tagProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TagAvatarType;
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

      defaultVariants: { size: tagDefaults.size },
    })({
      class: className,
      size: tagProps?.size,
    }),
  );
export const TagAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className, tagProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TagAvatarType;
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

      defaultVariants: { size: tagDefaults.size },
    })({
      class: className,
      size: tagProps?.size,
    }),
  );

export const tagDismissClass = ({ className }: TagDismissType) => {
  return `group/tagDismiss rounded-[16px] transition-all disabled:[background:unset] data-[active=true]:[background:unset] hover:bg-base-200 data-[ring=true]:bg-base-200 data-[ring=true]:shadow-focus-ring disabled:pointer-events-none ${className}`;
};

export const tagDismissIconClass = ({ className }: TagDismissType) => {
  return `w-[14px] h-[14px] text-[#848485] group-data-[active=true]/tagDismiss:text-[#848485] group-disabled/tagDismiss:text-[#8b8b8d] group-hover/tagDismiss:text-[#18181b] group-data-[ring=true]/tagDismiss:text-[#18181b] ${className}`;
};

export const TagDismissLayout = ({
  renderRoot,
  styleProps: { className, tagProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: TagDismissType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-6 w-6" } },

      defaultVariants: { size: tagDefaults.size },
    })({
      class: className,
      size: tagProps?.size,
    }),
  );
