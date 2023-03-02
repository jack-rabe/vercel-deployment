// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const kittySchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  const Kitten = mongoose.model("Kitten", kittySchema);
  const silence = new Kitten({ name: "Silence", age: 10 });

  const uri = "mongodb://127.0.0.1:27017/jack";
  await mongoose.connect(uri).catch((err) => console.error(err));
  await silence.save();

  console.log(req);
  res.status(200).json({ name: "John Doe" });
}
