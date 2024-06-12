import connectDatabase from "../server";
const createUser = async (email: string, password: string) => {
  await connectDatabase();
};
