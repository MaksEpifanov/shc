/**
 * Поисковой компонент
 *
 * Изменяет в стейте поисковые параметры
 */

import { useEffect, useState } from "react";

import { Button, Input } from "components";

import useDebounce from "hooks/useDebounce";
import { fetchHotels } from "store/features/hotels/hotels.slice";
import { useAppDispatch, useAppSelector } from "store/store.hooks";
import {
  setDays,
  setCheckInDate,
  setLocation,
} from "store/features/searchParams/searchParams.slice";

import { StSearch } from "./Search.styles";

const Search = () => {
  const dispatch = useAppDispatch();
  const {
    days,
    location,
    date: { checkIn },
  } = useAppSelector((state) => state.searchParams);

  const [locationText, setLocationText] = useState(location);
  const debLocationText = useDebounce(locationText);

  useEffect(() => {
    dispatch(setLocation(debLocationText));
  }, [debLocationText, dispatch]);

  return (
    <StSearch>
      <Input
        type="text"
        label="Локация"
        name="location"
        placeholder="Введите город"
        value={locationText}
        onChange={(e) => setLocationText(e.target.value)}
      />
      <Input
        type="date"
        label="Дата заселения"
        name="date"
        value={checkIn}
        onChange={(e) => dispatch(setCheckInDate(e.target.value))}
      />
      <Input
        type="number"
        label="Количество дней"
        name="days"
        value={days}
        onChange={(e) => dispatch(setDays(e.target.value))}
      />
      <Button text="Найти" onClick={() => dispatch(fetchHotels())} />
    </StSearch>
  );
};

export default Search;
