import { createArray } from "utils/createArray";
import { StActiveStar, StPassiveStar, StStars } from "./Stars.styles";

/**
 * Создает компонент из 5 звезд
 * @param {rating} количество активных звезд
 */

const Stars: React.FC<{ rating: number }> = ({ rating }) => {
  const renderStar = createArray(5).map((num) =>
    num + 1 <= rating ? <StActiveStar key={num} /> : <StPassiveStar key={num} />
  );

  return <StStars>{renderStar}</StStars>;
};

export default Stars;
