import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHotel, EStatusLoading } from "types";

import i2 from "assets/carousel/2.jpg";
import i3 from "assets/carousel/3.jpg";
import i4 from "assets/carousel/4.jpg";
import i5 from "assets/carousel/5.jpg";
import i6 from "assets/carousel/6.jpg";
import i7 from "assets/carousel/7.jpg";

interface IInitialState {
  data: IHotel[];
  info: {
    checkIn: string;
    location: string;
  };
  images: string[];
  status: EStatusLoading;
  error: null | string;
}

const initialState: IInitialState = {
  data: [],
  info: {
    checkIn: "",
    location: "",
  },
  status: EStatusLoading.idle,
  error: null,
  images: [i2, i3, i4, i5, i6, i7],
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    fetchHotels: (state) => {
      state.status = EStatusLoading.loading;
      state.error = null;
    },
    fetchHotelsSuccess: (state, action) => {
      state.status = EStatusLoading.success;
      state.error = null;
      state.data = action.payload;
    },
    fetchHotelsFailed: (state, action) => {
      state.status = EStatusLoading.failure;
      state.error = action.payload;
      state.data = [];
    },
    setInfo: (state, action) => {
      state.info.checkIn = action.payload.checkIn;
      state.info.location = action.payload.location;
    },
    toggleFavorites: (state, action: PayloadAction<number>) => {
      state.data = state.data.map((hotel) => {
        if (hotel.hotelId === action.payload) {
          return { ...hotel, selected: !hotel.selected };
        }
        return hotel;
      });
    },
  },
});

export const {
  fetchHotels,
  fetchHotelsSuccess,
  fetchHotelsFailed,
  setInfo,
  toggleFavorites,
} = hotelsSlice.actions;

export default hotelsSlice.reducer;
