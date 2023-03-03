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

  const user = process.env.MONGO_USER;
  const pass = process.env.MONGO_PASS;
  const uri = `mongodb+srv://${user}:${pass}@cluster0.bcacmvv.mongodb.net/test?retryWrites=true&w=majority`;
  await mongoose.connect(uri).catch((err) => console.error(err));
  const kittens = await Kitten.find({});
  console.log(kittens.length);

  const resData = kittens.map((kitty) => {
    return {
      name: kitty.name,
      age: kitty.age,
    };
  });
  console.log(resData);
  mongoose.connection.close();

  res.status(200).json(resData);
}
