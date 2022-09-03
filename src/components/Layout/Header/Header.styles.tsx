import styled from "styled-components";

export const StHeader = styled.header`
  height: 92px;
  padding: 0 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StLogo = styled.div`
  font-size: 24px;
  font-weight: 500;
  a {
    text-decoration: none;
    color: var(--text-color);
  }
`;

export const StLogoutBtn = styled.button`
  display: flex;
  gap: 12px;

  border: none;

  background-color: transparent;

  cursor: pointer;

  transition: color 0.3s;

  svg {
    stroke: currentColor;
  }

  &:hover {
    color: #0000007e;
  }

  &:active {
    transform: scale(0.9);
  }
`;
