import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import connectDatabase from "@/backend/server";
import User from "@/backend/models/User";

const authOptions = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials) {
        await connectDatabase();
        const user = await User.findOne({ email: credentials.email });
        if (user && (await user.comparePassword(credentials.password))) {
          return { email: user.email, id: user._id };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
});

export default authOptions;
