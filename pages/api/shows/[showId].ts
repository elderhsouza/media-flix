import type { NextApiRequest, NextApiResponse } from 'next';
import buildShow from '../../../lib/factory/show';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { showId } = req.query;

  try {
    const response = await fetch(
      `${process.env.MF_TVDB_API_BASE_URL}/series/${showId}/extended`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MF_TVDB_ACCESS_TOKEN}`,
        },
      }
    );

    const show = await response.json();
    res.status(200).json(buildShow(show.data));
  } catch (error) {
    res.status(500).json(error);
  }
}
