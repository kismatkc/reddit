const { User } = require("../models/User");
const { connectDatabase } = require("../server");

export const createUser = async (req, res) => {
  await connectDatabase();
  try {
    const { email, password } = req.body;
    const newUser = await User({
      email,
      password,
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send(error);
  }
};
