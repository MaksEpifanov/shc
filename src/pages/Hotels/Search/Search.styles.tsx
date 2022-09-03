import styled from "styled-components";
import { StWrapperSection } from "../../../styles/common.styles";

export const StSearch = styled(StWrapperSection)`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 16px;
  }

  & > *:last-child {
    margin-top: 32px;
  }
`;

export default StSearch;
