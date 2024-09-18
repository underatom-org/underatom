import { ReactNode, useRef } from "react";
import { ToggleButton, ToggleButtonProps } from "react-aria-components";
import * as Avatar from "@radix-ui/react-avatar";
import { Check } from "../../../assets/Icons";
import { getGenericContext } from "../../../_utils";
import {
  AvatarToggleStyleProps,
  avatarToggleCheckClass,
  avatarToggleCheckIconClass,
  avatarToggleClass,
  avatarToggleContentClass,
  avatarToggleContentIconClass,
  avatarToggleContentImageClass,
  avatarToggleContentLabelClass,
} from "../../../styles/avatar-toggle";

/*
  ====================================
  AvatarToggle
  ====================================
*/

export const { Provider: AvatarToggleInternalProvider, useComponentContext: useAvatarToggleInternalProvider } =
  getGenericContext<UAvatarToggleRootProps>("AvatarToggleInternalProvider");

export type UAvatarToggleRootProps = AvatarToggleStyleProps &
  ToggleButtonProps &
  React.RefAttributes<HTMLButtonElement> & {
    innerRef?: React.RefObject<HTMLButtonElement>;
    className?: string;
  };

export const UAvatarToggleRoot = (props: UAvatarToggleRootProps) => {
  const refs = useRef<HTMLButtonElement>(null);
  const { innerRef = refs } = props;
  return (
    <AvatarToggleInternalProvider value={props}>
      <Avatar.Root asChild>
        <ToggleButton
          {...props}
          ref={innerRef}
          className={avatarToggleClass({ className: props.className, avatarToggleProps: props })}
        >
          {props.children}
        </ToggleButton>
      </Avatar.Root>
    </AvatarToggleInternalProvider>
  );
};

/*
  ====================================
  AvatarToggleContent
  ====================================
*/

export type UAvatarToggleContentRootProps = {
  children: ReactNode;
  className?: string;
};
export const UAvatarToggleContentRoot = (props: UAvatarToggleContentRootProps) => {
  const avatarToggleProps = useAvatarToggleInternalProvider();
  return (
    <div className={avatarToggleContentClass({ className: props.className, avatarToggleProps })}>{props.children}</div>
  );
};

export type UAvatarToggleContentFallbackProps = Avatar.AvatarFallbackProps;
export const UAvatarToggleContentFallback = (props: UAvatarToggleContentFallbackProps) => {
  return <Avatar.Fallback {...props} />;
};

export type UAvatarToggleContentLabelProps = {
  children: ReactNode;
};
export const UAvatarToggleContentLabel = ({ children }: UAvatarToggleContentLabelProps) => {
  const avatarToggleProps = useAvatarToggleInternalProvider();
  return <span className={avatarToggleContentLabelClass({ avatarToggleProps })}>{children}</span>;
};

export type UAvatarToggleContentIconProps = {
  /** Icon render function */
  children: (className: string) => ReactNode;
};
export const UAvatarToggleContentIcon = ({ children }: UAvatarToggleContentIconProps) => {
  const avatarToggleProps = useAvatarToggleInternalProvider();
  return <>{children(avatarToggleContentIconClass({ avatarToggleProps }))}</>;
};

export type UAvatarToggleContentImageProps = Avatar.AvatarImageProps;
export const UAvatarToggleContentImage = (props: UAvatarToggleContentImageProps) => {
  const avatarToggleProps = useAvatarToggleInternalProvider();
  return (
    <Avatar.Image
      className={avatarToggleContentImageClass({ className: props.className, avatarToggleProps })}
      {...props}
    />
  );
};

/*
  ====================================
  AvatarToggleCheck
  ====================================
*/

export type UAvatarToggleCheckRootProps = {
  /** Avatar content */
  children: ReactNode;
  className?: string;
};
export const UAvatarToggleCheckRoot = ({ className, children }: UAvatarToggleCheckRootProps) => {
  const avatarToggleProps = useAvatarToggleInternalProvider();
  return <div className={avatarToggleCheckClass({ className, avatarToggleProps })}>{children}</div>;
};

export const UAvatarToggleCheckIcon = () => {
  const avatarToggleProps = useAvatarToggleInternalProvider();
  return <Check className={avatarToggleCheckIconClass({ avatarToggleProps })} />;
};
