/* eslint-disable react/jsx-props-no-spreading */
import { useNavigate } from "react-router-dom";
import { useForm, FieldValues, FieldErrors } from "react-hook-form";

import { login } from "store/features/auth/auth.slice";
import { useAppDispatch } from "store/store.hooks";

import {
  StSubmit,
  StInputs,
  StForm,
  StLabel,
  StErrors,
} from "./LoginValidate.styles";

const LoginValidate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data: FieldValues) => {
    dispatch(login(data.login));
    navigate("/");
  };

  const validateEmail = (errorsObj: FieldErrors): string | undefined => {
    if (errorsObj.login) {
      return (
        String(errorsObj?.login?.message) ||
        "Поле логин обязательно к заполнению"
      );
    }
    return undefined;
  };

  const validatePassword = (errorsObj: FieldErrors): string | undefined => {
    if (errorsObj.password) {
      return (
        String(errorsObj?.password?.message) ||
        "Поле пароль обязательно к заполнению"
      );
    }
    return undefined;
  };

  return (
    <StForm onSubmit={handleSubmit(onSubmit)} noValidate>
      <StInputs>
        <StLabel error={Boolean(errors?.login)}>
          Логин
          <input
            type="email"
            {...register("login", {
              required: true,
              pattern: {
                value:
                  // eslint-disable-next-line no-useless-escape
                  /^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/,
                message: "Некорректный email - example@gmail.com",
              },
            })}
          />
          <StErrors>
            <p>{validateEmail(errors)}</p>
          </StErrors>
        </StLabel>
        <StLabel error={Boolean(errors?.password)}>
          Пароль
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Минимум 8 символов",
              },
            })}
          />
          <StErrors>
            <p>{validatePassword(errors)}</p>
          </StErrors>
        </StLabel>
      </StInputs>
      <StSubmit type="submit" text="Войти" disabled={!isValid} />
    </StForm>
  );
};

export default LoginValidate;
