import { all, fork } from "redux-saga/effects";
import { watchFetchHotelsSaga } from "./features/hotels/hotels.saga";
import { watchChangeSearchParamsSaga } from "./features/searchParams/searchParams.saga";
import { watchChangeFilterCategory } from "./features/favorites/favorites.saga";
import { watchAuth } from "./features/auth/auth.saga";

export default function* rootSaga() {
  yield all([
    fork(watchFetchHotelsSaga),
    fork(watchChangeSearchParamsSaga),
    fork(watchChangeFilterCategory),
    fork(watchAuth),
  ]);
}
