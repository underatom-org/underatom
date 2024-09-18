import {
  AlertActionLayout,
  AlertActionWithIconLayout,
  AlertDismissLayout,
  AlertLayout,
  AlertStatusLayout,
  AlertWithStatusLayout,
} from "../../../styles/alert";
import {
  UAlertActionIcon,
  UAlertActionLabel,
  UAlertActionRoot,
  UAlertActionRootProps,
  UAlertDescription,
  UAlertDismissIcon,
  UAlertDismissRoot,
  UAlertDismissRootProps,
  UAlertIcon,
  UAlertRoot,
  UAlertRootProps,
  UAlertStatusIcon,
  UAlertStatusRoot,
  UAlertStatusRootProps,
  UAlertSubtitle,
  UAlertTitle,
  useAlertInternalProvider,
} from "./Alert.underatoms";

/*
  ====================================
  Alert
  ====================================
*/

export type AlertProps = Omit<UAlertRootProps, "children"> & {
  icon: (className: string) => React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  primaryActionSlot?: React.ReactNode;
  secondaryActionSlot?: React.ReactNode;
  dismissSlot?: React.ReactNode;
};
export const Alert = ({
  icon,
  title,
  subtitle,
  description,
  primaryActionSlot,
  secondaryActionSlot,
  dismissSlot,
  ...props
}: AlertProps) => {
  return (
    <AlertLayout
      renderRoot={(children, className) => (
        <UAlertRoot {...props} className={className}>
          {children}
        </UAlertRoot>
      )}
      styleProps={{ className: props.className, alertProps: props }}
      iconSlot={<UAlertIcon>{icon}</UAlertIcon>}
      titleSlot={<UAlertTitle>{title}</UAlertTitle>}
      subtitleSlot={<UAlertSubtitle>{subtitle}</UAlertSubtitle>}
      descriptionSlot={<UAlertDescription>{description}</UAlertDescription>}
      dismissSlot={dismissSlot}
      actionSlot1={primaryActionSlot}
      actionSlot2={secondaryActionSlot}
    />
  );
};

export type AlertWithStatusProps = Omit<UAlertRootProps, "children"> & {
  icon: (className: string) => React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  primaryActionSlot?: React.ReactNode;
  secondaryActionSlot?: React.ReactNode;
  statusSlot: React.ReactNode;
  dismissSlot?: React.ReactNode;
};
export const AlertWithStatus = ({
  title,
  subtitle,
  description,
  primaryActionSlot,
  secondaryActionSlot,
  statusSlot,
  dismissSlot,
  ...props
}: AlertWithStatusProps) => {
  return (
    <AlertWithStatusLayout
      renderRoot={(children, className) => (
        <UAlertRoot {...props} className={className}>
          {children}
        </UAlertRoot>
      )}
      styleProps={{ className: props.className, alertProps: props }}
      titleSlot={<UAlertTitle>{title}</UAlertTitle>}
      subtitleSlot={<UAlertSubtitle>{subtitle}</UAlertSubtitle>}
      descriptionSlot={<UAlertDescription>{description}</UAlertDescription>}
      dismissSlot={dismissSlot}
      actionSlot1={primaryActionSlot}
      actionSlot2={secondaryActionSlot}
      statusSlot={statusSlot}
    />
  );
};

/*
  ====================================
  AlertDismiss
  ====================================
*/

export type AlertDismissProps = Omit<UAlertDismissRootProps, "children">;
export const AlertDismiss = (props: AlertDismissProps) => {
  const alertProps = useAlertInternalProvider();
  return (
    <AlertDismissLayout
      renderRoot={(children, className) => (
        <UAlertDismissRoot {...props} className={className}>
          {children}
        </UAlertDismissRoot>
      )}
      styleProps={{ className: props.className, alertProps }}
      iconSlot={<UAlertDismissIcon />}
    />
  );
};

/*
  ====================================
  AlertAction
  ====================================
*/

export type AlertActionProps = UAlertActionRootProps;
export const AlertAction = ({ children, ...props }: AlertActionProps) => {
  const alertProps = useAlertInternalProvider();
  return (
    <AlertActionLayout
      renderRoot={(children, className) => (
        <UAlertActionRoot {...props} className={className}>
          {children}
        </UAlertActionRoot>
      )}
      styleProps={{ className: props.className, alertProps, alertActionProps: props }}
      labelSlot={<UAlertActionLabel>{children}</UAlertActionLabel>}
    />
  );
};

export type AlertActionWithIconProps = UAlertActionRootProps & {
  icon: (className: string) => React.ReactNode;
};
export const AlertActionWithIcon = ({ children, icon, ...props }: AlertActionWithIconProps) => {
  const alertProps = useAlertInternalProvider();
  return (
    <AlertActionWithIconLayout
      renderRoot={(children, className) => (
        <UAlertActionRoot {...props} className={className}>
          {children}
        </UAlertActionRoot>
      )}
      styleProps={{ className: props.className, alertProps, alertActionProps: props }}
      iconSlot={<UAlertActionIcon>{icon}</UAlertActionIcon>}
      labelSlot={<UAlertActionLabel>{children}</UAlertActionLabel>}
    />
  );
};

/*
  ====================================
  AlertStatus
  ====================================
*/

export type AlertStatusProps = Omit<UAlertStatusRootProps, "children"> & {
  icon: (className: string) => React.ReactNode;
};

export const AlertStatus = ({ icon, ...props }: AlertStatusProps) => {
  const alertProps = useAlertInternalProvider();
  return (
    <AlertStatusLayout
      renderRoot={(children, className) => (
        <UAlertStatusRoot {...props} className={className}>
          {children}
        </UAlertStatusRoot>
      )}
      styleProps={{ className: props.className, alertProps }}
      iconSlot={<UAlertStatusIcon>{icon}</UAlertStatusIcon>}
    />
  );
};
