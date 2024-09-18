import type { RenderRoot } from "../../../base/src/_utils";
import type {
  AvatarGroupAvatarType,
  AvatarGroupActionType,
  AvatarGroupInfoType,
  AvatarGroupType,
} from "~/base/src/styles/avatar-group";
import { avatarGroupDefaults } from "~/base/src/styles/avatar-group";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const avatarGroupAvatarClass = ({ className, avatarGroupProps }: AvatarGroupAvatarType) => {
  const rootClass = tv({
    base: "group/avatarGroupAvatar bg-base-100 rounded-[50px]",
    variants: { size: { sm: "shadow-cut-in-sm", md: "shadow-cut-in-sm", lg: "shadow-cut-in-lg" } },

    defaultVariants: { size: avatarGroupDefaults.size },
  });
  return rootClass({
    class: className,
    size: avatarGroupProps?.size,
  });
};

export const avatarGroupAvatarImageClass = ({ className, avatarGroupProps }: AvatarGroupAvatarType) => {
  const imageClass = tv({
    base: "rounded-[50px]",
    variants: { size: { sm: "w-10 h-10", md: "w-13 h-13", lg: "w-[64px] h-[64px]" } },

    defaultVariants: { size: avatarGroupDefaults.size },
  });
  return imageClass({
    class: className,

    size: avatarGroupProps?.size,
  });
};

export const avatarGroupAvatarLabelClass = ({ className, avatarGroupProps }: AvatarGroupAvatarType) => {
  const labelClass = tv({
    base: "text-base-600 font-medium",
    variants: { size: { sm: "text-sm font-text", md: "text-lg font-text", lg: "text-xl font-display" } },

    defaultVariants: { size: avatarGroupDefaults.size },
  });
  return labelClass({
    class: className,

    size: avatarGroupProps?.size,
  });
};

export const avatarGroupAvatarIconClass = ({ className, avatarGroupProps }: AvatarGroupAvatarType) => {
  const iconClass = tv({
    base: "text-base-600",
    variants: { size: { sm: "w-5 h-5", md: "w-7 h-7", lg: "w-9 h-9" } },

    defaultVariants: { size: avatarGroupDefaults.size },
  });
  return iconClass({
    class: className,

    size: avatarGroupProps?.size,
  });
};

export const AvatarGroupAvatarLayout = ({
  renderRoot,
  styleProps: { className, avatarGroupProps },
  imageSlot,
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarGroupAvatarType;
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
      variants: { size: { sm: "h-10 w-10", md: "h-13 w-13", lg: "h-[64px] w-[64px]" } },

      defaultVariants: { size: avatarGroupDefaults.size },
    })({
      class: className,
      size: avatarGroupProps?.size,
    }),
  );
export const AvatarGroupAvatarWithIconLayout = ({
  renderRoot,
  styleProps: { className, avatarGroupProps },
  imageSlot,
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarGroupAvatarType;
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
      variants: { size: { sm: "h-10 w-10", md: "h-13 w-13", lg: "h-[64px] w-[64px]" } },

      defaultVariants: { size: avatarGroupDefaults.size },
    })({
      class: className,
      size: avatarGroupProps?.size,
    }),
  );

export const avatarGroupActionClass = ({ className, avatarGroupProps }: AvatarGroupActionType) => {
  const rootClass = tv({
    base: `
group/avatarGroupAction
  border-solid
  border-base-300
  border-1
  bg-base-50
  data-[active=true]:bg-base-50
  data-[disabled=true]:bg-base-50
  rounded-[50px]
  hover:bg-base-100
  data-[ring=true]:bg-base-100
  data-[ring=true]:shadow-focus-ring
  data-[disabled=true]:border-base-200
`,
    variants: {
      size: { sm: "shadow-cut-in-elevated-sm", md: "shadow-cut-in-elevated-sm", lg: "shadow-cut-in-elevated-lg" },
    },

    defaultVariants: { size: avatarGroupDefaults.size },
  });
  return rootClass({
    class: className,
    size: avatarGroupProps?.size,
  });
};

export const avatarGroupActionIconClass = ({ className }: AvatarGroupActionType) => {
  return `w-[26px] h-[26px] text-primary-600 group-data-[disabled=true]/avatarGroupAction:text-base-400 ${className}`;
};

export const AvatarGroupActionLayout = ({
  renderRoot,
  styleProps: { className, avatarGroupProps },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarGroupActionType;
  iconSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{iconSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-10 w-10", md: "h-13 w-13", lg: "h-[64px] w-[64px]" } },

      defaultVariants: { size: avatarGroupDefaults.size },
    })({
      class: className,
      size: avatarGroupProps?.size,
    }),
  );

export const avatarGroupInfoClass = ({ className, avatarGroupProps }: AvatarGroupInfoType) => {
  const rootClass = tv({
    base: "group/avatarGroupInfo bg-base-100 rounded-[50px]",
    variants: {
      size: { sm: "shadow-cut-in-elevated-sm", md: "shadow-cut-in-elevated-sm", lg: "shadow-cut-in-elevated-lg" },
    },

    defaultVariants: { size: avatarGroupDefaults.size },
  });
  return rootClass({
    class: className,
    size: avatarGroupProps?.size,
  });
};

export const avatarGroupInfoLabelClass = ({ className, avatarGroupProps }: AvatarGroupInfoType) => {
  const labelClass = tv({
    base: "text-primary-500 font-medium",
    variants: { size: { sm: "text-sm font-text", md: "text-lg font-text", lg: "text-xl font-display" } },

    defaultVariants: { size: avatarGroupDefaults.size },
  });
  return labelClass({
    class: className,

    size: avatarGroupProps?.size,
  });
};

export const AvatarGroupInfoLayout = ({
  renderRoot,
  styleProps: { className, avatarGroupProps },
  labelSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarGroupInfoType;
  labelSlot: React.ReactNode;
}) =>
  renderRoot(
    <>{labelSlot}</>,
    tv({
      base: "flex flex-row justify-center items-center",
      variants: { size: { sm: "h-10 w-10", md: "h-13 w-13", lg: "h-[64px] w-[64px]" } },

      defaultVariants: { size: avatarGroupDefaults.size },
    })({
      class: className,
      size: avatarGroupProps?.size,
    }),
  );

export const avatarGroupClass = ({ className }: AvatarGroupType) => {
  return `group/avatarGroup  ${className}`;
};

export const AvatarGroupLayout = ({
  renderRoot,
  styleProps: { className },
  avatarSlots,
  actionSlot,
  infoSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: AvatarGroupType;
  avatarSlots: React.ReactNode;
  actionSlot: React.ReactNode;
  infoSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      {avatarSlots}

      {actionSlot}
      {infoSlot}
    </>,
    `h-fit w-fit flex flex-row [&>*:not(:first-child)]:[margin-left:-8px] ${className}`,
  );
