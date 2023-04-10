import React from 'react'

export const [blogId] = () => {
  return (
    <div>
      <h1>
         {process.env.DB_USER} {process.env.DB_PASSWORD}
      </h1>
    </div>
  )
}

export async function getServerSideProps() {
  const user= process.env.DB_USER
  const password = process.env.DB_PASSWORD


    return {
        props: {
            title: "Article Title",
            description: "Article description",
        },
    }
}
