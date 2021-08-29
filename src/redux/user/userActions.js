import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    getUsersRequest: [],
    getUsersRequestSuccess: ["response"],
    getUsersRequestFailure: ["error"],
  },
  {}
);
