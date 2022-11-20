import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;

  try {
    const searchResults = await fetch(
      `${process.env.MF_API_BASE_URL}/search?query=${query}&type=series&language=en&limit=7`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MF_TVDB_ACCESS_TOKEN}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res.data);

    res.status(200).json(searchResults);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}
