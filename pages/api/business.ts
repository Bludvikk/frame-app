import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/app/libs/prisma';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        console.log('THIS IS POST')
        // Extract required data from the request body
        const { name, businessTypeId, appID, providerId, organizationId } = req.body;

        // Create the new MasterBusiness record
        const newBusiness = await prisma.masterBusiness.create({
          data: {
            name,
            businessTypeId,
            appID,
            providerId,
            organizationId,
          },
        });

        console.log(newBusiness)
        res.status(201).json(newBusiness);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating new MasterBusiness record.' });
      }
      break;
      case 'GET':
        try {
          const { organizationId } = req.query;
          const businesses = await prisma.masterBusiness.findMany({
            where: { organizationId: Number(organizationId) }
          });
          console.log(businesses)
          res.status(200).json({ businesses });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Something went wrong' });
        }
        break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}