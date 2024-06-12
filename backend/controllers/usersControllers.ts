import { Request, Response } = require("express");
import connectDatabase from "../server";

export const createUser = async (req: Request, res: Response) => {
  await connectDatabase();
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Email and password are required");
      return;
    }

    // Assuming you have a User model
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).send(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

