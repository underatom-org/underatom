import React from "react";
import { Textarea, TextareaBox } from "../../../../components/react-aria/textarea/Textarea.atoms";
import { Button } from "../../../../components/react-aria/button/Button.atoms";
import { LoginButton } from "../../LoginButton";
import { useLoggedInState } from "../utils/state";

type FeedbackSectionProps = {
  remainingStars: number;
  maxStars: number;
  onSendVoteAndFeedback: () => void;
  handleFeedbackTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  feedbackText: string;
};

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({
  remainingStars,
  maxStars,
  onSendVoteAndFeedback,
  feedbackText,
  handleFeedbackTextChange,
}) => {
  const { data: isLoggedIn } = useLoggedInState();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <Textarea
        label="Something else to add? (optional)"
        textareaProps={{
          placeholder: "Make your own suggestion",
          value: feedbackText,
          onChange: handleFeedbackTextChange,
        }}
        boxSlot={<TextareaBox className="min-h-[74px]" />}
      />
      <div style={{ display: "flex", alignSelf: "end" }}>
        {isLoggedIn ? (
          <Button isDisabled={remainingStars === maxStars} onPress={onSendVoteAndFeedback}>
            Send Vote
          </Button>
        ) : (
          <LoginButton text="Sign in to vote" />
        )}
      </div>
    </div>
  );
};
