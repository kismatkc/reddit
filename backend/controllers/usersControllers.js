import Post from "../models/Post";
import connectDatabase from "../server";

export const createUser = async (req, res) => {
  await connectDatabase();
  try {
    const { email, password } = req.body;
    const newUser = await Post({
      email,
      password,
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {}
};
