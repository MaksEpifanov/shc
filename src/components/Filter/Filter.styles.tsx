import styled from "styled-components";

export const StFilter = styled.button<{
  active?: boolean;
  up?: boolean;
  disabled: boolean;
}>`
  padding: 5px 8px;

  display: flex;
  align-items: center;
  gap: 6px;

  border: 1px solid
    ${({ active, disabled }) => (!disabled && active ? "#41522E" : "#e5e5e5")};
  border-radius: 4px;
  background-color: transparent;
  color: ${({ active }) => (active ? "#41522E" : "#99a0a3")};

  cursor: pointer;

  :disabled {
    color: #99a0a3;
    cursor: auto;
  }
`;

export const StFilterSelect = styled.div<{
  up?: boolean;
  active?: boolean;
  disabled: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18px;

  svg {
    fill: #41522e;
    fill-opacity: 0.3;

    :first-child {
      fill-opacity: ${({ up, active, disabled }) =>
        !disabled && active && up ? "1" : "0.3"};
    }
    :last-child {
      fill-opacity: ${({ up, active, disabled }) =>
        !disabled && active && !up ? "1" : "0.3"};
    }
  }
`;
