import styled from "styled-components";

export const StHotelList = styled.div`
  height: 530px;
  display: flex;
  flex-direction: column;
  gap: 11px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    width: 2px;
    background-color: #e7e7e7;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #41522e;
    height: 100px;
  }
`;

export const StError = styled.div``;
