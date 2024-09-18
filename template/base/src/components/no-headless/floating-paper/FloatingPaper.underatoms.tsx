import { floatingPaperClass, FloatingPaperStyleProps } from "../../../styles/floating-paper";

export type UFloatingPaperRootProps = FloatingPaperStyleProps &
  React.ComponentPropsWithoutRef<"div"> & {
    invalid?: boolean;
  };
export const UFloatingPaperRoot = ({ className, ...props }: UFloatingPaperRootProps) => {
  const rootClass = floatingPaperClass({ className, floatingPaperProps: props });
  return (
    <div {...props} data-invalid={!!props.invalid} className={rootClass}>
      {props.children}
    </div>
  );
};
