const { Request, Response } = require("express");
import connectDatabase from "../server";

export const createUser = async (req: Request, res: Response) => {
  await connectDatabase();
  try {
  } catch (err) {
    console.log(err);
  }
};