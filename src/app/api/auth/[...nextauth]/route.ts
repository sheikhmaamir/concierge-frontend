import NextAuth from "next-auth";
import { nextAuthOptions } from "../../../../lib/config/auth/next-auth.config";

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
