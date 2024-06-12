import connectDatabase from "../server";

export const createUser = async (req, res) => {
  await connectDatabase();
  try {
    const { email, password } = req.body;
  } catch (err) {}
};
