import styled from "styled-components";

import { ReactComponent as FavoritesSvg } from "../../assets/images/heart.svg";

export const StCard = styled.div<{ selected: boolean }>`
  padding: ${({ selected }) => (selected ? "16px 0" : "16px 16px 16px 0")};
  margin-right: ${({ selected }) => (selected ? "0" : "14px")};

  border-bottom: 1px solid rgba(135, 135, 135, 0.2);

  display: flex;
  gap: 24px;
`;

export const StIcon = styled.div`
  padding: 15px;
  width: 64px;
  height: 64px;
  background-color: rgba(65, 82, 46, 0.05);
  border-radius: 50%;
`;

export const StHeart = styled(FavoritesSvg)<{ selected: boolean }>`
  width: 21px;
  height: 18px;
  fill: ${({ selected }) => (selected ? "#E55858" : "transparent")};
  stroke: ${({ selected }) => (selected ? "none" : "#C4C4C4")};

  cursor: pointer;

  transition: fill 0.3s, transform 0.2s;

  &:hover {
    fill: ${({ selected }) => (selected ? "#e55858c2" : "#ebebeb")};
    stroke: ${({ selected }) => (selected ? "#04040494" : "#c4c4c4")};
  }

  &:active {
    transform: scale(0.8);
  }
`;

export const StMain = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  max-width: 100%;
`;

export const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 17px;

  span {
    max-width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  svg {
    width: 10%;
    margin-left: 5px;
  }
`;

export const StDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  font-weight: 400;
  color: #878787;
  div {
    width: 9px;
    height: 1px;
    background-color: #c4c4c4;
  }
`;

export const StRatingPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;

  span {
    margin-left: 16px;
    font-size: 17px;
    font-weight: 400;
  }
`;
