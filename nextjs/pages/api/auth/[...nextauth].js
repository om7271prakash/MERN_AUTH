import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

export const nextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'email',
            name: 'Email',
            credentials: {
                username: { 
                    label: "Username", 
                    type: "text", 
                    placeholder: "jsmith" 
                },
                password: {  
                    label: "Password", 
                    type: "password" 
                }
            },
            async authorize(credentials, req) {
                // console.log("credentials >>>> ", credentials);

            //   const res = await fetch("/api/hello", {
            //     method: 'POST',
            //     body: JSON.stringify(credentials),
            //     headers: { "Content-Type": "application/json" }
            //   })
            //   const user = await res.json()
              
              if (credentials?.username) {
                return credentials
              }
              throw new Error(JSON.stringify({data: "testing"}))
            }
        }),
        CredentialsProvider({
            id: 'whatsapp',
            name: 'Whatsapp',
            credentials: {
                phone: { 
                    label: "Phone Number", 
                    type: "number", 
                    placeholder: "Phone Number" 
                }
            },
            async authorize(credentials, req) {
              
            //   const res = await fetch("/api/hello", {
            //     method: 'POST',
            //     body: JSON.stringify(credentials),
            //     headers: { "Content-Type": "application/json" }
            //   })
            //   const user = await res.json()
              
              if (credentials?.phone) {
                return credentials
              }
              return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            // console.log("token >>> ", token);
            // console.log("user >>>", user);
            if(user){
                return user;
            }
            return token;
        },
        async session({ session, token, user }) {

            if(!session.user.name){
                session.user.name = token.username;
            }
            if(!session.user.email){
                session.user.email = token.username;
            }

            const encodedToken = await jwt.sign(token, process.env.NEXTAUTH_SECRET)

            session.token = encodedToken;

            return session
        },
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    pages: {
        signIn: '/signin',
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        encription: true,
        // The maximum age of the NextAuth.js issued JWT in seconds.
        // Defaults to `session.maxAge`.
        maxAge: 60 * 60 * 24 * 30,
        async encode({ secret, token }) {
            return jwt.sign(token, secret)
        },
        async decode({ secret, token }) {
            return jwt.verify(token, secret)
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(nextAuthOptions);