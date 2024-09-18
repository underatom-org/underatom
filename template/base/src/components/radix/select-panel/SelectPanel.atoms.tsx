import { AvatarImageProps } from "@radix-ui/react-avatar";
import {
  SelectPanelGroupItemBoxAvatarLayout,
  SelectPanelGroupItemBoxAvatarWithIconLayout,
  SelectPanelGroupItemBoxBadgeLayout,
  SelectPanelGroupItemBoxBadgeWithIconLayout,
  SelectPanelGroupItemBoxDotStyleProps,
  SelectPanelGroupItemBoxIconBoxLayout,
  SelectPanelGroupItemBoxLayout,
  SelectPanelGroupItemBoxWithAvatarAndDescriptionLayout,
  SelectPanelGroupItemBoxWithAvatarLayout,
  SelectPanelGroupItemBoxWithDescriptionLayout,
  SelectPanelGroupItemBoxWithDotLayout,
  SelectPanelGroupItemLayout,
  SelectPanelGroupLayout,
  SelectPanelLayout,
} from "../../../styles/select-panel";
import {
  USelectPanelGroupItemBoxAvatarFallback,
  USelectPanelGroupItemBoxAvatarIcon,
  USelectPanelGroupItemBoxAvatarImage,
  USelectPanelGroupItemBoxAvatarLabel,
  USelectPanelGroupItemBoxAvatarRoot,
  USelectPanelGroupItemBoxAvatarRootProps,
  USelectPanelGroupItemBoxBadgeIcon,
  USelectPanelGroupItemBoxBadgeLabel,
  USelectPanelGroupItemBoxBadgeRoot,
  USelectPanelGroupItemBoxBadgeRootProps,
  USelectPanelGroupItemBoxDot,
  USelectPanelGroupItemBoxIconBoxRootProps,
  USelectPanelGroupItemBoxIconBoxRoot,
  USelectPanelGroupItemBoxIconBoxIcon,
  USelectPanelGroupItemBoxLabel,
  USelectPanelGroupItemBoxRoot,
  USelectPanelGroupItemBoxRootProps,
  USelectPanelGroupItemCheckIcon,
  USelectPanelGroupItemRoot,
  USelectPanelGroupItemRootProps,
  USelectPanelGroupRoot,
  USelectPanelGroupRootProps,
  USelectPanelRoot,
  USelectPanelRootProps,
  USelectPanelViewport,
  USelectPanelGroupItemBoxSupporting,
  USelectPanelGroupItemBoxDescription,
  USelectPanelGroupTitle,
  useSelectPanelInternalProvider,
} from "./SelectPanel.underatoms";
import { ReactNode, forwardRef } from "react";

/*
  ====================================
  SelectPanel
  ====================================
*/

export type SelectPanelProps = USelectPanelRootProps & {
  groupSlots: ReactNode[];
};
export const SelectPanel = forwardRef<HTMLDivElement, SelectPanelProps>(({ groupSlots, ...props }, forwardedRef) => (
  <SelectPanelLayout
    renderRoot={(children, className) => (
      <USelectPanelRoot ref={forwardedRef} {...props} className={className}>
        <USelectPanelViewport>{children}</USelectPanelViewport>
      </USelectPanelRoot>
    )}
    styleProps={{ className: props.className, selectPanelProps: props }}
    searchSlot={null}
    groupSlots={groupSlots}
  />
));

/*
  ====================================
  SelectPanelGroup
  ====================================
*/

export type SelectPanelGroup = USelectPanelGroupRootProps & {
  title?: string;
  itemSlots: ReactNode[];
};
export const SelectPanelGroup = forwardRef<HTMLDivElement, SelectPanelGroup>(
  ({ title, itemSlots, ...props }, forwardedRef) => {
    const selectPanelProps = useSelectPanelInternalProvider();
    return (
      <SelectPanelGroupLayout
        renderRoot={(children, className) => (
          <USelectPanelGroupRoot ref={forwardedRef} {...props} className={className}>
            {children}
          </USelectPanelGroupRoot>
        )}
        styleProps={{ className: props.className, selectPanelProps }}
        titleSlot={title && <USelectPanelGroupTitle>{title}</USelectPanelGroupTitle>}
        itemSlots={itemSlots}
      />
    );
  },
);

/*
  ====================================
  SelectPanelSearch
  ====================================
*/

// export type SelectPanelSearchProps = USelectPanelSearchRootProps & {
//   icon?: (className: string) => React.ReactNode;
// };
// export const SelectPanelSearch = ({ icon, ...props }: SelectPanelSearchProps) => (
//   <SelectPanelSearchLayout
//     renderRoot={(children, className) => (
//       <USelectPanelSearchRoot {...props} className={className}>
//         {children}
//       </USelectPanelSearchRoot>
//     )}
//     iconSlot={icon && <USelectPanelSearchIcon>{icon}</USelectPanelSearchIcon>}
//     textSlot={<USelectPanelSearchText />}
//   />
// );

/*
  ====================================
  SelectPanelGroupItem
  ====================================
*/

export type SelectPanelGroupItemProps = USelectPanelGroupItemRootProps & {
  hasCaret?: boolean;
  boxSlot?: ReactNode;
};
export const SelectPanelGroupItem = forwardRef<HTMLDivElement, SelectPanelGroupItemProps>(
  ({ hasCaret, boxSlot, ...props }, ref) => {
    const selectPanelProps = useSelectPanelInternalProvider();
    return (
      <SelectPanelGroupItemLayout
        renderRoot={(children, className) => (
          <USelectPanelGroupItemRoot ref={ref} {...props} className={className}>
            {children}
          </USelectPanelGroupItemRoot>
        )}
        styleProps={{ className: props.className, selectPanelProps }}
        checkIconSlot={<USelectPanelGroupItemCheckIcon />}
        boxSlot={boxSlot}
      />
    );
  },
);

/*
  ====================================
  SelectPanelGroupItemBox
  ====================================
*/

export type SelectPanelGroupItemBoxProps = USelectPanelGroupItemBoxRootProps & {
  label?: string;
  badgeSlot?: React.ReactNode;
  iconBoxSlot?: React.ReactNode;
};
export const SelectPanelGroupItemBox = ({ label, badgeSlot, iconBoxSlot, ...props }: SelectPanelGroupItemBoxProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <SelectPanelGroupItemBoxLayout
      renderRoot={(children, className) => (
        <USelectPanelGroupItemBoxRoot {...props} className={className}>
          {children}
        </USelectPanelGroupItemBoxRoot>
      )}
      styleProps={{ className: props.className, selectPanelProps }}
      iconBoxSlot={iconBoxSlot}
      labelSlot={label && <USelectPanelGroupItemBoxLabel>{label}</USelectPanelGroupItemBoxLabel>}
      badgeSlot={badgeSlot}
    />
  );
};

export type SelectPanelGroupItemBoxWithAvatarProps = Omit<USelectPanelGroupItemBoxRootProps, "children"> & {
  badgeSlot?: ReactNode;
  label?: string;
  avatarSlot: React.ReactNode;
};
export const SelectPanelGroupItemBoxWithAvatar = ({
  label,
  avatarSlot,
  badgeSlot,
  ...props
}: SelectPanelGroupItemBoxWithAvatarProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <SelectPanelGroupItemBoxWithAvatarLayout
      renderRoot={(children, className) => (
        <USelectPanelGroupItemBoxRoot {...props} className={className}>
          {children}
        </USelectPanelGroupItemBoxRoot>
      )}
      styleProps={{ className: props.className, selectPanelProps }}
      avatarSlot={avatarSlot}
      labelSlot={label && <USelectPanelGroupItemBoxLabel>{label}</USelectPanelGroupItemBoxLabel>}
      badgeSlot={badgeSlot}
    />
  );
};

export type SelectPanelGroupItemBoxWithDotProps = USelectPanelGroupItemBoxRootProps & {
  dotColor?: SelectPanelGroupItemBoxDotStyleProps["color"];
  label: string;
  badgeSlot?: ReactNode;
};
export const SelectPanelGroupItemBoxWithDot = ({
  dotColor,
  label,
  badgeSlot,
  ...props
}: SelectPanelGroupItemBoxWithDotProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <SelectPanelGroupItemBoxWithDotLayout
      renderRoot={(children, className) => (
        <USelectPanelGroupItemBoxRoot {...props} className={className}>
          {children}
        </USelectPanelGroupItemBoxRoot>
      )}
      styleProps={{ className: props.className, selectPanelProps }}
      dotSlot={<USelectPanelGroupItemBoxDot color={dotColor} />}
      labelSlot={<USelectPanelGroupItemBoxLabel>{label}</USelectPanelGroupItemBoxLabel>}
      badgeSlot={badgeSlot}
    />
  );
};

export type SelectPanelGroupItemBoxWithDescriptionProps = USelectPanelGroupItemBoxRootProps & {
  label?: string;
  description?: string;
  supportingText?: string;
  iconBoxSlot?: ReactNode;
  badgeSlot?: ReactNode;
};
export const SelectPanelGroupItemBoxWithDescription = ({
  label,
  description,
  supportingText,
  iconBoxSlot,
  badgeSlot,
  ...props
}: SelectPanelGroupItemBoxWithDescriptionProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <SelectPanelGroupItemBoxWithDescriptionLayout
      renderRoot={(children, className) => (
        <USelectPanelGroupItemBoxRoot {...props} className={className}>
          {children}
        </USelectPanelGroupItemBoxRoot>
      )}
      styleProps={{ className: props.className, selectPanelProps }}
      labelSlot={<USelectPanelGroupItemBoxLabel>{label}</USelectPanelGroupItemBoxLabel>}
      supportingSlot={<USelectPanelGroupItemBoxSupporting>{supportingText}</USelectPanelGroupItemBoxSupporting>}
      descriptionSlot={<USelectPanelGroupItemBoxDescription>{description}</USelectPanelGroupItemBoxDescription>}
      iconBoxSlot={iconBoxSlot}
      badgeSlot={badgeSlot}
    />
  );
};

export type SelectPanelGroupItemBoxWithAvatarAndDescriptionProps = USelectPanelGroupItemBoxRootProps & {
  label?: string;
  description?: string;
  supportingText?: string;
  avatarSlot?: ReactNode;
  badgeSlot?: ReactNode;
};
export const SelectPanelGroupItemBoxWithAvatarAndDescription = ({
  label,
  description,
  supportingText,
  avatarSlot,
  badgeSlot,
  ...props
}: SelectPanelGroupItemBoxWithAvatarAndDescriptionProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <SelectPanelGroupItemBoxWithAvatarAndDescriptionLayout
      renderRoot={(children, className) => (
        <USelectPanelGroupItemBoxRoot {...props} className={className}>
          {children}
        </USelectPanelGroupItemBoxRoot>
      )}
      styleProps={{ className: props.className, selectPanelProps }}
      labelSlot={<USelectPanelGroupItemBoxLabel>{label}</USelectPanelGroupItemBoxLabel>}
      supportingSlot={<USelectPanelGroupItemBoxSupporting>{supportingText}</USelectPanelGroupItemBoxSupporting>}
      descriptionSlot={<USelectPanelGroupItemBoxDescription>{description}</USelectPanelGroupItemBoxDescription>}
      avatarSlot={avatarSlot}
      badgeSlot={badgeSlot}
    />
  );
};

/*
  ====================================
  SelectPanelGroupItemBoxIconBox
  ====================================
*/

export type SelectPanelGroupItemBoxIconBoxProps = USelectPanelGroupItemBoxIconBoxRootProps & {
  icon: (className: string) => React.ReactNode;
};
export const SelectPanelGroupItemBoxIconBox = ({ icon, ...props }: SelectPanelGroupItemBoxIconBoxProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <SelectPanelGroupItemBoxIconBoxLayout
      renderRoot={(children, className) => (
        <USelectPanelGroupItemBoxIconBoxRoot {...props} className={className}>
          {children}
        </USelectPanelGroupItemBoxIconBoxRoot>
      )}
      styleProps={{ className: props.className, selectPanelProps }}
      iconSlot={<USelectPanelGroupItemBoxIconBoxIcon>{icon}</USelectPanelGroupItemBoxIconBoxIcon>}
    />
  );
};

/*
  ====================================
  SelectPanelGroupItemBoxAvatar
  ====================================
*/

export type SelectPanelGroupItemBoxAvatarProps = Omit<USelectPanelGroupItemBoxAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackText?: string;
};
export const SelectPanelGroupItemBoxAvatar = ({
  imageProps,
  fallbackText,
  ...props
}: SelectPanelGroupItemBoxAvatarProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <SelectPanelGroupItemBoxAvatarLayout
      renderRoot={(children, className) => (
        <USelectPanelGroupItemBoxAvatarRoot {...props} className={className}>
          {children}
        </USelectPanelGroupItemBoxAvatarRoot>
      )}
      styleProps={{ className: props.className, selectPanelProps, selectPanelGroupItemBoxAvatarProps: props }}
      imageSlot={imageProps && <USelectPanelGroupItemBoxAvatarImage {...imageProps} />}
      labelSlot={
        fallbackText && (
          <USelectPanelGroupItemBoxAvatarFallback>
            <USelectPanelGroupItemBoxAvatarLabel>{fallbackText}</USelectPanelGroupItemBoxAvatarLabel>
          </USelectPanelGroupItemBoxAvatarFallback>
        )
      }
    />
  );
};

export type SelectPanelGroupItemBoxAvatarWithIconProps = Omit<USelectPanelGroupItemBoxAvatarRootProps, "children"> & {
  imageProps?: AvatarImageProps;
  fallbackIcon?: (className: string) => React.ReactNode;
};
export const SelectPanelGroupItemBoxAvatarWithIcon = ({
  imageProps,
  fallbackIcon,
  ...props
}: SelectPanelGroupItemBoxAvatarWithIconProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <SelectPanelGroupItemBoxAvatarWithIconLayout
      renderRoot={(children, className) => (
        <USelectPanelGroupItemBoxAvatarRoot {...props} className={className}>
          {children}
        </USelectPanelGroupItemBoxAvatarRoot>
      )}
      styleProps={{ className: props.className, selectPanelProps, selectPanelGroupItemBoxAvatarProps: props }}
      imageSlot={imageProps && <USelectPanelGroupItemBoxAvatarImage {...imageProps} />}
      iconSlot={
        fallbackIcon && (
          <USelectPanelGroupItemBoxAvatarFallback>
            <USelectPanelGroupItemBoxAvatarIcon>{fallbackIcon}</USelectPanelGroupItemBoxAvatarIcon>
          </USelectPanelGroupItemBoxAvatarFallback>
        )
      }
    />
  );
};

/*
  ====================================
  SelectPanelGroupItemCheckbox
  ====================================
*/

// export type SelectPanelGroupItemCheckboxProps = USelectPanelGroupItemCheckboxRootProps;
// export const SelectPanelGroupItemCheckbox = (props: SelectPanelGroupItemCheckboxProps) => (
//   <SelectPanelGroupItemCheckboxLayout
//     renderRoot={(children, className) => (
//       <USelectPanelGroupItemCheckboxRoot {...props} className={className}>
//         {children}
//       </USelectPanelGroupItemCheckboxRoot>
//     )}
//     iconSlot={<USelectPanelGroupItemCheckboxIcon />}
//   />
// );

/*
  ====================================
  SelectPanelGroupItemBoxBadge
  ====================================
*/

export type SelectPanelGroupItemBoxBadgeProps = Omit<USelectPanelGroupItemBoxBadgeRootProps, "children"> & {
  label: string;
};
export const SelectPanelGroupItemBoxBadge = ({ label, ...props }: SelectPanelGroupItemBoxBadgeProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <SelectPanelGroupItemBoxBadgeLayout
      renderRoot={(children, className) => (
        <USelectPanelGroupItemBoxBadgeRoot {...props} className={className}>
          {children}
        </USelectPanelGroupItemBoxBadgeRoot>
      )}
      styleProps={{ className: props.className, selectPanelProps, selectPanelGroupItemBoxBadgeProps: props }}
      labelSlot={<USelectPanelGroupItemBoxBadgeLabel>{label}</USelectPanelGroupItemBoxBadgeLabel>}
    />
  );
};

export type SelectPanelGroupItemBoxBadgeWithIconProps = Omit<USelectPanelGroupItemBoxBadgeRootProps, "children"> & {
  icon?: (className: string) => React.ReactNode;
  label?: string;
};
export const SelectPanelGroupItemBoxBadgeWithIcon = ({
  label,
  icon,
  ...props
}: SelectPanelGroupItemBoxBadgeWithIconProps) => {
  const selectPanelProps = useSelectPanelInternalProvider();
  return (
    <SelectPanelGroupItemBoxBadgeWithIconLayout
      renderRoot={(children, className) => (
        <USelectPanelGroupItemBoxBadgeRoot {...props} className={className}>
          {children}
        </USelectPanelGroupItemBoxBadgeRoot>
      )}
      styleProps={{ className: props.className, selectPanelProps, selectPanelGroupItemBoxBadgeProps: props }}
      iconSlot={icon && <USelectPanelGroupItemBoxBadgeIcon>{icon}</USelectPanelGroupItemBoxBadgeIcon>}
      labelSlot={label && <USelectPanelGroupItemBoxBadgeLabel>{label}</USelectPanelGroupItemBoxBadgeLabel>}
    />
  );
};
