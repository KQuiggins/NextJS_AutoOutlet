import connectDb from "@/config/db";
import User from "@/models/User";

import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoke on successful sign in
    async signIn({ profile }) {
      // 1. Connect to database
      await connectDb();
      // 2. Check if user exists in database
      const userExist = await User.findOne({ email: profile.email });
      // 3. If not create user
      if (!userExist) {
        // Truncate user name if too long
        const username = profile.name.slice(0, 20);

        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      // 4. Return true to allow sign in
      return true;
    },
  },
  // Modifies session object
  async session({ session }) {
    // 1. Get user from database
    const user = await User.findOne({ email: session.user.email });
    // 2. Add user id to session
    session.user.id = user._id.toString();
    console.log(session.user.id);
    // 3. Return session object
    return session;
  },
};
