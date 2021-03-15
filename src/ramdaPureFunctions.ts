import * as R from "ramda";

// // Задание 1
export type Team = { name: string; score: number };

// eslint-disable-next-line
// @ts-ignore
export const getTopName = R.compose(R.prop("name"), R.reduce(R.maxBy(R.prop("score")), { score: -Infinity }));

// // Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

// eslint-disable-next-line
// @ts-ignore
export const createQs = R.compose(R.concat("?"), R.join("&"), R.map(R.join("=")), R.toPairs);

// eslint-disable-next-line
// @ts-ignore
// Задание 3
export const parseQs = R.compose(R.fromPairs, R.map(R.split("=")), R.split("&"), R.tail);
