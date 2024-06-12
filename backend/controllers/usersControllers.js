const { User } = require("../models/User");
const connectDatabase = require("../server");

const createUser = async (req, res) => {
  try {
    console.log("hello");
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

module.exports = createUser;
