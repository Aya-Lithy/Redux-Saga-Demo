import { all } from "redux-saga/effects";
import { watchUsers } from "./user/userSagaWatchers";

export default function* rootSaga() {
  yield all([watchUsers()]);
}
