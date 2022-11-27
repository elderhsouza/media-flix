import { NextApiResponse } from 'next';

export default async function delayAPIResponse(
  response: NextApiResponse,
  data: unknown,
  delay: number = 2000
) {
  return new Promise(
    () => {
      setTimeout(() => Promise.resolve(response.status(200).json(data)), delay);
    }
  );
}