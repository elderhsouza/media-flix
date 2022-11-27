import type { Season } from './Season';

export interface ShowResponse {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly firstAired: string;
  readonly lastAired: string;
  readonly overview: string;
  readonly status: { name: string };
  readonly seasons: [];
}

export type Show = Omit<ShowResponse, 'status' | 'seasons'> & {
  readonly status: string;
  readonly seasons: Season[];
  readonly seasonCount: number;
};
