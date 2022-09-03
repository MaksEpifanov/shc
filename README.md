# Simple Hotel Check - SHC

[Live demo](https://shc-eight.vercel.app)

## Technologies

- TypeScript
- React, Redux Toolkit, Redux saga, React router
- React hook form, React slick, Styled components
- ESlint, Prettier, eslint-config-airbnb

## Description

Выбрал Redux Toolkit, но при необходимости и с vanilla Redux без проблем могу работать.
Попытался везде включить в работу Redux Saga.

1. Авторизация.

   - React hook form для валидации
   - при каждой перезагрузки страницы происходит проверка на наличие данных в localStorage, если есть, диспатч в стейт
   - используется HOC для "защиты" route (вытягиваются данные из стейта, проверяются, если проверку не проходит, перенаправление на страницу авторизации (React router))
   - при выходу диспатч logout

2. Redux Saga

   - Авторизация

     - 2 саги реагируют на вход/выход пользователя(добавляют/удаляют данные из localStorage)

   - Поисковые параметры

     - сага реагирует на изменение даты заселения и количества дней. Пересчитывает дату выселения.

   - Отели

     - сага реагирует на action запроса данных. При получении, изменяет структуру каждого отеля, добавляя поля, после добавляет в стейт.

   - Избранное

     - сага реагирует на изменения фильтров, после сортирует избранное.

3. Загрузка данных.

   - Происходит в соответствии с параметрами поиска из стейта (поначалу - дефолтные)
   - Axios
