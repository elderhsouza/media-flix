import type { Show, ShowResponse } from '../types/Show';
import buildSeasons from './season';

export default function buildShow(
  { id, name, image, firstAired, lastAired, overview, status, seasons }: ShowResponse
): Show {
  const builtSeasons = buildSeasons(seasons);

  return Object.freeze({
    id, name, image, firstAired, lastAired, overview,
    status: status.name,
    seasons: builtSeasons,
    seasonCount: builtSeasons.length,
  });
}