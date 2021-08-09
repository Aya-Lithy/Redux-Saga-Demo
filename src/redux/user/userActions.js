import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
} from "./userTypes";
import { axios } from "axios";

export const fetchUsersRequest = () => {
  return {
    type: API_CALL_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: API_CALL_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: API_CALL_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (/*dispatch*/) => {
    //dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //const users = response.data;
        response.json();
        //dispatch(fetchUsersSuccess(users));
      })
      .then((json) => json)
      .catch((error) => {
        //dispatch(fetchUsersFailure(error.message));
        console.log("Error fetching photos!", error.message);
      });
  };
};
