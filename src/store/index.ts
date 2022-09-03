import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

import searchParams from "./features/searchParams/searchParams.slice";
import favorites from "./features/favorites/favorites.slice";
import hotels from "./features/hotels/hotels.slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    searchParams,
    favorites,
    hotels,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
