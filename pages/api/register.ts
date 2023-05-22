import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { prisma } from "@/app/libs/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
  switch (req.method) {
    case "POST":
      const body = req.body;
      const { 
        email,
        firstName,
        lastName,
        contactNumber,
        password,
        role,
        status,
       } = body;

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          contactNumber,
          hashedPassword,
          role,
          status,
        }
      });
        res.status(200).json(user)
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
