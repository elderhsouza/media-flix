import type { NextApiRequest, NextApiResponse } from 'next'
import { ItemDataType } from 'rsuite/esm/@types/common';

export type SearchResultResponse = {
  tvdb_id: number,
  name: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;

  const searchResults = await fetch(
    `${process.env.MF_API_BASE_URL}/search?query=${query}&type=series&language=en&limit=10`,
    { headers: {'Authorization': `Bearer ${process.env.MF_TVDB_ACCESS_TOKEN}`}})
  .then(res => res.json())
  .then(res => res.data.map(
    (searchResult: SearchResultResponse): ItemDataType => {
      return {
        label: searchResult.name,
        value: searchResult.tvdb_id
      }
    }));

  res.status(200).json(searchResults);
}
