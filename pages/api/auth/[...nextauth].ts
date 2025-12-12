import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "../../../src/lib/mongoose";
import { User } from "../../../models/User";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        await connectToDB();

        const user = await User.findOne({ email: credentials.email.toLowerCase() });
        if (!user) return null;

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;

        // NextAuth expects an object with at least an id or name or email
        return { id: user._id.toString(), email: user.email, name: user.name, role: user.role };
      },
    }),
  ],

  session: {
    strategy: "jwt", // ساده و بدون نیاز به adapter
    maxAge: 30 * 24 * 60 * 60, // یک ماه
  },

  jwt: {
    // می‌تونی تنظیمات دلخواه بذاری
  },

  callbacks: {
    async jwt({ token, user }) {
      // وقتی لاگین اولیه هست، user اضافه میشه
      if (user) {
        token.id = (user as any).id || (user as any)._id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as any;
        session.user.role = token.role as any;
      }
      return session;
    },
  },

  pages: {
    // اگر می‌خوای صفحات لاگین سفارشی داشته باشی
    // signIn: "/auth/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});
