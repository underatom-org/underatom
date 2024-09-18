import { ReactNode } from "react";
import {
  SwitchLayout,
  SwitchToggleHandleLayout,
  SwitchToggleLayout,
  SwitchToggleStyleProps,
} from "../../../styles/switch";
import {
  useSwitchInternalProvider,
  useSwitchToggleInternalProvider,
  USwitchAsterisk,
  USwitchDescription,
  USwitchLabel,
  USwitchRoot,
  USwitchRootProps,
  USwitchToggleHandleIcon,
  USwitchToggleHandleRoot,
  USwitchToggleHandleRootProps,
  USwitchToggleRoot,
  USwitchToggleRootProps,
} from "./Switch.underatoms";

/*
  ====================================
  Switch
  ====================================
*/

export type SwitchProps = USwitchRootProps & {
  label?: string;
  description?: string;
  icon?: (className?: string) => ReactNode;
  color?: SwitchToggleStyleProps["color"];
};
export const Switch = ({ description, label, icon, color, ...props }: SwitchProps) => {
  return (
    <SwitchLayout
      renderRoot={(children, className) => (
        <USwitchRoot {...props} className={className}>
          {children}
        </USwitchRoot>
      )}
      styleProps={{ className: props.className, switchProps: props }}
      labelSlot={label && <USwitchLabel>{label}</USwitchLabel>}
      descriptionSlot={description && <USwitchDescription>{description}</USwitchDescription>}
      asteriskSlot={<USwitchAsterisk />}
      toggleSlot={<SwitchToggle icon={icon} color={color} />}
    />
  );
};

/*
  ====================================
  SwitchToggle
  ====================================
*/

export type SwitchToggleProps = USwitchToggleRootProps & {
  icon?: (className?: string) => ReactNode;
};
export const SwitchToggle = ({ icon, ...props }: SwitchToggleProps) => {
  const switchProps = useSwitchInternalProvider();
  return (
    <SwitchToggleLayout
      renderRoot={(children, className) => (
        <USwitchToggleRoot {...props} className={className}>
          {children}
        </USwitchToggleRoot>
      )}
      styleProps={{ className: props.className, switchProps, switchToggleProps: props }}
      handleSlot={<SwitchToggleHandle icon={icon} />}
    />
  );
};

/*
  ====================================
  SwitchToggleHandle
  ====================================
*/

export type SwitchToggleHandleProps = USwitchToggleHandleRootProps & {
  icon?: (className: string) => ReactNode;
};
export const SwitchToggleHandle = ({ icon, ...props }: SwitchToggleHandleProps) => {
  const switchProps = useSwitchInternalProvider();
  const switchToggleProps = useSwitchToggleInternalProvider();

  return (
    <SwitchToggleHandleLayout
      renderRoot={(children, className) => (
        <USwitchToggleHandleRoot {...props} className={className}>
          {children}
        </USwitchToggleHandleRoot>
      )}
      styleProps={{ className: props.className, switchProps, switchToggleProps }}
      iconSlot={icon && <USwitchToggleHandleIcon>{icon}</USwitchToggleHandleIcon>}
    />
  );
};
