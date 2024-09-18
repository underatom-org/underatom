import { FloatingPaperStyleProps } from "../../../styles/floating-paper";
import { UFloatingPaperRoot, UFloatingPaperRootProps } from "./FloatingPaper.underatoms";

export type FloatingPaperProps = UFloatingPaperRootProps & Partial<FloatingPaperStyleProps>;
export const FloatingPaper = (props: FloatingPaperProps) => {
  return <UFloatingPaperRoot {...props} />;
};
