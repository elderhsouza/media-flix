export type SeasonResponse = {
  id: string;
  type: { type: string };
  number: number;
  image: string;
};

export type Season = Omit<SeasonResponse, "type"> & {
  type: string;
};
