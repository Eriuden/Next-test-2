import React from 'react'
import { useRouter } from 'next/router'

export const [postId] = ({post}) => {
    const router= useRouter()

    if (router.isFallback){
        return (
            <h1>Loading...</h1>
        )
    }
    

  return (
    <div>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
    </div>
    
  )
}

//cette fonction va être rendered en html par celle en dessous au moment de l'affichage
export async function getStaticPaths() {

    const response =  fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data =  response.json()

    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    //blocking sert à ne pas mettre le loading et directement afficher la page, ça peut pour certaines config être préférables
    
    return {
        
        paths,
        fallback: "blocking",
    }
}

// Ici, le params stocke l'id du post pour le routage
// Dans l'exemple d'ici on parle de pages statiques qu'on a générés

export async function getStaticsProps(context){
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    if(!data.id) {
        return {
            notFound:true,
        }
    }
    
    return {
        props: {
            post: data,
        },
    }
}
    

