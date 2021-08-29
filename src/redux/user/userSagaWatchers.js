import { call, put, takeLeading } from "redux-saga/effects";
import { Creators, Types } from "./userActions";

import { getUsersApi } from "../../services/api/users";

export function* getUsersRequest() {
  try {
    const response = yield call(getUsersApi);
    yield put(Creators.getUsersRequestSuccess(response));
  } catch (error) {
    yield put(Creators.getUsersRequestFailure(error));
  }
}

export function* watchUsers() {
  yield takeLeading(Types.GET_USERS_REQUEST, getUsersRequest);
}
