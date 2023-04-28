import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '@/app/libs/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
          try {
            const { id } = req.query;
            const reference = await prisma.reference.findMany({
              where: { entityId: parseInt(id as string) },
            });
            res.status(200).json(reference);
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
          }
          break;
        default:
          res.status(405).json({ message: 'Method not allowed' });
      }
}