import React from 'react'

export const [blogId] = () => {
  return (
    <div>[blogId]</div>
  )
}

export async function getServerSideProps() {
    return {
        props: {
            title: "Article Title",
            description: "Article description",
        },
    }
}
