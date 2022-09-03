import { StButton } from "./Button.styles";

/** Компонент стилизованной кнопки
 *
 * @param {text} текст внутри кнопки
 * @param {?onClick} ф-ция при нажатии
 * @param {?disabled} отключение кнопки
 * @param {type} тип
 */

interface IButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<IButtonProps> = ({
  text,
  onClick = () => {},
  disabled = false,
  type = "button",
}) => (
  <StButton type={type} onClick={onClick} disabled={disabled}>
    {text}
  </StButton>
);

export default Button;
