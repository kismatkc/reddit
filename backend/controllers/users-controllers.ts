import { Requst, Response } from "express";
import connectDatabase from "../server";

const createUser = async (req: Reqest, res) => {
  await connectDatabase();
};
