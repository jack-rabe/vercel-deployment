// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  const kittySchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  const Kitten =
    mongoose.models.Kitten || mongoose.model("Kitten", kittySchema);

  const uri = "mongodb://127.0.0.1:27017/jack";
  await mongoose.connect(uri).catch((err) => console.error(err));
  const kittens = await Kitten.find({});

  const resData = kittens.map((kitty) => {
    return {
      name: kitty.name,
      age: kitty.age,
    };
  });
  console.log(resData);

  res.status(200).json(resData);
}
