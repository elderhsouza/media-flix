import { Season } from "./Season";

export type ShowResponse = {
  id: string;
  name: string;
  image: string;
  firstAired: string;
  lastAired: string;
  overview: string;
  status: { name: string };
  seasons: [];
};

export type Show = Omit<ShowResponse, "status" | "seasons"> & {
  status: string;
  seasons: Season[];
  seasonCount: number;
};
