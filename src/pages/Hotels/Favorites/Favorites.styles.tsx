import styled from "styled-components";
import { StWrapperSection } from "../../../styles/common.styles";

export const StFavorites = styled(StWrapperSection)`
  max-height: 456px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StFavoritesList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const StTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
`;
