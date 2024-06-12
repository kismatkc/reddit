import connectDatabase from "../server";
const createUser = async (req, res) => {
  await connectDatabase();
};
