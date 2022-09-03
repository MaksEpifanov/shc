export const formatMoney = (number: number): string =>
  number.toLocaleString("ru", {
    style: "currency",
    currency: "rub",
    maximumFractionDigits: 0,
  });

export const formatDateToLong = (date: Date): string => {
  const RuDateFormat = new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return RuDateFormat.format(date).slice(0, -2);
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};

export const formatStringToNumber = (str: string): number =>
  Number(str.replace(/[^0-9.-]+/g, ""));

export const formatWord = (number: number, words: Array<string>) => {
  const value = Math.abs(number) % 100;
  const num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];
  return words[2];
};
