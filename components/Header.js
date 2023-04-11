import { Signika_Negative } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
// import signIn signOut from "next-auth/client"
// import useSession
// Oui, il y a des fonctions co et déco déjà toutes prêtes dans next !
// useSession marche ici pour vérifier si l'user est co, très pratique !

export const Header = () => {
  const [session, loading] = useSession()
  return (
    <div className='layout-header'>
      <ul className={`main-nav ${!session && loading ? `loading` : `loaded`}`}>

        {!loading && !session && (
          <li>
          <Link href="/api/auth/signin">
            <a onClick={e => {
              e.preventDefault()
              SignIn()
            }}>Connexion</a>
          </Link>
        </li>
        )}
      
        {session && (
          <li>
            <Link href="/api/auth/signout">
              <a onClick={e => {
                e.preventDefault()
                SignOut()
              }}>Déconnexion</a>
            </Link>
          </li>
        )}

        
      </ul>
    </div>
  )
}
