import type { NextApiRequest, NextApiResponse } from 'next';
import { SeasonResponse, Season } from '../../../lib/types/Season';
import { Show, ShowResponse } from '../../../lib/types/Show';

function buildSeasons(seasons: SeasonResponse[]): Season[] {
  return seasons
    .filter((season) => season.type.type === 'official' && season.number > 0)
    .map((season) => ({
      ...season,
      type: season.type.type,
    }));
}

function buildShow(show: ShowResponse): Show {
  const builtSeasons = buildSeasons(show.seasons);

  return Object.freeze({
    ...show,
    status: show.status.name,
    seasons: builtSeasons,
    seasonCount: builtSeasons.length,
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { showId } = req.query;

  try {
    const show = await fetch(
      `${process.env.MF_API_BASE_URL}/series/${showId}/extended`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MF_TVDB_ACCESS_TOKEN}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res.data);

    res.status(200).json(buildShow(show));
  } catch (error) {
    res.status(500).json(error);
  }
}
