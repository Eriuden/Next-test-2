import { Signika_Negative } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
// import signIn signOut from "next-auth/client"
// Oui, il y a des fonctions co et déco déjà toutes prêtes dans next !

export const Header = () => {
  return (
    <div className='layout-header'>
      <ul>
        <li>
          <Link href="/api/auth/signin">
            <a onClick={e => {
              e.preventDefault()
              SignIn()
            }}>Connexion</a>
          </Link>
        </li>

        <li>
          <Link href="/api/auth/signout">
            <a onClick={e => {
              e.preventDefault()
              SignOut()
            }}>Déconnexion</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
