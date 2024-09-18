import { WindowStyleProps, windowClass } from "../../../styles/window";

export type UWindowRootProps = WindowStyleProps & React.ComponentPropsWithoutRef<"div">;
export const UWindowRoot = (props: UWindowRootProps) => {
  return <div {...props} className={windowClass({ className: props.className, windowProps: props })} />;
};
