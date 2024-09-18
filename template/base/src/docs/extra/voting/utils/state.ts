import { useQuery } from "@tanstack/react-query";
import { doesSessionExist } from "supertokens-web-js/recipe/session";
import { useOptionsControllerGetAllOptionsWithSubOptions, useVotesControllerGet } from "./api";

export const getLoggedInStateKey = () => ["session"];
export const useLoggedInState = () => {
  return useQuery({
    queryKey: getLoggedInStateKey(),
    queryFn: () => doesSessionExist(),
  });
};

export const useConfirmedUserVotes = () => {
  const { data: isLoggedIn } = useLoggedInState();

  return useVotesControllerGet({
    query: {
      enabled: !!isLoggedIn,
    },
  });
};

export const useOptions = () => {
  return useOptionsControllerGetAllOptionsWithSubOptions();
};
