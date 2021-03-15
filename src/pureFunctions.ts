// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  return teams.reduce((a, b) => (a.score > b.score ? a : b)).name;
};

// // Задание 2
export type QsObj = Record<string, string | number | boolean | string[] | number[] | boolean[]>;

export const createQs = (qsObj: QsObj): string =>
  "?" +
  Object.entries(qsObj)
    .map((el) => el.join("="))
    .join("&");

// // Задание 3

export const parseQs = (qs: string): QsObj =>
  Object.fromEntries(
    qs
      .substr(1)
      .split("&")
      .map((el) => el.split("="))
  );
