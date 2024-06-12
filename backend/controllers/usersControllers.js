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
  } catch (err) {}
};
