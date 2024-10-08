import Axios, { AxiosError, AxiosRequestConfig } from "axios";
import { API_BASE_URL } from "./constants";

export const AXIOS_INSTANCE = Axios.create({ baseURL: API_BASE_URL });

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled by React Query");
  };

  return promise;
};

export default customInstance;

export interface ErrorType<Error> extends AxiosError<Error> {}
