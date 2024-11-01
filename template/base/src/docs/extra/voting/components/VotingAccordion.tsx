import React from "react";
import { VotingItem } from "./VotingItem";
import { UserVote } from "../utils/types";
import { MAX_STARS } from "../utils/constants";
import {
  AccordionItem,
  AccordionItemHeaderBadge,
  AccordionItemHeaderRate,
  AccordionItemHeaderVoting,
  Accordion,
} from "../../../../components/radix/accordion/Accordion.atoms";
import { OptionDto, OptionWithSubOptionDto } from "../utils/api";

export type VotingAccordionProps = {
  data: OptionWithSubOptionDto[];
  userVotes?: UserVote[];
  handleRatingChange?: (optionId: number, subOptionId: number | undefined, requestedValue: number) => void;
  withVoting?: boolean;
};

export const VotingAccordion: React.FC<VotingAccordionProps> = ({
  data,
  userVotes,
  handleRatingChange,
  withVoting = true,
}) => {
  const getVoteValue = (optionId: number, subOptionId: number | null) => {
    if (!userVotes) return 0;

    const vote = userVotes.find(
      (v) =>
        v.optionId === optionId && (subOptionId === null ? v.subOptionId === undefined : v.subOptionId === subOptionId),
    );
    return vote ? vote.value : 0;
  };

  return (
    <Accordion
      type="multiple"
      variant="separated"
      itemSlots={data.map((option: OptionWithSubOptionDto) => {
        const votedSubOptionsCount = option.subOptions.filter(
          (subOption: OptionDto) => getVoteValue(option.id, subOption.id) > 0,
        ).length;

        const optionVoteValue = getVoteValue(option.id, null);

        return (
          <AccordionItem
            key={option.id}
            value={option.id.toString()}
            headerSlot={
              <AccordionItemHeaderVoting
                progressProps={{ value: option.progress }}
                label={option.label}
                rateSlot={
                  withVoting && (
                    <AccordionItemHeaderRate
                      count={MAX_STARS}
                      value={optionVoteValue}
                      onValueChange={(details) => handleRatingChange!(option.id, undefined, details.value)}
                    />
                  )
                }
                badgeSlot={
                  votedSubOptionsCount > 0 && <AccordionItemHeaderBadge label={votedSubOptionsCount.toString()} />
                }
              />
            }
            contentSlot={
              <>
                {option.subOptions.map((subOption: OptionDto, index) => {
                  const subOptionVoteValue = getVoteValue(option.id, subOption.id);
                  const isLastItem = index == option.subOptions.length - 1;
                  return (
                    <VotingItem
                      withVoting={withVoting}
                      withDivider={!isLastItem}
                      key={subOption.id}
                      label={subOption.label}
                      optionId={option.id}
                      subOptionId={subOption.id}
                      value={subOptionVoteValue}
                      progress={subOption.progress}
                      onValueChange={handleRatingChange}
                    />
                  );
                })}
              </>
            }
          />
        );
      })}
    />
  );
};
