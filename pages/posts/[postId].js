import React from 'react'

export const [postId] = ({post}) => {
  return (
    <div>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
    </div>
    
  )
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { postId: "1"},
            },
            {
                params: { postId: "2"},
            },
            {
                params: { postId: "3"},
            },
        ],
        fallback: false,
    }
}

// Ici, le params stocke l'id du post pour le routage
// Dans l'exemple d'ici on parle de pages statiques qu'on a générés

export async function getStaticsProps(context){
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    
    return {
        props: {
            post: data,
        },
    }
}
    

