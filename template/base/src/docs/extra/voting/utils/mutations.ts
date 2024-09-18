import { useQueryClient } from "@tanstack/react-query";
import {
  getOptionsControllerGetAllOptionsWithSubOptionsQueryKey,
  useVotesControllerCreate,
  getVotesControllerGetQueryKey,
} from "./api";

export const useSendVoteMutation = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();

  return useVotesControllerCreate({
    mutation: {
      onSuccess: () => {
        onSuccess?.();
        queryClient.invalidateQueries({ queryKey: getOptionsControllerGetAllOptionsWithSubOptionsQueryKey() });
        queryClient.invalidateQueries({ queryKey: getVotesControllerGetQueryKey() });
      },
      onError: (error) => {
        console.error("Error submitting votes:", error);
      },
    },
  });
};
