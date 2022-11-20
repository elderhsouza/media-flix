import type { NextApiRequest, NextApiResponse } from "next";

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

    res.status(200).json(show);
  } catch (error) {
    res.status(500).json(error);
  }
}
