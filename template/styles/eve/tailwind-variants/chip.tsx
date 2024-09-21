import type { RenderRoot } from "../../../base/src/_utils";
import type { ChipType, ChipDotType, ChipAvatarType, ChipDismissType } from "~/base/src/styles/chip";
import { chipDotDefaults, chipDefaults } from "~/base/src/styles/chip";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const chipClass = ({ className }: ChipType) => {
  return `
  group/chip
  border-solid
  border-base-200
  data-[active=true]:border-base-200
  disabled:border-base-200
  border-1
  bg-base-50
  data-[active=true]:bg-base-50
  disabled:bg-base-50
  rounded-[16px]
  hover:border-base-300
  data-[ring=true]:border-base-300
  data-[state=open]:border-base-300
  hover:bg-base-100
  data-[ring=true]:bg-base-100
  data-[state=open]:bg-base-100
  data-[ring=true]:shadow-focus-ring
  disabled:pointer-events-none
  ${className}
  `;
};

export const chipLabelClass = ({ className }: ChipType) => {
  return `text-base-950 text-sm font-text font-medium group-disabled/chip:text-base-400 ${className}`;
};

export const chipIconClass = ({ className }: ChipType) => {
  return `w-5 h-5 text-primary-600 group-disabled/chip:text-base-400 ${className}`;
};

export const chipDotClass = ({ className, chipDotProps }: ChipDotType) => {
  const dotClass = tv({
    base: "w-[6px] h-[6px] rounded-xs group-disabled/chip:bg-base-400",
    variants: {
      dotColor: { base: "bg-base-950", primary: "bg-primary-950", green: "bg-success-600", red: "bg-danger-500" },
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
          base: "h-fit w-fit flex flex-row justify-center items-center",
          variants: { size: { sm: "gap-1 pl-[6px] pr-1", md: "gap-1 pr-[6px]", lg: "gap-[6px] pr-2" } },

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
          base: "h-fit w-fit flex flex-row justify-center items-center",
          variants: { size: { sm: "gap-[6px] pr-[2px]", md: "gap-[6px] pr-1", lg: "gap-2 pr-[6px]" } },

          defaultVariants: { size: chipDefaults.size },
        })({ size: chipProps?.size })}
      >
        {dotSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: {
        size: { sm: "h-7 gap-1 pl-2 pr-1", md: "h-8 gap-[6px] pl-[10px] pr-[6px]", lg: "h-9 gap-1 pl-[10px] pr-[6px]" },
      },

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
          variants: { size: { sm: "gap-[6px] pr-1", md: "gap-[6px] pr-[6px]", lg: "gap-2 pr-2" } },

          defaultVariants: { size: chipDefaults.size },
        })({ size: chipProps?.size })}
      >
        {avatarSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row items-center",
      variants: {
        size: {
          sm: "h-7 justify-center gap-[2px] px-1",
          md: "h-8 justify-center gap-1 pl-1 pr-[6px]",
          lg: "h-9 gap-1 pl-1 pr-[6px]",
        },
      },

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
