import type { RenderRoot } from "../../../base/src/_utils";
import type {
  ChipToggleType,
  ChipToggleDotType,
  ChipToggleAvatarType,
  ChipToggleDismissType,
} from "~/base/src/styles/chip-toggle";
import { chipToggleDotDefaults, chipToggleDefaults } from "~/base/src/styles/chip-toggle";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const chipToggleClass = ({ className }: ChipToggleType) => {
  return `
  group/chipToggle
  border-solid
  data-[toggled=true]:border-solid
  border-base-200
  data-[active=true]:border-base-200
  disabled:border-base-200
  border-1
  data-[toggled=true]:border-1
  bg-base-50
  data-[active=true]:bg-base-50
  disabled:bg-base-50
  rounded-[16px]
  transition-all
  hover:border-base-300
  data-[ring=true]:border-base-300
  data-[state=open]:border-base-300
  hover:bg-base-100
  data-[ring=true]:bg-base-100
  data-[state=open]:bg-base-100
  data-[ring=true]:shadow-focus-ring
  data-[toggled=true]:border-primary-950
  data-[active=true]:data-[toggled=true]:border-primary-950
  data-[toggled=true]:bg-primary-950
  data-[active=true]:data-[toggled=true]:bg-primary-950
  hover:data-[toggled=true]:border-primary-900
  data-[ring=true]:data-[toggled=true]:border-primary-900
  data-[state=open]:data-[toggled=true]:border-primary-900
  hover:data-[toggled=true]:bg-primary-900
  data-[ring=true]:data-[toggled=true]:bg-primary-900
  data-[state=open]:data-[toggled=true]:bg-primary-900
  disabled:data-[toggled=true]:[border:unset]
  disabled:data-[toggled=true]:bg-base-300
  ${className}
  `;
};

export const chipToggleLabelClass = ({ className }: ChipToggleType) => {
  return `text-base-950 text-sm font-text font-medium group-disabled/chipToggle:text-base-400 group-data-[toggled=true]/chipToggle:text-base-50 group-disabled/chipToggle:group-data-[toggled=true]/chipToggle:text-base-200 ${className}`;
};

export const chipToggleIconClass = ({ className }: ChipToggleType) => {
  return `w-5 h-5 text-base-950 group-disabled/chipToggle:text-base-400 group-data-[toggled=true]/chipToggle:text-base-50 group-disabled/chipToggle:group-data-[toggled=true]/chipToggle:text-base-200 ${className}`;
};

export const chipToggleDotClass = ({ className, chipToggleDotProps }: ChipToggleDotType) => {
  const dotClass = tv({
    base: "w-[6px] h-[6px] rounded-xs group-disabled/chipToggle:bg-base-400 group-disabled/chipToggle:group-data-[toggled=true]/chipToggle:bg-base-200 group-data-[toggled=true]/chipToggle:bg-base-50",
    variants: {
      dotColor: { base: "bg-base-950", primary: "bg-primary-950", green: "bg-success-600", red: "bg-danger-600" },
    },

    defaultVariants: { dotColor: chipToggleDotDefaults.color },
  });
  return dotClass({
    class: className,
    dotColor: chipToggleDotProps?.color,
  });
};

export const ChipToggleLayout = ({
  renderRoot,
  styleProps: { className, chipToggleProps },
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleType;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center gap-1",
          variants: { size: { sm: "pr-1", md: "pr-1", lg: "pr-[6px]" } },

          defaultVariants: { size: chipToggleDefaults.size },
        })({ size: chipToggleProps?.size })}
      >
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: { size: { sm: "h-7 pl-2 pr-1", md: "h-8 pl-[10px] pr-[6px]", lg: "h-9 pl-3 pr-[6px]" } },

      defaultVariants: { size: chipToggleDefaults.size },
    })({
      class: className,
      size: chipToggleProps?.size,
    }),
  );
export const ChipToggleWithIconLayout = ({
  renderRoot,
  styleProps: { className, chipToggleProps },
  iconSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleType;
  iconSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center",
          variants: { size: { sm: "gap-1 pr-1", md: "gap-1 pr-1", lg: "gap-[6px] pr-[6px]" } },

          defaultVariants: { size: chipToggleDefaults.size },
        })({ size: chipToggleProps?.size })}
      >
        {iconSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: { size: { sm: "h-7 px-1", md: "h-8 px-[6px]", lg: "h-9 pl-2 pr-[6px]" } },

      defaultVariants: { size: chipToggleDefaults.size },
    })({
      class: className,
      size: chipToggleProps?.size,
    }),
  );
export const ChipToggleWithDotLayout = ({
  renderRoot,
  styleProps: { className, chipToggleProps },
  dotSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleType;
  dotSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row items-center gap-[6px]",
          variants: { size: { sm: "justify-center pr-1", md: "justify-center pr-[6px]", lg: "pr-1" } },

          defaultVariants: { size: chipToggleDefaults.size },
        })({ size: chipToggleProps?.size })}
      >
        {dotSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row justify-center items-center",
      variants: { size: { sm: "h-7 pl-2 pr-1", md: "h-8 pl-[10px] pr-[6px]", lg: "h-9 pl-[10px] pr-[6px]" } },

      defaultVariants: { size: chipToggleDefaults.size },
    })({
      class: className,
      size: chipToggleProps?.size,
    }),
  );
export const ChipToggleWithAvatarLayout = ({
  renderRoot,
  styleProps: { className, chipToggleProps },
  avatarSlot,
  labelSlot,
  dismissSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleType;
  avatarSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  dismissSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div
        className={tv({
          base: "h-fit w-fit flex flex-row justify-center items-center pr-1",
          variants: { size: { sm: "gap-1", md: "gap-1", lg: "gap-[6px]" } },

          defaultVariants: { size: chipToggleDefaults.size },
        })({ size: chipToggleProps?.size })}
      >
        {avatarSlot}
        {labelSlot}
      </div>
      {dismissSlot}
    </>,
    tv({
      base: "w-fit flex flex-row items-center",
      variants: {
        size: { sm: "h-7 justify-center px-1", md: "h-8 justify-center pl-1 pr-[6px]", lg: "h-9 pl-1 pr-[6px]" },
      },

      defaultVariants: { size: chipToggleDefaults.size },
    })({
      class: className,
      size: chipToggleProps?.size,
    }),
  );

export const chipToggleAvatarClass = ({ className }: ChipToggleAvatarType) => {
  return `
  group/chipToggleAvatar
  bg-base-200
  group-data-[active=true]/chipToggle:bg-base-200
  group-data-[ring=true]/chipToggle:bg-base-200
  group-disabled/chipToggle:bg-base-200
  group-disabled/chipToggle:group-data-[toggled=true]/chipToggle:bg-base-200
  rounded-lg
  group-hover/chipToggle:bg-base-300
  group-data-[toggled=true]/chipToggle:bg-primary-700
  group-data-[active=true]/chipToggle:group-data-[toggled=true]/chipToggle:bg-primary-700
  group-data-[ring=true]/chipToggle:group-data-[toggled=true]/chipToggle:bg-primary-700
  group-hover/chipToggle:group-data-[toggled=true]/chipToggle:bg-primary-500
  ${className}
  `;
};

export const chipToggleAvatarImageClass = ({ className, chipToggleProps }: ChipToggleAvatarType) => {
  const imageClass = tv({
    base: "rounded-[50px] group-disabled/chipToggle:opacity-[0.6]",
    variants: { size: { sm: "w-5 h-5", md: "w-6 h-6", lg: "w-7 h-7" } },

    defaultVariants: { size: chipToggleDefaults.size },
  });
  return imageClass({
    class: className,

    size: chipToggleProps?.size,
  });
};

export const chipToggleAvatarLabelClass = ({ className }: ChipToggleAvatarType) => {
  return `text-base-950 text-xs font-text font-medium group-disabled/chipToggle:text-base-400 group-data-[toggled=true]/chipToggle:text-base-50 group-disabled/chipToggle:group-data-[toggled=true]/chipToggle:text-base-200 ${className}`;
};

export const chipToggleAvatarIconClass = ({ className, chipToggleProps }: ChipToggleAvatarType) => {
  const iconClass = tv({
    base: "text-base-800 group-disabled/chipToggle:text-base-400 group-disabled/chipToggle:group-data-[toggled=true]/chipToggle:text-base-200 group-data-[toggled=true]/chipToggle:text-base-50",
    variants: { size: { sm: "w-3 h-3", lg: "w-5 h-5", md: "w-[14px] h-[14px]" } },

    defaultVariants: { size: chipToggleDefaults.size },
  });
  return iconClass({
    class: className,

    size: chipToggleProps?.size,
  });
};

export const ChipToggleAvatarLayout = ({
  renderRoot,
  styleProps: { className, chipToggleProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleAvatarType;
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

      defaultVariants: { size: chipToggleDefaults.size },
    })({
      class: className,
      size: chipToggleProps?.size,
    }),
  );
export const ChipToggleAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className, chipToggleProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleAvatarType;
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

      defaultVariants: { size: chipToggleDefaults.size },
    })({
      class: className,
      size: chipToggleProps?.size,
    }),
  );

export const chipToggleDismissClass = ({ className }: ChipToggleDismissType) => {
  return `
  group/chipToggleDismiss
  rounded-[16px]
  group-disabled/chipToggle:disabled:rounded-[16px]
  transition-all
  disabled:[background:unset]
  data-[active=true]:[background:unset]
  hover:bg-base-200
  data-[ring=true]:bg-base-200
  data-[ring=true]:shadow-focus-ring
  group-data-[toggled=true]/chipToggle:hover:bg-base-800
  group-data-[toggled=true]/chipToggle:data-[ring=true]:bg-base-800
  ${className}
  `;
};

export const chipToggleDismissIconClass = ({ className }: ChipToggleDismissType) => {
  return `
  w-[14px]
  group-disabled/chipToggleDismiss:group-disabled/chipToggle:w-[14px]
  h-[14px]
  group-disabled/chipToggleDismiss:group-disabled/chipToggle:h-[14px]
  text-base-600
  group-data-[active=true]/chipToggleDismiss:text-base-600
  group-disabled/chipToggleDismiss:text-base-400
  group-hover/chipToggleDismiss:text-base-950
  group-data-[ring=true]/chipToggleDismiss:text-base-950
  group-data-[toggled=true]/chipToggle:text-base-200
  group-disabled/chipToggleDismiss:group-data-[toggled=true]/chipToggle:text-base-200
  group-disabled/chipToggleDismiss:group-disabled/chipToggle:group-data-[toggled=true]/chipToggle:text-base-200
  group-hover/chipToggleDismiss:group-data-[toggled=true]/chipToggle:text-base-50
  group-data-[active=true]/chipToggleDismiss:group-data-[toggled=true]/chipToggle:text-base-50
  group-data-[ring=true]/chipToggleDismiss:group-data-[toggled=true]/chipToggle:text-base-50
  ${className}
  `;
};

export const ChipToggleDismissLayout = ({
  renderRoot,
  styleProps: { className, chipToggleProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: ChipToggleDismissType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-5 w-5", md: "h-5 w-5", lg: "h-6 w-6" } },

      defaultVariants: { size: chipToggleDefaults.size },
    })({
      class: className,
      size: chipToggleProps?.size,
    }),
  );
