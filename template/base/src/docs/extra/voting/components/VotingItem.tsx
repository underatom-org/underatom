import { Rate, RateProps } from "../../../../components/ark-ui/rate/Rate.atoms";
import { Body, Label } from "../../../../components/no-headless/typography/Typography.atoms";

export type VotingItemProps = Omit<RateProps, "onValueChange"> & {
  label: string;
  optionId: number;
  subOptionId: number;
  value: number;
  onValueChange?: (optionId: number, subOptionId: number, newValue: number) => void;
  withVoting?: boolean;
  progress?: number;
};

export const VotingItem = ({
  label,
  optionId,
  subOptionId,
  value,
  onValueChange,
  withVoting = true,
  progress,
  ...props
}: VotingItemProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "9px 0px", flex: "1" }}>
      <div style={{ display: "flex", gap: 6, justifyContent: "center", alignItems: "center", textAlign: "left" }}>
        <div style={{ width: "36px" }}>{progress !== 0 && <Label color="secondary">{progress}%</Label>}</div>
        <Body>{label}</Body>
      </div>

      {withVoting && (
        <Rate
          value={value}
          onValueChange={onValueChange ? (details) => onValueChange(optionId, subOptionId, details.value) : undefined}
          {...props}
        />
      )}
    </div>
  );
};
