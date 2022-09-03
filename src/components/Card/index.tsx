/** Карточка отеля
 *
 * @param {hotel} объект отеля, откуда берутся данные
 * @param {handleFavorites} добавление/удаление в/из избранного
 * @param {favorite} меняет вид карточки под избранное
 */

import { HomeSvg } from "assets/images";
import { formatWord } from "utils/formats";
import type { IHotel } from "types";

import Stars from "../Stars";
import {
  StCard,
  StDate,
  StHeader,
  StIcon,
  StMain,
  StRatingPrice,
  StHeart,
} from "./Card.styles";

interface ICardProps {
  hotel: IHotel;
  handleFavorites: () => void;
  favorite?: boolean;
}

const Card: React.FC<ICardProps> = ({
  hotel,
  handleFavorites,
  favorite = false,
}) => (
  <StCard selected={favorite}>
    {!favorite ? (
      <StIcon>
        <HomeSvg />
      </StIcon>
    ) : null}
    <StMain>
      <StHeader>
        <span>{hotel.hotelName}</span>
        <StHeart selected={hotel.selected} onClick={() => handleFavorites()} />
      </StHeader>
      <StDate>
        {hotel.checkIn}
        <div />
        {hotel.days} {formatWord(hotel.days, ["день", "дня", "дней"])}
      </StDate>
      <StRatingPrice>
        <Stars rating={hotel.stars} />
        <div>
          Price: <span>{hotel.priceFrom}</span>
        </div>
      </StRatingPrice>
    </StMain>
  </StCard>
);

export default Card;
