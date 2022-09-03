import Slider from "react-slick";
import { useAppSelector } from "store/store.hooks";
import { StCarouselItem } from "./Carousel.styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = useAppSelector((state) => state.hotels.images);

  const renderImages = images.map((image) => (
    <StCarouselItem src={image} key={image} />
  ));

  return (
    <Slider slidesToShow={3.5} infinite={false} swipeToSlide>
      {renderImages}
    </Slider>
  );
};

export default Carousel;
