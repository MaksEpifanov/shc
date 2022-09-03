import { FieldErrors } from "react-hook-form";

export const validateEmail = (errorsObj: FieldErrors): string | undefined => {
  if (!errorsObj.login) return undefined;
  return (
    String(errorsObj?.login?.message) || "Поле логин обязательно к заполнению"
  );
};

export const validatePassword = (
  errorsObj: FieldErrors
): string | undefined => {
  if (!errorsObj.password) return undefined;
  return (
    String(errorsObj?.password?.message) ||
    "Поле пароль обязательно к заполнению"
  );
};
