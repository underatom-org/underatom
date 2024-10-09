import { Rate, RateProps } from "../../../../components/ark-ui/rate/Rate.atoms";
import { Body, Label } from "../../../../components/no-headless/typography/Typography.atoms";
import { Divider } from "../../../../components/radix/divider/Divider.atoms";

export type VotingItemProps = Omit<RateProps, "onValueChange"> & {
  label: string;
  optionId: number;
  subOptionId: number;
  value: number;
  onValueChange?: (optionId: number, subOptionId: number, newValue: number) => void;
  withVoting?: boolean;
  progress?: number;
  withDivider?: boolean;
};

export const VotingItem = ({
  label,
  optionId,
  subOptionId,
  value,
  onValueChange,
  withVoting = true,
  withDivider = true,
  progress,
  ...props
}: VotingItemProps) => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "9px 0px", flex: "1" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 6, justifyContent: "center", alignItems: "center", textAlign: "left" }}>
            <div style={{ width: "36px" }}>
              {progress !== undefined && <Label color="secondary">{progress}%</Label>}
            </div>
            <Label color="secondary">{label}</Label>
          </div>

          {withVoting && (
            <Rate
              value={value}
              onValueChange={
                onValueChange ? (details) => onValueChange(optionId, subOptionId, details.value) : undefined
              }
              {...props}
            />
          )}
        </div>
      </div>
      {withDivider && <Divider orientation="horizontal" />}
    </>
  );
};
