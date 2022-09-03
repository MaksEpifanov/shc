import styled from "styled-components";
import { ReactComponent as StarSvg } from "../../assets/images/star.svg";

export const StStars = styled.div`
  margin-top: 3px;

  display: flex;
  gap: 3px;
`;

export const StActiveStar = styled(StarSvg)`
  fill: #cdbc1e;
`;
export const StPassiveStar = styled(StarSvg)`
  fill: #6c684587;
`;
