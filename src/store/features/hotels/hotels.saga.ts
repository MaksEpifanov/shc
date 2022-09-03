import { takeLatest, call, put, select, takeEvery } from "redux-saga/effects";

import type { RootState } from "store";
import type { IHotel } from "types";
import getHotels from "services/hotels.api";
import { formatMoney, formatDateToLong } from "utils/formats";

import {
  fetchHotels,
  fetchHotelsFailed,
  fetchHotelsSuccess,
  setInfo,
} from "./hotels.slice";

function* workerHotels() {
  try {
    // Вытаскиваем из стейта поисковые параметры
    const {
      searchParams: {
        location,
        date: { checkIn, checkOut },
        days,
      },
      favorites: { data: favoritesData },
    }: RootState = yield select((state) => state);

    // Запрос данных с учетом параметров
    const response: IHotel[] = yield call(getHotels, {
      location: location || "Москва",
      checkIn,
      checkOut,
    });

    // Вносим дополнительные св-ва в каждый объект отеля из поисковых параметров
    const formattedData: IHotel[] = response.map((hotel) => ({
      ...hotel,
      selected: Boolean(
        favoritesData.find((favorite) => favorite.hotelId === hotel.hotelId)
      ),
      days,
      checkIn: formatDateToLong(new Date(checkIn)),
      priceFrom: formatMoney(Number(hotel.priceFrom)),
    }));

    yield put(fetchHotelsSuccess(formattedData));
  } catch {
    yield put(fetchHotelsFailed("Error"));
  }
}

// Изменяем Info в стейте при запросе данных
function* workerHotelsInfo() {
  const {
    searchParams: {
      location,
      date: { checkIn },
    },
  }: RootState = yield select((state) => state);

  yield put(setInfo({ location, checkIn }));
}

export function* watchFetchHotelsSaga() {
  yield takeLatest(fetchHotels, workerHotels);
  yield takeEvery(fetchHotels, workerHotelsInfo);
}

export default watchFetchHotelsSaga;
