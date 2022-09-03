import { ArrowUpSvg, ArrowDownSvg } from "assets/images";
import { StFilter, StFilterSelect } from "./Filter.styles";

/** Кнопка фильтр
 *
 * @param {?active}
 * @param {?up}
 * @param {text}
 * @param {onClick}
 * @param {disabled}
 */

interface IFilter {
  active?: boolean;
  up?: boolean;
  text: string;
  onClick: () => void;
  disabled: boolean;
}

const Filter: React.FC<IFilter> = ({
  active = false,
  text,
  onClick,
  up,
  disabled,
}) => (
  <StFilter active={active} onClick={onClick} disabled={disabled}>
    {text}
    <StFilterSelect up={up} active={active} disabled={disabled}>
      <ArrowUpSvg />
      <ArrowDownSvg />
    </StFilterSelect>
  </StFilter>
);

export default Filter;
