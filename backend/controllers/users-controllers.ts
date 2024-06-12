import { Request, Response } from "express";
import connectDatabase from "../server";

const createUser = async (req: Request, res: Response) => {
  await connectDatabase();
};
