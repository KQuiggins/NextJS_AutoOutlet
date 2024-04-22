import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    access_type: 'offline',
                    prompt: 'consent',
                    response_type: 'code',
                },
            }
        }),
    ],
    callbacks: {
        // Invoke on successful sign in
        async signIn({ profile }) {},
        // 1. Connect to database
        // 2. Check if user exists in database
        // 3. If not create user
        // 4. Return true to allow sign in
    },
    // Modifies session object
    async session({ session }) {
        // 1. Get user from database
        // 2. Add user to session
        // 3. Return session object
    }
}

