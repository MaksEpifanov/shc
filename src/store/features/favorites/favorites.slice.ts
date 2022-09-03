import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IHotel } from "types";

interface IInitialState {
  data: IHotel[];
  count: number;
  filter: {
    select: "rating" | "price";
    isUpDirection: boolean;
  };
}

const initialState: IInitialState = {
  data: [],
  count: 0,
  filter: {
    select: "rating",
    isUpDirection: true,
  },
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<IHotel>) => {
      state.data.push(action.payload);
      state.count += 1;
    },
    deleteFavorite: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(
        (favorite) => favorite.hotelId !== action.payload
      );
      state.count -= 1;
    },
    setFilterCategory: (state, action: PayloadAction<"rating" | "price">) => {
      state.filter.select = action.payload;
    },
    setFilterDirection: (state) => {
      state.filter.isUpDirection = !state.filter.isUpDirection;
    },
    updateFavorites: (state, action: PayloadAction<IHotel[]>) => {
      state.data = action.payload;
    },
  },
});

export const {
  addFavorite,
  deleteFavorite,
  setFilterCategory,
  setFilterDirection,
  updateFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
