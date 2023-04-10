//import nextAuth

export const nextAuth = () => {
    providers: [
        Providers.GitHub({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        })
    ]
 
}
