import styled from "styled-components";

export const StLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 7px;

  font-weight: 500;
`;

export const StInput = styled.input`
  padding: 0 15px;
  height: 50px;

  border: 1px solid #c9cacc;
  border-radius: 4px;
  color: var(--main-text-color);
  font-weight: 300;

  &::placeholder {
    color: var(--main-text-color);
    font-weight: 300;
  }
`;
