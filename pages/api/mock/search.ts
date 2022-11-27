import type { NextApiRequest, NextApiResponse } from 'next';
import mock from './search.mock.json';

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(mock);
}
