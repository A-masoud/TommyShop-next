// pages/api/auth/signup.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "../../../src/lib/mongoose";
import { User } from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: "Email and password required" });

  await connectToDB();

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) return res.status(409).json({ error: "User already exists" });

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  const user = new User({ name, email: email.toLowerCase(), password: hashed });
  await user.save();

  return res.status(201).json({ ok: true });
}
