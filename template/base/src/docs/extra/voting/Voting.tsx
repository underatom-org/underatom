import { VotingPowerCard } from "./components/VotingPowerCard";
import { VotingAccordion } from "./components/VotingAccordion";
import { FeedbackSection } from "./components/FeedbackSection";
import { ThankYouCard } from "./components/ThankYouCard";
import { Body, H3 } from "../../../components/no-headless/typography/Typography.atoms";
import { useCallback, useMemo } from "react";
import { UserVote } from "./utils/types";
import { MAX_STARS, VOTE_EXPIRY_DAYS } from "./utils/constants";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useLoggedInState, useConfirmedUserVotes, useOptions } from "./utils/state";
import { useSendVoteMutation } from "./utils/mutations";
import { useTemporaryToggle } from "./utils/hooks";

const userVotesAtom = atomWithStorage<UserVote[]>("userVotes", []);
const feedbackTextAtom = atomWithStorage<string>("feedbackText", "");
const remainingStarsAtom = atomWithStorage<number>("remainingStars", MAX_STARS);

const Voting = () => {
  // global state
  const { data: isLoggedIn } = useLoggedInState();
  const [userVotes, setUserVotes] = useAtom(userVotesAtom);
  const [feedbackText, setFeedbackText] = useAtom(feedbackTextAtom);
  const [remainingStars, setRemainingStars] = useAtom(remainingStarsAtom);

  // local state
  const [isInvalid, setIsInvalid] = useTemporaryToggle(false);
  console.log("isInvalid", isInvalid);

  // api state
  const { data: confirmedUserVotes } = useConfirmedUserVotes();
  const { data: options } = useOptions();

  // derived state
  const hasVoted = useMemo(() => {
    if (!confirmedUserVotes || !confirmedUserVotes[0]?.createdAt) return false;

    const voteDate = new Date(confirmedUserVotes[0].createdAt);
    const currentDate = new Date();
    const daysDifference = (currentDate.getTime() - voteDate.getTime()) / (1000 * 60 * 60 * 24);

    return daysDifference < VOTE_EXPIRY_DAYS;
  }, [confirmedUserVotes]);

  // handlers
  const handleRatingChange = useCallback(
    (optionId: number, subOptionId: number | undefined, requestedValue: number) => {
      const existingVoteIndex = userVotes.findIndex(
        (vote) => vote.optionId === optionId && vote.subOptionId === subOptionId,
      );

      const currentVote = userVotes[existingVoteIndex];
      const currentValue = currentVote ? currentVote.value : 0;
      const requestedValueChange = requestedValue - currentValue;
      const totalStarsUsed = userVotes.reduce((sum, vote) => {
        return sum + vote.value;
      }, 0);

      let newValue = requestedValue;
      if (requestedValueChange + totalStarsUsed > MAX_STARS) {
        newValue = MAX_STARS - totalStarsUsed + currentValue;
        setIsInvalid(true);
      }

      const newVotes = [...userVotes];
      const newVote = newVotes[existingVoteIndex];

      if (newVote) newVote.value = newValue;
      else newVotes.push({ optionId, subOptionId, value: newValue });

      const newTotalStarsUsed = newVotes.reduce((sum, vote) => sum + vote.value, 0);

      setRemainingStars(MAX_STARS - newTotalStarsUsed);
      setUserVotes(newVotes);
    },
    [userVotes],
  );
  const handleClearVotes = () => {
    setUserVotes([]);
    setRemainingStars(MAX_STARS);
    setIsInvalid(false);
  };
  const handleSendVoteAndFeedback = () => {
    sendVoteMutation.mutate({
      data: {
        votes: userVotes
          .filter((vote) => vote.value > 0)
          .map((vote) => ({
            optionId: vote.optionId,
            subOptionId: vote.subOptionId,
            value: vote.value,
          })),
        feedback: feedbackText,
      },
    });
  };

  // mutations
  const sendVoteMutation = useSendVoteMutation({
    onSuccess: () => {
      handleClearVotes();
    },
  });

  if (hasVoted && isLoggedIn)
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 16 }}>
        <ThankYouCard />
        <VotingAccordion data={options || []} withVoting={false} />
      </div>
    );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "0 16px" }}>
      <VotingPowerCard remainingStars={remainingStars} onClear={handleClearVotes} invalid={isInvalid} />
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <H3>Shape the product Your way</H3>
          <Body>Your feedback drives our innovation. Help us decide the direction of our next features</Body>
        </div>
        <VotingAccordion
          data={options || []}
          handleRatingChange={handleRatingChange}
          userVotes={userVotes}
          withVoting={isLoggedIn}
        />
      </div>
      <FeedbackSection
        remainingStars={remainingStars}
        maxStars={MAX_STARS}
        onSendVoteAndFeedback={handleSendVoteAndFeedback}
        handleFeedbackTextChange={(e) => setFeedbackText(e.target.value)}
        feedbackText={feedbackText}
      />
    </div>
  );
};

export const votingRouteObj = {
  path: "/voting",
  group: "getting-started",
  label: "Voting",
  component: Voting,
};
