import {
  FC,
  InputHTMLAttributes,
  HTMLInputTypeAttribute,
  ChangeEventHandler,
} from "react";
import { StLabel, StInput } from "./Input.styles";

/** Input элемент
 *
 * @param {type}
 * @param
 * @param
 * @param
 * @param
 * @param
 */

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  label: string;
  name: string;
  value?: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<IInputProps> = ({
  type,
  name,
  label,
  value,
  onChange,
  placeholder,
}) => (
  <StLabel htmlFor={name}>
    {label}
    <StInput
      type={type}
      id={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </StLabel>
);

export default Input;
