/**
 * Главная страница по пути "/"
 *
 * Происходить загрузка дефолтных данных
 */

import { useEffect } from "react";

import { useAppDispatch } from "store/store.hooks";
import { fetchHotels } from "store/features/hotels/hotels.slice";

import Main from "./Main";
import Search from "./Search";
import Favorites from "./Favorites";

import { StHotelsPage, StLeft } from "./HotelsPage.styles";

const HotelsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  return (
    <StHotelsPage>
      <StLeft>
        <Search />
        <Favorites />
      </StLeft>
      <Main />
    </StHotelsPage>
  );
};

export default HotelsPage;
