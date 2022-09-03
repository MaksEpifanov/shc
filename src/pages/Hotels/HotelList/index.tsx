/**
 * Загрузка и отображение отелей/спинера/ошибки
 *
 * вытаскивает из стейта поисковые параметры
 * делает запрос в соответствии с параметрами поиска
 * отображает данные в зависимости от статуса загрузки
 */

import { Card, Spinner } from "components";
import { useAppSelector, useAppDispatch } from "store/store.hooks";
import { EStatusLoading, IHotel } from "types";
import { toggleFavorites } from "store/features/hotels/hotels.slice";
import {
  addFavorite,
  deleteFavorite,
} from "store/features/favorites/favorites.slice";

import { StHotelList } from "./HotelList.styles";

const HotelList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: hotelsData, status } = useAppSelector(({ hotels }) => hotels);
  const { data: favoritesData } = useAppSelector(({ favorites }) => favorites);

  const handleFavorites = (hotel: IHotel) => {
    dispatch(toggleFavorites(hotel.hotelId));
    if (favoritesData.find((elem) => elem.hotelId === hotel.hotelId)) {
      dispatch(deleteFavorite(hotel.hotelId));
    } else {
      dispatch(addFavorite({ ...hotel, selected: true }));
    }
  };

  let renderData: React.ReactNode = <Spinner />;
  if (status === EStatusLoading.success) {
    renderData = hotelsData.map((hotel) => (
      <Card
        key={hotel.hotelId}
        hotel={hotel}
        handleFavorites={() => handleFavorites(hotel)}
      />
    ));
  }
  if (status === EStatusLoading.failure) {
    renderData = <div>Error...</div>;
  }

  return <StHotelList>{renderData}</StHotelList>;
};

export default HotelList;
