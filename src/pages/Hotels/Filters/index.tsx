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

  const handleFilterRating = () => {
    if (filter.select !== "rating") {
      dispatch(setFilterCategory("rating"));
    } else {
      dispatch(setFilterDirection());
    }
  };

  const handleFilterPrice = () => {
    if (filter.select !== "price") {
      dispatch(setFilterCategory("price"));
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
        onClick={() => handleFilterRating()}
      />
      <Filter
        text="Цена"
        active={filter.select === "price"}
        up={filter.isUpDirection}
        disabled={count < 1}
        onClick={() => handleFilterPrice()}
      />
    </StFilters>
  );
};

export default Filters;
