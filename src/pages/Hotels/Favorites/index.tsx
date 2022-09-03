/**
 * Отображение избранного из стейта
 *
 * передача ф-ции для удаления из избранного
 */

import { Card } from "components";
import { useAppSelector, useAppDispatch } from "store/store.hooks";
import { deleteFavorite } from "store/features/favorites/favorites.slice";
import { toggleFavorites } from "store/features/hotels/hotels.slice";

import type { IHotel } from "types";

import Filters from "../Filters";
import { StFavorites, StTitle, StFavoritesList } from "./Favorites.styles";

const Favorites = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.favorites);

  const handleFavorites = (hotel: IHotel) => {
    dispatch(deleteFavorite(hotel.hotelId));
    dispatch(toggleFavorites(hotel.hotelId));
  };

  const renderData = data.map((hotel) => (
    <Card
      key={hotel.hotelId}
      handleFavorites={() => handleFavorites(hotel)}
      favorite
      hotel={hotel}
    />
  ));

  return (
    <StFavorites>
      <StTitle>Избранное</StTitle>
      <Filters />
      <StFavoritesList>{renderData}</StFavoritesList>
    </StFavorites>
  );
};

export default Favorites;
