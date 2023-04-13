//import nextAuth

export const nextAuth = () => ({
    providers: [
        Providers.GitHub({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET,
        }),
    ],
    database: process.env.DB_URL,
    session: {
        jwt: true
    },
    jwt: {
        secret:"sfqsdegsgdh",
    },
    callbacks: {
        async jwt(token, user) {
            if(user){
                token.id = user.id 
            }
            return token 
        },
        async session(session, token) {
            session.user.id = token.id 
            return session
        },
    },
})
