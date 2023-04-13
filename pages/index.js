//import {Provider}
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
//import useSession


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [session, loading] = useSession()

  const router = useRouter()

  /* Par ce système, on ajoute la string à l'url 
    On peut donc diriger par le click à divers endroits du site
    On peut aussi utiliser replace au lieu de push
  */
  const handleClick = () => {
    router.push("/product")
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
        <h1>
          {session ? `${session.user.name}` : ""}
        </h1>

        <Link href="/blog">
          Blog
        </Link>

        <Link href="/product">
          Produits
        </Link>

        <Link href="/users">
          <a>
            Utilisateurs
          </a>  
        </Link>

        <Link href="/posts">
          <a>
            Posts
          </a>  
        </Link>

        <button onClick={handleClick}>
          Commander
        </button>
      </main>
    </>
  )
}
