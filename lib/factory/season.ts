import type { Season, SeasonResponse } from '../types/Season';

export default function buildSeasons(seasons: SeasonResponse[]): Season[] {
  return seasons
    .filter((season) => season.type.type === 'official' && season.number > 0)
    .map(({ id, number, image }) => ({ id, number, image }));
}