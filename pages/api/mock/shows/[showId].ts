import type { NextApiRequest, NextApiResponse } from 'next';
import buildShow from '../../../../lib/factory/show';
import type { ShowResponse } from '../../../../lib/types/Show';
import delayAPIResponse from '../../../../lib/utils/delayAPIResponse';
import mock from './show.mock.json';

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse
) {
  return await delayAPIResponse(res, buildShow(mock.data as unknown as ShowResponse));
}
