import styled from "styled-components";

export const StButton = styled.button`
  height: 50px;
  width: 100%;
  padding: 10px 18px;

  background: linear-gradient(104.34deg, #41522e -15.34%, #be8022 145.95%);
  color: #fff;

  border: none;
  border-radius: 4px;

  cursor: pointer;
  transform: opacity 0.4s;
  &:hover:not(:disabled) {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      linear-gradient(104.34deg, #41522e -15.34%, #be8022 145.95%);
  }

  &:active:not(:disabled) {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(104.34deg, #41522e -15.34%, #be8022 145.95%);
  }

  &:disabled {
    cursor: auto;
    opacity: 0.5;
  }
`;

export const exm = "";
