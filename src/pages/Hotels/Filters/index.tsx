/**
 * Компонент с фильтрами
 *
 * Фильтрация избранного
 */

import { Filter } from "components";
import {
  setFilterCategory,
  setFilterDirection,
} from "store/features/favorites/favorites.slice";
import { useAppSelector, useAppDispatch } from "store/store.hooks";

import { StFilters } from "./Filters.styles";

const Filters = () => {
  const { filter, count } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const handleFilter = (type: "rating" | "price") => {
    if (filter.select !== type) {
      dispatch(setFilterCategory(type));
    } else {
      dispatch(setFilterDirection());
    }
  };

  return (
    <StFilters>
      <Filter
        text="Рейтинг"
        active={filter.select === "rating"}
        disabled={count < 1}
        up={filter.isUpDirection}
        onClick={() => handleFilter("rating")}
      />
      <Filter
        text="Цена"
        active={filter.select === "price"}
        up={filter.isUpDirection}
        disabled={count < 1}
        onClick={() => handleFilter("price")}
      />
    </StFilters>
  );
};

export default Filters;
