import type { RenderRoot } from "../../../base/src/_utils";
import type { SwitchToggleHandleType, SwitchToggleType, SwitchType } from "~/base/src/styles/switch";
import { switchToggleDefaults } from "~/base/src/styles/switch";
import { tv } from "../../../configs/tailwind-variants/eve/extendedTV";

export const switchToggleHandleClass = ({ className }: SwitchToggleHandleType) => {
  return `group/switchToggleHandle bg-white shadow-sm rounded-[50px] group-data-[disabled=true]/switch:bg-base-50 group-data-[disabled=true]/switch:shadow-none ${className}`;
};

export const switchToggleHandleIconClass = ({ className, switchToggleProps }: SwitchToggleHandleType) => {
  const iconClass = tv({
    base: `
w-5
  group-data-[invalid=true]/switch:w-5
  h-5
  group-data-[invalid=true]/switch:h-5
  text-base-600
  group-data-[disabled=true]/switch:text-base-400
  group-data-[invalid=true]/switch:text-danger-500
  group-data-[disabled=true]/switch:group-data-[state=checked]/switchToggle:text-base-400
  group-data-[invalid=true]/switch:group-data-[state=checked]/switchToggle:text-danger-500
`,
    variants: {
      toggleColor: {
        primary: "group-data-[state=checked]/switchToggle:text-primary-950",
        success: "group-data-[state=checked]/switchToggle:text-success-600",
      },
    },

    defaultVariants: { toggleColor: switchToggleDefaults.color },
  });
  return iconClass({
    class: className,

    toggleColor: switchToggleProps?.color,
  });
};

export const SwitchToggleHandleLayout = ({
  renderRoot,
  styleProps: { className },
  iconSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SwitchToggleHandleType;
  iconSlot: React.ReactNode;
}) => renderRoot(<>{iconSlot}</>, `h-6 w-6 flex flex-row justify-center items-center ${className}`);

export const switchToggleClass = ({ className, switchToggleProps }: SwitchToggleType) => {
  const rootClass = tv({
    base: `
group/switchToggle
  bg-base-200
  active:bg-base-200
  group-data-[disabled=true]/switch:bg-base-200
  rounded-[50px]
  transition-all
  hover:bg-base-300
  data-[ring=true]:bg-base-300
  data-[ring=true]:shadow-focus-ring
  group-data-[invalid=true]/switch:border-solid
  group-data-[invalid=true]/switch:border-danger-500
  group-data-[invalid=true]/switch:border-1
  group-data-[disabled=true]/switch:data-[ring=true]:shadow-none
  group-data-[disabled=true]/switch:group-data-[invalid=true]/switch:[border:unset]
  group-data-[invalid=true]/switch:data-[state=checked]:[border:unset]
  group-data-[invalid=true]/switch:data-[state=checked]:bg-danger-500
  group-data-[invalid=true]/switch:active:data-[state=checked]:bg-danger-500
  group-data-[invalid=true]/switch:hover:data-[state=checked]:bg-danger-700
  group-data-[invalid=true]/switch:data-[ring=true]:data-[state=checked]:bg-danger-700
  group-data-[disabled=true]/switch:data-[state=checked]:bg-base-200
  group-data-[disabled=true]/switch:hover:bg-base-200
  group-data-[disabled=true]/switch:data-[ring=true]:bg-base-200
`,
    variants: {
      toggleColor: {
        primary:
          "data-[state=checked]:bg-primary-950 active:data-[state=checked]:bg-primary-950 hover:data-[state=checked]:bg-primary-800 data-[ring=true]:data-[state=checked]:bg-primary-800",
        success:
          "data-[state=checked]:bg-success-500 active:data-[state=checked]:bg-success-500 hover:data-[state=checked]:bg-success-600 data-[ring=true]:data-[state=checked]:bg-success-600",
      },
    },

    defaultVariants: { toggleColor: switchToggleDefaults.color },
  });
  return rootClass({
    class: className,
    toggleColor: switchToggleProps?.color,
  });
};

export const SwitchToggleLayout = ({
  renderRoot,
  styleProps: { className },
  handleSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SwitchToggleType;
  handleSlot: React.ReactNode;
}) =>
  renderRoot(<>{handleSlot}</>, `h-7 w-12 flex flex-row items-center px-[2px] data-[toggled]:justify-end ${className}`);

export const switchClass = ({ className }: SwitchType) => {
  return `group/switch  ${className}`;
};

export const switchLabelClass = ({ className }: SwitchType) => {
  return `text-base-950 text-sm font-text font-medium group-data-[disabled=true]/switch:text-base-400 ${className}`;
};

export const switchAsteriskClass = ({ className }: SwitchType) => {
  return `
  hidden
  group-data-[invalid=true]/switch:group-data-[required=true]/switch:[display:unset]
  group-data-[invalid=true]/switch:group-data-[required=true]/switch:text-danger-500
  group-data-[invalid=true]/switch:group-data-[required=true]/switch:text-xs
  group-data-[invalid=true]/switch:group-data-[required=true]/switch:font-text
  group-data-[invalid=true]/switch:group-data-[required=true]/switch:font-medium
  group-data-[disabled=true]/switch:group-data-[invalid=true]/switch:group-data-[required=true]/switch:text-base-400
  ${className}
  `;
};

export const switchDescriptionClass = ({ className }: SwitchType) => {
  return `text-base-700 text-sm font-text font-normal group-data-[invalid=true]/switch:text-danger-500 group-data-[disabled=true]/switch:text-base-400 group-data-[disabled=true]/switch:group-data-[invalid=true]/switch:text-base-400 ${className}`;
};

export const SwitchLayout = ({
  renderRoot,
  styleProps: { className },
  toggleSlot,
  labelSlot,
  asteriskSlot,
  descriptionSlot,
}: {
  renderRoot: RenderRoot;
  styleProps: SwitchType;
  toggleSlot: React.ReactNode;
  labelSlot: React.ReactNode;
  asteriskSlot: React.ReactNode;
  descriptionSlot: React.ReactNode;
}) =>
  renderRoot(
    <>
      <div className="h-fit w-fit flex flex-row gap-2">
        {toggleSlot}
        <div className="h-fit w-fit flex flex-row gap-1">
          {labelSlot}
          {asteriskSlot}
        </div>
      </div>
      <div className="h-fit w-fit flex flex-col pl-14">{descriptionSlot}</div>
    </>,
    `h-fit w-fit flex flex-col [&>*:not(:first-child)]:[margin-top:-2px] ${className}`,
  );
