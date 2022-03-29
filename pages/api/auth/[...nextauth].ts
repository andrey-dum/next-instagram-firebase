import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";



export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
//   debug: true,
  

  pages: {
      signIn: "/auth/signin",
      error: '/auth/signin',
  },

//   theme: {
//       logo: "https://links.papareact.com/sq8",
//       brandColor: "#f13287",
//       colorScheme: "auto",
//   }
})