const { Request, Response } = require("express");
import connectDatabase from "../server";

export const createUser = async (req: Request, res: Response) => {
  await connectDatabase();
  try {
    const { email, password } = req.body;
  } catch (err) {
    console.log(err);
  }
};

import { Request, Response } from "express";
import connectDatabase from "../server"; // Adjust the import path as needed

export const createUser = async (req: Request, res: Response) => {
  await connectDatabase();
  try {
    const { email, password } = req.body; // Correctly accessing the request body

    // Proceed with user creation logic, for example:
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
