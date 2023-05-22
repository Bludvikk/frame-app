
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/app/libs/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const organizations = await prisma.masterOrganization.findMany();
        res.status(200).json(organizations);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
      break;
    case 'POST':
          try {
    const { name } = req.body;
    const code = name.replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string, index: number) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');

    const organization = await prisma.masterOrganization.create({
      data: {
        name,
        code,
      },
    });

    res.status(200).json(organization);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { name } = req.body;
//     const code = name.replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string, index: number) => {
//       return index === 0 ? word.toLowerCase() : word.toUpperCase();
//     }).replace(/\s+/g, '');

//     const organization = await prisma.masterOrganization.create({
//       data: {
//         name,
//         code,
//       },
//     });

//     res.status(200).json(organization);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// }