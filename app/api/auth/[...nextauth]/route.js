import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // For demo → simple fake login
        if (
          credentials.email === "test@ecowatt.com" &&
          credentials.password === "password"
        ) {
          return { id: "1", name: "Test User", email: "test@ecowatt.com" };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
});

export { handler as GET, handler as POST };
