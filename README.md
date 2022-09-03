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
   - добавление данных в localStorage
   - используется HOC для "защиты" route
   - вытягиваются данные из localStorage, проверяются, если проверку не проходит, перенаправление на страницу авторизации (React router)
   - при выходу происходит удаление из localStorage и перенаправление на страницу авторизации

2. Redux Saga

   - Поисковые параметры

     - сага реагирует на изменение даты заселения и количества дней. Пересчитывает дату выселения.

   - Отели

     - сага реагирует на action запроса данных. При получении, изменяет структуру каждого отеля, добавляя поля, после добавляет в стейт.

   - Избранное

     - сага реагирует на изменения фильтров, после сортирует избранное.

3. Загрузка данных.

   - Происходит в соответствии с параметрами поиска из стейта (поначалу - дефолтные)
   - Axios
