// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (originalTeam: OriginalTeam): ExpectedTeam => ({
  name: "New York Badgers",
  league: originalTeam.league,
  roster: 25,
});

// Задание 2
export type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (originalArray: SomeArray): SomeArray => [
  "two",
  ...originalArray.slice(2),
  5,
];

// Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeam3 = (originalTeam: Team): Team => ({
  name: originalTeam.name,
  captain: {
    name: originalTeam.captain.name,
    age: originalTeam.captain.age + 1,
  },
});
