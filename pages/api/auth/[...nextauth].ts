import NextAuth, { Awaitable, Session } from "next-auth"
import GoogleProvider from "next-auth/providers/google";



export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
//   debug: true,
  

  pages: {
      signIn: "/auth/signin",
      error: '/auth/signin',
  },

//   callbacks: {
//       async session({ session, token, user }) {
//         session.user.username = session.user.username
//         .split(" ")
//         .join("")
//         .toLocaleLowerCase()

//         session.user.uid = token.sub
//         return session
//       }
//   }

//   theme: {
//       logo: "https://links.papareact.com/sq8",
//       brandColor: "#f13287",
//       colorScheme: "auto",
//   }
})