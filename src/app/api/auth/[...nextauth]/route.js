import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  // Configure one or more auth providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
