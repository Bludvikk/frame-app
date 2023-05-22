import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/app/libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("POST request received"); // Check if the endpoint is being reached

  switch (req.method) {
    case "POST":
      try {
        // Extract required data from the request body
        const { name, businessTypeId, appID, providerId, organizationId } =
          req.body;

        console.log(req.body); // Check the received request body data

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

        console.log(newBusiness); // Check the created MasterBusiness record

        res.status(200).json(newBusiness);
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: "Error creating new MasterBusiness record." });
      }
      break;
    case "GET":
      try {
        const { organizationId } = req.query;
        const businesses = await prisma.masterBusiness.findMany({
          where: { organizationId: Number(organizationId) },
          include: {
            provider: {
              select: {
                name: true,
              },
            },
            app: {
              select: {
                name: true,
              },
            },
            businessType: {
              select: {
                name: true,
              },
            },
          },
        });
        console.log(businesses);
        res.status(200).json(businesses);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
      }
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
