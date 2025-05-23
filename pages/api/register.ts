// pages/api/register.ts

import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { username, email, password: raw_password, firstName = "", lastName = "" } = req.body;

    // Hash the password
    const password = await bcrypt.hash(raw_password, 10);

    // Create a new user in the database
    try {
      const user = await prisma.user.create({
        data: { username, email, password, firstName, lastName },
      });

      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: `Error creating user; ${error}` });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
