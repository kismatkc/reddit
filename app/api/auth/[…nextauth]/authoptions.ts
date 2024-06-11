import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import connectDatabase from "@/backend/server";
import User from "@/backend/models/User";

export const authOptions = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDatabase();
        const user = await User.findOne({ email: credentials.email });
        if (user && (await user.comparePassword(credentials.password))) {
          // Return only the email if you don't need the id
          return { email: user.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
