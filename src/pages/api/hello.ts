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

  const Kitten =
    mongoose.models.Kitten || mongoose.model("Kitten", kittySchema);
  const silence = new Kitten({ name: "Dog", age: 33 });

  const user = process.env.MONGO_USER;
  const pass = process.env.MONGO_PASS;
  const uri = `mongodb+srv://${user}:${pass}@cluster0.bcacmvv.mongodb.net/test?retryWrites=true&w=majority`;
  await mongoose.connect(uri).catch((err) => console.error(err));
  await silence.save();
  mongoose.connection.close();

  console.log(req);
  res.status(200).json({ name: "John Doe" });
}
