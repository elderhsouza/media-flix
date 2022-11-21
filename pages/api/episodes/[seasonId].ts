import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { seasonId } = req.query;
  try {
    const episodes = await fetch(
      `${process.env.MF_API_BASE_URL}/seasons/${seasonId}/extended`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MF_TVDB_ACCESS_TOKEN}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res.data.episodes);

    res.status(200).json(episodes);
  } catch (error) {
    res.status(500).json({ error });
  }
}
