import styled from "styled-components";
import { StWrapperSection } from "../../styles/common.styles";
import background from "../../assets/images/background.png";

export const StLoginPage = styled.div`
  width: 100vw;
  height: 100vh;

  background: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StBackdropBlock = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
`;

export const StLoginBlock = styled(StWrapperSection)`
  width: 409px;
  height: 382px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
`;
