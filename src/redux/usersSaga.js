import { takeLatest, call, put, all } from "redux-saga/effects";
import { API_CALL_REQUEST } from "./user/userTypes";
import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./user/userActions";

function* getUsersWatcher() {
  yield takeLatest(API_CALL_REQUEST, getUsersSaga);
}

function* getUsersSaga() {
  try {
    const data = yield call(fetchUsers);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* usersSaga() {
  yield all([getUsersWatcher()]);
}
