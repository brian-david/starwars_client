export type Homeworld = {
  name: string;
};

export type Person = {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: Homeworld;
};

export type PeoplePage = {
  count: number;
  nextPage: string;
  previousPage: string;
  people: Person[];
};
