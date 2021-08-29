import { createReducer } from "reduxsauce";

import { Types } from "./userActions";

export const INITIAL_STATE = {
  isLoading: false,
};

export const getUsersRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: true,
    isError: false,
  };
};

export const getUsersRequestSuccess = (state = INITIAL_STATE, { response }) => {
  return {
    ...state,
    isLoading: false,
    isError: false,
    usersInfo: response.data,
  };
};

export const getUsersRequestFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: false,
    isError: true,
  };
};

export const HANDLERS = {
  [Types.GET_USERS_REQUEST]: getUsersRequest,
  [Types.GET_USERS_REQUEST_SUCCESS]: getUsersRequestSuccess,
  [Types.GET_USERS_REQUEST_FAILURE]: getUsersRequestFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
