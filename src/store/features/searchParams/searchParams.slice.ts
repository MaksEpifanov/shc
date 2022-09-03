import { createSlice } from "@reduxjs/toolkit";
import { formatDate } from "utils/formats";

interface IState {
  location: string;
  date: {
    checkIn: string;
    checkOut: string;
  };
  days: number;
}

const currDate = new Date();
const nextDate = new Date(Date.now() + 3600 * 1000 * 24);

const initialState: IState = {
  location: "Москва",
  days: 1,
  date: {
    checkIn: formatDate(currDate),
    checkOut: formatDate(nextDate),
  },
};

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setDays: (state, action) => {
      state.days = action.payload;
    },
    setCheckInDate: (state, action) => {
      state.date.checkIn = action.payload;
    },
    setCheckOutDate: (state, action) => {
      state.date.checkOut = action.payload;
    },
  },
});

export const { setLocation, setDays, setCheckInDate, setCheckOutDate } =
  searchParamsSlice.actions;

export default searchParamsSlice.reducer;
