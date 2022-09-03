import { takeEvery, select, put } from "redux-saga/effects";

import { formatStringToNumber } from "utils/formats";
import type { RootState } from "store";

import {
  setFilterCategory,
  setFilterDirection,
  updateFavorites,
} from "./favorites.slice";

function* workerSort() {
  const {
    favorites: { filter, data },
  }: RootState = yield select((state: RootState) => state);

  if (filter.select === "rating") {
    if (filter.isUpDirection) {
      const sortedData = [...data].sort((a, b) => a.stars - b.stars);
      yield put(updateFavorites(sortedData));
    } else {
      const sortedData = [...data].sort((a, b) => b.stars - a.stars);
      yield put(updateFavorites(sortedData));
    }
  }
  if (filter.select === "price") {
    if (filter.isUpDirection) {
      const sortedData = [...data].sort(
        (a, b) =>
          formatStringToNumber(a.priceFrom) - formatStringToNumber(b.priceFrom)
      );
      yield put(updateFavorites(sortedData));
    } else {
      const sortedData = [...data].sort(
        (a, b) =>
          formatStringToNumber(b.priceFrom) - formatStringToNumber(a.priceFrom)
      );
      yield put(updateFavorites(sortedData));
    }
  }
}

export function* watchChangeFilterCategory() {
  yield takeEvery(setFilterCategory, workerSort);
  yield takeEvery(setFilterDirection, workerSort);
}

export default watchChangeFilterCategory;
