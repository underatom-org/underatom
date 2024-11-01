import * as Separator from "@radix-ui/react-separator";
import { dividerClass, DividerStyleProps } from "../../../styles/divider";

export type UDividerRootProps = Separator.SeparatorProps & DividerStyleProps;
export const UDividerRoot = (props: UDividerRootProps) => {
  return <Separator.Root {...props} className={dividerClass({ className: props.className, dividerProps: props })} />;
};
