import { UWindowRoot, UWindowRootProps } from "./Window.underatoms";

export type WindowProps = UWindowRootProps;
export const Window = (props: WindowProps) => {
  return <UWindowRoot {...props} />;
};
