import { IconRosette } from "../../../../assets/Icons";
import { ButtonWithLeftIcon } from "../../../../components/react-aria/button/Button.atoms";
import { X } from "../../../../assets/Icons";
import {
  FloatingPaper,
  FloatingPaperProps,
} from "../../../../components/no-headless/floating-paper/FloatingPaper.atoms";
import "../css/shake.css";
import { Label } from "react-aria-components";
import { useLoggedInState } from "../utils/state";
import { useMediaQuery } from "../../../utils";

export type VotingPowerCardProps = FloatingPaperProps & {
  remainingStars: number;
  maxStars?: number;
  onClear: () => void;
};
export const VotingPowerCard = ({ remainingStars, maxStars = 3, onClear, ...props }: VotingPowerCardProps) => {
  const { data: isLoggedIn } = useLoggedInState();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <FloatingPaper
      {...props}
      style={{ position: "sticky", top: 62, zIndex: 20 }}
      variant="outline"
      className={props.invalid ? "shake" : ""}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#F7F7F7",
          borderRadius: 16,
          gap: isMobile ? 4 : 32,
          padding: "10px 16px",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "stretch",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}
        >
          {isLoggedIn && (
            <div style={{ display: "flex", color: "#D4D4D8" }}>
              {Array.from({ length: maxStars }, (_, index) => {
                if (props.invalid) return <IconRosette key={index} size={32} style={{ color: "#EF4445" }} />;
                if (index >= remainingStars) return <IconRosette key={index} size={32} />;
                return <IconRosette key={index} size={32} fill="currentColor" style={{ color: "#EAAC08" }} />;
              })}
            </div>
          )}
          {isLoggedIn ? (
            <Label>{remainingStars} votes left</Label>
          ) : (
            <Label>Please sign in to access the voting feature.</Label>
          )}
        </div>
        {isLoggedIn && (
          <ButtonWithLeftIcon
            icon={(className) => <X className={className} />}
            size="sm"
            variant="base"
            onPress={onClear}
          >
            Clear
          </ButtonWithLeftIcon>
        )}
      </div>
    </FloatingPaper>
  );
};
