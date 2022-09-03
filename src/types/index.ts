export interface IQueryParams {
  location: string;
  checkIn: string;
  checkOut: string;
  limit?: number;
  currency?: string;
}

export interface IHotelResponse {
  hotelId: number;
  stars: number;
  hotelName: string;
  priceFrom: string;
}

export interface IHotel extends IHotelResponse {
  selected: boolean;
  days: number;
  checkIn: string;
}

export enum EStatusLoading {
  idle = "idle",
  loading = "loading",
  success = "success",
  failure = "failure",
}

export interface IAuthData {
  isLogin: boolean;
  info: {
    email: string;
  };
}
