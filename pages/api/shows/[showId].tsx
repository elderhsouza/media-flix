
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOiIiLCJhcGlrZXkiOiIzOTAwMjE4Zi1mY2NhLTQ4NGYtODBjMy04YjRjYzIxYzI4YWIiLCJjb21tdW5pdHlfc3VwcG9ydGVkIjp0cnVlLCJleHAiOjE2NzEzNDU1MDMsImdlbmRlciI6IiIsImhpdHNfcGVyX2RheSI6MTAwMDAwMDAwLCJoaXRzX3Blcl9tb250aCI6MTAwMDAwMDAwLCJpZCI6IjEwODg1NiIsImlzX21vZCI6ZmFsc2UsImlzX3N5c3RlbV9rZXkiOmZhbHNlLCJpc190cnVzdGVkIjpmYWxzZSwicGluIjoiUlEyMFNZWlYiLCJyb2xlcyI6W10sInRlbmFudCI6InR2ZGIiLCJ1dWlkIjoiIn0.WnykxtqoK7A2NoFgstQ6IfPyed3IGrQ0CpSQb49YyP2wQKT6kNXcI1YMlRW4Rv2buNe1fnN5-kemabODRRpzDW6o0VT4bfnOKTu3hkPEbXUSE-ZIcHvk5HWRpKQrjaqWnQQWSstX5ojT-8le8OmfMLHTL4VW613FiAqJ0Yj70yIUf2lwPPLuY3qiioPHPgZC0SX6xXypQ08KtCT6U8HCXi9uTr6Xt8ofh--uzFwWjdUBCHeHbi3ZOys4QuHIIl864n9d3oSnBZVXZOCeZieprVH5C3xK_16Yh7Kc1BxJLkXfW9D2mZT2TX_tyDg1ubiTJcDaj9MOoTWWe4lFVu2W_mKw2FDyFXCQfN10kJrFIOAd4riE6s9VCzUCbRH6X4-aE8HO6vfkKrarDTlmyEzGRKMvkvxfDj4Qm81ZO2BD_Aa2K403LTPDVQiTzJyyd0DKSfXt27mbSq4BhzXW3bWqJuw88mTwHsR9EMCwzfZdrpjwvZ5T7fh6YTnctVjFvkAVgm_1NfCgPwzjKSfg5giNnnxGwYh0C3yYBLtQlTGlz3GfEgI3wDRS0tzz7_cPFa60FK2O-jxxVZmeuLwaQ_dBqXfXDTBHiqVZfqkVNw2wvGdT3yC08HNfaBUNOXntxxKJgsHnWfcR4oEy8ynGZXdfx-CgKQIz9D76UtuhGqJBvQ0';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { showId } = req.query;

  const show = await fetch(
    `https://api4.thetvdb.com/v4/series/${showId}`,
    { headers: {'Authorization': `Bearer ${accessToken}`}})
  .then(res => res.json())
  .then(res => res.data);

  res.status(200).json(show);
}
