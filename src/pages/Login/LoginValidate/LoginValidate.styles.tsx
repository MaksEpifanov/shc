import styled from "styled-components";
import Button from "../../../components/Button";

export const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StSubmit = styled(Button)``;

export const StLabel = styled.label<{ error?: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 7px;

  color: ${({ error }) => error && "#eb1717"};
  input {
    padding: 0 15px;
    height: 50px;

    color: ${({ error }) => error && "#eb1717 !important"};
    border: 1px solid #c9cacc;
    border-radius: 4px;

    color: var(--main-text-color);
    font-weight: 300;
  }
`;

export const StErrors = styled.div`
  position: absolute;
  bottom: -20px;
  color: #eb1717;
  font-size: 12px;
`;
