import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // 🔐 Session configuration
  session: {
    strategy: "jwt", // This ensures JWT is used instead of database sessions
  },

  // 🔑 Secret for signing JWTs and cookies
  secret: process.env.NEXTAUTH_SECRET,

  // 🧠 Optional: custom callbacks
  callbacks: {
    async session({ session, token }) {
      // Attach token fields to the session object
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token}) {
      return token;
    },
  },

  // ✅ Optional: enable debug for development
  debug: true,
});
