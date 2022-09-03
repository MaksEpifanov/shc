import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  isLogin: boolean;
  info: {
    email: string;
  };
}

const initialState: IInitialState = {
  isLogin: false,
  info: {
    email: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLogin = true;
      state.info.email = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.info.email = "";
    },
    updateAuth: (state, action: PayloadAction<IInitialState>) => {
      state.isLogin = action.payload.isLogin;
      state.info = action.payload.info;
    },
  },
});

export const { login, logout, updateAuth } = authSlice.actions;

export default authSlice.reducer;
