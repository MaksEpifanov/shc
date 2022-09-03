import styled from "styled-components";
import { StWrapperSection } from "../../../styles/common.styles";

export const StMain = styled(StWrapperSection)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StTitle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  font-weight: 500;
  font-size: 32px;
`;

export const StDate = styled.div`
  font-weight: 400;
  font-size: 24px;
  color: #41522e;
`;

export const StCarousel = styled.div`
  height: 150px;
  max-width: 600px;
  cursor: pointer;
`;

export const StFavoritesCount = styled.div`
  font-size: 17px;
  span {
    font-weight: 500;
  }
`;
