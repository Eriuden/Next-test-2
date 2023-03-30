import React from 'react'
import { useState } from 'react'

export const indexComments = () => {

  const [comments, setComments] = useState([])
  const fetchComments = async () => {
    const response = await fetch("/api/comments")
    const data = await response.json()
    setComments(data)
  }
  return (
    <div>
        <button onClick={fetchComments}>Charger les commentaires</button>
        { comments.map(comment => {
            return (
                <div key={comment.id}>
                    {comment.text}
                </div>
            )
        })}
    </div>
  )
}