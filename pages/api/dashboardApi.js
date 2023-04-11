//import getSession
//getSession renvoie une promesse nulle si il n'y a pas de session
/*
    UseEffect va donc afficher selon le résultat de getSession, si rien
    Il nous envoie nous connecter, sinon, on stoppe le loading
    Enfin, on appelle securePage pour que UseEffect puisse la lancer
*/ 
import { useState,useEffect } from "react"

export const dashboardApi = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const securePage = async() => {
            const session = await getSession()
            if(!session) {
                SignIn()
            } else {
                setLoading(false)
            }
        }
        securePage()
    }, [])

    if (loading) {}

  return (
    <div>
        <h1>Dashboard</h1>
    </div>
  )
}

