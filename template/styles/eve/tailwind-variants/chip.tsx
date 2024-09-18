import type { RenderRoot } from "../../../base/src/_utils";
import type { ChipType, ChipDotType, ChipAvatarType, ChipDismissType } from "~/base/src/styles/chip";
import { chipDotDefaults, chipDefaults } from "~/base/src/styles/chip";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const chipClass = ({ className }: ChipType) => {
  return `
  group/chip
  border-solid
  border-primary-200
  data-[active=true]:border-primary-200
  disabled:border-primary-200
  border-1
  bg-base-50
  data-[active=true]:bg-base-50
  disabled:bg-base-50
  rounded-[16px]
  hover:border-primary-300
  data-[ring=true]:border-primary-300
  data-[state=open]:border-primary-300
  hover:bg-base-100
  data-[ring=true]:bg-base-100
  data-[state=open]:bg-base-100
  data-[ring=true]:shadow-focus-ring
  disabled:pointer-events-none
  ${className}
  `;
};

export const chipLabelClass = ({ className }: ChipType) => {
  return `text-[#18181b] text-sm font-text font-medium group-disabled/chip:text-[#8b8b8d] ${className}`;
};

export const chipIconClass = ({ className }: ChipType) => {
  return `w-5 h-5 text-[#18181b] group-disabled/chip:text-[#8b8b8d] ${className}`;
};

export const chipDotClass = ({ className, chipDotProps }: ChipDotType) => {
  const dotClass = tv({
    base: "w-[6px] h-[6px] rounded-xs group-disabled/chip:[background:#8b8b8d]",
    variants: {
      dotColor: {
        base: "[background:#09090b]",
        primary: "[background:#18181b]",
        green: "[background:#318a00]",
        red: "[background:#dc2626]",
      },
    },

    defaultVariants: { dotColor: chipDotDefaults.color },
  });
  return dotClass({
    class: className,
    dotColor: chipDotProps?.color,
  });
};

export const ChipLayout = ({
  renderRoot,
  styleProps: { className, chipProps },
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center gap-1",
          variants: { size: { sm: "px-1", md: "pr-1", lg: "pr-[6px]" } },

          defaultVariants: { size: chipDefaults.size },
        })({ size: chipProps?.size })}
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

      defaultVariants: { size: chipDefaults.size },
    })({
      class: className,
      size: chipProps?.size,
    }),
  );
export const ChipWithIconLayout = ({
  renderRoot,
  styleProps: { className, chipProps },
  iconSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipType;
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

          defaultVariants: { size: chipDefaults.size },
        })({ size: chipProps?.size })}
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

      defaultVariants: { size: chipDefaults.size },
    })({
      class: className,
      size: chipProps?.size,
    }),
  );
export const ChipWithDotLayout = ({
  renderRoot,
  styleProps: { className, chipProps },
  dotSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipType;
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

          defaultVariants: { size: chipDefaults.size },
        })({ size: chipProps?.size })}
      >
        {dotSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center gap-[6px]",
      variants: { size: { sm: "h-7 px-1", md: "h-8 pl-[10px] pr-[6px]", lg: "h-9 pl-[10px] pr-[6px]" } },

      defaultVariants: { size: chipDefaults.size },
    })({
      class: className,
      size: chipProps?.size,
    }),
  );
export const ChipWithAvatarLayout = ({
  renderRoot,
  styleProps: { className, chipProps },
  avatarSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipType;
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

          defaultVariants: { size: chipDefaults.size },
        })({ size: chipProps?.size })}
      >
        {avatarSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: { size: { sm: "h-7 gap-[6px] px-1", md: "h-8 gap-2 pl-1 pr-[6px]", lg: "h-9 gap-2 pl-1 pr-[6px]" } },

      defaultVariants: { size: chipDefaults.size },
    })({
      class: className,
      size: chipProps?.size,
    }),
  );

export const chipAvatarClass = ({ className }: ChipAvatarType) => {
  return `group/chipAvatar bg-base-200 group-data-[active=true]/chip:bg-base-200 group-data-[ring=true]/chip:bg-base-200 group-disabled/chip:bg-base-200 rounded-lg group-hover/chip:bg-base-300 ${className}`;
};

export const chipAvatarImageClass = ({ className, chipProps }: ChipAvatarType) => {
  const imageClass = tv({
    base: "rounded-[50px] group-disabled/chip:shadow-[inset_0px_0px_0px_1000px_#d9d9d9b2]",
    variants: { size: { sm: "w-5 h-5", md: "w-6 h-6", lg: "w-7 h-7" } },

    defaultVariants: { size: chipDefaults.size },
  });
  return imageClass({
    class: className,

    size: chipProps?.size,
  });
};

export const chipAvatarLabelClass = ({ className }: ChipAvatarType) => {
  return `text-base-600 text-xs font-text font-medium group-disabled/chip:text-base-400 ${className}`;
};

export const chipAvatarIconClass = ({ className, chipProps }: ChipAvatarType) => {
  const iconClass = tv({
    base: "text-base-600 group-disabled/chip:text-base-400",
    variants: { size: { sm: "w-3 h-3", lg: "w-5 h-5", md: "w-[14px] h-[14px]" } },

    defaultVariants: { size: chipDefaults.size },
  });
  return iconClass({
    class: className,

    size: chipProps?.size,
  });
};

export const ChipAvatarLayout = ({
  renderRoot,
  styleProps: { className, chipProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipAvatarType;
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

      defaultVariants: { size: chipDefaults.size },
    })({
      class: className,
      size: chipProps?.size,
    }),
  );
export const ChipAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className, chipProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipAvatarType;
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

      defaultVariants: { size: chipDefaults.size },
    })({
      class: className,
      size: chipProps?.size,
    }),
  );

export const chipDismissClass = ({ className }: ChipDismissType) => {
  return `
  group/chipDismiss
  rounded-[16px]
  transition-all
  group-disabled/chip:disabled:transition-all
  disabled:[background:unset]
  data-[active=true]:[background:unset]
  group-disabled/chip:hover:[background:unset]
  group-disabled/chip:data-[ring=true]:[background:unset]
  group-disabled/chip:data-[ring=true]:shadow-none
  hover:bg-base-200
  data-[ring=true]:bg-base-200
  data-[ring=true]:shadow-focus-ring
  disabled:pointer-events-none
  ${className}
  `;
};

export const chipDismissIconClass = ({ className }: ChipDismissType) => {
  return `
  w-[14px]
  h-[14px]
  text-[#848485]
  group-hover/chipDismiss:text-[#09090b]
  group-data-[active=true]/chipDismiss:text-[#09090b]
  group-data-[ring=true]/chipDismiss:text-[#09090b]
  group-disabled/chipDismiss:text-[#8b8b8d]
  group-disabled/chip:text-[#8b8b8d]
  group-hover/chipDismiss:group-disabled/chip:text-[#8b8b8d]
  group-data-[active=true]/chipDismiss:group-disabled/chip:text-[#8b8b8d]
  group-data-[ring=true]/chipDismiss:group-disabled/chip:text-[#8b8b8d]
  ${className}
  `;
};

export const ChipDismissLayout = ({
  renderRoot,
  styleProps: { className, chipProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipDismissType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-6 w-6" } },

      defaultVariants: { size: chipDefaults.size },
    })({
      class: className,
      size: chipProps?.size,
    }),
  );
