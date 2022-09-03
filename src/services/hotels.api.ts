import http from "./http";
import type { IQueryParams, IHotel } from "../types";

const getHotels = async (params: IQueryParams) => {
  const res = await http.get<IHotel[]>("cache.json", {
    params: { limit: 10, currency: "rub", ...params },
  });
  return res.data;
};

export default getHotels;
