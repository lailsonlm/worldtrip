/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const continent = [
    { slug: 'america-do-norte' },
    { slug: 'america-do-sul' },
    { slug: 'asia' },
    { slug: 'africa' },
    { slug: 'europa' },
    { slug: 'oceania' }
  ]

  return res.json(continent)
}

