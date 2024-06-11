import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"



export const authOptions = NextAuth({

session:{
  strategy: "jwt"
},
  providers:[
    CredentialsProvider({
      name: "Credentials",
      credentials:{
        email: {label: "Email",type: "email"}
      }
    })
  ],
  pages:{
    signIn: "/auth/signin"
  }
})