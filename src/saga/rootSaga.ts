import { put, takeEvery, all, delay, call, select } from "redux-saga/effects";

import { watchlogin } from "./login-saga/loginSaga";
import { helloSaga } from "./hello-saga/helloSaga";

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchlogin(), watchIncrementAsync()]);
}
