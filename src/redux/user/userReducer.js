import {
  API_CALL_REQUEST,
  API_CALL_FAILURE,
  API_CALL_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case API_CALL_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };

    case API_CALL_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
