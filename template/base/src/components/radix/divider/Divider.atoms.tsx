import { DividerLayout } from "../../../styles/divider";
import { UDividerRoot, UDividerRootProps } from "./Divider.underatoms";

export type DividerProps = UDividerRootProps;
export const Divider = (props: DividerProps) => {
  return (
    // <DividerLayout
    //   renderRoot={(children, className) => (
    //     <UDividerRoot {...props} className={className}>
    //       {children}
    //     </UDividerRoot>
    //   )}
    //   styleProps={{ className: props.className, dividerProps: props }}
    // />
    <UDividerRoot {...props} />
  );
};
