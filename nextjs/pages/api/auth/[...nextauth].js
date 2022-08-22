import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              
            //   const res = await fetch("/api/hello", {
            //     method: 'POST',
            //     body: JSON.stringify(credentials),
            //     headers: { "Content-Type": "application/json" }
            //   })
            //   const user = await res.json()
              
              if (credentials.username) {
                return credentials
              }
              return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log("signIn >>> ", user)
            return true
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if(user){
                return user;
            }
            return token;
        },
        async session({ session, token, user }) {

            session.token = token;
            session.user.name = token.username;
            session.user.email = token.username;
            
            console.log("session >>>>", session)

            return session
        },
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        encription: true,
    },
    secret: process.env.NEXTAUTH_SECRET,
})