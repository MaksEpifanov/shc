import { ArrowSvg } from "assets/images";
import { useAppSelector } from "store/store.hooks";
import { formatDateToLong, formatWord } from "utils/formats";

import HotelList from "../HotelList";
import Carousel from "../Carousel";

import {
  StMain,
  StHeader,
  StTitle,
  StDate,
  StFavoritesCount,
  StCarousel,
} from "./Main.styles";

const Main = () => {
  const { location, checkIn } = useAppSelector((state) => state.hotels.info);
  const { count } = useAppSelector((state) => state.favorites);

  return (
    <StMain>
      <StHeader>
        <StTitle>
          Отели
          <ArrowSvg />
          {location || "Москва"}
        </StTitle>
        <StDate>
          {checkIn
            ? formatDateToLong(new Date(checkIn))
            : formatDateToLong(new Date())}
        </StDate>
      </StHeader>
      <StCarousel>
        <Carousel />
      </StCarousel>
      <StFavoritesCount>
        Добавлено в Избранное: <span>{count}</span>{" "}
        {formatWord(count, ["отель", "отеля", "отелей"])}
      </StFavoritesCount>
      <HotelList />
    </StMain>
  );
};

export default Main;
