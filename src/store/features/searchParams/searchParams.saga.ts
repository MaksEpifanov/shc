import { takeEvery, put, select } from "redux-saga/effects";

import { formatDate } from "utils/formats";
import type { RootState } from "store";

import { setCheckInDate, setDays, setCheckOutDate } from "./searchParams.slice";

function* workerCheckOutDate() {
  const {
    searchParams: {
      date: { checkIn },
      days,
    },
  }: RootState = yield select((state) => state);

  const checkInTimeStamp = new Date(checkIn).getTime();
  const checkOutDate = formatDate(
    new Date(checkInTimeStamp + 3600 * 1000 * 24 * days)
  );

  yield put(setCheckOutDate(checkOutDate));
}

export function* watchChangeSearchParamsSaga() {
  yield takeEvery(setCheckInDate, workerCheckOutDate);
  yield takeEvery(setDays, workerCheckOutDate);
}

export default watchChangeSearchParamsSaga;
