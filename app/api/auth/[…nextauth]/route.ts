import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import 

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
    },
  
  async authorize(credentials){
    
  }
  ),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
