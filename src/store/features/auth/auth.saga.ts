import { takeEvery, select } from "redux-saga/effects";

import type { RootState } from "store";

import { login, logout } from "./auth.slice";

function* workerLogin() {
  const { auth }: RootState = yield select((state: RootState) => state);
  if (auth.isLogin) localStorage.setItem("authData", JSON.stringify(auth));
}

function* workerLogout() {
  yield localStorage.removeItem("authData");
}

export function* watchAuth() {
  yield takeEvery(login, workerLogin);
  yield takeEvery(logout, workerLogout);
}

export default watchAuth;
