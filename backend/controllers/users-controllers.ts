import { Request, Response } from "express";
import connectDatabase from "../server";

const createUser = async (req: Request, res: Response) => {
  await connectDatabase();
  try {
  } catch (err) {
    console.log(err);
  }
};
