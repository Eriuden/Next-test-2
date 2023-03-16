import Link from 'next/link'
import React from 'react'

export const postList = ({posts}) => {

  return (
    <div>
        {
            posts.map((post)=> {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref></Link>
                        <h2>{post.id} {post.title}</h2>
                    </div>
                )
            })
        }
    </div>
    
  )
}

export async function getStaticsProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}
