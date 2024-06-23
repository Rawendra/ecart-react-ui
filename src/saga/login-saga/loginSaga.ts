import { put, takeEvery, all, delay, call, select } from "redux-saga/effects";
import { login, signUp } from "../../communication/api";
import { SAGA_EVENTS } from "../../constants/sagaEvents";
import { setLoading } from "../../store/spinnerSlice";
import { signUpRequestPayload } from "./getRequestPayloads";
import { updateBasicAuth } from "../../store/loginSlice";

export function* signUpSaga({ formContent }) {
  const data = signUpRequestPayload(formContent);

  try {
    yield put(setLoading({ isLoading: true }));
    yield delay(1000);
    
    const response = yield call(signUp, data);
  } catch (err) {
    console.error(err);
  } finally {
    yield put(setLoading({ isLoading: false }));
  }
}

export function* loginSaga({ name, password }) {
  yield delay(1000);
  const basicAuth = `Basic ${btoa(name + ":" + password)}`;
  const options = {
    headers: {
      Authorization: basicAuth,
    },
  };
  const response = yield call(login, options);
  if (response.data) {
    yield put(updateBasicAuth({ basicAuth }));
  }
}

export function* watchlogin() {
  yield takeEvery(SAGA_EVENTS.SUBMIT_SIGN_IN_FORM, loginSaga);
  yield takeEvery(SAGA_EVENTS.SUBMIT_SIGN_UP_FORM, signUpSaga);
}
